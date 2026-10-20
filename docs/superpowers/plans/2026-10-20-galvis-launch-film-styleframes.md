# GALVIS Launch Film — Rencana 1: Fondasi + Styleframe

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun fondasi proyek HyperFrames film launch GALVIS dan menghasilkan 10 styleframe (satu still per babak) untuk disetujui user sebelum animasi.

**Architecture:** Satu proyek HyperFrames di `projects/galvis-launch-film/`. `index.html` me-mount 10 sub-komposisi (satu per babak) dengan waktu dari `cues.json`. Modul bersama (token, dither WebGL, geometri benang, logo, UI rekonstruksi, peta) dipakai semua babak dan dibawa ke rencana berikutnya. Di rencana ini setiap babak dibangun **dalam keadaan frame kuncinya** (layout final pada `styleframeAt`); gerak/animasi adalah Rencana 3.

**Tech Stack:** HyperFrames CLI 0.8.181 (`npx hyperframes`), GSAP 3.14.2 (CDN jsdelivr, sesuai skeleton HyperFrames), WebGL1 (shader dither), Node 22 (`node --test`, tanpa framework test), Python 3 (`pystac-client`, `rasterio`) untuk citra Sentinel, `d3-geo` + `topojson-client` untuk pra-render peta ke SVG.

**Spec:** `docs/superpowers/specs/2026-10-20-galvis-launch-film-design.md`

### Peta rencana (di luar dokumen ini)

1. **Rencana 1 (dokumen ini):** fondasi + 10 styleframe → persetujuan user.
2. Rencana 2: animatic 2:00 (gerak kasar + score sementara) → persetujuan.
3. Rencana 3: animasi penuh per babak + dua putaran review rubrik.
4. Rencana 4: score, SFX earshot, mix, master, QA audio.
5. Rencana 5: export master 4K, versi web, potongan 15 s / 30 s / 3 klip produk.

## Global Constraints

- Proyek: `projects/galvis-launch-film/` di repo `angjaay/Animation-Studio`; semua path di bawah relatif ke folder ini kecuali disebut lain.
- Kanvas komposisi 1920×1080, 30 fps. Semua ukuran px di rencana ini adalah px kanvas 1920×1080.
- Timing: 120 BPM, 1 bar = 2 s, 60 bar, durasi 120 s. Bar *n* mulai pada `(n-1)*2` s. Sumber tunggal: `cues.json`.
- Palet (hex persis): Deep Navy `#032750`, Bright Navy `#024ABC`, Teal `#1FAFA1`, Nature Green `#86C36A`, putih `#FFFFFF`, Cool Gray `#E4E8EF`, Light Gray `#F5F6F8`.
- Warna cabang: Workspace = Bright Navy, Data Enrichment = Teal, Enterprise = Nature Green.
- Font: Plus Jakarta Sans Bold (headline), Mulish Regular/SemiBold (subjudul/label), JetBrains Mono (angka). Wajib `@font-face` ke file lokal (`lint`: `font_family_without_font_face`).
- Teks, logo, dan UI tidak pernah di-dither. Maksimal satu kalimat pernyataan di layar pada satu waktu.
- Nature Green tidak dipakai untuk teks di latar terang.
- Copy layar berbahasa Inggris, verbatim dari `shared/copy.json` (Task 1).
- Dither: Bayer 4×4, sel 3 px kanvas, koordinat layar (`gl_FragCoord`), palet `landing` (4 level/kanal RGB) atau `brand` (ramp luminansi Deep Navy → Bright Navy → Teal → Nature Green → putih), parameter `resolve` 0..1.
- Latar per babak (spec §3): 01 gelap→terang, 02 terang, 03 terang, 04 gelap, 05 gelap, 06 terang, 07 terang, 08 terang, 09 terang→gelap, 10 gelap.
- Lisensi aset: dilarang lisensi non-komersial (NC), termasuk GADM dan Sentinel-2 cloudless EOX ≥2018. Setiap file di `assets/` wajib tercatat di `assets/LICENSES.json`.
- Aturan HyperFrames (hyperframes-core): satu `gsap.timeline({ paused: true })` per komposisi di `window.__timelines["<id>"]`; sub-komposisi dibungkus `<template>` dengan `<style>`/`<script>` di dalamnya; id host = id template = kunci timeline; id elemen diprefiks id komposisi; tidak ada `Math.random` tanpa seed, jam, atau jaringan saat render; root sub-komposisi `width/height: 100%`.
- Gerbang setiap task yang menyentuh komposisi: `npx hyperframes check` dengan 0 finding.

## Review Focus

1. **Font jatuh ke fallback** di snapshot (file font tidak termuat) → teks harus tampil dengan Plus Jakarta Sans/Mulish; dikunci oleh `check` tanpa `font_family_without_font_face` dan uji `tests/fonts.test.mjs` (Task 1).
2. **Shader dither menyimpang dari referensi CPU** atau berkedip saat kanvas berubah → GPU dan CPU harus sama piksel demi piksel (toleransi kecil); dikunci oleh `scripts/compare-dither.mjs` (Task 3).
3. **Kontras teks di latar terang** (terutama label cabang Teal/Green) → audit kontras `check` harus 0 finding; dikunci di setiap task babak terang (Task 7–10).
4. **Aset tanpa lisensi atau berlisensi NC** masuk ke repo → `tests/assets.test.mjs` gagal (Task 2).
5. **Waktu host di `index.html` bergeser dari `cues.json`** → `tests/timing.test.mjs` gagal (Task 1).

---

### Task 1: Scaffold proyek, cues, copy, token, font

**Files:**
- Create: `package.json`, `index.html`, `cues.json`, `shared/cues.js`, `shared/copy.json`, `shared/tokens.css`, `assets/fonts/*.woff2`, `compositions/01-world.html` … `compositions/10-final.html` (placeholder), `tests/cues.test.mjs`, `tests/timing.test.mjs`, `tests/copy.test.mjs`, `tests/fonts.test.mjs`, `.gitignore`

