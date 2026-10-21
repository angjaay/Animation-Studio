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

test('licence notices are on screen in the final act', () => {
  const credits = copy['final.credits'] ?? '';
  for (const notice of ['Contains modified Copernicus Sentinel data', 'OpenStreetMap contributors', 'Natural Earth', 'NASA']) {
    assert.ok(credits.includes(notice), notice);
  }
  const html = readFileSync(new URL('../compositions/10-final.html', import.meta.url), 'utf8');
  assert.ok(html.includes("GV.COPY['final.credits']"));
});

test('core module second labels are verbatim from the spec (→ is drawn as a chevron between parts)', () => {
  const join = (parts) => parts.join(' → ');
  assert.equal(join(copy['core.sub.ai']), 'Natural Language → Spatial Intelligence');
  assert.equal(join(copy['core.sub.data']), 'Multi-source Integration · Automated Data Pipeline');
  assert.equal(join(copy['core.sub.eo']), 'Earth Observation Intelligence');
  assert.equal(join(copy['core.sub.analytics']), 'Spatial Analytics');
  assert.equal(join(copy['core.sub.ml']), 'Machine Learning & Predictive Intelligence');
  assert.equal(join(copy['core.sub.decision']), 'Data → Analysis → Insight → Decision');
});
