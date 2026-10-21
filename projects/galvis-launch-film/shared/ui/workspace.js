// Reconstructed GALVIS Workspace window (movee-fe layout, simplified, English copy).
import wordmark from '../../assets/logo/galvis-wordmark-dark.svg';
import mascot from '../../assets/logo/agent-avatar.svg';
import { scopeIds } from '../svg-scope.js';

const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function layerRow(l) {
  const row = el('div', `gv-layer${l.flash ? ' flash' : ''}`);
  row.append(el('i', `gv-glyph ${l.glyph}`), el('span', 'gv-name', esc(l.name)));
  if (l.active) row.append(el('i', 'gv-eye'));
  return row;
}

function paintStep(row, s, i) {
  row.className = `gv-step ${s.status}`;
  row.replaceChildren(el('span', 'gv-dot', s.status === 'done' ? '' : String(i + 1)), el('span', '', esc(s.label)));
  if (s.status === 'done') row.append(el('span', 'gv-badge', 'Done'));
  if (s.status === 'running') row.append(el('span', 'gv-running', 'running…'));
}

function stepRow(s, i) {
  const row = el('div');
  paintStep(row, s, i);
  return row;
}

// Returns handles so a timeline can drive the UI from time: steps, typed prompt, layer flash, insight.
// `prefix` scopes the SVG ids inside, so two instances never share gradient ids.
export function renderWorkspace(host, state, { prefix = '' } = {}) {
  const win = el('div', 'gv-window');

  const top = el('div', 'gv-topbar');
  top.append(
    el('span', 'gv-wordmark', scopeIds(wordmark, prefix && `${prefix}-wm`)),
    el('i', 'gv-sep'),
    el('span', 'gv-platform', esc(state.platform ?? state.region)),
    el('span', 'gv-spacer'),
    el('span', 'gv-pill', 'Report'),
    el('i', 'gv-avatar'),
  );

  const left = el('div', 'gv-left');
  left.append(el('h4', '', 'Layers'), el('div', 'gv-region', esc(state.region)));
  const layerRows = state.layers.map((l) => left.appendChild(layerRow(l)));

  const map = el('div', 'gv-map');
  if (state.map instanceof HTMLElement) map.append(state.map);
  else if (state.map) map.innerHTML = state.map;

  let card = null;
  const bars = [];
  if (state.insight) {
    card = el('div', 'gv-insight');
    card.append(el('h5', '', esc(state.insight.title)));
    for (const b of state.insight.bars) {
      const row = el('div', 'gv-bar');
      row.append(el('span', '', esc(b.label)), el('i'), el('em', '', `${Math.round(b.value * 100)}%`));
      row.querySelector('i').style.width = `${Math.round(b.value * 100)}%`;
      bars.push({ fill: row.querySelector('i'), value: b.value });
      card.append(row);
    }
    map.append(card);
  }

  const toolbar = el('div', 'gv-toolbar');
  for (const t of ['Select', 'Draw', 'Measure']) toolbar.append(el('span', '', t));
  toolbar.append(el('span', 'gv-ai', 'Galvis AI'));
  map.append(toolbar);

  const agent = el('div', 'gv-agent');
  const head = el('div', 'gv-agent-head');
  head.append(el('span', 'gv-mascot', scopeIds(mascot, prefix && `${prefix}-ag`)), el('b', '', 'GALVIS Agent'));
  const tabs = el('div', 'gv-tabs', '<span class="on">Conversation</span><span>History</span>');
  const plan = el('div', 'gv-plan');
  const paintPlan = () => {
    const done = state.steps.filter((s) => s.status === 'done').length;
    plan.innerHTML = `<b>Plan</b><span>${state.steps.length} steps · ${done} of ${state.steps.length} done</span>`;
  };
  paintPlan();
  const steps = el('div', 'gv-steps');
  const stepRows = state.steps.map((s, i) => steps.appendChild(stepRow(s, i)));
  const bubble = el('div', 'gv-bubble', esc(state.prompt));
  agent.append(head, tabs, bubble, plan, steps);
  map.append(agent);

  const body = el('div', 'gv-body');
  body.append(left, map);
  win.append(top, body);
  host.replaceChildren(win);

  // Every handle takes k, the eased progress (0..1) of the change, so the timeline can animate
  // state changes from time (movee-fe: 180 ms, cubic-bezier(.2,0,0,1)) instead of snapping.
  return {
    win,
    setStep(i, status, k = 1) {
      if (state.steps[i].status !== status) {
        state.steps[i].status = status;
        paintStep(stepRows[i], state.steps[i], i);
        paintPlan();
      }
      const row = stepRows[i];
      row.style.transform = status === 'pending' ? '' : `scale(${(0.94 + 0.06 * k).toFixed(4)})`;
      row.style.backgroundColor = status === 'done' ? `rgba(31,175,161,${(0.45 * (1 - k)).toFixed(3)})` : '';
      const badge = row.querySelector('.gv-badge');
      if (badge) { badge.style.opacity = k.toFixed(3); badge.style.transform = `scale(${(0.6 + 0.4 * k).toFixed(3)})`; }
    },
    // The agent panel lifts toward the viewer (k 0..1: scale 1 → 1.2 about its bottom-right corner) so its
    // plan reads; the dithered map behind it is never scaled.
    setFocus(k) {
      agent.style.transformOrigin = '100% 100%';
      agent.style.transform = k > 0 ? `scale(${(1 + 0.2 * k).toFixed(4)})` : '';
      agent.style.boxShadow = `0 ${(18 + 22 * k).toFixed(1)}px ${(60 + 60 * k).toFixed(1)}px rgba(3,39,80,${(0.14 + 0.16 * k).toFixed(3)})`;
    },
    setTyped(n) {
      bubble.textContent = state.prompt.slice(0, n);
      bubble.style.visibility = n > 0 ? 'visible' : 'hidden';
    },
    flashLayer(i, k) {
      layerRows[i].classList.remove('flash');
      layerRows[i].style.backgroundColor = k > 0 ? `rgba(2,74,188,${(0.16 * k).toFixed(3)})` : '';
    },
    setInsight(k) {
      if (!card) return;
      card.style.opacity = k.toFixed(3);
      card.style.transform = `translateY(${(16 * (1 - k)).toFixed(2)}px)`;
      for (const b of bars) b.fill.style.width = `${(b.value * 100 * k).toFixed(2)}%`;
    },
  };
}
