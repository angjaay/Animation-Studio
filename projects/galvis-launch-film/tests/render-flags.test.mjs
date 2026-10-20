import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// The globe and the chamber are WebGL; a GPU host would render them (and the landing dither over the
// globe) differently from SwiftShader. Every render path pins software GL.
test('every render path forces software GL', () => {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.match(pkg.scripts.render, /--no-browser-gpu/);
  assert.match(readFileSync('scripts/animatic.mjs', 'utf8'), /'--no-browser-gpu'/);
});
