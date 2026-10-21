#!/usr/bin/env python3
"""Download, verify and prepare the source recordings listed in audio/sources.json (never committed: audio/assets/ is gitignored).

    python audio/fetch.py                 # download what is missing (sequential, 1 s pause), verify sha256, convert Iowa AIFF -> FLAC
    python audio/fetch.py --verify        # no network: every file must be present and match its sha256 (exit 1 otherwise)
    python audio/fetch.py --audit         # --verify, then the real-sound licence audit over audio/assets/manifests (exit 1 on a blocker)
    python audio/fetch.py --stamp         # maintainers: stamp converted files already on disk (checked against a fresh conversion)
    python audio/fetch.py --pin           # maintainers: fill the empty sha256 of entries (--pin --repin: all of them)
    options: --only ID [ID ...]  --sources FILE  --assets DIR  --pause SECONDS

Layout under audio/assets/:
    mixkit/<id>.wav                         the Mixkit download as is (sha256 is of this file)
    _raw/iowa/<instrument>/<note>.aif       the Iowa AIFF as downloaded (sha256 is of this file)
    iowa/<instrument>/<note>.flac           the note cut from its attack - 5 ms, 48 kHz, 24-bit FLAC, channels kept
    iowa/<instrument>/<note>.flac.stamp.json  conversion id + AIFF sha256 + sha256 of the decoded audio (verify and fetch check it)
    manifests/recordings.json, audit.json   generated from sources.json for audit.py (one source of truth)

Run it with the audio venv (numpy, scipy, soundfile): it re-executes itself with $AUDIO_PY or audio/.venv/bin/python when the
current interpreter lacks them. The real-sound scripts (licences.py, audit.py) come from audio/tools when that folder exists,
else from $REAL_SOUND_SCRIPTS.
"""
import argparse
import contextlib
import hashlib
import importlib
import json
import math
import os
import sys
import time
import urllib.request
import warnings
from pathlib import Path
from urllib.parse import urlparse

HERE = Path(__file__).resolve().parent
UA = 'galvis-launch-film-fetch/1.0 (polite sequential download, 1 s pause)'
RATE = 48000
ATTACK_LEAD_MS = 5.0       # each Iowa note is cut from its attack - 5 ms
FADE_IN_MS = 2.0           # inside that lead-in (silence): no step at the cut
IOWA_LABEL = 'University of Iowa MIS free licence: any project, without restrictions'
IOWA_CLASS = {'key': 'iowa-mis', 'status': 'allowed', 'name': IOWA_LABEL, 'url': 'https://theremin.music.uiowa.edu/MIS.html',
              'attribution': False, 'reason': None}


class FetchError(Exception):
    pass


def say(s):
    print(str(s).encode('ascii', 'replace').decode(), flush=True)


# ---------------------------------------------------------------- real-sound scripts and the licence classifier

def scripts_dir():
    cands = [HERE / 'tools']
    if os.environ.get('REAL_SOUND_SCRIPTS'):
        cands.append(Path(os.environ['REAL_SOUND_SCRIPTS']))
    for d in cands:
        if (d / 'licences.py').is_file():
            return d
    raise FetchError('real-sound scripts not found: add audio/tools or set REAL_SOUND_SCRIPTS to the skill\'s scripts folder')


def real_sound(name):
    d = str(scripts_dir())
    if d not in sys.path:
        sys.path.insert(0, d)
    return importlib.import_module(name)


def iowa_class(text):
    return dict(IOWA_CLASS) if (text or '').strip() == IOWA_LABEL else None


def classify(text):
    """licences.classify plus the one wording the copied script has no class for: the Iowa MIS statement, matched exactly
    (https://theremin.music.uiowa.edu/MIS.html: "freely available on this website and may be downloaded and used for any
    projects, without restrictions"), so a longer or different text is never waved through by accident"""
    return iowa_class(text) or real_sound('licences').classify(text)


