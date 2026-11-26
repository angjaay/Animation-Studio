#!/usr/bin/env python3
"""Generate index.html and compositions/*.html for the Transportasi 500 m film.

Every position, size, font and colour below is copied from the Figma frames
"TR v1.2 · K1..K10" (file GISACT Social Media Template). Times are in seconds,
local to each scene; scene slots follow the original reel and the camera moves
measured in assets/video/peta-graded.mp4 (the map holds still inside each section).

Run:  python3 scripts/build.py
"""
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
W, H = 1080, 1350
INK, MUTE, CYAN, ORANGE, BASE = "#EAF1F5", "#9EB0BA", "#5CC8FF", "#FF8A4C", "#06080A"

FONTS = """@font-face{font-family:'Plus Jakarta Sans';src:url('assets/fonts/PlusJakartaSans-VF.ttf') format('truetype');font-weight:200 800;}
@font-face{font-family:'Share Tech Mono';src:url('assets/fonts/ShareTechMono-Regular.ttf') format('truetype');font-weight:400;}"""

BASE_CSS = f"""#root{{position:absolute;inset:0;overflow:hidden;}}
.ui{{position:absolute;inset:0;}}
.a{{position:absolute;margin:0;white-space:nowrap;}}
.mono{{font-family:'Share Tech Mono',monospace;text-transform:uppercase;font-weight:400;}}
.pj{{font-family:'Plus Jakarta Sans',sans-serif;}}
.tag{{font-size:22px;line-height:25px;letter-spacing:.2em;color:{MUTE};}}
.title{{font-weight:700;color:{INK};letter-spacing:-.01em;line-height:1.06;white-space:normal;}}
.sub{{font-weight:500;font-size:30px;line-height:1.35;color:{MUTE};white-space:normal;}}
.status{{font-size:18px;line-height:20px;letter-spacing:.12em;color:{MUTE};opacity:.7;}}
.lbl{{font-size:22px;line-height:25px;letter-spacing:.12em;color:{INK};text-shadow:0 1px 2px rgba(6,8,10,.95),0 0 10px rgba(6,8,10,.85);}}
.plus{{font-size:18px;line-height:20px;color:rgba(234,241,245,.75);text-shadow:0 0 6px rgba(6,8,10,.9);}}
.plabel{{font-size:20px;line-height:23px;letter-spacing:.14em;color:{MUTE};}}
.panel{{position:absolute;background:rgba(10,16,21,.78);outline:1px solid rgba(234,241,245,.14);}}
.rule{{position:absolute;height:1px;background:rgba(234,241,245,.12);}}
.corners{{position:absolute;overflow:visible;}}
.numrow{{position:absolute;display:flex;align-items:baseline;gap:6px;white-space:nowrap;}}
.num{{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;line-height:1;font-variant-numeric:tabular-nums;}}
.unit{{font-family:'Share Tech Mono',monospace;}}
.bar{{position:absolute;}}
.w{{display:inline-block;}}
.halo{{text-shadow:0 1px 2px rgba(6,8,10,.95),0 0 10px rgba(6,8,10,.85);}}"""


# ---------- small builders ----------
def esc(s):
    return escape(s, quote=True)


def txt(id_, x, y, text, cls, style="", w=None):
    wcss = f"width:{w}px;" if w else ""
    return f'<p id="{id_}" class="a {cls}" style="left:{x}px;top:{y}px;{wcss}{style}">{esc(text)}</p>'


def words(id_, x, y, text, cls, w, style=""):
    spans = " ".join(f'<span class="w {id_}-w">{esc(t)}</span>' for t in text.split(" "))
    return f'<h1 id="{id_}" class="a {cls}" style="left:{x}px;top:{y}px;width:{w}px;{style}">{spans}</h1>'


def corners(id_, x, y, w, h, arm=18, color=INK, op=0.7, sw=2):
    d = (f"M0 {arm} V0 H{arm} M{w-arm} 0 H{w} V{arm} M{w} {h-arm} V{h} H{w-arm} M{arm} {h} H0 V{h-arm}")
    return (f'<svg id="{id_}" class="corners" style="left:{x}px;top:{y}px" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
            f'<path d="{d}" fill="none" stroke="{color}" stroke-opacity="{op}" stroke-width="{sw}"/></svg>')


def maplabel(pfx, i, x, y, name):
    return (f'<p id="{pfx}-plus{i}" class="a mono plus {pfx}-plus" data-layout-ignore style="left:{x}px;top:{y+3}px">+</p>'
            f'<p id="{pfx}-lbl{i}" class="a mono lbl {pfx}-lbl" style="left:{x+18}px;top:{y}px">{esc(name)}</p>')


def legend(pfx, y):
    return (f'<div id="{pfx}-leg1" class="a" style="left:74px;top:{y}px">'
            f'<span style="position:absolute;left:0;top:4px;width:28px;height:18px;background:rgba(92,200,255,.75)"></span>'
            f'<span class="a mono lbl" style="left:40px;top:0">Dalam 500 m</span></div>'
            f'<div id="{pfx}-leg2" class="a" style="left:304px;top:{y}px">'
            f'<span style="position:absolute;left:0;top:4px;width:28px;height:18px;background:rgba(255,138,76,.75)"></span>'
            f'<span class="a mono lbl" style="left:40px;top:0">Di luar 500 m</span></div>')


def header_block(pfx, tag, title, sub, w, title_y=217, title_size=68, title_h=144, accent=CYAN, sub_w=None):
    ay = title_y + title_h + 16
    out = [txt(f"{pfx}-tag", 74, 176, tag, "mono tag", w=w),
           words(f"{pfx}-title", 74, title_y, title, "pj title", w, f"font-size:{title_size}px;"),
           f'<div id="{pfx}-accent" class="a" style="left:74px;top:{ay}px;width:72px;height:3px;background:{accent}"></div>']
    if sub:
        out.append(txt(f"{pfx}-sub", 74, ay + 19, sub, "pj sub", w=sub_w or w))
    return "\n".join(out)


