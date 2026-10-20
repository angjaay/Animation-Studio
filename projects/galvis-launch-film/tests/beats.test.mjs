import { test } from 'node:test';
import assert from 'node:assert/strict';
import { at } from '../shared/beats.js';

test('at() returns act-local seconds for a bar and beat', () => {
  assert.equal(at('act01-world', 1), 0);
  assert.equal(at('act03-reveal', 13), 0);
  assert.equal(at('act05-products', 29), 4);
  assert.equal(at('act05-products', 30, 1), 6.5);
});

test('at() rejects bars outside the act', () => {
  assert.throws(() => at('act03-reveal', 12));
  assert.throws(() => at('act03-reveal', 18, 1));
});
