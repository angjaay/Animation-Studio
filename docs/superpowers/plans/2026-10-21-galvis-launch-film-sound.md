# GALVIS Launch Film — Rencana 4: Sound design, mix, master

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengganti skor sementara dengan soundtrack final: musik yang dikomposisi dengan kode dari rekaman instrumen
asli, SFX dari rekaman asli Mixkit di frame cue, mix dan master ke −14 LUFS / ≤ −1,5 dBTP, lalu film v4.

**Architecture:** Gambar tidak berubah. `cues.json` tetap sumber waktu tunggal: skrip mengekspor cue suara (format
real-sound) dari situ. Musik = sequencer Python (`audio/score/`) yang memainkan sampel University of Iowa MIS di grid
120 BPM dan menulis satu stem. SFX = desain JSON (`audio/design/*.json`) yang dirender oleh mixer real-sound (dibundel
di `audio/tools/`, MIT) bersama stem musik, dengan bus, master, QA, audit lisensi dan kredit. HyperFrames hanya memutar
satu `audio/soundtrack.m4a`.

**Tech Stack:** Python 3 (numpy, scipy, soundfile, pyloudnorm, librosa), earshot 0.3.0 (venv; `critique`, `timeline`,
`sheet`, `realness`, `measure`), skrip skill real-sound (mix/master/qa/audit/credits/analyze), ffmpeg, HyperFrames
0.8.181, Node 22 (`node --test`).

**Spec:** `docs/superpowers/specs/2026-10-20-galvis-launch-film-design.md` (§5 Bahasa suara, §9 Audio, §10 QA).
Acuan suara: earshot `docs/launch-video-sound.md`, skill `real-sound` (`references/design-format.md`,
`references/process.md`, `references/sound-design.md`).

## Global Constraints

- Keputusan user (2026-10-21): musik **dikomposisi dengan kode dari rekaman instrumen asli**; SFX **rekaman asli Mixkit**,
  bank earshot hanya untuk peran yang tidak punya rekaman yang cocok (dicatat sebagai ruling).
- Tempo 120 BPM, 1 bar = 2 s, 60 bar, nada dasar D. Sonic logo A4 / D5 / F♯5 tepat di 58,0 / 58,5 / 59,0 s;
  reunifikasi = akor penuh di 108,0 s; sting di 112,5 s (logo mendarat) dengan ekor tonal 2–4 s, fade < 1 s.
- Riser → stop-down → impact **hanya dua kali**: 24,0 s (reveal) dan 56,0 s (pembelahan produk). Impact tepat di frame
  (±1 frame = ±33 ms); stop-down 0,1–0,5 s sebelum impact.
- Suara mulai di frame pertama (≤ 0,13 s), tidak ada cold open hening; tidak ada lubang senyap > 0,2 s kecuali stop-down.
- Master: −14 LUFS integrated (±0,5), true peak ≤ −1,5 dBTP pada `audio/soundtrack.m4a` (render meng-encode ulang:
  v1–v3 menunjukkan +0,3 dB), ≤ −1 dBTP pada MP4 film. Limiter terakhir; mono di bawah 120 Hz.
- Lisensi yang boleh: University of Iowa MIS ("used for any projects, without restrictions"), Mixkit Sound Effects Free
  License, CC0. Dilarang NC/ND/SA/tidak terverifikasi. Rekaman sumber **tidak** di-commit (Mixkit melarang distribusi
  ulang file mentah): diunduh oleh `audio/fetch.py` dari manifest bersha256 ke `audio/assets/` (gitignored).
- Deterministik: render audio yang sama → byte yang sama (seed tetap, tanpa waktu sistem).
- Copy layar tidak berubah; gambar tidak berubah (kecuali `index.html` menunjuk ke soundtrack baru).
- Commit trailer sesi; tanpa identifier model; PR hanya bila diminta.

## Review Focus

1. **Impact meleset beberapa frame dari gambar** (sampel diletakkan di awal file, bukan di serangannya) → semua
   placement memakai `align` onset/peak dari mixer dan `audio/tests/test_sync.py` mengukur onset di 24,0 / 56,0 / 112,5 s
   pada soundtrack (Task 6).
