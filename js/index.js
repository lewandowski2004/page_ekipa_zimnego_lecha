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

// Fix sparring button text
document.querySelector('#sparringForm button[type="submit"]').textContent = 'Zgłoś sparing';
document.getElementById('sparringForm').addEventListener('submit', function(e) {
  const btn = this.querySelector('button[type="submit"]');
  setTimeout(() => { btn.textContent = 'Zgłoś sparing'; }, 1300);
});
