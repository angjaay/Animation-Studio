# Audio sourcing: recordings, licences, picks (Plan 4, Task 3)

`audio/sources.json` lists 161 recordings (121 University of Iowa MIS, 40 Mixkit), each with `{id, source, url, page, licence, sha256, credit, use}` plus the licence reading (`licence_seen`), the earshot evidence and the pick (`rank`, 1 = primary). Nothing is committed from `audio/assets/` (gitignored, about 685 MB with the raw AIFFs).

```
$AUDIO_PY audio/fetch.py            # download missing files (sequential, 1 s pause), sha256 check, Iowa AIFF -> FLAC
$AUDIO_PY audio/fetch.py --verify   # no network; exit 1 if a download or a converted FLAC (stamp: conversion + AIFF sha + decoded-audio sha) is missing or changed
$AUDIO_PY audio/fetch.py --audit    # verify + real-sound audit.py on a manifest generated from sources.json (exit 0 = no blocker)
$AUDIO_PY -m unittest audio/tests/test_sources.py
```

Result of the audit on this machine: `161 manifest entries, 161 in scope: 161 ok, 0 with warnings, 0 blocked. Licences: iowa-mis 121, mixkit-sfx 40` (exit 0).

## Licences

| source | statement read (2026-10-21) | class |
|---|---|---|
| University of Iowa MIS | https://theremin.music.uiowa.edu/MIS.html: "these recordings have been freely available on this website and may be downloaded and used for any projects, without restrictions" | `licences.classify` has no class for this wording (it returns `unknown`). `fetch.py` adds it in its own code path: the exact label `University of Iowa MIS free licence: any project, without restrictions` is allowed, everything else still goes through the copied `licences.py` (which stays untouched). audit.py runs inside `fetch.patched_licences()`; `credits.py` must be run the same way. |
| Mixkit | https://mixkit.co/license/ (text served at /license/modal/sfxFree/): items may be downloaded, copied, modified, distributed and publicly performed in films and online video inside an end product; no redistribution on their own, no claiming as own, no registering with a rights-management service | `Mixkit Sound Effects Free License` -> `mixkit-sfx`, allowed. Each entry's `licence_seen` names the category page where the item was listed (title, duration) and the sentence on that page that puts it under the Mixkit License (`/license/#sfxFree`). Mixkit has no per-item pages for sound effects. |

Consequences: raw Mixkit files are never redistributed and the film is not registered with Content ID. Credits are a courtesy for both sources (`credit` field).

## University of Iowa MIS