2. **Klik atau letupan di sambungan sampel** (sampel dipotong di tengah peluruhan, fade terlalu pendek) → `qa.py` bagian
   edges bersih untuk setiap fragmen (Task 5) dan untuk musik (Task 4: tiap nada berakhir dengan fade ≥ 10 ms).
3. **Musik menutupi SFX penting atau sebaliknya** (masking 1–4 kHz) → `qa.py` masking bersih; bus musik di-duck 3 dB di
   bawah aksen UI babak 06 (Task 6).
4. **True peak naik lagi setelah encode** → loop plafon pada m4a dan uji m4a ≤ −1,5 dBTP; uji MP4 film ≤ −1 dBTP tetap
   di `test:film` (Task 6).
5. **Rekaman sumber berubah atau hilang di host** → `fetch.py` memverifikasi sha256 setiap file dan gagal keras; render
   tidak memakai file yang tidak lolos (Task 3).

---

## File Structure

| File | Tanggung jawab |
|---|---|
| `audio/requirements.txt`, `audio/setup.sh` | venv audio (numpy, scipy, soundfile, pyloudnorm, librosa; earshot dari git di commit `925ebe5`; torch CPU untuk `critique`) |
| `audio/tools/` | salinan skrip real-sound (mix, master, qa, audit, credits, licences, analyze) + `LICENSE` (MIT, Leon Lin) |
| `scripts/export-sound-cues.mjs` → `audio/cues.json` | cue suara format real-sound dari `cues.json` + event turunan (ketik per karakter, langkah, pendaratan, aktivasi, wipe, komet, sting) |
| `audio/sources.json` | manifest rekaman: id, url, halaman lisensi, lisensi, sha256, kredit, kegunaan |
| `audio/fetch.py` | unduh + verifikasi sha256 ke `audio/assets/<sumber>/` (gitignored) |
| `audio/score/compose.py` | fungsi murni: dari cue → daftar nada `[(t, instrumen, nada, velocity, dur)]` per bagian |
| `audio/score/render.py` | sampler: nada → `audio/out/music.wav` (48 kHz, 24-bit) dari sampel Iowa |
| `audio/sounddesign.json`, `audio/design/{transitions,impacts,ui,motion}.json` | desain SFX untuk mixer: samples, pools, rules di cue, bus, master |
| `audio/build.py` | satu perintah: score → mix (trace) → master → m4a (loop plafon) → laporan |
| `audio/tests/` | unittest Python: komposisi, render musik, manifest, sync, loudness |
| `tests/sound-cues.test.mjs` | uji ekspor cue suara |
| `audio/CREDITS.md` | kredit setiap rekaman yang terdengar (dari `credits.py`) |
| `review/SOUND.md` | laporan suara: earshot critique sebelum/sesudah, QA, keputusan |

`audio/score.py` dan `audio/temp-score.m4a` (skor sementara) dihapus di Task 6 setelah `index.html` pindah ke
`audio/soundtrack.m4a`.

---

### Task 1: Perkakas audio

**Files:** Create `audio/requirements.txt`, `audio/setup.sh`, `audio/tools/*` (salinan), `audio/tools/LICENSE`,
`audio/tests/test_tools.py`; Modify `package.json` (skrip `audio:setup`, `audio:build`, `audio:test`), `.gitignore`
(`audio/.venv/`, `audio/assets/`, `audio/out/`).

**Interfaces:**
- Produces: `audio/.venv/bin/python` dengan earshot; `audio/tools/mix.py`, `master.py`, `qa.py`, `audit.py`,
  `credits.py`, `licences.py`, `analyze.py` tidak diubah dari earshot `925ebe5` kecuali baris impor relatif.

- [ ] **Step 1:** Tulis `audio/tests/test_tools.py::test_mixer_places_a_sample_on_its_cue_frame`: fixture uji (bukan
  konten film) — WAV 1 s berisi satu klik di 0,2 s, cue `{fps:30,total:60,events:[{f:30,kind:"hit"}]}`, desain satu rule
  `align: onset`; render `mix.py --no-master`; assert onset terukur di 1,000 s ± 1 ms.
