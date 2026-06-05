// ══════════════════════════════════════════════════════════════════
//  DANE SPONSORÓW — uzupełnij kiedy będziesz miał właściwe treści
// ══════════════════════════════════════════════════════════════════
const SPONSORS = [
  {
    id: 1,
    name: "Instal Pro",
    nameHighlight: "Pro",
    tagline: "Kompleksowe usługi instalacyjne — do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_instal_pro.jpg",
    logoEmoji: "🔧",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 2,
    name: "Solidne Ubezpieczenia",
    nameHighlight: "Ubezpieczenia",
    tagline: "Twoje bezpieczeństwo w dobrych rękach — do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_solidne_ubezpieczenia.jpg",
    logoEmoji: "🛡️",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 3,
    name: "Mon Gaz",
    nameHighlight: "Gaz",
    tagline: "Usługi gazowe na najwyższym poziomie — do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_mon_gaz.jpg",
    logoEmoji: "🔥",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 4,
    name: "Traker",
    nameHighlight: "Traker",
    tagline: "Do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_traker.jpg",
    logoEmoji: "📡",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 5,
    name: "Mark Gaz",
    nameHighlight: "Gaz",
    tagline: "Profesjonalne usługi gazowe — do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_mark_gaz.jpg",
    logoEmoji: "🔥",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 6,
    name: "TSH Lewandowski",
    nameHighlight: "Lewandowski",
    tagline: "Do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_tsh_lewandowski.jpg",
    logoEmoji: "🏢",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 7,
    name: "Paradowski Transport",
    nameHighlight: "Transport",
    tagline: "Niezawodny transport na każdą odległość — do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_paradowski_transport.jpg",
    logoEmoji: "🚛",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 8,
    name: "Młyn Przedpełce",
    nameHighlight: "Przedpełce",
    tagline: "Tradycja i jakość od pokoleń — do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_mlyn_przedpelce.jpg",
    logoEmoji: "🌾",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 9,
    name: "DJ Ravi",
    nameHighlight: "Ravi",
    tagline: "Muzyczna oprawa każdej imprezy — do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_dj_ravi.jpg",
    logoEmoji: "🎧",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
    },
    social: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 10,
    name: "Stolrys",
    nameHighlight: "Stolrys",
    tagline: "Do uzupełnienia",
    tier: "Sponsor",
    logo: "grafika/company_logo/company_logo_stolrys.jpg",
    logoEmoji: "🪵",
    description: `<p>Opis firmy do uzupełnienia.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Do uzupełnienia" },
      { icon: "📍", title: "Lokalizacja", desc: "Do uzupełnienia" },
      { icon: "🤝", title: "Współpraca od", desc: "Do uzupełnienia" },
      { icon: "⭐", title: "Specjalizacja", desc: "Do uzupełnienia" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "",
      address: "",
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
      ${s.logo
        ? `<img src="${s.logo}" alt="${s.name}" style="max-width:100%;max-height:60px;object-fit:contain;margin:0 auto 10px;" />`
        : `<div class="other-card-logo">${s.logoEmoji}</div>`}
      <div class="other-card-name">${s.name}</div>
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
