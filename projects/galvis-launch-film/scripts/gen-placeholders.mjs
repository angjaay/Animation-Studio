// One-off scaffold: writes index.html hosts and a placeholder sub-composition per act.
import { writeFileSync, existsSync } from 'node:fs';
import { ACTS, actWindow, DURATION } from '../shared/cues.js';

const hosts = ACTS.map((a, i) => {
  const w = actWindow(a.id);
  return `      <div id="${a.id}" data-composition-id="${a.id}" data-composition-src="compositions/${a.file}" data-start="${w.start}" data-duration="${w.duration}" data-track-index="${i % 2}" data-width="1920" data-height="1080"></div>`;
}).join('\n');

writeFileSync('index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>GALVIS Launch Film</title>
    <link rel="stylesheet" href="shared/tokens.css" />
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <script src="shared/gv.js"></script>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { width: 1920px; height: 1080px; overflow: hidden; background: #000; }
      #galvis-launch { position: relative; width: 100%; height: 100%; overflow: hidden; }
    </style>
  </head>
  <body>
    <div id="galvis-launch" data-composition-id="galvis-launch" data-start="0" data-duration="${DURATION}" data-width="1920" data-height="1080">
${hosts}
    </div>
    <script>
      const tl = gsap.timeline({ paused: true });
      window.__timelines["galvis-launch"] = tl;
    </script>
  </body>
</html>
`);

for (const a of ACTS) {
  const path = `compositions/${a.file}`;
  if (existsSync(path)) continue;
  const dark = a.bg === 'dark' || a.bg === 'light-to-dark';
  writeFileSync(path, `<!doctype html>
<html>
  <head><meta charset="UTF-8" /></head>
  <body>
    <template>
      <style>
        #${a.id}-root { position: absolute; inset: 0; display: grid; place-items: center; background: ${dark ? 'var(--navy)' : 'var(--light-gray)'}; }
        #${a.id}-title { font-family: var(--font-display); font-weight: 700; font-size: 72px; color: ${dark ? 'var(--white)' : 'var(--navy)'}; }
      </style>
      <div id="${a.id}-root" data-composition-id="${a.id}" data-width="1920" data-height="1080">
        <h1 id="${a.id}-title">${a.id}</h1>
      </div>
      <script>
        const tl = gsap.timeline({ paused: true });
        window.__timelines["${a.id}"] = tl;
      </script>
    </template>
  </body>
</html>
`);
}
