# GALVIS Launch Film — Rencana 2: Animatic

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Animatic 2:00 lengkap — kesepuluh babak bergerak sesuai timing per bar di spec, dengan transisi antarbabak dan score sementara (drone, pulse, dua impact, sonic logo tiga nada) — dirender ke MP4 1080p30 untuk disetujui user sebelum animasi penuh.

**Architecture:** Proyek HyperFrames dari Rencana 1. Setiap sub-komposisi mendapat timeline GSAP dalam waktu lokal babak, dihitung dari `cues.json` lewat helper `GV.at(actId, bar, beat)`. Dither yang berubah (resolve) digambar ulang dari `onUpdate` timeline lewat proxy objek, memakai versi dither in-place yang cepat. Score dibuat dengan Python (numpy) dari `cues.json` yang sama, dipasang sebagai `<audio>` di `index.html`.

**Tech Stack:** HyperFrames CLI 0.8.181, GSAP 3.14.2, Node 22 (`node --test`), Python 3 + numpy + `pyloudnorm` (score), ffmpeg/ffprobe (verifikasi).

**Spec:** `docs/superpowers/specs/2026-10-20-galvis-launch-film-design.md` (§5 suara, §6 timing, §7 babak demi babak). Styleframe yang disetujui: `projects/galvis-launch-film/styleframes/`.

## Global Constraints

- Semua constraint Rencana 1 tetap berlaku (palet, font, kanvas 1920×1080, aturan HyperFrames, lisensi, teks/logo/UI tidak di-dither).
- Waktu: bar *n* mulai `(n-1)*2` s global; ketukan = 0,5 s. Di dalam sub-komposisi, waktu lokal = global − `actWindow(id).start`. Semua posisi tween ditulis lewat `GV.at(...)`, tidak pernah angka detik mentah.
- Impact tepat di 24,000 s (bar 13) dan 56,000 s (bar 29); sonic logo: Workspace A4 (440 Hz) di 58,0 s, Data Enrichment D5 (587,33 Hz) di 58,5 s, Enterprise F♯5 (739,99 Hz) di 59,0 s; nada dasar Core D3 (146,83 Hz); akor penuh di 108,0 s (bar 55); sting di 112,0 s (bar 57).
- Riser → stop-down → impact hanya dua kali (sebelum 24 s dan 56 s). Stop-down = ketukan terakhir sebelum impact (23,5–24,0 dan 55,5–56,0).
- Suara mulai di frame pertama; akhir: ekor sting ≥ 2 s, fade ≤ 1 s, selesai tepat 120,0 s.
- Master score sementara: −14 LUFS integrated (±1), sample peak ≤ −1 dBFS.
- Dither: kanvas yang memuat dither **tidak boleh di-scale atau di-rotate oleh GSAP** (pola harus tetap terkunci ke layar); gerak kamera dilakukan pada layer non-dither, atau dengan crossfade. Transform awal ditulis dengan `gsap.set`, tidak di CSS, untuk elemen yang dianimasikan.
- Copy layar hanya dari `shared/copy.json` (termasuk teks yang di Rencana 1 masih ditulis langsung).
- Animatic = blocking: posisi, timing, dan transisi benar; easing/detail boleh kasar. Render `--quality draft`.

## Review Focus

1. **Gambar ulang dither terlalu lambat** sehingga preview/render tersendat → `ditherImageData` in-place harus ≤ 20 ms untuk 640×360 sel di mesin ini; dikunci oleh `tests/dither-perf.test.mjs` (Task 1).
2. **Timeline sub-komposisi lebih panjang dari jendela babaknya** sehingga tween terpotong → setiap babak mengekspor durasi dan `tests/act-durations.test.mjs` membandingkannya dengan `actWindow` (Task 1 + tiap task babak).
3. **Impact audio tidak jatuh di frame visualnya** → `scripts/sync-check.mjs` mengukur onset audio di 24,0/56,0/112,0 s (±1 frame) dan perubahan luminansi frame di waktu yang sama (Task 11).
4. **Gambar gagal dimuat membuat babak kosong** → `GV.register` menangkap error, menulis ke console, dan tetap mendaftarkan timeline; dikunci oleh `tests/register.test.mjs` (Task 1).
5. **Teks layar tertulis langsung di HTML** → `tests/copy-usage.test.mjs` menolak string Inggris ≥ 3 kata di `compositions/*.html` di luar `GV.COPY` (Task 1, berlaku untuk semua task berikutnya).

