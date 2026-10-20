import CUES from '../cues.json' with { type: 'json' };

export { CUES };
export const ACTS = CUES.acts;
export const IMPACTS = CUES.impacts;
export const DURATION = CUES.duration;

export function barStart(n) {
  return (n - 1) * CUES.barSeconds;
}

export function actWindow(id) {
  const act = ACTS.find((a) => a.id === id);
  if (!act) throw new Error(`unknown act: ${id}`);
  const start = barStart(act.bars[0]);
  const end = barStart(act.bars[1] + 1);
  return { start, end, duration: end - start };
}
