// The same commit renders the same pixels: snapshot three times (globe, chamber, sector strip) twice, and a
// frame reached cold must equal the same frame reached after its neighbours (no state carried between seeks).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const shoot = (times) => {
  const dir = mkdtempSync(join(tmpdir(), 'det-'));
  execFileSync('npx', ['--yes', 'hyperframes@0.8.181', 'snapshot', '--at', times.join(','), '--no-end', '--no-browser-gpu', '--timeout', '60000', '--output', dir], { stdio: 'ignore' });
  const files = readdirSync(dir).filter((f) => /^frame-\d+-at-.*\.png$/.test(f));
  return new Map(files.map((f) => [Number(f.match(/-at-([\d.]+)s\.png$/)[1]), readFileSync(join(dir, f))]));
};

test('two snapshots of the same frames are byte-identical', { timeout: 600000 }, () => {
  const a = shoot([5, 40, 100]), b = shoot([5, 40, 100]);
  assert.equal(a.size, 3);
  for (const [t, png] of a) assert.ok(png.equals(b.get(t)), `frame at ${t}s differs`);
});

// 22.05: act 02's dithered plates fading in the vortex; 113.4: act 10's rising dawn.
test('a frame is the same whether it is reached cold or after its neighbours', { timeout: 600000 }, () => {
  const cold = shoot([22.05, 113.4]);
  const warm = shoot([21.5, 21.9, 22.0, 22.05, 112.6, 113.0, 113.36, 113.4]);
  for (const t of [22.05, 113.4]) assert.ok(cold.get(t).equals(warm.get(t)), `frame at ${t}s depends on what was rendered before it`);
});
