# GALVIS Launch Film — Juri putaran 2 (film v2)

Render: `renders/film-v2.mp4` (tidak di-commit; `node scripts/render.mjs --quality looks --name film-v2`).
Kontak sheet: `review/film-v2-sheet.jpg`. Penilai: agen pembuat (atas permintaan user, sama seperti putaran 1),
dengan rubrik mg-styles-15 yang diadaptasi dan `review/jury-1.md` sebagai putaran sebelumnya. Karena pembuat
menilai karyanya sendiri, skor di bawah sebaiknya dibaca sebagai batas atas.

Bahan: kontak sheet per babak tiap 0,5 s dan frame resolusi penuh di 0,0 · 21 · 24,1 · 49 · 54 · 67,5 · 90,5 ·
107,3 · 112,4 · 118,6 s.

## Pemeriksaan spec

`FILM=renders/film-v2.mp4 npm run test:film` → **6/6 lulus**.

| Pemeriksaan | Hasil |
|---|---|
| Durasi, ukuran, fps, audio | 120,0 s · 1920×1080 · 30 fps · AAC ✔ |
| Loudness, true peak | −14,0 LUFS ✔ · −1,0 dBTP (lulus, masih tepat di batas; lihat catatan) |
| Event di grid ⅛ ketukan | semua lulus di render, termasuk tujuh yang gagal di v1 |
| Batas `match`, beku > 1 s | lulus |
| Determinisme | snapshot ganda identik byte per byte ✔ |
| `hyperframes check` | lulus, tanpa peringatan kontras |

## Skor per babak (putaran 1 → 2)

| Babak | Motion | Desain/tipo | Wow | Yang berubah |
|---|---|---|---|---|
| 01 Spatial World | 7 → 7 | 7 → 7 | 7 → 8 | Frame 0 sudah pinggir globe bercahaya; fajar tak lagi berupa cincin; kota menyala di ketukan. |
| 02 Complexity | 6 → 7 | 7 → 7 | 6 → 7 | Tumpukan bernapas 15,5–22 s; tiap pelat mendarat dengan kilat. |
| 03 GALVIS Reveal | 7 → 7 | 8 → 8 | 6 → 8 | Impact 24,0: dua gelombang kejut, sentakan kamera, burst warna brand. Hold di bawah nama masih tenang (push 3,5 %). |
| 04 Core Technology | 7 → 7 | 7 → 7 | 7 → 7 | Dolly 8 %, tilt, dan spin yang makin cepat: aktivasi keenam terasa klimaks. |
| 05 Three Products | 6 → 7 | 7 → 7 | 6 → 6 | Core bernama GALVIS CORE TECHNOLOGY; mark terus membesar di bawah kartu teks. Babak masih paling sederhana. |
| 06 Workspace | 6 → 7 | 7 → 7 | 6 → 7 | Wipe radial dari cakram; panel agent terangkat saat ASK–ANALYZE; langkah selesai berkilat jelas. |
| 07 Data Enrichment | 7 → 7 | 8 → 8 | 7 → 7 | Wipe radial; judul mendarat di ketukan. |
| 08 Enterprise | 7 → 7 | 7 → 7 | 7 → 7 | Forestry tajam (upscale 1,7×, dikunci tes); rekap 400×200. |
| 09 Reunification | 7 → 7 | 7 → 7 | 7 → 7 | Tiga komet berwarna produk kembali ke core; ruang muncul di atas frame terang. |
| 10 Final Hero | 6 → 7 | 7 → 7 | 6 → 7 | Sting: tiga cahaya produk bertemu di logo pada 112,5; kontur tak lagi melintasi teks; kredit terbaca. |

## Skor film (putaran 1 → 2)

| Dimensi | Skor | Alasan |
|---|---|---|
| style_fidelity | 7 → 7 | Satu keluarga brand; wipe dither radial kini terasa sebagai bahasa brand, bukan glitch. |
| concept_wow | 6 → 7 | Hook di frame 0, impact 24,0 menghantam, dan frame akhir punya sting yang menutup cerita "satu core". |
| motion_craft | 6 → 7 | Dataran diam di 02 dan 06 hidup; tidak ada beku > 1 s. Hold 03 dan pembuka 05 masih paling tenang. |
| design_typography | 7 → 7 | Baris di bawah nama 03 lebih besar; core dinamai; kontur bebas dari teks. |
| finish_texture | 6 → 7 | Papan catur layar penuh hilang; sisi jernih 08 tajam. |
| sound_sync | 7 → 7 | Semua event lulus di render. Musik tidak dinilai (skor sementara, Rencana 4). |
| technical | 7 → 7 | Semua uji lulus, determinisme terbukti. True peak masih tepat −1,0 dBTP. |

**Gerbang Rencana 3: lulus.** Tiap babak motion dan desain ≥ 7; film ≥ 7 di semua dimensi selain sound_sync.
Tidak ada film v3: putaran perbaikan 2 tidak diperlukan.

## Sisa, untuk keputusan user

1. **Pembuka babak 05 (52–55 s)** masih dua kartu teks di atas logo yang tumbuh pelan; babak ini paling
   sederhana di film (wow 6).
2. **Hold nama di babak 03 (28,5–33,5 s)** hanya push 3,5 %; terbaca tenang, bisa dianggap disengaja.
3. **True peak −1,0 dBTP** tepat di batas: render meng-encode ulang skor (−1,3 → −1,0). Menahan skor sementara
   lebih rendah membuat mix gepeng; diselesaikan di master Rencana 4.
4. **Penilaian oleh pembuat sendiri.** Bila ingin kepastian, satu juri subagent tanpa konteks bisa dijalankan
   atas film v2 sebelum Rencana 4.
