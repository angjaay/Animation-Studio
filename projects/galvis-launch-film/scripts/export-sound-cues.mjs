// Sound cues from the picture's timing: cues.json (+ the few moments the compositions compute themselves)
// become audio/cues.json, the list of hits the sound design is mixed against.
//   { fps: 30, total: 3600, events: [{ f, kind, id, weight?, pan?, pitch? }] }
// f is the absolute frame (fractional where a hit falls between frames); ids are stable: act:thing:n.
// Usage: node scripts/export-sound-cues.mjs   (npm run audio:cues)
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { CUES, actWindow } from '../shared/cues.js';
import { at } from '../shared/beats.js';
import { CAM_END, HANDOFF } from '../shared/handoff.js';
import COPY from '../shared/copy.json' with { type: 'json' };

const FPS = CUES.fps;
const OUT = fileURLToPath(new URL('../audio/cues.json', import.meta.url));

// Act 06 types the prompt from 66.0 s, 0.025 s per character (compositions/06-workspace.html; tests/sound-cues.test.mjs
// keeps the two in step).
const TYPE_STEP = 0.025;
const STOPDOWN_LEAD = 0.25; // the stop-down opens this long before an impact
const BELL_PITCH = ['A4', 'D5', 'F#5']; // sonic logo: Workspace, Data Enrichment, Enterprise
// Radial curtains open from these x positions (px) at the start of acts 06-09; the pan is x / 960 - 1.
const WIPES = [
  { act: 'act06-workspace', x: HANDOFF.workspace.cx },
  { act: 'act07-enrichment', x: 960 },
  { act: 'act08-enterprise', x: 960 + (1500 - 960) * CAM_END },
  { act: 'act09-reunify', x: 960 },
];
// Picture changes with no cues.json event that earshot's cut detector finds on the film (accents for the whoosh rules
// of audio/design/transitions.json): the sounds that sit on them make 'visual events with a new attack' of the critique.
const abs = (act, bar, beat = 0) => actWindow(act).start + at(act, bar, beat); // the compositions' A(bar, beat) in film seconds
// act 06 (compositions/06-workspace.html): ui.setFocus settles the agent panel over 0.6 s from A(36) - 0.4 with the ease-out
// of GV.since; the accent sits one sixth into that ramp, where the eased change is fastest (69.7 s, where the detector sees it).
const TAKEOVER = abs('act06-workspace', 36) - 0.4 + 0.6 / 6;
// act 08 (compositions/08-enterprise.html): the sector strip clears at flashTo = A(48) + 4 * 2.25 + 0.75; the last 0.3 s fade
// to plain gray starts at A(53, 3) + 0.2.
const CLEARS = [abs('act08-enterprise', 48) + 4 * 2.25 + 0.75, abs('act08-enterprise', 53, 3) + 0.2];
const MATCH_WHOOSH = [12, 34]; // the two match boundaries without a wipe sound of their own (act 02 and act 04 openers)

// Things that do not come from a cues.json event; the test uses this to tell the two apart.
export const EXTRA_THINGS = ['section', 'key', 'wipe', 'riser', 'stopdown', 'match', 'takeover', 'clear'];

// Each cues.json event, by its `what`, becomes one sound event: [pattern, kind, thing, extras].
const RULES = [
  [/^line \d$/, 'pop', 'line'],
  [/^(cities|vegetation) lights? up$/, 'ping', (m) => m[1]],
  [/^constellation$/, 'ping', 'constellation'],
  [/^plate \d lands$/, 'land', 'plate'],
  [/^vortex begins$/, 'whoosh', 'vortex'],
  [/^stop-down veil$/, 'veil', 'veil'], // picture-only dim; no mixer rule matches this kind
  [/^impact: /, 'impact', 'impact', { weight: 1 }],
  [/^hexagon locks$/, 'land', 'hexagon'],
  [/^arrow folds$/, 'step', 'arrow'],
  [/^plates land, mark complete$/, 'land', 'mark', { weight: 1 }],
  [/^(GAL|VIS)$/, 'pop', 'syllable'],
  [/^full name$/, 'pop', 'fullname'],
  [/^sub line$/, 'pop', 'subline'],
  [/^module \w+ active$/, 'ping', 'module'],
  [/^question answered$/, 'pop', 'question'],
  [/^(ONE INTELLIGENCE CORE\.|THREE WAYS TO USE IT\.)$/, 'pop', 'headline'],
  [/^GALVIS (WORKSPACE|DATA ENRICHMENT|ENTERPRISE)$/, 'bell', 'product'],
  [/^left branch chosen/, 'pop', 'branch'],
  [/^(ASK|ANALYZE|VISUALIZE|UNDERSTAND)$/, 'pop', 'word'],
  [/^step \d done$/, 'step', 'step'],
  [/^window collapses/, 'whoosh', 'collapse'],
  [/^title$/, 'pop', 'title'],
  [/^profile row \d+$/, 'pop', 'row'],
  [/^flow step \d$/, 'step', 'flow'],
  [/^positioning line$/, 'pop', 'position'],
  [/^back to the architecture$/, 'whoosh', 'return'],
  [/^plugboard goes dark$/, 'whoosh', 'dark'],
  [/^sector \d$/, 'land', 'sector'],
  [/^flash \d$/, 'ping', 'flash'],
  [/^sector recap$/, 'pop', 'recap'],
  [/room pops at its branch end$/, 'comet', 'comet'],
  [/^architecture complete/, 'land', 'chord', { weight: 1 }],
  [/^map network lights up$/, 'ping', 'network'],
  [/^ONE CORE\.$/, 'pop', 'one'],
  [/^second line$/, 'pop', 'second'],
  [/^sting$/, 'whoosh', 'converge'], // 112.0: the three product lights fly in
  [/^product lights meet, logo lands$/, 'sting', 'logo', { weight: 1 }],
  [/^(FROM LOCATION|TO INTELLIGENCE|TO DECISION)$/, 'pop', 'phrase'],
  [/^tagline$/, 'pop', 'tagline'],
  [/^galvis\.io$/, 'pop', 'url'],
];

