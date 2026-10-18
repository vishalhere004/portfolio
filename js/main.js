/* ==========================================================================
   Settings – edit these
   ========================================================================== */

// EmailJS (same account the Angular version used).
// The public key is meant to be visible; in the EmailJS dashboard, restrict it
// to your site's domain so nobody else can use it.
const EMAILJS = {
  publicKey: 'hduckhOpvQ7fu_pF5',
  serviceId: 'service_wd2pfac',
  templateId: 'template_w1fgdmc',       // message sent to you
  autoReplyTemplateId: 'template_66mpr3b' // confirmation sent to the visitor
};

// Add or edit projects here. They are rendered into the Projects section.
const PROJECTS = [
  {
    title: 'E-Commerce & Subscription Platform',
    description: 'A large-scale OpenCart store with custom checkout flows, subscription billing and recurring payments.',
    points: [
      'Built custom OpenCart modules, CMS components, invoice generation and Twig-based theme customisations.',
      'Integrated Stripe, Google Pay, Apple Pay and other payment gateways, with webhook handling and automated billing.',
      'Synced orders, inventory, invoices and returns with Zoho Books, Zoho Inventory and logistics providers.',
      'Added custom reports, stock and expiry alerts, GDPR workflows, audit logs and cron-based automation.',
      'Added automatic content translation with the Google Translation API for a multilingual storefront.',
      'Built a location-based ranking and analytics tool (Laravel, Node.js, Express, Playwright) that collects Google Maps search results and reports on them.'
    ],
    tags: ['PHP', 'OpenCart 3', 'MySQL', 'Stripe', 'Zoho Books', 'Zoho Inventory', 'iCarry', 'Google Translate API']
  },
  {
    title: 'Field Data Collection & Water Conservation Platform',
    description: 'A mobile app and backend for an NGO running water conservation and community outreach programmes across multiple regions of India.',
    points: [
      'Designed an offline-first app with local storage, caching and automatic sync once the connection returns.',
      'Built the CodeIgniter 3 backend: APIs and workflows for 100+ interconnected data-collection forms and hierarchical business processes.',
      'Integrated camera, file management, network monitoring, permissions, downloads and SMS sign-in with DLT-compliant messaging.'
    ],
    tags: ['Ionic', 'Angular', 'Cordova', 'CodeIgniter 3', 'MySQL', 'REST APIs']
  },
  {
    title: 'HRMS & Client Collaboration Platform',
    description: 'Modules for client collaboration and HR workflows, on web and mobile.',
    points: [
      'Built message boards, file management, task tracking, notifications and communication workflows.',
      'Added real-time communication with WebSockets, and APIs that serve web and mobile clients.',
      'Designed Full & Final (FNF) clearance workflows with parallel and sequential approvals across HR, IT and reporting managers.'
    ],
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'REST APIs', 'WebSockets']
  },
  {
    title: 'Chrome Ad Blocker Extension',
    description: 'A personal project: a Chrome extension that blocks ads across web pages, improving page load speed and reducing distractions.',
    tags: ['JavaScript', 'Chrome APIs'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/vishalhere004/add-blocker.git' }]
  }
];

/* ==========================================================================
   Helpers
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- Year ---------- */
$('#year').textContent = new Date().getFullYear();

/* ---------- Theme toggle ---------- */
(function theme() {
  const root = document.documentElement;
  const btn = $('#theme');
  const isDark = () =>
    root.getAttribute('data-theme') === 'dark' ||
    (!root.hasAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);

  const sync = () => {
    btn.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = isDark() ? '#0B111E' : '#EDF0F3';
  };
  sync();

  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
})();

/* ---------- Mobile menu ---------- */
(function menu() {
  const btn = $('#menu');
  const nav = $('#nav');
  const close = () => {
    nav.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
  };
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  matchMedia('(min-width: 861px)').addEventListener('change', close);
})();

