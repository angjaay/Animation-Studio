# Jangkauan Transportasi Umum 500 m (GISACT)

Video sosial media 1080×1350 (4:5), 60 fps, 73,5 detik, dibangun dengan HyperFrames dari desain Figma
"Redesign Transportasi · Jangkauan 500 m · Tactical UI v1.2" (file GISACT Social Media Template).

## Struktur

- `index.html`: root. Video peta (latar), `shade` (scrim), 10 scene, `chrome` (header, footer, bingkai HUD, grid koordinat, sapuan pemindai).
- `compositions/s1.html` … `s10.html`: satu scene per slide Figma K1–K10.
- `assets/tr.js`: helper motion (decode teks, hitung angka, entrance bersama). Semua fungsi waktu timeline, aman di-seek.
- `scripts/build.py`: **sumber kebenaran**. Semua posisi/ukuran/warna diambil dari node Figma v1.2. Ubah di sini lalu jalankan `python3 scripts/build.py`.
- `scripts/grade.py`, `scripts/make-lut.py`, `scripts/peta-grade.cube`: grading peta (biru → cyan #5CC8FF, cokelat → oranye #FF8A4C), sama dengan still yang disetujui.

## Video peta (tidak di-commit, ~100 MB)

`assets/video/peta-graded.mp4` dibuat dari `00_REEL_LENGKAP_peta.mp4` (Drive, folder Transportation):

```bash
python3 scripts/make-lut.py
ffmpeg -i 00_REEL_LENGKAP_peta.mp4 -vf lut3d=scripts/peta-grade.cube -c:v libx264 -preset slow -crf 17 -pix_fmt yuv420p -g 15 -an -movflags +faststart assets/video/peta-graded.mp4
ffmpeg -sseof -0.05 -i assets/video/peta-graded.mp4 -frames:v 1 -q:v 2 assets/img/map-last.jpg
```

## Perintah

```bash
python3 scripts/build.py   # tulis ulang compositions dari spesifikasi
npm run check              # lint + runtime + layout + motion + kontras
npm run render             # MP4 60 fps ke renders/
```
