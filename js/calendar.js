// ═══════════════════════════════════════════════════════════════════
//  WYDARZENIA — dodaj / usuń / edytuj tutaj
//  Typy: "mecz" | "sparing" | "turniej" | "trening" | "inne"
// ═══════════════════════════════════════════════════════════════════
const EVENTS = [
  { date: "2026-06-09", title: "Trening",  name: "",                        details: "", time: "", location: "Orlik Gulczewo", type: "trening" },
  { date: "2026-06-27", title: "Mecz",     name: "50-lecie Huraganu Bodzanów", details: "", time: "", location: "Bodzanów",    type: "mecz" },
];

// ── STAŁE ───────────────────────────────────────────────────────────
const MONTHS_PL = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
const DAYS_PL   = ["Pon","Wt","Śr","Czw","Pt","Sob","Ndz"];
const TYPE_LABELS = { mecz:"Mecz", sparing:"Sparing", turniej:"Turniej", trening:"Trening", inne:"Inne" };

const YEAR = new Date().getFullYear();
let calMonth = new Date().getMonth();

// ── RENDER ──────────────────────────────────────────────────────────
function renderCalendar() {
  const wrap = document.getElementById('calendarWrap');
  if (!wrap) return;

  const today      = new Date();
  const daysInMon  = new Date(YEAR, calMonth + 1, 0).getDate();
  const firstWday  = (new Date(YEAR, calMonth, 1).getDay() + 6) % 7; // Mon=0
  const prevDays   = new Date(YEAR, calMonth, 0).getDate();

  // Mapa wydarzeń po dacie
  const evMap = {};
  EVENTS.forEach(ev => { (evMap[ev.date] = evMap[ev.date] || []).push(ev); });

  // Buduj komórki
  const cells = [];
  for (let i = firstWday - 1; i >= 0; i--)  cells.push({ d: prevDays - i, cur: false });
  for (let d = 1; d <= daysInMon; d++)        cells.push({ d, cur: true });
  const tail = cells.length % 7 ? 7 - cells.length % 7 : 0;
  for (let i = 1; i <= tail; i++)             cells.push({ d: i, cur: false });

  const cellsHTML = cells.map(({ d, cur }, idx) => {
    if (!cur) return `<div class="cal-day cal-day--other"><span class="cal-day-num">${d}</span></div>`;

    const ds      = `${YEAR}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday = today.getFullYear()===YEAR && today.getMonth()===calMonth && today.getDate()===d;
    const evs     = evMap[ds] || [];
    const col     = idx % 7;

    const evListHTML = evs.map(ev => `
      <div class="cal-event-item cal-event--${ev.type}">
        <span class="cal-dot"></span>
        <span class="cal-event-label">${ev.title}</span>
      </div>
      ${ev.name ? `<div class="cal-event-name">${ev.name}</div>` : ''}`).join('');

    const tooltipHTML = evs.map(ev => `
      <div class="cal-tip-event">
        ${ev.name ? `<div class="cal-tip-name">${ev.name}</div>` : ''}
        <span class="cal-tip-badge cal-event--${ev.type}">${TYPE_LABELS[ev.type]||ev.type}</span>
        <div class="cal-tip-title">${ev.title}</div>
        ${ev.details  ? `<div class="cal-tip-row"><span>⚽</span>${ev.details}</div>`  : ''}
        ${ev.time     ? `<div class="cal-tip-row"><span>🕐</span>${ev.time}</div>`     : ''}
        ${ev.location ? `<div class="cal-tip-row"><span>📍</span>${ev.location}</div>` : ''}
      </div>`).join('<div class="cal-tip-sep"></div>');

    const flipClass = col >= 5 ? ' cal-day--flip-l' : col <= 1 ? ' cal-day--flip-r' : '';

    return `
      <div class="cal-day${isToday?' cal-day--today':''}${evs.length?' cal-day--event':''}${flipClass}">
        <span class="cal-day-num">${d}</span>
        ${evListHTML ? `<div class="cal-events-list">${evListHTML}</div>` : ''}
        ${evs.length ? `<div class="cal-tip">${tooltipHTML}</div>` : ''}
      </div>`;
  }).join('');

  // Agenda (mobile) — events for current month sorted by date
  const monthEvents = EVENTS
    .filter(ev => {
      const [y, m] = ev.date.split('-').map(Number);
      return y === YEAR && m === calMonth + 1;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const agendaHTML = monthEvents.length
    ? monthEvents.map(ev => {
        const day = parseInt(ev.date.split('-')[2], 10);
        return `
          <div class="cal-agenda-item">
            <div class="cal-agenda-date cal-event--${ev.type}">
              <span class="cal-agenda-day">${day}</span>
              <span class="cal-agenda-mon">${MONTHS_PL[calMonth].slice(0,3).toUpperCase()}</span>
            </div>
            <div class="cal-agenda-info">
              ${ev.name ? `<div class="cal-agenda-name">${ev.name}</div>` : ''}
              <span class="cal-tip-badge cal-event--${ev.type}">${TYPE_LABELS[ev.type]||ev.type}</span>
              <div class="cal-agenda-title-ev">${ev.title}</div>
              ${ev.time     ? `<div class="cal-agenda-row">🕐 ${ev.time}</div>`     : ''}
              ${ev.location ? `<div class="cal-agenda-row">📍 ${ev.location}</div>` : ''}
            </div>
          </div>`;
      }).join('')
    : `<div class="cal-agenda-empty">Brak wydarzeń w tym miesiącu</div>`;

  wrap.innerHTML = `
    <div class="cal-nav">
      <button class="cal-nav-btn" id="calPrev" ${calMonth===0?'disabled':''}>&#8592;</button>
      <div class="cal-nav-title">
        <span class="cal-month">${MONTHS_PL[calMonth]}</span>
        <span class="cal-year-lbl">${YEAR}</span>
      </div>
      <button class="cal-nav-btn" id="calNext" ${calMonth===11?'disabled':''}>&#8594;</button>
    </div>
    <div class="cal-weekdays cal-desktop-only">${DAYS_PL.map(d=>`<div class="cal-wday">${d}</div>`).join('')}</div>
    <div class="cal-grid cal-desktop-only">${cellsHTML}</div>
    <div class="cal-agenda cal-mobile-only">${agendaHTML}</div>
    <div class="cal-legend">
      <span class="cal-leg"><span class="cal-dot cal-event--mecz"></span>Mecz</span>
      <span class="cal-leg"><span class="cal-dot cal-event--sparing"></span>Sparing</span>
      <span class="cal-leg"><span class="cal-dot cal-event--turniej"></span>Turniej</span>
      <span class="cal-leg"><span class="cal-dot cal-event--trening"></span>Trening</span>
      <span class="cal-leg"><span class="cal-dot cal-event--inne"></span>Inne</span>
    </div>
  `;

  document.getElementById('calPrev').addEventListener('click', () => { if (calMonth > 0)  { calMonth--; renderCalendar(); } });
  document.getElementById('calNext').addEventListener('click', () => { if (calMonth < 11) { calMonth++; renderCalendar(); } });
}

document.addEventListener('DOMContentLoaded', renderCalendar);
