// ─── State ──────────────────────────────────────────────────────────────────
let currentSection = 'overview';
let chatOpen = false;

// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  navigateTo('overview');
  loadChecklists();

  document.querySelectorAll('.nav-group').forEach(g => {
    if (g.querySelector('.nav-item.active')) g.classList.add('open');
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});

// ─── Navigation ──────────────────────────────────────────────────────────────
function buildNav() {
  const tree = document.getElementById('navTree');
  tree.innerHTML = '';

  NAV.forEach(item => {
    if (item.top) {
      const el = document.createElement('div');
      el.className = 'nav-item nav-item-top';
      el.id = 'nav-' + item.id;
      el.textContent = (item.icon ? item.icon + ' ' : '') + item.title;
      el.onclick = () => navigateTo(item.id);
      tree.appendChild(el);
    } else if (item.children) {
      const group = document.createElement('div');
      group.className = 'nav-group';
      group.id = 'grp-' + item.id;

      const label = document.createElement('div');
      label.className = 'nav-group-label';
      label.innerHTML = `${item.label}<span class="nav-group-arrow">▶</span>`;
      label.onclick = () => group.classList.toggle('open');
      group.appendChild(label);

      const children = document.createElement('div');
      children.className = 'nav-group-children';
      item.children.forEach(child => {
        const el = document.createElement('div');
        el.className = 'nav-item';
        el.id = 'nav-' + child.id;
        el.textContent = child.title;
        el.onclick = () => navigateTo(child.id);
        children.appendChild(el);
      });

      group.appendChild(children);
      tree.appendChild(group);
    }
  });
}

function navigateTo(id) {
  if (!SECTIONS[id]) return;

  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById('nav-' + id);
  if (navEl) {
    navEl.classList.add('active');
    const group = navEl.closest('.nav-group');
    if (group) group.classList.add('open');
  }

  currentSection = id;
  const title = getSectionTitle(id);
  document.getElementById('breadcrumb').textContent = title;
  document.getElementById('chatContext').textContent = 'Context: ' + title;

  const area = document.getElementById('contentArea');
  area.innerHTML = SECTIONS[id] + buildAIPromptsBar(id);
  area.scrollTop = 0;

  loadChecklists();
  updateQuickPrompts(id);
  closeSidebar();
}

function getSectionTitle(id) {
  for (const item of NAV) {
    if (item.id === id) return item.title;
    if (item.children) {
      for (const child of item.children) {
        if (child.id === id) return child.title;
      }
    }
  }
  return id;
}

function buildAIPromptsBar(id) {
  const prompts = SECTION_PROMPTS[id];
  if (!prompts) return '';
  const chips = prompts.map(p =>
    `<button class="ai-chip" onclick="askFromSection(${JSON.stringify(p)})">${p}</button>`
  ).join('');
  return `<div class="ai-prompts-bar">
    <div class="ai-prompts-title">💬 Ask Claude about this section</div>
    <div class="ai-prompts-chips">${chips}</div>
  </div>`;
}

function askFromSection(prompt) {
  openChat();
  setTimeout(() => {
    document.getElementById('chatInput').value = prompt;
    sendMessage();
  }, 300);
}

// ─── CiP Cards ────────────────────────────────────────────────────────────────
function toggleCip(id) {
  const card = document.getElementById(id);
  if (card) card.classList.toggle('open');
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────
function switchTab(groupId, tabId) {
  document.querySelectorAll(`[data-tabgroup="${groupId}"]`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tabid === tabId);
  });
  document.querySelectorAll(`[data-panelgroup="${groupId}"]`).forEach(pane => {
    pane.classList.toggle('active', pane.dataset.panelid === tabId);
  });
  updateChecklistProgress(tabId);
}

function updateChecklistProgress(paneId) {
  const container = document.getElementById('progress-' + paneId);
  if (!container) return;
  const checkboxes = document.querySelectorAll('#pane-' + paneId + ' input[type="checkbox"]');
  const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
  const total = checkboxes.length;
  const pct = total > 0 ? Math.round(checked / total * 100) : 0;
  container.innerHTML = `<div class="cl-progress">
    <span class="cl-progress-label">ARCP Readiness:</span>
    <div class="cl-progress-bar-wrap"><div class="cl-progress-bar" style="width:${pct}%"></div></div>
    <span class="cl-progress-count">${checked}/${total}</span>
    <span class="cl-progress-pct">${pct}%</span>
  </div>`;
}

