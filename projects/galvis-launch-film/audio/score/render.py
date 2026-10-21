"""Sampler: plays the composed score from University of Iowa MIS recordings and writes audio/out/music.wav.

Usage (from the project dir):  $AUDIO_PY audio/score/render.py
        $AUDIO_PY audio/score/render.py --strict   (exit 1 when the loudest 3 s exceed the limit)
Recordings are read from <assets>/iowa/<folder>/<name>.flac (48 kHz, trimmed to the attack - 5 ms). Pitched files
end in a note name (D4, F#4, Fs4, brass-A5); VOICES says which folder, and which file names first, each voice plays.
<assets> is the `assets` argument, else $AUDIO_ASSETS, else audio/assets (filled by audio/fetch.py). A note plays the
nearest recording of its instrument, resampled by at most +-2 semitones; anything further is an error that lists
every missing recording. A voice marked optional (the bass drum) is left out, with a notice, when it has no recording.

Signal path: each note -> its voice's envelope and pan -> one bus per stretch between stop-downs -> a stereo room
(seeded noise impulse) -> side high-passed at 120 Hz -> the bus is cut to silence at its stop-down -> sum -> 0.8 s
fade at the end -> normalised to -20 LUFS (the mix sets the final level) with peaks under -1 dBFS -> 24-bit WAV.
Deterministic: no clock, seeded noise, notes in a fixed order.
"""
import argparse
import os
import re
import sys
from fractions import Fraction
from pathlib import Path
from typing import NamedTuple, Optional, Union

import numpy as np
import pyloudnorm
import soundfile as sf
from scipy.signal import butter, fftconvolve, lfilter, resample_poly, sosfilt

sys.path.insert(0, str(Path(__file__).resolve().parent))
from compose import compose, load_cues, midi, note_name, stopdowns  # noqa: E402

PROJECT = Path(__file__).resolve().parents[2]
SR = 48000
PREROLL = 0.005        # the recordings start 5 ms before their attack
MAX_SHIFT = 2          # semitones
TARGET_LUFS = -20.0
PEAK = 10 ** (-1 / 20)
END_FADE = 0.8
CUT = 0.015            # fade into a stop-down
ROOM_WET = 0.3
SOFT_VEL = 0.4         # notes below this play a voice's soft recordings (piano pp) when there are any
LOUDEST_3S = 4.0       # LU over integrated: the steady-body rule for the short-term loudness


class Voice(NamedTuple):
    folders: tuple                     # folder names under <assets>/iowa/, the first that exists is used
    low: Optional[str] = None          # playable range; None = unpitched
    high: Optional[str] = None
    pan: Union[float, tuple] = 0.0     # -1 left .. 1 right, or (low, high) spread across the range
    attack: float = 0.0                # extra fade-in after the attack, s (0 keeps the recorded attack)
    release: float = 0.3               # fade after the note's duration, s (never shorter than 10 ms)
    swell: bool = False                # crescendo from silence over the note's duration
    trim: float = 0.0                  # dB, balance between instruments
    files: tuple = ('*.flac',)         # file-name globs, earlier ones preferred (brass bells over plastic)
    soft: tuple = ()                   # folders for notes under SOFT_VEL, used when they exist
    optional: str = ''                 # if set: left out when no recording exists, and this says what remains


PIANO = dict(folders=('piano-mf', 'piano'), soft=('piano-pp',), low='D2', high='D6')
CELLO = dict(folders=('cello-arco', 'cello_arco'), low='D2', high='A4', pan=-0.35)
BASS = dict(folders=('bass-arco', 'bass_arco'), low='D1', high='A2', pan=0.0, trim=1.0)
VIOLIN = dict(folders=('violin-arco', 'violin_arco'), low='D4', high='A5', pan=0.4, trim=-2.0)