---

### Task 1: Fondasi gerak — waktu, dither cepat, tirai Bayer, registrasi aman

**Files:**
- Create: `shared/beats.js`, `shared/curtain.js`, `shared/register.js`, `tests/beats.test.mjs`, `tests/curtain.test.mjs`, `tests/register.test.mjs`, `tests/dither-perf.test.mjs`, `tests/act-durations.test.mjs`, `tests/copy-usage.test.mjs`
- Modify: `shared/dither/reference.js` (tambah `ditherImageData`), `shared/dither/dither-layer.js` (pakai versi in-place), `shared/index.js`, `shared/copy.json` (teks yang masih tertulis langsung)

**Interfaces:**
- Produces:
  - `at(actId: string, bar: number, beat = 0): number` — detik lokal babak; `at('act03-reveal', 13) === 0`, `at('act05-products', 29) === 4`, `at('act05-products', 30, 1) === 6.5`.
  - `ditherImageData(data: Uint8ClampedArray, cw: number, ch: number, opts): void` — menimpa `data` di tempat; hasil identik dengan `ditherCell` per sel.
  - `bayerVisible(cx: number, cy: number, progress: number): boolean` — sel tirai sudah terbuka bila `(BAYER4[cy&3][cx&3] + 0.5) / 16 < progress`.
  - `mountCurtain(canvas, color: string, cell = 12): { set(progress: number): void }` — kanvas berwarna `color` yang terbuka sel demi sel dalam urutan Bayer (transisi antarbabak, sel 12 px agar terbaca sebagai pola).
  - `register(id: string, build: (tl) => Promise<void>|void, duration: number): void` — membuat `gsap.timeline({ paused: true })`, menjalankan `build(tl)`, memastikan `tl.duration() >= duration` dengan `tl.set({}, {}, duration)`, mendaftarkan `window.__timelines[id]`; bila `build` melempar, `console.error` lalu tetap mendaftar. Juga menyimpan `window.__actDurations[id] = tl.duration()`.
  - `GV.at`, `GV.mountCurtain`, `GV.register` di bundle.

- [ ] **Step 1: Tes yang gagal** — `tests/beats.test.mjs` (tiga contoh `at` di atas dan `at('act01-world', 1) === 0`); `tests/curtain.test.mjs` (`progress 0` → tak ada sel terbuka pada blok 4×4, `progress 1` → semua terbuka, `progress 0.5` → tepat 8 dari 16); `tests/register.test.mjs` dengan `gsap` dan `window` tiruan minimal (objek dengan `timeline()` yang mengembalikan `{ set, duration }`): build yang melempar tetap menghasilkan `window.__timelines[id]` dan satu `console.error`; `tests/dither-perf.test.mjs`: `ditherImageData` pada data acak ber-seed 640×360 sama dengan `ditherCell` per sel dan median 5 run ≤ 20 ms; `tests/copy-usage.test.mjs`: untuk tiap `compositions/*.html`, buang isi `<style>`, atribut, komentar, dan pemanggilan `GV.COPY[...]`; teks tersisa di dalam elemen atau literal string JS yang berisi ≥ 3 kata Latin berhuruf besar/kecil (regex `/[A-Za-z]{2,}(\s+[A-Za-z&/]{2,}){2,}/`) gagal kecuali ada di daftar izin teknis (`'GALVIS Agent'` tidak termasuk; nama layer UI boleh masuk `copy.json`).
- [ ] **Step 2: Jalankan** `npm test` → kelima tes baru FAIL.
- [ ] **Step 3: Implement** `beats.js`, `curtain.js`, `register.js`, `ditherImageData` (loop datar tanpa alokasi: ramp RGB dan tabel ambang dihitung sekali per panggilan), lalu `dither-layer.js` memanggil `ditherImageData`.
- [ ] **Step 4: Pindahkan teks** yang masih tertulis langsung ke `copy.json` (label pelat babak 02, label/sub babak 07–08, layer & langkah Workspace, judul Insight, "02 / 04" jadi format dari indeks) dan pakai `GV.COPY`.
- [ ] **Step 5: `tests/act-durations.test.mjs`** — jalankan `npx hyperframes snapshot --at 1 --no-end` sekali lewat helper `scripts/read-durations.mjs` yang memuat proyek di Chromium Playwright (`/opt/node-tools/node_modules/playwright`), menunggu semua `window.__timelines`, lalu membaca `window.__actDurations`; assert setiap durasi ≤ `actWindow(id).duration + 0.001`. (Lambat: jalankan dengan `npm run test:durations`, bukan di `npm test`.)
- [ ] **Step 6: Jalankan** `npm test` → PASS; `npm run test:dither` → mismatch 0 %; `npx hyperframes check --at 9.5,17,31,51,61,73,83,97,111,117` → 0 finding (styleframe tak berubah secara visual).
- [ ] **Step 7: Commit** — `feat(galvis-film): timing helpers, fast dither, Bayer curtain, safe registration`.

