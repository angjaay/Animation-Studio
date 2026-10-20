// Run a HyperFrames command on a dev page with the project's shared/ and assets/ available.
// Usage: node scripts/devrun.mjs <dev-name> <check|snapshot> [hyperframes args...]
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

// Compositions load the shared/gv.js bundle; rebuild it so edits to shared/ are picked up.
execFileSync('npm', ['run', 'build'], { stdio: 'inherit' });
const [name, ...args] = process.argv.slice(2);
const dir = mkdtempSync(join(tmpdir(), `dev-${name}-`));
copyFileSync(`dev/${name}/index.html`, join(dir, 'index.html'));
symlinkSync(resolve('shared'), join(dir, 'shared'));
symlinkSync(resolve('assets'), join(dir, 'assets'));
console.log(`project: ${dir}`);
execFileSync('npx', ['--yes', 'hyperframes@0.8.181', ...args], { cwd: dir, stdio: 'inherit' });