@contextlib.contextmanager
def patched_licences():
    """licences.classify with the Iowa class, for the scripts that call it themselves (audit.py, credits.py); restored after"""
    lic = real_sound('licences')
    original = lic.classify
    lic.classify = lambda text: iowa_class(text) or original(text)
    try:
        yield lic
    finally:
        lic.classify = original


# ---------------------------------------------------------------- manifest and paths

def load_sources(path):
    return json.loads(Path(path).read_text(encoding='utf-8'))


def sha256_file(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for block in iter(lambda: f.read(1 << 20), b''):
            h.update(block)
    return h.hexdigest()


def final_path(e, assets):
    return Path(assets) / e['file']


def raw_path(e, assets):
    """where the bytes of e['url'] are kept: Mixkit files are used as they are, Iowa AIFFs are converted into e['file']"""
    if e['source'] != 'iowa-mis':
        return final_path(e, assets)
    return Path(assets) / '_raw' / Path(e['file']).with_suffix(Path(urlparse(e['url']).path).suffix)


# Bump when the conversion changes in a way the parameters below do not show (find_onset, resampler, fade shape).
CONVERSION_VERSION = 1


def conversion_id():
    return f'v{CONVERSION_VERSION} lead={ATTACK_LEAD_MS}ms fade={FADE_IN_MS}ms rate={RATE} flac-pcm24'


def stamp_path(e, assets):
    fin = final_path(e, assets)
    return fin.with_name(fin.name + '.stamp.json')


def pcm_sha256(path):
    """sha256 of the decoded samples (24-bit, left-justified int32) + rate + channels: the same on any toolchain that decodes FLAC"""
    import soundfile as sf
    x, rate = sf.read(str(path), dtype='int32', always_2d=True)
    h = hashlib.sha256(f'{rate},{x.shape[1]},{x.shape[0]}'.encode())
    h.update(x.astype('<i4').tobytes())
    return h.hexdigest()


def write_stamp(e, assets):
    """record what the converted file must be: the conversion, the AIFF it came from and the decoded audio it holds"""
    stamp = {'conversion': conversion_id(), 'raw_sha256': e['sha256'], 'pcm_sha256': pcm_sha256(final_path(e, assets))}
    stamp_path(e, assets).write_text(json.dumps(stamp, indent=1) + '\n', encoding='utf-8')


def derived_problem(e, assets):
    """None when the converted Iowa file matches its stamp: same conversion, same AIFF, same decoded audio"""
    fin, rel = final_path(e, assets), final_path(e, assets).relative_to(assets)
    if not fin.is_file():
        return f'{rel} missing (run audio/fetch.py)'
    sp = stamp_path(e, assets)
    if not sp.is_file():
        return f'{rel} has no stamp (run audio/fetch.py)'
    stamp = json.loads(sp.read_text(encoding='utf-8'))
    if stamp.get('conversion') != conversion_id():
        return f"{rel} was made by '{stamp.get('conversion')}', now '{conversion_id()}' (run audio/fetch.py)"
    if stamp.get('raw_sha256') != e['sha256']:
        return f'{rel} was cut from a different AIFF than the manifest pins (run audio/fetch.py)'
    import soundfile as sf
    info = sf.info(str(fin))
    if (info.format, info.samplerate) != ('FLAC', RATE) or pcm_sha256(fin) != stamp.get('pcm_sha256'):
        return f'{rel} audio content differs from its stamp (file changed; run audio/fetch.py)'
    return None


def verify(sources, assets):
    """problems (strings), none when every file is present and byte-identical to what the manifest pinned"""
    assets, problems = Path(assets), []
    for e in sources['entries']:
        raw = raw_path(e, assets)
        if not raw.is_file():
            problems.append(f"{e['id']}: {raw.relative_to(assets)} missing (run audio/fetch.py)")
            continue
        got = sha256_file(raw)
        if got != e['sha256']:
            problems.append(f"{e['id']}: sha256 mismatch for {raw.relative_to(assets)}: manifest {e['sha256'][:12]}.., file {got[:12]}..")
            continue
        if e['source'] == 'iowa-mis':
            why = derived_problem(e, assets)
            if why:
                problems.append(f"{e['id']}: {why}")
    return problems


# ---------------------------------------------------------------- download

def download(url, tries=3):
    last = None
    for n in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=120) as r:
                return r.read()
        except Exception as ex:  # noqa: BLE001
            last = ex
            time.sleep(2 * (n + 1))
    raise FetchError(f'download failed for {url}: {last}')