- [ ] **Step 2:** Jalankan `audio/.venv/bin/python -m unittest audio/tests/test_tools.py` → FAIL (mix.py belum ada).
- [ ] **Step 3:** `audio/setup.sh` membuat venv dan memasang `requirements.txt`; salin skrip, tambahkan LICENSE.
- [ ] **Step 4:** Uji → PASS. `npm test` tetap hijau.
- [ ] **Step 5: Commit** — `build(galvis-film): audio toolchain (real-sound mixer, earshot)`.

### Task 2: Ekspor cue suara

**Files:** Create `scripts/export-sound-cues.mjs`, `tests/sound-cues.test.mjs`; Modify `shared/cues.js` bila perlu
konstanta bersama (mis. jeda ketik 0,025 s yang sekarang ada di babak 06).

**Interfaces:**
- Consumes: `CUES` (`shared/cues.js`), `GV.COPY['workspace.prompt']`.
- Produces: `audio/cues.json` = `{fps:30,total:3600,events:[{f, kind, id, weight?, pan?}]}`; kind ∈ `impact`, `riser.end`,
  `stopdown`, `land`, `whoosh`, `wipe`, `key`, `step`, `ping`, `pop`, `bell`, `comet`, `sting`, `section`.

- [ ] **Step 1:** Uji (`node --test tests/sound-cues.test.mjs`):
  - setiap event `cues.json` muncul sekali dengan `f = round(t·30)` dan id stabil `act:thing:n`;
  - impact hanya di 24,0 dan 56,0 s (`f` 720 dan 1680), masing-masing dengan `riser.end` di frame yang sama dan `stopdown`
    0,25 s sebelumnya;
  - tepat satu `key` per karakter prompt babak 06, dengan jeda 0,025 s dari 66,0 s (frame pecahan diperbolehkan);
  - `bell` di 58,0 / 58,5 / 59,0 s dengan `pitch` A4 / D5 / F♯5; `sting` di 112,5 s;
  - `wipe` di 62,0 / 76,0 / 90,0 / 106,0 s dengan `pan` dari titik asal wipe (x/960 − 1).
- [ ] **Step 2:** FAIL → **Step 3:** implementasi (ekspor juga ke `npm run audio:cues`) → **Step 4:** PASS.
- [ ] **Step 5: Commit** — `feat(galvis-film): sound cues from the picture's timing`.

### Task 3: Sumber rekaman dan lisensi

**Files:** Create `audio/sources.json`, `audio/fetch.py`, `audio/tests/test_sources.py`, `review/audio-sourcing.md`.

**Interfaces:**
- Produces: `audio/assets/iowa/<instrumen>/<nada>.flac` (dipotong dari serangan − 5 ms, 48 kHz) dan
  `audio/assets/mixkit/<id>.wav`; entri manifest `{id, source, url, page, licence, sha256, credit, use}`.

Kebutuhan minimum (isi manifest, bukan daftar tertutup):
- Iowa MIS: piano (pp/mf, D2–D6), cello arco + pizz (D2–A4), double bass arco (D1–A2), violin arco (D4–A5), vibraphone
  sustain (D4–A5), crotales (A5–F♯6), bells/tubular (A4, D5, F♯5), gong/tam-tam, cymbal roll + crash, bass drum.
- Mixkit: whoosh pendek dan panjang (4–6 kandidat), riser sinematik 2–4 s (2), impact sinematik dengan sub (3), thud
  lembut untuk pendaratan pelat (3), klik UI dan ketikan keyboard (multi-take), notifikasi lembut tonal (2), swoosh naik
  untuk komet (2), shimmer/sparkle untuk sting (2).

- [ ] **Step 1:** Uji `test_sources.py`: setiap entri punya lisensi yang diizinkan (`licences.classify` → allowed),
  `sha256` 64 heksa, kredit tidak kosong, `use` tidak kosong; `fetch.py --verify` gagal bila satu file berubah (fixture
  sha salah).
- [ ] **Step 2:** FAIL → **Step 3:** isi manifest dari halaman sumber (lisensi dibaca per item untuk Mixkit),
  `fetch.py` (unduh berurutan, jeda 1 s, verifikasi sha, konversi AIFF → FLAC terpotong).
