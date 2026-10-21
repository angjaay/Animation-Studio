"""Recordings manifest, fetch and licence audit. Run (project root): $AUDIO_PY -m unittest audio/tests/test_sources.py

The manifest tests read the real audio/sources.json; the fetch tests use tiny fixtures served from file:// URLs, so the
suite needs neither the network nor the downloaded recordings.
"""
import contextlib
import hashlib
import importlib.util
import io
import json
import re
import shutil
import tempfile
import unittest
from pathlib import Path

import numpy as np
import soundfile as sf

AUDIO = Path(__file__).resolve().parent.parent
SPEC = importlib.util.spec_from_file_location('fetch', AUDIO / 'fetch.py')
fetch = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(fetch)

SOURCES = json.loads((AUDIO / 'sources.json').read_text(encoding='utf-8'))
ENTRIES = SOURCES['entries']
IOWA = [e for e in ENTRIES if e['source'] == 'iowa-mis']
MIXKIT = [e for e in ENTRIES if e['source'] == 'mixkit']


class TestManifest(unittest.TestCase):
    def test_every_entry_has_an_allowed_licence(self):
        self.assertTrue(ENTRIES)
        for e in ENTRIES:
            c = fetch.classify(e['licence'])
            self.assertEqual(c['status'], 'allowed', f"{e['id']}: {e['licence']!r} -> {c}")

    def test_required_fields_are_filled(self):
        for e in ENTRIES:
            self.assertRegex(e['sha256'], r'^[0-9a-f]{64}$', e['id'])
            for k in ('id', 'source', 'url', 'page', 'licence', 'credit', 'use', 'file', 'licence_seen', 'title'):
                self.assertTrue(str(e.get(k) or '').strip(), f"{e.get('id')}: empty {k}")

    def test_ids_files_and_urls_are_unique(self):
        for k in ('id', 'file', 'url'):
            vals = [e[k] for e in ENTRIES]
            self.assertEqual(len(vals), len(set(vals)), f'duplicate {k}')

    def test_sources_and_layout(self):
        self.assertEqual({e['source'] for e in ENTRIES}, {'iowa-mis', 'mixkit'})
        for e in IOWA:
            self.assertTrue(e['url'].startswith('https://theremin.music.uiowa.edu/'), e['id'])
            self.assertTrue(e['page'].startswith('https://theremin.music.uiowa.edu/'), e['id'])
            self.assertRegex(e['file'], r'^iowa/[a-z0-9-]+/[A-Za-z0-9#.-]+\.flac$', e['id'])
            self.assertRegex(e['url'], r'\.aiff?$', e['id'])
        for e in MIXKIT:
            m = re.match(r'^https://assets\.mixkit\.co/active_storage/sfx/(\d+)/(\d+)\.wav$', e['url'])
            self.assertTrue(m and m.group(1) == m.group(2), e['id'])
            self.assertEqual(e['id'], 'mk-' + m.group(1))
            self.assertEqual(e['file'], f'mixkit/{m.group(1)}.wav')
            self.assertTrue(e['page'].startswith('https://mixkit.co/free-sound-effects/'), e['id'])
            self.assertIn('Mixkit', e['licence'])

    def test_the_brief_needs_are_covered(self):
        by_file = {e['file'] for e in IOWA}
        for inst in ('piano-mf', 'piano-pp', 'cello-arco', 'cello-pizz', 'bass-arco', 'violin-arco', 'vibraphone-sustain',
                     'crotales', 'bells', 'gongs', 'cymbals'):
            self.assertTrue(any(f.startswith(f'iowa/{inst}/') for f in by_file), inst)
        needs = {e.get('need') for e in MIXKIT}
        for need in ('whoosh_short', 'whoosh_long', 'riser_cinematic', 'impact_cinematic_sub', 'thud_soft_land', 'ui_click',
                     'key_typing', 'notify_tonal', 'comet_swoosh_rise', 'sting_sparkle'):
            self.assertIn(need, needs)
        self.assertGreaterEqual(sum(1 for e in MIXKIT if e['need'] == 'whoosh_short'), 4)
        self.assertGreaterEqual(sum(1 for e in MIXKIT if e['need'] == 'whoosh_long'), 4)
        self.assertGreaterEqual(sum(1 for e in MIXKIT if e['need'] == 'impact_cinematic_sub'), 3)

    def test_earshot_evidence_is_recorded_and_no_recording_reads_as_code_synthesized(self):
        for e in ENTRIES:
            ev = e['earshot']
            self.assertNotEqual(ev['realness_verdict'], 'likely code-synthesized', e['id'])
            self.assertTrue(0 <= ev['realness'] <= 1, e['id'])
        for e in MIXKIT:  # every need's lead must at least be a weak earshot match for its description
            if e['rank'] == 1:
                self.assertIn(e['earshot']['rank_verdict'], ('strong', 'plausible', 'weak'), e['id'])

    def test_every_primary_is_real_or_pro_produced_on_the_part_that_is_used(self):
        for e in MIXKIT:
            if e['rank'] == 1:
                ev = e['earshot']
                used = ev.get('realness_on_used_trim') or ev
                verdict = used.get('verdict') or used['realness_verdict']
                self.assertEqual(verdict, 'real or pro-produced', e['id'])
                self.assertIn('match', ev, e['id'])  # earshot match with alternatives, run for every need
        for e in IOWA:  # an uncertain Iowa note carries the verdict of the trim it was re-judged on
            if e['earshot']['realness_verdict'] != 'real or pro-produced':
                self.assertTrue(e['earshot'].get('realness_trim'), e['id'])

    def test_each_need_has_one_primary(self):
        needs = {}
        for e in MIXKIT:
            needs.setdefault(e['need'], []).append(e.get('rank'))
        for need, ranks in needs.items():
            self.assertEqual(ranks.count(1), 1, f'{need}: ranks {ranks}')


