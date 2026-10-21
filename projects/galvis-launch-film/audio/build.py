#!/usr/bin/env python3
"""Build the film's soundtrack: score -> mix -> master -> AAC -> QA -> licence audit -> credits.

    $AUDIO_PY audio/build.py          (npm run audio:build)

1. audio/score/render.py --strict    the score from Iowa MIS recordings -> audio/out/music.wav
2. audio/tools/mix.py --trace        audio/sounddesign.json (fragments not on disk yet are left out) -> premaster + stems
3. audio/tools/master.py             -14 LUFS, true-peak limited; the ceiling is lowered until the AAC 192k encode
                                     (audio/soundtrack.m4a) measures <= -1.5 dBTP
4. audio/tools/qa.py                 placements, sync, edges, masking, the master gate -> audio/out/qa/qa.json
5. audit.py + credits.py             (inside fetch.patched_licences(): the Iowa MIS licence class) -> audio/CREDITS.md

Everything generated goes to audio/out/ (gitignored) except audio/soundtrack.m4a and audio/CREDITS.md, which are
committed. Same inputs give byte-identical outputs. Needs the recordings (audio/fetch.py) and the audio venv
($AUDIO_PY, else audio/.venv): the steps run with the interpreter that runs this script.
"""
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

import numpy as np
from scipy.signal import resample_poly

AUDIO = Path(__file__).resolve().parent
PROJECT = AUDIO.parent
TOOLS = AUDIO / 'tools'
OUT = AUDIO / 'out'
QA = OUT / 'qa'
DESIGN = AUDIO / 'sounddesign.json'
M4A = AUDIO / 'soundtrack.m4a'
SR = 48000
MAX_TP = -1.5            # dBTP on the m4a
TP_MARGIN = 0.1          # dB under MAX_TP aimed at when the ceiling is lowered
ATTEMPTS = 8
TITLE = 'GALVIS launch film'
SCORE_NOTE = ('The score was composed in code for the film (audio/score) and played note by note from these recordings: '
              'trimmed at the attack, level-matched, pitch-shifted by resampling (at most two semitones), panned and '
              'given a room. Nothing in it is synthesized.')


def rel(p):
    return Path(os.path.relpath(p, PROJECT)).as_posix()


def run(*cmd):
    print('$ ' + ' '.join(rel(c) if isinstance(c, Path) else str(c) for c in cmd), flush=True)
    return subprocess.run([str(c) for c in cmd], cwd=PROJECT).returncode


def must(code, step):
    if code:
        sys.exit(f'build.py: {step} failed (exit {code})')


def effective_design(design):
    """the design with only the include fragments that exist on disk; the others are listed under _skipped"""
    have = [i for i in design['include'] if (PROJECT / i).is_file()]
    return {**design, 'include': have, '_skipped': [i for i in design['include'] if i not in have]}


def decode(path):
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', str(path), '-f', 'f32le', '-ac', '2', '-ar', str(SR), '-'],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32).reshape(-1, 2).astype(np.float64)


def true_peak_db(x):
    return 20 * np.log10(np.abs(resample_poly(x, 4, 1, axis=0)).max() + 1e-12)


def encode(wav, m4a):
    """AAC-LC 192k, no encoder tag or dates: byte-identical for the same WAV"""
    must(subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(wav), '-map_metadata', '-1', '-c:a', 'aac', '-b:a', '192k',
                         '-ar', str(SR), '-fflags', '+bitexact', '-flags:a', '+bitexact', '-movflags', '+faststart',
                         str(m4a)]).returncode, 'AAC encode')


def master(premaster, wav, m, ceiling):
    cmd = [sys.executable, '-I', TOOLS / 'master.py', premaster, wav, '--lufs', m.get('lufs', -14), '--ceiling',
           f'{ceiling:.4f}', '--json', QA / 'master.json']
    if m.get('no_glue', True):
        cmd.append('--no-glue')
    if m.get('no_comp'):
        cmd.append('--no-comp')
    if m.get('mono_hz') is not None:
        cmd += ['--mono-hz', m['mono_hz']]
    return run(*cmd)


def master_to_m4a(premaster, m):
    """master, encode, measure the m4a; lower the ceiling by the overshoot until the m4a is <= MAX_TP"""
    wav, tmp = OUT / 'soundtrack.wav', OUT / 'soundtrack.m4a'
    ceiling = float(m.get('ceiling', 0.77))
    for attempt in range(1, ATTEMPTS + 1):
        must(master(premaster, wav, m, ceiling), 'master.py (loudness / true-peak gate on the WAV)')
        encode(wav, tmp)
        tp = true_peak_db(decode(tmp))
        print(f'master attempt {attempt}: ceiling {ceiling:.4f} ({20 * np.log10(ceiling):+.2f} dBFS) -> m4a {tp:+.2f} dBTP',
              flush=True)
        if tp <= MAX_TP:
            shutil.copyfile(tmp, M4A)
            return ceiling, tp
        ceiling *= 10 ** ((MAX_TP - TP_MARGIN - tp) / 20)
    sys.exit(f'build.py: the m4a stays above {MAX_TP} dBTP after {ATTEMPTS} ceilings')


