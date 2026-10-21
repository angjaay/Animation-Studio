// Finds English phrases written straight into a composition instead of coming from GV.COPY.
const PHRASE = /[A-Za-z]{2,}(\s+[A-Za-z&/]{2,})+/;
const NOT_COPY = /[{}$<>=;#()]|GV\.|\bcopy\b|^(JetBrains Mono|Plus Jakarta Sans|Mulish)$/;

// Remove ${...} interpolations (balanced, so nested calls and strings inside them go too).
function stripInterpolations(s) {
  let out = '', i = 0;
  while (i < s.length) {
    if (s[i] === '$' && s[i + 1] === '{') {
      let depth = 1;
      i += 2;
      while (i < s.length && depth) { if (s[i] === '{') depth++; else if (s[i] === '}') depth--; i++; }
      out += '\u0000';
    } else out += s[i++];
  }
  return out.split('\u0000');
}

function visibleStrings(html) {
  const body = html
    .replace(/<style>[\s\S]*?<\/style>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const SCRIPT = /<script\b[^>]*>([\s\S]*?)<\/script>/g;
  const text = [...body.replace(SCRIPT, '').matchAll(/>([^<]+)</g)].map((m) => m[1]);
  const scripts = [...body.matchAll(SCRIPT)].map((m) => m[1].replace(/(^|[^:'"`])\/\/[^\n]*/g, '$1')).join('\n');
  const literals = [...scripts.matchAll(/'([^'\n]*)'|"([^"\n]*)"|`([^`]*)`/g)]
    .flatMap((m) => (m[3] !== undefined ? stripInterpolations(m[3]) : [m[1] ?? m[2]]));
  return [...text, ...literals].map((s) => s.trim()).filter(Boolean);
}

export function offenders(html) {
  return visibleStrings(html).filter((s) => PHRASE.test(s) && !NOT_COPY.test(s));
}
