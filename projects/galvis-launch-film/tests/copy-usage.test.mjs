import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { offenders } from './lib/copy-scan.mjs';

const dir = new URL('../compositions/', import.meta.url);

for (const file of readdirSync(dir).filter((f) => f.endsWith('.html'))) {
  test(`${file} takes its on-screen copy from copy.json`, () => {
    assert.deepEqual(offenders(readFileSync(new URL(file, dir), 'utf8')), []);
  });
}
