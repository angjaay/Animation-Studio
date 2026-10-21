# GALVIS Launch Film — Animasi Penuh (Rencana 3) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengubah animatic yang sudah disetujui menjadi animasi penuh per babak sesuai spec §7, dengan peralihan antarbabak yang menyambung, semua aksen gambar di grid ketukan, dan dua putaran juri mg-styles-15.

**Architecture:** Komposisi tetap HyperFrames (HTML + GSAP; Three.js lewat `GV3D`), satu `GV.register` per babak, semua state per frame diturunkan dari waktu. Rencana ini menambah (1) lapisan QA yang membaca frame nyata — peristiwa di grid ketukan, sambungan antarbabak, rentang beku — sebagai tes yang gagal dulu, lalu (2) upgrade gerak per babak sampai tes itu lulus, lalu (3) dua putaran juri dan perbaikan.

**Tech Stack:** HyperFrames 0.8.181, GSAP 3.14.2, Three.js 0.181.2 (bundel lokal), esbuild, Node 22 test runner, ffmpeg, Python numpy/scipy/pyloudnorm.

**Spec:** `docs/superpowers/specs/2026-10-20-galvis-launch-film-design.md` (§3 bahasa visual, §4 dither, §6 timing, §7 babak demi babak, §8 rekonstruksi UI, §10 QA). Animatic yang disetujui: `projects/galvis-launch-film/review/ANIMATIC.md`.

## Global Constraints

- 120 BPM, bar = 2 s, 60 bar, 120,0 s; bar *n* mulai di (n−1)×2 s. Impact hanya 24,0 s dan 56,0 s; sting 112,0 s.
- Palet: Deep Navy `#032750`, Bright Navy `#024ABC` (Workspace), Teal `#1FAFA1` (Data Enrichment), Nature Green `#86C36A` (Enterprise, garis/bidang saja, bukan teks), Putih, Cool Gray `#E4E8EF`, Light Gray `#F5F6F8`.
- Tipografi: Plus Jakarta Sans Bold (headline), Mulish (label), JetBrains Mono (angka). Maksimal satu kalimat di layar. Teks, logo, UI tidak pernah di-dither. Copy berbahasa Inggris dan hanya dari `shared/copy.json`.
- Dither: sel 3 px @1080p, terkunci ke layar — kanvas ber-dither tidak pernah di-scale atau di-rotate; geser isi dengan menggambar ulang (crop), bukan transform.
- Logo tanpa distorsi (tanpa perspektif/skew); rotasi 3D hanya untuk elemen non-logo.
- Gerak UI Workspace: 180 ms, `cubic-bezier(.2,0,0,1)`.
- Deterministik: tanpa `Math.random`/`Date.now`/`performance.now`/rAF di jalur render; render memakai `--no-browser-gpu`.
- Audio di rencana ini tetap skor sementara (Rencana 4 = sound design); tidak ada tes audio baru selain yang sudah ada.

## Review Focus

1. **Sambungan antarbabak meloncat** — frame terakhir babak A dan frame pertama babak B berbeda padahal bukan potongan yang disengaja → batas di `cues.json` (`match`/`cut`), dicek `scripts/qa-act.mjs` dan `checks/film.test.mjs` (Task 2; tiap task babak membuat batas keluarnya lulus).
2. **Gambar membeku** (rubrik: "no unintended static spans") → rentang > 1,0 s dengan selisih antar-frame < 0,15 level abu dianggap beku kecuali tercantum di `holds` (Task 2).
3. **Aksen gambar meleset dari grid ketukan** → `events` di `cues.json`, tiap event di grid 1/8 (kelipatan 0,25 s) dan dicek di kotaknya (Task 2 + task babak).
4. **Render ulang commit yang sama hasilnya beda** (WebGL, urutan muat) → `checks/determinism.test.mjs`: snapshot yang sama dua kali harus identik byte (Task 2).
5. **Aset gagal dimuat menampilkan copy bertumpuk** → `GV.register` menyembunyikan root babak sampai build selesai dan membiarkannya tersembunyi bila build gagal (Task 1).

---

## File Structure

