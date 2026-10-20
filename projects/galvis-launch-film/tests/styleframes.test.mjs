import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { ACTS } from '../shared/cues.js';

const at = (p) => new URL(`../styleframes/${p}`, import.meta.url);
const pngSize = (buf) => [buf.readUInt32BE(16), buf.readUInt32BE(20)];

test('one 1920x1080 styleframe per act', () => {
  for (const act of ACTS) {
    const name = act.file.replace('.html', '.png');
    assert.ok(existsSync(at(name)), name);
    assert.deepEqual(pngSize(readFileSync(at(name))), [1920, 1080], name);
  }
});

test('the review board shows all ten frames', () => {
  const board = readFileSync(at('board.html'), 'utf8');
  for (const act of ACTS) assert.ok(board.includes(act.file.replace('.html', '.png')), act.id);
});
