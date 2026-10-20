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