---

### Task 2: Score sementara

**Files:**
- Create: `audio/score.py`, `audio/test_score.py`, `audio/temp-score.wav` (hasil), `audio/README.md`
- Modify: `index.html` (elemen audio), `assets/LICENSES.json` tidak perlu (audio dibuat sendiri; catat di `audio/README.md`)

**Interfaces:**
- Consumes: `cues.json`.
- Produces: `audio/temp-score.wav` (48 kHz, stereo, 16-bit, tepat 120,000 s) dan `<audio id="galvis-launch-score" src="audio/temp-score.wav" data-start="0" data-duration="120" data-track-index="9">` di root `index.html`.

Isi score (semua dari `cues.json`, waktu global):

| Waktu | Lapisan |
|---|---|
| 0–24 | drone D1+D2 (sinus + harmonik lembut, filter lowpass), mulai di 0,0 s dengan fade-in 50 ms |
| 12–24 | pulse: tick noise per 1/8 ketukan (0,25 s) dari 12 s, kick sinus-sweep tiap ketukan dari 14 s |
| 20–23,5 | riser noise naik + sweep nada |
| 23,5–24,0 | stop-down: semua lapisan senyap kecuali ekor reverb |
| 24,0 | impact #1: transient noise + sub drop D1 (1,2 s) |
| 24–34 | nada dasar Core D3 bell, pad D mayor lembut |
| 34–52 | groove: kick tiap ketukan, hat tiap 1/8, aksen bell pentatonik di awal bar 20–25 (38, 40, …, 48 s) |
| 52–55,5 | riser kedua |
| 55,5–56,0 | stop-down |
| 56,0 | impact #2 |
| 58,0 / 58,5 / 59,0 | sonic logo A4 / D5 / F♯5 (bell, ekor 1,5 s) |
| 62–76 / 76–90 / 90–106 | groove dengan motif nada A4 / D5 / F♯5 tiap 2 bar; 90–106 hat lebih rapat |
| 106,0 / 106,5 / 107,0 | tiga nada naik |
| 108,0 | akor penuh D3+A4+D5+F♯5 |
| 112,0 | sting: impact lembut + akor bell ekor 3 s |
| 119,2–120,0 | fade akhir |

