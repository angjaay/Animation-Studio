// Render dev/dither-test through HyperFrames and compare its pixels with the reference dither.
// Usage: node scripts/compare-dither.mjs   (exit 1 when more than 0.5% of pixels differ)
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { PNG } from 'pngjs';
import { ditherCell } from '../shared/dither/reference.js';

const CELL = 3, CW = 640, CH = 180;
const dir = mkdtempSync(join(tmpdir(), 'dither-'));
copyFileSync('dev/dither-test/index.html', join(dir, 'index.html'));
copyFileSync('shared/gv.js', join(dir, 'gv.js'));
copyFileSync('assets/earth/dawn.png', join(dir, 'dawn.png'));
execFileSync('npx', ['--yes', 'hyperframes@0.8.181', 'snapshot', '--at', '0.5,1.5', '--no-end', '--output', join(dir, 'out')], { cwd: dir, stdio: 'ignore' });

const png = PNG.sync.read(readFileSync(join(dir, 'out', 'frame-00-at-0.5s.png')));
const source = (cx, cy) => [Math.round((cx / (CW - 1)) * 255), Math.round((cy / (CH - 1)) * 255), 128];
let bad = 0, total = 0;
for (let py = 0; py < 1080; py++) {
  const palette = py < 540 ? 'landing' : 'brand';
  const ly = py % 540;
  for (let px = 0; px < 1920; px++) {
    const want = ditherCell(source(Math.floor(px / CELL), Math.floor(ly / CELL)), Math.floor(px / CELL), Math.floor(ly / CELL), { palette });
    const i = (py * png.width + px) * 4;
    const got = [png.data[i], png.data[i + 1], png.data[i + 2]];
    total++;
    if (got.some((v, k) => Math.abs(v - want[k]) > 2)) bad++;
  }
}
const pct = (100 * bad) / total;
console.log(`mismatch ${pct.toFixed(3)}% (${bad}/${total}); frames in ${join(dir, 'out')}`);
process.exit(pct > 0.5 ? 1 : 0);