class TestLicenceClassifier(unittest.TestCase):
    def test_iowa_wording_is_allowed_only_through_our_own_path(self):
        label = SOURCES['licences']['iowa-mis']['label']
        self.assertEqual(fetch.classify(label)['status'], 'allowed')
        self.assertEqual(fetch.real_sound('licences').classify(label)['status'], 'unknown')  # the copied script has no class

    def test_everything_else_still_follows_licences_py(self):
        self.assertEqual(fetch.classify('Mixkit Sound Effects Free License')['status'], 'allowed')
        self.assertEqual(fetch.classify('CC0 1.0')['status'], 'allowed')
        self.assertEqual(fetch.classify('CC BY-NC 4.0')['status'], 'forbidden')
        self.assertEqual(fetch.classify('')['status'], 'unknown')
        self.assertNotEqual(fetch.classify('Mixkit Stock Video Restricted License')['status'], 'allowed')


def write_wav(path, data, rate, subtype='PCM_16', fmt=None):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    sf.write(str(path), data, rate, subtype=subtype, format=fmt)


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


class FixtureCase(unittest.TestCase):
    def setUp(self):
        self.tmp = Path(tempfile.mkdtemp(prefix='sources-test-'))
        self.addCleanup(shutil.rmtree, self.tmp, ignore_errors=True)
        self.assets = self.tmp / 'assets'
        self.src = self.tmp / 'served'
        t = np.arange(44100) / 44100
        write_wav(self.src / 'click.wav', 0.5 * np.sin(2 * np.pi * 1000 * t) * np.exp(-t * 30), 44100)
        # AIFF at 96 kHz stereo with a silent lead-in of 0.300 s and a sine burst starting there
        n = 96000
        x = np.zeros((n, 2))
        i0 = int(0.300 * 96000)
        tt = np.arange(n - i0) / 96000
        x[i0:, 0] = 0.4 * np.sin(2 * np.pi * 440 * tt) * np.exp(-tt * 3)
        x[i0:, 1] = 0.2 * np.sin(2 * np.pi * 660 * tt) * np.exp(-tt * 3)
        write_wav(self.src / 'note.aif', x, 96000, 'PCM_24', 'AIFF')
        self.sources = {
            'licences': {'iowa-mis': {'label': json.loads((AUDIO / 'sources.json').read_text())['licences']['iowa-mis']['label']}},
            'entries': [
                {'id': 'mk-1', 'source': 'mixkit', 'url': (self.src / 'click.wav').as_uri(),
                 'page': 'https://mixkit.co/free-sound-effects/click/', 'licence': 'Mixkit Sound Effects Free License',
                 'sha256': sha(self.src / 'click.wav'), 'credit': 'Mixkit', 'use': 'a click', 'file': 'mixkit/1.wav',
                 'title': 'Click', 'licence_seen': 'read on the fixture page', 'need': 'ui_click', 'rank': 1},
                {'id': 'iowa-note', 'source': 'iowa-mis', 'url': (self.src / 'note.aif').as_uri(),
                 'page': 'https://theremin.music.uiowa.edu/MIS.html',
                 'licence': json.loads((AUDIO / 'sources.json').read_text())['licences']['iowa-mis']['label'],
                 'sha256': sha(self.src / 'note.aif'), 'credit': 'Iowa', 'use': 'a note', 'file': 'iowa/test-inst/D4.flac',
                 'title': 'Test note D4', 'licence_seen': 'read on the fixture page', 'need': 'test', 'rank': 1},
            ]}

    def fetch_all(self, **kw):
        out = io.StringIO()
        with contextlib.redirect_stdout(out):
            fetch.fetch(self.sources, self.assets, pause=0, **kw)
        return out.getvalue()


