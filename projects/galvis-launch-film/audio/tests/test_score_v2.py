"""Score v2: composition (notes from the cues) and the sampler that plays them from Iowa MIS recordings.

The render tests play the full score from a fixture bank generated here into a temp dir (decaying tones with a
click attack, laid out like audio/assets/iowa/<instrument>/<note>.flac). They are test-only, not film content.
Run from the project root:  audio/.venv/bin/python -m unittest discover -s audio/tests
"""
import hashlib
import json
import math
import sys
import tempfile
import unittest
from pathlib import Path

import numpy as np
import pyloudnorm
import soundfile as sf

AUDIO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(AUDIO / 'score'))

import compose  # noqa: E402
import render  # noqa: E402

SR = 48000
CUES = json.loads((AUDIO / 'cues.json').read_text())
HOLES = [(23.75, 24.0), (55.75, 56.0)]
LENGTH = 120.0


def pitch_class(name):
    return compose.midi(name) % 12


# ------------------------------------------------------------------ fixture bank
def fixture_tone(midi, kind, rng):
    """5 ms of silence (the trim's pre-roll), a click, then a decaying harmonic tone."""
    f = 440.0 * 2 ** ((midi - 69) / 12)
    seconds, tau = {'sustain': (3.0, 2.5), 'ring': (6.0, 1.5), 'short': (1.0, 0.25)}[kind]
    t = np.arange(int(seconds * SR)) / SR
    tone = sum(a * np.sin(2 * np.pi * f * k * t) for k, a in ((1, 1.0), (2, 0.4), (3, 0.2)) if f * k < 20000)
    x = tone * np.exp(-t / tau)
    x[:48] += rng.standard_normal(48) * np.linspace(1, 0, 48)
    x *= 0.5 / np.abs(x).max()
    return np.concatenate([np.zeros(int(0.005 * SR)), x])


def fixture_hit(rng, seconds=3.0, tau=0.8):
    t = np.arange(int(seconds * SR)) / SR
    x = (rng.standard_normal(len(t)) * 0.3 + np.sin(2 * np.pi * 55 * t)) * np.exp(-t / tau)
    return np.concatenate([np.zeros(int(0.005 * SR)), 0.5 * x / np.abs(x).max()])


KINDS = {'piano': 'ring', 'cello_arco': 'sustain', 'cello_pizz': 'short', 'bass_arco': 'sustain',
         'violin_arco': 'sustain', 'vibraphone': 'ring', 'crotales': 'ring', 'bells': 'ring'}


def make_bank(root, step=1):
    """Every `step` semitones over each folder's range; sharps spelled 's' in some folders and '#' in others."""
    rng = np.random.default_rng(1)
    ranges = {}
    for v in render.VOICES.values():
        if v.low:
            lo, hi = ranges.get(v.folder, (999, 0))
            ranges[v.folder] = (min(lo, compose.midi(v.low)), max(hi, compose.midi(v.high)))
        else:
            ranges.setdefault(v.folder, None)
    for i, (folder, rng_) in enumerate(sorted(ranges.items())):
        d = root / 'iowa' / folder
        d.mkdir(parents=True)
        if rng_ is None:
            sf.write(d / 'hit.flac', fixture_hit(rng), SR)
            continue
        for m in range(rng_[0], rng_[1] + 1, step):
            name = compose.note_name(m)
            if i % 2:
                name = name.replace('#', 's')
            sf.write(d / f'{name}.flac', fixture_tone(m, KINDS[folder], rng), SR)