def readout(pfx, ter, bel, tw, bw, tp, bp):
    """Readout panel (556,930) 450x266, values from Figma."""
    x0, y0 = 556, 930
    return "\n".join([
        f'<div id="{pfx}-ro" class="panel" style="left:{x0}px;top:{y0}px;width:450px;height:266px"></div>',
        corners(f"{pfx}-ro-c", x0, y0, 450, 266),
        txt(f"{pfx}-ro-h", 572, 943, "Jangkauan 500 m", "mono plabel"),
        f'<div id="{pfx}-ro-rule" class="rule" style="left:{x0}px;top:970px;width:446px"></div>',
        txt(f"{pfx}-ro-tl", 572, 986, "Terlayani", "mono plabel"),
        txt(f"{pfx}-ro-bl", 736, 986, "Belum terlayani", "mono plabel"),
        f'<div id="{pfx}-ro-tr" class="numrow" style="left:572px;top:1061px;height:52px"><span id="{pfx}-ro-tn" class="num" style="font-size:52px;color:{CYAN}">{ter}</span>'
        f'<span class="unit" style="font-size:22px;color:{CYAN}">JT</span></div>',
        f'<div id="{pfx}-ro-br" class="numrow" style="left:736px;top:1016px;height:108px"><span id="{pfx}-ro-bn" class="num" style="font-size:108px;color:{ORANGE}">{bel}</span>'
        f'<span class="unit" style="font-size:30px;color:{ORANGE}">JT</span></div>',
        f'<div id="{pfx}-ro-bt" class="bar" style="left:572px;top:1140px;width:{tw}px;height:8px;background:{CYAN}"></div>',
        f'<div id="{pfx}-ro-bb" class="bar" style="left:{572+tw+2}px;top:1140px;width:{bw}px;height:8px;background:{ORANGE}"></div>',
        txt(f"{pfx}-ro-tp", 572, 1156, tp, "mono plabel", f"color:{CYAN};letter-spacing:.1em;"),
        txt(f"{pfx}-ro-bp", 690, 1156, bp, "mono plabel", f"color:{ORANGE};letter-spacing:.1em;text-align:right;", w=300),
    ])


def scene(sid, dur, body, script, extra_css=""):
    return f"""<!doctype html>
<html>
  <head><meta charset="UTF-8" /></head>
  <body>
    <template>
      <style>
{FONTS}
{BASE_CSS}
{extra_css}
      </style>
      <div id="root" data-composition-id="{sid}" data-width="{W}" data-height="{H}">
        <div id="{sid}-ui" class="ui">
{body}
        </div>
      </div>
      <script>
        (function () {{
          const tl = gsap.timeline({{ paused: true }});
          const S = TR.scene(tl, {dur});
          const fx = TR.fx;
{script}
          S.flush();
          window.__timelines["{sid}"] = tl;
        }})();
      </script>
    </template>
  </body>
</html>
"""


# ---------- scenes ----------
SCENES = []

# K1 Pembuka 0-6. Title is on screen from frame 0 (the hook); the map draws its lines from 1.5 s.
k1 = "\n".join([
    '<div id="s1-scrim" class="a" style="left:-160px;top:420px;width:980px;height:340px;background:radial-gradient(closest-side,rgba(6,8,10,.82),rgba(6,8,10,0))"></div>',
    header_block("s1", "Pembuka", "Seberapa dekat transportasi umum dari rumahmu?",
                 "Kami ukur jarak rumah warga ke titik transportasi umum terdekat di empat kawasan metropolitan.",
                 540, title_h=288),
    maplabel("s1", 0, 592, 526, "Senen"), maplabel("s1", 1, 458, 643, "Menteng"), maplabel("s1", 2, 181, 757, "Tanah Abang"),
    '<div id="s1-moda" class="panel" style="left:636px;top:176px;width:370px;height:166px"></div>',
    corners("s1-moda-c", 636, 176, 370, 166, op=0),
    txt("s1-moda-h", 652, 189, "Moda transportasi", "mono plabel"),
    '<div id="s1-moda-rule" class="rule" style="left:636px;top:216px;width:370px"></div>',
] + [
    f'<div id="s1-sw{i}" class="bar s1-sw" style="left:{x}px;top:{y}px;width:22px;height:3px;background:{c}{";background:repeating-linear-gradient(90deg,#9c8cff 0 5px,transparent 5px 8px)" if dash else ""}"></div>'
    f'<p id="s1-md{i}" class="a pj s1-md" style="left:{x+32 if x < 800 else x+19}px;top:{y-13}px;font-size:20px;line-height:25px;font-weight:500;color:{INK}">{esc(n)}</p>'
    for i, (x, y, c, n, dash) in enumerate([
        (652, 245, "#e8475e", "KRL / KA lokal", False), (855, 245, "#4a7dff", "MRT", False),
        (652, 279, "#2ecc8f", "LRT Jabodebek", False), (855, 279, "#b5e51c", "LRT Jakarta", False),
        (652, 313, "#ffd140", "Transjakarta", False), (855, 313, "#9c8cff", "Bus kota", True)])
] + [txt("s1-status", 74, 1214, "Sektor Jakarta Pusat · 6.20°S 106.84°E", "mono status")])
s1 = """          fx.decode('#s1-tag', 0.15, 0.4);
          fx.bar(tl, '#s1-accent', 0.25);
          fx.lineBlur(tl, '#s1-sub', 0.55, 0.22);
          S.decode('#s1-status', 0.3, 0.6);
          fx.open(tl, '#s1-moda', 1.45); fx.lock(tl, '#s1-moda-c', 1.55);
          tl.set('#s1-moda-c path', { attr: { 'stroke-opacity': 0.7 } }, 1.55);
          S.decode('#s1-moda-h', 1.6, 0.4);
          // each mode row arrives as its line appears on the map
          [[0, 1, 1.9], [2, 3, 2.8], [4, 5, 3.4]].forEach(([a, b, t]) => {
            fx.bar(tl, `#s1-sw${a}, #s1-sw${b}`, t, 0.35);
            fx.lineBlur(tl, `#s1-md${a}, #s1-md${b}`, t + 0.1, 0.18);
          });
          fx.plus(tl, '.s1-plus', 2.5, 0.16);
          S.decode('.s1-lbl', 2.58, 0.45, 0.16);
          fx.out(tl, '#s1-ui', 5.72);
""".replace("fx.decode", "S.decode")
SCENES.append(("s1", 0, 6, k1, s1, ""))