/* ---------- Highlight the current section in the nav ---------- */
(function spy() {
  const links = $$('.nav a');
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(a => a.removeAttribute('aria-current'));
      const a = map.get(en.target.id);
      if (a) a.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();

/* ---------- Projects ---------- */
(function projects() {
  const list = $('#project-list');
  if (!list || !PROJECTS.length) return;
  list.textContent = '';
  PROJECTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project';

    const h = document.createElement('h3');
    h.textContent = p.title;
    card.appendChild(h);

    const d = document.createElement('p');
    d.textContent = p.description;
    card.appendChild(d);

    if (p.points && p.points.length) {
      const ul = document.createElement('ul');
      ul.className = 'ticks';
      p.points.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
      card.appendChild(ul);
    }

    if (p.tags && p.tags.length) {
      const ul = document.createElement('ul');
      ul.className = 'chips';
      p.tags.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
      card.appendChild(ul);
    }
    (p.links || []).forEach(l => {
      const a = document.createElement('a');
      a.className = 'link';
      a.href = l.href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = l.label;
      card.appendChild(a);
    });
    list.appendChild(card);
  });
})();

/* ---------- Copy email ---------- */
(function copy() {
  const btn = $('#copy');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied';
    } catch (e) {
      btn.textContent = 'Press Ctrl+C to copy';
      const range = document.createRange();
      range.selectNodeContents(btn.previousElementSibling);
      const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
    }
    setTimeout(() => { btn.textContent = 'Copy address'; }, 2200);
  });
})();

/* ---------- Contact form ---------- */
(function contact() {
  const form = $('#contact-form');
  const status = $('#status');
  const sendBtn = $('#send');

  // Same rules as the Angular version, with a more forgiving email check.
  const rules = {
    name: v =>
      !v.trim() ? 'Enter your name.' :
      v.trim().length < 3 ? 'Use at least 3 characters.' :
      !/^[A-Za-z ]+$/.test(v.trim()) ? 'Use letters and spaces only.' : '',
    email: v =>
      !v.trim() ? 'Enter your email address.' :
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Enter a valid email, like name@example.com.' : '',
    message: v =>
      !v.trim() ? 'Write a message.' :
      v.trim().length < 10 ? 'Use at least 10 characters.' : ''
  };

  const check = id => {
    const input = document.getElementById(id);
    const msg = rules[id](input.value);
    $('#' + id + '-err').textContent = msg;
    input.closest('.field').classList.toggle('has-error', !!msg);
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  };

  Object.keys(rules).forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('blur', () => check(id));
    input.addEventListener('input', () => { if (input.closest('.field').classList.contains('has-error')) check(id); });
  });

  const setStatus = (text, kind) => {
    status.textContent = text;
    status.className = 'status' + (kind ? ' is-' + kind : '');
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    setStatus('', '');

    const results = Object.keys(rules).map(check);
    if (results.includes(false)) {
      const firstBad = Object.keys(rules).find(id => !check(id));
      if (firstBad) document.getElementById(firstBad).focus();
      return;
    }
    if (form.website && form.website.value) return; // honeypot caught a bot

    if (typeof emailjs === 'undefined') {
      setStatus('The mail service did not load. Check your connection, or email me directly.', 'bad');
      return;
    }

    const data = {
      user_name: form.user_name.value.trim(),
      user_email: form.user_email.value.trim(),
      message: form.message.value.trim()
    };

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending…';
    try {
      emailjs.init({ publicKey: EMAILJS.publicKey });
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, data);
      // The auto-reply is a courtesy; if it fails the message still reached me.
      emailjs.send(EMAILJS.serviceId, EMAILJS.autoReplyTemplateId, data).catch(() => {});
      form.reset();
      $$('.field', form).forEach(f => f.classList.remove('has-error'));
      setStatus('Message sent. Check your inbox for a confirmation.', 'ok');
    } catch (err) {
      setStatus('Message not sent. Try again, or email vishalpahadi4287@gmail.com.', 'bad');
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send message';
    }
  });
})();
