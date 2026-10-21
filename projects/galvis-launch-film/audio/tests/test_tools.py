"""Audio toolchain smoke test: the real-sound mixer puts a recording's attack on its cue frame.

The fixture WAV is generated here into a temp dir (test-only, not film content).
Run from the project root:  audio/.venv/bin/python -m unittest discover -s audio/tests
"""
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

import numpy as np
import soundfile as sf

SR = 48000
TOOLS = Path(__file__).resolve().parent.parent / 'tools'


def first_sample_above(x, level):
    return int(np.argmax(np.abs(x).max(axis=1) >= level))


class TestMixer(unittest.TestCase):
    def test_mixer_places_a_sample_on_its_cue_frame(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            # 1 s of silence with one 2 ms half-sine click starting at 0.2 s
            click = np.zeros(SR, dtype=np.float32)
            n = int(0.002 * SR)
            click[int(0.2 * SR):int(0.2 * SR) + n] = 0.8 * np.sin(np.pi * np.arange(n) / n)
            sf.write(root / 'click.wav', click, SR, subtype='FLOAT')

            (root / 'cues.json').write_text(json.dumps(
                {'fps': 30, 'total': 60, 'events': [{'f': 30, 'kind': 'hit'}]}))
            (root / 'design.json').write_text(json.dumps({
                'samples': {'click': {'file': 'click.wav'}},
                'pools': {'clicks': ['click']},
                'rules': [{'name': 'hit', 'match': {'kind': 'hit'}, 'pool': 'clicks',
                           'mode': 'fixed', 'align': 'attack'}],
            }))

            r = subprocess.run(
                [sys.executable, '-I', str(TOOLS / 'mix.py'), '--root', str(root),
                 '--design', 'design.json', '--cues', 'cues.json',
                 '--out', 'out/mix.wav', '--no-master'],
                capture_output=True, text=True)
            self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

            y, sr = sf.read(root / 'out' / 'mix.wav', always_2d=True)
            self.assertEqual(sr, SR)
            onset = first_sample_above(y, 0.1 * np.abs(y).max()) / sr
            self.assertAlmostEqual(onset, 1.000, delta=0.001)


if __name__ == '__main__':
    unittest.main()