**Interfaces:**
- Produces:
  - `cues.json` (skema di bawah).
  - `shared/cues.js` (ESM, juga dimuat di browser): `barStart(n: number): number`, `actWindow(id: string): {start: number, end: number, duration: number}`, `ACTS: Act[]`, `IMPACTS: {id: string, t: number}[]`, `DURATION = 120`.
  - `shared/copy.json`: kunci → string verbatim.
  - `shared/tokens.css`: custom properties `--navy`, `--bright-navy`, `--teal`, `--green`, `--white`, `--cool-gray`, `--light-gray`, `--font-display`, `--font-text`, `--font-mono`, kelas `.bg-light` / `.bg-dark`.
  - Id komposisi babak: `act01-world`, `act02-complexity`, `act03-reveal`, `act04-core`, `act05-products`, `act06-workspace`, `act07-enrichment`, `act08-enterprise`, `act09-reunify`, `act10-final`.

`cues.json`:

```json
{
  "bpm": 120, "barSeconds": 2, "bars": 60, "fps": 30, "duration": 120,
  "acts": [
    {"id": "act01-world",      "file": "01-world.html",      "bars": [1, 6],   "bg": "dark-to-light", "styleframeAt": 9.5},
    {"id": "act02-complexity", "file": "02-complexity.html", "bars": [7, 12],  "bg": "light",         "styleframeAt": 17.0},
    {"id": "act03-reveal",     "file": "03-reveal.html",     "bars": [13, 17], "bg": "light",         "styleframeAt": 31.0},
    {"id": "act04-core",       "file": "04-core.html",       "bars": [18, 26], "bg": "dark",          "styleframeAt": 51.0},
    {"id": "act05-products",   "file": "05-products.html",   "bars": [27, 31], "bg": "dark",          "styleframeAt": 61.0},
    {"id": "act06-workspace",  "file": "06-workspace.html",  "bars": [32, 38], "bg": "light",         "styleframeAt": 73.0},
    {"id": "act07-enrichment", "file": "07-enrichment.html", "bars": [39, 45], "bg": "light",         "styleframeAt": 83.0},
    {"id": "act08-enterprise", "file": "08-enterprise.html", "bars": [46, 53], "bg": "light",         "styleframeAt": 97.0},
    {"id": "act09-reunify",    "file": "09-reunify.html",    "bars": [54, 56], "bg": "light-to-dark", "styleframeAt": 111.0},
    {"id": "act10-final",      "file": "10-final.html",      "bars": [57, 60], "bg": "dark",          "styleframeAt": 117.0}
  ],
  "impacts": [{"id": "reveal", "t": 24.0}, {"id": "split", "t": 56.0}]
}
```

`shared/copy.json` (verbatim, termasuk tanda baca):

```json
{
  "world.line1": "EVERY DECISION HAS A LOCATION.",
  "world.line2": "EVERY LOCATION HOLDS INTELLIGENCE.",
  "complexity.line1": "MORE DATA DOESN’T ALWAYS MEAN MORE CLARITY.",
  "complexity.line2": "INTELLIGENCE REQUIRES CONNECTION.",
  "reveal.name": "GALVIS",
  "reveal.full": "Geospatial Intelligence Virtual Assistant System",
  "reveal.sub": "The Intelligence Layer for Spatial Decision-Making",
  "core.label": "CORE TECHNOLOGY",
  "core.final": "GALVIS CORE TECHNOLOGY",
  "core.question": "Where are the highest-priority expansion areas with low environmental risk?",
  "core.mod.ai": "AI Interaction",
  "core.mod.data": "Geospatial Data Engine",
  "core.mod.eo": "Earth Observation",
  "core.mod.analytics": "Spatial Analytics",
  "core.mod.ml": "Machine Learning",
  "core.mod.decision": "Decision Intelligence",
  "products.one": "ONE INTELLIGENCE CORE.",
  "products.three": "THREE WAYS TO USE IT.",
  "products.workspace": "GALVIS WORKSPACE",
  "products.enrichment": "GALVIS DATA ENRICHMENT",
  "products.enterprise": "GALVIS ENTERPRISE",
  "workspace.sub": "Geospatial Intelligence at Your Fingertips",
  "workspace.prompt": "Analyze potential development areas within this region.",
  "workspace.words": ["ASK", "ANALYZE", "VISUALIZE", "UNDERSTAND"],
  "workspace.position": "Self-service Geospatial Intelligence",
  "enrichment.sub": "Turn Location Into Intelligence",
  "enrichment.position": "Geospatial Intelligence as Data",
  "enrichment.attrs": ["Earth Observation", "Environment", "Terrain", "Infrastructure", "Accessibility", "Land Use", "Demographics", "Economic Activity", "Climate", "Risk Indicators"],
  "enterprise.sub": "Geospatial Intelligence Built Around Your Organization",
  "enterprise.position": "Custom Geospatial Intelligence Infrastructure",
  "enterprise.systems": ["Organization Databases", "Internal Geospatial Data", "Satellite Feeds", "APIs", "Dashboards", "Business Systems", "Analytical Models"],
  "enterprise.sectors": [
    {"name": "Plantation", "chain": ["Satellite Imagery", "Plantation Health", "Replanting Priority"]},
    {"name": "Forestry", "chain": ["Forest Monitoring", "Disturbance Detection", "Conservation Intelligence"]},
    {"name": "Mining", "chain": ["Operational Area", "Environmental Pressure", "Monitoring & Risk"]},
    {"name": "Renewable Energy", "chain": ["Terrain + Climate + Infrastructure", "Suitability", "Candidate Sites"]}
  ],
  "enterprise.flash": ["Industrial & Logistics", "Real Estate / Land Bank", "Infrastructure"],
  "reunify.line1": "ONE CORE.",
  "reunify.line2": "MULTIPLE WAYS TO TURN LOCATION INTO INTELLIGENCE.",
  "final.chain": ["FROM LOCATION", "TO INTELLIGENCE", "TO DECISION"],
  "final.tagline": "SEE MORE. UNDERSTAND BETTER. DECIDE SMARTER.",
  "final.url": "galvis.io"
}
```