# K2 Lingkar 500 meter 6-16. Hexes fill in on the map from ~7 s (orange ~8 s, cyan ~12 s).
ring = f"""<svg id="s2-ring" class="a" style="left:0;top:0;overflow:visible" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs><mask id="s2-ring-m" maskUnits="userSpaceOnUse" x="0" y="0" width="{W}" height="{H}">
    <circle id="s2-ring-mc" cx="600" cy="830" r="170" fill="none" stroke="#fff" stroke-width="12" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1" transform="rotate(-90 600 830)"/></mask></defs>
  <radialGradient id="s2-disc-g"><stop offset="0" stop-color="#06080A" stop-opacity=".62"/><stop offset=".72" stop-color="#06080A" stop-opacity=".5"/><stop offset="1" stop-color="#06080A" stop-opacity="0"/></radialGradient>
  <circle id="s2-disc" cx="600" cy="830" r="250" fill="url(#s2-disc-g)"/>
  <circle id="s2-fill" cx="600" cy="830" r="170" fill="{CYAN}" fill-opacity=".07"/>
  <circle cx="600" cy="830" r="170" fill="none" stroke="#BFEBFF" stroke-width="2.5" stroke-dasharray="10 8" mask="url(#s2-ring-m)"/>
  <circle id="s2-inner" cx="600" cy="830" r="85" fill="none" stroke="{INK}" stroke-opacity=".18" stroke-width="1"/>
  <rect id="s2-ch" x="406" y="830" width="388" height="1" fill="{INK}" fill-opacity=".18"/>
  <rect id="s2-cv" x="600" y="636" width="1" height="388" fill="{INK}" fill-opacity=".18"/>
  <g id="s2-radg"><rect id="s2-rad" x="600" y="829" width="170" height="2" fill="{CYAN}"/></g>
  <g id="s2-ret"><circle cx="600" cy="830" r="22" fill="none" stroke="{CYAN}" stroke-width="1.5"/><circle cx="600.5" cy="830.5" r="2.5" fill="{CYAN}"/>
    <rect x="599" y="794" width="2" height="12" fill="{CYAN}"/><rect x="599" y="854" width="2" height="12" fill="{CYAN}"/>
    <rect x="564" y="829" width="12" height="2" fill="{CYAN}"/><rect x="624" y="829" width="12" height="2" fill="{CYAN}"/></g>
</svg>"""
k2 = "\n".join([
    header_block("s2", "Cara mengukur", "Lingkar 500 meter",
                 "Sekitar 6 menit berjalan kaki. Warga di dalam lingkar ini kami hitung terlayani.", 700, title_h=72),
    ring,
    txt("s2-rlab", 645, 800, "R = 500 M", "mono plabel halo", f"color:{INK};letter-spacing:.12em;"),
    txt("s2-wlab", 508, 1016, "≈ 6 menit jalan kaki", "mono plabel halo", f"color:{INK};letter-spacing:.12em;"),
    maplabel("s2", 0, 458, 643, "Menteng"), maplabel("s2", 1, 385, 944, "Setiabudi"), maplabel("s2", 2, 670, 986, "Tebet"),
    legend("s2", 506),
    txt("s2-status", 74, 1214, "Sektor Jakarta Pusat · 6.20°S 106.84°E", "mono status"),
])
s2 = """          S.decode('#s2-tag', 0.1, 0.35);
          fx.lineBlur(tl, '#s2-title', 0.18, 0.2);
          fx.bar(tl, '#s2-accent', 0.3);
          fx.lineBlur(tl, '#s2-sub', 0.5, 0.22);
          // the reticle locks on, crosshairs extend, the ring is swept like a radar
          tl.fromTo('#s2-disc', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.9);
          tl.fromTo('#s2-ret', { opacity: 0, scale: 1.7, rotation: 45, svgOrigin: '600 830' }, { opacity: 1, scale: 1, rotation: 0, duration: 0.45, ease: 'expo.out' }, 1.0);
          tl.fromTo('#s2-ch', { scaleX: 0, svgOrigin: '600 830' }, { scaleX: 1, duration: 0.5, ease: 'expo.out' }, 1.2);
          tl.fromTo('#s2-cv', { scaleY: 0, svgOrigin: '600 830' }, { scaleY: 1, duration: 0.5, ease: 'expo.out' }, 1.25);
          tl.fromTo('#s2-rad', { scaleX: 0, svgOrigin: '600 830' }, { scaleX: 1, duration: 0.25, ease: 'power2.out' }, 1.45);
          tl.fromTo('#s2-radg', { rotation: -360, svgOrigin: '600 830' }, { rotation: 0, duration: 1.1, ease: 'power2.inOut' }, 1.6);
          tl.fromTo('#s2-ring-mc', { attr: { 'stroke-dashoffset': 1 } }, { attr: { 'stroke-dashoffset': 0 }, duration: 1.1, ease: 'power2.inOut' }, 1.6);
          tl.fromTo('#s2-fill', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 2.4);
          tl.fromTo('#s2-inner', { opacity: 0, scale: 0.6, svgOrigin: '600 830' }, { opacity: 1, scale: 1, duration: 0.5, ease: 'expo.out' }, 2.5);
          S.decode('#s2-rlab', 2.75, 0.4);
          S.decode('#s2-wlab', 3.0, 0.5);
          // legend items arrive with their colour on the map
          fx.lineBlur(tl, '#s2-leg2', 2.05, 0.2);
          fx.lineBlur(tl, '#s2-leg1', 6.05, 0.2);
          fx.plus(tl, '.s2-plus', 3.6, 0.16);
          S.decode('.s2-lbl', 3.68, 0.45, 0.16);
          S.decode('#s2-status', 0.2, 0.5);
          fx.out(tl, '#s2-ui', 9.72);
"""
SCENES.append(("s2", 6, 10, k2, s2, ""))


def region(sid, t0, dur, tag, title, sub, labels, ro, status, settle, entrance):
    body = "\n".join([header_block(sid, tag, title, sub, 700)]
                     + [maplabel(sid, i, x, y, n) for i, (x, y, n) in enumerate(labels)]
                     + [readout(sid, *ro), legend(sid, 1150), txt(f"{sid}-status", 74, 1214, status, "mono status")])
    ter, bel = ro[0], ro[1]
    tv, bv = float(ter.replace(",", ".")), float(bel.replace(",", "."))
    sc = f"""          S.decode('#{sid}-tag', 0.1, 0.4);
          {entrance}
          fx.bar(tl, '#{sid}-accent', 0.45);
          fx.lineBlur(tl, '#{sid}-sub', 0.7, 0.22);
          S.decode('#{sid}-status', 0.2, 0.6);
          fx.plus(tl, '.{sid}-plus', {settle:.2f}, 0.13);
          S.decode('.{sid}-lbl', {settle+0.08:.2f}, 0.42, 0.13);
          fx.lineBlur(tl, '#{sid}-leg1, #{sid}-leg2', {settle+0.2:.2f}, 0.2);
          const r = {settle+0.55:.2f};
          fx.open(tl, '#{sid}-ro', r); fx.lock(tl, '#{sid}-ro-c', r + 0.08);
          S.decode('#{sid}-ro-h', r + 0.15, 0.4);
          S.decode('#{sid}-ro-tl, #{sid}-ro-bl', r + 0.25, 0.4, 0.1);
          fx.lineBlur(tl, '#{sid}-ro-tr', r + 0.42, 0.16); fx.lineBlur(tl, '#{sid}-ro-br', r + 0.52, 0.16);
          S.count('#{sid}-ro-tn', r + 0.45, 1.2, {tv});
          S.count('#{sid}-ro-bn', r + 0.55, 1.45, {bv});
          tl.fromTo('#{sid}-ro-bt', {{ scaleX: 0, transformOrigin: '0% 50%' }}, {{ scaleX: 1, duration: 0.9, ease: 'expo.out' }}, r + 0.5);
          tl.fromTo('#{sid}-ro-bb', {{ scaleX: 0, transformOrigin: '0% 50%' }}, {{ scaleX: 1, duration: 1.2, ease: 'expo.out' }}, r + 0.75);
          S.decode('#{sid}-ro-tp, #{sid}-ro-bp', r + 1.3, 0.45, 0.12);
          fx.out(tl, '#{sid}-ui', {dur-0.28:.2f});
"""
    SCENES.append((sid, t0, dur, body, sc, ""))


