import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bayerVisible } from '../shared/curtain.js';

const opened = (p) => {
  let n = 0;
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) if (bayerVisible(x, y, p)) n++;
  return n;
};

test('the curtain opens cell by cell in Bayer order', () => {
  assert.equal(opened(0), 0);
  assert.equal(opened(0.5), 8);
  assert.equal(opened(1), 16);
});
