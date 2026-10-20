// Small location label chip that sits on maps.
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function renderLabel(host, { title, subtitle }) {
  const chip = document.createElement('div');
  chip.className = 'gv-label';
  chip.innerHTML = `<b>${esc(title)}</b>${subtitle ? `<span>${esc(subtitle)}</span>` : ''}`;
  host.replaceChildren(chip);
  return chip;
}