| File | Tanggung jawab |
|---|---|
| `shared/motion/ease.js` | `cubicBezier`, `UI_EASE`, `since` — progres ber-easing sebagai fungsi waktu |
| `shared/motion/paths.js` | `vortexPoint` (babak 02), `lerpRect` (babak 09 foldback) |
| `scripts/lib/frames.mjs` | analisis frame murni: `frameDiff`, `boxDiff`, `staticSpans`, `boundaryDiff` |
| `scripts/qa-act.mjs` | QA satu babak dari snapshot: event, batas, rentang beku, kontak sheet 0,5 s |
| `scripts/render.mjs` | render film (kualitas, nama keluaran) + kontak sheet; `animatic.mjs` jadi pembungkus |
| `checks/film.test.mjs`, `checks/determinism.test.mjs` | gerbang di render penuh dan determinisme |
| `cues.json` | + `events`, `boundaries`, `holds` |
| `compositions/0N-*.html` | upgrade per babak (Task 3–12) |
| `review/acts/<act>.jpg`, `review/jury-1.md`, `review/jury-2.md`, `review/FILM.md` | bukti QA dan juri |

---

### Task 1: Pengerasan (sisa minor Rencana 2)

**Files:** Modify `shared/register.js`, `tests/register.test.mjs`, `tests/dither-perf.test.mjs`, `tests/copy-usage.test.mjs`, `shared/three/core-scene.js`, `compositions/07-enrichment.html`, `compositions/01-world.html`, `compositions/10-final.html`, `index.html`, `package.json`; Create `vendor/gsap.min.js` (salinan `node_modules/gsap/dist/gsap.min.js` 3.14.2), `scripts/animatic.mjs` (font)

**Interfaces:** Produces: `register(id, build, duration)` sekarang juga mengatur `visibility` root `[data-composition-id="<id>"]` (hidden saat build, visible bila sukses, tetap hidden bila gagal).

- [ ] **Step 1: Tes gagal** — di `tests/register.test.mjs` tambah DOM palsu (`document.querySelector` mengembalikan objek `{style:{}}`): `test('the act root stays hidden while building and after a failed build')` → selama build `style.visibility === 'hidden'`, setelah build sukses `'visible'`, setelah build melempar `'hidden'`. Di `tests/dither-perf.test.mjs` tambah kasus `palette: 'landing'` ≤ 20 ms. Di `tests/copy-usage.test.mjs` tambah fixture: string bertanda kutip ganda `"Two words here"` dan template `` `${n} steps done` `` harus terdeteksi.
- [ ] **Step 2:** `cd projects/galvis-launch-film && node --test tests/register.test.mjs tests/copy-usage.test.mjs` → FAIL pada kasus baru.
- [ ] **Step 3:** Implement: register menyembunyikan/menampilkan root; copy-usage memindai string kutip ganda dan membuang hanya bagian `${…}` sebelum menghitung kata (string CSS tetap dikecualikan lewat `#`/`(`/`;`); `core-scene.js` glow `CanvasTexture.colorSpace = THREE.SRGBColorSpace`; babak 07 menyimpan `Path2D` peta SEA sekali dan melewati gambar titik saat `#wide` opacity 0; posisi tween detik mentah di babak 01 (`12 - 0.45`) dan 10 (`0.3`, `1.1`, `7.2`) diganti `GV.at(...)`; `index.html` memuat `vendor/gsap.min.js` (tanpa CDN); `animatic.mjs` mencari font lewat `fc-match -f '%{file}' monospace`.
- [ ] **Step 4:** `npm test` → semua PASS (jumlah tes bertambah); `npx --yes hyperframes@0.8.181 check` → passed.
- [ ] **Step 5: Commit** — `fix(galvis-film): harden register, copy test, vendored gsap`.

---

### Task 2: Lapisan QA berbasis frame

**Files:** Create `shared/motion/ease.js`, `shared/motion/paths.js`, `scripts/lib/frames.mjs`, `scripts/qa-act.mjs`, `scripts/render.mjs`, `checks/film.test.mjs`, `checks/determinism.test.mjs`, `tests/frames.test.mjs`, `tests/motion.test.mjs`; Modify `cues.json`, `tests/cues.test.mjs`, `shared/index.js` (ekspor motion), `scripts/animatic.mjs`, `package.json` (`qa:act`, `test:film`)

