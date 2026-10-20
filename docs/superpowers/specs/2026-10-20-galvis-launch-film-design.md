# GALVIS Launch Film — Design Spec

- Tanggal: 2026-10-20
- Status: draft, menunggu review
- Brief asli: brief GALVIS launch video 2 menit (Workspace / Data Enrichment / Enterprise)
- Referensi: `gisact-website/docs/references/video-animation.md` (mg-styles-15, Motion Design
  Studio 600 Ideas, earshot). Nomor `#NNN` di dokumen ini adalah ID ide di *Motion Design
  Studio: 600 Ideas*.

## 1. Tujuan dan keberhasilan

Film launch sinematik 2:00 untuk **GALVIS — Geospatial Intelligence Virtual Assistant System**
yang membuat penonton paham arsitektur produk **tanpa narasi**:

```
GALVIS → CORE TECHNOLOGY → WORKSPACE · DATA ENRICHMENT · ENTERPRISE
```

Berhasil bila:

1. Penonton tanpa suara bisa menggambar ulang arsitektur di atas setelah sekali menonton.
2. Tiga produk tidak pernah terlihat sebagai produk terpisah: selalu tersambung ke satu core.
3. Terasa setara launch SaaS/AI infrastructure global, dan satu keluarga dengan website GALVIS
   (efek dither landing, brand book).
4. Setiap babak bisa dipotong menjadi klip mandiri.

### Penonton dan saluran

Satu master 16:9 untuk semua saluran: layar acara, website/YouTube, presentasi sales/investor,
lalu potongan pendek untuk sosial media.

### Syarat rilis

Film menampilkan visi penuh agent: satu prompt → GALVIS memilih data, menjalankan analisis
kesesuaian, dan merangkum. Di movee-fe saat ini agent dibatasi `MAX_STEPS = 1` dan alat analisis
ditolak (`skill_not_executable`). **Film hanya dipublikasikan setelah agent multi-langkah dan
analisis kesesuaian via agent live.** Pemilik: user.

## 2. Ide sentral: logo adalah arsitekturnya

Filosofi logo (brand book) dipetakan ke cerita:

| Anatomi logo | Makna (brand book) | Peran di film |
|---|---|---|
| Pelat lapisan hijau-teal | bumi, membaca kondisi wilayah | dunia spasial dan data (babak 1–2) |
| Heksagon navy | struktur, sistem terorganisasi | GALVIS dan Core Technology (babak 3–4) |
| Panah putih ke bawah | arah, keputusan yang bisa ditindaklanjuti | cabang tiga produk → keputusan (babak 5–8) |

Film adalah **satu perjalanan vertikal turun** mengikuti anatomi logo. Aturan:

