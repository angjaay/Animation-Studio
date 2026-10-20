# Temporary score

`score.py` synthesises the animatic score from `cues.json` (120 BPM, D major): drone, pulse,
two riser → stop-down → impact moments (24 s, 56 s), the three-note sonic logo
(A4 / D5 / F♯5 at 58.0 / 58.5 / 59.0 s), product motifs, the full chord at 108 s and the sting at 112 s.
Everything is generated in code; there are no samples or third-party recordings.

    python3 audio/score.py            # writes temp-score.wav (gitignored) and temp-score.m4a
    python3 -m unittest audio/test_score.py

`score.png` is a spectrogram for checking the structure by eye. The final score replaces this in Plan 4.
