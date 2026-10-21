# GALVIS Launch Film — Suara final (Rencana 4)

Film: `renders/film-v4.mp4` (tidak di-commit; `node scripts/render.mjs --quality looks --name film-v4`), audio
`audio/soundtrack.m4a` dari `audio/build.py`. Lembar dengar: `review/sound-sheet.png` (earshot sheet).

## Cara suaranya dibuat

- **Musik**: dikomposisi dengan kode (`audio/score/`), dimainkan dari rekaman instrumen asli University of Iowa MIS
  (piano, cello, kontrabas, biola, vibraphone, crotales, lonceng, gong, simbal): 82 rekaman. Grid 120 BPM, kunci D.
- **SFX**: rekaman asli Mixkit (riser, impact dengan sub, whoosh, ketikan, klik, thud, swoosh): 15 rekaman,
  ditempatkan di frame cue oleh mixer real-sound (`audio/design/*.json`).
- **Cue**: `audio/cues.json` diekspor dari waktu gambar (`scripts/export-sound-cues.mjs`), jadi suara dan gambar
  berbagi satu sumber waktu.
- **Lisensi**: 97 rekaman dipakai, semua lolos audit (Iowa MIS tanpa batasan; Mixkit Free License). Rekaman mentah
  tidak masuk repo; `audio/fetch.py` mengunduh dan memverifikasi sha256-nya. Kredit: `audio/CREDITS.md`.

## earshot critique (7 film launch profesional sebagai acuan)

| | v3 (skor sementara) | v4 (suara final) |
|---|---|---|
| Verdict | needs work | **launch-grade** |
| Metrik dalam rentang | 18 / 23 | **23 / 23** |
| Critical / major | 1 / 2 | **0 / 0** |
| Realness (p_real) | 0,23 | **0,95** |
| Loudness / true peak | −14,0 LUFS / −0,9 dBTP | −14,0 LUFS / −1,6 dBTP |
| 3 s terkeras di atas integrated | 4,7 LU | 2,8 LU |
| Momen akhir | −4,7 LU | +2,6 LU |
| Lebar stereo (side vs mid) | −33,1 dB | −6,3 dB |
| Kepadatan onset | 3,8 /s (sintetis) | 2,88 /s |
| Event visual dengan onset ±100 ms | 81 % | 74 % |

Sinkron (`scripts/sync-check.mjs`): impact 24,0 s dan 56,0 s +10 ms, sting 112,5 s 0 ms. Sonic logo A4 / D5 / F♯5
di 58,0 / 58,5 / 59,0 s (vibraphone; shimmer oktaf: lonceng A5 di atas A4, crotales D6 / F♯6), akor penuh di
108,0 s. QA `qa.py` mencatat "clicks: warn" di 48,5015 s dan 110,0015 s: itu serangan mallet vibraphone A5 sendiri
(transien rekaman Iowa), bukan potongan atau cacat edit.

## Juri suara (mg-styles-15, `sound_sync`)

**7 → 8.** Riser → stop-down → impact hanya dua kali dan tepat di frame; sonic logo tiga nada naik dan kembali
sebagai akor di reunifikasi; aksen di 74 % potongan; tidak ada lubang senyap. Dinilai lewat pengukuran dan lembar
dengar, belum didengar telinga manusia: tiga hal yang paling perlu didengar ada di bawah.

## Yang perlu didengar (bukan cacat terukur)

1. **Lapisan ritme** (ketukan piano staccato + crotales teredam) di babak 04, 07, 08 mungkin terasa sibuk. Satu
   kenop: `TICK_LEVEL` di `audio/score/compose.py` (≈ 1,2 masih memenuhi kepadatan).
2. **Klik di setiap transisi** membentuk motif "tick on the cut"; bisa diturunkan di `audio/design/transitions.json`.
3. **End card (116–119,2 s)**: bus musik dinaikkan 3,5 dB agar rekaman yang meluruh tetap terdengar sampai gelap.

## Keputusan

Seluruh keputusan eksekusi (ruling) dan minor yang ditunda tercatat di `review/PLAN4-DECISIONS.md`.
