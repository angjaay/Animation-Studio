// QA one act from real frames: its events land within one frame of their time (the frame before vs
// the frame after; the two impacts keep the stricter same-frame rule in scripts/sync-check.mjs), its outgoing boundary matches (unless it
// is a cut), and nothing freezes for more than a second outside the holds. Writes a 0.5 s contact sheet.
// Usage: node scripts/qa-act.mjs <act-id>
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { CUES, actWindow } from '../shared/cues.js';
import { boxDiff, frameDiff, staticSpans } from './lib/frames.mjs';
import { snapshot, r3 } from './lib/snap.mjs';

export const EVENT_MIN = 8, MATCH_MAX = 6, STEP = 0.25;

const id = process.argv[2];
const { start, end } = actWindow(id);
const FRAME = 1 / CUES.fps;
const grid = Array.from({ length: Math.round((end - start) / STEP) }, (_, i) => start + i * STEP);
const events = CUES.events.filter((e) => e.act === id);
const boundary = CUES.boundaries.find((b) => b.t === end);
const times = [...grid, ...events.flatMap((e) => [e.t - FRAME, e.t + FRAME]), ...(boundary ? [end - FRAME, end] : [])];

execFileSync('npm', ['run', 'build'], { stdio: 'ignore' });
const { frames } = snapshot(times);
const at = (t) => frames.get(r3(t)).grey;
const results = [];
const report = (ok, line) => { results.push(ok); console.log(`${ok ? 'PASS' : 'FAIL'} ${line}`); };

for (const e of events) {
  const d = boxDiff(at(e.t - FRAME), at(e.t + FRAME), e.box);
  report(d >= EVENT_MIN, `event ${e.t.toFixed(2)} s ${e.what}: ${d.toFixed(1)} grey levels in box (need ≥ ${EVENT_MIN})`);
}
if (boundary) {
  const d = frameDiff(at(end - FRAME), at(end));
  if (boundary.kind === 'match') report(d <= MATCH_MAX, `boundary ${end} s (match): ${d.toFixed(1)} grey levels (need ≤ ${MATCH_MAX})`);
  else console.log(`---- boundary ${end} s is a cut: ${d.toFixed(1)} grey levels`);
}
const diffs = grid.map((t, i) => (i === 0 ? 255 : frameDiff(at(grid[i - 1]), at(t))));
const spans = staticSpans(diffs, 1 / STEP, { holds: CUES.holds, t0: start });
report(spans.length === 0, `no frozen spans > 1.0 s${spans.length ? `: ${spans.map(([a, b]) => `${a.toFixed(2)}–${b.toFixed(2)}`).join(', ')}` : ''}`);

// Contact sheet: every 0.5 s, labelled.
mkdirSync('review/acts', { recursive: true });
const seq = mkdtempSync(join(tmpdir(), 'sheet-'));
const half = grid.filter((_, i) => i % 2 === 0);
half.forEach((t, i) => copyFileSync(frames.get(r3(t)).file, join(seq, `${String(i).padStart(3, '0')}.png`)));
const cols = 6, rows = Math.ceil(half.length / cols);
const font = execFileSync('fc-match', ['-f', '%{file}', 'monospace'], { encoding: 'utf8' }).trim();
execFileSync('ffmpeg', ['-v', 'error', '-y', '-framerate', '1', '-i', join(seq, '%03d.png'), '-vf', [
  'scale=320:180',
  `drawtext=fontfile=${font}:text='%{eif\\:${start}*10+n*5\\:d}':x=6:y=6:fontsize=14:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=3`,
  `tile=${cols}x${rows}:padding=4:color=0x1a1a1a`,
].join(','), '-frames:v', '1', '-q:v', '3', `review/acts/${id}.jpg`]);
console.log(`sheet review/acts/${id}.jpg (labels in tenths of a second)`);
process.exit(results.every(Boolean) ? 0 : 1);