- [ ] **Step 1: Scaffold.** Jalankan `npx hyperframes init projects/galvis-launch-film` dari root repo, lalu ganti `index.html` hasil scaffold sesuai Step 6. Tambah `package.json` dengan `"type": "module"` dan scripts `"test": "node --test tests/"`, `"check": "npx hyperframes check"`. `.gitignore`: `node_modules/`, `.hyperframes/artifacts/`, `renders/`.

- [ ] **Step 2: Tulis tes yang gagal** — `tests/cues.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { barStart, actWindow, ACTS, IMPACTS, DURATION } from '../shared/cues.js';

test('bar start', () => {
  assert.equal(barStart(1), 0); assert.equal(barStart(13), 24); assert.equal(barStart(29), 56); assert.equal(barStart(57), 112);
});
test('acts are contiguous and cover 0..120', () => {
  let t = 0;
  for (const a of ACTS) { const w = actWindow(a.id); assert.equal(w.start, t); t = w.end; }
  assert.equal(t, DURATION);
});
test('act windows match spec', () => {
  assert.deepEqual(actWindow('act04-core'), { start: 34, end: 52, duration: 18 });
  assert.deepEqual(actWindow('act10-final'), { start: 112, end: 120, duration: 8 });
});
test('styleframeAt lies inside its act', () => {
  for (const a of ACTS) { const w = actWindow(a.id); assert.ok(a.styleframeAt >= w.start && a.styleframeAt < w.end, a.id); }
});
test('impacts on bar downbeats', () => {
  assert.deepEqual(IMPACTS.map(i => i.t), [24, 56]);
});
```

- [ ] **Step 3: Jalankan** `node --test tests/cues.test.mjs` → FAIL (modul belum ada).

- [ ] **Step 4: Implement `shared/cues.js`.** Memuat `cues.json` lewat `import data from '../cues.json' with { type: 'json' }` di Node; di browser, komposisi membaca nilai yang sama lewat `<script type="module">` yang meng-import `shared/cues.js` dengan `fetch` sinkron **tidak** diizinkan (determinism), jadi ekspor juga `CUES` sebagai literal yang di-generate: tambahkan `scripts/gen-cues-module.mjs` yang menulis `shared/cues.data.js` (`export const CUES = {...}`) dari `cues.json`, dan `cues.js` meng-import `cues.data.js`. Script `"pretest"` dan `"precheck"` menjalankan generator.

- [ ] **Step 5: Jalankan** `npm test` → `cues.test.mjs` PASS.

- [ ] **Step 6: `index.html` dan placeholder.** Root `data-composition-id="galvis-launch"`, `data-width="1920"`, `data-height="1080"`, `data-duration="120"`. Sepuluh host `<div id="actNN-…" data-composition-src="compositions/NN-….html" data-start="…" data-duration="…">` dengan nilai dari `cues.json`. Setiap placeholder sub-komposisi: `<template>` berisi root dengan id yang sama, latar sesuai `bg`, dan judul babak di tengah; timeline kosong terdaftar.

- [ ] **Step 7: Tes timing** — `tests/timing.test.mjs`: parse `index.html` (regex atribut cukup), untuk setiap act di `cues.json` assert ada host dengan id = `act.id`, `data-composition-src` = `compositions/${act.file}`, `data-start` = `actWindow(id).start`, `data-duration` = `actWindow(id).duration`; dan setiap file `compositions/*.html` berisi `data-composition-id="${act.id}"` dan `window.__timelines["${act.id}"]`.

- [ ] **Step 8: Tes copy** — `tests/copy.test.mjs`: assert `copy['complexity.line1'] === 'MORE DATA DOESN’T ALWAYS MEAN MORE CLARITY.'`, `copy['final.url'] === 'galvis.io'`, `copy['enterprise.sectors'].length === 4`, `copy['enterprise.flash'].length === 3`, `copy['enrichment.attrs'].length === 10`, dan setiap string berakhir tanpa spasi.

- [ ] **Step 9: Font dan token.** Salin woff2 dari npm `@fontsource-variable/plus-jakarta-sans`, `@fontsource-variable/mulish`, `@fontsource-variable/jetbrains-mono` (subset latin) ke `assets/fonts/`. `shared/tokens.css` mendeklarasikan `@font-face` ke file itu dan token di Interfaces. `tests/fonts.test.mjs`: setiap `url(...)` di `tokens.css` menunjuk file yang ada dan berukuran > 10 KB.

- [ ] **Step 10: Verifikasi.** `npm test` → semua PASS. `npx hyperframes check` → 0 finding. `npx hyperframes snapshot --at 9.5,51,117 --output /tmp/hf-t1` → tiga PNG: placeholder babak 01 (latar terang), 04 (gelap), 10 (gelap) dengan judul berfont Plus Jakarta Sans.

- [ ] **Step 11: Commit** — `git add -A projects/galvis-launch-film && git commit -m "feat(galvis-film): scaffold project, cues, copy, tokens"`

---

### Task 2: Aset dan buku lisensi

**Files:**
- Create: `scripts/collect-assets.mjs`, `scripts/fetch_sentinel.py`, `scripts/build-geo.mjs`, `assets/LICENSES.json`, `assets/**`, `tests/assets.test.mjs`