def score_recordings():
    """the Iowa MIS recordings the score plays, as project-relative paths (the music.wav is made of them)"""
    sys.path.insert(0, str(AUDIO / 'score'))
    import compose
    import render
    cues = json.loads((AUDIO / 'cues.json').read_text())
    plan = render.resolve(compose.compose(cues))
    return sorted({rel(v[0]) for v in plan.values() if v})


def licences_and_credits(design_path, report_path):
    """audit.py and credits.py over the recordings that are audible: the Mixkit effects and the score's Iowa notes"""
    sys.path.insert(0, str(AUDIO))
    import fetch
    music = json.loads(Path(design_path).read_text())['music']['file']
    report = json.loads(Path(report_path).read_text())
    report['files_used'] = sorted({f for f in report['files_used'] if f != music} | set(score_recordings()))
    credits_report = QA / 'credits_report.json'
    credits_report.write_text(json.dumps(report, indent=1))
    # the licence manifest generated from audio/sources.json (one source of truth), the score's recordings as music
    mdir = QA / 'manifests'
    mdir.mkdir(parents=True, exist_ok=True)
    sources = fetch.load_sources(AUDIO / 'sources.json')
    manifest, seed = fetch.audit_manifest(sources, AUDIO / 'assets', PROJECT)
    for src, e, s in zip(sources['entries'], manifest, seed):
        # project-relative, as mix.py reports them (fetch resolves audio/assets, which may be a symlink)
        e['file'] = s['file_check']['path'] = rel(AUDIO / 'assets' / src['file'])
        if e['source'] == 'iowa-mis':
            e['category'] = 'music'
    (mdir / 'recordings.json').write_text(json.dumps(manifest, indent=1, ensure_ascii=False))
    (mdir / 'audit.seed.json').write_text(json.dumps(seed, indent=1, ensure_ascii=False))
    # credits derive their processing sentence from the effects only: the score is described by SCORE_NOTE
    cdesign = QA / 'credits_design.json'
    cdesign.write_text(json.dumps({k: v for k, v in json.loads(Path(design_path).read_text()).items() if k != 'music'}))
    with fetch.patched_licences():
        audit = fetch.real_sound('audit').main(['--root', str(PROJECT), '--manifests', rel(mdir),
                                                '--report', rel(credits_report), '--out', rel(mdir / 'audit.json'),
                                                '--existing', rel(mdir / 'audit.seed.json')])
        must(audit, 'audit.py (licence blocker)')
        cred = fetch.real_sound('credits').main(['--root', str(PROJECT), '--report', rel(credits_report),
                                                 '--manifests', rel(mdir), '--design', rel(cdesign),
                                                 '--audit', rel(mdir / 'audit.json'), '--out', 'audio/CREDITS.md',
                                                 '--desc', rel(OUT / 'CREDITS_description.txt'), '--title', TITLE])
        must(cred, 'credits.py (a recording without a confirmed licence)')
    md = AUDIO / 'CREDITS.md'
    md.write_text(md.read_text().replace('## Music\n\n', f'## Music\n\n{SCORE_NOTE}\n\n', 1))


def main():
    QA.mkdir(parents=True, exist_ok=True)
    must(run(sys.executable, AUDIO / 'score' / 'render.py', '--strict'), 'score render')

    design = effective_design(json.loads(DESIGN.read_text()))
    for i in design['_skipped']:
        print(f'note: {i} is not on disk yet: left out of this mix', flush=True)
    design_path = OUT / 'sounddesign.json'
    design_path.write_text(json.dumps(design, indent=1))

    premaster, report, trace = OUT / 'premaster.wav', QA / 'mix_report.json', QA / 'adds.json'
    must(run(sys.executable, '-I', TOOLS / 'mix.py', '--root', PROJECT, '--design', rel(design_path),
             '--cues', 'audio/cues.json', '--out', rel(premaster), '--no-master', '--stems', rel(OUT / 'stems'),
             '--report', rel(report), '--cues-out', rel(QA / 'cues_sounded.json'), '--trace', rel(trace),
             '--cache', rel(OUT / 'cache')), 'mix.py')

    ceiling, tp = master_to_m4a(premaster, design.get('master', {}))

    qa = run(sys.executable, '-I', TOOLS / 'qa.py', '--root', PROJECT, '--design', rel(design_path),
             '--report', rel(report), '--trace', rel(trace), '--stems', rel(OUT / 'stems'),
             '--master', rel(OUT / 'soundtrack.wav'), '--cues', 'audio/cues.json',
             '--cues-sounded', rel(QA / 'cues_sounded.json'), '--cache', rel(OUT / 'cache'), '--out', rel(QA / 'qa.json'))
    must(qa, 'qa.py')

    licences_and_credits(design_path, report)
    print(f'{rel(M4A)}: ceiling {ceiling:.4f}, {tp:+.2f} dBTP; {rel(AUDIO / "CREDITS.md")} written')


if __name__ == '__main__':
    main()