Files are AIFF. Pitched notes are named by sounding pitch (checked by FFT harmonic-product against the expected frequency for 107 pitched files: 96 within 60 cents, the other 11 exactly one octave low, within 4-11 cents of an octave, all high piano and bell notes where the checker picks a subharmonic). `s` = sharp in file names (`Fs4` = F#4; the site writes `Gb4`). Each file is cut from its attack - 5 ms (onset = first 15 dB jump in 10 ms of the 1 ms envelope; this skips the slowly rising noise floor that precedes every piano strike), a 2 ms fade-in inside that lead, resampled to 48 kHz, 24-bit FLAC, channels kept. A `<note>.flac.stamp.json` beside each FLAC records the conversion id (version, lead, fade, rate), the sha256 of the AIFF it came from and the sha256 of the decoded audio: `--verify` fails and `fetch.py` reconverts when any of them differs. Notes are D-major steps (D E F# A B per octave: every D-major tone is at most one semitone from a recorded note).

| folder `audio/assets/iowa/` | files | notes (sounding) | source | peak dBFS | length s | realness |
|---|---|---|---|---|---|---|
| `piano-pp/` | 21 | D2..D6 | stereo 16-bit 44.1 kHz | -46..-27 | 13.4..41.6 | 21 real |
| `piano-mf/` | 21 | D2..D6 | stereo 16-bit 44.1 kHz | -27..-13 | 12.2..55.6 | 21 real |
| `cello-arco/` | 14 | D2..A4 | stereo 24-bit 44.1 kHz | -10..-7 | 3.5..6.9 | 14 real |
| `cello-pizz/` | 14 | D2..A4 | stereo 24-bit 44.1 kHz | -9..-7 | 1.4..3.7 | 14 real |
| `bass-arco/` | 9 | D1 E1 Fs1 A1 B1 D2 E2 Fs2 A2 | stereo 24-bit 44.1 kHz | -13..-5 | 3.5..11.3 | 9 real |
| `violin-arco/` | 9 | D4 E4 Fs4 A4 B4 D5 E5 Fs5 A5 | stereo 24-bit 44.1 kHz | -23..-6 | 1.7..4.7 | 9 real |
| `vibraphone-sustain/` | 9 | D4 E4 Fs4 A4 B4 D5 E5 Fs5 A5 | stereo 24-bit 44.1 kHz | -8..-2 | 7.8..17.2 | 6 uncertain, 3 real |
| `crotales/` | 4 | D6 E6 Fs6 A6 | stereo 24-bit 44.1 kHz | -5..-4 | 7.2..9.2 | 4 real |
| `bells/` | 6 | brass-D5 brass-Fs5 brass-A5 plastic-D5 plastic-Fs5 plastic-A5 | stereo 24-bit 44.1 kHz | -5..-4 | 5.2..14.2 | 6 real |
| `gongs/` | 6 | tamtam22 tamtam28 tamtam40 tamtam40-bow thaigong-D4 thaigong-A4 | stereo 24-bit 44.1 kHz | -7..-1 | 4.5..65.5 | 4 real, 2 uncertain |
| `cymbals/` | 8 | crash18-french crash18-germanic crash18-viennese crash17-medheavy roll18-mallet roll20-mallet roll20-stick roll21ride-mallet | stereo 24-bit 44.1 kHz | -1..-0 | 10.5..20.1 | 8 real |

Realness is run on the whole file: 113 of 121 read "real or pro-produced", none "likely code-synthesized". The 8 "uncertain": tam-tam 28" and 40" (0.76, 0.76; both 0.98 / 0.88 "real" on the 0-6 s trim a score would use) and six vibraphone notes (B4 0.65, D5 0.58, E4 0.72, E5 0.62, A4 0.72, D4 0.75): on 0-4 s D4 (0.82) and A4 (0.88) pass; B4, D5, E4, E5 stay uncertain on 0-4 s and on 0-2.5 s (0.46-0.58). Their `earshot.realness_trim` is in sources.json. They are recordings of a vibraphone in an anechoic chamber (clean sustained mallet tones are what the detector calls "uncertain"), but the composer should not lead with those four. F#4, F#5 and A5 pass on the whole file. **D5 for the sonic logo is therefore better taken from the bells (D5, real) or piano.**

Deviations from the brief (the site does not have it, or has it differently):

- **No bass drum in the Iowa MIS** (no page or file for it). Bass drum comes from Mixkit (`bass_drum`, below).
- **Crotales** start at C6, so A5 does not exist: D6 E6 F#6 A6 are provided.
- **No tubular bells, and no A4 on the orchestra bells** (range C5..): bells are brass- and plastic-mallet D5, F#5, A5; the logo notes A4 / D5 / F#5 are covered by vibraphone sustain (A4 passes on 0-4 s, F#5 on the whole file, D5 does not pass) and by piano mf / pp; bells add D5, F#5 and A5.
- **Strings and percussion are `ff` only** on the 2012+ single-note pages (the pp / mf strings exist only as multi-note scale files, not usable as single notes). Dynamics for those come from the sampler (gain, low-pass). Pianos are pp and mf, stereo 16-bit 44.1 kHz and recorded very quiet (pp peaks -46..-27 dBFS, mf -27..-13): normalise per instrument.
- Strings use the lowest-position string that has the note (cello D2-F#2 on C, A2-B2 on G, D3-F#3 on D, A3-A4 on A; bass D1 on C, E1-F#1 on E, A1-B1 on A, D2-F#2 and A2 on D / G; violin F#4 on G because the D string has no F#4 file).
- Cymbals: 4 orchestral crashes (17-18") and 4 rolls (mallet / stick); gongs: 22", 28", 40" tam-tams (+ 40" bowed), Thai gongs D4, A4. Tam-tam lead-in silence is up to 0.85 s in the source, removed by the cut.

## Mixkit: candidates and picks per need

Columns: id (the Mixkit item id; file `audio/assets/mixkit/<id>.wav`), title, length, attack / peak time from `analyze.py`, realness p_real and verdict on the whole file, `earshot rank` z and verdict against the need's description (the evidence for the pick). All sources are 44.1 kHz 16/24-bit WAV; many are dual-mono.

### Short whoosh (`whoosh_short`)

Query: *a short air whoosh passing by, quick and dry*

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 168 | Fast air sweep transition | 0.861 | 0.133 / 0.324 | 0.88 real | +5.6 | strong |
| 2 | 2632 | Whoosh wind sweep | 1.165 | 0.127 / 0.439 | 0.87 real | +5.1 | strong |
| 3 | 1471 | Cinematic wind swoosh | 1.452 | 0.244 / 0.432 | 0.80 real | +5.1 | strong |
| 4 | 1492 | Cinematic whoosh fast transition | 1.334 | 0.522 / 1.085 | 0.96 real | +4.3 | strong |
| 5 | 1490 | Fast whoosh transition | 1.757 | 0.419 / 0.72 | 0.84 real | +3.4 | strong |

**Pick 168** (z +5.6, 0.86 s, attack 0.13 s, peak 0.32 s). Alternates 2632 and 1471 (same family, slightly longer); 1492 and 1490 are brighter (centroid 3.8 / 6.5 kHz) for a sharper accent.

Not kept: 1489 Air woosh (uncertain 0.76 and 2.3 s long: not a short whoosh).

### Long whoosh / swoosh (`whoosh_long`)

Query: *a long smooth whoosh sweeping past, air and wind*

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 1168 | Woosh wind | 3.941 | 1.329 / 1.602 | 0.97 real | +4.2 | strong |
| 2 | 1484 | Speeding swoosh | 4.034 | 0.318 / 0.574 | 0.98 real | +2.8 | plausible |
| 3 | 2615 | Mighty mysterious swoosh | 4.667 | 0.72 / 1.608 | 0.66 uncertain | +4.7 | strong |
| 4 | 1167 | Swoosh wind passing | 5.673 | 0.727 / 1.635 | 0.63 uncertain | +4.5 | strong |
| 5 | 2408 | Storm coming whoosh | 4.125 | 0.459 / 3.182 | 0.75 uncertain | +4.2 | strong |

**Pick 1168** (only long whoosh that reads real, p 0.97, strong z +4.2, 3.9 s, swell peaks at 1.6 s). Alternate 1484 (real, 4.0 s, front-loaded peak 0.57 s). 2615 / 1167 / 2408 score higher on match (z +4.7 / +4.5 / +4.2) but only 'uncertain' on realness (designed library sounds); on the trims a score would use none reaches the 0.77 line (0-3 s: 0.63 / 0.55 / 0.45; 1-4 s: 0.49 / 0.56 / 0.58), so use them layered, never as the lead.

Not kept: 1486 Cinematic tunnel reverb woosh (uncertain (0.64) but surplus: the kept list is capped); 167 Long sweeping air swoosh (uncertain (0.51) but surplus: the kept list is capped); 163 Slow sweeping swoosh (realness: uncertain, p 0.35); 1474 Transition windy swoosh (uncertain (0.68) but surplus: the kept list is capped); 2705 Vibrating wind passing by (realness: uncertain, p 0.28).

### Cinematic riser (`riser_cinematic`)

Query: *a cinematic riser building tension, rising in pitch and loudness* Used at 24.0 s and 56.0 s, 2-4 s long.

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 790 | Cinematic trailer riser | 2.575 | 1.272 / 2.533 | 0.92 real | +4.9 | strong |
| 2 | 1516 | Magic whip swell | 2.995 | 0.648 / 1.282 | 0.98 real | +3.5 | strong |

**Pick 790** (z +4.9, p 0.92, 2.58 s, level rises to the very end: peak at 2.53 s, so the stop-down cut goes right after it). Alternate 1516 (real 0.98, 3.0 s, peak 1.28 s then a tail: trim to 0-1.3 s or reverse). Only two short risers that read real were found among the Mixkit items that can be downloaded: the longer ones (2283, 794) judge 'uncertain' even on their last 4 s (0.70 / 0.38).

Not kept: 2669 Short sci-fi swell (realness: likely code-synthesized (p 0.10)); 794 Tech choir cinematic riser (uncertain (0.58) but surplus: the kept list is capped); 2283 Cinematic mysterious riser brass (uncertain (0.72) but surplus: the kept list is capped); 1170 Cinematic wind swell (realness: likely code-synthesized (p 0.21)); 3133 Short rising thud (earshot match: no match (z +1.6), it sounds like a cinematic hit with a long tail); 3160 Sci fi power up (earshot match: no match (z +1.8), it sounds like a metal scrape).

### Cinematic impact with sub (`impact_cinematic_sub`)

Query: *a deep cinematic impact boom with sub bass and a long decay* Used at 24.0 s and 56.0 s.

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 2908 | Movie trailer epic impact | 4.866 | 0.168 / 0.93 | 0.90 real | +3.1 | strong |
| 2 | 563 | Drum deep impact | 5.5 | 0.158 / 0.168 | 0.83 real | +2.6 | plausible |
| 3 | 2902 | Movie impact intro presentation | 5.994 | 0.144 / 1.365 | 0.97 real | +2.0 | weak |

**Pick 2908** (strong; 20-80 Hz is the loudest band, -1.7 dB below total). The file opens with a short swell: use it from 0.90 s, where the hit lands (peak 0.93 s); on that trim realness is 0.97 and match z +3.3 with 'a whoosh' ruled out (forced choice >99%). Alternates 563 (a drum-like hit with sub, peak 0.17 s, no lead-in) and 2902 (real 0.97, hit at about 1.3 s, weaker match z +2.6 from 1.2 s). Align on the peak, as the mixer's `align` does.

Not kept: 2915 Blockbuster suspense movie impact (realness: uncertain, p 0.27).

### Bass drum (`bass_drum`)

Query: *a single deep bass drum hit* The Iowa MIS has no bass drum.

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 564 | Soft horror hit drum | 2.666 | 0.007 / 0.036 | 0.79 real | +4.8 | strong |
| 2 | 565 | Hard horror hit drum | 4.143 | 0.057 / 0.061 | 0.96 real | +3.8 | strong |
| 3 | 2294 | Drum bass hit | 1.53 | 0.007 / 0.035 | 0.64 uncertain | +4.4 | strong |
| 4 | 553 | Blockbuster trailer bass drum | 8.3 | 0.301 / 0.486 | 0.75 uncertain | +3.3 | strong |

**Pick 564** (strong z +4.7 vs a snare / gong / explosion >99%, 2.7 s, peak at 36 ms, almost all energy below 250 Hz). Alternate 565 (real 0.96, a harder hit). 2294 is a pure sub thump (centroid 174 Hz, 'uncertain' 0.64, 0.68 on its first 1.5 s) and 553 a long boom (uncertain 0.75): sub layers only.

Not kept: 549 Deep cinematic subtle drum impact (earshot match: no match (z +1.7), it sounds like a deep cinematic whoosh); 544 Drum hit with eco (uncertain (0.74) but surplus: the kept list is capped); 2299 Short bass hit (realness: likely code-synthesized (p 0.05)).

### Soft thud for a plate landing (`thud_soft_land`)

Query: *a soft thud of an object landing gently on a surface*

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 1901 | Bed pillow hit the mattress | 0.768 | 0.17 / 0.204 | 0.97 real | +3.0 | strong |
| 2 | 2070 | Light impact on the ground | 1.017 | 0.004 / 0.004 | 0.89 real | +2.4 | weak |
| 3 | 3049 | Quest game heavy stomp v | 0.744 | 0.011 / 0.031 | 0.98 real | +2.2 | weak |

**Pick 1901** (strong, real 0.97): a soft low thud, peak -12 dBFS, so it needs about +12 dB. Alternates 2070 (a brighter, drier tap, weak z +2.4) and 3049 (a heavier stomp; 59 clipped samples, use at lower gain).

Not kept: 3158 Thin metal plate drop (real (0.99) but a metal clang, not a soft thud (z +1.1)); 2148 Weak hit impact (realness: likely code-synthesized (p 0.05)); 3141 Small wood plank pile drop (earshot match: no match (z +0.9), it sounds like dominoes falling); 757 Falling hit (earshot match: no match (z +0.0), it sounds like a punchy impact hit); 2498 Body impact falling into the sand (earshot match: no match (z +1.6), it sounds like digging in soil); 2300 Knocking sub bass (realness: likely code-synthesized (p 0.04)).

### UI click (`ui_click`)

Query: *a single crisp computer mouse click*

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 1116 | Single classic click | 0.231 | 0.112 / 0.113 | 0.81 real | +4.4 | strong |
| 2 | 1115 | Pen click and release | 1.284 | 0.025 / 0.025 | 0.96 real | +3.0 | plausible |
| 3 | 1118 | Hard click | 0.582 | 0.201 / 0.209 | 0.98 real | +2.9 | plausible |
| 4 | 2585 | On or off light switch tap | 1.106 | 0.001 / 0.001 | 0.86 real | +2.6 | plausible |
| 5 | 1117 | Classic click | 0.288 | 0.1 / 0.153 | 0.89 real | +2.3 | weak |

**Pick 1116** (strong z +4.4, 0.23 s: one click + release, attack 0.11 s). Alternates 1115 (pen click and release, 1.3 s, two takes), 1118, 2585 and 1117 (0.29 s; peak +0.1 dBFS, watch the level). The Mixkit 'mouse click' items (1113, 2997) and the 'select' tones read as synthesized.

Not kept: 1113 Mouse click close (realness: likely code-synthesized (p 0.09)); 1126 Interface click (realness: uncertain, p 0.46); 2997 Clear mouse clicks (realness: likely code-synthesized (p 0.06)); 1109 Select click (realness: likely code-synthesized (p 0.13)); 2577 Interface device click (realness: likely code-synthesized (p 0.16)); 2582 Quick switch click (realness: uncertain, p 0.37).

### Keyboard typing and single key takes (`key_typing`)

Query: *typing on a computer keyboard (singles: "a single key press on a keyboard")*

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 2536 | Writing on a laptop keyboard | 9.285 | 0.196 / 3.794 | 0.93 real | +3.6 | strong |
| 2 | 2537 | Laptop keyboard typing sequence | 13.395 | 0.128 / 7.56 | 0.95 real | +3.5 | strong |
| 3 | 2531 | Typing on a laptop keyboard | 19.633 | 0.005 / 14.193 | 0.99 real | +3.4 | strong |
| 4 | 2533 | Single key type | 1.213 | 0.003 / 0.004 | 0.97 real | +4.0 (as single key) | strong |
| 5 | 2542 | Hard single key press in a laptop | 0.306 | 0.11 / 0.113 | 0.93 real | +3.1 (as single key) | strong |
| 6 | 2541 | Single key press in a laptop | 0.264 | 0.111 / 0.13 | 0.87 real | +2.8 (as single key) | plausible |

**Pick 2536** (typing, p 0.93, strong z +3.5, forced choice 75% for typing against a typewriter 0%, a mouse click 1% and typing on a smartphone 24%, peak 3.8 s, LUFS -34: quiet, +20 dB). 2537 and 2531 are the other multi-take sequences. For one key per character use the single presses 2533 (strong z +4.0 as 'a single key press', 1.2 s, peak 4 ms), 2542 (strong z +3.1) and 2541 (plausible z +2.8): three different keys. The prompt types a character every 0.025 s, so takes overlap: layer these three or slice single presses out of the sequences with `earshot find`.

### Soft tonal notification (`notify_tonal`)

Query: *a soft tonal notification chime, gentle bell*

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 3109 | Relaxing bell chime | 1.678 | 0.04 / 0.074 | 0.94 real | +2.5 | weak |

**Pick 3109** (real 0.94; only 'weak' z +2.4 for 'a soft bell chime', 94% against an alarm / buzzer / ringtone; earshot hears it as a glissando on bar chimes). No alternate survived: the other chimes are code-synthesized, uncertain below 0.5 (2820 marimba 0.44, 938, 2344, 933) or no match (3108 crystal chime, 1107). This is the weakest need and has a single candidate: a vibraphone or crotale note from the Iowa set is the better notification.

Not kept: 3108 Crystal chime (earshot match: no match (z +0.7), it sounds like a magic sparkle chime); 1107 Page forward single chime (real (0.95) but earshot hears a page turn / reverse swell, not a chime (z -0.3)); 2865 Success software tone (realness: likely code-synthesized (p 0.03)); 2820 Magic marimba (realness: uncertain, p 0.44); 938 Uplifting bells notification (realness: uncertain, p 0.34); 933 Bell notification (realness: uncertain, p 0.21); 2344 Magic notification ring (realness: uncertain, p 0.32).

### Rising swoosh for the comet (`comet_swoosh_rise`)

Query: *a swoosh rising in pitch, a fast object flying past*

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 169 | Futuristic sweep pass by | 3.078 | 0.395 / 0.783 | 0.85 real | +4.4 | strong |
| 2 | 1469 | Flying fast swoosh | 1.632 | 0.348 / 0.508 | 0.85 real | +4.2 | strong |
| 3 | 1466 | Elevating swoosh | 1.03 | 0.018 / 0.146 | 0.65 uncertain | +3.5 | strong |

**Pick 169** (strong z +4.4, p 0.85, 3.1 s, the only candidate whose spectrum really rises: centroid 3.8 -> 5.9 kHz, level peak at 0.78 s; forced choice vs 'a descending whoosh' 81 / 19%). Alternates 1469 (real, flat spectrum, 1.6 s) and 1466 (rising 1.6 -> 8.7 kHz, 1.0 s, uncertain 0.65). 3161 and 3114 fall in pitch.

Not kept: 3024 Meteor whoosh (realness: uncertain, p 0.19); 3161 Transition flying swoosh (real (0.84) but its spectrum falls (centroid 6.6 -> 2.5 kHz): not a rising swoosh); 2634 Futuristic transition sweep (uncertain (0.63) but surplus: the kept list is capped); 2635 Futuristic cinematic sweep (realness: likely code-synthesized (p 0.14)); 3114 Fast sci fi transition sweep (real (0.83) but its spectrum falls: not a rising swoosh).

### Shimmer / sparkle for the sting (`sting_sparkle`)

Query: *a magical sparkle shimmer, twinkling chime*

| rank | id | title | s | attack / peak s | p_real | rank z | verdict |
|---|---|---|---|---|---|---|---|
| 1 | 3062 | Magic wand sparkle | 2.5 | 0.068 / 0.165 | 0.96 real | +3.8 | strong |
| 2 | 3083 | Magic sparkle touch | 2.333 | 0.361 / 0.474 | 0.96 real | +3.2 | strong |
| 3 | 871 | Fairy magic sparkle | 1.301 | 0.198 / 0.443 | 0.58 uncertain | +4.4 | strong |

**Pick 3062** (strong z +3.9 for 'a magical sparkle shimmer', real 0.96, 2.5 s, no sub, centroid 8-9 kHz). Alternates 3083 (real 0.96, a touch with a longer rise, peak 0.47 s) and 871 (strongest match z +4.4 but uncertain 0.58 / 0.60 on 0-1.2 s).

Not kept: 3082 Magic sparkle poof hit (earshot match: no match (z +1.0), it sounds like ice cubes in a glass).

Not downloadable (HTTP 403 on `assets.mixkit.co`): 788 Big cinematic impact, 1144 Short space stutter intro riser, 546 Cinematic mystery trailer drum hit.

## Method

- Pages read: Iowa `MIS.html`, the instrument pages (2012+ `MIS-Pitches-2012/*`, `MISpiano.html`), Mixkit category pages (whoosh, swoosh, sweep, swell, transition, cinematic, impact, hit, boom, thud, stomp, click, tap, keyboard, type, interface, notification, sparkle, magic, chimes, bell, ding, drum, glitch, rocket, flying, intro, movie, technology, tones, pop, drop, laptop, sci-fi, ...), and the Mixkit licence modal.
- Downloads: sequential, 1 s pause, `User-Agent` set; sha256 pinned from those downloads (`fetch.py --pin`).
- Measured: `analyze.py` on every Mixkit file; `earshot realness` on every Iowa file and every Mixkit candidate (whole file; re-run with `--start/--end` for the uncertain ones and for the impact trim); `earshot rank` per need (candidates only); `earshot match` with `--alts` for the primary of every need (and the single-key takes, and the impact on its used trim); my own band / centroid measurements for sub energy and rising or falling spectrum.
- Audit: `fetch.py --audit` (audit.py v2 from the copied scripts, decode check of every file, licence reading from `licence_seen`).
