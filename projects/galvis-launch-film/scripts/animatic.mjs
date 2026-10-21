// Render the animatic: renders/animatic-v1.mp4 and review/animatic-sheet.jpg (draft quality).
// Usage: node scripts/animatic.mjs
process.argv.push('--quality', 'draft', '--name', 'animatic-v1', '--sheet', 'review/animatic-sheet.jpg');
await import('./render.mjs');