- **Turun = makin dekat ke keputusan.** Satu-satunya gerak naik adalah reunifikasi (babak 9).
- **Satu benang cahaya yang tak pernah putus** (#400 logo-outro-thread): lahir dari bumi, masuk
  heksagon, menjadi ujung panah, terbelah tiga. Setiap produk selalu terlihat tersambung dari atas.
- **Dither = data mentah yang belum dipahami; GALVIS menjernihkannya** (bagian 4).
- **Gelap = di dalam GALVIS; terang = dunia nyata dan pengguna** (bagian 3, ritme latar).

## 3. Bahasa visual

### Palet (brand book; sama persis dengan token movee-fe `src/app/globals.css`)

| Token | Hex | Peran |
|---|---|---|
| Deep Navy | `#032750` | latar babak gelap (core); teks di babak terang |
| Bright Navy | `#024ABC` | cabang **Workspace** |
| Teal | `#1FAFA1` | cabang **Data Enrichment** |
| Nature Green | `#86C36A` | cabang **Enterprise** |
| Putih | `#FFFFFF` | inti, benang cahaya (panah logo) |
| Cool Gray | `#E4E8EF` | teks sekunder |
| Light Gray | `#F5F6F8` | latar babak terang, permukaan UI |

Workspace = Bright Navy adalah keputusan film ini (belum ada di logo system); sudah menjadi warna
aksen UI movee-fe.

### Ritme latar: terang dan gelap

Tidak semua babak gelap. Latar mengikuti makna: **gelap = di dalam GALVIS** (mesin, core),
**terang = dunia nyata dan pengguna** (bumi, data, produk yang dipakai orang). Brand book juga
menyarankan logo full color di atas putih.

| Babak | Latar | Alasan |
|---|---|---|
| 1 World | gelap → **terang** | hitam angkasa, lalu fajar pecah menjadi langit terang seperti hero landing |
| 2 Complexity | **terang** (Light Gray, seperti kertas peta) | dunia data nyata yang berantakan |
| 3 Reveal | **terang** (putih) | impact = kilat putih; logo full color di atas putih |
| 4 Core | **gelap** (Deep Navy) | kamera masuk ke dalam heksagon: mesin yang menyala |
| 5 Three Products | **gelap** | masih di dalam core; benang cahaya paling terbaca di gelap |
| 6 Workspace | **terang** (Cool Gray) | jendela UI terang melayang di ruang terang |
| 7 Data Enrichment | **terang** | peta solution bertema terang |
| 8 Enterprise | **terang** dengan citra; plugboard (bar 47) **gelap** sekejap | sistem organisasi dicolok ke core |
| 9 Reunification | terang → **gelap** | naik kembali masuk ke core |
| 10 Final Hero | **gelap** (Deep Navy, sesuai brief) | penutup |

Peralihan terang ↔ gelap memakai dissolve dither Bayer, atau masuk/keluar heksagon. Di babak
terang: teks Deep Navy; benang cahaya dan cabang digambar sebagai garis Bright Navy/Teal/Green
dengan glow tipis; Nature Green dipakai untuk garis dan bidang, tidak untuk teks (kontras rendah di
atas putih).

### Tipografi

- Headline: Plus Jakarta Sans Bold. Subjudul/label: Mulish Regular/SemiBold. Angka: JetBrains Mono.
- Pernyataan: #004 blur-to-baseline. Nama produk: #014 syllable-steps ("GAL·VIS").
- Maksimal satu kalimat di layar pada satu waktu. Teks, logo, dan UI tidak pernah di-dither.
- Copy layar berbahasa Inggris (sesuai brief), termasuk UI Workspace yang direkonstruksi.

### Tiga material

1. **Citra asli** — bumi, Sentinel-2, peta solution gisact.io (babak dunia, data, sektor).
2. **Pelat transparan** — lapisan data, seperti pelat di logo.
3. **Garis vektor bercahaya** — kontur, jaringan, batas wilayah. Babak Core sepenuhnya material 2–3.

## 4. Dither

### Karakter dither landing (diukur dari frame Figma `GALVIS Dither`, node 5915:9039)

Ordered dither (Bayer), kuantisasi **4 level per kanal RGB** (0/85/170/255, ±64 warna), sel 2 px
pada lebar 1344 px; rapat di area gelap/jenuh, terurai ke putih di area terang. Di Figma ini
adalah gambar ter-dither, bukan shader.

### Implementasi

Shader WebGL `dither.glsl` dengan parameter: matriks Bayer, jumlah level, ukuran sel, palet
(`landing` = RGB 4-level, `brand` = dipetakan ke Deep Navy / Bright Navy / Teal / Green / putih),
dan `resolve` 0→1 (dither → gambar jernih).

**Palet hybrid:** `landing` untuk babak bumi/fajar (1) dan final (10); `brand` untuk citra data,
peta solution, dan sektor. Di latar terang, palet `brand` memakai titik navy/teal/green di atas
putih; di latar gelap, titik terang di atas navy.

### Peta pemakaian

| Babak | Dither |
|---|---|
| 1 World | dibuka dengan gambar yang sama dengan hero landing (bumi fajar, palet landing) |
| 2 Complexity | makin banyak pelat → dither makin padat dan kacau |
| 3 Reveal | piksel dither merakit logo (#452 pixel-swarm-portrait); logo jadi **tajam** |
| 4–5 Core, produk | hampir bebas dither; hanya input mentah (tile Sentinel sebelum NDVI) |
| 6 Workspace | UI tajam; citra peta dither → resolve saat analisis selesai |
| 7 Data Enrichment | poligon kosong ber-dither tipis; peta solution masuk ber-dither → resolve |
| 8 Enterprise | tiap sektor dibuka ber-dither, jernih di bawah scan-beam (#558) |
| Transisi antarbabak | dissolve urutan matriks Bayer (#178 pixel-block-route) |
| 10 Final | bumi fajar ber-dither tipis di bawah logo tajam |

### Aturan teknis (kompresi)

- Ukuran sel di video: 3–4 px @1080p, 6–8 px @4K (2 px akan hancur oleh H.264/YouTube).
- Pola dikunci ke layar (screen-space), tidak ikut bergerak bersama kamera, supaya tidak berkedip.
- Master bitrate tinggi; QA dither di setiap export, termasuk setelah upload YouTube.

## 5. Bahasa suara

- Score dikomposisi dengan kode, **120 BPM** → 1 bar = 2 s, 2:00 = **60 bar**.
- **Sonic logo tiga nada**: nada dasar = Core; tiga nada di atasnya = Workspace, Data Enrichment,
  Enterprise; reunifikasi = ketiganya menjadi satu akor.
- **Riser → stop-down → impact hanya dua kali**: reveal GALVIS (0:24.0) dan pembelahan tiga produk
  (0:56.0). Momen lain ditopang musik.
- Suara mulai di frame pertama (sub-drone dari orbit), tidak ada cold open hening.
- Akhir: sting + ekor tonal 2–4 s, fade < 1 s.
- Master: −14 LUFS integrated, true peak ≤ −1 dBTP.

Acuan: earshot `docs/launch-video-sound.md`.

## 6. Struktur dan timing

Bar *n* dimulai pada detik (n−1)×2.

| # | Babak | Bar | Waktu | Musik |
|---|---|---|---|---|
| 1 | The Spatial World | 1–6 | 0:00–0:12 | sub-drone dari frame pertama, pad |
| 2 | The Complexity | 7–12 | 0:12–0:24 | pulse makin padat; riser bar 11–12; stop-down ketukan terakhir bar 12 |
| 3 | GALVIS Reveal | 13–17 | 0:24–0:34 | **impact #1 tepat 0:24.0**; nada dasar Core |
| 4 | Core Technology | 18–26 | 0:34–0:52 | groove utama, satu aksen per modul |
| 5 | Three Products | 27–31 | 0:52–1:02 | riser bar 27–28, stop-down, **impact #2 tepat 0:56.0**; tiga nada |
| 6 | Workspace | 32–38 | 1:02–1:16 | nada 1 sebagai motif |
| 7 | Data Enrichment | 39–45 | 1:16–1:30 | nada 2 sebagai motif |
| 8 | Enterprise | 46–53 | 1:30–1:46 | nada 3, energi tertinggi |
| 9 | Reunification | 54–56 | 1:46–1:52 | tiga nada naik → akor penuh |
| 10 | Final Hero | 57–60 | 1:52–2:00 | sting + ekor tonal |

Perubahan dari brief: Final Hero 4 s → 8 s (teks brief tidak terbaca dalam 4 s dan sting butuh
ekor), dibayar dari Workspace (−3 s), Data Enrichment (−1 s), Reunification (−1 s). Pembelahan
tiga produk maju ke 0:52 supaya jatuh di batas bar.

## 7. Babak demi babak

### 1 · The Spatial World (bar 1–6)

- Hitam → tepi bumi saat fajar (gambar hero landing, dither palet landing); cahaya fajar membuka
  frame menjadi terang. Orbit pelan di atas Asia Tenggara. Sumber: NASA Blue Marble / Black Marble.
- Kontur menggores medan (#476 noise-contour-etch); kota, jalan, vegetasi, air menyala lapis demi
  lapis; akhirnya ribuan titik sinyal seperti konstelasi (#450).
- Teks: `EVERY DECISION HAS A LOCATION.` (bar 3) → `EVERY LOCATION HOLDS INTELLIGENCE.` (bar 5).

### 2 · The Complexity (bar 7–12)

- Kamera menukik ke Indonesia (#594 micro-world-surface-dive).
- Data datang sebagai pelat transparan isometrik (#405, #598), satu jenis per pelat: citra satelit,
  raster, vektor, batas administrasi, variabel lingkungan, jaringan infrastruktur, grid demografi,
  DEM, keluaran analitik. Tumpukan makin rapat → moiré (#467), dither makin kacau.
- Teks: `MORE DATA DOESN'T ALWAYS MEAN MORE CLARITY.` (bar 8–9) → jeda →
  `INTELLIGENCE REQUIRES CONNECTION.` (bar 10–11).
- Bar 12: semua pelat tersedot ke satu node (#441 vortex-keyhole); stop-down di ketukan terakhir.

### 3 · GALVIS Reveal (bar 13–17)

- Bar 13 (impact): node pecah menjadi titik, piksel, kontur (#392 brand-dots-converge).
- Bar 14: logo dirakit menurut anatominya — dua pelat hijau-teal; heksagon dari modul grid (#383);
  panah putih dilipat dari satu bidang (#391); keyline bergema (#387). Logo tajam, tanpa dither.
- Bar 15: `GALVIS` (syllable-steps). Bar 16: `Geospatial Intelligence Virtual Assistant System`.
  Bar 17: `The Intelligence Layer for Spatial Decision-Making`.
- Tiga produk belum diungkap.

### 4 · Core Technology (bar 18–26)

Satu pertanyaan menjalankan mesin; enam modul bukan kartu fitur.

- Bar 18: kamera menembus heksagon (#547 portal-ring-match). Di dalam: `GALVIS` di atas, label
  `CORE TECHNOLOGY`, enam modul melingkari satu inti.
- Bar 19: pertanyaan diketik: *"Where are the highest-priority expansion areas with low
  environmental risk?"*
- Bar 20–25, satu modul per bar; pertanyaan berjalan sebagai paket cahaya (#214, #224):

| Bar | Modul | Visual mini | Label |
|---|---|---|---|
| 20 | AI Interaction Layer | kata-kata menjadi pita token (#221) | Natural Language → Spatial Intelligence |
| 21 | Geospatial Data Engine | pelat berantakan dirapikan ke satu grid standar | Multi-source Integration · Automated Data Pipeline |
| 22 | Earth Observation Engine | scan-beam mengubah tile Sentinel (dither) menjadi NDVI/NDWI/built-up (#558) | Earth Observation Intelligence |
| 23 | Spatial Analytics Engine | buffer, isokron, kontur, zonal bereaksi (#255) | Spatial Analytics |
| 24 | Machine Learning Engine | layer prediktor → model → permukaan probabilitas | Machine Learning & Predictive Intelligence |
| 25 | Decision Intelligence Engine | zona prioritas, skor bergulir (#242), rekomendasi | Data → Analysis → Insight → Decision |

- Bar 26: kamera mundur; enam modul sejajar mengelilingi inti (#599 orbital-frame-alignment):
  `GALVIS CORE TECHNOLOGY`.

### 5 · Three Products (bar 27–31) — momen arsitektur kunci

- Bar 27: kembali ke GALVIS yang melayang di tengah; `ONE INTELLIGENCE CORE.`
- Bar 28: `THREE WAYS TO USE IT.` (riser → hening sesaat).
- Bar 29 (impact): ujung panah memanjang menjadi benang cahaya ke bawah dan terbelah tiga dengan
  lengkung halus (#160 list-branch-expand). Bukan panah flowchart; partikel terus mengalir dari
  Core ke ketiga cabang.
- Bar 30: ujung cabang menjadi lockup logo-system, satu per ketukan dengan nadanya:
  `GALVIS WORKSPACE` (kiri, Bright Navy) · `GALVIS DATA ENRICHMENT` (tengah, Teal) ·
  `GALVIS ENTERPRISE` (kanan, Green).
- Bar 31: arsitektur lengkap ditahan dan terbaca:

```
                GALVIS
                   │
            CORE TECHNOLOGY
      ┌────────────┼────────────┐
  WORKSPACE   DATA ENRICHMENT  ENTERPRISE
```

### 6 · GALVIS Workspace (bar 32–38) — rekonstruksi UI movee-fe

- Bar 32: kamera memilih cabang kiri, cabang lain meredup; ujung cabang mekar menjadi jendela
  browser bertema terang; kamera keluar dari core yang gelap ke ruang terang Cool Gray tempat
  jendela melayang (#201 command-to-workspace).
- Bar 33: `GALVIS WORKSPACE` / `Geospatial Intelligence at Your Fingertips`.
- Isi jendela: UI movee-fe yang dirapikan (lihat bagian 8) — top bar navy, panel Layer, peta
  wilayah Indonesia, panel GALVIS Agent kanan bawah, dock Insight.
- Bar 34–37: prompt *"Analyze potential development areas within this region."* diketik di
  composer → `Plan · 5 steps`, kapsul langkah dicentang satu per satu sementara peta bereaksi:
  1) identify region (zoom), 2) activate datasets (layer baru berkedip di panel kiri), 3) run spatial
  analysis, 4) suitability result (permukaan dilukis; citra dither → resolve), 5) summary mengalir
  + chart di Insight. Di luar jendela, besar, satu per bar: `ASK` · `ANALYZE` · `VISUALIZE` ·
  `UNDERSTAND`.
- Bar 38: `Self-service Geospatial Intelligence`; jendela menciut kembali ke cabang (#173).

### 7 · GALVIS Data Enrichment (bar 39–45) — visual konsep + peta solution gisact.io

- Bar 39: kamera ke cabang tengah. `GALVIS DATA ENRICHMENT` / `Turn Location Into Intelligence`.
- Bar 40: satu poligon (garis tipis ber-dither) di atas peta terang yang pucat, hampir tanpa
  informasi.
- Bar 41–42: benang dari Core mengalirkan atribut ke poligon. Setiap atribut adalah satu peta
  solution yang masuk ber-dither, resolve sekejap, lalu terlipat menjadi satu baris profil
  (#235 generated-table-growth):

| Atribut | Peta solution (`gisact-website/public/illustration/solution/…/desktop/`) |
|---|---|
| Earth Observation | `ESC/biodiversity.png` (rate of change NDVI) |
| Terrain | `WRWS/WaterResource-Desktop.png` (elevasi, keberadaan air) |
| Infrastructure | `ESRE/Network-Desktop.png` |
| Accessibility | `EBG/Geomarketing-Desktop.png` (radius) |
| Land Use | `AFS/foodsecurity.png` (proyeksi tutupan lahan 2030) |
| Demographics | `EBG/UrbanPlanning-Desktop.png` (kepadatan penduduk) |
| Economic Activity | `EBG/SiteSelection-Desktop.png` (indeks potensi bisnis) |
| Climate | `HAQ/PublicRisk-Desktop.png` (urban heat island) |
| Risk Indicators | `DMR/risk.png` (risiko kebakaran hutan), `WRWS/Floodplain-Desktop.png` |

  Pemetaan file ↔ isi dicek ulang di tahap styleframe.
- Poligon polos berubah menjadi kartu profil spasial yang kaya.
- Bar 43–44: kamera mundur; ribuan lokasi di Indonesia menyala teal serentak (#145, #159) →
  `Location ↓ GALVIS Data Enrichment ↓ Hundreds of Spatial Attributes ↓ Decision-Ready Dataset`.
- Bar 45: `Geospatial Intelligence as Data`.
- Tanpa angka spesifik (jumlah lokasi/atribut) kecuali user memberi angka yang benar.

### 8 · GALVIS Enterprise (bar 46–53) — visual konsep

- Bar 46: kembali sekilas ke arsitektur, kamera ke cabang kanan. `GALVIS ENTERPRISE` /
  `Geospatial Intelligence Built Around Your Organization`.
- Bar 47: ubin sistem organisasi (organization databases, internal geospatial data, satellite feeds,
  APIs, dashboards, business systems, analytical models) dicolok ke heksagon Core dengan kabel
  cahaya (#208 integration-plugboard).
- Bar 48–52: satu strip citra yang terus bergeser; scan-beam (#558) berganti sektor; tiap sektor
  rantai tiga langkah sebagai overlay vektor, ±2,25 s per sektor unggulan:

| Sektor | Rantai | Visual |
|---|---|---|
| Plantation | Satellite imagery → Plantation health → Replanting priority | `AFS/precision.png` (crop yield) |
| Forestry | Forest monitoring → Disturbance detection → Conservation intelligence | `ESC/biodiversity.png` → `DMR/risk.png` |
| Mining | Operational area → Environmental pressure → Monitoring & risk | Sentinel-2 (tidak ada peta solution) |
| Renewable Energy | Terrain + Climate + Infrastructure → Suitability → Candidate sites | `ESRE/EnergyPotential-Desktop.png`, `ESRE/SolarProperty-Desktop.png` |

  Detik terakhir: tiga label sekilas — `Industrial & Logistics` (`EBG/SiteSelection`),
  `Real Estate / Land Bank` (`EBG/Geomarketing`), `Infrastructure` (`ESRE/Network`).
- Bar 53: `Custom Geospatial Intelligence Infrastructure`.

### 9 · Reunification (bar 54–56)

- Bar 54: satu-satunya gerak naik. Tiga ruangan produk terlipat menjadi badge (#060
  conclusion-foldback), naik sepanjang cabang → Core → GALVIS (reverse flow).
- Bar 55: arsitektur bersih ditahan; akor penuh.
- Bar 56: arsitektur larut menjadi peta Asia Tenggara dengan node intelijen aktif.
  `ONE CORE.` / `MULTIPLE WAYS TO TURN LOCATION INTO INTELLIGENCE.`

### 10 · Final Hero (bar 57–60)

- Bar 57: Deep Navy, kontur topografi bergerak pelan (#476), bumi fajar ber-dither tipis di bawah;
  logo disapu cahaya (#399); `GALVIS` / `Geospatial Intelligence Virtual Assistant System`.
- Bar 58: `FROM LOCATION` → `TO INTELLIGENCE` → `TO DECISION`.
- Bar 59: `SEE MORE. UNDERSTAND BETTER. DECIDE SMARTER.`
- Bar 60: `galvis.io`, ekor sting, fade ke hitam < 1 s.

## 8. Rekonstruksi UI

### Workspace (sumber: `N0iire/movee-fe`)

Layout nyata yang direkonstruksi dan disederhanakan (tema terang):

- Top bar 46 px Deep Navy dengan wordmark GALVIS (`src/components/MapNavbar.tsx`).
- Panel kiri 296 px: Layer + Proses (`src/components/platform/left/*`); layer baru berkedip biru muda.
- Peta MapLibre di tengah; toolbar mengambang bawah-tengah dengan tombol Galvis AI.
- Panel GALVIS Agent: kartu 500 px, radius 26 px, bayangan `0 18px 60px #03275024`; composer
  radius 18 px; header `Plan · N steps` dengan kapsul langkah, spinner, centang
  (`src/components/Agent/*`, acuan visual `docs/img/galvis-agent-be/f21-multi-langkah.png`).
- Dock Insight dengan chart (`src/components/platform/dock/insight/*`).
- Motion UI: 180 ms, `cubic-bezier(.2,0,0,1)`.
- Copy UI diterjemahkan ke bahasa Inggris untuk film.

### UI di atas peta solution

Peta tematik dari gisact.io dipakai sebagai lapisan raster. Elemen UI yang menempel di peta
(kartu legenda, label lokasi, chip) **direkonstruksi sebagai komponen vektor** bila versi bawaannya
kurang bagus atau perlu dianimasikan (legenda tumbuh, angka bergulir), dengan gaya yang sama
dengan UI Workspace. Bila direkonstruksi, area UI bawaan di raster di-crop atau ditutup.

## 9. Pipeline produksi

### Framework: HyperFrames

- Apache-2.0, tanpa biaya komersial. (Remotion butuh company license berbayar untuk perusahaan
  4+ orang.)
- Komposisi HTML + GSAP + WebGL/Three.js, render deterministik per frame; CLI `check`,
  `snapshot`, `render`; registry blok efek. Skill sudah terpasang di gisact-website `.claude/skills/`.

### Struktur proyek

```
projects/galvis-launch-film/
  compositions/01-world … 10-final/   # satu sub-komposisi per babak, bisa di-render sendiri
  shared/tokens.css                   # warna, font, radius, bayangan
  shared/dither.glsl                  # Bayer, level, sel, palet landing|brand, resolve
  shared/thread.js                    # benang cahaya dan percabangan
  shared/ui/                          # komponen rekonstruksi UI (Workspace, legenda peta)
  cues.json                           # sumber waktu tunggal: 60 bar, impact, nada, teks
  audio/                              # score (kode), kit SFX earshot, mix, master
  assets/                             # citra, peta solution, logo (lihat lisensi)
```

`cues.json` dibaca oleh gambar dan audio, jadi sinkron dijamin dari satu sumber.

### Aset dan lisensi

| Aset | Sumber | Lisensi |
|---|---|---|
| Bumi | NASA Blue Marble / Black Marble | public domain |
| Bumi fajar (hero landing) | aset internal GALVIS (Figma GISACT Website) | internal |
| Citra satelit | Sentinel-2 (Copernicus) | gratis, atribusi "Contains modified Copernicus Sentinel data" |
| DEM | Copernicus GLO-30 | gratis, atribusi |
| Batas wilayah | geoBoundaries | CC BY 4.0 (bukan GADM: non-komersial) |
| Peta solution | `gisact-website/public/illustration/solution/` | internal |
| Logo | `movee-fe/public/logo/*.svg` | internal |
| Font | Plus Jakarta Sans, Mulish, JetBrains Mono | OFL |
| Sampel instrumen | CC0 | CC0 |

### Audio

- Score: synth + sampel instrumen CC0 dengan kode, tempo map dari `cues.json`.
- SFX: bank earshot (`earshot kit`, `earshot sfx --apex` dikunci ke frame cue).
- Mix/master ke −14 LUFS, true peak ≤ −1 dBTP.
- QA: `earshot critique film.mp4`, `earshot timeline --video` untuk sinkron.

### Tahapan (masing-masing dengan persetujuan user)

1. **Styleframe** — 1 still per babak (10 still); mengunci look, dither, dan rekonstruksi UI.
2. **Animatic** — 2:00 gerak kasar + score sementara; mengunci timing.
3. **Animasi penuh** per babak; dua putaran review dengan rubrik juri mg-styles-15 (`rubric.md`).
4. **Sound design, mix, master**; QA earshot.
5. **Export dan potongan.**

### Deliverable

- Master 16:9 2:00, 3840×2160, 30 fps, H.264 bitrate tinggi; plus versi web 1920×1080.
- Potongan: 15 s (babak 5 + end card), 30 s (babak 3 + 5 + 10), tiga klip produk (babak 6, 7, 8
  masing-masing + end card).
- Di luar scope: versi vertikal 9:16 (butuh tata letak ulang), voiceover.

## 10. QA

- Per babak: contact sheet tiap 0,5 s dan frame kunci resolusi penuh (`hyperframes snapshot`).
- Rubrik juri mg-styles-15: style fidelity, concept/wow, motion craft, desain & tipografi,
  finishing, sound sync, teknis.
- Uji keterbacaan arsitektur: tunjukkan babak 5 tanpa suara ke orang yang belum tahu GALVIS.
- Uji kompresi dither pada export dan setelah upload YouTube.
- Audio: earshot critique dan timeline; loudness dan true peak sesuai target.

## 11. Keputusan yang sudah diambil

| Topik | Keputusan |
|---|---|
| Arah konsep | A — logo adalah arsitekturnya |
| Saluran | semua: master 16:9 + potongan |
| Audio | musik + SFX, tanpa voiceover |
| Gaya citra | hybrid: citra asli → grafis vektor di Core |
| UI Workspace | rekonstruksi bergaya dari movee-fe |
| Klaim agent | visi penuh; rilis setelah fitur live |
| DE & Enterprise | visual konsep, memakai peta solution gisact.io |
| UI di peta | direkonstruksi bila bawaan kurang bagus |
| Sektor | 4 unggulan + 3 sekilas |
| Musik | dikomposisi dengan kode, 120 BPM |
| Dither | ya; palet hybrid (landing di babak bumi/final, brand di babak data) |
| Latar | campuran: gelap hanya di core (4–5), plugboard, dan penutup (9–10); lainnya terang |
| Framework | HyperFrames |
| Repo | `angjaay/Animation-Studio`, proyek di `projects/galvis-launch-film/` |
