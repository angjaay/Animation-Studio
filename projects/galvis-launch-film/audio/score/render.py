"""Sampler: plays the composed score from University of Iowa MIS recordings and writes audio/out/music.wav.

Usage (from the project dir):  $AUDIO_PY audio/score/render.py
Recordings are read from <assets>/iowa/<folder>/<note>.flac (48 kHz, trimmed to the attack - 5 ms; note names like
D4, F#4 or Fs4; unpitched folders may hold any one file). <assets> is the `assets` argument, else $AUDIO_ASSETS,
else audio/assets (filled by audio/fetch.py). A note plays the nearest recording of its instrument, resampled by at
most +-2 semitones; anything further is an error that lists every missing recording.

Signal path: each note -> its voice's envelope and pan -> one bus per stretch between stop-downs -> a stereo room
(seeded noise impulse) -> side high-passed at 120 Hz -> the bus is cut to silence at its stop-down -> sum -> 0.8 s
fade at the end -> normalised to -20 LUFS (the mix sets the final level) with peaks under -1 dBFS -> 24-bit WAV.
Deterministic: no clock, seeded noise, notes in a fixed order.
"""
import os
import sys
from fractions import Fraction
from pathlib import Path
from typing import NamedTuple, Optional, Union

import numpy as np
import pyloudnorm
import soundfile as sf
from scipy.signal import butter, fftconvolve, resample_poly, sosfilt

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


class Voice(NamedTuple):
    folder: str                        # under <assets>/iowa/
    low: Optional[str] = None          # playable range; None = unpitched
    high: Optional[str] = None
    pan: Union[float, tuple] = 0.0     # -1 left .. 1 right, or (low, high) spread across the range
    attack: float = 0.0                # extra fade-in after the attack, s (0 keeps the recorded attack)
    release: float = 0.3               # fade after the note's duration, s (never shorter than 10 ms)
    swell: bool = False                # crescendo from silence over the note's duration
    trim: float = 0.0                  # dB, balance between instruments


# The one table from the score's voices to the recordings. Ranges are what audio/sources.json fetches.
VOICES = {
    'piano':             Voice('piano', 'D2', 'D6', pan=(-0.3, 0.3), release=0.35),
    'cello_arco':        Voice('cello_arco', 'D2', 'A4', pan=-0.35, attack=0.08, release=0.45),
    'cello_arco_soft':   Voice('cello_arco', 'D2', 'A4', pan=-0.35, attack=0.5, release=0.6),
    'cello_arco_swell':  Voice('cello_arco', 'D2', 'A4', pan=-0.35, release=0.03, swell=True),
    'cello_pizz':        Voice('cello_pizz', 'D2', 'A4', pan=-0.25, release=0.12),
    'bass_arco':         Voice('bass_arco', 'D1', 'A2', pan=0.0, attack=0.06, release=0.5, trim=1.0),
    'bass_arco_soft':    Voice('bass_arco', 'D1', 'A2', pan=0.0, attack=0.6, release=0.7, trim=1.0),
    'bass_arco_swell':   Voice('bass_arco', 'D1', 'A2', pan=0.0, release=0.03, swell=True, trim=1.0),
    'violin_arco':       Voice('violin_arco', 'D4', 'A5', pan=0.4, attack=0.08, release=0.45, trim=-2.0),
    'violin_arco_soft':  Voice('violin_arco', 'D4', 'A5', pan=0.4, attack=0.5, release=0.6, trim=-2.0),
    'violin_arco_swell': Voice('violin_arco', 'D4', 'A5', pan=0.4, release=0.03, swell=True, trim=-2.0),
    'vibraphone':        Voice('vibraphone', 'D4', 'A5', pan=(-0.6, 0.6), release=0.5),
    'crotales':          Voice('crotales', 'A5', 'F#6', pan=(-0.7, 0.7), release=1.0, trim=-4.0),
    'bells':             Voice('bells', 'A4', 'F#5', pan=(-0.4, 0.4), release=1.2, trim=-1.0),
    'gong':              Voice('gong', pan=0.0, release=1.5),
    'cymbal_roll_swell': Voice('cymbal_roll', pan=0.0, release=0.03, swell=True, trim=-4.0),
    'cymbal_crash':      Voice('cymbal_crash', pan=0.0, release=1.2, trim=-5.0),
    'bass_drum':         Voice('bass_drum', pan=0.0, release=0.8, trim=2.0),
}