# The one table from the score's voices to the recordings (folder names as audio/fetch.py writes them; the
# underscore names are accepted too). Ranges are the notes the score may ask for.
VOICES = {
    'piano':             Voice(**PIANO, pan=(-0.3, 0.3), release=0.35),
    'cello_arco':        Voice(**CELLO, attack=0.08, release=0.45),
    'cello_arco_soft':   Voice(**CELLO, attack=0.5, release=0.6),
    'cello_arco_swell':  Voice(**CELLO, release=0.03, swell=True),
    'cello_pizz':        Voice(('cello-pizz', 'cello_pizz'), 'D2', 'A4', pan=-0.25, release=0.12),
    'bass_arco':         Voice(**BASS, attack=0.06, release=0.5),
    'bass_arco_soft':    Voice(**BASS, attack=0.6, release=0.7),
    'bass_arco_swell':   Voice(**BASS, release=0.03, swell=True),
    'violin_arco':       Voice(**VIOLIN, attack=0.08, release=0.45),
    'violin_arco_soft':  Voice(**VIOLIN, attack=0.5, release=0.6),
    'violin_arco_swell': Voice(**VIOLIN, release=0.03, swell=True),
    'vibraphone':        Voice(('vibraphone-sustain', 'vibraphone'), 'D4', 'A5', pan=(-0.6, 0.6), release=0.5),
    'crotales':          Voice(('crotales',), 'D6', 'A6', pan=(-0.7, 0.7), release=1.0, trim=-4.0),
    'bells':             Voice(('bells',), 'A4', 'F#5', pan=(-0.4, 0.4), release=1.2, trim=-1.0,
                               files=('brass-*.flac', '*.flac')),
    'gong':              Voice(('gongs', 'gong'), pan=0.0, release=1.5,
                               files=('tamtam40.flac', 'tamtam*[0-9].flac', 'tamtam*.flac', '*.flac')),
    'cymbal_roll_swell': Voice(('cymbals', 'cymbal_roll'), pan=0.0, release=0.03, swell=True, trim=-4.0,
                               files=('roll20-mallet.flac', 'roll*.flac')),
    'cymbal_crash':      Voice(('cymbals', 'cymbal_crash'), pan=0.0, release=1.2, trim=-5.0,
                               files=('crash18-viennese.flac', 'crash*.flac')),
    'bass_drum':         Voice(('bass-drum', 'bass_drum'), pan=0.0, release=0.8, trim=2.0,
                               optional='the impacts are gong + double bass, the sectors and heartbeats unaccented'),
}


def assets_root(assets=None):
    return Path(assets or os.environ.get('AUDIO_ASSETS') or PROJECT / 'audio' / 'assets')


# ------------------------------------------------------------------ recordings
NOTE_AT_END = re.compile(r'(?:^|[-_])([A-G](?:#|s|b)?\d)$')


def folder_of(root, voice, vel):
    """The folder a note plays from: the soft one for quiet notes when it exists, else the first that exists."""
    names = (voice.soft if vel < SOFT_VEL else ()) + voice.folders
    return next((root / n for n in names if (root / n).is_dir()), root / voice.folders[0])


def candidates(folder, voice):
    """The recordings a voice may use from a folder: {midi: path} if pitched, else [path] (preferred first)."""
    found = {} if voice.low else []
    for pattern in voice.files:
        for p in sorted(folder.glob(pattern)):
            if not voice.low:
                if p not in found:
                    found.append(p)
                continue
            m = NOTE_AT_END.search(p.stem)
            if m:
                found.setdefault(midi(m.group(1)), p)
    return found


def source_key(root, note):
    v = VOICES[note.inst]
    return (folder_of(root, v, note.vel), v.files, note.pitch)


def resolve(notes, assets=None):
    """{source key: (path, semitones) or None} for every note (None: an optional voice with no recording), or
    FileNotFoundError listing everything that is missing."""
    root = assets_root(assets) / 'iowa'
    plan, missing, found = {}, {}, {}
    for note in sorted(notes, key=lambda n: (n.inst, n.pitch or '', n.vel)):
        key = source_key(root, note)
        if key in plan:
            continue
        v = VOICES[note.inst]
        folder = key[0]
        if (folder, v.files) not in found:
            found[(folder, v.files)] = candidates(folder, v) if folder.is_dir() else ({} if v.low else [])
        have = found[(folder, v.files)]
        if not have and v.optional:
            plan[key] = None
        elif not note.pitch:
            if have:
                plan[key] = (have[0], 0)
            else:
                missing.setdefault((folder, v.files), [])
        else:
            want = midi(note.pitch)
            near = sorted(have, key=lambda m: (abs(m - want), -m))
            if near and abs(near[0] - want) <= MAX_SHIFT:
                plan[key] = (have[near[0]], want - near[0])
            else:
                missing.setdefault((folder, v.files), []).append(note.pitch)
    if missing:
        lines = []
        for (folder, files), pitches in sorted(missing.items()):
            got = found[(folder, files)]
            has = ', '.join(note_name(m) for m in sorted(got)) if isinstance(got, dict) else ', '.join(p.name for p in got)
            want = (', '.join(sorted(set(pitches), key=midi)) + f' (within {MAX_SHIFT} semitones)' if pitches
                    else 'one of ' + ' / '.join(files))
            lines.append(f'{folder}: needs {want}; has {has or "nothing"}')
        raise FileNotFoundError('missing Iowa MIS recordings (run audio/fetch.py, or set AUDIO_ASSETS):\n  '
                                + '\n  '.join(lines))
    return plan


