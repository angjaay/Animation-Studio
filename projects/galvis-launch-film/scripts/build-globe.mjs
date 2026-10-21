// Southeast Asia in lon/lat for the 3D globe: coast rings and the same seeded land points as sea-points.json.
// Usage: node scripts/build-globe.mjs
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { geoContains } from 'd3-geo';
import * as shapefile from 'shapefile';

const NE_URL = 'https://naciscdn.org/naturalearth/50m/cultural/ne_50m_admin_0_countries.zip';
const SEA = ['IDN', 'MYS', 'SGP', 'BRN', 'PHL', 'THA', 'VNM', 'LAO', 'KHM', 'MMR', 'TLS'];

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r2 = (v) => Math.round(v * 100) / 100;
const dir = mkdtempSync(join(tmpdir(), 'ne-'));
const res = await fetch(NE_URL);
if (!res.ok) throw new Error(`${NE_URL}: HTTP ${res.status}`);
writeFileSync(join(dir, 'ne.zip'), Buffer.from(await res.arrayBuffer()));
execFileSync('unzip', ['-q', '-o', join(dir, 'ne.zip'), '-d', dir]);
const ne = await shapefile.read(join(dir, 'ne_50m_admin_0_countries.shp'), join(dir, 'ne_50m_admin_0_countries.dbf'));
const sea = ne.features.filter((f) => SEA.includes(f.properties.ADM0_A3));

// Outer rings only: the coast, not lakes.
const coast = sea.flatMap((f) => (f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates))
  .map((poly) => poly[0].map(([lon, lat]) => [r2(lon), r2(lat)]))
  .filter((ring) => ring.length >= 4);

// Same draw order and seed as build-geo.mjs landPoints(), kept unprojected.
const rnd = mulberry32(1);
const points = [], countries = [];
while (points.length < 2500) {
  const p = [92 + rnd() * 49, -11 + rnd() * 39];
  const home = sea.find((f) => geoContains(f, p));
  if (home) { points.push(p.map(r2)); countries.push(home.properties.ADM0_A3); }
}

writeFileSync('assets/geo/globe-sea.json', JSON.stringify({ coast, points, countries }));
const ledger = JSON.parse(readFileSync('assets/LICENSES.json', 'utf8'));
ledger['geo/globe-sea.json'] = { source: `${NE_URL} (scripts/build-globe.mjs, seed 1)`, license: 'public domain (Natural Earth)', attribution: 'Made with Natural Earth' };
writeFileSync('assets/LICENSES.json', JSON.stringify(Object.fromEntries(Object.entries(ledger).sort()), null, 2) + '\n');
console.log(`coast: ${coast.length} rings, ${coast.reduce((n, r) => n + r.length, 0)} vertices; points: ${points.length}`);
