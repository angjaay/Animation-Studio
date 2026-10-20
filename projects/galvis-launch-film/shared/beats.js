// Act-local time from bars and beats (120 BPM: a bar is 2 s, a beat 0.5 s).
import { CUES, actWindow } from './cues.js';

const BEAT = CUES.barSeconds / 4;

export function at(actId, bar, beat = 0) {
  const t = (bar - 1) * CUES.barSeconds + beat * BEAT;
  const w = actWindow(actId);
  if (t < w.start || t > w.end) throw new Error(`bar ${bar} beat ${beat} is outside ${actId}`);
  return t - w.start;
}
