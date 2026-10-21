"""The final soundtrack (audio/soundtrack.m4a, built by audio/build.py): master, holes, ending and the earshot targets.

The earshot targets are measured with earshot's own launch-film metrics, the same ones that scored film v3 (temporary
score: side -33.7 dB, loudest 3 s +4.7 LU, final moment -4.7 LU, last 10 % +1.4 LU).
Run from the project root:  audio/.venv/bin/python -m unittest discover -s audio/tests
"""
import json
import subprocess
import sys
import tempfile
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
    """audio/sounddesign.json: every fragment in audio/design/ is mixed, and every listed fragment must exist"""

    @classmethod
    def setUpClass(cls):
        sys.path.insert(0, str(AUDIO))
        import build
        cls.build = build
        cls.design = json.loads((AUDIO / 'sounddesign.json').read_text())

    def test_every_fragment_is_included(self):
        listed = set(self.design['include'])
        for p in sorted((AUDIO / 'design').glob('*.json')):
            self.assertIn(f'audio/design/{p.name}', listed)

    def test_every_listed_fragment_exists(self):
        self.assertEqual(sorted(self.design['include']),
                         sorted(f'audio/design/{p.name}' for p in (AUDIO / 'design').glob('*.json')))
        self.build.check_includes(self.design)

    def test_a_missing_fragment_stops_the_build(self):
        with self.assertRaisesRegex(FileNotFoundError, 'audio/design/nope.json'):
            self.build.check_includes({**self.design, 'include': self.design['include'] + ['audio/design/nope.json']})

    def test_music_ducks_3_db_under_act_06_on_bar_lines(self):
        """a -3 dB plateau from 66.0 to 76.0 under the typing and clicks; each ramp ends on a bar line (bars are 2 s)"""
        t, d = zip(*sorted(self.design['buses']['music']['auto']))
        ride = lambda x: float(np.interp(x, t, d))
        self.assertTrue(all(ride(x) == -3.0 for x in np.arange(66.0, 75.95, 0.05)))
        self.assertEqual((ride(62.0), ride(76.0), ride(77.0)), (0.0, 0.0, 0.0))
        # the ramps: last point at 0 dB before the plateau, last point at -3 dB before the return
        down = max(x for x, y in zip(t, d) if x < 66.0 and y == 0)
        up = max(x for x, y in zip(t, d) if x < 76.0 and y == -3)
        self.assertLessEqual(66.0 - down, 0.1)
        self.assertLessEqual(76.0 - up, 0.1)
        self.assertEqual((66.0 % 2, 76.0 % 2), (0.0, 0.0))
        self.assertIn([66.0, -3], self.design['buses']['music']['auto'])
        self.assertIn([76.0, 0], self.design['buses']['music']['auto'])

    def test_ceiling_is_lowered_until_the_m4a_is_under_the_limit(self):
        """the loop encodes into audio/out only: audio/soundtrack.m4a is not touched before the gates pass"""
        from unittest import mock
        b, ceilings = self.build, []
        with mock.patch.object(b, 'master', lambda pre, wav, m, c: ceilings.append(c) or 0), \
                mock.patch.object(b, 'encode', lambda wav, m4a: None), mock.patch.object(b, 'decode', lambda p: None), \
                mock.patch.object(b, 'true_peak_db', side_effect=[-1.2, -1.45, -1.62]), \
                mock.patch.object(b.shutil, 'copyfile') as copy, mock.patch('builtins.print'):
            m4a, ceiling, tp = b.master_to_m4a('premaster.wav', {'ceiling': 0.77})
        self.assertEqual(m4a, b.OUT / 'soundtrack.m4a')
        self.assertEqual(tp, -1.62)
        self.assertEqual(len(ceilings), 3)
        self.assertAlmostEqual(20 * np.log10(ceilings[1] / ceilings[0]), -1.5 - 0.1 + 1.2)
        self.assertAlmostEqual(20 * np.log10(ceilings[2] / ceilings[1]), -1.5 - 0.1 + 1.45)
        self.assertEqual(ceiling, ceilings[2])
        copy.assert_not_called()

    def test_music_is_the_rendered_score_on_the_grid(self):
        m = self.design['music']
        self.assertEqual(m['file'], 'audio/out/music.wav')
        self.assertEqual((m['src_bpm'], m.get('stretch')), (120, 'none'))
        self.assertEqual([(s['src_from'], s['at']) for s in m['segments']], [(0.0, 0.0)])