**Interfaces:**
- `cubicBezier(x1, y1, x2, y2) → (x: number) => number`; `UI_EASE = cubicBezier(.2, 0, 0, 1)`; `since(t, t0, dur, ease = UI_EASE) → 0..1` (0 sebelum t0, 1 setelah t0+dur). Ekspor lewat `GV`.
- `vortexPoint(start: [x,y], center: [x,y], k: 0..1, turns = 1.25) → { x, y, scale, rotation }` — spiral masuk: radius × (1−k)^1.6, sudut + turns·2π·k, scale 1−0,85k.
- `lerpRect(a, b, k) → { x, y, w, h, r }` (lerp per field).
- `frameDiff(a: Uint8Array, b: Uint8Array) → number` (rata-rata |Δ| abu, frame 160×90); `boxDiff(a, b, [x,y,w,h] di koordinat 1920×1080) → number`; `staticSpans(diffs: number[], fps, { threshold = 0.15, minSeconds = 1.0, holds = [], t0 = 0 }) → [[from, to]]`; `boundaryDiff = frameDiff`.
- `cues.json`: `events: [{ t, act, what, box: [x,y,w,h] }]`, `boundaries: [{ t, kind: 'match'|'cut' }]`, `holds: [[from, to]]`.
- `node scripts/qa-act.mjs <act-id>` → snapshot tiap 0,25 s di jendela babak (+ frame t−1/30 dan t tiap event dan batas keluar), tulis `review/acts/<act-id>.jpg` (kontak sheet 0,5 s), cetak `PASS|FAIL` per pemeriksaan, keluar 1 bila ada FAIL.
- `node scripts/render.mjs --quality <draft|looks> --name <file-stem>` → `renders/<stem>.mp4` + `review/<stem>-sheet.jpg` (1 frame/detik, 10 kolom).

- [ ] **Step 1: Tes gagal** — `tests/motion.test.mjs`: `UI_EASE(0) === 0`, `UI_EASE(1) === 1`, `UI_EASE(0.5)` ≈ 0,8 (±0,02), monoton naik di 101 titik; `since(5, 6, 1) === 0`, `since(8, 6, 1) === 1`; `vortexPoint([0,0],[100,0],0)` → x 0, y 0, scale 1; `vortexPoint(...,1)` → x 100, y 0, scale ≈ 0,15; `lerpRect` titik tengah. `tests/frames.test.mjs`: dua frame sama → `frameDiff` 0; `staticSpans` menemukan rentang 1,5 s di deret buatan, mengabaikannya bila ada di `holds`, mengabaikan rentang 0,8 s. `tests/cues.test.mjs`: tiap `events[].t` × 4 bilangan bulat dan di dalam jendela `act`-nya; `boundaries` tepat di 12, 24, 34, 52, 62, 76, 90, 106, 112 dengan `cut` hanya di 24 dan 112.
- [ ] **Step 2:** `node --test tests/motion.test.mjs tests/frames.test.mjs tests/cues.test.mjs` → FAIL (modul belum ada).
- [ ] **Step 3:** Implement modul di atas; `cues.json` diisi `boundaries` (sesuai Step 1), `holds: [[119.2, 120]]`, dan `events` awal dari animatic yang sudah ada — tepat yang sudah jatuh di grid: 4.0 dan 8.0 (baris babak 01, box `[360,110,1200,110]`), 14.0 dan 18.0 (babak 02, `[200,60,1520,110]`), 24.0 (`[0,0,1920,1080]`), 28.0 dan 28.5 (GAL/VIS, `[560,586,800,130]`), 56.0 (`[0,0,1920,1080]`), 58.0/58.5/59.0 (lockup produk, `[190,840,460,80]`, `[730,840,460,80]`, `[1270,840,460,80]`), 70.0/71.0/72.0/73.0/74.5 (langkah agent, `[1290,560,500,380]`), 112.0 (`[0,0,1920,1080]`). Kotak = area yang berubah; ambang event 8 level abu di kotak; batas `match` ≤ 6 level abu seluruh frame.
- [ ] **Step 4:** `npm test` → PASS. `node scripts/qa-act.mjs act05-products` → keluaran memuat baris PASS/FAIL per pemeriksaan (hasil apa pun; skrip harus berjalan); `review/acts/act05-products.jpg` ada.
- [ ] **Step 5:** `checks/film.test.mjs` (env `FILM`, default `renders/film-v1.mp4`): semua `events` kena, semua batas `match` ≤ 6, tak ada rentang beku di luar `holds`, durasi/format/loudness seperti `checks/animatic.test.mjs`. `checks/determinism.test.mjs`: snapshot `--at 5,40,100` dua kali → PNG identik byte. `package.json`: `"qa:act": "node scripts/qa-act.mjs"`, `"test:film": "node --test checks/film.test.mjs checks/determinism.test.mjs"`. Jalankan `node --test checks/determinism.test.mjs` → PASS (bila gagal: ledger dan perbaiki sumber nondeterminisme sebelum lanjut).
- [ ] **Step 6:** Jalankan `qa-act` untuk kesepuluh babak dan catat baseline (jumlah FAIL per babak) di ledger — ini daftar kerja Task 3–12.
- [ ] **Step 7: Commit** — `feat(galvis-film): frame-based QA (events, boundaries, static spans)`.