- [ ] **Step 1: Tes yang gagal** — `audio/test_score.py` (`python3 -m unittest audio/test_score.py`): durasi 120,000 s ±1 sampel; 48 kHz stereo; onset (lonjakan energi RMS 10 ms ≥ 12 dB di atas 100 ms sebelumnya) terdeteksi dalam ±10 ms dari 24,0 dan 56,0; jendela 23,6–23,95 dan 55,6–55,95 berenergi ≥ 18 dB di bawah rata-rata 22–23 s / 54–55 s (stop-down); pitch dominan FFT 57,95–58,45 s = 440 Hz ±3 Hz; LUFS integrated −14 ±1 (`pyloudnorm`); sample peak ≤ −1 dBFS; RMS 0–0,1 s > −50 dBFS (suara mulai di frame pertama).
- [ ] **Step 2: Jalankan** → FAIL.
- [ ] **Step 3: Implement `audio/score.py`** — `pip install numpy pyloudnorm`; fungsi kecil per lapisan (`drone`, `ticks`, `kick`, `riser`, `impact`, `bell(freq, t, tail)`), mixer menjumlahkan ke buffer stereo, reverb sederhana (beberapa delay ber-feedback), normalisasi loudness lalu limiter puncak −1 dBFS; tulis WAV dengan modul `wave`.
- [ ] **Step 4: Jalankan** tes → PASS; dengarkan bukan pilihan, jadi tambahkan `audio/score.png` (spektrogram + amplop) via matplotlib bila tersedia, dan periksa visual bahwa impact dan stop-down terlihat.
- [ ] **Step 5: Pasang audio** di `index.html`; `npx hyperframes check` → 0 finding (`media_missing_id` dll.).
- [ ] **Step 6: Commit** — `feat(galvis-film): temp score from cues`.

---

### Task 3: Babak 01 World + 02 Complexity

**Files:** Modify `compositions/01-world.html`, `compositions/02-complexity.html`

**Interfaces:** Consumes `GV.register`, `GV.at`, `GV.mountCurtain`, `mountDither`.

Blocking (waktu lokal lewat `GV.at`):
- **01:** bar 1 ketukan 0–3: hitam penuh; tirai Bayer hitam → dawn terbuka 1,5–4,5 s; dither dawn `resolve` tetap 0. Garis pantai tergambar (stroke-dash di kanvas, digambar ulang per frame dari progres) bar 3–5; sinyal muncul bertahap (urutan acak ber-seed) bar 4–6; bidang peta (non-dither) `rotateX` 54°→48° sepanjang babak. `world.line1` masuk bar 3 (blur-to-baseline 0,6 s), keluar bar 4 ketukan 3; `world.line2` masuk bar 5, tetap sampai akhir.
- **02:** latar terang; pelat jatuh satu per satu mulai bar 7 ketukan 1, jarak 0,75 s (y −180 → 0, opasitas 0 → nilai pelat); `complexity.line1` bar 8–9; `complexity.line2` bar 10–11 (line1 keluar dulu); bar 12: pelat runtuh ke titik pusat (960, 600) — pelat diperkecil lewat wrapper non-dither (scale pada wrapper berisi kanvas di-crossfade ke titik putih, bukan scale kanvas dither), titik putih bercahaya muncul 23,0 s global; ketukan terakhir bar 12: frame putih (stop-down visual).

- [ ] **Step 1:** Ubah 01 ke `GV.register('act01-world', build, 12)`; transform awal ke `gsap.set`.
- [ ] **Step 2:** Ubah 02 ke `GV.register('act02-complexity', build, 12)`.
- [ ] **Step 3: Verifikasi** — `npm test`; `npx hyperframes check` → 0 finding; `npx hyperframes snapshot --range 0:24 --frames 24 --output /tmp/anim-a12` dan lihat contact sheet: urutan masuk/keluar sesuai tabel; tidak ada pola dither yang ikut ter-scale (zoom 3× pada satu frame transisi: `snapshot --zoom`).
- [ ] **Step 4: Commit** — `feat(galvis-film): animatic act 01-02`.

---

### Task 4: Babak 03 Reveal

**Files:** Modify `compositions/03-reveal.html`

Blocking: lokal 0 (impact): lapisan putih penuh opasitas 1 → 0 dalam 0,4 s; partikel (±600 titik ber-seed, kanvas non-dither) dari posisi acak menuju area logo 0–1,8 s; bar 14: heksagon `scale` 0,6→1 (0–0,5 s setelah bar 14), panah `rotateX` 90°→0 (ketukan 1), pelat turun dari −60 px (ketukan 2); keyline bergema keluar ketukan 3 (scale 0,9→1, opasitas 0→nilai); bar 15: `GAL` lalu `VIS` (syllable-steps, 0,5 s per suku); bar 16: `reveal.full`; bar 17: `reveal.sub` masuk; bar 17 ketukan 3: logo `scale` 1→9 dan seluruh layar crossfade ke `#032750` (masuk ke heksagon).

