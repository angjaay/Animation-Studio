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
  if (state.insight) {
    card = el('div', 'gv-insight');
    card.append(el('h5', '', esc(state.insight.title)));
    for (const b of state.insight.bars) {
      const row = el('div', 'gv-bar');
      row.append(el('span', '', esc(b.label)), el('i'), el('em', '', `${Math.round(b.value * 100)}%`));
      row.querySelector('i').style.width = `${Math.round(b.value * 100)}%`;
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

  return {
    win,
    setStep(i, status) {
      if (state.steps[i].status === status) return;
      state.steps[i].status = status;
      paintStep(stepRows[i], state.steps[i], i);
      paintPlan();
    },
    setTyped(n) {
      bubble.textContent = state.prompt.slice(0, n);
      bubble.style.visibility = n > 0 ? 'visible' : 'hidden';
    },
    flashLayer(i, on) {
      layerRows[i].classList.toggle('flash', on);
    },
    setInsight(visible) {
      if (card) card.style.opacity = visible ? '1' : '0';
    },
  };
}
