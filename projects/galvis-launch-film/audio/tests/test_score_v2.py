"""Score v2: composition (notes from the cues) and the sampler that plays them from Iowa MIS recordings.

The render tests play the full score from a fixture bank generated here into a temp dir (decaying tones with a
click attack, laid out like audio/fetch.py's audio/assets/iowa/, with no bass drum, as sourced). Every fixture lasts
3 s or less, shorter than most real recordings, so the score itself has to keep sounding. Test-only, not film content.
Run from the project root:  audio/.venv/bin/python -m unittest discover -s audio/tests
"""
import contextlib
import hashlib
import io
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
    seconds, tau = {'sustain': (3.0, 2.5), 'ring': (3.0, 1.2), 'short': (1.0, 0.25)}[kind]
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


KINDS = {'piano-mf': 'ring', 'piano-pp': 'ring', 'cello-arco': 'sustain', 'cello-pizz': 'short',
         'bass-arco': 'sustain', 'violin-arco': 'sustain', 'vibraphone-sustain': 'ring', 'crotales': 'ring',
         'bells': 'ring'}


def make_bank(root, step=1, optional=False):
    """Every `step` semitones over each folder's range, in the first folder name of each voice (plus its soft
    folder); sharps spelled 's' in some folders and '#' in others; files named like fetch.py names them."""
    rng = np.random.default_rng(1)
    pitched, unpitched = {}, {}
    for v in render.VOICES.values():
        if v.optional and not optional:
            continue
        for folder in v.folders[:1] + v.soft:
            if v.low:
                lo, hi = pitched.get(folder, (999, 0))
                pitched[folder] = (min(lo, compose.midi(v.low)), max(hi, compose.midi(v.high)))
            else:
                name = v.files[0].replace('*[0-9]', '1').replace('*', 'hit')
                unpitched.setdefault(folder, set()).add(name)
    for i, (folder, (lo, hi)) in enumerate(sorted(pitched.items())):
        d = root / 'iowa' / folder
        d.mkdir(parents=True)
        for m in range(lo, hi + 1, step):
            name = compose.note_name(m)
            if i % 2:
                name = name.replace('#', 's')
            prefix = 'brass-' if folder == 'bells' else ''
            sf.write(d / f'{prefix}{name}.flac', fixture_tone(m, KINDS[folder], rng), SR)
    for folder, names in sorted(unpitched.items()):
        d = root / 'iowa' / folder
        d.mkdir(parents=True)
        for name in sorted(names):
            sf.write(d / name, fixture_hit(rng), SR)


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

    def test_sonic_logo_is_vibraphone_with_an_octave_shimmer_at_its_cues(self):
        logo = sorted((n.t, n.inst, n.pitch) for n in self.notes if 57.0 <= n.t < 61.0
                      and n.inst in ('vibraphone', 'bells', 'crotales'))
        self.assertEqual(logo, [(58.0, 'bells', 'A5'), (58.0, 'vibraphone', 'A4'),
                                (58.5, 'crotales', 'D6'), (58.5, 'vibraphone', 'D5'),
                                (59.0, 'crotales', 'F#6'), (59.0, 'vibraphone', 'F#5')])
        cue = {e['f'] / CUES['fps']: e['pitch'] for e in CUES['events'] if e['kind'] == 'bell'}
        self.assertEqual(cue, {58.0: 'A4', 58.5: 'D5', 59.0: 'F#5'})

    def test_the_logo_triad_returns_on_vibraphone_at_the_comets_and_the_sting(self):
        for t in [e['f'] / CUES['fps'] for e in CUES['events'] if e['id'].startswith('act09:comet:')] + [112.5]:
            self.assertTrue({n.pitch for n in self.at(t, 'vibraphone')}, t)
        self.assertEqual({n.pitch for n in self.at(112.5, 'vibraphone')}, {'A4', 'D5', 'F#5'})
        self.assertEqual({n.pitch for n in self.at(112.5, 'crotales')}, {'D6', 'F#6'})
        self.assertNotIn('A4', {n.pitch for n in self.notes if n.inst == 'bells'})

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
        self.assertTrue({'gong', 'vibraphone', 'bells', 'piano'} <= insts, insts)

    def test_starts_at_zero_and_last_onset_is_the_end_card_chord_at_116(self):
        self.assertEqual(min(n.t for n in self.notes), 0.0)
        self.assertEqual(max(n.t for n in self.notes), 116.0)

    def test_a_cue_group_of_the_wrong_size_is_an_error(self):
        cues = dict(CUES, events=[e for e in CUES['events'] if e['id'] != 'act07:row:10'])
        with self.assertRaisesRegex(ValueError, "'act07:row:': 9 cues .* 10"):
            compose.compose(cues)

    def test_every_note_is_playable(self):
        for n in self.notes:
            v = render.VOICES[n.inst]
            self.assertTrue(0 < n.vel <= 1 and n.dur > 0, n)
            if v.low:
                self.assertTrue(compose.midi(v.low) <= compose.midi(n.pitch) <= compose.midi(v.high), n)
            else:
                self.assertIsNone(n.pitch, n)

    def test_rhythmic_layer_follows_the_acts(self):
        layer = [n for n in self.notes if n.inst in compose.TICK_VOICES]
        self.assertEqual([n for n in layer if abs(n.t * 16 - round(n.t * 16)) > 1e-9], [])  # sixteenth grid
        for a, b in HOLES + [(56.0, 60.0)]:  # the stop-downs; the second impact and the logo speak alone
            self.assertEqual([n for n in layer if a <= n.t < b], [], (a, b))
        self.assertEqual([n for n in layer if n.t >= 116.0], [])  # the end card's chord holds alone

        def rate(a, b):
            return len({n.t for n in layer if a <= n.t < b}) / (b - a)
        sparse = {'act 01': rate(0, 12), 'act 10': rate(112, 120)}
        dense = {'act 04': rate(36, 52), 'act 07': rate(76, 90), 'act 08': rate(90, 106)}
        middle = {'act 02': rate(12, 22), 'act 06': rate(62, 76), 'act 09': rate(106, 112)}
        self.assertTrue(all(0 < r <= 2 for r in sparse.values()), sparse)
        self.assertTrue(all(3 <= r <= 4 for r in middle.values()), middle)
        self.assertTrue(all(r >= 5.5 for r in dense.values()), dense)
        logo = min(n.vel for n in self.notes if n.inst == 'vibraphone' and 58.0 <= n.t <= 59.0)
        self.assertLess(max(n.vel for n in layer if 56.0 <= n.t < 62.0), 0.8 * logo)

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
            self.assertTrue(any('iowa/gongs' in line for line in lines), lines)

    def test_fetch_layout_soft_piano_preferred_files_and_optional_bass_drum(self):
        with tempfile.TemporaryDirectory() as tmp:
            iowa = Path(tmp) / 'iowa'
            for folder, names in {'piano-mf': ['D4'], 'piano-pp': ['D4'], 'bells': ['plastic-A5', 'brass-A5'],
                                  'gongs': ['thaigong-D4', 'tamtam40-bow', 'tamtam40'],
                                  'cymbals': ['crash18-viennese', 'roll20-mallet']}.items():
                (iowa / folder).mkdir(parents=True)
                for name in names:
                    sf.write(iowa / folder / f'{name}.flac', np.zeros(SR // 10), SR)
            notes = [compose.Note(0.0, 'piano', 'D4', 0.3, 1.0), compose.Note(0.0, 'piano', 'D4', 0.6, 1.0),
                     compose.Note(0.0, 'bells', 'A5', 0.5, 1.0), compose.Note(0.0, 'gong', None, 0.5, 1.0),
                     compose.Note(0.0, 'cymbal_roll_swell', None, 0.5, 1.0),
                     compose.Note(0.0, 'cymbal_crash', None, 0.5, 1.0), compose.Note(0.0, 'bass_drum', None, 0.5, 1.0)]
            plan = render.resolve(notes, tmp)
            used = {n.inst + ('/soft' if n.vel < render.SOFT_VEL else ''): plan[render.source_key(iowa, n)]
                    for n in notes}
            self.assertEqual(used['piano/soft'][0].parent.name, 'piano-pp')
            self.assertEqual(used['piano'][0].parent.name, 'piano-mf')
            self.assertEqual(used['bells'][0].name, 'brass-A5.flac')
            self.assertEqual(used['gong'][0].name, 'tamtam40.flac')
            self.assertEqual(used['cymbal_roll_swell'][0].name, 'roll20-mallet.flac')
            self.assertEqual(used['cymbal_crash'][0].name, 'crash18-viennese.flac')
            self.assertIsNone(used['bass_drum'])
            err = io.StringIO()
            with contextlib.redirect_stderr(err):
                out = render.render(notes, assets=tmp, length=2.0)
            self.assertIn('bass_drum', err.getvalue())
            self.assertIn('gong + double bass', err.getvalue())
            self.assertEqual(out.shape, (2 * SR, 2))


class TestEndFade(unittest.TestCase):
    def test_the_end_fade_is_shorter_than_a_second_and_ends_on_the_last_sample(self):
        with tempfile.TemporaryDirectory() as tmp:
            d = Path(tmp) / 'iowa' / 'piano-mf'
            d.mkdir(parents=True)
            t = np.arange(6 * SR) / SR
            sf.write(d / 'D4.flac', np.concatenate([np.zeros(240), 0.5 * np.sin(2 * np.pi * 293.66 * t)]), SR)
            out = render.render([compose.Note(0.0, 'piano', 'D4', 0.6, 6.0)], assets=tmp, length=3.0)

        def level(a):
            seg = out[int(a * SR):int((a + 0.05) * SR)]
            return 10 * np.log10((seg ** 2).mean())
        self.assertLess(abs(level(2.05) - level(1.9)), 0.5)   # untouched 0.95 s before the end
        self.assertLess(level(2.9), level(1.9) - 20)          # faded by the last 0.1 s
        self.assertEqual(np.abs(out[-1]).max(), 0.0)


class TestShift(unittest.TestCase):
    def test_shift_moves_the_pitch_by_the_right_interval(self):
        t = np.arange(SR) / SR
        x = np.repeat(np.sin(2 * np.pi * 440.0 * t)[:, None], 2, axis=1)
        for semis in (1, 2, -1, -2):
            y = render.shift(x, semis)[:, 0]
            n = 1 << 20
            spectrum = np.abs(np.fft.rfft(y * np.hanning(len(y)), n))
            f = np.argmax(spectrum) * SR / n
            want = 440.0 * 2 ** (semis / 12)
            self.assertLess(abs(f / want - 1), 0.005, (semis, f, want))


class TestRender(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.TemporaryDirectory()
        root = Path(cls.tmp.name)
        make_bank(root, step=2)  # whole tones: half the notes need a one-semitone shift
        notes = compose.compose(CUES)
        cls.plan = render.resolve(notes, root)
        cls.notice = io.StringIO()
        with contextlib.redirect_stderr(cls.notice):
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
        shifts = [s for _, s in filter(None, self.plan.values())]
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

    def test_loudest_3_s_within_4_lu_of_integrated(self):
        over, at = render.loudest(self.out)
        self.assertLessEqual(over, render.LOUDEST_3S, f'{over:+.1f} LU at {at:.1f} s')

    def test_no_bass_drum_recording_is_announced(self):
        self.assertIn('bass_drum', self.notice.getvalue())

    def rms_db(self, a, b):
        seg = self.out[int(round(a * SR)):int(round(b * SR))]
        return 10 * np.log10((seg ** 2).mean() + 1e-20)

    def test_the_music_holds_under_the_end_card(self):
        # with every recording 3 s or shorter, the notes themselves must carry the sound from the sting to 119.0
        for w in (0.25, 0.1):  # 0.1 s windows: no gap of 0.2 s can hide between them
            for k in range(int(round((119.0 - 112.5) / w))):
                a = 112.5 + k * w
                self.assertGreater(self.rms_db(a, a + w), -40.0, f'{w} s window at {a:.2f} s')
        self.assertEqual(np.abs(self.out[-1]).max(), 0.0)

    def test_stereo_width(self):
        mid, side = (self.out[:, 0] + self.out[:, 1]) / 2, (self.out[:, 0] - self.out[:, 1]) / 2
        width = 10 * np.log10((side ** 2).mean() / (mid ** 2).mean())
        self.assertTrue(-15 <= width <= -4, width)


if __name__ == '__main__':
    unittest.main()
