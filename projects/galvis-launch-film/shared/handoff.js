// Frames shared across an act boundary, so both sides compute the same place.
// Act 05 pushes its camera from 1.0 to CAM_END about the frame centre; the left branch end then blooms
// into a light disc, which act 06 opens its window from.
export const CAM_END = 1.06;
const END = [420, 820], R = 25;
const pushed = ([x, y]) => [960 + (x - 960) * CAM_END, 540 + (y - 540) * CAM_END];
const [cx, cy] = pushed(END);
export const HANDOFF = { workspace: { cx, cy, r: R * CAM_END } };