def assets_root(assets=None):
    return Path(assets or os.environ.get('AUDIO_ASSETS') or PROJECT / 'audio' / 'assets')


# ------------------------------------------------------------------ recordings
def scan(folder):
    """{midi: path} for the note-named files in a folder (unparseable names are skipped)."""
    found = {}
    for p in sorted(folder.glob('*.flac')):
        try:
            found.setdefault(midi(p.stem), p)
        except ValueError:
            pass
    return found


def resolve(notes, assets=None):
    """{(folder, pitch): (path, semitones)} for every note, or FileNotFoundError listing all that are missing."""
    root = assets_root(assets) / 'iowa'
    plan, missing, scans = {}, {}, {}
    for inst, pitch in sorted({(n.inst, n.pitch or '') for n in notes}):
        v = VOICES[inst]
        folder = root / v.folder
        if v.folder not in scans:
            scans[v.folder] = (scan(folder), sorted(folder.glob('*.flac'))) if folder.is_dir() else ({}, [])
        pitched, files = scans[v.folder]
        key = (v.folder, pitch or None)
        if key in plan:
            continue
        if not pitch:
            if files:
                plan[key] = (files[0], 0)
            else:
                missing.setdefault(folder, [])
            continue
        want = midi(pitch)
        near = sorted(pitched, key=lambda m: (abs(m - want), -m))
        if near and abs(near[0] - want) <= MAX_SHIFT:
            plan[key] = (pitched[near[0]], want - near[0])
        else:
            missing.setdefault(folder, []).append(pitch)
    if missing:
        lines = []
        for folder, pitches in sorted(missing.items()):
            have = ', '.join(note_name(m) for m in sorted(scans[folder.name][0])) or 'nothing'
            want = (', '.join(sorted(set(pitches), key=midi)) + f' (within {MAX_SHIFT} semitones)' if pitches
                    else 'any one recording')
            lines.append(f'{folder}: needs {want}; has {have}')
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
    if length is None:
        length = max(n.t + n.dur + VOICES[n.inst].release for n in notes) + 1.0
    total = int(round(length * SR))
    holes = sorted(holes)
    buses = [np.zeros((total, 2)) for _ in range(len(holes) + 1)]
    cache = {}
    for note in sorted(notes, key=lambda n: (n.t, n.inst, n.pitch or '', n.vel, n.dur)):
        v = VOICES[note.inst]
        path, semis = plan[(v.folder, note.pitch)]
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


def report(x):
    """Integrated loudness, peak, the loudest 3 s over integrated, stereo width (side under mid)."""
    meter = pyloudnorm.Meter(SR)
    lufs = meter.integrated_loudness(x)
    w, hop = 3 * SR, SR // 2
    windows = [(meter.integrated_loudness(x[i:i + w]), i / SR) for i in range(0, len(x) - w + 1, hop)]
    top, at = max(windows)
    mid, side = (x[:, 0] + x[:, 1]) / 2, (x[:, 0] - x[:, 1]) / 2
    width = 10 * np.log10((side ** 2).mean() / (mid ** 2).mean())
    return (f'{len(x) / SR:.3f} s, {lufs:.2f} LUFS, peak {20 * np.log10(np.abs(x).max()):.2f} dBFS, loudest 3 s '
            f'{top - lufs:+.1f} LU at {at:.1f} s, side {width:.1f} dB under mid')


def main(assets=None):
    cues = load_cues()
    notes = compose(cues)
    out = render(notes, holes=stopdowns(cues), assets=assets, length=cues['total'] / cues['fps'])
    path = PROJECT / 'audio' / 'out' / 'music.wav'
    write(out, path)
    print(f'{path.relative_to(PROJECT)}: {len(notes)} notes, {report(out)}')


if __name__ == '__main__':
    try:
        main()
    except FileNotFoundError as err:
        sys.exit(str(err))
