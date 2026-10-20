// Pre-render country and province outlines to 1920x1080 SVGs with a fixed projection.
// Usage: node scripts/build-geo.mjs
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { geoContains, geoMercator, geoPath } from 'd3-geo';
import * as shapefile from 'shapefile';
import rewind from '@turf/rewind';

const NE_URL = 'https://naciscdn.org/naturalearth/50m/cultural/ne_50m_admin_0_countries.zip';
const GB_API = 'https://www.geoboundaries.org/api/current/gbOpen/IDN/ADM1/';
const SEA = ['IDN', 'MYS', 'SGP', 'BRN', 'PHL', 'THA', 'VNM', 'LAO', 'KHM', 'MMR', 'TLS'];
const EXTENT = [[80, 60], [1840, 1020]];

async function get(url, as = 'json') {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
  return as === 'json' ? r.json() : Buffer.from(await r.arrayBuffer());
}

const projectionFor = (features) => geoMercator().fitExtent(EXTENT, { type: 'FeatureCollection', features });

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Seeded random points on land, projected into the same frame as the SVG.
function landPoints(features, count, seed) {
  const rnd = mulberry32(seed);
  const project = projectionFor(features);
  const out = [];
  while (out.length < count) {
    const p = [92 + rnd() * 49, -11 + rnd() * 39];
    if (features.some((f) => geoContains(f, p))) out.push(project(p).map((v) => Math.round(v * 10) / 10));
  }
  return out;
}

function toSvg(features, nameOf, stroke = 1) {
  const path = geoPath(projectionFor(features)).digits(1);
  const paths = features
    .map((f) => `  <path data-name="${nameOf(f).replace(/"/g, '')}" d="${path(f)}"/>`)
    .join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" fill="none" stroke="currentColor" stroke-width="${stroke}">\n${paths}\n</svg>\n`;
}

const dir = mkdtempSync(join(tmpdir(), 'ne-'));
writeFileSync(join(dir, 'ne.zip'), await get(NE_URL, 'buffer'));
execFileSync('unzip', ['-q', '-o', join(dir, 'ne.zip'), '-d', dir]);
const ne = await shapefile.read(join(dir, 'ne_50m_admin_0_countries.shp'), join(dir, 'ne_50m_admin_0_countries.dbf'));
const sea = ne.features.filter((f) => SEA.includes(f.properties.ADM0_A3));

const meta = await get(GB_API);
// geoBoundaries rings follow RFC 7946 (counter-clockwise); d3-geo wants clockwise.
const idn = rewind(await get(meta.simplifiedGeometryGeoJSON), { reverse: true });

mkdirSync('assets/geo', { recursive: true });
writeFileSync('assets/geo/sea.svg', toSvg(sea, (f) => f.properties.NAME));
writeFileSync('assets/geo/sea-points.json', JSON.stringify(landPoints(sea, 2500, 1)));
writeFileSync('assets/geo/idn-adm1.svg', toSvg(idn.features, (f) => f.properties.shapeName));
writeFileSync('assets/geo/idn-adm1-bold.svg', toSvg(idn.features, (f) => f.properties.shapeName, 4));

const ledger = JSON.parse(readFileSync('assets/LICENSES.json', 'utf8'));
ledger['geo/sea-points.json'] = { source: 'derived from Natural Earth (scripts/build-geo.mjs, seed 1)', license: 'public domain (Natural Earth)', attribution: 'Made with Natural Earth' };
ledger['geo/sea.svg'] = { source: NE_URL, license: 'public domain (Natural Earth)', attribution: 'Made with Natural Earth' };
ledger['geo/idn-adm1-bold.svg'] = { source: meta.simplifiedGeometryGeoJSON, license: meta.boundaryLicense, attribution: '© OpenStreetMap contributors (geoBoundaries)' };
ledger['geo/idn-adm1.svg'] = { source: meta.simplifiedGeometryGeoJSON, license: meta.boundaryLicense, attribution: '© OpenStreetMap contributors (geoBoundaries)' };
writeFileSync('assets/LICENSES.json', JSON.stringify(Object.fromEntries(Object.entries(ledger).sort()), null, 2) + '\n');
console.log(`sea: ${sea.length} countries, idn: ${idn.features.length} provinces`);
