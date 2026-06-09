// ═══════════════════════════════════════════════════════════════════
//  GALERIA — dodaj / usuń / edytuj zdjęcia tutaj
//  Każde zdjęcie to obiekt: { src, caption, date }
//  src  — ścieżka względem głównego katalogu strony
//  caption — podpis (opcjonalny, "" = brak)
//  date    — data lub opis (opcjonalny, "" = brak)
// ═══════════════════════════════════════════════════════════════════
const PHOTOS = [
  {
    src:     "grafika/ekipa/galeria/grupowe_biale_stroje_orlik.jpg",
    caption: "Drużyna w białych strojach",
    date:    "2026",
  },

];

// ── LIGHTBOX ────────────────────────────────────────────────────────
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const photo = PHOTOS[index];
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-img').src = photo.src;
  document.getElementById('lb-img').alt = photo.caption || '';
  document.getElementById('lb-caption').textContent = photo.caption || '';
  document.getElementById('lb-date').textContent = photo.date || '';
  document.getElementById('lb-counter').textContent = `${index + 1} / ${PHOTOS.length}`;
  lb.classList.add('lb-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('lb-open');
  document.body.style.overflow = '';
}

function lbPrev() {
  currentIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
  openLightbox(currentIndex);
}

function lbNext() {
  currentIndex = (currentIndex + 1) % PHOTOS.length;
  openLightbox(currentIndex);
}

// ── RENDER GALERII ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = PHOTOS.map((photo, i) => `
    <div class="gallery-item fade-in" onclick="openLightbox(${i})">
      <div class="gallery-thumb">
        <img src="${photo.src}" alt="${photo.caption || 'Zdjęcie ' + (i + 1)}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-zoom">🔍</span>
          ${photo.caption ? `<div class="gallery-caption">${photo.caption}</div>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // IntersectionObserver — fade-in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Klawiatura: Escape zamyka, strzałki nawigują
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('lb-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  lbPrev();
    if (e.key === 'ArrowRight') lbNext();
  });

  // Kliknięcie w tło lightboxa zamyka
  document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
  });
});