# K3 Jabodetabek 16-26: camera zooms out until 19.3 s, then holds.
region("s3", 16, 10, "[01/04] Jabodetabek", "Jaringan terluas, belum merata", "Kawasan Metropolitan Jakarta · 32,5 juta warga",
       [(116, 641, "Kab. Tangerang"), (707, 656, "Kab. Bekasi"), (423, 809, "Kota Depok"), (356, 982, "Kota Bogor")],
       ("8,4", "24,1", 108, 308, "26% terlayani", "74% belum"), "Sektor Jabodetabek · 6.21°S 106.85°E", 3.45,
       "fx.wordsInk(tl, '.s3-title-w', 0.18);")
# K4 Gerbangkertosusila 26-36: holds from 26.0 s.
region("s4", 26, 10, "[02/04] Gerbangkertosusila", "Kuat di kota, tipis di pinggiran", "Kawasan Metropolitan Surabaya · 10,4 juta warga",
       [(678, 585, "Kab. Bangkalan"), (219, 649, "Kab. Lamongan"), (555, 772, "Kota Surabaya"), (294, 979, "Kab. Mojokerto")],
       ("1,8", "8,5", 70, 346, "17% terlayani", "82% belum"), "Sektor Gerbangkertosusila · 7.26°S 112.75°E", 1.1,
       "fx.wordsBlur(tl, '.s4-title-w', 0.18);")
# K5 Cekungan Bandung 36-41: holds 35.4-40.9 s, then the camera dives to Soreang.
region("s5", 36, 5, "[03/04] Cekungan Bandung", "Sampai Soreang, tapi lewat tol", "Cekungan Bandung · 9,3 juta warga",
       [(498, 663, "Kota Bandung"), (503, 795, "Kab. Bandung")],
       ("1,7", "7,6", 75, 341, "18% terlayani", "82% belum"), "Sektor Cekungan Bandung · 6.92°S 107.62°E", 0.85,
       "fx.lineBlur(tl, '#s5-title', 0.18, 0.2);")

