import { GREET_STEP } from './config.js';

const root = document.documentElement, calm = matchMedia('(prefers-reduced-motion: reduce)');

// A reload restores the old scroll over the #hash: go to the anchor, like a new tab.
if (location.hash) {
  history.scrollRestoration = 'manual';
  addEventListener('load', () => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'instant' }));
}

// The saved theme is applied in <head>, before first paint.
document.getElementById('theme').addEventListener('click', () => {
  const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = cur === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('rt-theme', next); } catch {}
});

// The header turns compact (hairline; phones: the name scales down to the 56px bar) once the big name is 55% under it.
const hdr = document.getElementById('hdr'), title = document.querySelector('.hero h1');
let ticking = false;
function update() {
  ticking = false;
  const r = title.getBoundingClientRect();
  hdr.classList.toggle('compact', r.top + r.height * 0.55 < hdr.offsetHeight);
}
document.addEventListener('scroll', () => { // capture: fires for the document and for the body scroller alike
  if (!ticking) { ticking = true; requestAnimationFrame(update); }
}, { capture: true, passive: true });
addEventListener('resize', update);
update();

// Hero corner: the local time in Luxembourg, to the minute (where he is, and when it is there).
const clock = document.getElementById('clock');
const tick = () => { const now = new Date(); clock.dateTime = now.toISOString(); clock.textContent = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Luxembourg', hour: '2-digit', minute: '2-digit' }); };
tick(); setInterval(tick, 15000);

// Contact: the greetings take turns, one every GREET_STEP ms, and the row says "I speak" / "Download CV" in that language
// (the labels fade between two). Hovering a greeting picks it and holds the turn until the pointer leaves the row.
const speak = document.querySelector('.hello-tag'), cv = document.querySelector('.contact-links [data-i18n="contact.cv"]');
const greets = [...document.querySelectorAll('.greet [data-speak]')], greet = document.querySelector('.greet');
let turn = 0, timer, held = false, shown = false;
// Each label holds its word in a span; on a change the old word fades up and out while the new one fades in from below (CSS).
const setWord = (el, text) => { el.dataset.word = text; el.replaceChildren(Object.assign(document.createElement('span'), { className: 'now', textContent: text })); };
const morph = (el, text) => {
  if (el.dataset.word === text) return;
  const was = el.querySelector('.now'); el.dataset.word = text;
  if (was) { was.className = 'was'; setTimeout(() => was.remove(), 600); }
  el.querySelectorAll('.was').forEach((w, i, all) => i < all.length - 1 && w.remove()); // a fast hover: one fading word at most
  el.append(Object.assign(document.createElement('span'), { className: 'now', textContent: text }));
};
for (const el of [speak, cv]) setWord(el, el.textContent);
const say = (g) => {
  greets.forEach((x) => x.classList.toggle('on', x === g));
  greet.classList.add('live');
  for (const [el, text] of [[speak, g.dataset.speak], [cv, g.dataset.cv]]) { el.lang = g.lang; morph(el, text); }
};
const rotate = () => { clearTimeout(timer); if (shown && !held && !calm.matches) timer = setTimeout(() => { turn = (turn + 1) % greets.length; say(greets[turn]); rotate(); }, GREET_STEP); };
greets.forEach((g, i) => g.addEventListener('mouseenter', () => { held = true; clearTimeout(timer); turn = i; say(g); }));
greet.addEventListener('mouseleave', () => { held = false; rotate(); });
new IntersectionObserver(([e]) => { shown = e.isIntersecting; rotate(); }).observe(greet);
// The button keeps the widest label's width, so the row never reflows under the pointer.
const fit = () => {
  const pill = cv.parentElement, word = cv.dataset.word;
  pill.style.minWidth = '';
  pill.style.minWidth = `${Math.max(...greets.map((g) => { setWord(cv, g.dataset.cv); return pill.offsetWidth; }))}px`;
  setWord(cv, word);
};
fit();
document.fonts.ready.then(fit);
addEventListener('resize', fit);

const phone = matchMedia('(max-width: 560px)');
// Contact: the e-mail copies itself and the page says so for a moment.
const EMAIL = 'contact@ronantremoureux.fr', contact = document.getElementById('contact');
let copiedTimer;
document.querySelector('.email').addEventListener('click', async (e) => {
  e.preventDefault();
  try { await navigator.clipboard.writeText(EMAIL); } catch { location.href = `mailto:${EMAIL}`; return; } // no clipboard here: the mail client instead
  contact.classList.add('copied'); clearTimeout(copiedTimer); copiedTimer = setTimeout(() => contact.classList.remove('copied'), 1600);
});

// Phones: a vertical swipe on a section goes one section, however short (CSS snap alone springs a short swipe back).
if (phone.matches) {
  const body = document.body, pages = [...document.querySelectorAll('.hero, main .block, footer')];
  const at = (el) => el.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop - hdr.offsetHeight;
  let x0 = 0, y0 = 0, paged = false;
  body.addEventListener('touchstart', (e) => {
    const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY;
    paged = !!e.target.closest('.hero, .block, footer'); // not in the menu or the dock
  }, { passive: true });
  body.addEventListener('touchend', (e) => {
    if (!paged) return;
    const t = e.changedTouches[0], dx = t.clientX - x0, dy = y0 - t.clientY;
    if (Math.abs(dy) < 20 || Math.abs(dy) < Math.abs(dx)) return; // a tap, or a sideways swipe
    const cur = body.scrollTop, tops = pages.map(at), view = body.clientHeight - hdr.offsetHeight;
    const i = tops.reduce((b, top, k) => (Math.abs(top - cur) < Math.abs(tops[b] - cur) ? k : b), 0);
    // A section taller than the screen (a list with a row open) is read in equal steps before moving on, the last one stopping a
    // header short of its end (WebKit's snap refuses the exact end and throws the page to a neighbour). Overflow that is only
    // bottom padding is no step at all: a swipe that moves a few px looks like nothing happened.
    const end = (p) => { const over = pages[p].offsetHeight - view; return tops[p] + (over <= parseFloat(getComputedStyle(pages[p]).paddingBottom) ? 0 : over - hdr.offsetHeight); }; // its last screen
    const k = tops.findLastIndex((top) => top <= cur + 4), last = end(k), inside = cur > tops[k] + 4 && cur <= last + 4;
    const step = (last - tops[k]) / Math.max(1, Math.ceil((last - tops[k]) / (view * 0.85)));
    const p = inside ? k : i; // within a tall section the next page is its own, not the nearest title's
    let target = dy > 0 ? (p + 1 < pages.length ? tops[p + 1] : body.scrollHeight) : end(Math.max(0, p - 1)); // back up into a tall section: its last screen
    if (dy > 0 && cur < last - 4) target = Math.min(last, cur + step);
    else if (dy < 0 && inside) target = Math.max(tops[k], cur - step);
    body.scrollTo({ top: target, behavior: calm.matches ? 'instant' : 'smooth' });
  }, { passive: true });
}

// Phones: the dock's "Get in touch" steps aside while the contact section fills the screen.
new IntersectionObserver(([e]) => root.classList.toggle('at-contact', e.isIntersecting), { rootMargin: '-45% 0px -45% 0px' }).observe(contact);

// No popover API (Chromium <114: Samsung Internet ≤22, Firefox <125): the buttons toggle .open and the CSS draws it (@supports not selector(:popover-open)).
if (!('showPopover' in HTMLElement.prototype)) {
  HTMLElement.prototype.showPopover = function () { this.classList.add('open'); };
  HTMLElement.prototype.hidePopover = function () { this.classList.remove('open'); };
  for (const b of document.querySelectorAll('[popovertarget]')) b.addEventListener('click', () => {
    const p = document.getElementById(b.getAttribute('popovertarget'));
    p.classList.contains('open') || b.getAttribute('popovertargetaction') === 'hide' ? p.hidePopover() : p.showPopover();
  });
}
const menu = document.getElementById('menu');
menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.hidePopover(); });

