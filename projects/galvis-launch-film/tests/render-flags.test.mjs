import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// The globe and the chamber are WebGL; a GPU host would render them (and the landing dither over the
// globe) differently from SwiftShader. Every render path pins software GL.
test('every render path forces software GL', () => {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.match(pkg.scripts.render, /--no-browser-gpu/);
  assert.match(readFileSync('scripts/render.mjs', 'utf8'), /'--no-browser-gpu'/);
});

// QA measures what the render shows only if its snapshots run the same GL as the render.
test('every snapshot path forces software GL too', () => {
  for (const file of ['scripts/lib/snap.mjs', 'checks/determinism.test.mjs']) assert.match(readFileSync(file, 'utf8'), /'--no-browser-gpu'/, file);
});

test('index.html loads no script from the network', () => {
  const html = readFileSync('index.html', 'utf8');
  assert.deepEqual([...html.matchAll(/<script[^>]+src="(https?:[^"]+)"/g)].map((m) => m[1]), []);
});