# K6 Soreang 41-48: camera dives 40.9-43.7 s, holds from 43.7 s; the map's own toll note appears ~44.6 s.
route_d = "M 612 330 L 600 420 L 610 460 L 600 540 L 585 600 L 560 660 L 545 710 L 518 790"
br = "M10 1.25 H1.25 V10 M50 1.25 H58.75 V10 M10 58.75 H1.25 V50 M50 58.75 H58.75 V50"
k6 = "\n".join([
    f'<div id="s6-vig" class="a" style="left:0;top:0;width:{W}px;height:{H}px;background:radial-gradient(ellipse 454px 486px at 640px 610px, rgba(6,8,10,0) 55%, rgba(6,8,10,.72) 100%)"></div>',
    header_block("s6", "[03/04] Cekungan Bandung · perbesar", "Sampai Soreang, tapi lewat tol",
                 "Bus berhenti di Leuwi Panjang, lalu langsung di Soreang. Warga di antaranya belum terlayani.", 580, accent=ORANGE),
    f"""<svg id="s6-svg" class="a" style="left:0;top:0;overflow:visible" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <linearGradient id="s6-fade" x1="0" y1="330" x2="0" y2="790" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="{ORANGE}" stop-opacity="0"/><stop offset=".3" stop-color="{ORANGE}"/><stop offset="1" stop-color="{ORANGE}"/></linearGradient>
    <filter id="s6-glow" x="-50%" y="-10%" width="200%" height="120%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <mask id="s6-draw" maskUnits="userSpaceOnUse" x="0" y="0" width="{W}" height="{H}"><path id="s6-drawp" d="{route_d}" fill="none" stroke="#fff" stroke-width="24" stroke-linejoin="round" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1"/></mask>
  </defs>
  <g mask="url(#s6-draw)">
    <path id="s6-route" d="{route_d}" fill="none" stroke="url(#s6-fade)" stroke-width="3" stroke-linejoin="round" filter="url(#s6-glow)"/>
    <path d="{route_d}" fill="none" stroke="url(#s6-fade)" stroke-width="16" stroke-dasharray="2 34" opacity=".9"/>
  </g>
  <circle id="s6-bus" cx="612" cy="330" r="7" fill="{ORANGE}" filter="url(#s6-glow)"/>
  <path id="s6-lead" d="M592 590 L648 572" fill="none" stroke="{ORANGE}" stroke-opacity=".8" stroke-width="1.5" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1"/>
  <g id="s6-k1" transform="translate(770 402)"><path d="{br}" fill="none" stroke="{INK}" stroke-width="2.5"/></g>
  <g id="s6-k2" transform="translate(488 760)"><path d="{br}" fill="none" stroke="{INK}" stroke-width="2.5"/></g>
  <circle id="s6-d1" cx="800" cy="432" r="6" fill="{CYAN}"/>
  <circle id="s6-d2" cx="518" cy="790" r="6" fill="{CYAN}"/>
</svg>""",
    f'<div id="s6-chip1" class="a" style="left:820px;top:414px;width:214px;height:64px;background:rgba(6,8,10,.95);outline:1px solid rgba(235,242,245,.18)"></div>',
    txt("s6-l1", 832, 422, "Leuwi Panjang", "mono lbl"), txt("s6-s1", 832, 450, "Stop 01", "mono plabel", "font-size:18px;line-height:20px;letter-spacing:.12em;"),
    f'<div id="s6-chip2" class="a" style="left:540px;top:768px;width:150px;height:64px;background:rgba(6,8,10,.95);outline:1px solid rgba(235,242,245,.18)"></div>',
    txt("s6-l2", 552, 776, "Soreang", "mono lbl"), txt("s6-s2", 552, 804, "Stop 02", "mono plabel", "font-size:18px;line-height:20px;letter-spacing:.12em;"),
    f'<div id="s6-plate" class="a" style="left:648px;top:512px;width:368px;height:214px;background:rgba(6,8,10,.95)"></div>',
    f'<div class="numrow" style="left:668px;top:528px;height:132px;gap:6px"><span id="s6-hero" class="num" style="font-size:132px;color:{ORANGE};letter-spacing:-.02em">±9</span>'
    f'<span id="s6-km" class="pj" style="font-size:44px;font-weight:600;color:{ORANGE}">km</span></div>',
    txt("s6-note", 670, 676, "Tanpa titik naik-turun", "mono lbl"),
    txt("s6-meas", 670, 540, "Mengukur celah", "mono plabel"),
    txt("s6-mval", 670, 576, "0,0 km", "mono", f"font-size:44px;line-height:48px;color:{ORANGE};letter-spacing:.04em;"),
    '<div class="bar" style="left:670px;top:704px;width:320px;height:3px;background:rgba(234,241,245,.14)"></div>',
    f'<div id="s6-prog" class="bar" style="left:670px;top:704px;width:320px;height:3px;background:{ORANGE}"></div>',
    legend("s6", 1132),
    txt("s6-status", 74, 1214, "Sektor Bandung Selatan · 7.00°S 107.56°E", "mono status"),
])
s6 = """          S.decode('#s6-tag', 0.15, 0.45);
          fx.wordsBlur(tl, '.s6-title-w', 0.3);
          fx.bar(tl, '#s6-accent', 0.6);
          fx.lineBlur(tl, '#s6-sub', 0.85, 0.22);
          S.decode('#s6-status', 0.3, 0.6);
          tl.fromTo('#s6-vig', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.inOut' }, 2.2);
          // the camera lands (2.7 s): the stops are marked and the map's labels are covered
          fx.open(tl, '#s6-chip1, #s6-chip2', 2.72, 0.32);
          S.decode('#s6-l1', 2.85, 0.4); S.decode('#s6-s1', 3.0, 0.3);
          S.decode('#s6-l2', 2.95, 0.4); S.decode('#s6-s2', 3.1, 0.3);
          tl.fromTo('#s6-d1', { opacity: 0, scale: 0, svgOrigin: '800 432' }, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 2.8);
          tl.fromTo('#s6-k1', { opacity: 0, scale: 1.8, svgOrigin: '800 432' }, { opacity: 1, scale: 1, duration: 0.4, ease: 'expo.out' }, 2.9);
          // the hero plate is in place before the map's own toll note shows (3.6 s)
          fx.open(tl, '#s6-plate', 3.3, 0.4);
          tl.set('#s6-km, #s6-note', { opacity: 0 }, 0);
          S.decode('#s6-meas', 3.55, 0.45);
          tl.fromTo('#s6-mval', { opacity: 0 }, { opacity: 1, duration: 0.15 }, 3.4);
          S.count('#s6-mval', 3.4, 1.6, 9, 1, '', 'power1.inOut');
          S.job((t) => { const el = document.getElementById('s6-mval'); if (t >= 3.4) el.textContent = el.textContent.replace(/ km$/, '') + ' km'; });
          tl.fromTo('#s6-prog', { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 1.6, ease: 'power1.inOut' }, 3.4);
          fx.out(tl, '#s6-meas, #s6-mval', 5.05, 0.16);
          tl.to('#s6-prog', { opacity: 0, duration: 0.2, ease: 'power2.in' }, 5.2);
          // the bus leaves the city and runs the toll without a stop
          tl.fromTo('#s6-drawp', { attr: { 'stroke-dashoffset': 1 } }, { attr: { 'stroke-dashoffset': 0 }, duration: 1.6, ease: 'power1.inOut' }, 3.4);
          const path = document.getElementById('s6-drawp'), bus = document.getElementById('s6-bus');
          const L = path.getTotalLength() || 470, E = gsap.parseEase('power1.inOut');
          S.job((t) => {
            const p = Math.min(1, Math.max(0, (t - 3.4) / 1.6));
            const pt = path.getPointAtLength(E(p) * L);
            bus.setAttribute('cx', pt.x); bus.setAttribute('cy', pt.y);
            bus.setAttribute('opacity', t < 3.4 ? 0 : t < 5.0 ? 1 : Math.max(0, 1 - (t - 5.0) / 0.3));
          });
          tl.fromTo('#s6-d2', { opacity: 0, scale: 0, svgOrigin: '518 790' }, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 4.95);
          tl.fromTo('#s6-k2', { opacity: 0, scale: 1.8, svgOrigin: '518 790' }, { opacity: 1, scale: 1, duration: 0.4, ease: 'expo.out' }, 5.0);
          // the measured gap
          tl.fromTo('#s6-lead', { attr: { 'stroke-dashoffset': 1 } }, { attr: { 'stroke-dashoffset': 0 }, duration: 0.3, ease: 'power2.out' }, 5.05);
          tl.fromTo('#s6-hero', { opacity: 0, scale: 1.25, filter: 'blur(8px)', transformOrigin: '0% 60%' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.4, ease: 'expo.out' }, 5.15);
          fx.lineBlur(tl, '#s6-km', 5.35, 0.2);
          tl.set('#s6-note', { opacity: 1 }, 5.55);
          S.decode('#s6-note', 5.55, 0.5);
          fx.lineBlur(tl, '#s6-leg1, #s6-leg2', 3.2, 0.2);
          fx.out(tl, '#s6-ui', 6.72);
"""
SCENES.append(("s6", 41, 7, k6, s6, ""))

# K7 Mebidangro 48-56: holds from 48.3 s.
region("s7", 48, 8, "[04/04] Mebidangro", "Baru menyentuh pusat kota", "Kawasan Metropolitan Medan · 5,4 juta warga",
       [(570, 484, "Kota Medan"), (412, 519, "Kota Binjai"), (573, 624, "Kab. Deli Serdang"), (289, 945, "Kab. Karo")],
       ("0,7", "4,7", 54, 362, "13% terlayani", "87% belum"), "Sektor Mebidangro · 3.60°N 98.67°E", 0.95,
       "fx.wordsInk(tl, '.s7-title-w', 0.18);")

# K8 Perbandingan 56-62: four full-bleed map cards.
cards = [(74, 212, "01 · Metropolitan Jakarta", "24,1", 311, "74% dari 32,5 jt warga"),
         (554, 212, "02 · Metropolitan Surabaya", "8,5", 344, "82% dari 10,4 jt warga"),
         (74, 712, "03 · Cekungan Bandung", "7,6", 344, "82% dari 9,3 jt warga"),
         (554, 712, "04 · Metropolitan Medan", "4,7", 365, "87% dari 5,4 jt warga")]