// Phones and tablets: each title becomes a button. Rows and skill groups fold to their titles, one open per list (CSS hides the
// rest while the button says collapsed); a project opens in the view centred on the screen (#projectView), its text hidden in the list.
const narrow = matchMedia('(max-width: 900px)'), view = document.getElementById('projectView');
const showProject = (card) => {
  card.classList.add('visited'); // remembered for this page load only: the list shows it lighter (CSS)
  view.querySelector('.card-tag').textContent = card.querySelector('.card-tag').textContent;
  view.querySelector('h3').textContent = card.querySelector('h3').textContent;
  view.querySelector('.project-text').innerHTML = card.querySelector('p').innerHTML;
  view.querySelector('.card-links').innerHTML = card.querySelector('.card-links')?.innerHTML ?? '';
  view.showPopover();
};
view.addEventListener('click', () => view.hidePopover()); // a tap anywhere on the page closes it, text included, like Escape (a link still opens first)
const fold = () => {
  for (const h of document.querySelectorAll('.cap h3, .card h3, .group h3')) {
    const was = h.querySelector('button'), card = h.closest('.card');
    if (narrow.matches && !was) {
      const btn = Object.assign(document.createElement('button'), { type: 'button' });
      btn.append(...h.childNodes); h.append(btn);
      if (card) { btn.setAttribute('aria-haspopup', 'dialog'); btn.addEventListener('click', () => showProject(card)); continue; }
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', () => { // one open per list: opening one closes the others
        const open = btn.getAttribute('aria-expanded') === 'false';
        if (open) for (const b of h.closest('.caps, .groups').querySelectorAll('h3 > button[aria-expanded="true"]')) b.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-expanded', open);
      });
    } else if (!narrow.matches && was) was.replaceWith(...was.childNodes); // back to the desktop markup
  }
};
fold(); narrow.addEventListener('change', fold);

// Footer line: an item that wrapped onto a new line loses its leading dot.
const meta = document.querySelector('footer .meta');
new ResizeObserver(() => {
  for (const li of meta.children) li.classList.toggle('line-start', li.offsetTop > (li.previousElementSibling?.offsetTop ?? li.offsetTop));
}).observe(meta);
