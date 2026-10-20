import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Compositions load shared/gv.js directly; `hyperframes check/preview/render` never build it.
test('shared/gv.js is committed', () => {
  assert.doesNotThrow(() => execFileSync('git', ['ls-files', '--error-unmatch', 'shared/gv.js'], { stdio: 'ignore' }));
});

test('shared/gv.js matches a fresh build of shared/', () => {
  const out = join(mkdtempSync(join(tmpdir(), 'gv-')), 'gv.js');
  execFileSync('npx', ['esbuild', 'shared/index.js', '--bundle', '--format=iife', '--global-name=GV', '--loader:.svg=text', `--outfile=${out}`, '--log-level=warning']);
  assert.equal(readFileSync('shared/gv.js', 'utf8'), readFileSync(out, 'utf8'), 'run `npm run build` and commit shared/gv.js');
});

test('shared/gv3d.js is committed and matches a fresh build of shared/three/', () => {
  assert.doesNotThrow(() => execFileSync('git', ['ls-files', '--error-unmatch', 'shared/gv3d.js'], { stdio: 'ignore' }));
  const out = join(mkdtempSync(join(tmpdir(), 'gv3d-')), 'gv3d.js');
  execFileSync('npx', ['esbuild', 'shared/three/index.js', '--bundle', '--format=iife', '--global-name=GV3D', '--minify', `--outfile=${out}`, '--log-level=warning']);
  assert.equal(readFileSync('shared/gv3d.js', 'utf8'), readFileSync(out, 'utf8'), 'run `npm run build` and commit shared/gv3d.js');
});
