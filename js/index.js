// ── NAV SCROLL ──────────────────────────────────────────────────────
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

// ── HAMBURGER ───────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ── SCROLL TO TOP ───────────────────────────────────────────────────
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── FADE IN ON SCROLL ───────────────────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// ── PLAYER FILTER ───────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;
    document.querySelectorAll('.player-card').forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// ── SCHEDULE TABS ───────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    document.getElementById('tab-upcoming').style.display = 'none';
    document.getElementById('tab-past').style.display = 'none';
    document.getElementById('tab-' + this.dataset.tab).style.display = 'flex';
    document.getElementById('tab-' + this.dataset.tab).style.flexDirection = 'column';
  });
});

// ── FORM SUBMIT ──────────────────────────────────────────────────────
function setupForm(formId, successId) {
  document.getElementById(formId).addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Wysyłanie…';
    btn.disabled = true;

    setTimeout(() => {
      this.reset();
      btn.textContent = 'Wyślij zapytanie';
      btn.disabled = false;
      const success = document.getElementById(successId);
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    }, 1200);
  });
}

setupForm('sponsorForm', 'sponsorSuccess');
setupForm('sparringForm', 'sparringSuccess');

// ── Dynamiczny formularz: Sparing / Turniej / Event / Inne ──────────
const SR_CONFIG = {
  sparing: {
    icon: '⚽',
    title: 'Zaproponuj Sparing',
    desc: 'Chcesz zagrać z nami sparing? Zgłoś swoją drużynę — wybierzemy termin i lokalizację, która pasuje obu stronom.',
    teamLabel: 'Nazwa drużyny',
    btn: 'Zgłoś sparing',
  },
  turniej: {
    icon: '🏆',
    title: 'Zaproszenie na Turniej',
    desc: 'Organizujesz turniej i szukasz drużyn do udziału? Zaproś Ekipę Zimnego Lecha — chętnie sprawdzimy się w rywalizacji!',
    teamLabel: 'Nazwa organizatora / klubu',
    btn: 'Wyślij zaproszenie',
  },
  event: {
    icon: '🎉',
    title: 'Zaproszenie na Wydarzenie',
    desc: 'Festiwal, piknik sportowy, event integracyjny? Zaproś naszą drużynę — chętnie weźmiemy udział i wniesiemy dobrą energię!',
    teamLabel: 'Nazwa organizatora',
    btn: 'Wyślij zaproszenie',
  },
  inne: {
    icon: '📋',
    title: 'Zaproponuj Współpracę',
    desc: 'Masz inny pomysł na wspólne wydarzenie lub współpracę? Napisz do nas — chętnie poznamy szczegóły!',
    teamLabel: 'Nazwa organizatora / drużyny',
    btn: 'Wyślij zgłoszenie',
  },
};

const srType   = document.getElementById('sr-type');
const srIcon   = document.getElementById('sr-icon');
const srTitle  = document.getElementById('sr-title');
const srDesc   = document.getElementById('sr-desc');
const srTeamLb = document.getElementById('sr-team-label');
const srBtn    = document.getElementById('sr-submit-btn');
const srFieldsSparing = document.querySelectorAll('.sr-field-sparing');
const srFieldsEvent   = document.querySelectorAll('.sr-field-event');

function applySrType(type) {
  const cfg = SR_CONFIG[type] || SR_CONFIG.sparing;
  srIcon.textContent  = cfg.icon;
  srTitle.textContent = cfg.title;
  srDesc.textContent  = cfg.desc;
  srTeamLb.textContent = cfg.teamLabel;
  srBtn.textContent   = cfg.btn;
  srBtn.dataset.label = cfg.btn;

  const isSparing = type === 'sparing';
  srFieldsSparing.forEach(el => el.style.display = isSparing ? '' : 'none');
  srFieldsEvent.forEach(el   => el.style.display = isSparing ? 'none' : '');
}

if (srType) {
  applySrType(srType.value);
  srType.addEventListener('change', () => applySrType(srType.value));

  document.getElementById('sparringForm').addEventListener('submit', function () {
    const btn = srBtn;
    setTimeout(() => { btn.textContent = btn.dataset.label || 'Wyślij zgłoszenie'; }, 1300);
  });
}