class TestFetchAndVerify(FixtureCase):
    def test_fetch_downloads_verifies_and_converts(self):
        self.fetch_all()
        self.assertEqual(fetch.verify(self.sources, self.assets), [])
        self.assertEqual((self.assets / 'mixkit/1.wav').read_bytes(), (self.src / 'click.wav').read_bytes())
        info = sf.info(str(self.assets / 'iowa/test-inst/D4.flac'))
        self.assertEqual((info.format, info.samplerate, info.channels), ('FLAC', 48000, 2))  # stereo kept, 48 kHz

    def test_iowa_note_is_cut_5_ms_before_its_attack(self):
        self.fetch_all()
        y, rate = sf.read(str(self.assets / 'iowa/test-inst/D4.flac'))
        env = np.abs(y).max(axis=1)
        first = int(np.argmax(env > 0.01))  # first clearly audible sample
        self.assertAlmostEqual(first / rate, 0.005, delta=0.0015)
        self.assertLess(abs(y[0]).max(), 1e-3)  # starts from silence: no click at the cut
        self.assertAlmostEqual(len(y) / rate, 1.0 - 0.300 + 0.005, delta=0.002)

    def test_verify_fails_when_a_downloaded_file_changed(self):
        self.fetch_all()
        raw = fetch.raw_path(self.sources['entries'][0], self.assets)
        raw.write_bytes(raw.read_bytes() + b'\0')
        problems = fetch.verify(self.sources, self.assets)
        self.assertEqual(len(problems), 1)
        self.assertIn('mk-1', problems[0])
        self.assertIn('sha256', problems[0])

    def test_verify_fails_on_a_wrong_sha_in_the_manifest(self):
        self.fetch_all()
        self.sources['entries'][1]['sha256'] = '0' * 64
        problems = fetch.verify(self.sources, self.assets)
        self.assertTrue(any('iowa-note' in p and 'sha256' in p for p in problems), problems)

    def test_cli_verify_exit_codes(self):
        self.fetch_all()
        (self.tmp / 'sources.json').write_text(json.dumps(self.sources), encoding='utf-8')
        args = ['--sources', str(self.tmp / 'sources.json'), '--assets', str(self.assets), '--verify']
        with contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(fetch.main(args), 0)
            self.sources['entries'][0]['sha256'] = 'f' * 64
            (self.tmp / 'sources.json').write_text(json.dumps(self.sources), encoding='utf-8')
            self.assertEqual(fetch.main(args), 1)

    def test_verify_reports_missing_and_stale_derived_files(self):
        self.assertEqual(len(fetch.verify(self.sources, self.assets)), 2)  # nothing fetched yet
        self.fetch_all()
        (self.assets / 'iowa/test-inst/D4.flac').unlink()
        problems = fetch.verify(self.sources, self.assets)
        self.assertEqual(len(problems), 1)
        self.assertIn('iowa-note', problems[0])

    def test_fetch_refuses_a_download_with_the_wrong_sha_and_keeps_nothing(self):
        self.sources['entries'][0]['sha256'] = 'a' * 64
        with self.assertRaises(fetch.FetchError):
            self.fetch_all()
        self.assertFalse((self.assets / 'mixkit/1.wav').exists())

    def test_second_fetch_does_not_download_again(self):
        self.fetch_all()
        (self.src / 'click.wav').unlink()  # the host lost the file: a verified local copy is enough
        self.fetch_all()
        self.assertEqual(fetch.verify(self.sources, self.assets), [])

    def test_pin_fills_the_sha_of_entries_that_have_none(self):
        self.sources['entries'][0]['sha256'] = ''
        with contextlib.redirect_stdout(io.StringIO()):
            changed = fetch.pin(self.sources, pause=0)
        self.assertEqual(changed, 1)
        self.assertEqual(self.sources['entries'][0]['sha256'], sha(self.src / 'click.wav'))