**Interfaces:**
- Produces (path stabil yang dipakai task babak):
  - `assets/earth/dawn.png` — dari `movee-fe/public/assets/e27de72b696ea9d4c6b8379b613c7da3854b7c43.png` (bumi fajar terang, sama dengan hero landing).
  - `assets/earth/blue-marble.jpg` — NASA Blue Marble (Visible Earth, record 74092, `world.200407.3x5400x2700`), public domain.
  - `assets/earth/black-marble.jpg` — NASA Black Marble 2016 3 km, public domain.
  - `assets/logo/galvis-main.svg`, `assets/logo/galvis-full.svg`, `assets/logo/galvis-wordmark-dark.svg` — dari `movee-fe/public/logo/`.
  - `assets/solution/<KODE>/<file>.png` — 31 peta dari `gisact-website/public/illustration/solution/*/desktop/`, struktur folder dipertahankan.
  - `assets/sentinel/riau-plantation.jpg`, `assets/sentinel/morowali-mining.jpg` — true color Sentinel-2 L2A, 1920 px lebar.
  - `assets/geo/sea.svg` (Asia Tenggara, Natural Earth 50m), `assets/geo/idn-adm1.svg` (geoBoundaries IDN ADM1), keduanya `viewBox="0 0 1920 1080"`, satu `<path>` per fitur dengan `data-name`.
  - `assets/LICENSES.json`: `{ "<path relatif assets/>": { "source": url-atau-repo, "license": string, "attribution": string|null } }`.

- [ ] **Step 1: Tes yang gagal** — `tests/assets.test.mjs`:
  - `every asset has a licence entry`: setiap file di `assets/` (rekursif, kecuali `LICENSES.json`) punya kunci di `LICENSES.json`.
  - `no non-commercial licences`: tidak ada `license` yang cocok `/\bNC\b|non-?commercial/i`, dan tidak ada `source` yang mengandung `gadm`.
  - `copernicus attribution`: setiap entri `assets/sentinel/*` dan DEM punya `attribution` yang mengandung `"Contains modified Copernicus Sentinel data"` (DEM: `"Copernicus"`).
  - `required assets exist`: semua path di Interfaces ada.
- [ ] **Step 2: Jalankan** `node --test tests/assets.test.mjs` → FAIL.
- [ ] **Step 3: `scripts/collect-assets.mjs`.** Argumen `--movee <path>` (default `/home/user/movee-fe`) dan `--website <path>` (default `/home/user/gisact-website`). Menyalin aset internal dan menulis entri lisensi `"internal (GISACT)"`. Mengunduh NASA (URL di Interfaces) dengan `fetch`; gagal keras bila status ≠ 200.
- [ ] **Step 4: `scripts/fetch_sentinel.py`.** `pip install pystac-client rasterio`. STAC `https://earth-search.aws.element84.com/v1`, koleksi `sentinel-2-l2a`, aset `visual`, `eo:cloud_cover < 10`, rentang 2025-06-01..2026-09-30, ambil scene dengan awan terendah. Bbox: Riau `[101.30, 0.30, 101.50, 0.50]`, Morowali `[122.05, -2.85, 122.25, -2.65]`. Potong ke bbox, resample ke lebar 1920, simpan JPEG q92. Lisensi `"Copernicus Sentinel data terms (free, attribution)"`, attribution `"Contains modified Copernicus Sentinel data 2026"` (tahun = tahun akuisisi).
- [ ] **Step 5: `scripts/build-geo.mjs`.** `npm i -D d3-geo topojson-client shapefile`. Natural Earth `ne_50m_admin_0_countries` (naciscdn.org), filter negara ASEAN + Timor-Leste; geoBoundaries `gbOpen/IDN/ADM1` (simplified GeoJSON dari API geoboundaries.org). Proyeksi `geoMercator().fitExtent([[80,60],[1840,1020]], fitur)`. Tulis SVG dengan `<path d>` per fitur.
- [ ] **Step 6: Jalankan** ketiga script, lalu `node --test tests/assets.test.mjs` → PASS.
- [ ] **Step 7: Verifikasi visual.** Buka `assets/geo/sea.svg` dan `assets/sentinel/*.jpg` (konversi SVG ke PNG dengan `npx hyperframes snapshot` pada komposisi uji tidak perlu; cukup `rsvg-convert` atau Chromium headless). Pastikan peta Indonesia proporsional dan citra Sentinel bukan tile kosong/awan.
- [ ] **Step 8: Commit** — `git commit -m "feat(galvis-film): asset pipeline and licence ledger"`. Aset biner di bawah 5 MB per file; bila lebih, turunkan kualitas JPEG.

---

### Task 3: Dither (referensi CPU + shader WebGL)

**Files:**
- Create: `shared/dither/reference.js`, `shared/dither/dither-layer.js`, `shared/dither/dither.frag.glsl` (string di-import oleh `dither-layer.js`), `dev/dither-test/index.html`, `scripts/compare-dither.mjs`, `tests/dither.test.mjs`

**Interfaces:**
- Produces:
  - `BAYER4: number[][]` — `[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]]`.
  - `BRAND_RAMP: string[]` — `['#032750','#024ABC','#1FAFA1','#86C36A','#FFFFFF']`.
  - `ditherPixel(rgb: [number,number,number] /*0..255*/, px: number, py: number, opts: {cell?: number=3, levels?: number=4, palette?: 'landing'|'brand'='landing', resolve?: number=0}): [number,number,number]`
  - `mountDither(canvas: HTMLCanvasElement, source: HTMLImageElement|HTMLCanvasElement, opts: {cell, levels, palette, resolve}): { set(opts: Partial<opts>): void, draw(): void }` — `draw()` sinkron, dipanggil dari `onUpdate` timeline.

Algoritme (wajib sama di CPU dan GLSL):

```
cx = floor(px / cell), cy = floor(py / cell)
t  = (BAYER4[cy % 4][cx % 4] + 0.5) / 16
landing: untuk tiap kanal v = c/255:  q = floor(v*(levels-1) + t) / (levels-1), clamp 0..1
brand:   L = luminansi Rec.709 dari rgb (0..1); p = L*(n-1), n = panjang ramp;
         i = floor(p); f = p - i;  warna = ramp[min(i + (f > t ? 1 : 0), n-1)]
out = mix(dithered, rgb_asli, resolve)   // dibulatkan ke integer 0..255
```

Sampel sumber di pusat sel (bukan per piksel) supaya sel terlihat seragam.