---

Setiap task babak (3–12) memakai pola yang sama:

1. Tambah event dan batas keluar babak itu ke `cues.json` (nilai di bawah) → `npm run qa:act -- <act>` → **FAIL** pada event/batas yang belum diimplementasikan (dan rentang beku yang ada).
2. Implement upgrade babak itu (daftar di bawah). Fungsi baru yang murni → tes unit dulu di `tests/motion.test.mjs` atau berkas tes baru.
3. `npm run qa:act -- <act>` → semua PASS; `npm test` → PASS; `npx --yes hyperframes@0.8.181 check --at <3–5 waktu di babak>` → passed; lihat `review/acts/<act>.jpg`.
4. Commit `feat(galvis-film): full animation act NN` + baris ledger (event, keputusan, bukti).

### Task 3: Babak 01 The Spatial World (0–12 s)

**Upgrade:**
- Lapisan menyala bergantian di globe (spec §7 babak 1): uniform `layers: { cities, vegetation, water, contours }` 0..1 di `shared/three/globe.js`; kota = lampu Black Marble diberi rona teal di sisi siang juga (A(4)), vegetasi = piksel siang dengan g > r diberi rona hijau (A(4,2)), air = laut dangkal diberi rona Bright Navy (A(5)); kontur = garis iso dari noise ber-seed di bbox SEA (lon 92–141, lat −11–28), digambar di shader, menggores dari barat ke timur A(3)→A(5) (#476). Tiap lapisan masuk 0,4 s dengan `since`.
- Konstelasi (#450): setelah semua sinyal menyala, garis tipis antar-tetangga terdekat (2 per titik, maks 600 garis, dihitung sekali) menggores A(6)→A(6,2).
- Batas keluar 12,0 = `match` (sudah light-gray penuh).

**Events:** 6.0 (`[300,280,1320,800]`, kota), 7.0 (vegetasi), 8.0 (baris 2, ada), 10.0 (`[300,280,1320,800]`, konstelasi).

### Task 4: Babak 02 The Complexity (12–24 s)

**Upgrade:**
- Bar 7 beat 0–1: garis batas Indonesia (`assets/geo/idn-adm1.svg`, Deep Navy) muncul tampak atas lalu miring ke bidang isometrik dan menjadi alas pelat pertama (#594 menukik dari babak 01).
- Pelat jatuh tepat di grid: pelat k di `A(7,1) + k·0.5` (12,5–15,5 s).
- Moiré (#467): lapisan dua kisi garis (DOM SVG, bukan kanvas dither) yang berputar pelan, opacity naik 0,08 per pelat; `levels` dither pelat atas turun dari 4 ke 2 saat tumpukan > 4 (gambar ulang, bukan scale).
- Kolaps vortex-keyhole (#441), menggantikan slide-and-fade (ruling Rencana 2): saat A(12) tiap pelat di-crossfade 0,15 s ke salinan **tanpa dither** (canvas jernih dari sumber yang sama), dan salinan itu yang berputar mengikuti `vortexPoint` ke node (pelat ber-dither tidak di-scale).
- Batas keluar 24,0 = `cut` (sudah).

**Events:** 12.5, 13.0, …, 15.5 (pelat; box `[360,200,1200,800]`), 22.0 (`[0,0,1920,1080]`, vortex mulai), 23.5 (veil stop-down, ada sebagai perubahan penuh).

### Task 5: Babak 03 GALVIS Reveal (24–34 s)

**Upgrade:**
- Ledakan di 24,0 (#392): partikel campuran titik, sel dither 3×3 dua warna, dan potongan kontur pendek; berkumpul ke bentuk logo.
- Kawanan piksel (#452): 26,0–26,5 sel dither membentuk siluet logo, lalu logo tajam muncul di atasnya dan sel memudar (logo sendiri tidak pernah di-dither).
- Heksagon dari modul grid (#383): heksagon dirakit dari 6 segmen yang mengunci satu per 1/16 bar dari 26,0; panah dilipat dari satu bidang (#391, `rotationX` 90→0 pada lapisan panah, logo tetap datar di akhir); keyline bergema (#387, ada).
- `Geospatial Intelligence Virtual Assistant System` dan sub: blur-to-baseline (#004).
- Batas keluar 34,0 = `match` (frame terakhir navy penuh = frame pertama babak 04 sebelum lorong muncul; babak 04 mulai dengan navy penuh + logo besar).

**Events:** 26.0 (`[840,160,240,263]`), 26.5, 27.0 (lapisan logo), 30.0 (`[300,730,1320,70]`), 32.0 (`[300,790,1320,50]`).

### Task 6: Babak 04 Core Technology (34–52 s)

**Upgrade:**
- Visual mini tiap modul hidup saat modulnya aktif (spec §7 tabel babak 4), semua dari waktu: **ai** kata pertanyaan menjadi pita token (tiga token menggeser masuk); **data** pelat acak mengunci ke grid 4×4; **eo** scan-beam kiri→kanan mengubah tile Sentinel ber-dither menjadi NDVI (crop dua kanvas, bukan scale); **analytics** buffer melebar dan isokron bergelombang; **ml** tiga lapisan prediktor turun menumpuk lalu permukaan probabilitas memudar masuk; **decision** zona prioritas terisi berurutan dan skor bergulir 0→87 (JetBrains Mono).
- Label kedua per modul (copy baru `core.sub.ai` … `core.sub.decision`, persis spec: `Natural Language → Spatial Intelligence`, `Multi-source Integration · Automated Data Pipeline`, `Earth Observation Intelligence`, `Spatial Analytics`, `Machine Learning & Predictive Intelligence`, `Data → Analysis → Insight → Decision`; panah dirender sebagai chevron SVG, string disimpan sebagai array bagian). Muncul di bawah nama saat modul aktif, hilang saat modul berikutnya aktif.
- Modul menyala di ketukan: aktivasi di `A(20+k, 1)` (bukan +0,45).
- Bar 26: header menjadi `core.final` (`GALVIS CORE TECHNOLOGY`).
- Batas keluar 52,0 = `match`: frame terakhir babak 04 dan pertama babak 05 sama-sama navy dengan logo di tengah — babak 04 menutup dengan modul dan lorong memudar ke navy + logo di posisi awal babak 05.

**Events:** 38.5, 40.5, 42.5, 44.5, 46.5, 48.5 (`[460,180,1000,840]`), 50.0 (`[560,30,800,110]`).

### Task 7: Babak 05 Three Products (52–62 s)

**Upgrade:**
- Lockup logo-system di ujung cabang: mark kecil + nama produk + garis warna sub-brand, masuk per ketukan bersama nadanya (ada; rapikan jadi lockup).
- Bar 31 (60–62): arsitektur ditahan tetapi hidup — partikel tetap mengalir (bukan `holds`).
- Peralihan ke babak 06 (#201): di 61,5 cabang tengah dan kanan meredup ke 30 %, ujung cabang kiri mekar menjadi persegi Light Gray kecil (`lerpRect` dari titik ujung ke kotak awal jendela babak 06).
- Batas keluar 62,0 = `match`.

**Events:** 52.0 (`[300,820,1320,90]`), 54.0 (sama), 61.5 (`[180,700,520,300]`).

### Task 8: Babak 06 Workspace (62–76 s)

**Upgrade:**
- Bar 32: babak dibuka dengan frame terakhir babak 05 (navy + persegi kecil di ujung cabang kiri); persegi itu menjadi clip jendela yang terbuka (#201) sementara latar navy larut ke Cool Gray lewat tirai Bayer `GV.mountCurtain` (≈ 0,8 s).
- Gerak UI 180 ms `UI_EASE` untuk setiap perubahan state di `shared/ui/workspace.js`: kapsul langkah (pending→running→done: skala 0,92→1 dan warna), kedip layer, kartu insight, ketikan — `renderWorkspace` menerima `t` dan menghitung progres dengan `since`, bukan mengganti kelas seketika.
- Peta bereaksi per langkah: (1) zoom ke wilayah dengan menggambar ulang dither memakai crop yang menyempit (bukan scale), (2) layer baru berkedip, (3) sapuan analisis, (4) permukaan dilukis + resolve, (5) chart insight tumbuh.
- Bar 38: jendela menciut kembali ke cabang (#173) — clip menuju titik cabang; babak berakhir pada frame navy gelap dengan arsitektur samar dan cabang tengah menyala (serah terima ke babak 07).
- Batas keluar 76,0 = `match`.

**Events:** 66.0 (`[100,300,180,700]`, ASK), 68.0, 70.0, 72.0 (kata), 70.0/71.0/72.0/73.0/74.5 (langkah, ada), 75.0 (`[0,0,1920,1080]`, menciut).

### Task 9: Babak 07 Data Enrichment (76–90 s)

**Upgrade:**
- Bar 39: dibuka pada arsitektur samar dengan cabang tengah (Teal) menyala, kamera (pan/zoom elemen vektor, bukan dither) ke ujungnya, lalu ruang terang dan judul.
- Baris profil di grid 1/8 yang makin cepat (#235): baris k di `A(41) + k·0.5` untuk k < 6, lalu `A(42, 2) + (k−6)·0.25` (80,0 … 82,5, 83,0, 83,25, 83,5, 83,75); tiap peta masuk ber-dither, resolve, lalu terlipat ke barisnya.
- Pull-back: hanya titik di Indonesia (spec): `scripts/build-globe.mjs` menulis `countries[]` sejajar `points`; babak 07 memfilter `SEA_POINTS` dengan indeks yang sama (`IDN`). Tes: `tests/geo.test.mjs` — jumlah titik IDN > 1000 dan semua `countries` ∈ daftar SEA.
- Batas keluar 90,0 = `match`: babak berakhir ke arsitektur samar dengan cabang kanan (Green) menyala.

**Events:** 77.0 (`[96,110,1000,120]`, judul setelah sekilas arsitektur), 80.0, 80.5, …, 83.75 (baris; box kartu profil), 86.0, 86.5, 87.0, 87.5 (rantai alur), 88.0 (posisi).

### Task 10: Babak 08 Enterprise (90–106 s)

**Upgrade:**
- Bar 46: dibuka dari arsitektur samar dengan cabang kanan menyala → tag + sub.
- Strip terus bergeser (spec): kedua kanvas per sektor digambar ulang tiap frame dengan crop yang bergeser 4 % lebar per detik (dither tetap terkunci ke layar).
- Forestry memakai `ESC/biodiversity` (mentah, ber-dither) → `DMR/risk` (jernih), sesuai spec.
- Langkah rantai berdenyut (skala 1→1,06→1, `UI_EASE`) di ketukan perubahannya.
- 105,7–106,0: rekap memudar ke Light Gray polos (serah terima ke tirai babak 09).
- Batas keluar 106,0 = `match`.

**Events:** 92.0 (`[0,0,1920,1080]`, plugboard gelap), 94.0, 96.25, 98.5, 100.75 (sektor; `[0,236,1920,600]`), 103.0, 103.25, 103.5 (sekilas), 104.0 (`[0,380,1920,120]`), 104.5 (`[96,540,1728,200]`, rekap).

### Task 11: Babak 09 Reunification (106–112 s)

**Upgrade:**
- Bar 54 foldback (#060): tiga "ruangan" produk (miniatur jendela Workspace, kartu profil, strip Enterprise — kanvas jernih kecil, bukan dither) terlipat menjadi badge berwarna produk (`lerpRect`, radius → 50 %), lalu badge naik sepanjang cabangnya ke inti, menggantikan titik cahaya; berangkat di 106,0/106,5/107,0 (bel), tiba 0,9 s kemudian.
- Bar 55: arsitektur ditahan dengan partikel naik pelan (bukan `holds`).
- Batas keluar 112,0 = `cut` (sting).

**Events:** 106.0, 106.5, 107.0 (`[240,560,1440,360]`), 108.0 (`[600,100,720,780]`, arsitektur penuh), 110.0 (`[0,0,1920,1080]`, peta), 110.25 dan 110.75 (`[300,830,1320,170]`, dua baris — selaraskan masuknya ke grid).

### Task 12: Babak 10 Final Hero (112–120 s)

**Upgrade:**
- Kontur (#476) berubah bentuk dari waktu (fase noise bergeser), bukan translasi; bumi fajar ber-dither tipis (`resolve` 0,25) tetap terkunci layar.
- Sapuan cahaya logo (#399) tetap; `final.chain` 0,5 s per frasa di grid (114,0/114,5/115,0), lalu tagline 116,0, URL + kredit 118,0, hitam 119,2–120,0 (`holds`).

**Events:** 112.0 (ada), 113.0 (`[300,370,1320,60]`), 114.0, 114.5, 115.0 (`[300,450,1320,90]`), 116.0, 118.0 (`[300,540,1320,60]`).

---

### Task 13: Render film v1 + juri putaran 1

**Files:** Create `review/jury-1.md`, `review/film-v1-sheet.jpg`

- [ ] **Step 1:** `node scripts/render.mjs --quality looks --name film-v1`; `FILM=renders/film-v1.mp4 npm run test:film` → PASS (events, batas, beku, format, loudness, determinisme). Bila FAIL: perbaiki di babaknya, commit, ulang.
- [ ] **Step 2:** Dispatch juri (subagent baru, model paling mampu, tanpa konteks pembuatan) dengan prompt juri mg-styles-15 (`rubric.md` Vincentwei1021/mg-styles-15, langkah 1–5) yang diadaptasi: film 120 s; skor 1–10 untuk **tiap babak** pada `motion_craft`, `design_typography`, `concept_wow`, dan untuk **film** pada ketujuh dimensi; `sound_sync` dinilai hanya keselarasan gambar ke ketukan (skor sementara, Rencana 4); kontak sheet tiap 0,5 s via `qa-act`/ffmpeg dan frame resolusi penuh di 5–8 waktu kunci; 5–10 perbaikan berurut dampak, minimal satu untuk wow. Hasil ditulis ke `review/jury-1.md`.
- [ ] **Step 2b: Uji keterbacaan arsitektur (spec §10)** — subagent lain tanpa konteks GALVIS menerima hanya frame babak 05 (52–62 s, tiap 0,5 s, tanpa suara) dan diminta menjelaskan struktur produk yang ditunjukkan. Lulus bila jawabannya menyebut satu inti dan tiga produk turunan (Workspace, Data Enrichment, Enterprise). Jawaban dicatat di `review/jury-1.md`.
- [ ] **Step 3: Commit** — `docs(galvis-film): jury round 1`.

### Task 14: Perbaikan putaran 1

- [ ] **Step 1:** Salin `renders/film-v1.mp4` tetap ada (versi 1). Implement setiap masalah kritis dan setiap perbaikan berdampak tinggi dari `review/jury-1.md`; perbaikan yang dilewati atau diganti → baris `Ruling:` di ledger dengan alasannya. Perubahan yang menyentuh fungsi murni → tes dulu; perubahan babak → `qa:act` babak itu PASS.
- [ ] **Step 2:** `npm test` PASS; `check` passed.
- [ ] **Step 3: Commit** per babak — `fix(galvis-film): jury round 1 — act NN`.

### Task 15: Juri putaran 2, perbaikan 2, serah terima

**Files:** Create `review/jury-2.md`, `review/FILM.md`

- [ ] **Step 1:** `node scripts/render.mjs --quality looks --name film-v2`; `FILM=renders/film-v2.mp4 npm run test:film` → PASS.
- [ ] **Step 2:** Juri baru (subagent baru, prompt yang sama + `review/jury-1.md` sebagai konteks "putaran sebelumnya") → `review/jury-2.md`.
- [ ] **Step 3:** Gerbang: tiap babak `motion_craft` dan `design_typography` ≥ 7, dan film ≥ 7 di semua dimensi kecuali `sound_sync` (Rencana 4). Perbaiki semua yang di bawah gerbang (pola Task 14), render `film-v3`, `npm run test:film` PASS. Yang masih di bawah gerbang setelah ini → dicatat di `review/FILM.md` dan dibawa ke user, bukan diputar ulang tanpa batas.
- [ ] **Step 4:** `review/FILM.md`: tabel skor putaran 1 → 2 per babak, perbaikan yang dilakukan/dilewati, hasil `test:film`. Pratinjau 720p + kontak sheet diunggah ke halaman pemutar artifact (versi baru halaman animatic atau halaman baru `GALVIS Film v<N>`).
- [ ] **Step 5: Commit dan push** — `feat(galvis-film): full animation v<N>`; serahkan ke user. Persetujuan user adalah gerbang ke Rencana 4 (sound design, mix, master).
