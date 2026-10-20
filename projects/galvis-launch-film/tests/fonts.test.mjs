import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';

const css = readFileSync(new URL('../shared/tokens.css', import.meta.url), 'utf8');

test('every @font-face url points at a real local font file', () => {
  const urls = [...css.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((m) => m[1]);
  assert.ok(urls.length >= 3, 'expected at least three font files');
  for (const u of urls) {
    assert.ok(!/^https?:/.test(u), `font must be local: ${u}`);
    const size = statSync(new URL(`../shared/${u}`, import.meta.url)).size;
    assert.ok(size > 10_000, `${u} is ${size} bytes`);
  }
});

test('brand tokens use the exact hex values', () => {
  for (const hex of ['#032750', '#024ABC', '#1FAFA1', '#86C36A', '#FFFFFF', '#E4E8EF', '#F5F6F8']) {
    assert.ok(css.toUpperCase().includes(hex), hex);
  }
});
