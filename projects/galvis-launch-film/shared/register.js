// Build an act's timeline and always register it, even if building fails, so a missing image
// costs one act its content instead of stalling the render. Overruns are reported: they get cut.
export async function register(id, build, duration) {
  const tl = gsap.timeline({ paused: true });
  try {
    await build(tl);
  } catch (err) {
    console.error(`[galvis] ${id} failed to build: ${err && err.message ? err.message : err}`);
  }
  if (tl.duration() > duration + 1e-3) {
    console.error(`[galvis] ${id} timeline overruns act: ${tl.duration().toFixed(3)} s > ${duration} s`);
  }
  tl.set({}, {}, duration);
  window.__timelines[id] = tl;
  return tl;
}