# ------------------------------------------------------------------ compose
class TestCompose(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.notes = compose.compose(CUES)

    def at(self, t, inst=None):
        return [n for n in self.notes if abs(n.t - t) < 1e-9 and (inst is None or n.inst == inst)]

    def test_onsets_sit_on_the_sixteenth_grid(self):
        off = [n for n in self.notes if abs(n.t * 8 - round(n.t * 8)) > 1e-9]
        self.assertEqual(off, [])

    def test_sonic_logo_is_three_bells_at_their_cues(self):
        bells = [(n.t, n.pitch) for n in self.notes if n.inst == 'bells' and 57.0 <= n.t < 61.0]
        self.assertEqual(bells, [(58.0, 'A4'), (58.5, 'D5'), (59.0, 'F#5')])

    def test_full_chord_at_108(self):
        classes = {pitch_class(n.pitch) for n in self.at(108.0) if n.pitch}
        self.assertTrue({2, 6, 9} <= classes, classes)  # D, F#, A

    def test_stop_downs_hold_no_onsets(self):
        for a, b in HOLES:
            self.assertEqual([n for n in self.notes if a <= n.t < b], [], (a, b))
        self.assertEqual(compose.stopdowns(CUES), HOLES)

    def test_impacts_are_low_layers_only(self):
        for t in (24.0, 56.0):
            self.assertEqual({n.inst for n in self.at(t)}, {'gong', 'bass_drum', 'bass_arco'}, t)

    def test_module_activations_rise_on_vibraphone(self):
        pings = [e['f'] / CUES['fps'] for e in CUES['events'] if e['id'].startswith('act04:module:')]
        self.assertEqual(len(pings), 6)
        pitches = [compose.midi(self.at(t, 'vibraphone')[0].pitch) for t in pings]
        self.assertEqual(pitches, sorted(set(pitches)))

    def test_sting_at_112_5(self):
        insts = {n.inst for n in self.at(112.5)}
        self.assertTrue({'gong', 'bells', 'piano'} <= insts, insts)

    def test_starts_at_zero_and_last_note_by_116_5(self):
        self.assertEqual(min(n.t for n in self.notes), 0.0)
        self.assertLessEqual(max(n.t for n in self.notes), 116.5)

    def test_every_note_is_playable(self):
        for n in self.notes:
            v = render.VOICES[n.inst]
            self.assertTrue(0 < n.vel <= 1 and n.dur > 0, n)
            if v.low:
                self.assertTrue(compose.midi(v.low) <= compose.midi(n.pitch) <= compose.midi(v.high), n)
            else:
                self.assertIsNone(n.pitch, n)

    def test_note_names_accept_both_sharp_spellings_and_flats(self):
        self.assertEqual({compose.midi(s) for s in ('F#4', 'Fs4', 'Gb4')}, {66})
        self.assertEqual(compose.note_name(66), 'F#4')


# ------------------------------------------------------------------ render
class TestVoice(unittest.TestCase):
    """A DC 'recording' makes the voice's output its envelope."""

    def check_tail(self, y):
        self.assertEqual(y[-1, 0], 0.0)
        fade = y[-int(0.01 * SR):, 0]
        self.assertTrue(np.all(np.diff(fade) <= 1e-12), 'tail is not a monotonic fade')
        # a raised-cosine fade over >= 10 ms never falls faster than pi / (2 * 480) per sample
        self.assertLessEqual(np.abs(np.diff(y[-int(0.01 * SR) - 1:, 0])).max(), math.pi / (2 * 0.01 * SR) * 1.01)

    def test_note_shorter_than_the_recording_fades_out(self):
        x = np.ones((SR * 3, 2))
        y = render.play(x, 1.0, render.Voice('dc', release=0.0), 0.7, int(0.005 * SR))
        self.check_tail(y)
        self.assertGreaterEqual(len(y), int(1.01 * SR))

    def test_recording_shorter_than_the_note_still_fades_out(self):
        x = np.ones((SR // 2, 2))
        y = render.play(x, 4.0, render.Voice('dc', release=0.3), 0.7, int(0.005 * SR))
        self.check_tail(y)
        self.assertEqual(len(y), SR // 2)


class TestBank(unittest.TestCase):
    def test_shift_is_capped_at_two_semitones_and_missing_files_are_listed(self):
        with tempfile.TemporaryDirectory() as tmp:
            d = Path(tmp) / 'iowa' / 'vibraphone'
            d.mkdir(parents=True)
            sf.write(d / 'D4.flac', np.zeros(SR // 10), SR)
            ok = [compose.Note(0.0, 'vibraphone', 'E4', 0.5, 1.0), compose.Note(0.0, 'vibraphone', 'C4', 0.5, 1.0)]
            plan = render.resolve(ok, tmp)
            self.assertEqual(sorted(s for _, s in plan.values()), [-2, 2])
            bad = ok + [compose.Note(0.0, 'vibraphone', 'F4', 0.5, 1.0), compose.Note(0.0, 'gong', None, 0.5, 1.0)]
            with self.assertRaises(FileNotFoundError) as err:
                render.resolve(bad, tmp)
            lines = str(err.exception).splitlines()
            vib = [line for line in lines if 'iowa/vibraphone' in line]
            self.assertEqual(len(vib), 1, lines)
            self.assertIn('F4', vib[0])
            self.assertNotIn('E4', vib[0])
            self.assertTrue(any('iowa/gong' in line for line in lines), lines)


class TestRender(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.TemporaryDirectory()
        root = Path(cls.tmp.name)
        make_bank(root, step=2)  # whole tones: half the notes need a one-semitone shift
        notes = compose.compose(CUES)
        cls.plan = render.resolve(notes, root)
        cls.out = render.render(notes, holes=HOLES, assets=root, length=LENGTH)
        cls.again = render.render(notes, holes=HOLES, assets=root, length=LENGTH)

    @classmethod
    def tearDownClass(cls):
        cls.tmp.cleanup()

    def wav_hash(self, x):
        path = Path(self.tmp.name) / 'h.wav'
        render.write(x, path)
        return hashlib.sha256(path.read_bytes()).hexdigest()

    def test_deterministic(self):
        self.assertEqual(self.wav_hash(self.out), self.wav_hash(self.again))

    def test_stereo_48k_and_film_length(self):
        self.assertEqual(self.out.shape, (int(LENGTH * SR), 2))

    def test_samples_shift_at_most_two_semitones(self):
        shifts = [s for _, s in self.plan.values()]
        self.assertTrue(shifts and max(abs(s) for s in shifts) <= 2)
        self.assertIn(1, [abs(s) for s in shifts])

    def test_level_before_mix(self):
        lufs = pyloudnorm.Meter(SR).integrated_loudness(self.out)
        self.assertLess(abs(lufs - -20.0), 3.0, lufs)
        self.assertLess(np.abs(self.out).max(), 10 ** (-1 / 20) + 1e-6)

    def test_stop_down_holes_are_silent(self):
        for a, b in HOLES:
            hole = self.out[int(round(a * SR)):int(round((b - 0.005) * SR))]
            self.assertEqual(np.abs(hole).max(), 0.0, (a, b))

    def test_sound_from_the_first_frame_and_no_other_holes(self):
        mono = np.abs(self.out).max(axis=1)
        self.assertLess(np.argmax(mono > 10 ** (-50 / 20)) / SR, 0.13)
        win = int(0.01 * SR)
        rms = np.sqrt((self.out[:len(self.out) // win * win] ** 2).mean(axis=1).reshape(-1, win).mean(axis=1))
        quiet = rms < 10 ** (-60 / 20)
        run, worst = 0, (0, 0.0)
        for i, q in enumerate(quiet):
            run = run + 1 if q else 0
            t = i * win / SR
            in_hole = any(a - 0.05 <= t <= b for a, b in HOLES) or t >= LENGTH - render.END_FADE
            if run and not in_hole and run > worst[0]:
                worst = (run, t)
        self.assertLessEqual(worst[0] * win / SR, 0.2, f'silent run ending at {worst[1]:.2f} s')

    def test_stereo_width(self):
        mid, side = (self.out[:, 0] + self.out[:, 1]) / 2, (self.out[:, 0] - self.out[:, 1]) / 2
        width = 10 * np.log10((side ** 2).mean() / (mid ** 2).mean())
        self.assertTrue(-15 <= width <= -4, width)


if __name__ == '__main__':
    unittest.main()
