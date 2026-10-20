# GALVIS Launch Film — Animatic v1

Render: `renders/animatic-v1.mp4` (tidak di-commit; dibuat ulang dengan `node scripts/animatic.mjs`).
1920×1080, 30 fps, 120,0 s, kualitas draft, skor sementara (`audio/temp-score.m4a`, −14 LUFS).
Kontak sheet: `review/animatic-sheet.jpg`, satu frame tiap 2 s.

## Pemeriksaan

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Format | `npm run test:animatic` | 2/2 lulus: 120,0 s, 1920×1080, 30 fps, AAC |
| Sinkron gambar–suara | `node scripts/sync-check.mjs` | lulus di 24,0 s (+33 ms, satu frame), 56,0 s (0 ms), 112,0 s (0 ms) |
| Komposisi | `npx hyperframes check` | lulus; kontras AA lulus di semua waktu yang diperiksa |
| Unit | `npm test` | 86/86 lulus |

Render pertama gagal sinkron di 56,0 s: gambar diam dari 55,87 s sampai 56,37 s karena batang
cahaya masuk dengan ease-in. Sekarang ada ledakan cahaya dari logo tepat di frame 56,0 s.

## Rubrik per babak (ambang animatic: 6)

Dimensi dari rubrik mg-styles-15: motion craft, sound sync, concept. Nilai 1–10.

| Babak | Waktu | Motion | Sync | Concept | Catatan |
|---|---|---|---|---|---|
| 01 The Spatial World | 0:00–0:12 | 8 | 7 | 8 | Globe 3D Three.js: fajar menyapu Asia Tenggara, pantai, ribuan sinyal; bloom matahari ke act terang |
| 02 The Complexity | 0:12–0:24 | 6 | 7 | 7 | Tujuh pelat menumpuk lalu tersedot ke satu node; stop-down putih di ketukan terakhir |
| 03 GALVIS Reveal | 0:24–0:34 | 7 | 8 | 7 | Impact 24,0 s tepat; logo dirakit dari anatominya |
| 04 Core Technology | 0:34–0:52 | 8 | 7 | 8 | Ruang mesin 3D Three.js: lorong heksagon, orbit miring, paket di sepanjang kabel |
| 05 Three Products | 0:52–1:02 | 7 | 8 | 8 | Split 56,0 s kini terlihat; tiga nama di tiga nada sonic logo |
| 06 Workspace | 1:02–1:16 | 6 | 7 | 7 | Langkah agent selesai di 70/71/72/73/74,5 s bersama tick |
| 07 Data Enrichment | 1:16–1:30 | 6 | 6 | 7 | Poligon diperkaya sel demi sel; pull-back ke ribuan titik |
| 08 Enterprise | 1:30–1:46 | 7 | 6 | 7 | Beam: kiri jernih, kanan mentah; bar 53 diperbaiki (lihat bawah) |
| 09 Reunification | 1:46–1:52 | 7 | 7 | 7 | Tiga cahaya kembali ke inti, diagram larut ke peta |
| 10 Final Hero | 1:52–2:00 | 7 | 7 | 7 | Sting logo, tiga frasa, tagline, URL dan kredit, pudar ke hitam |

Satu nilai di bawah ambang ditemukan dan diperbaiki sebelum render ini: babak 08 bar 53 (concept 5,
satu kalimat di bingkai kosong). Kini kalimat posisi ditutup dengan barisan empat lapisan analisis
sektor.

## Untuk Rencana 3 (animasi penuh)

- Sync babak 07 dan 08 masih bergantung pada hi-hat; beri aksen per sel / per sapuan beam.
- Pelat babak 02 dan sel babak 07 butuh motion yang lebih kaya (moiré, rapi-ke-grid).
- Skor sementara diganti komposisi final dengan SFX per aksi (earshot).
- Render kualitas delivery, potongan per saluran (9:16, 1:1, 6 s/15 s/30 s).
