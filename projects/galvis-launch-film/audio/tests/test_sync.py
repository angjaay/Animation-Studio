"""Sync of the final soundtrack with the picture: the hits, the sonic logo, and the film plays this soundtrack.

Onsets are measured on audio/soundtrack.m4a as in scripts/sync-check.mjs: 5 ms energy hops, the onset is the hop with
the largest rise over the 50 ms before it, searched within 0.1 s of the cue. Times and pitches come from audio/cues.json.
Run from the project root:  audio/.venv/bin/python -m unittest discover -s audio/tests
"""
import json
import math
import re
import unittest
from pathlib import Path

import numpy as np

from test_soundtrack import CUES, FRAME, M4A, SR, decode

AUDIO = Path(__file__).resolve().parent.parent
PROJECT = AUDIO.parent
HOP = int(0.005 * SR)
NAMES = {'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11}


def cue_times(kind):
    return [(e['f'] / CUES['fps'], e) for e in CUES['events'] if e['kind'] == kind]


def hz(name):
    m = re.fullmatch(r'([A-G])(#?)(\d)', name)
    midi = 12 * (int(m.group(3)) + 1) + NAMES[m.group(1)] + (1 if m.group(2) else 0)
    return 440.0 * 2 ** ((midi - 69) / 12)


class TestSync(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.x = decode(M4A).astype(np.float64)
        mono = cls.x.mean(axis=1)
        n = len(mono) // HOP
        cls.energy = (mono[:n * HOP] ** 2).reshape(n, HOP).mean(axis=1)
        cls.mono = mono

    def onset(self, t):
        best, ratio = None, 0.0
        for h in range(round((t - 0.1) / 0.005), round((t + 0.1) / 0.005) + 1):
            r = self.energy[h] / (self.energy[h - 10:h].mean() + 1e-12)
            if r > ratio:
                best, ratio = h, r
        return best * 0.005

    def test_hits_land_on_their_frame(self):
        hits = [t for t, _ in cue_times('impact') + cue_times('sting')]
        self.assertEqual(sorted(hits), [24.0, 56.0, 112.5])
        for t in hits:
            self.assertLessEqual(abs(self.onset(t) - t), FRAME, f'hit {t}: onset {self.onset(t):.3f} s')

    def test_sonic_logo_bells_on_their_frames(self):
        bells = cue_times('bell')
        self.assertEqual([t for t, _ in bells], [58.0, 58.5, 59.0])
        for t, _ in bells:
            self.assertLessEqual(abs(self.onset(t) - t), FRAME, f'bell {t}: onset {self.onset(t):.3f} s')

    def new_spectrum(self, t, span=0.42, gap=0.03):
        """magnitude spectrum of what starts at t: |after| - |before| (Hann, zero-padded), and its frequency axis"""
        n = int(span * SR)
        w = np.hanning(n)
        size = 1 << 19
        after = np.abs(np.fft.rfft(self.mono[int((t + gap) * SR):][:n] * w, size))
        before = np.abs(np.fft.rfft(self.mono[int((t - gap) * SR) - n:int((t - gap) * SR)] * w, size))
        return np.clip(after - before, 0, None), np.fft.rfftfreq(size, 1 / SR)

    def test_sonic_logo_pitches_within_30_cents(self):
        for t, e in cue_times('bell'):
            spec, f = self.new_spectrum(t)
            target = hz(e['pitch'])
            band = (f > target * 2 ** (-1 / 12)) & (f < target * 2 ** (1 / 12))
            k = np.flatnonzero(band)[np.argmax(spec[band])]
            a, b, c = spec[k - 1], spec[k], spec[k + 1]
            peak = f[k] + 0.5 * (a - c) / (a - 2 * b + c) * (f[1] - f[0])
            cents = 1200 * math.log2(peak / target)
            self.assertLessEqual(abs(cents), 30.0, f'{e["pitch"]} at {t}: {peak:.1f} Hz ({cents:+.0f} cents)')
            # the note is the new sound there, not a partial of something else: within 12 dB of the strongest new peak
            wide = (f > 200) & (f < 4000)
            self.assertGreater(20 * np.log10(spec[k] / spec[wide].max()), -12.0, f'{e["pitch"]} at {t}')


class TestFilmPlaysTheSoundtrack(unittest.TestCase):
    def test_index_plays_the_soundtrack(self):
        html = (PROJECT / 'index.html').read_text()
        audio = re.findall(r'<audio\b[^>]*>', html)
        self.assertEqual(len(audio), 1, audio)
        self.assertIn('src="audio/soundtrack.m4a"', audio[0])
        self.assertIn('data-start="0"', audio[0])
        self.assertTrue((AUDIO / 'soundtrack.m4a').is_file())

    def test_no_reference_to_the_temporary_score_is_left(self):
        files = [PROJECT / 'index.html', PROJECT / 'package.json', AUDIO / 'README.md']
        for d in ('compositions', 'scripts', 'checks', 'tests'):
            files += [p for p in (PROJECT / d).rglob('*') if p.suffix in ('.html', '.js', '.mjs', '.json', '.py')]
        for p in files:
            self.assertNotIn('temp-score', p.read_text(), p)
        for name in ('score.py', 'temp-score.m4a', 'test_score.py', 'score.png'):
            self.assertFalse((AUDIO / name).exists(), name)


if __name__ == '__main__':
    unittest.main()