class TestConvert(FixtureCase):
    def convert(self, x, rate, name):
        raw, out = self.src / f'{name}.aif', self.assets / f'{name}.flac'
        write_wav(raw, x, rate, 'PCM_16', 'AIFF')
        fetch.convert_iowa(raw, out)
        return sf.read(str(out), always_2d=True)

    def test_a_slowly_rising_noise_floor_before_the_strike_is_not_the_attack(self):
        # the pre-2012 piano files: -72 -> -60 dBFS noise creeping up for 0.4 s, then the key strike at 0.45 s (mono, 44.1 kHz)
        rng = np.random.default_rng(1)
        n = 44100
        x = rng.standard_normal(n) * np.concatenate([np.linspace(2.5e-4, 1e-3, int(0.45 * 44100)), np.full(n - int(0.45 * 44100), 1e-3)])
        t = np.arange(n - int(0.45 * 44100)) / 44100
        x[int(0.45 * 44100):] += 0.05 * np.sin(2 * np.pi * 220 * t) * np.exp(-3 * t)
        y, rate = self.convert(x[:, None], 44100, 'piano-like')
        self.assertEqual(rate, 48000)
        first = int(np.argmax(np.abs(y[:, 0]) > 0.01))
        self.assertAlmostEqual(first / rate, 0.005, delta=0.002)
        self.assertAlmostEqual(len(y) / rate, 1.0 - 0.45 + 0.005, delta=0.003)

    def test_a_file_that_starts_on_its_attack_is_kept_from_sample_zero(self):
        t = np.arange(48000) / 48000
        x = 0.5 * np.sin(2 * np.pi * 440 * t) * np.exp(-3 * t)
        x[:20] = 0.5 * np.sin(2 * np.pi * 3000 * t[:20])  # already loud in the first millisecond
        y, rate = self.convert(np.stack([x, x], axis=1), 48000, 'hot-start')
        self.assertAlmostEqual(len(y) / rate, 1.0, delta=0.001)
        self.assertEqual(y.shape[1], 2)

    def test_conversion_is_deterministic(self):
        raw = self.src / 'note.aif'
        fetch.convert_iowa(raw, self.assets / 'a.flac')
        fetch.convert_iowa(raw, self.assets / 'b.flac')
        self.assertEqual(sha(self.assets / 'a.flac'), sha(self.assets / 'b.flac'))

    def test_a_bowed_note_is_cut_before_its_slow_rise(self):
        t = np.arange(96000) / 96000
        env = np.clip((t - 0.2) / 0.08, 0, 1) ** 2        # 80 ms bow attack after 0.2 s of near-silence
        x = 0.3 * env * np.sin(2 * np.pi * 294 * t) + 1e-5 * np.random.default_rng(2).standard_normal(len(t))
        y, rate = self.convert(x[:, None], 96000, 'bowed')
        first_audible = int(np.argmax(np.abs(y[:, 0]) > 1e-3)) / rate   # -60 dBFS, early in the rise
        self.assertLess(first_audible, 0.04)  # the rise is kept, not cut off
        self.assertGreater(len(y) / rate, 1.0 - 0.2 - 0.02)


class TestAudit(FixtureCase):
    def run_audit(self):
        out = io.StringIO()
        with contextlib.redirect_stdout(out):
            code = fetch.run_audit(self.sources, self.assets, self.tmp / 'project')
        return code, out.getvalue()

    def test_audit_passes_for_allowed_licences_and_intact_files(self):
        self.fetch_all()
        code, out = self.run_audit()
        self.assertEqual(code, 0, out)
        audit = json.loads((self.assets / 'manifests/audit.json').read_text(encoding='utf-8'))
        self.assertEqual({r['id'] for r in audit}, {'mk-1', 'iowa-note'})
        self.assertTrue(all(r['licence_status'] == 'allowed' and r['licence_confirmed'] for r in audit))

    def test_audit_fails_for_a_forbidden_licence(self):
        self.fetch_all()
        self.sources['entries'][0]['licence'] = 'CC BY-NC 4.0'
        code, _ = self.run_audit()
        self.assertEqual(code, 1)

    def test_audit_fails_when_a_file_is_missing(self):
        self.fetch_all()
        (self.assets / 'mixkit/1.wav').unlink()
        code, _ = self.run_audit()
        self.assertEqual(code, 1)


if __name__ == '__main__':
    unittest.main()
