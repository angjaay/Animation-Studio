# GALVIS Launch Film — v4 (gambar v3 + suara final)

v4 = gambar v3 dengan soundtrack final dari Rencana 4: musik dikomposisi dengan kode dari rekaman instrumen asli
(University of Iowa MIS), SFX rekaman asli Mixkit, mix dan master −14 LUFS / −2,0 dBTP. earshot critique:
**launch-grade**, 23/23 metrik, 0 critical, 0 major. Laporan suara: `review/SOUND.md`. Render: `renders/film-v4.mp4`,
kontak sheet `review/film-v4-sheet.jpg`; `FILM=renders/film-v4.mp4 npm run test:film` 7/7.

---


Render: `renders/film-v3.mp4` (tidak di-commit; dibuat ulang dengan
`node scripts/render.mjs --quality looks --name film-v3`). 1920×1080, 30 fps, 120,0 s, skor sementara
(`audio/temp-score.m4a`). Kontak sheet: `review/film-v3-sheet.jpg`, satu frame tiap 2 s.

v3 adalah gambar v2 (yang dinilai juri putaran 2) ditambah perbaikan dari review kode akhir: frame babak 02
dan 10 tidak lagi bergantung pada urutan seek, debu dither babak 03 tidak ikut diskalakan kamera, babak 10
tahan terhadap aset dawn yang gagal dimuat, dan pendaratan pelat 4 kini diuji. Perbedaannya nyaris tak terlihat.

## Pemeriksaan

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Film | `FILM=renders/film-v3.mp4 npm run test:film` | 7/7: event di grid, batas match, tanpa beku, format, −14,0 LUFS / −1,0 dBTP, determinisme termasuk urutan seek |
| Per babak | `npm run qa:act -- <babak>` | sepuluh babak lulus |
| Komposisi | `npx hyperframes check` | lulus, tanpa peringatan kontras |
| Unit | `npm test` | 128/128 |

## Skor (mg-styles-15, 1–10)

| Babak | Motion v1 → v2 | Desain v1 → v2 | Wow v1 → v2 |
|---|---|---|---|
| 01 Spatial World | 7 → 7 | 7 → 7 | 7 → 8 |
| 02 Complexity | 6 → 7 | 7 → 7 | 6 → 7 |
| 03 GALVIS Reveal | 7 → 7 | 8 → 8 | 6 → 8 |
| 04 Core Technology | 7 → 7 | 7 → 7 | 7 → 7 |
| 05 Three Products | 6 → 7 | 7 → 7 | 6 → 6 |
| 06 Workspace | 6 → 7 | 7 → 7 | 6 → 7 |
| 07 Data Enrichment | 7 → 7 | 8 → 8 | 7 → 7 |
| 08 Enterprise | 7 → 7 | 7 → 7 | 7 → 7 |
| 09 Reunification | 7 → 7 | 7 → 7 | 7 → 7 |
| 10 Final Hero | 6 → 7 | 7 → 7 | 6 → 7 |

Film: style 7 → 7 · concept_wow 6 → 7 · motion 6 → 7 · desain 7 → 7 · finish 6 → 7 · sound_sync 7 → 7 ·
technical 7 → 7. Gerbang Rencana 3 lulus. Rincian: `review/jury-1.md`, `review/jury-2.md`.

Uji keterbacaan arsitektur (spec §10): lulus. Penonton tanpa konteks menyebut satu core dan tiga produk
(Workspace, Data Enrichment, Enterprise) dari frame babak 05 saja.

## Perbaikan putaran 1

Dilakukan:

1. Impact 24,0: kilat satu frame, dua gelombang kejut, sentakan kamera 5 %, burst warna brand.
2. Transisi navy ↔ terang: wipe dither radial dari titik asal (cakram, ujung cabang, core), bukan papan catur
   layar penuh.
3. Babak 06: panel agent terangkat 1,2× saat ASK–ANALYZE; langkah selesai berkilat teal 0,45 dan badge pop.
4. Hook babak 01 di frame 0; fajar jadi rona lembut; jaringan kota berkilat di ketukan.
5. Babak 02: tumpukan bernapas sampai vortex; pelat mendarat dengan kilat putih.
6. Babak 05: core dinamai GALVIS CORE TECHNOLOGY; mark terus tumbuh di bawah kartu teks.
7. Babak 10: sting tiga cahaya produk bertemu di logo (112,5); kontur dijauhkan dari teks; kaki navy untuk
   kredit.
8. Babak 08: Forestry memakai pita lebar peta risiko (upscale 3,2× → 1,7×, dikunci tes ≤ 2×); rekap 400×200.
9. Babak 04: dolly 8 %, tilt, dan spin yang makin cepat.
10. Babak 09: tiga komet berwarna produk; ruang muncul di atas frame terang.

Diganti atau dilewati:

- Zoom jendela babak 06 → angkat panel agent: menskalakan jendela berarti menskalakan peta dither yang
  terkunci layar (dilarang spec).
- Tracking-in wordmark babak 10 → sting konvergensi: wordmark satu SVG, hurufnya tidak terpisah.
- Dolly babak 04 12 % → 8 %: 12 % mendorong label Earth Observation ke tepi frame.
- Ukuran nama produk babak 05: sudah 28 px (salah baca dari kontak sheet kecil di putaran 1).
- Headroom true peak +0,3 dB: menahan skor sementara di −1,6 dBTP menggepengkan mix; master di Rencana 4.

## Langkah berikutnya

Persetujuan user atas film v3 adalah gerbang ke Rencana 4 (sound design, mix, master). Sisa yang bisa
diputuskan user: pembuka babak 05, hold nama babak 03, dan juri independen opsional (`review/jury-2.md`).