- [ ] **Step 1:** Implement dengan `GV.register('act03-reveal', build, 10)`; logo dipisah per part agar bisa dianimasikan sendiri-sendiri.
- [ ] **Step 2: Verifikasi** — `check`; snapshot `--range 24:34 --frames 20`; frame 24,0 s harus putih penuh (impact visual).
- [ ] **Step 3: Commit** — `feat(galvis-film): animatic act 03`.

---

### Task 5: Babak 04 Core

**Files:** Modify `compositions/04-core.html`

Blocking: lokal 0–2 (bar 18): logo inti `scale` 6→1 di latar navy, glow masuk; `reveal.name` + `core.label` masuk bar 18 ketukan 2. Bar 19: `core.question` diketik di atas (huruf per 30 ms, kotak pill putih 12 % di tengah atas, di bawah header); cincin dan enam modul muncul berurutan (stagger 0,1 s) bar 19 ketukan 2. Bar 20–25: "paket" (titik putih bercahaya 10 px) bergerak dari pertanyaan → modul ke-k di awal bar 20+k (k = 0..5, urutan ai, data, eo, analytics, ml, decision), modul aktif `scale` 1→1,15 dan cincin teal penuh selama bar itu, lalu paket turun ke inti. Bar 26: semua modul menyala bersama, pertanyaan memudar.

- [ ] **Step 1:** Implement `GV.register('act04-core', build, 18)`.
- [ ] **Step 2: Verifikasi** — `check`; snapshot `--range 34:52 --frames 18`; tiap bar 20–25 menunjukkan modul yang benar aktif.
- [ ] **Step 3: Commit** — `feat(galvis-film): animatic act 04`.

---

### Task 6: Babak 05 Three Products

**Files:** Modify `compositions/05-products.html`

Blocking: bar 27: logo besar di tengah (scale 1,6) + `products.one`; bar 28: `products.three` menggantikan, logo naik ke posisi akhir (960, 150) selama bar 28; ketukan terakhir bar 28: diam. Bar 29 (impact, lokal 4,0): batang tergambar ke bawah (stroke-dashoffset) 4,0–4,6, tiga cabang tergambar 4,4–5,4, kilat putih kecil di titik belah 4,4; partikel mengalir sepanjang cabang (posisi dari `getPointAtLength` per frame dengan offset waktu, jadi deterministik). Bar 30: nama produk masuk di ketukan 0, 1, 2 (sinkron dengan sonic logo 58,0/58,5/59,0). Bar 31: tahan.

- [ ] **Step 1:** Implement `GV.register('act05-products', build, 10)`.
- [ ] **Step 2: Verifikasi** — `check`; snapshot `--at 56,56.4,58,58.5,59,61 --no-end`.
- [ ] **Step 3: Commit** — `feat(galvis-film): animatic act 05`.

---

### Task 7: Babak 06 Workspace

**Files:** Modify `compositions/06-workspace.html`, `shared/ui/workspace.js` (opsi `prefix` untuk id gradien wordmark; state per langkah dapat diubah setelah render via handle yang dikembalikan)

**Interfaces:**
- Produces: `renderWorkspace(host, state, { prefix }) → { setStep(i: number, status), setTyped(n: number), flashLayer(i: number, on: boolean), setInsight(visible: boolean) }`.

Blocking: bar 32: jendela tumbuh dari titik kiri-bawah (asal cabang Workspace) `scale` 0,05→1 pada wrapper, latar Cool Gray; bar 33: `products.workspace` + `workspace.sub` di kolom kiri; bar 34: prompt diketik (karakter per 25 ms); bar 34 ketukan 2 → bar 37: lima langkah berganti `running → done` di 70, 71, 72, 73, 74,5 s global; layer "Suitability Result" berkedip saat langkah 4 selesai; dither peta `resolve` 0,3→0,72 bar 35–36; permukaan suitability fade-in bar 36; kartu Insight masuk bar 37; kata `ASK`/`ANALYZE`/`VISUALIZE`/`UNDERSTAND` berganti di awal bar 34/35/36/37 (geser vertikal). Bar 38: `workspace.position` muncul di kolom kiri, jendela menciut ke titik.

