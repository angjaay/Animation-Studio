import { test } from 'node:test';
import assert from 'node:assert/strict';
import { branchGeometry } from '../shared/thread.js';

const nums = (d) => d.match(/-?\d+(\.\d+)?/g).map(Number);
const G = branchGeometry({ top: [960, 120], split: [960, 540], ends: [[480, 900], [960, 900], [1440, 900]] });

test('trunk runs straight from top to split', () => {
  assert.match(G.trunk, /^M960 120/);
  assert.deepEqual(nums(G.trunk).slice(-2), [960, 540]);
});

test('every branch starts at the split and ends exactly at its end point', () => {
  const ends = [[480, 900], [960, 900], [1440, 900]];
  G.branches.forEach((d, i) => {
    assert.match(d, /^M960 540/);
    assert.deepEqual(nums(d).slice(-2), ends[i]);
  });
});

test('the middle branch is vertical', () => {
  const n = nums(G.branches[1]);
  for (let i = 0; i < n.length; i += 2) assert.equal(n[i], 960);
});

test('side branches leave the split vertically (first control point above the split x)', () => {
  const n = nums(G.branches[0]);
  assert.equal(n[2], 960);
  assert.ok(n[3] > 540);
});