- [ ] **Step 1: Tes yang gagal** — `tests/dither.test.mjs`:
  - `landing quantizes to 4 levels`: untuk 200 input acak ber-seed, setiap kanal keluaran ∈ `{0,85,170,255}` saat `resolve=0`.
  - `extremes`: `ditherPixel([0,0,0],…)` → `[0,0,0]`; `[255,255,255]` → `[255,255,255]` (kedua palet).
  - `mean preserved`: rata-rata kanal keluaran untuk input `[128,128,128]` pada blok 4×4 sel (12×12 px) ada di 128 ± 8.
  - `cell uniform`: semua piksel di dalam satu sel 3×3 bernilai sama.
  - `brand uses only ramp colours`: keluaran palet `brand` selalu salah satu `BRAND_RAMP`.
  - `resolve 1 returns source`: `resolve:1` → input apa adanya.
- [ ] **Step 2: Jalankan** → FAIL.
- [ ] **Step 3: Implement `shared/dither/reference.js`** (fungsi murni, tanpa DOM).
- [ ] **Step 4: Jalankan** → PASS.
- [ ] **Step 5: Implement `dither-layer.js` + shader.** WebGL1, satu quad layar penuh, tekstur sumber, uniform `u_cell`, `u_levels`, `u_palette` (0 landing, 1 brand), `u_ramp[5]`, `u_resolve`, `u_resolution`. Koordinat sel dari `gl_FragCoord` dengan sumbu y dibalik agar sama dengan `py` CPU (origin kiri-atas). `preserveDrawingBuffer: true`.
- [ ] **Step 6: Komposisi uji `dev/dither-test/index.html`** (standalone, 1920×1080, 1 s): kiri gradien horizontal hitam→putih + gradien warna, kanan `assets/earth/dawn.png`; atas palet `landing`, bawah `brand`.
- [ ] **Step 7: `scripts/compare-dither.mjs`.** Render `dev/dither-test/index.html` lewat `npx hyperframes snapshot dev/dither-test --at 0.5 --no-end --output /tmp/hf-dither`, baca PNG (`pngjs`), hitung ulang dengan `ditherPixel` dari sumber yang sama, keluarkan persentase piksel berbeda > 2 nilai per kanal. Exit 1 bila > 0,5 %.
- [ ] **Step 8: Jalankan** `node scripts/compare-dither.mjs` → `mismatch ≤ 0.5%`, exit 0.
- [ ] **Step 9: Cek visual vs landing.** Bandingkan crop 400×240 tengah bagian `landing` dengan frame Figma "GALVIS Dither" (node `5915:9039`): pola kotak Bayer dan palet biru-cyan-lavender-putih harus serupa; perbedaan ukuran sel (3 px vs 2 px) disengaja.
- [ ] **Step 10: Commit** — `git commit -m "feat(galvis-film): Bayer dither with CPU reference and WebGL layer"`

---

### Task 4: Logo terurai dan geometri benang

**Files:**
- Create: `assets/logo/parts/plates.svg`, `assets/logo/parts/hexagon.svg`, `assets/logo/parts/arrow.svg`, `shared/logo.js`, `shared/thread.js`, `tests/thread.test.mjs`, `tests/logo.test.mjs`
- Modify: `assets/LICENSES.json` (entri untuk `parts/*`)

**Interfaces:**
- Produces:
  - `assets/logo/parts/*.svg` — tiga bagian anatomi dari `galvis-main.svg`, `viewBox` sama dengan aslinya, sehingga ditumpuk di posisi sama → logo utuh.
  - `logoParts(): Promise<{plates: string, hexagon: string, arrow: string, viewBox: string}>` (markup SVG).
  - `branchGeometry({ top: [x,y], split: [x,y], ends: [[x,y],[x,y],[x,y]], bend?: number = 0.55 }): { trunk: string, branches: [string,string,string] }` — `d` SVG; trunk garis lurus `top→split`; tiap cabang kubik dari `split` ke `end` dengan titik kontrol vertikal (`bend` × jarak vertikal), sehingga cabang keluar tegak lalu melengkung (tanpa kepala panah).

- [ ] **Step 1: Tes yang gagal.**
  - `tests/thread.test.mjs`: untuk `{top:[960,120], split:[960,540], ends:[[480,900],[960,900],[1440,900]]}`: trunk mulai `M960 120` dan berakhir di `960 540`; setiap cabang mulai `M960 540` dan berakhir tepat di `end`; cabang tengah semua koordinat x = 960; titik kontrol pertama cabang kiri punya x = 960 (keluar tegak).
  - `tests/logo.test.mjs`: tiga file parts ada, `viewBox` ketiganya = `viewBox` `galvis-main.svg`; gabungan jumlah `<path>` parts = jumlah `<path>` di `galvis-main.svg`.
- [ ] **Step 2: Jalankan** → FAIL.
- [ ] **Step 3: Pisahkan logo.** Buka `assets/logo/galvis-main.svg`, kelompokkan path: pelat hijau-teal (gradien atas) → `plates.svg`; heksagon navy → `hexagon.svg`; bentuk panah putih/abu → `arrow.svg`. `defs` gradien ikut ke file yang memakainya.
- [ ] **Step 4: Implement `shared/thread.js` dan `shared/logo.js`.**
- [ ] **Step 5: Jalankan** `npm test` → PASS.
- [ ] **Step 6: Commit** — `git commit -m "feat(galvis-film): logo anatomy parts and branch geometry"`

---

### Task 5: Komponen UI rekonstruksi (Workspace, legenda, label)

**Files:**
- Create: `shared/ui/ui.css`, `shared/ui/workspace.js`, `shared/ui/legend.js`, `shared/ui/label.js`, `dev/ui-test/index.html`

**Interfaces:**
- Consumes: `shared/tokens.css`.
- Produces:
  - `renderWorkspace(host: HTMLElement, state: { region: string, layers: {name: string, glyph: 'raster'|'vector'|'point', active: boolean, flash?: boolean}[], prompt: string, steps: {label: string, status: 'done'|'running'|'pending'}[], insight?: {title: string, bars: {label: string, value: number}[]}, map: HTMLElement|string }): void`
  - `renderLegend(host, { title: string, kind: 'gradient'|'categorical', stops: {color: string, label?: string}[] }): void`
  - `renderLabel(host, { title: string, subtitle?: string }): void`

