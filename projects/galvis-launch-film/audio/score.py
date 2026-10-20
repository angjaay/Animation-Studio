"""Temporary score for the animatic, synthesised from cues.json (120 BPM, D major).

Usage: python3 audio/score.py
Writes audio/temp-score.wav (48 kHz stereo 16-bit, gitignored, used by the tests) and
audio/temp-score.m4a (AAC 192 kbps, committed, used by index.html).
Requires: pip install numpy pyloudnorm
"""
import json
import subprocess
import wave
from pathlib import Path

import numpy as np
import pyloudnorm

ROOT = Path(__file__).resolve().parent.parent
CUES = json.loads((ROOT / 'cues.json').read_text())
RATE = 48000
DUR = CUES['duration']
BAR = CUES['barSeconds']
BEAT = BAR / 4
N = int(round(DUR * RATE))
RNG = np.random.default_rng(7)

# Pitches (Hz)
D1, D2, A2, D3, F3, A3 = 36.71, 73.42, 110.0, 146.83, 185.0, 220.0
D4, E4, Fs4, A4, B4, D5, Fs5 = 293.66, 329.63, 369.99, 440.0, 493.88, 587.33, 739.99
LOGO = {'workspace': A4, 'enrichment': D5, 'enterprise': Fs5}


def bar(n, beat=0.0):
    return (n - 1) * BAR + beat * BEAT


def clock(n):
    return np.arange(n) / RATE


def place(bus, t0, sig, gain=1.0):
    i = int(round(t0 * RATE))
    j = min(N, i + len(sig))
    if i < N and j > i:
        bus[i:j] += gain * sig[: j - i]


def env_ad(n, attack, decay):
    t = clock(n)
    return np.minimum(1.0, t / max(attack, 1e-4)) * np.exp(-t / decay)


def fade(n, fin, fout):
    e = np.ones(n)
    a, b = int(fin * RATE), int(fout * RATE)
    if a:
        e[:a] = np.linspace(0, 1, a)
    if b:
        e[-b:] = np.minimum(e[-b:], np.linspace(1, 0, b))
    return e


def tone(freqs, seconds, amps=None, detune=0.0):
    t = clock(int(seconds * RATE))
    amps = amps or [1.0] * len(freqs)
    return sum(a * np.sin(2 * np.pi * f * (1 + detune * k) * t) for k, (f, a) in enumerate(zip(freqs, amps)))


def highpass(x):
    return np.diff(x, prepend=0.0)


# --- instruments -------------------------------------------------------------

def drone(seconds):
    s = tone([D1, D2, A2, D3], seconds, [0.5, 0.6, 0.25, 0.12], detune=0.0015)
    t = clock(len(s))
    return s * (0.85 + 0.15 * np.sin(2 * np.pi * 0.11 * t))


def pad(seconds, freqs=(D2, A2, D3, F3, A3)):
    s = tone(list(freqs), seconds, [0.5, 0.35, 0.3, 0.22, 0.18], detune=0.002)
    return s * fade(len(s), 0.8, 0.8)


def tick(length=0.015):
    n = int(length * RATE)
    return highpass(RNG.standard_normal(n)) * env_ad(n, 0.0005, length / 4)


def hat():
    n = int(0.05 * RATE)
    return highpass(highpass(RNG.standard_normal(n))) * env_ad(n, 0.0005, 0.012)


def kick():
    n = int(0.35 * RATE)
    t = clock(n)
    f = 45 + 75 * np.exp(-t / 0.04)
    return np.sin(2 * np.pi * np.cumsum(f) / RATE) * env_ad(n, 0.001, 0.12)


def riser(seconds):
    n = int(seconds * RATE)
    t = clock(n)
    ramp = (t / seconds) ** 2
    f = 180 + 1100 * ramp
    sweep = np.sin(2 * np.pi * np.cumsum(f) / RATE)
    noise = highpass(RNG.standard_normal(n)) * 0.6
    return (sweep * 0.5 + noise) * ramp


def impact():
    n = int(1.4 * RATE)
    t = clock(n)
    hit = highpass(RNG.standard_normal(n)) * env_ad(n, 0.0005, 0.05)
    sub = np.sin(2 * np.pi * np.cumsum(D1 * 1.6 * np.exp(-t / 0.6) + D1 * 0.6) / RATE) * env_ad(n, 0.002, 0.5)
    return hit * 0.9 + sub * 1.4


def bell(f, tail=1.5):
    n = int((tail + 0.2) * RATE)
    t = clock(n)
    parts = [(1.0, 1.0, tail), (2.0, 0.4, tail * 0.5), (3.01, 0.18, tail * 0.3), (4.2, 0.08, tail * 0.2)]
    return sum(a * np.sin(2 * np.pi * f * m * t) * env_ad(n, 0.002, d) for m, a, d in parts)


def reverb(x, mix=0.25):
    out = x.copy()
    for delay, fb in ((0.037, 0.45), (0.053, 0.4), (0.079, 0.35), (0.113, 0.3)):
        d = int(delay * RATE)
        y = np.zeros_like(x)
        y[d:] = x[:-d]
        for _ in range(4):
            shifted = np.zeros_like(y)
            shifted[d:] = y[:-d] * fb
            y = y + shifted
        out += mix * 0.25 * y
    return out


# --- arrangement -------------------------------------------------------------