- [ ] **Step 1:** Tambah handle + prefix di `workspace.js` (uji di `dev/ui-test` dengan `devrun ... check`).
- [ ] **Step 2:** Implement babak `GV.register('act06-workspace', build, 14)`.
- [ ] **Step 3: Verifikasi** — `check`; snapshot `--range 62:76 --frames 14`.
- [ ] **Step 4: Commit** — `feat(galvis-film): animatic act 06`.

---

### Task 8: Babak 07 Data Enrichment

**Files:** Modify `compositions/07-enrichment.html`

Blocking: bar 39: tag + `enrichment.sub`; bar 40: garis poligon Riau tergambar (stroke-dash) dengan isi dither tipis (brand, resolve 0); benang Teal turun dari atas ke titik di tepi poligon. Bar 41–42: sepuluh baris kartu profil masuk satu per satu tiap 0,4 s; bersamaan sel mosaik berganti dari dither ke jernih (resolve 0→1 per sel, berurutan), empat sel terakhir tetap mentah sampai bar 42 ketukan 3. Bar 43–44: kamera mundur — poligon dan kartu crossfade ke peta Asia Tenggara terang, ribuan titik Teal menyala (stagger ber-seed dari `SEA_POINTS`); rantai `Location → GALVIS Data Enrichment → Hundreds of Spatial Attributes → Decision-Ready Dataset` (copy baru `enrichment.flow`) muncul bertahap di bawah. Bar 45: `enrichment.position`.

- [ ] **Step 1:** Implement `GV.register('act07-enrichment', build, 14)`; per sel mosaik pakai kanvas sendiri agar resolve per sel bisa digambar ulang.
- [ ] **Step 2: Verifikasi** — `check`; snapshot `--range 76:90 --frames 14`.
- [ ] **Step 3: Commit** — `feat(galvis-film): animatic act 07`.

---

### Task 9: Babak 08 Enterprise

**Files:** Modify `compositions/08-enterprise.html`; `shared/copy.json` (`enterprise.position` sudah ada)

Arti beam dibalik sesuai spec ("dither = mentah"): **di belakang beam (kiri, sudah dilewati) = lapisan analisis jernih; di depan beam (kanan) = citra mentah ber-dither.** Beam menyapu kiri → kanan selama tiap sektor. Kedua kanvas selebar penuh; batasnya `clip-path: inset(...)` yang ditween (tanpa menggambar ulang dither).

| Sektor | Mentah (dither, kanan) | Analisis (jernih, kiri) |
|---|---|---|
| Plantation | `sentinel/riau-plantation.jpg` | `solution/AFS/desktop/precision.jpg` (crop bersih, ukur kotak UI dulu → `CLEAN_CROPS`) |
| Forestry | `sentinel/riau-plantation.jpg` | `solution/DMR/desktop/risk.jpg` (`cleanCrop`) |
| Mining | `sentinel/morowali-mining.jpg` | `sentinel/morowali-mining.jpg` + overlay tekanan lingkungan prosedural (gradien merah-kuning ber-seed di sekitar area industri) |
| Renewable Energy | `solution/ESRE/desktop/EnergyPotential-Desktop.jpg` (dither) | `solution/ESRE/desktop/SolarProperty-Desktop.jpg` (crop bersih) |

Blocking: bar 46: tag + `enterprise.sub`; bar 47 (**gelap sekejap**): latar navy, tujuh ubin `enterprise.systems` di kiri-kanan dicolok ke heksagon tengah dengan kabel cahaya bergantian; bar 48–52: empat sektor @ 2,25 s, tiap sektor: nama + nomor `NN / 04` masuk, beam menyapu 0,2→2,1 s, rantai: langkah 1 aktif di awal, langkah 2 saat beam di tengah, langkah 3 saat beam selesai; legenda (sesuai lapisan analisis) di sisi kiri yang jernih; 103,0–104,0 s: tiga `enterprise.flash` lewat cepat (0,33 s masing-masing) di atas citra sekilas `EBG/SiteSelection`, `EBG/Geomarketing`, `ESRE/Network` (crop bersih); bar 53: `enterprise.position`.

