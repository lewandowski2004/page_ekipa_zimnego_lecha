// ═══════════════════════════════════════════════════════════════════
//  SLIDER SPONSORÓW — automatyczne przewijanie + sterowanie strzałkami
// ═══════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack');
  const prev  = document.getElementById('sliderPrev');
  const next  = document.getElementById('sliderNext');
  if (!track || !prev || !next) return;

  const SPEED = 0.6; // px / klatkę — szybkość auto-przewijania
  let pos = 0;
  let paused = false;
  let resumeTimer = null;

  // szerokość pojedynczego kompletu (track zawiera duplikat dla pętli)
  const setWidth = () => track.scrollWidth / 2;

  function frame() {
    if (!paused) {
      pos -= SPEED;
      const w = setWidth();
      if (Math.abs(pos) >= w) pos += w;
      track.style.transform = `translateX(${pos}px)`;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function step(dir) {
    const slide = track.querySelector('.sponsor-slide');
    const slideWidth = slide ? slide.getBoundingClientRect().width + 40 : 300; // + marginesy
    const w = setWidth();

    paused = true;
    pos += dir * -slideWidth;
    // normalizacja zakresu, by uniknąć "skoku" przy zapętleniu
    if (pos <= -w) pos += w;
    if (pos > 0)   pos -= w;
    track.style.transition = 'transform .5s cubic-bezier(.4,0,.2,1)';
    track.style.transform = `translateX(${pos}px)`;

    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      track.style.transition = '';
      paused = false;
    }, 600);
  }

  prev.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));

  track.addEventListener('mouseenter', () => { paused = true; });
  track.addEventListener('mouseleave', () => {
    clearTimeout(resumeTimer);
    track.style.transition = '';
    paused = false;
  });
});