Spesifikasi Workspace (dari movee-fe, disederhanakan, copy Inggris):
- Jendela browser 1440×810, radius 16, bayangan `0 24px 64px rgba(3,39,80,.2)`.
- Top bar 46 px `#032750` dengan `galvis-wordmark-dark.svg` putih 93×26 di kiri, nama platform di tengah-kiri.
- Panel kiri 296 px `#FFFFFF`, judul "Layers", baris 40 px (glyph, nama, ikon mata); `flash: true` → latar `#EAF1FB`.
- Peta mengisi sisa; toolbar mengambang bawah-tengah (Select, Draw, Measure, tombol "Galvis AI" Bright Navy).
- Panel Agent 500×560 di kanan bawah, radius 26, bayangan `0 18px 60px #03275024`: header "GALVIS Agent", gelembung prompt user (latar `#EAF1FB`, radius 16 16 4 16), blok "Plan · N steps" dengan kapsul bernomor (done = centang `#1FAFA1`, running = cincin Bright Navy, pending = abu `#667085`).
- Teks UI: Mulish 13–15 px, judul `#032750`, isi `#324966`, redup `#667085`; angka JetBrains Mono.

- [ ] **Step 1: Bangun `dev/ui-test/index.html`** (standalone, 1920×1080, latar `#E4E8EF`) yang merender Workspace dengan state contoh lengkap (5 langkah: 3 done, 1 running, 1 pending; 4 layer, satu `flash`), satu legenda gradien dan satu kategorikal, dan satu label.
- [ ] **Step 2: Jalankan** `npx hyperframes check dev/ui-test` → FAIL sampai komponen ada.
- [ ] **Step 3: Implement ketiga komponen** (DOM murni, deterministik).
- [ ] **Step 4: Jalankan** `npx hyperframes check dev/ui-test` → 0 finding (termasuk kontras).
- [ ] **Step 5: Snapshot** `npx hyperframes snapshot dev/ui-test --at 0.5 --no-end --output /tmp/hf-ui` dan bandingkan berdampingan dengan `movee-fe/docs/img/galvis-agent-be/f21-multi-langkah.png`: struktur panel Agent (header, gelembung, kapsul langkah) harus dikenali sebagai UI yang sama.
- [ ] **Step 6: Commit** — `git commit -m "feat(galvis-film): reconstructed GALVIS UI components"`

---

### Task 6: Babak 01 World + 02 Complexity

**Files:**
- Modify: `compositions/01-world.html`, `compositions/02-complexity.html`

**Interfaces:**
- Consumes: `mountDither` (Task 3), `assets/earth/dawn.png`, `assets/earth/black-marble.jpg`, `assets/geo/sea.svg`, `assets/geo/idn-adm1.svg`, `assets/sentinel/riau-plantation.jpg`, `assets/solution/**`, copy `world.*`, `complexity.*`.

Frame kunci:
- **01 @ 9.5 s:** kanvas penuh `dawn.png` didither palet `landing`, `resolve 0`; garis pantai Asia Tenggara (`sea.svg`) sebagai kontur tipis putih 40 % di atas; ±2.000 titik sinyal (posisi dari PRNG ber-seed `mulberry32(1)` di dalam daratan `sea.svg`) bulat 3 px putih; teks `world.line2` Plus Jakarta Sans Bold 64 px, `#032750`, tengah bawah (y ≈ 860). Latar akhir babak = terang.
- **02 @ 17 s:** latar `#F5F6F8`; tujuh pelat isometrik (miring 30°, skala Y 0,58) bertumpuk di tengah, masing-masing satu jenis data: citra Sentinel (dither `brand`), `idn-adm1.svg` (garis navy), grid demografi (kotak Teal 20 %), jaringan jalan/infrastruktur (garis Bright Navy), DEM (`WRWS/WaterResource-Desktop.png` dither `brand`), raster lingkungan (`ESC/biodiversity.png`), keluaran analitik (`DMR/risk.png`); opasitas 0,55 sehingga tumpang tindih kacau; teks `complexity.line1` 56 px `#032750` di atas.

- [ ] **Step 1:** Bangun 01 sesuai frame kunci; timeline mendaftarkan `onUpdate` yang memanggil `dither.draw()`.
- [ ] **Step 2:** Bangun 02 sesuai frame kunci.
- [ ] **Step 3: Verifikasi** `npx hyperframes check` → 0 finding; `npx hyperframes snapshot --at 9.5,17 --no-end --output styleframes/raw` → dua PNG.
- [ ] **Step 4: Cek visual (wajib, lihat PNG):** 01 — dither terbaca jelas sebagai pola Bayer di langit, teks tajam tanpa dither, sinyal tidak menutupi teks; 02 — tujuh pelat dapat dibedakan jenisnya, kesan "terlalu banyak data" tanpa menutupi teks.
- [ ] **Step 5: Commit** — `git commit -m "feat(galvis-film): styleframes act 01-02"`

---

### Task 7: Babak 03 Reveal + 04 Core

**Files:**
- Modify: `compositions/03-reveal.html`, `compositions/04-core.html`

**Interfaces:**
- Consumes: `logoParts()` (Task 4), `mountDither`, `renderLabel`, `assets/sentinel/riau-plantation.jpg`, copy `reveal.*`, `core.*`.