- [ ] **Step 1:** Ukur kotak UI `AFS/precision`, `ESRE/SolarProperty`, `ESRE/EnergyPotential`, `EBG/SiteSelection`, `EBG/Geomarketing` dan tambahkan ke `UI_BOXES`/`CLEAN_CROPS`; `tests/solution-crops.test.mjs` harus tetap PASS.
- [ ] **Step 2:** Implement `GV.register('act08-enterprise', build, 16)`; ganti panah teks `→` di rantai dengan chevron SVG (glyph tidak ada di subset font).
- [ ] **Step 3: Verifikasi** — `check`; snapshot `--range 90:106 --frames 32`; sisi kiri beam selalu jernih, kanan selalu mentah; legenda cocok dengan lapisan jernih.
- [ ] **Step 4: Commit** — `feat(galvis-film): animatic act 08`.

---

### Task 10: Babak 09 Reunification + 10 Final

**Files:** Modify `compositions/09-reunify.html`, `compositions/10-final.html`

Blocking:
- **09:** bar 54: latar terang → navy (tirai Bayer navy); tiga titik warna produk naik sepanjang `branchGeometry` (jalur dibalik) ke inti, tiba di 106,0/106,5/107,0 s (sinkron tiga nada naik); bar 55: diagram arsitektur bersih (GALVIS / CORE TECHNOLOGY / tiga produk) tahan; bar 56: diagram larut ke peta Asia Tenggara — node menyala stagger, `reunify.line1` 110,2 s, `reunify.line2` 110,8 s.
- **10:** bar 57 (sting): logo reverse masuk `scale` 0,96→1 + sapuan cahaya (gradien putih 35 % melintas kiri→kanan 0,8 s); `reveal.full` di bawah logo; bar 58: `final.chain` tiga frasa bergantian 0,6 s; bar 59: `final.tagline`; bar 60: `final.url` + `final.credits`; 119,2–120,0 s: semua memudar ke hitam.

- [ ] **Step 1:** Implement 09 (`GV.register('act09-reunify', build, 6)`).
- [ ] **Step 2:** Implement 10 (`GV.register('act10-final', build, 8)`).
- [ ] **Step 3: Verifikasi** — `check`; snapshot `--range 106:120 --frames 28`; frame 119,95 s hampir hitam.
- [ ] **Step 4: Commit** — `feat(galvis-film): animatic act 09-10`.

---

### Task 10b: Adegan 3D Three.js (babak 01 dan 04)

Ditambahkan atas permintaan user (2026-10-20) setelah render animatic pertama; spec §7 babak 1 dan 4 dan §11.

**Files:**
- Create: `shared/three/geo3d.js`, `shared/three/globe.js`, `shared/three/core-scene.js`, `shared/three/index.js`, `shared/gv3d.js` (bundle IIFE `GV3D`, di-commit), `scripts/build-globe.mjs`, `assets/geo/globe-sea.json`, `tests/geo3d.test.mjs`
- Modify: `package.json` (build kedua, devDependency `three@0.181.2`), `index.html` (muat `shared/gv3d.js`), `tests/bundle.test.mjs` (gv3d segar), `compositions/01-world.html`, `compositions/04-core.html`

**Interfaces:**
- `lonLatToVec3(lon, lat, r=1) → [x,y,z]` — sama dengan pemetaan UV `THREE.SphereGeometry` (lon 0 → +x, lon 90 → −z, kutub utara +y).
- `faceLongitude(lon) → rotY` — rotasi Y yang membuat bujur itu menghadap +z (kamera).
- `mountGlobe({ gl: HTMLCanvasElement (640×360), day, night }) → { scene, camera, globe, render(state) }`
- `mountCoreScene({ gl: HTMLCanvasElement (1920×1080) }) → { render(state), project(vec3) → [x,y,depth] }`

