import { test } from 'node:test';
import assert from 'node:assert/strict';
import { architectureSvg, BRANCH_COLORS } from '../shared/ui/architecture.js';

test('architecture glimpse: one trunk, three branches, three ends, in act 05 geometry', () => {
  const svg = architectureSvg({ lit: 'enrichment' });
  assert.equal((svg.match(/<path /g) ?? []).length, 4);
  assert.equal((svg.match(/<circle /g) ?? []).length, 3);
  assert.match(svg, /viewBox="0 0 1920 1080"/);
  assert.match(svg, /M960 318 L960 560/); // trunk from the mark to the split, as in act 05
});

test('only the lit branch is at full strength, in its product colour', () => {
  const svg = architectureSvg({ lit: 'enterprise' });
  const ends = [...svg.matchAll(/<circle [^>]*fill="([^"]+)"[^>]*opacity="([^"]+)"/g)].map((m) => [m[1], Number(m[2])]);
  assert.deepEqual(ends.map(([, o]) => o), [0.35, 0.35, 1]);
  assert.equal(ends[2][0], BRANCH_COLORS.enterprise);
});

test('the glimpse is drawn through the same camera push as act 05 ends with', () => {
  assert.match(architectureSvg({ lit: 'workspace', scale: 1.06 }), /transform="matrix\(1\.06 0 0 1\.06 -57\.6 -32\.4\)"/);
});