k8 = [txt("s8-tag", 74, 172, "Ringkasan · belum terlayani per kawasan", "mono tag")]
for i, (x, y, lab, val, bw, pct) in enumerate(cards, 1):
    k8 += [
        f'<div id="s8-c{i}" class="a s8-card" style="left:{x}px;top:{y}px;width:452px;height:470px;overflow:hidden;background:rgba(10,16,21,.78);outline:1px solid rgba(234,241,245,.14)">'
        f'<img id="s8-img{i}" src="assets/img/tile-{i}.jpg" alt="" style="position:absolute;left:0;top:0;width:452px;height:470px;object-fit:cover"/>'
        f'<div style="position:absolute;left:0;top:0;width:452px;height:72px;background:linear-gradient(rgba(6,8,10,.85),rgba(6,8,10,0))"></div>'
        f'<div style="position:absolute;left:0;top:280px;width:452px;height:190px;background:linear-gradient(rgba(6,8,10,0) 0%,rgba(6,8,10,.82) 45%,rgba(6,8,10,.95) 100%)"></div></div>',
        corners(f"s8-k{i}", x, y, 452, 470),
        txt(f"s8-l{i}", x + 16, y + 13, lab, f"mono plabel s8-lab"),
        txt(f"s8-b{i}", x + 16, y + 308, "Belum terlayani", "mono plabel s8-bl"),
        f'<div id="s8-nr{i}" class="numrow" style="left:{x+16}px;top:{y+337}px;height:60px;gap:8px"><span id="s8-n{i}" class="num" style="font-size:60px;color:{ORANGE}">{val}</span>'
        f'<span class="unit" style="font-size:24px;color:{ORANGE}">JT</span></div>',
        f'<div id="s8-track{i}" class="bar" style="left:{x+16}px;top:{y+411}px;width:420px;height:8px;background:rgba(234,241,245,.12)"></div>',
        f'<div id="s8-bar{i}" class="bar" style="left:{x+16}px;top:{y+411}px;width:{bw}px;height:8px;background:{ORANGE}"></div>',
        txt(f"s8-p{i}", x + 16, y + 431, pct, "mono plabel s8-pct", "letter-spacing:.1em;"),
    ]
k8.append(txt("s8-status", 74, 1214, "Ringkasan · 4 kawasan metropolitan", "mono status"))
s8 = "          S.decode('#s8-tag', 0.1, 0.5);\n          S.decode('#s8-status', 0.2, 0.6);\n"
for i, c in enumerate(cards, 1):
    t = 0.3 + (i - 1) * 0.16
    v = float(c[3].replace(",", "."))
    s8 += (f"          tl.fromTo('#s8-c{i}', {{ clipPath: 'inset(50% 50% 50% 50%)' }}, {{ clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6, ease: 'expo.out' }}, {t:.2f});\n"
           f"          tl.fromTo('#s8-img{i}', {{ scale: 1.12, filter: 'blur(6px)' }}, {{ scale: 1, filter: 'blur(0px)', duration: 1.0, ease: 'expo.out' }}, {t:.2f});\n"
           f"          fx.lock(tl, '#s8-k{i}', {t+0.12:.2f});\n"
           f"          S.decode('#s8-l{i}', {t+0.2:.2f}, 0.45);\n"
           f"          S.decode('#s8-b{i}', {t+0.45:.2f}, 0.35);\n"
           f"          fx.lineBlur(tl, '#s8-nr{i}, #s8-track{i}', {t+0.5:.2f}, 0.16);\n"
           f"          S.count('#s8-n{i}', {t+0.55:.2f}, 1.3, {v});\n"
           f"          tl.fromTo('#s8-bar{i}', {{ scaleX: 0, transformOrigin: '0% 50%' }}, {{ scaleX: 1, duration: 1.1, ease: 'expo.out' }}, {t+0.6:.2f});\n"
           f"          S.decode('#s8-p{i}', {t+1.2:.2f}, 0.4);\n")
s8 += "          fx.out(tl, '#s8-ui', 5.72);\n"
SCENES.append(("s8", 56, 6, "\n".join(k8), s8, ""))

# K9 Penutup 62-68.
rows = [("Jabodetabek", 674, 356, 124, "24,1 / 32,5 JT"), ("Gerbangkertosusila", 752, 125, 27, "8,5 / 10,4 JT"),
        ("Cekungan Bandung", 830, 112, 25, "7,6 / 9,3 JT"), ("Mebidangro", 908, 69, 10, "4,7 / 5,4 JT")]
k9 = [
    txt("s9-tag", 74, 176, "Penutup", "mono tag"),
    f'<h1 id="s9-title" class="a pj title" style="left:74px;top:217px;width:860px;font-size:72px"><span class="w s9-title-w" id="s9-n45">45</span> '
    + " ".join(f'<span class="w s9-title-w">{w}</span>' for w in "juta warga belum terlayani".split()) + "</h1>",
    f'<div id="s9-accent" class="a" style="left:74px;top:385px;width:72px;height:3px;background:{ORANGE}"></div>',
    txt("s9-sub", 74, 404, "Dari 57,6 juta warga di empat kawasan, baru 12,7 juta yang terlayani.", "pj sub", w=860),
    '<div id="s9-panel" class="panel" style="left:74px;top:600px;width:932px;height:430px"></div>',
    corners("s9-pc", 74, 600, 932, 430),
    txt("s9-ph", 90, 613, "Rincian per kawasan", "mono plabel", f"color:{ORANGE};"),
    '<div id="s9-prule" class="rule" style="left:74px;top:640px;width:932px"></div>',
]
for i, (n, y, wb, wt, v) in enumerate(rows):
    k9 += [txt(f"s9-r{i}", 90, y, n, "mono s9-rn", f"font-size:18px;line-height:20px;letter-spacing:.12em;color:{INK};"),
           f'<div id="s9-bb{i}" class="bar" style="left:324px;top:{y-2}px;width:{wb}px;height:22px;background:{ORANGE}"></div>',
           f'<div id="s9-bt{i}" class="bar" style="left:{326+wb}px;top:{y-2}px;width:{wt}px;height:22px;background:{CYAN}"></div>',
           txt(f"s9-v{i}", 690, y + 2, v, "mono s9-v", f"font-size:18px;line-height:20px;letter-spacing:.06em;color:{MUTE};text-align:right;", w=300),
           f'<div class="rule" style="left:90px;top:{y+44}px;width:900px;background:rgba(234,241,245,.06)"></div>']