class Throttle:
    """one request at a time, `pause` seconds apart"""
    def __init__(self, pause):
        self.pause, self.n = pause, 0

    def get(self, url):
        if self.n and self.pause:
            time.sleep(self.pause)
        self.n += 1
        return download(url)


def write_atomic(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_name(path.name + '.part')
    tmp.write_bytes(data)
    os.replace(tmp, path)


def selected(sources, only):
    es = sources['entries']
    if only:
        unknown = set(only) - {e['id'] for e in es}
        if unknown:
            raise FetchError(f'unknown id: {", ".join(sorted(unknown))}')
        es = [e for e in es if e['id'] in only]
    return es


def fetch(sources, assets, pause=1.0, only=None):
    """download what is missing or changed, refuse any download whose sha256 differs from the manifest, convert Iowa files"""
    assets, net = Path(assets), Throttle(pause)
    for e in selected(sources, only):
        raw = raw_path(e, assets)
        if not e.get('sha256'):
            raise FetchError(f"{e['id']}: no sha256 in the manifest (maintainers: audio/fetch.py --pin)")
        if not (raw.is_file() and sha256_file(raw) == e['sha256']):
            data = net.get(e['url'])
            got = hashlib.sha256(data).hexdigest()
            if got != e['sha256']:
                raise FetchError(f"{e['id']}: {e['url']} now has sha256 {got}, the manifest pins {e['sha256']}: "
                                 'the host changed the file; nothing was written. Re-read the page and re-pin on purpose.')
            write_atomic(raw, data)
            say(f"fetched {e['id']} ({len(data) // 1024} KiB)")
        if e['source'] == 'iowa-mis' and derived_problem(e, assets):
            convert_iowa(raw, final_path(e, assets))
            write_stamp(e, assets)
            say(f"converted {e['id']} -> {e['file']}")


def stamp_existing(sources, assets, only=None):
    """maintainers: stamp the converted files already on disk without replacing them, but only after checking that the current
    conversion of the pinned AIFF gives exactly the same audio; returns the ids it could not stamp"""
    import tempfile
    assets, bad = Path(assets), []
    for e in selected(sources, only):
        if e['source'] != 'iowa-mis':
            continue
        raw = raw_path(e, assets)
        if not (raw.is_file() and sha256_file(raw) == e['sha256'] and final_path(e, assets).is_file()):
            bad.append(e['id'])
            continue
        with tempfile.TemporaryDirectory() as t:
            tmp = Path(t) / 'x.flac'
            convert_iowa(raw, tmp)
            same = pcm_sha256(tmp) == pcm_sha256(final_path(e, assets))
        if same:
            write_stamp(e, assets)
        else:
            bad.append(e['id'])
    return bad


def pin(sources, assets=None, pause=1.0, repin=False, only=None):
    """fill the sha256 of entries that have none (all with repin); keeps the downloaded bytes under assets when given"""
    net, changed = Throttle(pause), 0
    for e in selected(sources, only):
        if e.get('sha256') and not repin:
            continue
        data = net.get(e['url'])
        e['sha256'] = hashlib.sha256(data).hexdigest()
        if assets:
            write_atomic(raw_path(e, Path(assets)), data)
        changed += 1
        say(f"pinned {e['id']} {e['sha256'][:12]}.. ({len(data) // 1024} KiB)")
    return changed


# ---------------------------------------------------------------- Iowa AIFF -> FLAC from the attack

def find_onset(x, rate):
    """sample index where the note starts (x: samples x channels): the first jump of >= 15 dB within 10 ms in the 1 ms RMS
    envelope, which ignores a slowly rising noise floor before the strike (the pre-2012 piano files have one); a file that
    starts on its attack has no such jump and falls back to the first sample within 35 dB of the note's peak"""
    import numpy as np
    peak = float(np.abs(x).max())
    if peak <= 0:
        raise FetchError('digital silence')
    hop = max(1, int(rate * 0.0005))
    win = 2 * hop
    c = np.concatenate([[0.0], np.cumsum((x ** 2).mean(axis=1))])
    n = (len(x) - win) // hop + 1
    idx = np.arange(n) * hop
    env = 20 * np.log10(np.sqrt((c[idx + win] - c[idx]) / win) + 1e-9)
    floor_db = 20 * np.log10(peak) - 45                      # a jump below this is noise, not the note
    for k in range(min(n, int(5 / 0.0005))):
        if env[k] >= floor_db and env[k] - env[max(0, k - 20):k + 1].min() >= 15:
            return int(idx[k])
    return int(np.argmax(np.abs(x).max(axis=1) > peak * 10 ** (-35 / 20)))


def convert_iowa(raw, out):
    """cut from attack - 5 ms (a 2 ms fade-in inside that lead), resample to 48 kHz, write 24-bit FLAC; channels are kept"""
    import numpy as np
    import soundfile as sf
    from scipy.signal import resample_poly
    x, rate = sf.read(str(raw), dtype='float64', always_2d=True)
    start = max(0, find_onset(x, rate) - int(round(rate * ATTACK_LEAD_MS / 1000)))
    y = x[start:]
    if rate != RATE:
        g = math.gcd(RATE, rate)
        y = resample_poly(y, RATE // g, rate // g, axis=0)
    n = min(len(y), int(RATE * FADE_IN_MS / 1000))
    y[:n] *= np.linspace(0.0, 1.0, n, endpoint=False)[:, None]
    peak = float(np.abs(y).max())
    if peak > 0.9999:
        y = y * (0.9999 / peak)
    Path(out).parent.mkdir(parents=True, exist_ok=True)
    tmp = Path(out).with_name(Path(out).stem + '.part.flac')
    sf.write(str(tmp), y, RATE, subtype='PCM_24', format='FLAC')
    os.replace(tmp, out)


# ---------------------------------------------------------------- licence audit (audit.py on a manifest generated from sources.json)

def rel_to(path, root):
    try:
        return Path(path).resolve().relative_to(Path(root).resolve()).as_posix()
    except ValueError:
        return Path(path).resolve().as_posix()


def audit_manifest(sources, assets, root):
    """(manifest entries in the real-sound template shape, seed audit records carrying the licence reading)"""
    manifest, seed = [], []
    for e in sources['entries']:
        f = rel_to(final_path(e, assets), root)
        manifest.append({
            'id': e['id'], 'category': e.get('need') or e['source'], 'file': f, 'title': e['title'],
            'author': 'Lawrence Fritts, University of Iowa Electronic Music Studios' if e['source'] == 'iowa-mis' else 'Mixkit',
            'source': e['source'], 'page_url': e['page'], 'download_url': e['url'], 'license': e['licence'],
            'license_url': (classify(e['licence']) or {}).get('url'), 'attribution': None, 'credit': e['credit'],
            'need': e.get('need'), 'rank': e.get('rank'), 'notes': e['use']})
        seed.append({'id': e['id'], 'file_check': {'path': f}, 'licence_seen': e['licence_seen'],
                     'licence_confirmed': bool(e['licence_seen'])})
    return manifest, seed


def run_audit(sources, assets, root):
    """exit code of audit.py over every entry (1 on a blocker); writes assets/manifests/{recordings,audit}.json and audit.md"""
    mdir = Path(assets) / 'manifests'
    mdir.mkdir(parents=True, exist_ok=True)
    manifest, seed = audit_manifest(sources, assets, root)
    (mdir / 'recordings.json').write_text(json.dumps(manifest, indent=1, ensure_ascii=False), encoding='utf-8')
    (mdir / 'audit.seed.json').write_text(json.dumps(seed, indent=1, ensure_ascii=False), encoding='utf-8')
    with patched_licences(), warnings.catch_warnings():
        warnings.simplefilter('ignore', ResourceWarning)  # the copied audit.py leaves its json files to the garbage collector
        audit = real_sound('audit')
        return audit.main(['--root', str(root), '--manifests', str(mdir), '--out', str(mdir / 'audit.json'),
                           '--existing', str(mdir / 'audit.seed.json')])


# ---------------------------------------------------------------- CLI

def audio_python():
    for cand in (os.environ.get('AUDIO_PY'), str(HERE / '.venv' / 'bin' / 'python'), str(HERE / '.venv' / 'Scripts' / 'python.exe')):
        if cand and Path(cand).is_file():
            return cand
    return None


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument('--sources', default=str(HERE / 'sources.json'))
    ap.add_argument('--assets', default=str(HERE / 'assets'))
    ap.add_argument('--verify', action='store_true', help='no network: check every file against its sha256')
    ap.add_argument('--audit', action='store_true', help='--verify, then the licence audit')
    ap.add_argument('--pin', action='store_true', help='fill empty sha256 values (maintainers)')
    ap.add_argument('--stamp', action='store_true', help='maintainers: stamp existing converted files (after checking them)')
    ap.add_argument('--repin', action='store_true', help='with --pin: recompute every sha256')
    ap.add_argument('--only', nargs='+', metavar='ID')
    ap.add_argument('--pause', type=float, default=1.0, help='seconds between requests (default 1)')
    a = ap.parse_args(argv)
    sources_path, assets = Path(a.sources), Path(a.assets)
    sources = load_sources(sources_path)
    try:
        if a.stamp:
            bad = stamp_existing(sources, assets, a.only)
            for i in bad:
                say(f'NOT stamped {i}: raw missing/changed or the file differs from a fresh conversion (delete it and run audio/fetch.py)')
            return 1 if bad else 0
        if a.pin:
            n = pin(sources, assets, a.pause, a.repin, a.only)
            sources_path.write_text(json.dumps(sources, indent=1, ensure_ascii=False) + '\n', encoding='utf-8')
            say(f'pinned {n} entries in {sources_path}')
            return 0
        if not (a.verify or a.audit):
            fetch(sources, assets, a.pause, a.only)
        problems = verify({**sources, 'entries': selected(sources, a.only)}, assets)
        for p in problems:
            say(f'FAIL {p}')
        say(f"{len(sources['entries'])} recordings: " + ('all present and verified' if not problems else f'{len(problems)} problem(s)'))
        if problems:
            return 1
        if a.audit:
            return run_audit(sources, assets, HERE.parent)
        return 0
    except FetchError as ex:
        say(f'fetch.py: {ex}')
        return 1


def _ensure_audio_python():
    try:
        import numpy, scipy, soundfile  # noqa: F401
    except ImportError:
        py = audio_python()
        if py and os.path.abspath(py) != os.path.abspath(sys.executable):  # no resolve(): a venv python is a symlink to the system one
            os.execv(py, [py, str(Path(__file__).resolve())] + sys.argv[1:])
        sys.exit('fetch.py needs numpy, scipy and soundfile: set AUDIO_PY or create audio/.venv (audio/setup.sh)')


if __name__ == '__main__':
    _ensure_audio_python()
    sys.exit(main())