Frame kunci:
- **03 @ 31 s:** latar putih; logo utuh (tiga parts ditumpuk) 280 px tinggi di tengah atas (y pusat ≈ 400), tajam; `reveal.name` Plus Jakarta Sans Bold 120 px letter-spacing 0,2 em `#032750`; `reveal.full` Mulish SemiBold 32 px `#324966`; tiga keyline heksagon tipis (Bright Navy 1 px, 30 %/20 %/10 %) mengelilingi logo; sisa piksel dither (brand, kecil) memudar di tepi.
- **04 @ 51 s:** latar `#032750`; di atas: `reveal.name` 40 px putih; di bawahnya `core.final` Mulish SemiBold 24 px letter-spacing 0,3 em Cool Gray; tengah: inti heksagon bercahaya putih 160 px; enam modul di cincin radius 330 px (urutan searah jarum jam mulai jam 12: ai, data, eo, analytics, ml, decision), masing-masing lingkaran 120 px dengan visual mini (ai: pita token; data: grid 4×4; eo: crop `riau-plantation.jpg` dengan setengah kiri true color dan setengah kanan pewarnaan NDVI hijau-kuning; analytics: kontur + buffer; ml: tiga lapis tipis → gradien probabilitas; decision: tiga zona prioritas + angka skor JetBrains Mono) dan label `core.mod.*` Mulish 18 px putih; garis penghubung tipis putih 25 % dari tiap modul ke inti dan antarmodul berdekatan.

- [ ] **Step 1:** Bangun 03.
- [ ] **Step 2:** Bangun 04.
- [ ] **Step 3: Verifikasi** `npx hyperframes check` → 0 finding; snapshot `--at 31,51 --no-end --output styleframes/raw`.
- [ ] **Step 4: Cek visual:** 03 — logo identik dengan brand book (bandingkan dengan `galvis-full.svg`), tidak ada dither di logo/teks; 04 — enam modul terbaca sebagai satu mesin (garis penghubung), bukan enam kartu fitur; semua label terbaca di 1080p.
- [ ] **Step 5: Commit** — `git commit -m "feat(galvis-film): styleframes act 03-04"`

---

### Task 8: Babak 05 Three Products + 06 Workspace

**Files:**
- Modify: `compositions/05-products.html`, `compositions/06-workspace.html`

**Interfaces:**
- Consumes: `branchGeometry` (Task 4), `logoParts()`, `renderWorkspace` (Task 5), `mountDither`, `assets/sentinel/riau-plantation.jpg`, `assets/solution/ESC/desktop/sitesuitability.png`, copy `products.*`, `workspace.*`.

Frame kunci:
- **05 @ 61 s:** latar `#032750`; logo utuh 120 px di `(960, 150)`; label `core.label` di `(960, 300)`; `branchGeometry({top:[960,330], split:[960,560], ends:[[420,820],[960,820],[1500,820]]})` digambar sebagai stroke putih 3 px dengan glow (blur 8 px, 40 %), cabang diwarnai gradien dari putih ke warna cabangnya; partikel kecil (PRNG ber-seed) di sepanjang cabang; di tiap ujung, lockup: ikon logo 56 px + nama produk Plus Jakarta Sans Bold 30 px putih + garis warna cabang 4 px di bawahnya. Arsitektur `GALVIS → CORE TECHNOLOGY → 3 produk` harus terbaca dalam 2 detik pertama melihat.
- **06 @ 73 s:** latar `#E4E8EF`; jendela `renderWorkspace` 1440×810 di tengah-kanan (x 400..1840); state: region "Kabupaten Kampar, Riau", 4 layer (Sentinel-2 True Color, Admin Boundary, Road Network, Suitability Result `flash`), prompt `workspace.prompt`, 5 langkah (Identify region, Activate datasets, Run spatial analysis, Generate suitability, Summarize findings) dengan 4 done + 1 running, peta = `riau-plantation.jpg` dengan overlay `sitesuitability.png` (resolve 0,7, dither `brand`); kata `UNDERSTAND` Plus Jakarta Sans Bold 96 px Bright Navy vertikal di kiri (x ≈ 120); judul kecil `products.workspace` di kiri atas.

- [ ] **Step 1:** Bangun 05.
- [ ] **Step 2:** Bangun 06.
- [ ] **Step 3: Verifikasi** `npx hyperframes check` → 0 finding (termasuk kontras label di 06); snapshot `--at 61,73 --no-end`.
- [ ] **Step 4: Cek visual:** 05 — tunjukkan PNG ke satu orang yang belum tahu GALVIS (atau tanyakan user) dan minta ia menggambar ulang strukturnya; harus benar tanpa penjelasan. 06 — UI dikenali sebagai GALVIS (bandingkan dengan screenshot movee-fe), citra peta tidak bentrok dengan panel.
- [ ] **Step 5: Commit** — `git commit -m "feat(galvis-film): styleframes act 05-06"`

---

### Task 9: Babak 07 Data Enrichment + 08 Enterprise

**Files:**
- Modify: `compositions/07-enrichment.html`, `compositions/08-enterprise.html`

**Interfaces:**
- Consumes: `mountDither`, `renderLegend`, `renderLabel`, `assets/solution/**`, `assets/sentinel/*`, `assets/geo/idn-adm1.svg`, copy `enrichment.*`, `enterprise.*`.

Pemetaan atribut → peta (dari spec §7; cocokkan isi file saat membangun, perbaiki pemetaan bila isi tidak sesuai dan catat di commit message):
EO `ESC/desktop/biodiversity.png` · Terrain `WRWS/desktop/WaterResource-Desktop.png` · Infrastructure `ESRE/desktop/Network-Desktop.png` · Accessibility `EBG/desktop/Geomarketing-Desktop.png` · Land Use `AFS/desktop/foodsecurity.png` · Demographics `EBG/desktop/UrbanPlanning-Desktop.png` · Economic Activity `EBG/desktop/SiteSelection-Desktop.png` · Climate `HAQ/desktop/PublicRisk-Desktop.png` · Risk `DMR/desktop/risk.png`, `WRWS/desktop/Floodplain-Desktop.png`. Environment memakai `ESC/desktop/environmental.png`.