def arrange():
    music = np.zeros(N)   # gated by stop-downs
    hits = np.zeros(N)    # impacts land after the gate

    place(music, 0.0, drone(24.0) * fade(int(24 * RATE), 0.05, 1.0), 0.5)

    for k in range(int((24 - 12) / (BEAT / 2))):          # pulse: 8th-note ticks from bar 7
        place(music, 12 + k * BEAT / 2, tick(), 0.18)
    for k in range(int((24 - 14) / BEAT)):                 # kick on every beat from 14 s
        place(music, 14 + k * BEAT, kick(), 0.55)
    place(music, 20.0, riser(3.5), 0.35)

    place(music, 24.0, pad(10.0), 0.25)
    place(music, bar(14), bell(D3, 2.5), 0.35)               # Core root note

    for k in range(int((52 - 34) / BEAT)):                 # main groove, act 04
        place(music, 34 + k * BEAT, kick(), 0.5)
    for k in range(int((52 - 34) / (BEAT / 2))):
        place(music, 34 + k * BEAT / 2, hat(), 0.12)
    for k in range(24):                                     # the question being typed, bar 19
        place(music, bar(19) + k * 0.06, tick(0.008), 0.08)
    for k, f in enumerate((D4, E4, Fs4, A4, B4, D5)):       # one accent per module, bars 20-25
        place(music, bar(20 + k), bell(f, 1.0), 0.28)
    place(music, 34.0, pad(18.0, (D2, A2, D3)), 0.18)

    place(music, 52.0, pad(10.0), 0.22)
    place(music, 52.0, riser(3.5), 0.38)
    for k, key in enumerate(('workspace', 'enrichment', 'enterprise')):   # sonic logo, bar 30
        place(music, bar(30, k), bell(LOGO[key], 1.5), 0.55)

    for start, end, note, dense in ((62, 76, A4, False), (76, 90, D5, False), (90, 106, Fs5, True)):
        for k in range(int((end - start) / BEAT)):
            place(music, start + k * BEAT, kick(), 0.45)
        step = BEAT / 4 if dense else BEAT / 2
        for k in range(int((end - start) / step)):
            place(music, start + k * step, hat(), 0.1)
        for k in range(int((end - start) / (2 * BAR))):
            place(music, start + k * 2 * BAR, bell(note, 2.0), 0.3)
        place(music, start, pad(end - start, (D2, A2, D3)), 0.16)
    for t in (70.0, 71.0, 72.0, 73.0, 74.5):                 # agent steps completing
        place(music, t, tick(0.01), 0.15)

    place(music, 106.0, pad(6.0), 0.22)
    for k, f in enumerate((A4, D5, Fs5)):                    # products climb back
        place(music, bar(54, k), bell(f, 1.2), 0.45)
    for f in (D3, A4, D5, Fs5):                              # the full chord, bar 55
        place(music, bar(55), bell(f, 2.5), 0.3)

    place(hits, 112.0, impact(), 0.5)                        # sting
    for f in (D3, A4, D5, Fs5):
        place(music, 112.0, bell(f, 3.5), 0.32)
    place(music, 112.0, drone(8.0) * fade(int(8 * RATE), 0.3, 0.8), 0.3)

    for imp in CUES['impacts']:
        place(hits, imp['t'], impact(), 1.0)
    return music, hits


def gate(n):
    g = np.ones(n)
    ramp = int(0.02 * RATE)
    for imp in CUES['impacts']:
        a, b = int((imp['t'] - BEAT) * RATE), int(imp['t'] * RATE)
        g[a:b] = 0.0
        g[a - ramp:a] = np.minimum(g[a - ramp:a], np.linspace(1, 0, ramp))
    return g


def limit(x, ceiling):
    """Peak limiter: smooth gain reduction wherever |x| exceeds the ceiling."""
    peak = np.abs(x).max(axis=1)
    need = np.minimum(1.0, ceiling / np.maximum(peak, 1e-9))
    w = int(0.005 * RATE)
    kernel = np.ones(w) / w
    # hold the minimum gain over the window, then smooth it so the attack starts early
    held = np.minimum.reduce([np.roll(need, s) for s in range(-w, w + 1, max(1, w // 8))])
    g = np.convolve(held, kernel, mode='same')
    return x * np.minimum(g, need)[:, None]


def master(mono_music, mono_hits):
    g = gate(N)
    music = reverb(mono_music * g) * g  # gate again so reverb tails do not fill the stop-downs
    mono = music + reverb(mono_hits, 0.15)
    stereo = np.stack([mono * 0.98 + np.roll(mono, 240) * 0.02, mono * 0.98 + np.roll(mono, -240) * 0.02], axis=1)
    out = stereo * fade(N, 0.0, 0.8)[:, None]
    meter = pyloudnorm.Meter(RATE)
    ceiling = 10 ** (-1.2 / 20)
    for _ in range(4):
        gain = 10 ** ((-14.0 - meter.integrated_loudness(out)) / 20)
        out = limit(out * gain, ceiling)
    return out


def main():
    music, hits = arrange()
    out = master(music, hits)
    pcm = np.clip(np.round(out * 32767), -32768, 32767).astype('<i2')
    path = ROOT / 'audio' / 'temp-score.wav'
    with wave.open(str(path), 'wb') as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(RATE)
        w.writeframes(pcm.tobytes())
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(path), '-c:a', 'aac', '-b:a', '192k',
                    str(path.with_suffix('.m4a'))], check=True)
    meter = pyloudnorm.Meter(RATE)
    print(f'{path.name}: {len(pcm) / RATE:.3f} s, {meter.integrated_loudness(out):.2f} LUFS, peak {20 * np.log10(np.abs(out).max()):.2f} dBFS')


if __name__ == '__main__':
    main()
