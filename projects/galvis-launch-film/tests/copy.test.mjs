import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const copy = JSON.parse(readFileSync(new URL('../shared/copy.json', import.meta.url), 'utf8'));

test('copy is verbatim from the spec', () => {
  assert.equal(copy['complexity.line1'], 'MORE DATA DOESN’T ALWAYS MEAN MORE CLARITY.');
  assert.equal(copy['final.url'], 'galvis.io');
  assert.equal(copy['final.tagline'], 'SEE MORE. UNDERSTAND BETTER. DECIDE SMARTER.');
});

test('list lengths match the spec', () => {
  assert.equal(copy['enterprise.sectors'].length, 4);
  assert.equal(copy['enterprise.flash'].length, 3);
  assert.equal(copy['enrichment.attrs'].length, 10);
  assert.deepEqual(copy['workspace.words'], ['ASK', 'ANALYZE', 'VISUALIZE', 'UNDERSTAND']);
});

test('no string has stray whitespace', () => {
  const walk = (v) => {
    if (typeof v === 'string') assert.equal(v, v.trim(), JSON.stringify(v));
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(copy);
});
