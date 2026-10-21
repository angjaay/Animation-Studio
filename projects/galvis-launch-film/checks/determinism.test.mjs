// The same commit renders the same pixels: snapshot three times (globe, chamber, sector strip) twice.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const shoot = () => {
  const dir = mkdtempSync(join(tmpdir(), 'det-'));
  execFileSync('npx', ['--yes', 'hyperframes@0.8.181', 'snapshot', '--at', '5,40,100', '--no-end', '--timeout', '60000', '--output', dir], { stdio: 'ignore' });
  return readdirSync(dir).filter((f) => f.endsWith('.png')).sort().map((f) => readFileSync(join(dir, f)));
};

test('two snapshots of the same frames are byte-identical', { timeout: 600000 }, () => {
  const a = shoot(), b = shoot();
  assert.equal(a.length, 3);
  a.forEach((png, i) => assert.ok(png.equals(b[i]), `frame ${i} differs`));
});