- [ ] **Step 4:** Tiap file yang dipakai lolos `earshot realness` "real or pro-produced" pada potongan yang dipakai;
  `analyze.py` + `earshot match` untuk setiap kebutuhan, hasil dan pilihan per kebutuhan di `review/audio-sourcing.md`.
  `audit.py` exit 0.
- [ ] **Step 5: Commit** — `feat(galvis-film): recordings manifest (Iowa MIS, Mixkit) with licence audit`.

### Task 4: Skor dari kode

**Files:** Create `audio/score/compose.py`, `audio/score/render.py`, `audio/tests/test_score_v2.py`.

**Interfaces:**
- Consumes: `audio/cues.json`, `cues.json` (bar, babak), `audio/assets/iowa/`.
- Produces: `compose(cues) -> list[Note]` dengan `Note(t, inst, pitch, vel, dur)`; `render(notes) -> np.ndarray` stereo
  48 kHz; `audio/out/music.wav`.

Bentuk musik (dari spec §5–7, kunci D): bar 1–6 drone cello/bass + piano pp (orbit, mulai di 0,0 s); 7–11 pulsa
piano bertambah lapis seiring pelat; 12 stop-down; 12–17 reveal: impact (gong + bass drum + kontrabas) lalu motif
piano; 17–26 mesin core: ostinato pizz cello + vibraphone per aktivasi (nada naik per modul); 27–28 build ke 56,0;
29–30 sonic logo bells A4/D5/F♯5; 31–53 tiga dunia produk (Workspace: piano + vibraphone ringan; Data Enrichment:
pizz + crotales berkilau per baris; Enterprise: string penuh + bass drum per sektor); 54–56 reunifikasi: akor D–F♯–A
penuh di 108,0; 57–60 sting di 112,5 dan ekor 2–4 s.

- [ ] **Step 1:** Uji `compose`: tempo (onset nada di kelipatan 0,125 s), sonic logo (tiga nada bells dengan pitch dan
  waktu di atas), akor penuh di 108,0 (D, F♯, A hadir), tidak ada nada antara 23,75–24,0 dan 55,75–56,0 (stop-down),
  nada pertama di t = 0, nada terakhir ≤ 116,5 s.
- [ ] **Step 2:** Uji `render`: deterministik (dua render → hash sama), tiap nada berakhir dengan fade ≥ 10 ms, sampel
  hanya digeser ≤ ±2 semitone, level −20 ± 3 LUFS sebelum mix.
- [ ] **Step 3:** FAIL → implementasi → PASS. `earshot realness audio/out/music.wav` → "real or pro-produced";
  `earshot timeline audio/out/music.wav --cues audio/cues.json` dibaca dan dicatat.
- [ ] **Step 4: Commit** — `feat(galvis-film): score composed in code from Iowa MIS recordings`.

### Task 5: Desain SFX

**Files:** Create `audio/sounddesign.json`, `audio/design/transitions.json`, `impacts.json`, `ui.json`, `motion.json`.

Aturan (prioritas, bukan suara di setiap cut — playbook §4, §8):
- **impacts**: riser (align end) → stop-down → impact (align onset) di 24,0 dan 56,0; sting 112,5 = impact lembut +
  shimmer (ekor ditangani musik).
- **transitions**: whoosh di empat wipe radial (apex di 50 % wipe), pan dari titik asal; whoosh pendek di potongan 12,0
  dan 34,0 (match), tanpa suara di cut 24,0 selain impact.
- **ui** (babak 06): satu ketukan per karakter (multi-take, jitter ±1,5 dB), notifikasi lembut di tiap langkah selesai
  (70–74,5), klik di aktivasi panel.
- **motion**: thud lembut tiap pendaratan pelat (babak 02), ping tonal per aktivasi modul (babak 04 — atau dilayani
  vibraphone skor; pilih satu, catat), pop per baris profil (babak 07), swoosh naik per komet (babak 09).

- [ ] **Step 1:** Per fragmen: `mix.py --only <kategori>` (solo), `qa.py --only <kategori>` bersih (edges, masking,
  harshness), `earshot timeline` solo dengan `audio/cues.json`: tiap aturan berbunyi di frame-nya.
