// Render one still per act at its styleframeAt time and write the review board.
// Usage: node scripts/styleframes.mjs
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { ACTS, actWindow } from '../shared/cues.js';

// What each frame must show, from the spec (§3, §7).
const INTENT = {
  'act01-world': ['Dark → light', 'Dawn earth in the landing dither; SEA coastline and seeded signals on a perspective plane.', 'EVERY LOCATION HOLDS INTELLIGENCE.'],
  'act02-complexity': ['Light', 'Seven isometric data plates pile up into a muddle (imagery, terrain, environment, infrastructure, demography, boundaries, analytics).', 'MORE DATA DOESN’T ALWAYS MEAN MORE CLARITY.'],
  'act03-reveal': ['Light', 'The mark assembled from its anatomy — plates, hexagon, arrow — sharp, with keylines; leftover dither dust at the edges.', 'GALVIS · Geospatial Intelligence Virtual Assistant System'],
  'act04-core': ['Dark', 'Inside the hexagon: six modules wired to one core, each with a mini visual — one engine, not feature cards.', 'GALVIS · CORE TECHNOLOGY'],
  'act05-products': ['Dark', 'The arrow’s thread splits into three branches in the sub-brand colours; particles flow from the one core.', 'WORKSPACE · DATA ENRICHMENT · ENTERPRISE'],
  'act06-workspace': ['Light', 'Reconstructed GALVIS Workspace: agent plan running, suitability surface painted over Riau.', 'UNDERSTAND'],
  'act07-enrichment': ['Light', 'One polygon enriched by ten attribute maps from gisact.io; the last cells are still raw (dithered).', 'Turn Location Into Intelligence'],
  'act08-enterprise': ['Light', 'Sector strip: the scan beam resolves raw data into a forest-fire risk layer; reconstructed label and legend.', 'Forestry · Forest Monitoring → Disturbance Detection → Conservation Intelligence'],
  'act09-reunify': ['Light → dark', 'Everything returns to the core and becomes a map of active intelligence nodes in the three product colours.', 'ONE CORE.'],
  'act10-final': ['Dark', 'Reverse lockup over the dawn dither, as on galvis.io.', 'SEE MORE. UNDERSTAND BETTER. DECIDE SMARTER.'],
};

// Compositions load the shared/gv.js bundle; rebuild it so edits to shared/ are picked up.
execFileSync('npm', ['run', 'build'], { stdio: 'inherit' });
const out = 'styleframes';
mkdirSync(out, { recursive: true });
const tmp = mkdtempSync(join(tmpdir(), 'styleframes-'));
const times = ACTS.map((a) => a.styleframeAt).join(',');
execFileSync('npx', ['--yes', 'hyperframes@0.8.181', 'snapshot', '--at', times, '--no-end', '--output', tmp], { stdio: 'inherit' });

const frames = readdirSync(tmp).filter((f) => /^frame-\d+-at-.*\.png$/.test(f)).sort();
if (frames.length !== ACTS.length) throw new Error(`expected ${ACTS.length} frames, got ${frames.length}`);
ACTS.forEach((act, i) => copyFileSync(join(tmp, frames[i]), join(out, act.file.replace('.html', '.png'))));
rmSync(tmp, { recursive: true, force: true });

const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
const cards = ACTS.map((act, i) => {
  const w = actWindow(act.id);
  const [bg, intent, copy] = INTENT[act.id];
  const png = act.file.replace('.html', '.png');
  return `<figure>
  <img src="${png}" alt="Act ${String(i + 1).padStart(2, '0')} styleframe" />
  <figcaption>
    <b>${String(i + 1).padStart(2, '0')} · ${act.id.replace(/^act\d+-/, '')}</b>
    <span>${fmt(w.start)}–${fmt(w.end)} · bars ${act.bars[0]}–${act.bars[1]} · frame at ${act.styleframeAt}s · ${bg}</span>
    <p>${intent}</p>
    <q>${copy}</q>
  </figcaption>
</figure>`;
}).join('\n');

writeFileSync(join(out, 'board.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>GALVIS Launch Film — Styleframes</title>
<style>
  body { margin: 0; padding: 40px 16px; background: #F5F6F8; color: #032750; font: 16px/1.5 Mulish, system-ui, sans-serif; }
  main { max-width: 1600px; margin: 0 auto; }
  h1 { font: 700 32px/1.2 "Plus Jakarta Sans", system-ui, sans-serif; margin: 0 0 8px; }
  header p { color: #324966; margin: 0 0 32px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 640px), 1fr)); gap: 32px; }
  figure { margin: 0; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 4px rgba(3,39,80,.12); }
  img { display: block; width: 100%; height: auto; }
  figcaption { padding: 16px 20px 20px; display: grid; gap: 6px; }
  figcaption span { color: #667085; font-size: 14px; }
  figcaption p { margin: 0; color: #324966; }
  q { font-weight: 700; quotes: none; }
</style>
</head>
<body>
<main>
<header>
  <h1>GALVIS Launch Film — Styleframes</h1>
  <p>One key frame per act, rendered from the HyperFrames project at each act’s styleframe time. Spec: docs/superpowers/specs/2026-10-20-galvis-launch-film-design.md</p>
</header>
<div class="grid">
${cards}
</div>
</main>
</body>
</html>
`);
console.log(`wrote ${ACTS.length} styleframes and ${join(out, 'board.html')}`);