// ─── Checklists (localStorage — persists offline, on this device) ───────────
function loadChecklists() {
  const saved = JSON.parse(localStorage.getItem('cg-checklists') || '{}');
  document.querySelectorAll('.checklist input[type="checkbox"]').forEach(cb => {
    if (saved[cb.id]) {
      cb.checked = true;
      cb.closest('li').classList.add('done');
    }
    cb.addEventListener('change', function () {
      const data = JSON.parse(localStorage.getItem('cg-checklists') || '{}');
      data[this.id] = this.checked;
      localStorage.setItem('cg-checklists', JSON.stringify(data));
      this.closest('li').classList.toggle('done', this.checked);
      const pane = this.closest('[data-panelid]');
      if (pane) updateChecklistProgress(pane.dataset.panelid);
    });
  });

  document.querySelectorAll('.tab-pane.active[data-panelid]').forEach(pane => {
    updateChecklistProgress(pane.dataset.panelid);
  });
}

// ─── Sidebar (mobile) ─────────────────────────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// ─── "Ask Claude" Panel ───────────────────────────────────────────────────────
// This build has no server and no embedded API key, so it can't stream AI
// replies itself. Instead, sending a message copies your question (with the
// section context) to the clipboard and opens claude.ai in a new tab, ready
// to paste. This only needs internet at the moment you actually ask — the
// rest of CardioGuide (all content, checklists, guidelines) works fully offline.
function toggleChat() {
  chatOpen ? closeChat() : openChat();
}

function openChat() {
  chatOpen = true;
  document.getElementById('chatPanel').classList.add('open');
  document.body.classList.add('chat-open');
  updateQuickPrompts(currentSection);
  setTimeout(() => document.getElementById('chatInput').focus(), 300);
}

function closeChat() {
  chatOpen = false;
  document.getElementById('chatPanel').classList.remove('open');
  document.body.classList.remove('chat-open');
}

function updateQuickPrompts(sectionId) {
  const container = document.getElementById('quickPrompts');
  const prompts = SECTION_PROMPTS[sectionId] || [];
  container.innerHTML = prompts.map(p =>
    `<button class="qp-chip" onclick="useQuickPrompt(${JSON.stringify(p)})">${p}</button>`
  ).join('');
}

function useQuickPrompt(text) {
  document.getElementById('chatInput').value = text;
  sendMessage();
}

function clearChat() {
  const container = document.getElementById('chatMessages');
  container.innerHTML = `<div class="chat-welcome">
    <div class="chat-welcome-icon">♥</div>
    <div class="chat-welcome-title">Ask Claude</div>
    <div class="chat-welcome-text">Type a question below (or tap a suggested prompt). It'll be copied to your clipboard and Claude will open in a new tab, ready to paste — no server or API key needed on this device.</div>
  </div>`;
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.style.height = 'auto';

  appendMessage('user', text);

  const sectionTitle = getSectionTitle(currentSection);
  const fullPrompt = `I'm a UK cardiology ST4 trainee. Context: ${sectionTitle}.\n\n${text}`;

  let copied = false;
  try {
    await navigator.clipboard.writeText(fullPrompt);
    copied = true;
  } catch (_) {
    copied = false;
  }

  if (navigator.onLine === false) {
    appendMessage('ai', "You're offline right now, so I can't open Claude. " +
      (copied ? "Your question is copied — paste it into Claude once you're back online." : "Reconnect and try again."));
    return;
  }

  window.open('https://claude.ai/new', '_blank');
  appendMessage('ai', copied
    ? 'Copied to your clipboard and opened Claude in a new tab — paste (⌘V / Ctrl+V) into the chat box there to continue.'
    : "Opened Claude in a new tab. Clipboard copy didn't work in this browser, so you'll need to retype your question there: \n\n" + fullPrompt);
}

function appendMessage(role, text) {
  const container = document.getElementById('chatMessages');
  const welcome = container.querySelector('.chat-welcome');
  if (welcome) welcome.remove();

  const div = document.createElement('div');
  div.className = `msg ${role}`;
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.textContent = text;

  div.appendChild(bubble);
  container.appendChild(div);
  scrollChatToBottom();
  return div;
}

function scrollChatToBottom() {
  const container = document.getElementById('chatMessages');
  container.scrollTop = container.scrollHeight;
}