def load(path):
    """A recording as (n, 2) floats at 48 kHz, normalised so its loudest 50 ms has an RMS of 0.25."""
    x, sr = sf.read(path, dtype='float64', always_2d=True)
    x = np.repeat(x[:, :1], 2, axis=1) if x.shape[1] == 1 else x[:, :2]
    if sr != SR:
        r = Fraction(SR, sr)
        x = resample_poly(x, r.numerator, r.denominator, axis=0)
    w = int(0.05 * SR)
    power = np.convolve((x ** 2).mean(axis=1), np.ones(w) / w, mode='valid') if len(x) > w else (x ** 2).mean(axis=1)
    loudest = np.sqrt(power.max()) if len(power) else 0.0
    return x * (0.25 / loudest) if loudest > 0 else x


def shift(x, semitones):
    """Resample to raise the pitch by `semitones` (and shorten accordingly); ratio exact to < 0.1 cent."""
    if not semitones:
        return x
    r = Fraction(2 ** (semitones / 12)).limit_denominator(128)
    return resample_poly(x, r.denominator, r.numerator, axis=0)


# ------------------------------------------------------------------ one note
def half_cosine(n, rising):
    ramp = 0.5 - 0.5 * np.cos(np.linspace(0.0, np.pi, n))
    return ramp if rising else ramp[::-1]


