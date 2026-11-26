/* Motion helpers for the Transportasi 500 m film.
 * Everything here is a pure function of the scene timeline's time (tl.time()),
 * so any frame renders the same on its own (seek-safe, deterministic). */
(function () {
  const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/#+-:.";
  // Integer hash -> stable pseudo-random glyph per (char index, step).
  function hash(i, j) {
    let x = (Math.imul(i + 1, 374761393) + Math.imul(j + 7, 668265263)) >>> 0;
    x = Math.imul(x ^ (x >>> 13), 1274126177) >>> 0;
    return (x ^ (x >>> 16)) >>> 0;
  }
  const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

  function scene(tl, duration) {
    const jobs = [];
    const all = (sel) => Array.from(document.querySelectorAll(sel));
    const api = {
      /* Terminal-style decode: characters resolve left to right through scrambled glyphs.
       * Unresolved characters hold their width with a no-break space (monospace face). */
      decode(sel, at, dur = 0.45, stagger = 0.06) {
        all(sel).forEach((el, k) => {
          const txt = el.getAttribute("data-text") || el.textContent;
          el.setAttribute("data-text", txt);
          const start = at + k * stagger;
          jobs.push((t) => {
            const p = clamp01((t - start) / dur);
            if (p >= 1) { if (el.textContent !== txt) el.textContent = txt; return; }
            const n = txt.length, step = Math.floor(t * 30);
            let s = "";
            for (let i = 0; i < n; i++) {
              const ch = txt[i], r = i / n;
              if (ch === " ") s += " ";
              else if (p > r + 0.22) s += ch;
              else if (p > r) s += GLYPHS[hash(i, step) % GLYPHS.length];
              else s += " ";
            }
            el.textContent = s;
          });
        });
      },
      /* Count-up that lands and holds; Indonesian decimal comma. */
      count(sel, at, dur, to, decimals = 1, prefix = "", ease = "expo.out") {
        const E = gsap.parseEase(ease);
        all(sel).forEach((el) => {
          jobs.push((t) => {
            const v = to * E(clamp01((t - at) / dur));
            el.textContent = prefix + v.toFixed(decimals).replace(".", ",");
          });
        });
      },
      /* Free-form time function (e.g. a dot riding a path). */
      job(fn) { jobs.push(fn); },
      flush() { const t = tl.time(); for (const j of jobs) j(t); },
    };
    tl.eventCallback("onUpdate", api.flush);
    tl.set({}, {}, duration); // the scene timeline spans its whole slot
    return api;
  }

  /* Shared entrances, all fromTo so a re-seek never drifts. */
  const fx = {
    // Per-word blur-in (no translate).
    wordsBlur(tl, sel, at, gap = 0.067) {
      tl.fromTo(sel, { opacity: 0, filter: "blur(6px)" },
        { opacity: 1, filter: "blur(0px)", duration: 0.16, ease: "power3.out", stagger: gap }, at);
    },
    // Per-word grey to ink, no position change.
    wordsInk(tl, sel, at, gap = 0.085) {
      tl.fromTo(sel, { color: "#2B353D" }, { color: "#EAF1F5", duration: 0.22, ease: "power2.out", stagger: gap }, at);
    },
    // Whole line blurs in.
    lineBlur(tl, sel, at, dur = 0.2) {
      tl.fromTo(sel, { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: dur, ease: "power3.out" }, at);
    },
    // Accent bar draws from the left.
    bar(tl, sel, at, dur = 0.45) {
      tl.fromTo(sel, { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: dur, ease: "expo.out" }, at);
    },
    // Corner brackets lock onto their box.
    lock(tl, sel, at, stagger = 0) {
      tl.fromTo(sel, { opacity: 0, scale: 1.18, transformOrigin: "50% 50%" },
        { opacity: 1, scale: 1, duration: 0.38, ease: "expo.out", stagger }, at);
    },
    // Panel body opens from its centre line.
    open(tl, sel, at, dur = 0.42) {
      tl.fromTo(sel, { clipPath: "inset(0% 50% 0% 50%)", opacity: 0.4 },
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: dur, ease: "expo.out" }, at);
    },
    // Map label marker: the plus spins in.
    plus(tl, sel, at, stagger = 0.12) {
      tl.fromTo(sel, { opacity: 0, scale: 0.2, rotation: 90, transformOrigin: "50% 55%" },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.32, ease: "back.out(1.6)", stagger }, at);
    },
    // Scene UI leaves as one blur swap.
    out(tl, sel, at, dur = 0.24) {
      tl.fromTo(sel, { opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(8px)", duration: dur, ease: "power2.in", immediateRender: false }, at);
    },
  };

  window.TR = { scene, fx };
})();