- [ ] **Step 2:** Level: UI 10–15 dB di bawah puncak musik; impact jadi puncak; whoosh tidak menutupi bell.
- [ ] **Step 3: Commit** per fragmen — `feat(galvis-film): sound design — <kategori>`.

### Task 6: Integrasi, master, dan sambungan ke film

**Files:** Create `audio/build.py`, `audio/tests/test_soundtrack.py`, `audio/tests/test_sync.py`; Modify `index.html`
(audio → `audio/soundtrack.m4a`), `package.json`; Delete `audio/score.py`, `audio/temp-score.m4a`,
`audio/test_score.py` (skor sementara), README audio.

- [ ] **Step 1:** Uji (`test_soundtrack.py`, `test_sync.py`) ditulis dulu dan FAIL:
  - m4a: −14 ± 0,5 LUFS, true peak ≤ −1,5 dBTP, durasi 120,0 s ± 1 frame, suara pertama ≤ 0,13 s, tanpa senyap > 0,2 s
    di luar stop-down, akhir: level 3 s terakhir sebelum fade ≥ −3 LU dari integrated, fade ≤ 1 s;
  - sync: onset terukur pada soundtrack di 24,0 / 56,0 / 112,5 s dalam ±1 frame; bell di 58,0 / 58,5 / 59,0 s dalam ±1
    frame dan pitch A4 / D5 / F♯5 (±30 cent);
  - `index.html` memutar `audio/soundtrack.m4a` dan tidak ada lagi rujukan `temp-score`;
  - dari baseline earshot film v3 (skor sementara: "needs work", realness 0,23 critical): lebar stereo side −15..−4 dB
    di bawah mid (v3: −33 dB, nyaris mono), 3 s terkeras ≤ 4,0 LU di atas integrated (v3: 4,7 LU di 59,5 s), momen akhir
    ≥ −3,7 LU dari integrated (v3: −4,7 LU; akhir di sting 112,5, bukan memudar), penutup 10 % terakhir ≤ +1,2 LU.
- [ ] **Step 2:** `audio/build.py`: compose → render musik → `mix.py --trace` → master (`master.py`, −14 LUFS) → AAC
  192k dengan loop plafon sampai m4a ≤ −1,5 dBTP → `qa.py` → `credits.py` → `audio/CREDITS.md`. Bus musik di-duck 3 dB
  di bawah klik/ketikan babak 06 (auto ride di garis bar).
- [ ] **Step 3:** PASS; `npm test` dan `npm run audio:test` hijau; `npx hyperframes check` lulus.
- [ ] **Step 4: Commit** — `feat(galvis-film): soundtrack — mix and master`.

### Task 7: Film v4 dan QA dengar

**Files:** Create `review/SOUND.md`, `review/film-v4-sheet.jpg`, `review/sound-sheet.png`.

- [ ] **Step 1:** `node scripts/render.mjs --quality looks --name film-v4`; `FILM=renders/film-v4.mp4 npm run test:film` →
  PASS (termasuk ≤ −1 dBTP dan determinisme).
- [ ] **Step 2:** `earshot critique renders/film-v4.mp4` (lengkap, bukan `--fast`): tidak ada baris critical/major yang
  terbuka; verdict "close" atau "launch-grade". Bandingkan dengan baseline v3 (skor sementara) di `review/SOUND.md`.
- [ ] **Step 3:** `earshot timeline … --video` dan `earshot sheet` → `review/sound-sheet.png`; `earshot realness` per
  stem (music, sfx). Perbaiki setiap critical/major (pola Task 14 Rencana 3: tes dulu, satu putaran, ruling untuk yang
  dilewati), render ulang bila ada perubahan.
- [ ] **Step 4:** Juri suara: dimensi `sound_sync` mg-styles-15 (musikalitas, sound design, sinkron, mix/master) ≥ 7,
  dicatat di `review/SOUND.md` dengan skor film lainnya tetap.
- [ ] **Step 5:** Pratinjau 720p + kontak sheet ke halaman pemutar (versi baru, tautan sama); `review/FILM.md` ditambah
  bagian suara; commit dan push `feat(galvis-film): film v4 with final sound`; serahkan ke user. Persetujuan user =
  gerbang ke Rencana 5 (export dan potongan).