class TestBuildGates(unittest.TestCase):
    """build.py stops before rendering on a bad recording or a missing fragment, and publishes audio/soundtrack.m4a and
    audio/CREDITS.md only after QA, the licence audit and the credits have passed"""

    @classmethod
    def setUpClass(cls):
        sys.path.insert(0, str(AUDIO))
        import build
        cls.build = build

    def fixture(self, tmp):
        import hashlib
        assets = Path(tmp)
        (assets / 'mixkit').mkdir()
        (assets / 'mixkit' / '1.wav').write_bytes(b'RIFF recording one')
        entry = {'id': 'mixkit-1', 'source': 'mixkit', 'file': 'mixkit/1.wav', 'url': 'https://example.invalid/1.wav',
                 'sha256': hashlib.sha256(b'RIFF recording one').hexdigest()}
        return assets, {'entries': [entry]}

    def test_clean_recordings_pass(self):
        with tempfile.TemporaryDirectory() as tmp:
            assets, sources = self.fixture(tmp)
            self.assertEqual(self.build.recording_problems(sources, assets, ['mixkit/1.wav']), [])

    def test_a_tampered_recording_is_a_problem(self):
        with tempfile.TemporaryDirectory() as tmp:
            assets, sources = self.fixture(tmp)
            (assets / 'mixkit' / '1.wav').write_bytes(b'RIFF something else')
            problems = self.build.recording_problems(sources, assets, ['mixkit/1.wav'])
            self.assertTrue(any('sha256 mismatch' in p for p in problems), problems)

    def test_a_recording_no_sources_entry_names_is_a_problem(self):
        with tempfile.TemporaryDirectory() as tmp:
            assets, sources = self.fixture(tmp)
            (assets / 'mixkit' / '2.wav').write_bytes(b'RIFF unknown')
            problems = self.build.recording_problems(sources, assets, ['mixkit/1.wav', 'mixkit/2.wav'])
            self.assertEqual(len(problems), 1, problems)
            self.assertIn('mixkit/2.wav', problems[0])

    def test_the_build_uses_every_design_recording_from_the_assets(self):
        used = self.build.design_recordings(json.loads((AUDIO / 'sounddesign.json').read_text()))
        self.assertTrue(used and all(not u.startswith('audio/') for u in used), used)
        self.assertIn('mixkit/790.wav', used)

    def gated_main(self, problems=(), includes_ok=True, credits_ok=True):
        """run build.main() with every step mocked; returns (exit, calls in order)"""
        from unittest import mock
        b, calls = self.build, []

        def check(design):
            calls.append('check_includes')
            if not includes_ok:
                raise FileNotFoundError('audio/design/nope.json')

        def credits(*a):
            calls.append('credits')
            if not credits_ok:
                sys.exit('credits failed')
            return b.OUT / 'CREDITS.md'

        with mock.patch.object(b, 'check_includes', check), \
                mock.patch.object(b, 'check_recordings', lambda: calls.append('recordings') or list(problems)), \
                mock.patch.object(b, 'run', lambda *a: calls.append(Path(str(a[2] if a[1] == '-I' else a[1])).name) or 0), \
                mock.patch.object(b, 'master_to_m4a', lambda *a: calls.append('master') or (b.OUT / 'soundtrack.m4a', 0.77, -1.9)), \
                mock.patch.object(b, 'licences_and_credits', credits), \
                mock.patch.object(b, 'publish', lambda *a: calls.append('publish')), mock.patch('builtins.print'):
            try:
                b.main()
                code = None
            except SystemExit as ex:
                code = ex.code
        return code, calls

    def test_the_whole_build_order(self):
        code, calls = self.gated_main()
        self.assertIsNone(code)
        self.assertEqual(calls, ['check_includes', 'recordings', 'render.py', 'mix.py', 'master', 'qa.py', 'credits',
                                 'publish'])

    def test_a_bad_recording_stops_the_build_before_the_render(self):
        code, calls = self.gated_main(problems=['mixkit-1: sha256 mismatch'])
        self.assertIn('sha256 mismatch', str(code))
        self.assertEqual(calls, ['check_includes', 'recordings'])

    def test_a_missing_fragment_stops_the_build_before_the_render(self):
        code, calls = self.gated_main(includes_ok=False)
        self.assertIn('nope.json', str(code))
        self.assertEqual(calls, ['check_includes'])

    def test_nothing_is_published_when_the_credits_fail(self):
        code, calls = self.gated_main(credits_ok=False)
        self.assertEqual(code, 'credits failed')
        self.assertNotIn('publish', calls)


class TestBuiltQA(unittest.TestCase):
    """the QA report of the last build (audio/out/qa/qa.json, written by audio/build.py)"""

    @classmethod
    def setUpClass(cls):
        path = AUDIO / 'out' / 'qa' / 'qa.json'
        if not path.is_file():
            raise unittest.SkipTest(f'{path} is missing: run audio/build.py first')
        cls.qa = json.loads(path.read_text())['sections']

    def test_no_masked_effect_outside_the_typing_burst(self):
        """the act 06 keys (40 a second) mask each other by design; every other effect must read over the mix"""
        masked = [(e['t'], e['label']) for e in self.qa['audibility']['events']
                  if e['verdict'] == 'masked' and not e['label'].startswith('act06:key:')]
        self.assertEqual(masked, [])


if __name__ == '__main__':
    unittest.main()