const tidy = (x) => Math.round(x * 1e4) / 1e4;
const frame = (t) => tidy(t * FPS);
const actKey = (id) => id.slice(0, 5); // act06-workspace -> act06

export function buildSoundCues() {
  const events = [];
  const count = new Map();
  const add = (act, thing, kind, t, extra = {}) => {
    const key = `${actKey(act)}:${thing}`;
    const n = (count.get(key) ?? 0) + 1;
    count.set(key, n);
    events.push({ f: frame(t), kind, id: `${key}:${n}`, ...extra });
  };
  const actAt = (t) => CUES.acts.find((a) => { const w = actWindow(a.id); return t >= w.start && t < w.end; }).id;

  for (const a of CUES.acts) add(a.id, 'section', 'section', actWindow(a.id).start);

  for (const e of CUES.events) {
    const hit = RULES.map(([re, kind, thing, extra]) => [re.exec(e.what), kind, thing, extra]).find(([m]) => m);
    if (!hit) throw new Error(`no sound rule for cue "${e.what}" at ${e.t} s`);
    const [m, kind, thing, extra] = hit;
    const resolved = typeof thing === 'function' ? thing(m) : thing;
    const ex = { ...extra };
    if (kind === 'bell') ex.pitch = BELL_PITCH[count.get(`${actKey(e.act)}:${resolved}`) ?? 0];
    if (resolved === 'plate') ex.weight = tidy(0.5 + (0.5 * ((count.get(`${actKey(e.act)}:plate`) ?? 0))) / 6);
    add(e.act, resolved, kind, Math.round(e.t * FPS) / FPS, ex); // the picture shows it on this frame
  }

  // Riser -> stop-down -> impact, only at the two impacts.
  for (const i of CUES.impacts) {
    const act = actAt(i.t);
    add(act, 'riser', 'riser.end', i.t);
    add(act, 'stopdown', 'stopdown', i.t - STOPDOWN_LEAD);
  }

  // One key per prompt character.
  const typeFrom = 66.0;
  [...COPY['workspace.prompt']].forEach((_, i) => add('act06-workspace', 'key', 'key', typeFrom + i * TYPE_STEP));

  for (const w of WIPES) add(w.act, 'wipe', 'wipe', actWindow(w.act).start, { pan: tidy(w.x / 960 - 1) });
  for (const t of MATCH_WHOOSH) add(actAt(t), 'match', 'whoosh', t);
  add(actAt(TAKEOVER), 'takeover', 'whoosh', TAKEOVER);
  for (const t of CLEARS) add(actAt(t), 'clear', 'whoosh', t);

  events.sort((a, b) => a.f - b.f || (a.id < b.id ? -1 : 1));
  return { fps: FPS, total: CUES.duration * FPS, events };
}

// One event per line: readable in diffs, byte-stable.
export function serialize(cues) {
  const rows = cues.events.map((e) => `    ${JSON.stringify(e)}`).join(',\n');
  return `{\n  "fps": ${cues.fps},\n  "total": ${cues.total},\n  "events": [\n${rows}\n  ]\n}\n`;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const cues = buildSoundCues();
  mkdirSync(fileURLToPath(new URL('../audio/', import.meta.url)), { recursive: true });
  writeFileSync(OUT, serialize(cues));
  console.log(`audio/cues.json: ${cues.events.length} events`);
}
