// ══════════════════════════════════════════════════════════════════
//  DANE SPONSORÓW — uzupełnij kiedy będziesz miał właściwe treści
// ══════════════════════════════════════════════════════════════════
const SPONSORS = [
  {
    id: 1,
    name: "Nazwa Sponsora 1",
    nameHighlight: "Sponsora",   // ta część będzie pomarańczowa
    tagline: "Krótkie motto lub slogan firmy — do uzupełnienia",
    tier: "Sponsor Główny",
    logo: "",                    // ścieżka do pliku np. "img/sponsor1.png"
    logoEmoji: "🏢",
    description: `
      <p>Tutaj umieść opis firmy — czym się zajmuje, jak długo działa na rynku, co oferuje swoim klientom. To może być kilka zdań lub akapit.</p>
      <p>Możesz też opisać historię współpracy z Ekipą Zimnego Lecha — dlaczego zdecydowali się nas wspierać i co cenimy w tej współpracy.</p>
    `,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "kontakt@sponsor1.pl",
      phone: "+48 000 000 000",
      website: "https://www.sponsor1.pl",
      address: "ul. Przykładowa 1, 00-000 Miasto",
    },
    social: {
      facebook:  "",
      instagram: "",
      linkedin:  "",
      youtube:   "",
      tiktok:    "",
      twitter:   "",
    },
  },
  {
    id: 2,
    name: "Nazwa Sponsora 2",
    nameHighlight: "Sponsora",
    tagline: "Krótkie motto lub slogan firmy — do uzupełnienia",
    tier: "Sponsor",
    logo: "",
    logoEmoji: "🏭",
    description: `
      <p>Tutaj umieść opis firmy — czym się zajmuje, jak długo działa na rynku, co oferuje swoim klientom.</p>
      <p>Opis współpracy z Ekipą Zimnego Lecha.</p>
    `,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "kontakt@sponsor2.pl",
      phone: "+48 000 000 000",
      website: "https://www.sponsor2.pl",
      address: "ul. Przykładowa 2, 00-000 Miasto",
    },
    social: {
      facebook:  "",
      instagram: "",
      linkedin:  "",
      youtube:   "",
      tiktok:    "",
      twitter:   "",
    },
  },
  {
    id: 3,
    name: "Nazwa Sponsora 3",
    nameHighlight: "Sponsora",
    tagline: "Krótkie motto lub slogan firmy — do uzupełnienia",
    tier: "Sponsor",
    logo: "",
    logoEmoji: "🏪",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "kontakt@sponsor3.pl",
      phone: "+48 000 000 000",
      website: "https://www.sponsor3.pl",
      address: "ul. Przykładowa 3, 00-000 Miasto",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 4,
    name: "Nazwa Sponsora 4",
    nameHighlight: "Sponsora",
    tagline: "Krótkie motto lub slogan firmy — do uzupełnienia",
    tier: "Patron",
    logo: "",
    logoEmoji: "🏬",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "kontakt@sponsor4.pl",
      phone: "+48 000 000 000",
      website: "https://www.sponsor4.pl",
      address: "ul. Przykładowa 4, 00-000 Miasto",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 5,
    name: "Nazwa Sponsora 5",
    nameHighlight: "Sponsora",
    tagline: "Krótkie motto lub slogan firmy — do uzupełnienia",
    tier: "Sponsor",
    logo: "",
    logoEmoji: "🏗️",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "kontakt@sponsor5.pl",
      phone: "+48 000 000 000",
      website: "https://www.sponsor5.pl",
      address: "ul. Przykładowa 5, 00-000 Miasto",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 6,
    name: "Nazwa Sponsora 6",
    nameHighlight: "Sponsora",
    tagline: "Krótkie motto lub slogan firmy — do uzupełnienia",
    tier: "Patron",
    logo: "",
    logoEmoji: "🏦",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "kontakt@sponsor6.pl",
      phone: "+48 000 000 000",
      website: "https://www.sponsor6.pl",
      address: "ul. Przykładowa 6, 00-000 Miasto",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 7,
    name: "Nazwa Sponsora 7",
    nameHighlight: "Sponsora",
    tagline: "Krótkie motto lub slogan firmy — do uzupełnienia",
    tier: "Sponsor",
    logo: "",
    logoEmoji: "🏋️",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "kontakt@sponsor7.pl",
      phone: "+48 000 000 000",
      website: "https://www.sponsor7.pl",
      address: "ul. Przykładowa 7, 00-000 Miasto",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 8,
    name: "Nazwa Sponsora 8",
    nameHighlight: "Sponsora",
    tagline: "Krótkie motto lub slogan firmy — do uzupełnienia",
    tier: "Patron",
    logo: "",
    logoEmoji: "🍺",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "kontakt@sponsor8.pl",
      phone: "+48 000 000 000",
      website: "https://www.sponsor8.pl",
      address: "ul. Przykładowa 8, 00-000 Miasto",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
];

// ══════════════════════════════════════════════════════════════════
//  SOCIAL MEDIA CONFIG
// ══════════════════════════════════════════════════════════════════
const SOCIAL_META = {
  facebook:  { label: "Facebook",  icon: "f",  cls: "facebook"  },
  instagram: { label: "Instagram", icon: "📷", cls: "instagram" },
  linkedin:  { label: "LinkedIn",  icon: "in", cls: "linkedin"  },
  youtube:   { label: "YouTube",   icon: "▶",  cls: "youtube"   },
  tiktok:    { label: "TikTok",    icon: "♪",  cls: "tiktok"    },
  twitter:   { label: "X/Twitter", icon: "𝕏",  cls: "twitter"   },
};