def play(x, dur, voice, vel, pre):
    """One note from a pitched recording x (pre = samples before its attack): held `dur` s, then released.

    The head fades in over the pre-roll (plus the voice's attack); the end always fades out over at least 10 ms
    (the release, or the recording's own end when it is shorter than the note)."""
    release = max(0.01, voice.release)
    n = min(len(x), pre + int(round((dur + release) * SR)))
    env = np.ones(n)
    head = min(n, pre + int(round(voice.attack * SR)))
    if head > 1:
        env[:head] *= half_cosine(head, True)
    if voice.swell:
        body = min(n - pre, int(round(dur * SR)))
        env[pre:pre + body] *= np.linspace(0.0, 1.0, body) ** 2
        env[:pre] = 0.0
    tail = min(n // 2, int(round(release * SR)))
    env[n - tail:] *= half_cosine(tail, False)
    amp = vel ** 1.5 * 10 ** (voice.trim / 20)
    return x[:n] * (env * amp)[:, None]


def pan_of(voice, pitch):
    if isinstance(voice.pan, tuple):
        lo, hi = midi(voice.low), midi(voice.high)
        return voice.pan[0] + (voice.pan[1] - voice.pan[0]) * (midi(pitch) - lo) / max(1, hi - lo)
    return voice.pan


def panned(y, pan):
    """Constant-power pan (balance, for stereo recordings)."""
    a = (pan + 1) * np.pi / 4
    return y * np.array([np.cos(a), np.sin(a)]) * np.sqrt(2)


# ------------------------------------------------------------------ the room and the buses
def room():
    """Stereo impulse: 18 ms pre-delay, decorrelated noise decaying to -60 dB in 2.2 s, darker as it decays."""
    rng = np.random.default_rng(2026)
    n = int(2.6 * SR)
    t = np.arange(n) / SR
    noise = rng.standard_normal((n, 2)) * np.exp(-6.91 * t / 2.2)[:, None]
    noise = sosfilt(butter(2, 6000, fs=SR, output='sos'), noise, axis=0)
    ir = np.concatenate([np.zeros((int(0.018 * SR), 2)), noise])
    return ir / np.sqrt((ir ** 2).sum(axis=0))


def reverb(bus, ir):
    send = sosfilt(butter(2, 150, 'highpass', fs=SR, output='sos'), bus.mean(axis=1))
    wet = np.stack([fftconvolve(send, ir[:, c])[:len(bus)] for c in range(2)], axis=1)
    wet[:np.argmax(send != 0)] = 0.0   # FFT round-off would otherwise leak ahead of the bus's first note
    return wet


def mono_lows(x):
    mid, side = (x[:, 0] + x[:, 1]) / 2, (x[:, 0] - x[:, 1]) / 2
    side = sosfilt(butter(4, 120, 'highpass', fs=SR, output='sos'), side)
    return np.stack([mid + side, mid - side], axis=1)


def render(notes, holes=(), assets=None, length=None):
    """Stereo 48 kHz float array of the notes. `holes` are (stop-down, impact) pairs: everything sounding before an
    impact is cut to silence at its stop-down. `length` in seconds (default: until the last release ends)."""
    plan = resolve(notes, assets)
    root = assets_root(assets) / 'iowa'
    left_out = sorted({n.inst for n in notes if plan[source_key(root, n)] is None})
    for inst in left_out:
        count = sum(n.inst == inst for n in notes)
        print(f'note: no {inst} recording in {root}/{VOICES[inst].folders[0]}; its {count} notes are left out '
              f'({VOICES[inst].optional})', file=sys.stderr)
    notes = [n for n in notes if n.inst not in left_out]
    if length is None:
        length = max(n.t + n.dur + VOICES[n.inst].release for n in notes) + 1.0
    total = int(round(length * SR))
    holes = sorted(holes)
    buses = [np.zeros((total, 2)) for _ in range(len(holes) + 1)]
    cache = {}
    for note in sorted(notes, key=lambda n: (n.t, n.inst, n.pitch or '', n.vel, n.dur)):
        v = VOICES[note.inst]
        path, semis = plan[source_key(root, note)]
        if (path, semis) not in cache:
            cache[(path, semis)] = shift(load(path), semis)
        x = cache[(path, semis)]
        pre = int(round(PREROLL * SR * 2 ** (-semis / 12)))
        y = play(x, note.dur, v, note.vel, pre)
        y = panned(y, pan_of(v, note.pitch) if note.pitch else v.pan)
        start = int(round(note.t * SR)) - pre
        a, b = max(0, start), min(total, start + len(y))
        if b > a:
            bus = buses[sum(note.t >= end for _, end in holes)]
            bus[a:b] += y[a - start:b - start]
    ir = room()
    out = np.zeros((total, 2))
    for k, bus in enumerate(buses):
        y = mono_lows(bus + ROOM_WET * reverb(bus, ir))
        if k < len(holes):
            cut = int(round(holes[k][0] * SR))
            ramp = int(CUT * SR)
            y[cut - ramp:cut] *= half_cosine(ramp, False)[:, None]
            y[cut:] = 0.0
        out += y
    fade = int(END_FADE * SR)
    out[-fade:] *= half_cosine(fade, False)[:, None]
    out *= 10 ** ((TARGET_LUFS - pyloudnorm.Meter(SR).integrated_loudness(out)) / 20)
    peak = np.abs(out).max()
    return out * (PEAK / peak) if peak > PEAK else out


def write(x, path):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    sf.write(str(path), x, SR, subtype='PCM_24', format='WAV')


def short_term(x, window=3.0, hop=0.1):
    """[(LUFS, start s)] over sliding windows: ungated BS.1770 loudness (K-weighting, channel powers summed), the
    EBU short-term measure when window = 3 s."""
    shelf = ([1.53512485958697, -2.69169618940638, 1.19839281085285], [1.0, -1.69065929318241, 0.73248077421585])
    highpass = ([1.0, -2.0, 1.0], [1.0, -1.99004745483398, 0.99007225036621])
    k = lfilter(*highpass, lfilter(*shelf, x, axis=0), axis=0)
    power = np.concatenate([[0.0], np.cumsum((k ** 2).sum(axis=1))])
    w, h = int(window * SR), int(hop * SR)
    starts = np.arange(0, len(x) - w + 1, h)
    mean = (power[starts + w] - power[starts]) / w
    return list(zip(-0.691 + 10 * np.log10(np.maximum(mean, 1e-12)), starts / SR))


def loudest(x):
    """(LU of the loudest 3 s over the integrated loudness, where it starts in s)."""
    top, at = max(short_term(x))
    return top - pyloudnorm.Meter(SR).integrated_loudness(x), at


def report(x):
    """Integrated loudness, peak, the loudest 3 s over integrated, stereo width (side under mid)."""
    lufs = pyloudnorm.Meter(SR).integrated_loudness(x)
    over, at = loudest(x)
    mid, side = (x[:, 0] + x[:, 1]) / 2, (x[:, 0] - x[:, 1]) / 2
    width = 10 * np.log10((side ** 2).mean() / (mid ** 2).mean())
    return (f'{len(x) / SR:.3f} s, {lufs:.2f} LUFS, peak {20 * np.log10(np.abs(x).max()):.2f} dBFS, loudest 3 s '
            f'{over:+.1f} LU at {at:.1f} s, side {width:.1f} dB under mid')


def main(argv=None, assets=None):
    args = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    args.add_argument('--strict', action='store_true', help=f'exit 1 if the loudest 3 s exceed {LOUDEST_3S} LU')
    strict = args.parse_args(argv).strict
    cues = load_cues()
    notes = compose(cues)
    out = render(notes, holes=stopdowns(cues), assets=assets, length=cues['total'] / cues['fps'])
    path = PROJECT / 'audio' / 'out' / 'music.wav'
    write(out, path)
    print(f'{path.relative_to(PROJECT)}: {len(notes)} notes, {report(out)}')
    over, at = loudest(out)
    if over > LOUDEST_3S:
        print(f'WARNING: loudest 3 s at {at:.1f} s is {over:+.1f} LU over integrated (limit {LOUDEST_3S:+.1f} LU): '
              'lower the velocities there', file=sys.stderr)
        return 1 if strict else 0
    return 0


if __name__ == '__main__':
    try:
        sys.exit(main())
    except FileNotFoundError as err:
        sys.exit(str(err))