k9 += [f'<div id="s9-leg" class="a" style="left:90px;top:958px">'
       f'<span style="position:absolute;left:0;top:4px;width:12px;height:12px;background:{ORANGE}"></span>'
       f'<span class="a pj" style="left:20px;top:0;font-size:20px;line-height:25px;font-weight:500;color:{INK}">Belum terlayani</span>'
       f'<span style="position:absolute;left:198px;top:4px;width:12px;height:12px;background:{CYAN}"></span>'
       f'<span class="a pj" style="left:218px;top:0;font-size:20px;line-height:25px;font-weight:500;color:{INK}">Terlayani</span></div>',
       txt("s9-scale", 690, 962, "Skala bar = jumlah warga", "mono", f"font-size:18px;line-height:20px;letter-spacing:.1em;color:{MUTE};text-align:right;", w=300),
       txt("s9-status", 74, 1214, "Total · 4 kawasan metropolitan", "mono status")]
s9 = """          S.decode('#s9-tag', 0.1, 0.35);
          S.decode('#s9-status', 0.2, 0.5);
          S.count('#s9-n45', 0.15, 1.3, 45, 0);
          fx.wordsBlur(tl, '.s9-title-w', 0.2, 0.08);
          fx.bar(tl, '#s9-accent', 0.75);
          fx.lineBlur(tl, '#s9-sub', 1.0, 0.22);
          fx.open(tl, '#s9-panel', 1.4); fx.lock(tl, '#s9-pc', 1.48);
          S.decode('#s9-ph', 1.55, 0.4);
          [0, 1, 2, 3].forEach((i) => {
            const t = 1.75 + i * 0.14;
            S.decode(`#s9-r${i}`, t, 0.4);
            tl.fromTo(`#s9-bb${i}`, { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.9, ease: 'expo.out' }, t + 0.1);
            tl.fromTo(`#s9-bt${i}`, { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.5, ease: 'expo.out' }, t + 0.7);
            S.decode(`#s9-v${i}`, t + 0.55, 0.4);
          });
          fx.lineBlur(tl, '#s9-leg', 2.75, 0.2);
          S.decode('#s9-scale', 2.85, 0.45);
          fx.out(tl, '#s9-ui', 5.72);
"""
SCENES.append(("s9", 62, 6, "\n".join(k9), s9, ""))

# K10 Catatan & sumber 68-72 (holds to the end).
notes = [("Titik transportasi umum", 395, "Halte & stasiun tetap layanan pemerintah (bus kota/BRT, KRL & KA lokal, MRT, LRT); tidak termasuk angkot.", MUTE),
         ("Terlayani", 513, "Tinggal dalam radius 500 m (garis lurus).", CYAN),
         ("Sumber", 567, "BPS (proyeksi penduduk 2026), WorldPop, GTFS Transjakarta, OpenStreetMap, ITDP Indonesia, Dishub daerah.", MUTE),
         ("Analisis", 685, "GISACT.", MUTE),
         ("Pembulatan", 739, "Angka dibulatkan ke 0,1 juta, jadi jumlah per kawasan bisa selisih 0,1 juta.", MUTE)]
k10 = ['<div id="s10-panel" class="panel" style="left:74px;top:330px;width:932px;height:506px;background:rgba(10,16,21,.85)"></div>',
       corners("s10-pc", 74, 330, 932, 506),
       txt("s10-ph", 98, 343, "Catatan & sumber", "mono plabel"),
       '<div id="s10-prule" class="rule" style="left:74px;top:370px;width:932px"></div>']
for i, (lab, y, body, col) in enumerate(notes):
    k10 += [txt(f"s10-l{i}", 99, y, lab, "mono plabel", f"color:{col};letter-spacing:.12em;white-space:normal;", w=230),
            txt(f"s10-b{i}", 353, y, body, "pj", f"font-size:28px;line-height:32px;font-weight:500;color:{INK};white-space:normal;", w=628)]
k10.append(txt("s10-status", 74, 1214, "Referensi data", "mono status"))
s10 = """          S.decode('#s10-status', 0.2, 0.4);
          fx.open(tl, '#s10-panel', 0.05, 0.4); fx.lock(tl, '#s10-pc', 0.12);
          S.decode('#s10-ph', 0.25, 0.35);
          [0, 1, 2, 3, 4].forEach((i) => {
            const t = 0.32 + i * 0.09;
            S.decode(`#s10-l${i}`, t, 0.35);
            fx.lineBlur(tl, `#s10-b${i}`, t + 0.08, 0.22);
          });
"""
SCENES.append(("s10", 68, 5.5, "\n".join(k10), s10, ""))

# ---------- shade (under scenes) and chrome (over scenes) ----------
SHADE = f"""<!doctype html>
<html><head><meta charset="UTF-8" /></head><body>
<template>
  <style>
    #root{{position:absolute;inset:0;}}
    #shade-top{{position:absolute;left:0;top:0;width:{W}px;height:580px;background:linear-gradient(rgba(6,8,10,.97) 0%,rgba(6,8,10,.9) 42%,rgba(6,8,10,0) 100%);}}
    #shade-bot{{position:absolute;left:0;top:1010px;width:{W}px;height:340px;background:linear-gradient(rgba(6,8,10,0) 0%,rgba(6,8,10,.9) 50%,rgba(6,8,10,.97) 100%);}}
    #shade-dim{{position:absolute;inset:0;background:{BASE};}}
  </style>
  <div id="root" data-composition-id="shade" data-width="{W}" data-height="{H}">
    <div id="shade-top"></div><div id="shade-bot"></div><div id="shade-dim"></div>
  </div>
  <script>
    (function () {{
      const tl = gsap.timeline({{ paused: true }});
      // the closing slides sit on a calmer ground
      tl.fromTo('#shade-dim', {{ opacity: 0 }}, {{ opacity: 0.35, duration: 1.2, ease: 'power2.inOut' }}, 62);
      tl.to('#shade-dim', {{ opacity: 0.55, duration: 0.8, ease: 'power2.inOut' }}, 68);
      tl.set({{}}, {{}}, 73.5);
      window.__timelines["shade"] = tl;
    }})();
  </script>
</template>
</body></html>
"""

grid = "".join(f'<p class="a mono gc" style="left:{160+140*i}px;top:150px">{c}</p>' for i, c in enumerate("ABCDEF")) + \
       "".join(f'<p class="a mono gc" style="left:16px;top:{552+140*i}px">{c}</p>' for i, c in enumerate("5678"))
SCANS = [15.9, 25.9, 35.9, 40.8, 47.9, 55.9, 61.9, 67.9]
scan_html = "\n".join(f'<div id="scan{i}" class="clip scan" data-start="{t}" data-duration="0.7" data-track-index="{i % 2}"><div class="scan-line"></div></div>'
                      for i, t in enumerate(SCANS))
