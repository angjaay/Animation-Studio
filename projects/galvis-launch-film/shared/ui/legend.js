// Map legend card (gradient or categorical), styled like the Workspace UI.
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function renderLegend(host, { title, kind, stops }) {
  const card = document.createElement('div');
  card.className = 'gv-legend';
  let html = `<h5>${esc(title)}</h5>`;
  if (kind === 'gradient') {
    const first = stops[0].label ?? '';
    const last = stops[stops.length - 1].label ?? '';
    html += `<div class="gv-ramp" style="background:linear-gradient(90deg,${stops.map((s) => s.color).join(',')})"></div>`;
    html += `<div class="gv-ends"><span>${esc(first)}</span><span>${esc(last)}</span></div>`;
  } else {
    html += stops.map((s) => `<div class="gv-cat"><i style="background:${s.color}"></i>${esc(s.label ?? '')}</div>`).join('');
  }
  card.innerHTML = html;
  host.replaceChildren(card);
  return card;
}
