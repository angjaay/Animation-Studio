"""The final soundtrack (audio/soundtrack.m4a, built by audio/build.py): master, holes, ending and the earshot targets.

The earshot targets are measured with earshot's own launch-film metrics, the same ones that scored film v3 (temporary
score: side -33.7 dB, loudest 3 s +4.7 LU, final moment -4.7 LU, last 10 % +1.4 LU).
Run from the project root:  audio/.venv/bin/python -m unittest discover -s audio/tests
"""
import json
import subprocess
import unittest
from pathlib import Path

import numpy as np
import pyloudnorm
from scipy.signal import resample_poly

AUDIO = Path(__file__).resolve().parent.parent
M4A = AUDIO / 'soundtrack.m4a'
CUES = json.loads((AUDIO / 'cues.json').read_text())
SR = 48000
FRAME = 1 / CUES['fps']
LENGTH = CUES['total'] / CUES['fps']


def decode(path):
    """the file as (n, 2) float32 at 48 kHz, decoded by ffmpeg (which honours the AAC priming / edit list)"""
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', str(path), '-f', 'f32le', '-ac', '2', '-ar', str(SR), '-'],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32).reshape(-1, 2)


def holes():
    """the stop-downs: (stopdown cue, the impact after it) in seconds"""
    ev = CUES['events']
    downs = sorted(e['f'] / CUES['fps'] for e in ev if e['kind'] == 'stopdown')
    hits = sorted(e['f'] / CUES['fps'] for e in ev if e['kind'] == 'impact')
    return [(a, min(h for h in hits if h > a)) for a in downs]