CHROME = f"""<!doctype html>
<html><head><meta charset="UTF-8" /></head><body>
<template>
  <style>
{FONTS}
    #root{{position:absolute;inset:0;}}
    .a{{position:absolute;margin:0;white-space:nowrap;}}
    .mono{{font-family:'Share Tech Mono',monospace;text-transform:uppercase;}}
    .gc{{font-size:14px;line-height:16px;letter-spacing:.12em;color:rgba(158,176,186,.5);}}
    #chrome-header{{position:absolute;left:74px;top:44px;width:932px;height:75px;}}
    #chrome-src{{left:74px;top:1261px;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;line-height:23px;color:{MUTE};}}
    #chrome-year{{left:74px;top:1297px;font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;line-height:15px;color:#fff;}}
    #chrome-share{{left:895px;top:1293px;font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;line-height:24px;color:#fff;}}
    .scan{{position:absolute;inset:0;pointer-events:none;}}
    .scan-line{{position:absolute;left:0;top:0;width:{W}px;height:120px;background:linear-gradient(rgba(92,200,255,0),rgba(92,200,255,.10) 85%,rgba(191,235,255,.9) 98%,rgba(92,200,255,0));}}
  </style>
  <div id="root" data-composition-id="chrome" data-width="{W}" data-height="{H}">
    <svg id="chrome-frame" class="a" style="left:40px;top:136px;opacity:.5" width="1000" height="1110" viewBox="0 0 1000 1110">
      <path id="chrome-f1" d="M0 30 V0 H30" fill="none" stroke="{INK}" stroke-width="2"/>
      <path id="chrome-f2" d="M970 0 H1000 V30" fill="none" stroke="{INK}" stroke-width="2"/>
      <path id="chrome-f3" d="M1000 1080 V1110 H970" fill="none" stroke="{INK}" stroke-width="2"/>
      <path id="chrome-f4" d="M30 1110 H0 V1080" fill="none" stroke="{INK}" stroke-width="2"/>
    </svg>
    <div id="chrome-grid" data-layout-ignore>{grid}</div>
    <img id="chrome-header" src="assets/img/header.png" alt="GISACT"/>
    <p id="chrome-src" class="a">Sumber: BPS, WorldPop, OpenStreetMap, GTFS · Analisis GISACT</p>
    <p id="chrome-year" class="a"><span style="font-weight:600">GISACT </span><span style="font-weight:400">| 2026</span></p>
    <p id="chrome-share" class="a"><span style="font-weight:700">Share</span><span style="font-weight:400"> this !</span></p>
{scan_html}
  </div>
  <script>
    (function () {{
      const tl = gsap.timeline({{ paused: true }});
      // HUD boot: the frame corners draw out from the centre, the grid ticks on
      tl.fromTo('#chrome-f1', {{ x: 470, y: 525, opacity: 0 }}, {{ x: 0, y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' }}, 0.05);
      tl.fromTo('#chrome-f2', {{ x: -470, y: 525, opacity: 0 }}, {{ x: 0, y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' }}, 0.05);
      tl.fromTo('#chrome-f3', {{ x: -470, y: -525, opacity: 0 }}, {{ x: 0, y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' }}, 0.05);
      tl.fromTo('#chrome-f4', {{ x: 470, y: -525, opacity: 0 }}, {{ x: 0, y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' }}, 0.05);
      tl.fromTo('#chrome-grid .gc', {{ opacity: 0 }}, {{ opacity: 1, duration: 0.12, stagger: 0.04, ease: 'none' }}, 0.35);
      // the grid belongs to the map slides only
      tl.to('#chrome-grid', {{ opacity: 0, duration: 0.3, ease: 'power2.in' }}, 55.8);
      // scan sweeps on every change of region
      document.querySelectorAll('.scan').forEach((el) => {{
        const t = parseFloat(el.dataset.start);
        tl.fromTo(el.querySelector('.scan-line'), {{ y: -140, opacity: 1 }}, {{ y: {H}, duration: 0.6, ease: 'power2.inOut' }}, t);
      }});
      tl.set({{}}, {{}}, 73.5);
      window.__timelines["chrome"] = tl;
    }})();
  </script>
</template>
</body></html>
"""

# ---------- write ----------
comp = ROOT / "compositions"
comp.mkdir(exist_ok=True)
for sid, t0, dur, body, sc, css in SCENES:
    (comp / f"{sid}.html").write_text(scene(sid, dur, body, sc, css))
(comp / "shade.html").write_text(SHADE)
(comp / "chrome.html").write_text(CHROME)

hosts = "\n".join(
    f'      <div id="{sid}" data-composition-id="{sid}" data-composition-src="compositions/{sid}.html" data-start="{t0}" data-duration="{dur}" '
    f'data-track-index="2" data-track-kind="graphics" data-width="{W}" data-height="{H}" style="z-index:3"></div>'
    for sid, t0, dur, *_ in SCENES)
INDEX = f"""<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width={W}, height={H}" />
    <title>Jangkauan Transportasi Umum 500 m · GISACT</title>
    <script src="assets/gsap.min.js"></script>
    <script src="assets/tr.js"></script>
    <style>
{FONTS}
      * {{ margin: 0; padding: 0; box-sizing: border-box; }}
      html, body {{ width: {W}px; height: {H}px; overflow: hidden; background: {BASE}; }}
      #main {{ position: relative; width: {W}px; height: {H}px; overflow: hidden; }}
      #ground {{ position: absolute; inset: 0; background: {BASE}; }}
      #map {{ position: absolute; left: 0; top: 0; width: {W}px; height: {H}px; object-fit: cover; z-index: 1; }}
    </style>
  </head>
  <body>
    <div id="main" data-composition-id="main" data-start="0" data-duration="73.5" data-width="{W}" data-height="{H}">
      <div id="ground"></div>
      <video id="map" class="clip" src="assets/video/peta-graded.mp4" data-start="0" data-duration="72" data-track-index="0" muted playsinline></video>
      <img id="map-hold" class="clip" src="assets/img/map-last.jpg" alt="" data-start="72" data-duration="1.5" data-track-index="0" style="position:absolute;left:0;top:0;width:{W}px;height:{H}px;z-index:1"/>
      <div id="shade" data-composition-id="shade" data-composition-src="compositions/shade.html" data-start="0" data-duration="73.5" data-track-index="1" data-track-kind="graphics" data-width="{W}" data-height="{H}" style="z-index:2"></div>
{hosts}
      <div id="chrome" data-composition-id="chrome" data-composition-src="compositions/chrome.html" data-start="0" data-duration="73.5" data-track-index="3" data-track-kind="graphics" data-width="{W}" data-height="{H}" style="z-index:4"></div>
    </div>
    <script>
      window.__timelines = window.__timelines || {{}};
      window.__timelines["main"] = gsap.timeline({{ paused: true }});
    </script>
  </body>
</html>
"""
(ROOT / "index.html").write_text(INDEX)
print("wrote", len(SCENES) + 2, "compositions + index.html")
