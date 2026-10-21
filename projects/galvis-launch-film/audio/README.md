# Soundtrack

The film plays `audio/soundtrack.m4a` (AAC 192k, −14 LUFS, true peak ≤ −1.5 dBTP). Everything in it is a real
recording: the score is composed in code and played note by note from University of Iowa MIS instrument recordings,
the sound effects are Mixkit recordings placed on the picture's cue events. Credits: `CREDITS.md`.

    bash audio/setup.sh               # once: the audio venv (audio/.venv); --core skips the listening models
    $AUDIO_PY audio/fetch.py          # once: download and verify the recordings into audio/assets/ (not committed)
    npm run audio:build               # score -> mix -> master -> soundtrack.m4a, QA, licence audit, CREDITS.md
    npm run audio:test                # unit tests (score, sources, toolchain, soundtrack, sync)

`$AUDIO_PY` is the venv's python (default `audio/.venv/bin/python`).

| file | what |
|---|---|
| `cues.json` | the picture's sound cues (frames), exported from `cues.json` by `npm run audio:cues` |
| `score/compose.py`, `score/render.py` | the score: notes from the cues (120 BPM, D), rendered from the Iowa recordings to `out/music.wav` |
| `design/*.json` | one sound-design fragment per category (impacts, transitions, ui, motion) |
| `sounddesign.json` | the top level: fragments, the score as the music bus, bus rides (with their reasons), master |
| `build.py` | the pipeline: `score/render.py --strict`, `tools/mix.py --trace`, `tools/master.py` (lowering the ceiling until the m4a is ≤ −1.5 dBTP), `tools/qa.py`, `tools/audit.py` + `tools/credits.py` |
| `tools/` | the real-sound scripts (earshot, MIT), verbatim |
| `sources.json`, `fetch.py` | the recordings: URL, sha256, licence; download and verification |
| `out/` | everything generated (gitignored): music, stems, premaster, master WAV, QA reports |