- [ ] **Step 1:** `tests/geo3d.test.mjs`: `lonLatToVec3(0,0)` ≈ [1,0,0]; `(90,0)` ≈ [0,0,−1]; `(0,90)` ≈ [0,1,0]; titik `lonLatToVec3(115,2)` yang diputar `faceLongitude(115)` punya z > 0,999. Jalankan → FAIL.
- [ ] **Step 2:** Implement `geo3d.js` → PASS. `scripts/build-globe.mjs` menulis `globe-sea.json` (`coast`: cincin lon/lat negara SEA dari Natural Earth 50m; `points`: 2500 titik darat seed 1, algoritma sama dengan `sea-points.json`).
- [ ] **Step 3:** Bundle `GV3D` (three dibundel lokal, tanpa CDN) + tes kesegaran.
- [ ] **Step 4:** Babak 01: globe siang/malam + atmosfer + garis fajar, dirender ke 640×360 lalu dither landing sel 3 terkunci layar; pantai dan sinyal tajam di kanvas overlay; blocking teks dan tirai tetap.
- [ ] **Step 5:** Babak 04: lorong heksagon 3D (bar 18 kamera menembus), cincin orbit miring dengan alas prisma, kabel 3D + paket cahaya, bar 26 kamera mundur; DOM logo, pertanyaan, visual mini, label tetap.
- [ ] **Step 6: Verifikasi** — `npm test`; `check`; snapshot babak 01 dan 04; tidak ada frame kosong (WebGL harus menggambar di render).
- [ ] **Step 7: Commit** — `feat(galvis-film): three.js globe and core chamber`.

---

### Task 11: Render animatic, cek sinkron, serahkan

**Files:**
- Create: `scripts/animatic.mjs`, `scripts/sync-check.mjs`, `checks/animatic.test.mjs` (di luar `tests/`, dijalankan lewat `npm run test:animatic` karena butuh hasil render), `renders/` (diabaikan git), `review/animatic-sheet.jpg`
- Modify: `.gitignore` (tetap abaikan `renders/`)

**Interfaces:**
- Produces: `renders/animatic-v1.mp4` (1920×1080, 30 fps, 120,0 s, AAC), `review/animatic-sheet.jpg` (kontak sheet tiap 2 s, 60 frame, label waktu).

- [ ] **Step 1: Tes yang gagal** — `checks/animatic.test.mjs` (gagal bila MP4 belum ada): ffprobe → durasi 120,0 ±0,05 s, 1920×1080, 30 fps, ada stream audio.
- [ ] **Step 2: `scripts/animatic.mjs`** — `npm run build`, lalu `HYPERFRAMES_RENDER_DETACHED=1 npx hyperframes render --quality draft --output renders/animatic-v1.mp4` di process group sendiri, tunggu file stabil, lalu `ffmpeg` kontak sheet.
- [ ] **Step 3: `scripts/sync-check.mjs`** — ekstrak audio (ffmpeg → PCM), cari onset di 24,0/56,0/112,0 ±0,05 s; ekstrak frame di t−1/30 dan t, hitung perubahan luminansi rata-rata; laporkan selisih waktu audio↔visual; gagal bila > 1 frame (33 ms).
- [ ] **Step 4: Jalankan** render, `npm run test:animatic`, `node scripts/sync-check.mjs` → PASS.
- [ ] **Step 5: Review** — lihat kontak sheet; nilai tiap babak dengan rubrik mg-styles-15 (motion craft, sound sync, concept); perbaiki yang < 6 (ambang animatic), catat di `review/ANIMATIC.md`.
- [ ] **Step 6: Commit dan push** — `feat(galvis-film): animatic v1`; MP4 tidak di-commit (di `renders/`), tetapi dipublikasikan ke user sebagai artifact halaman pemutar (video + kontak sheet).
- [ ] **Step 7: Serahkan ke user** — persetujuan animatic adalah gerbang ke Rencana 3 (animasi penuh).