// ══════════════════════════════════════════════════════════════════
//  RENDER
// ══════════════════════════════════════════════════════════════════
function render() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const sponsor = SPONSORS.find(s => s.id === id);

  if (!sponsor) {
    document.getElementById('pageContent').innerHTML = `
      <div class="not-found">
        <h1>Nie znaleziono sponsora</h1>
        <p>Sprawdź czy adres URL jest poprawny.</p>
        <a href="index.html#sponsors" style="color:var(--orange);font-family:var(--font-h);letter-spacing:2px;text-transform:uppercase;margin-top:8px;">← Wróć do strony głównej</a>
      </div>`;
    return;
  }

  document.title = `${sponsor.name} — Ekipa Zimnego Lecha`;

  // Split name for highlight
  const nameParts = sponsor.name.split(sponsor.nameHighlight);
  const nameHTML = nameParts.length === 2
    ? `${nameParts[0]}<em>${sponsor.nameHighlight}</em>${nameParts[1]}`
    : sponsor.name;

  // Logo
  const logoHTML = sponsor.logo
    ? `<img src="${sponsor.logo}" alt="${sponsor.name} logo" />`
    : `<div class="sponsor-logo-placeholder"><span class="logo-icon">${sponsor.logoEmoji}</span>Logo sponsora</div>`;

  // Perks
  const perksHTML = sponsor.perks.map(p => `
    <div class="perk-item fade-in">
      <div class="perk-icon">${p.icon}</div>
      <div class="perk-title">${p.title}</div>
      <div class="perk-desc">${p.desc}</div>
    </div>`).join('');

  // Contact items
  const { email, phone, website, address } = sponsor.contact;
  const contactItemsHTML = [
    email   ? `<div class="contact-item"><div class="contact-icon">📧</div><div><div class="contact-item-label">E-mail</div><div class="contact-item-value"><a href="mailto:${email}">${email}</a></div></div></div>` : '',
    phone   ? `<div class="contact-item"><div class="contact-icon">📞</div><div><div class="contact-item-label">Telefon</div><div class="contact-item-value"><a href="tel:${phone.replace(/\s/g,'')}">${phone}</a></div></div></div>` : '',
    website ? `<div class="contact-item"><div class="contact-icon">🌐</div><div><div class="contact-item-label">Strona WWW</div><div class="contact-item-value"><a href="${website}" target="_blank" rel="noopener">${website.replace(/https?:\/\//,'')}</a></div></div></div>` : '',
    address ? `<div class="contact-item"><div class="contact-icon">📍</div><div><div class="contact-item-label">Adres</div><div class="contact-item-value">${address}</div></div></div>` : '',
  ].join('');

  // Social buttons — tylko te które mają URL
  const socialBtns = Object.entries(sponsor.social)
    .filter(([, url]) => url)
    .map(([key, url]) => {
      const m = SOCIAL_META[key] || { label: key, icon: '🔗', cls: '' };
      return `<a href="${url}" target="_blank" rel="noopener" class="social-btn ${m.cls}"><span class="social-icon">${m.icon}</span>${m.label}</a>`;
    }).join('');

  const hasSocial = socialBtns.length > 0;

  // Other sponsors
  const othersHTML = SPONSORS.map(s => `
    <a href="sponsor.html?id=${s.id}" class="other-card ${s.id === id ? 'current' : ''}">
      <div class="other-card-logo">${s.logoEmoji}</div>
      <div class="other-card-name">Sponsor ${s.id}</div>
    </a>`).join('');

  document.getElementById('pageContent').innerHTML = `
    <!-- HERO -->
    <section class="sponsor-hero">
      <div class="hero-shape"></div>
      <div class="container">
        <div class="sponsor-hero-inner fade-in">
          <div class="sponsor-logo-box">
            <div class="sponsor-tier">${sponsor.tier}</div>
            ${logoHTML}
          </div>
          <div>
            <div class="sponsor-breadcrumb">
              <a href="index.html">Strona główna</a> ›
              <a href="index.html#sponsors">Sponsorzy</a> ›
              <span>${sponsor.name}</span>
            </div>
            <h1 class="sponsor-name">${nameHTML}</h1>
            <p class="sponsor-tagline">${sponsor.tagline}</p>
            <div class="sponsor-badges">
              <span class="badge orange">${sponsor.tier}</span>
              <span class="badge">Partner Ekipy Zimnego Lecha</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="sponsor-content">
      <div class="container">
        <div class="content-grid">
          <!-- LEFT: opis + perks -->
          <div>
            <span class="section-label">O firmie</span>
            <h2 class="content-title">Kim <span>jesteśmy?</span></h2>
            <div class="content-desc fade-in">${sponsor.description}</div>

            <div class="perks-grid">
              ${perksHTML}
            </div>
          </div>

          <!-- RIGHT: kontakt -->
          <div>
            <div class="contact-card fade-in">
              <div class="contact-card-title">Dane kontaktowe</div>
              ${contactItemsHTML}
              ${hasSocial ? `<div class="social-title">Social media</div><div class="social-grid">${socialBtns}</div>` : ''}
              ${sponsor.contact.website ? `<a href="${sponsor.contact.website}" target="_blank" rel="noopener" class="website-btn">Odwiedź stronę →</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OTHER SPONSORS -->
    <section class="other-sponsors">
      <div class="container">
        <div class="other-sponsors-header fade-in">
          <h2 class="other-sponsors-title">Pozostali <span>Sponsorzy</span></h2>
          <a href="index.html#sponsors" style="font-family:var(--font-h);font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--orange);">← Wróć do slajdera</a>
        </div>
        <div class="other-grid fade-in">
          ${othersHTML}
        </div>
      </div>
    </section>
  `;

  // Trigger fade-in
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  }, 50);
}

// ── HAMBURGER ─────────────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
});

// ── INIT ──────────────────────────────────────────────────────────
render();
