import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Compositions load the committed bundles directly; `hyperframes check/preview/render` never build them.
// `npm test` rebuilds them first (pretest), so compare a fresh build with what is committed at HEAD,
// not with the working tree.
const BUNDLES = [
  ['shared/gv.js', ['shared/index.js', '--bundle', '--format=iife', '--global-name=GV', '--loader:.svg=text']],
  ['shared/gv3d.js', ['shared/three/index.js', '--bundle', '--format=iife', '--global-name=GV3D', '--minify']],
];

for (const [path, args] of BUNDLES) {
  test(`${path} is committed and matches a fresh build of its sources`, () => {
    const committed = execFileSync('git', ['show', `HEAD:./${path}`], { encoding: 'utf8', maxBuffer: 1 << 26 });
    const out = join(mkdtempSync(join(tmpdir(), 'bundle-')), 'out.js');
    execFileSync('npx', ['esbuild', ...args, `--outfile=${out}`, '--log-level=warning']);
    assert.ok(committed === readFileSync(out, 'utf8'), `${path} at HEAD is stale: run \`npm run build\` and commit ${path}`);
  });
}
