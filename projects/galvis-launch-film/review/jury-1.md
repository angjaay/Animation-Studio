# GALVIS Launch Film — Juri putaran 1 (film v1)

Render: `renders/film-v1.mp4` (tidak di-commit; `node scripts/render.mjs --quality looks --name film-v1`).
Kontak sheet: `review/film-v1-sheet.jpg`. Penilai: agen pembuat sendiri, atas permintaan user ("Kamu kritik
hasilnya nanti"), dengan rubrik mg-styles-15 yang diadaptasi. Karena penilainya juga pembuatnya, titik buta
pembuat tetap ada. Uji keterbacaan arsitektur tetap dijalankan oleh subagent tanpa konteks (bagian akhir).

Bahan yang dilihat: kontak sheet per babak tiap 0,5 s, filmstrip 10 fps di 0,0–1,2 s (hook) dan 23,5–24,7 s
(impact), serta frame resolusi penuh di 0,5 · 18 · 29 · 44 · 62,5 · 68 · 82 · 97 · 110,5 · 117 s.

## Pemeriksaan spec

| Pemeriksaan | Hasil |
|---|---|
| Durasi, ukuran, fps, audio | 120,000 s · 1920×1080 · 30/1 · h264 + AAC ✔ |
| Loudness | −14,0 LUFS ✔ · LRA 7,5 LU |
| True peak | −1,0 dBTP: lulus, tapi tepat di batas (animatic −1,3) |
| Batas `match` | 12 · 34 · 52 · 62 · 76 · 90 · 106 semuanya ≤ 6 ✔ |
| Beku > 1 s di luar hold | tidak ada ✔ |
| Event di grid ⅛ ketukan | **7 gagal** di render; di snapshot semuanya lulus. Encode H.264 melembutkan perubahan kecil ±15 %: 14,5 pelat 5 mendarat (7,6) · 70/71/72/73/74,5 langkah agent selesai (7,0–7,3) · 104,5 rekap sektor (7,6). Ambang 8. |
| Kontras teks | peringatan: kredit 4,43:1 di 118,3 s (butuh 4,5:1), saat kredit masih memudar masuk |

`FILM=renders/film-v1.mp4 npm run test:film` → 5/6. Satu-satunya yang gagal adalah tes event di atas.

## Skor per babak

Skala: 5 = karya mahasiswa yang kompeten, 6 = setara template, 7 = profesional solid, 8 = agensi high-end.

| Babak | Motion | Desain/tipo | Wow | Alasan |
|---|---|---|---|---|
| 01 Spatial World | 7 | 7 | 7 | Globe fajar dari dither ke shaded memang indah. Tapi 0,0–0,7 s hitam total (tidak ada hook), dan pita terminator oranye terbaca seperti cincin artefak. |
| 02 Complexity | 6 | 7 | 6 | Pelat jatuh dan mendarat dengan bagus, dan vortex 22–23 s jadi wow-nya. Tapi 15,5–21,5 s tumpukan nyaris diam selama 6 s; hanya isi pelat yang bergeser. |
| 03 GALVIS Reveal | 7 | 8 | 6 | Swarm → logo → GAL/VIS rapi dan tipografinya kuat. Tapi impact 24,0 s lemah: debu abu-abu kecil di atas putih, padahal ini momen poros film. Logo lalu diam ±5 s (28,5–33,5). |
| 04 Core Technology | 7 | 7 | 7 | Mesin 3D terbaca di resolusi penuh, mini-visual modul hidup. Tapi enam aktivasi identik, satu per bar, kamera hampir tak bergerak, dan bingkai luar kosong. |
| 05 Three Products | 6 | 7 | 6 | Struktur lulus uji keterbacaan. Tapi 52–55 s cuma dua kartu teks di atas logo diam, nama produk ±14 px, cabang hanya garis tipis, dan core tak pernah dinamai GALVIS. |
| 06 Workspace | 6 | 7 | 6 | UI movee-fe kredibel dan terbaca. Tapi seluruh babak satu bidikan lebar terkunci, langkah agent terlalu halus (event gagal di render), dan dissolve 62,0–62,6 s membuat seluruh layar jadi papan catur Bayer 50 % yang terbaca seperti glitch. |
| 07 Data Enrichment | 7 | 8 | 7 | Babak terang terbaik: mosaik pengayaan dan kartu profil kuat. Tapi 84–89 s peta titik Indonesia diam, breadcrumb kecil di bawah, dan dissolve papan catur yang sama di 76,5. |
| 08 Enterprise | 7 | 7 | 7 | Sapuan beam per sektor energik. Tapi sisi jernih Forestry dan Plantation terlihat lembek (crop 691×706 px diregang ±2,4×), thumbnail rekap kecil, dan dissolve papan catur ketiga di 90,5. |
| 09 Reunification | 7 | 7 | 7 | Peta node "ONE CORE." bagus dan kordnya terasa. Tapi tiga cahaya yang kembali ke core cuma titik kecil, nyaris tak terbaca sebagai tiga produk. |
| 10 Final Hero | 6 | 7 | 6 | Frame akhir rapi dengan bumi ber-dither. Tapi lockup sudah diam sejak 112 s (tidak ada sting), garis kontur melintas di atas tagline, dan kredit kontrasnya kurang. |

## Skor film

| Dimensi | Skor | Alasan |
|---|---|---|
| style_fidelity | 7 | Satu keluarga brand: palet, dither, dan "logo adalah arsitektur" konsisten di sepuluh babak. |
| concept_wow | 6 | Idenya jelas, tapi tidak ada hook di 0,5 s pertama, momen hero 24,0 s antiklimaks, dan frame akhir tanpa sting. |
| motion_craft | 6 | Easing dan sambungan rapi (semua batas match), tapi ada beberapa dataran diam 3–6 s (02, 03, 05, 07) dan babak 06 tanpa gerak kamera. |
| design_typography | 7 | Hierarki dan grid kuat di babak terang. Label kecil di 05 dan 07 serta kredit terlalu lemah. |
| finish_texture | 6 | Dither dan cahaya bagus, tapi sumber 08 diregang dan lembek, dan transisi papan catur layar penuh muncul empat kali. |
| sound_sync | 7 | Gambar mendarat di ketukan dan grid ⅛, tapi tujuh aksen kecil hilang setelah encode. Musik tidak dinilai karena masih skor sementara. |
| technical | 7 | Spec lulus, tapi true peak tepat di batas, tujuh event gagal di render, dan ada satu peringatan kontras. |

Gerbang Rencana 3 (putaran 2): tiap babak motion dan desain ≥ 7, film ≥ 7 di semua dimensi kecuali
sound_sync. Yang masih di bawah gerbang: motion babak 02, 05, 06, 10; concept_wow, motion_craft,
finish_texture film.

## Isu kritis

1. **Tujuh event gagal di render** (gagal spec, `test:film`). Aksennya terlalu halus untuk bertahan setelah encode.
2. **Transisi papan catur layar penuh** di 62,5 · 76,5 · 90,5 · 106,0 s. Seluruh frame menjadi pola Bayer 50 %
   dengan sel 3 px. Di kompresi web pola ini akan moiré parah, dan sekarang sudah terbaca seperti glitch.
3. **Momen hero 24,0 s tidak menghantam.** Film ini dibangun menuju reveal, tapi impact-nya hanya debu
   abu-abu di atas putih.

## Perbaikan, urut menurut dampak

1. **Impact 24,0 s jadi momen hero (wow).** Saat 24,0 s, kilat putih penuh 1 frame, lalu cincin gelombang kejut
   teal dari node (radius 0 → 1400 px dalam 0,5 s `expo.out`, stroke 10 → 0 px), cincin kedua 0,08 s kemudian
   berwarna biru, dan sentakan kamera (scale 1,05 → 1 dalam 0,35 s). Partikel burst diganti ukuran 2–5 px dalam
   palet brand (navy/biru/teal/hijau), terlempar keluar 0,25 s sebelum ditarik balik menjadi swarm.
2. **Dissolve Bayer radial, bukan papan catur layar penuh.** Ambang tiap sel = jarak dari pusat cakram
   (dinormalisasi) − progres. Pola dither hanya muncul di pita ±160 px yang bergerak keluar dari cakram, jadi
   layar tidak pernah 50 % papan catur. Ini berlaku untuk keempat transisi navy ↔ terang.
3. **Babak 06 dapat koreografi kamera, dan langkah agent terbaca.** Punch-in ke panel agent saat ASK
   (scale 1,0 → 1,3 di sekitar panel, 0,8 s UI_EASE dari 64,0), tahan saat ANALYZE, tarik balik ke lebar di
   VISUALIZE (70,0) supaya peta berubah dan terlihat. Langkah selesai: kilat baris teal 0,22 → 0,45, badge
   cek pop scale 0,6 → 1 dalam 0,2 s. Ini sekaligus memperbaiki lima event yang gagal.
4. **Hook di frame pertama.** Babak 01 dimulai dengan pinggir globe ber-dither yang sudah 30 % menyala dan satu
   kilau matahari di frame 0, bukan 0,7 s hitam. Pita terminator oranye diredam menjadi kehangatan tipis
   (alpha ≤ 0,35) supaya tidak terbaca sebagai cincin.
5. **Dataran diam di 02 (15,5–21,5 s).** Tumpukan "bernapas": orbit pelan (rotationZ −42° → −36°, naik 30 px
   dalam 6 s), jarak antar-pelat melebar 0 → 18 px, moiré makin rapat. Kilat tepi pendaratan pelat diperkuat
   (cincin putih 1 + 5 px, glow teal 60 px), yang juga memperbaiki event 14,5.
6. **Babak 05 menamai core dan membesarkan produk.** Label core "GALVIS CORE TECHNOLOGY" (uji keterbacaan
   bingung apakah core itu GALVIS). Kartu "ONE INTELLIGENCE CORE." dan "THREE WAYS TO USE IT." mengiringi
   logo yang bergerak naik, bukan logo diam. Nama produk 14 → 22 px, stroke cabang 2 → 3 px.
7. **Sting untuk lockup akhir (babak 10).** Lockup dirakit di 112,0 s dari tiga warna cabang yang berkumpul
   (0,5 s), wordmark tracking-in 0,3 em → 0,12 em dalam 1 s expo. Garis kontur disembunyikan di balik pita navy
   lembut di y 230–560 supaya tidak melintasi teks. Kredit dibuat terbaca (≥ 4,5:1 sejak 118,0).
8. **Sumber gambar jernih babak 08.** Crop jernih yang diregang lebih dari 1,5× (Forestry `DMR/risk`,
   Plantation `AFS/precision`) diganti dengan crop atau sumber gisact.io yang lebih lebar, dan dikunci dengan
   tes: tidak ada crop strip jernih dengan lebar sumber < 1100 px. Thumbnail rekap 400 → 520 px lebar, dan
   kartu rekap masuk dengan kontras lebih (event 104,5).
9. **Babak 04 berkembang, bukan berulang.** Kamera dolly-in 12 % dan tilt 0 → 6° sepanjang 38–50 s, ditambah
   orbit modul yang makin cepat per aktivasi, supaya aktivasi keenam terasa sebagai klimaks, bukan salinan
   yang pertama.
10. **Tiga cahaya reunifikasi (babak 09) terbaca sebagai tiga produk.** Tiap cahaya jadi komet berwarna cabangnya
    (kepala 8 px, ekor 120 px), naik di jalur cabangnya sendiri.

Teknis kecil: turunkan plafon true peak 0,3 dB supaya m4a kembali ≤ −1,3 dBTP.

## Kekuatan yang dipertahankan

- Satu benang cahaya yang tak putus dan semua batas match (0,0–3,2 tingkat abu-abu).
- Globe fajar Three.js babak 01 dan mesin heksagon babak 04.
- Mosaik pengayaan dan kartu profil babak 07, serta tipografi judul di babak terang.
- Peta node "ONE CORE." babak 09 dan bumi ber-dither di frame akhir.

## Uji keterbacaan arsitektur (spec §10)

Subagent tanpa konteks GALVIS menerima hanya 20 frame babak 05 (52–62 s, tiap 0,5 s, tanpa suara).

Jawabannya (ringkas): satu "intelligence core" (logo heksagon, berlabel CORE TECHNOLOGY) yang turun lewat satu
garis dan terbelah tiga cabang yang memberi makan tiga produk setara: GALVIS Workspace, GALVIS Data
Enrichment, GALVIS Enterprise. Diagram yang ia gambar:

```
          [ Core Technology ]
                  |
      +-----------+-----------+
      |           |           |
  Workspace  Data Enrichment  Enterprise
```

Yang membingungkan baginya:
- core tidak bernama, sehingga tidak jelas apakah core itu GALVIS;
- "Enterprise" terdengar seperti tier harga, bukan produk;
- "CORE TECHNOLOGY" kecil dan pudar saat masuk;
- label hanya ±0,5 s dalam keadaan memudar.

**Lulus**: menyebut satu inti dan tiga produk turunan. Ambiguitas pertama dan ketiga masuk perbaikan 6.