class TestMaster(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.x = decode(M4A)
        cls.meter = pyloudnorm.Meter(SR)
        cls.lufs = cls.meter.integrated_loudness(cls.x.astype(np.float64))

    def loudness(self, a, b):
        return self.meter.integrated_loudness(self.x[int(a * SR):int(b * SR)].astype(np.float64))

    def test_integrated_loudness_is_minus_14(self):
        self.assertAlmostEqual(self.lufs, -14.0, delta=0.5)

    def test_true_peak_at_or_under_minus_1_5_dbtp(self):
        tp = 20 * np.log10(np.abs(resample_poly(self.x.astype(np.float64), 4, 1, axis=0)).max())
        self.assertLessEqual(tp, -1.5)

    def test_lasts_the_film_within_a_frame(self):
        self.assertAlmostEqual(len(self.x) / SR, LENGTH, delta=FRAME)

    def test_sound_from_the_first_frame(self):
        loud = np.abs(self.x).max(axis=1) > 10 ** (-50 / 20)
        self.assertLessEqual(np.argmax(loud) / SR, 0.13)

    def test_no_silent_hole_outside_the_stop_downs(self):
        win = int(0.01 * SR)
        n = len(self.x) // win
        rms = np.sqrt((self.x[:n * win].astype(np.float64) ** 2).mean(axis=1).reshape(n, win).mean(axis=1))
        quiet = rms < 10 ** (-60 / 20)
        run, worst = 0, (0, 0.0)
        for k, q in enumerate(quiet):
            run = run + 1 if q else 0
            t = (k + 1) * win / SR
            allowed = any(a - 0.05 <= t <= b + 0.01 for a, b in holes()) or t >= LENGTH - 1.0
            if run and not allowed and run > worst[0]:
                worst = (run, t)
        self.assertLessEqual(worst[0] * win / SR, 0.2, f'silent run ending at {worst[1]:.2f} s')

    def test_the_stop_downs_are_holes(self):
        for a, b in holes():
            hole = self.x[int((a + 0.05) * SR):int((b - 0.03) * SR)]
            self.assertLess(20 * np.log10(np.abs(hole).max() + 1e-12), -40.0, (a, b))

    def test_ends_at_body_level(self):
        """the 3 s before the last second (the fade, at most 1 s: TestEarshotTargets) sit within 3 LU of integrated"""
        self.assertGreaterEqual(self.loudness(LENGTH - 4.0, LENGTH - 1.0) - self.lufs, -3.0)


class TestEarshotTargets(unittest.TestCase):
    """targets set from the v3 earshot critique (temporary score: 'needs work')"""

    @classmethod
    def setUpClass(cls):
        from earshot.profile import film_metrics
        cls.m = film_metrics(str(M4A), use_ast=False)['metrics']

    def test_stereo_side_is_4_to_15_db_under_mid(self):
        self.assertTrue(-15.0 <= self.m['side_to_mid_db'] <= -4.0, self.m['side_to_mid_db'])

    def test_loudest_3_s_at_most_4_lu_over_integrated(self):
        self.assertLessEqual(self.m['crest_lu'], 4.0)

    def test_final_moment_lands_at_body_level(self):
        self.assertGreaterEqual(self.m['final_lu'], -3.7)

    def test_last_10_percent_at_most_1_2_lu_over_integrated(self):
        self.assertLessEqual(self.m['end_lu'], 1.2)

    def test_fade_at_most_1_s(self):
        self.assertLessEqual(self.m['fade_s'], 1.0)

    def test_first_sound_and_gaps(self):
        self.assertLessEqual(self.m['first_sound_s'], 0.13)
        self.assertLessEqual(self.m['max_gap_s'], 0.3)


class TestDesign(unittest.TestCase):
    """audio/sounddesign.json: every fragment in audio/design/ is mixed; a listed fragment not merged yet is skipped"""

    @classmethod
    def setUpClass(cls):
        import sys
        sys.path.insert(0, str(AUDIO))
        import build
        cls.build = build
        cls.design = json.loads((AUDIO / 'sounddesign.json').read_text())

    def test_every_fragment_is_included(self):
        listed = set(self.design['include'])
        for p in sorted((AUDIO / 'design').glob('*.json')):
            self.assertIn(f'audio/design/{p.name}', listed)

    def test_missing_fragments_are_left_out_of_the_effective_design(self):
        d = self.build.effective_design({**self.design, 'include': self.design['include'] + ['audio/design/nope.json']})
        present = [f'audio/design/{p.name}' for p in sorted((AUDIO / 'design').glob('*.json'))]
        self.assertEqual(sorted(d['include']), present)
        self.assertIn('audio/design/nope.json', d['_skipped'])
        self.assertEqual({k: v for k, v in d.items() if k not in ('include', '_skipped')},
                         {k: v for k, v in self.design.items() if k != 'include'})

    def test_ceiling_is_lowered_until_the_m4a_is_under_the_limit(self):
        from unittest import mock
        b, ceilings = self.build, []
        with mock.patch.object(b, 'master', lambda pre, wav, m, c: ceilings.append(c) or 0), \
                mock.patch.object(b, 'encode', lambda wav, m4a: None), mock.patch.object(b, 'decode', lambda p: None), \
                mock.patch.object(b, 'true_peak_db', side_effect=[-1.2, -1.45, -1.62]), \
                mock.patch.object(b.shutil, 'copyfile') as copy, mock.patch('builtins.print'):
            ceiling, tp = b.master_to_m4a('premaster.wav', {'ceiling': 0.77})
        self.assertEqual(tp, -1.62)
        self.assertEqual(len(ceilings), 3)
        self.assertAlmostEqual(20 * np.log10(ceilings[1] / ceilings[0]), -1.5 - 0.1 + 1.2)
        self.assertAlmostEqual(20 * np.log10(ceilings[2] / ceilings[1]), -1.5 - 0.1 + 1.45)
        self.assertEqual(ceiling, ceilings[2])
        copy.assert_called_once()

    def test_music_is_the_rendered_score_on_the_grid(self):
        m = self.design['music']
        self.assertEqual(m['file'], 'audio/out/music.wav')
        self.assertEqual((m['src_bpm'], m.get('stretch')), (120, 'none'))
        self.assertEqual([(s['src_from'], s['at']) for s in m['segments']], [(0.0, 0.0)])


if __name__ == '__main__':
    unittest.main()