Frame kunci:
- **07 @ 83 s:** latar `#F5F6F8`; kiri: satu poligon (bentuk kabupaten dari `idn-adm1.svg`, skala besar) dengan isi mosaik potongan peta atribut, garis Teal 3 px; kanan: kartu profil putih 520 px, radius 16, judul "Spatial Intelligence Profile", 10 baris `enrichment.attrs` masing-masing dengan thumbnail 48×32 dari peta atributnya, bar nilai Teal, dan nilai JetBrains Mono; benang Teal tipis turun dari atas frame ke poligon; label kecil `products.enrichment`. UI di atas peta: bila legenda bawaan raster terpotong/terlihat buruk di thumbnail, tutup dengan `renderLegend`.
- **08 @ 97 s (Forestry):** latar terang; strip citra lebar penuh tinggi 640 px: kiri `ESC/biodiversity.png` (resolve 1), garis scan-beam vertikal putih 4 px dengan glow di x = 1100, kanan dari beam `DMR/risk.png` masih ber-dither `brand` (resolve 0); kartu legenda bawaan di raster ditutup dan diganti `renderLegend` (gradien "Forest Fire Risk", Low→High); overlay rantai `Forest Monitoring → Disturbance Detection → Conservation Intelligence` Mulish SemiBold 26 px `#032750` di bar putih di bawah strip, langkah aktif ditandai titik Nature Green; nama sektor "Forestry" Plus Jakarta Sans Bold 48 px; label kecil `products.enterprise` dengan garis Nature Green.

- [ ] **Step 1:** Bangun 07.
- [ ] **Step 2:** Bangun 08.
- [ ] **Step 3: Verifikasi** `npx hyperframes check` → 0 finding; snapshot `--at 83,97 --no-end`.
- [ ] **Step 4: Cek visual:** 07 — terbaca "satu lokasi diperkaya banyak atribut", thumbnail peta bisa dibedakan; 08 — peralihan dither → jernih di beam jelas, legenda rekonstruksi rapi dan konsisten dengan UI Workspace.
- [ ] **Step 5: Commit** — `git commit -m "feat(galvis-film): styleframes act 07-08"`

---

### Task 10: Babak 09 Reunification + 10 Final

**Files:**
- Modify: `compositions/09-reunify.html`, `compositions/10-final.html`

**Interfaces:**
- Consumes: `branchGeometry`, `logoParts()`, `mountDither`, `assets/geo/sea.svg`, `assets/earth/dawn.png`, copy `reunify.*`, `final.*`.

Frame kunci:
- **09 @ 111 s:** latar `#032750`; peta `sea.svg` garis tipis Cool Gray 30 %; ±60 node intelijen (PRNG ber-seed `mulberry32(9)`, di daratan) berwarna campuran tiga warna cabang dengan halo; garis tipis antarnode terdekat; teks `reunify.line1` Plus Jakarta Sans Bold 72 px putih dan `reunify.line2` Mulish SemiBold 30 px Cool Gray di sepertiga bawah.
- **10 @ 117 s:** latar `#032750`; bawah frame: `dawn.png` dither `landing` dengan mask gradien (hanya 30 % bawah, memudar ke navy); kontur topografi tipis (path dari `idn-adm1.svg` di-offset bukan syarat; cukup 6 garis kontur sinus halus ber-seed) putih 8 %; logo full (versi reverse/putih, `galvis-full.svg` dengan warna teks putih) 120 px tinggi di tengah atas; `final.tagline` Plus Jakarta Sans Bold 44 px putih di tengah; `final.url` Mulish 22 px Cool Gray di bawah.

- [ ] **Step 1:** Bangun 09.
- [ ] **Step 2:** Bangun 10.
- [ ] **Step 3: Verifikasi** `npx hyperframes check` → 0 finding; snapshot `--at 111,117 --no-end`.
- [ ] **Step 4: Cek visual:** 10 — dither landing di bawah terasa satu keluarga dengan hero galvis.io; logo reverse sesuai brand book ("Reverse · background hitam").
- [ ] **Step 5: Commit** — `git commit -m "feat(galvis-film): styleframes act 09-10"`

---

### Task 11: Ekspor styleframe dan papan review

**Files:**
- Create: `scripts/styleframes.mjs`, `styleframes/01-world.png` … `styleframes/10-final.png`, `styleframes/board.html`, `tests/styleframes.test.mjs`

**Interfaces:**
- Consumes: `cues.json` (`styleframeAt`), semua komposisi.
- Produces: 10 PNG 1920×1080 bernama `NN-<nama>.png` (dari `act.file`), dan `styleframes/board.html` (satu halaman statis: grid 2 kolom, tiap kartu = PNG + nomor/nama babak + waktu + latar + 2–3 baris niat dari spec §7).

- [ ] **Step 1: Tes yang gagal** — `tests/styleframes.test.mjs`: untuk setiap act ada `styleframes/${file.replace('.html','.png')}`, berukuran 1920×1080 (baca header PNG), dan `board.html` mereferensikan kesepuluhnya.
- [ ] **Step 2: Jalankan** → FAIL.
- [ ] **Step 3: Implement `scripts/styleframes.mjs`:** satu panggilan `npx hyperframes snapshot --at <10 waktu dipisah koma> --no-end --output /tmp/hf-sf`, lalu salin/ganti nama berurutan ke `styleframes/`, lalu tulis `board.html`.
- [ ] **Step 4: Jalankan** `node scripts/styleframes.mjs && npm test` → PASS; `npx hyperframes check` → 0 finding untuk seluruh proyek.
- [ ] **Step 5: Review rubrik.** Nilai tiap styleframe dengan dimensi rubrik mg-styles-15 yang berlaku untuk still (style fidelity, concept/wow, design & typography, finish/texture; skala 1–10). Perbaiki semua yang < 7 sebelum diserahkan; catat skor di `styleframes/REVIEW.md`.
- [ ] **Step 6: Commit dan push** — `git commit -m "feat(galvis-film): styleframe board for review"` lalu `git push -u origin claude/sleepy-wozniak-6j5u55`.
- [ ] **Step 7: Serahkan ke user** papan styleframe untuk persetujuan. Persetujuan ini adalah gerbang ke Rencana 2 (animatic).
