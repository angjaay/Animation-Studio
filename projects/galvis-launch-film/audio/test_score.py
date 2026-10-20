"""Checks for the temporary score. Run: python3 -m unittest audio/test_score.py (from the project root)."""
import json
import unittest
import wave
from pathlib import Path

import numpy as np
import pyloudnorm

ROOT = Path(__file__).resolve().parent.parent
WAV = ROOT / 'audio' / 'temp-score.wav'
CUES = json.loads((ROOT / 'cues.json').read_text())


def load():
    with wave.open(str(WAV)) as w:
        rate, ch, n = w.getframerate(), w.getnchannels(), w.getnframes()
        data = np.frombuffer(w.readframes(n), dtype='<i2').reshape(-1, ch) / 32768.0
    return rate, ch, data


def db(x):
    return 20 * np.log10(max(x, 1e-9))


def rms(mono, rate, t0, t1):
    seg = mono[int(t0 * rate):int(t1 * rate)]
    return float(np.sqrt(np.mean(seg ** 2)))


class Score(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.rate, cls.ch, cls.data = load()
        cls.mono = cls.data.mean(axis=1)

    def test_format_and_length(self):
        self.assertEqual(self.rate, 48000)
        self.assertEqual(self.ch, 2)
        self.assertLessEqual(abs(len(self.data) - CUES['duration'] * self.rate), 1)

    def test_impacts_land_on_their_frames(self):
        for imp in CUES['impacts']:
            t = imp['t']
            # strongest 10 ms rise within ±50 ms of the cue
            win = [(rms(self.mono, self.rate, s, s + 0.01), s) for s in np.arange(t - 0.05, t + 0.05, 0.002)]
            prev = [rms(self.mono, self.rate, s - 0.1, s) for _, s in win]
            jumps = [(db(a) - db(p), s) for (a, s), p in zip(win, prev)]
            best = max(jumps)
            self.assertGreaterEqual(best[0], 12, f'no onset at {t}')
            self.assertLessEqual(abs(best[1] - t), 0.01, f'onset at {best[1]:.3f}, cue {t}')

    def test_stop_downs_before_impacts(self):
        for t in (24.0, 56.0):
            gap = rms(self.mono, self.rate, t - 0.4, t - 0.05)
            body = rms(self.mono, self.rate, t - 2.0, t - 1.0)
            self.assertLessEqual(db(gap) - db(body), -18, f'stop-down before {t}')

    def test_sonic_logo_first_note_is_A4(self):
        seg = self.mono[int(58.05 * self.rate):int(58.45 * self.rate)]
        spec = np.abs(np.fft.rfft(seg * np.hanning(len(seg))))
        freqs = np.fft.rfftfreq(len(seg), 1 / self.rate)
        band = (freqs > 300) & (freqs < 1000)
        self.assertAlmostEqual(float(freqs[band][np.argmax(spec[band])]), 440.0, delta=3)

    def test_loudness_and_peak(self):
        lufs = pyloudnorm.Meter(self.rate).integrated_loudness(self.data)
        self.assertLessEqual(abs(lufs + 14), 1, f'{lufs:.2f} LUFS')
        self.assertLessEqual(db(float(np.abs(self.data).max())), -1.0)

    def test_sound_from_the_first_frame(self):
        self.assertGreater(db(rms(self.mono, self.rate, 0, 0.1)), -50)


if __name__ == '__main__':
    unittest.main()
