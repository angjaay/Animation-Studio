// Render the animatic and its contact sheet.
// Usage: node scripts/animatic.mjs   →   renders/animatic-v1.mp4, review/animatic-sheet.jpg
import { execFileSync, spawn } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const OUT = 'renders/animatic-v1.mp4';
const SHEET = 'review/animatic-sheet.jpg';
const FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf';

execFileSync('npm', ['run', 'build'], { stdio: 'inherit' });
mkdirSync('renders', { recursive: true });
mkdirSync('review', { recursive: true });
rmSync(OUT, { force: true });

// The render runs in its own process group so a stopped shell cannot take Chrome down with it.
const child = spawn('npx', ['--yes', 'hyperframes@0.8.181', 'render', '--quality', 'draft', '--fps', '30', '--no-browser-gpu', '--output', OUT], {
  stdio: 'inherit',
  detached: true,
  env: { ...process.env, HYPERFRAMES_RENDER_DETACHED: '1' },
});
const code = await new Promise((resolve) => child.on('exit', resolve));
if (code !== 0) throw new Error(`render exited with ${code}`);

// Wait until the file has stopped growing (the encoder may still be flushing).
let last = -1;
for (let i = 0; i < 120; i++) {
  const size = existsSync(OUT) ? statSync(OUT).size : -1;
  if (size > 0 && size === last) break;
  last = size;
  await sleep(1000);
}
if (!existsSync(OUT)) throw new Error(`${OUT} was not written`);

// One frame every 2 s (60 frames: 0, 2, … 118 s), labelled with its time, 6 across.
execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', OUT, '-vf', [
  'fps=1/2:start_time=0',
  'scale=320:180',
  `drawtext=fontfile=${FONT}:text='%{pts\\:hms}':x=6:y=6:fontsize=14:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=3`,
  'tile=6x10:padding=4:color=0x1a1a1a',
].join(','), '-frames:v', '1', '-q:v', '3', SHEET], { stdio: 'inherit' });
console.log(`wrote ${OUT} and ${SHEET}`);
