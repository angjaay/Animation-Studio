// Build an act's timeline and always register it, even if building fails, so a missing image
// costs one act its content instead of stalling the render. Overruns are reported: they get cut.
// The build is announced to the runtime as a buildReady hold before the first await, so frames
// are not captured while textures or scenes are still loading. The timeline is in window.__timelines.
export function register(id, build, duration) {
  const done = (async () => {
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
    // Resolve to nothing: a GSAP timeline is a thenable, and returning it would make this promise
    // wait for the paused timeline to finish playing, which never happens.
  })();
  window.__hf = window.__hf || {};
  window.__hf.buildReady = window.__hf.buildReady || {};
  window.__hf.buildReady[id] = done;
  return done;
}
