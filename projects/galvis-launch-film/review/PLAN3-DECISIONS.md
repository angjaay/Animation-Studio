# Rencana 3 — keputusan selama eksekusi

Disalin dari ledger eksekusi (`.superpowers/sdd/…/progress.md`, tidak di-commit) sebelum workspace dihapus.
Tiap ruling: apa yang diputuskan — mengapa — biayanya bila keliru. Bahasa asli ledger (Inggris).

## Rulings

- Task 1: Ruling: register hides `<id>-root`, not the `[data-composition-id]` host — the HyperFrames runtime owns the host's visibility for clip timing, and an inline `visible` there could show an act outside its window — cost if wrong: none.
- Task 1: Ruling: the copy scanner moved to tests/lib/copy-scan.mjs so its rules are unit-tested with fixtures; the word "copy" stays an exclusion (it marks GV.COPY lookups) — cost if wrong: a phrase containing "copy" slips through.
- Task 1: Ruling: GSAP 3.14.2 vendored from the npm package into vendor/gsap.min.js (same version the CDN served), added as a devDependency; a test asserts index.html loads no network script — cost if wrong: 72 KB in the repo.
- Task 1: Ruling: the landing-palette perf case passed without changes (9 ms < 20 ms) — it closes a coverage gap, not a bug.
- Task 2: Ruling: events are measured between the frame before and the frame after their time (t − 1/30 vs t + 1/30), i.e. "within one frame" — a tween that starts on the beat shows progress 0 on the beat frame itself; the two impacts keep the stricter same-frame check in sync-check.mjs — cost if wrong: an accent can trail its beat by one frame.
- Task 2: Ruling: frozen-span detection samples every 0.25 s (4 fps) both in qa-act and on the full render, with threshold 0.15 grey levels; at 30 fps per-frame differences of slow drifts would read as frozen — cost if wrong: a very slow drift could pass as motion.
- Task 2: Ruling: snapshots wait up to 60 s for render-ready (`--timeout 60000`); the default 5 s fired before the globe textures loaded — cost if wrong: slower QA.
- Task 2: Ruling: the plan's UI_EASE(0.5) ≈ 0.8 was wrong; cubic-bezier(.2,0,0,1) solved by hand gives 0.878 — test uses the derived value — cost if wrong: none.
- Task 2: Ruling: scripts/render.mjs replaces animatic.mjs's body (quality/name/sheet options); animatic.mjs is now a wrapper with the old defaults — cost if wrong: none.
- Task 3: Ruling: layer accents (cities 6.0, vegetation 7.0, water 8.0) switch on at the beat with a 2.2× overshoot that settles in ~0.5 s, so the accent lands on the frame instead of fading in — cost if wrong: a softer, slower build.
- Task 3: Ruling: the opening curtain now starts at 0.25 s (was 1.5 s) with a slow-start curve, so the globe's rim appears in the first half second — the rubric asks for a hook in the first 0.5 s and the 0–1.5 s black span was a freeze — cost if wrong: 1.25 s less pure black before the earth.
- Task 3: Ruling: event boxes moved to where the change measurably happens (diff map at 6.0 and 10.0); the plan's whole-globe box diluted real 13–28-level changes — cost if wrong: none.
- Task 3: Ruling: the constellation links the first 400 signals to their two nearest neighbours under 4° (computed once), drawn on from 10.0 over 1 s with UI_EASE — cost if wrong: denser/sparser web.
- Task 4: Ruling: the plan's "levels 4→2 on the top plates" is dropped — the brand palette ignores `levels` (it maps luminance to the five brand colours); the messier stack is carried instead by each plate's content drifting its own way (dither redrawn with a moving crop, so the pattern stays screen-locked), faster as plates land — cost if wrong: less visible dither chaos.
- Task 4: Ruling: plates fall in over the 0.25 s before their beat and land on it with a white/teal edge flash (anticipation → hit), instead of starting to drop on the beat — cost if wrong: none.
- Task 4: Ruling: the moiré gratings (two rotating line layers, non-dither) stay for the eye but are not what clears the frozen-span check — their 1 px lines vanish at the 160×90 analysis scale — cost if wrong: none.
- Task 4: Ruling: plate-landing boxes are per plate (a 380 px band around each slot), measured from the diff map at 15.0 — cost if wrong: none.
- Task 5: Ruling: particle targets and colours come from the mark's own silhouette, rasterised once from the logo SVG parts (alpha > 160, 3 px grid); a third of the particles are 2×2 dither cells, a third short contour strokes — cost if wrong: none.
- Task 5: Ruling: the hexagon locks in as six wedge copies of the hexagon layer (clip-path sectors), one per 1/16 bar from 26.0, each sliding 40 px inward; the finished mark is the untouched flat logo — cost if wrong: none.
- Task 5: Ruling: "mark complete" on 27.0 is a one-frame teal drop-shadow pulse around the logo that decays over 0.7 s — the plates alone change too little of the frame to read as the hit — cost if wrong: remove one filter tween.
- Task 5: Ruling: the echo keylines now ripple outward continuously (three hexagons, 1.5 s period) instead of holding still — the name holds 28.75–33.5 otherwise froze — cost if wrong: calmer end frame.
- Task 5: Ruling: the tagline (bar 17) uses the body text colour instead of the muted one and rises without blur; the full name keeps blur-to-baseline with blur scaled to its 32 px size (4 px) — cost if wrong: a slightly stronger third line.
- Task 5: Ruling: act 04 got a full-navy entry veil fading out over 0.35 s so the 34.0 boundary (owned by act 03) matches — cost if wrong: none.
- Task 6: Ruling: module visuals are SVG/canvas redrawn from activation progress (p 0→1 over 1.2 s) plus idle time; before activation each shows its raw state (faint lines, scattered tiles, dithered tile, lone point, empty, outlined zones with "--") — cost if wrong: none.
- Task 6: Ruling: the EO tile is two 124 px canvases (dithered raw / clear-derived NDVI) composited 1:1 behind a beam, never scaled — cost if wrong: none.
- Task 6: Ruling: activation moves to the beat after each bar line (A(20+k, 1)), where the packet arrives; on that frame the disc gets a hard white ring + teal bloom and pops 1.15× (expo) — cost if wrong: none.
- Task 6: Ruling: bar 26 keeps the two-line GALVIS / CORE TECHNOLOGY header (reads as core.final) rather than one long line; the question pill flashes teal on 50.0 ("answered") and lifts away — cost if wrong: switch to core.final in one line.
- Task 6: Ruling: second labels are not repeated when they equal the module name (Spatial Analytics) — cost if wrong: one duplicate line.
- Task 6: Ruling: the last 0.9 s (51.0–51.9) fades the chamber, modules and glow, crossfades to act 05's opening glow, and moves the logo to act 05's (960, 510.5, 1.205×) — boundary 52.0 now 0.4 grey levels — cost if wrong: none.
- Task 6: Ruling: the copy scanner treats the film's three font family names as non-copy (fixture test RED → GREEN) — cost if wrong: a two-word phrase equal to a font name slips through.
- Task 7: Ruling: a slow camera push (1.0 → 1.06, smoothstep over the act) on a wrapper keeps the holds alive; the act 05 → 06 handoff disc position is computed once in shared/handoff.js (GV.HANDOFF) from that push, so act 06 opens from the same place — cost if wrong: none.
- Task 7: Ruling: lockups are logo-system lockups (mini mark + product name, 28 px) with a product-colour glow (white core) flashed on each note and a ring pulse at the branch end — thin type alone moved the frame only ~7 levels — cost if wrong: remove the glow.
- Task 7: Ruling: "choosing" the left branch on 61.5 is a quick (0.2 s expo) dim of the other branches to 30 % plus a light ring and the bloom disc — cost if wrong: a softer selection.
- Task 7: Ruling: the 62.0 boundary is closed in Task 8 (act 06 must open from this frame); Task 7 is complete with that check carried forward — cost if wrong: none, Task 8's QA owns it.
- Task 8: Ruling: the architecture glimpse between product acts is one shared renderer (shared/ui/architecture.js, GV.architectureSvg) in act 05's geometry and camera push, one branch lit; tested for structure, lit/dim state and the push matrix (RED → GREEN) — cost if wrong: none.
- Task 8: Ruling: Workspace handles take eased progress k (setStep, flashLayer, setInsight); act 06 passes GV.since(t, change, 0.18) with UI_EASE — 180 ms, cubic-bezier(.2,0,0,1) from movee-fe — cost if wrong: none.
- Task 8: Ruling: the opening reproduces act 05's last frame (navy + its pushed glow as a canvas pattern, light disc at GV.HANDOFF) and dissolves it in Bayer order (cell 6) while the clip opens from the disc to the window — boundary 62.0 now 3.2 — cost if wrong: none.
- Task 8: Ruling: the map reacts per step — drifts before the zoom (redrawn crop), zooms on step 1 (narrowing crop), dataset layers blink on step 2, a scan band crosses on step 3, the surface is wiped on and the imagery resolves on step 4, the insight card rises with its chart growing on step 5 — cost if wrong: none.
- Task 8: Ruling: the closing accent moves from 75.0 to 75.5, where the window actually collapses into the disc and the navy and architecture return in one stroke (the plan's 75.0 was the start of an accelerating shrink) — cost if wrong: none.
- Task 8: Ruling: the copy scanner judges a template literal as a whole before splitting it at interpolations (CSS such as `inset(${a}px … round ${r}px)` is not copy; fixture RED → GREEN) — cost if wrong: none.
- Task 9: Ruling: globe-sea.json gains `countries` aligned with `points` (same seed and order as sea-points.json; points and coast verified byte-identical); act 07's pull-back keeps only Indonesia's 1,032 points and lights them in one 0.5 s wave ("serentak") — cost if wrong: none.
- Task 9: Ruling: act 07 opens on act 06's last frame (architecture, middle branch lit) and pushes the camera into that branch end (vector, 1 → 2.4×) while the navy dissolves in Bayer order; it closes with the navy back on 89.5 and the right branch lit (act 08 opens from there) — 76.0 boundary 0.1 — cost if wrong: none.
- Task 9: Ruling: the navy backdrop is a shared canvas (GV.navyGlowCanvas) used by acts 06 and 07 (and 08) — cost if wrong: none.
- Task 9: Ruling: rows and flow steps flash a teal background as they land; boxes fitted per row (y = 250 + 66k) and per step from the diff map — cost if wrong: none.
- Task 9: Ruling: a slow camera drift on the region map (vector, redrawn) carries 84–89.5 so the chain and the positioning line never sit on a frozen frame — cost if wrong: none.
- Task 10: Ruling: the strip drifts by redrawing both canvases of the live sector on a crop that moves 12 % of its width over the sector's 2.25 s (inside a 7 % margin each side; clamped to the sector's own window), so the dither stays screen-locked; Mining's pressure overlay is repainted after each redraw — cost if wrong: redraw cost (2 × 640×200 cells per frame).
- Task 10: Ruling: Forestry's raw side is ESC/biodiversity (spec), not the Riau scene — cost if wrong: none.
- Task 10: Ruling: the plugboard (bar 47) now holds to the bar line and cuts hard to the first sector on 94.0 instead of fading over 0.2 s — cost if wrong: a harder cut.
- Task 10: Ruling: flashes move to the 1/4-beat grid (103.0 / 103.25 / 103.5, 0.25 s each) from thirds of a second — cost if wrong: 0.08 s less per flash.
- Task 10: Ruling: act 08 opens from act 07's last frame (navy, architecture, right branch lit), pushes into the right branch end and dissolves in Bayer order; the title lands on 91.0; the last 0.3 s clear to plain Light Gray for act 09's curtain — boundaries 90.0 and 106.0 both 0.0 — cost if wrong: none.
- Task 11: Ruling: the foldback rooms are small clear canvases drawn from the acts' own assets (Workspace window with the Riau map, the profile card, the fire-risk strip); they pop on the bells, fold into product-colour badges (GV.lerpRect, radius → 50 %) and climb to the core, arriving 0.9 s after leaving — cost if wrong: none.
- Task 11: Ruling: bar 55's full chord is a light pulse from the core; the hold is kept alive by light rising up the branches and a slow 5 % push on the diagram — cost if wrong: none.
- Task 11: Ruling: the map's nodes now light together on 110.0 with a pop, and their links flash with them (was a 1.2 s stagger with static links) — the dissolve from the diagram starts 0.4 s earlier around them — cost if wrong: a less gradual reveal.
- Task 11: Ruling: the two lines move to the grid (110.25 / 110.75); the second (30 px) line's blur is scaled to 4 px — cost if wrong: none.
- Task 12: Ruling: the contours are redrawn from time with drifting phases and breathing amplitude (noise-contour-etch) instead of translating — cost if wrong: none.
- Task 12: Ruling: the dawn is lightly dithered and keeps rising: its resolve goes 0.15 → 0.45 across the act (redrawn, screen-locked) — spec "ber-dither tipis" — cost if wrong: a brighter last frame before black.
- Task 12: Ruling: the three phrases land one per beat on bar 58 (114.0 / 114.5 / 115.0; was 0.6 s apart); galvis.io gets a 4 px teal underline drawn from the centre on 118.0; the lockup takes a slow 3 % push through bars 59–60 — the contours alone left 116.5–118 frozen at analysis scale — cost if wrong: a slightly busier end card.
- Task 13: Ruling: the jury round is scored by me, not a fresh subagent — the user said "Kamu kritik hasilnya nanti" — the legibility test (Step 2b) still goes to a no-context subagent, since an author cannot be a naive viewer — cost if wrong: author blind spots in the scores.
- Task 13: Ruling: test:film on film-v1 fails only on 7 subtle events (7.0–7.6 vs 8; snapshots 8.4–8.8: H.264 softens them) — the jury runs on v1 and the events are fixed in Task 14 (jury fixes 3, 5, 8 cover all seven) instead of a pre-jury re-render — cost if wrong: one render cycle.
- Task 14: Ruling: jury fix 2 is one shared change — mountCurtain takes { origin, band } and opens radially (radialProgress, tested) — used by acts 01, 06, 07, 08, 09; committed with act 01, its first user — cost if wrong: none.
- Task 14: Ruling: act 07 title event was carried by the old curtain finishing on 77.0; the headline now lands on 77.0 (tag leads by 0.12 s) and its box is refitted to the headline [96,150,600,56] — cost if wrong: none.
- Task 14: Ruling: act 01 cities beat lost its margin with the softer dawn; on the beat the city-light threshold drops (0.10 → 0.02) so the network flashes (10.4) — cost if wrong: a brighter beat at 6.0.
- Task 14: Ruling: act 02 landings flash white (0.45) over the whole plate, not teal — teal over the teal plates barely changed luminance (plate 5 at 7.3); now 14.8–79.1 — cost if wrong: a brighter landing.
- Task 14: Ruling: act 03 text events refitted to the diff map of the larger lines ([504,768,900,36], [624,828,672,36]) — cost if wrong: none.
- Task 14: Ruling: act 04 dolly is 8 % (not the jury's 12 %) with a lower aim — 12 % pushed Earth Observation's label to the frame edge — cost if wrong: a slightly gentler build.
- Task 14: Ruling: jury fix 6 partly void — product names are already 28 px and branch strokes 3 px (I misread them from the 320 px sheet); only the core naming and the moving mark were applied — cost if wrong: none.
- Task 14: Ruling: jury fix 3's window punch-in replaced by an agent-panel lift (1.2× about its corner, 66.0–70.2) — scaling the window would scale the screen-locked dither map, which the spec forbids — cost if wrong: a smaller move than a full camera punch.
- Task 14: Ruling: jury fix 7's wordmark tracking-in replaced by a converge-and-pop (the wordmark is one SVG, letters are not separable without re-drawing the brand mark) — new event 112.5 on the grid — cost if wrong: no tracking animation.
- Task 14: Ruling: jury's 'true peak +0.3 dB headroom' not applied — holding the temp score's m4a at -1.6 dBTP forced a -7.9 dBFS limiter ceiling and erratic AAC overshoot; the film meets the spec (-1.0 ≤ -1 dBTP, gated by test:film) and Plan 4 replaces the score — cost if wrong: a render that lands at -0.9 fails test:film and needs a re-encode.
- Task 15: Ruling: round 2 scored by me again (user's instruction from round 1 carried forward), noted as an upper bound in jury-2.md — cost if wrong: scores biased up; an independent jury is offered to the user.
- Task 15: Ruling: gate passed on film-v2, so no fix round 2 and no film-v3; the hand-over is v2 — cost if wrong: one extra round later.
- Task 15: Ruling: the player page keeps its link (animatic page updated to film v2, title 'GALVIS Launch Film') instead of a new page — cost if wrong: none.
- Final: Ruling: review Important 2 (act 02 stack rotates/scales dithered plates while breathing) — kept: the plates are objects in an isometric scene whose dither already moves with them (perspective tilt, fall, vortex spin, all from Plan 2); the screen-lock rule protects flat layers — cost if wrong: mild pattern shimmer on the plates 15.75–22 s after compression.
- Final: Ruling: review Important 3 (act 04 EO tile scaled with its module) — kept for the same reason: a 124 px texture on a module riding a 3D orbit; drawing it at screen size every frame buys little — cost if wrong: shimmer inside one small tile.
- Final: Ruling: review Important 7 (gate self-scored) — stands as the user's instruction ("Kamu kritik hasilnya nanti"); disclosed in jury-2.md and FILM.md, with an independent jury offered before Plan 4 — cost if wrong: Plan 4 starts on picture that an outside jury would score lower.

## Perbaikan dari review akhir

- Final: fixed seek-history state in acts 02 and 10 — determinism 'a frame is the same whether it is reached cold or after its neighbours' RED (22.05 s) → GREEN, suite 128/128
- Final: fixed snapshots without software GL — render-flags 'every snapshot path forces software GL too' RED→GREEN, suite 128/128
- Final: fixed act 10 frame clock before await (TDZ on failed load) — timing '10-final.html adds its frame clock after its last await' RED→GREEN, suite 128/128
- Final: fixed act 03 camera scaling the dithered dust — timing 'act 03 moves a camera wrapper…' RED→GREEN, qa act03 PASS, suite 128/128
- Final: fixed missing plate 4 landing event — cues 'act 02 checks every plate landing' RED→GREEN, qa act02 plate 4 13.2 PASS, suite 128/128

## Minor yang ditunda

- Final: minor (deferred): 26.5 "arrow folds" box also catches wedge 4 (lands 26.5 in the same box); 70.0 step-1 box overlaps the panel settle.
- Final: minor (deferred): snap.mjs sorts frame files lexicographically; breaks at ≥ 100 snapshots (act 07 uses 92).
- Final: minor (deferred): geo test checks only the countries array length, not alignment.
- Final: minor (deferred): act 08 upscale test allows 2× (jury said 1.5×) and misses the three flash glimpses and the MORO strip.
- Final: minor (deferred): copy key core.final unused; act 05 composes reveal.name + core.label.
- Final: minor (deferred): register's root hiding is overridden by descendants set visible before an await (safe today); no test that each composition has <id>-root.
- Final: minor (deferred): EVENT_MIN / MATCH_MAX / STEP duplicated in qa-act.mjs and film.test.mjs.
- Final: minor (deferred): act 03 wedges at 26.125 / 26.375 / 26.625 sit on the 1/16 grid (plan's own wording).
