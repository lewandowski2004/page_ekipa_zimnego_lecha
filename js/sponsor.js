// ══════════════════════════════════════════════════════════════════
//  DANE SPONSORÓW — uzupełnij kiedy będziesz miał właściwe treści
// ══════════════════════════════════════════════════════════════════
const SPONSORS = [
  {
    id: 1,
    name: "Instal-Pro Łukasz Dymek",
    nameHighlight: "Pro",
    tagline: "Profesjonalne instalacje grzewcze i sanitarne",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_instal_pro.jpg",
    logoEmoji: "🔧",
    description: `<p>Instal-Pro Łukasz Dymek to lokalna firma z Ciółkówka, której zespół na co dzień dba o komfort mieszkańców regionu, dostarczając usługi instalacyjne na najwyższym poziomie.</p>
      <p>W zakresie działalności firmy znajdują się m.in.:</p>
      <ul style="margin:0 0 0 20px; padding:0; line-height:1.8;">
        <li><strong>Instalacje grzewcze</strong> — montaż nowoczesnych pieców, pomp ciepła i systemów ogrzewania podłogowego</li>
        <li><strong>Instalacje sanitarne</strong> — profesjonalne wykonawstwo instalacji wodno-kanalizacyjnych i gazowych</li>
        <li><strong>Serwis i doradztwo</strong> — szybkie usuwanie awarii oraz pomoc w doborze energooszczędnych rozwiązań</li>
      </ul>
      <p>Właściciela firmy znajdziesz też na prywatnym profilu: <a href="https://www.facebook.com/lukaaszek1205" target="_blank" rel="noopener" style="color:var(--orange);">facebook.com/lukaaszek1205</a></p>
`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Instalacje grzewcze i sanitarne" },
      { icon: "📍", title: "Lokalizacja", desc: "Ciółkówko" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Piece, pompy ciepła, ogrzewanie podłogowe" },
    ],
    contact: {
      email: "instal.pro.plock@gmail.com",
      phone: "",
      website: "",
      address: "Ciółkówko 2, Radzanowo, 09-451",
    },
    social: { facebook: "https://www.facebook.com/instalprolukaszdymek", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 2,
    name: "Solidne Ubezpieczenia Elżbieta Jakubowska",
    nameHighlight: "Ubezpieczenia",
    tagline: "Twoje bezpieczeństwo w dobrych rękach",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_solidne_ubezpieczenia.jpg",
    logoEmoji: "🛡️",
    description: `<p>Firma Solidne Ubezpieczenia Elżbieta Jakubowska to biuro ubezpieczeniowe z siedzibą w Ciółkówku, które stawia na indywidualne podejście do klienta i realną pomoc w trudnych sytuacjach życiowych.</p>
      <p>Dom 🏠 Samochód 🚗 Rodzina 👫 Zdrowie 🩺</p>
      <p>Wszystko, co dla Ciebie ważne, zasługuje na solidną ochronę. Nie czekaj, aż wydarzy się coś złego — bądź o krok przed nim z firmą Solidne Ubezpieczenia Elżbieta Jakubowska.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Ubezpieczenia" },
      { icon: "📍", title: "Lokalizacja", desc: "Ciółkówko" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Dom, samochód, rodzina, zdrowie" },
    ],
    contact: {
      email: "e-jakub@wp.pl",
      phone: "664-443-999",
      website: "https://jakubowskaubezpieczenia.pl/",
      address: "Ciółkówko 44",
    },
    social: { facebook: "https://www.facebook.com/profile.php?id=100084899163407", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 3,
    name: "Mon Gaz",
    nameHighlight: "Gaz",
    tagline: "Myjnie samoobsługowe czynne całą dobę",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_mon_gaz.jpg",
    logoEmoji: "🔥",
    description: `<p>Mon Gaz to sieć myjni samoobsługowych, dostępnych dla klientów przez całą dobę, zlokalizowanych w Płocku oraz Sochaczewie.</p>
      <p>Aktualne lokalizacje myjni:</p>
      <ul style="margin:0 0 0 20px; padding:0; line-height:1.8;">
        <li>Płock, ul. Rembielińskiego 10B</li>
        <li>Sochaczew, ul. Warszawska 67A</li>
      </ul>
      <p>Firma cieszy się zaufaniem lokalnej społeczności, oferując wygodne i dostępne o każdej porze rozwiązanie do szybkiego i dokładnego mycia samochodu.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Myjnie samoobsługowe" },
      { icon: "📍", title: "Lokalizacja", desc: "Płock, Sochaczew" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Mycie samochodów — czynne całą dobę" },
    ],
    contact: {
      email: "monika.markuszewska@onet.pl",
      phone: "",
      website: "",
      address: "ul. Rembielińskiego 10B, 09-400 Płock",
    },
    social: { facebook: "https://www.facebook.com/PPHMONGAZ/", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 4,
    name: "Traker",
    nameHighlight: "Traker",
    tagline: "Profesjonalny ośrodek szkoleniowy z Płocka",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_traker.jpg",
    logoEmoji: "📡",
    description: `<p>Firma Traker to profesjonalny ośrodek szkoleniowy z Płocka, który stawia na budowanie solidnych fundamentów i pewności siebie za kierownicą. Ośrodek wyróżnia się nowoczesnym podejściem oraz wykwalifikowaną kadrą — Dawid Piotrowski. 💪</p>
      <p>W ofercie znajdziesz m.in.:</p>
      <ul style="margin:0 0 0 20px; padding:0; line-height:1.8;">
        <li>Prawo jazdy kat. B oraz kat. B (automat)</li>
        <li>Kursy ADR, kwalifikacja wstępna i okresowa dla kierowców zawodowych</li>
        <li>Wózki widłowe, podesty ruchome, żurawie przenośne, HDS, sygnalista hakowy</li>
        <li>Obsługa ciągnika siodłowego, urządzenia NO, Certyfikat Kompetencji Zawodowych</li>
      </ul>
      <p>Ośrodek działa przy ul. Dobrzyńskiej 13/1 w Płocku (pon.–pt. 8:00–16:00) i jako „eksperci od szkoleń” oferuje swoim kursantom również własną platformę e-learningową, ułatwiającą naukę teorii w dogodnym tempie.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Szkolenia kierowców i operatorów" },
      { icon: "📍", title: "Lokalizacja", desc: "Płock, ul. Dobrzyńska 13/1" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Prawo jazdy kat. B, ADR, HDS, wózki widłowe" },
    ],
    contact: {
      email: "",
      phone: "728 323 521",
      website: "https://e-traker.pl/",
      address: "ul. Dobrzyńska 13/1, Płock",
    },
    social: { facebook: "https://www.facebook.com/profile.php?id=100063876919012", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 5,
    name: "PPH Mark-Gaz",
    nameHighlight: "Gaz",
    tagline: "Ekspresowe dostawy gazu propan od ponad 25 lat",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_mark_gaz.jpg",
    logoEmoji: "🔥",
    description: `<p>PPH Mark-Gaz to rodzinna firma z Płocka, która od ponad 25 lat dostarcza gaz propan klientom indywidualnym, firmom oraz gospodarstwom rolnym na terenie Płocka, Sierpca, Włocławka i okolic.</p>
      <p>Firma oferuje m.in. dostawy gazu butlowego do domów, dystrybucję LPG dla stacji paliw, propan przemysłowy dla biznesu, paliwo do wózków widłowych, wynajem przyczep oraz całodobową stację wagową. Klienci mogą liczyć na ekspresową dostawę — zwykle w ciągu około 45 minut — z elastycznym zamawianiem telefonicznie lub SMS-em.</p>
      <p>Mark-Gaz to gwarancja sprawdzonej jakości paliwa, terminowości i przejrzystych warunków współpracy — bez ukrytych kosztów.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Dostawy gazu propan (LPG)" },
      { icon: "📍", title: "Lokalizacja", desc: "Płock (ul. Stefana Banacha 10)" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Gaz do domów, firm i gospodarstw rolnych" },
    ],
    contact: {
      email: "biuro@markgaz.pl",
      phone: "801 402 403",
      website: "https://markgaz.pl/",
      address: "ul. Stefana Banacha 10, 09-407 Płock",
    },
    social: { facebook: "https://www.facebook.com/PPHMARKGAZ", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 6,
    name: "Trans-Sprzęt-Handel Lewandowski",
    nameHighlight: "Lewandowski",
    tagline: "Kruszywa, transport i roboty ziemne od 1990 roku",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_tsh_lewandowski.jpg",
    logoEmoji: "🏢",
    description: `<p>Trans-Sprzęt-Handel Lewandowski to rodzinna firma działająca od 1990 roku, świadcząca usługi transportowe, sprzedaż kruszyw oraz roboty ziemne na terenie Płocka, Sochaczewa, Wyszogrodu i okolic.</p>
      <p>W ofercie firmy znajdziesz m.in.:</p>
      <ul style="margin:0 0 0 20px; padding:0; line-height:1.8;">
        <li><strong>Sprzedaż kruszyw</strong> — piasek, żwir, tłuczeń, gruz betonowy, ziemia urodzajna i torf</li>
        <li><strong>Transport</strong> — przewozy ciężkim sprzętem, ciągnikami oraz transport specjalistyczny z usługami HDS</li>
        <li><strong>Roboty ziemne</strong> — wykopy, niwelacja terenu, kopanie oczek wodnych, wyburzenia oraz odśnieżanie przy użyciu koparek kołowych i gąsienicowych, koparko-ładowarek JCB i równiarek</li>
      </ul>
      <p>Firma stawia na wysoką jakość usług, konkurencyjne ceny oraz doświadczony, w pełni wykwalifikowany zespół posiadający wymagane uprawnienia branżowe.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Transport, kruszywa, roboty ziemne" },
      { icon: "📍", title: "Lokalizacja", desc: "Rogozino k. Płocka" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Kruszywa, transport HDS, wykopy i niwelacja terenu" },
    ],
    contact: {
      email: "tsh.lewandowski@gmail.com",
      phone: "602 585 083",
      website: "https://tshlewandowski.pl/",
      address: "ul. Mazowiecka 74, 09-442 Rogozino",
    },
    social: { facebook: "https://www.facebook.com/tsh.lewandowski", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 7,
    name: "Mobilna Wulkanizacja Płock 24h/7 Marcin Paradowski",
    nameHighlight: "Wulkanizacja",
    tagline: "Całodobowy serwis opon i mechanika z dojazdem do klienta",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_paradowski_transport.jpg",
    logoEmoji: "🚛",
    description: `<p>Firma Mobilna Wulkanizacja Płock 24h/7 Marcin Paradowski świadczy całodobowy serwis opon i mechanikę samochodową z dojazdem do klienta w Płocku i okolicach. Obsługuje zarówno auta osobowe, jak i samochody ciężarowe (TIR) oraz sprzęt rolniczy. Realizuje również usługi z zakresu transportu.</p>
      <p>Zakres oferowanych usług:</p>
      <ul style="margin:0 0 0 20px; padding:0; line-height:1.8;">
        <li>Awaryjny dojazd do miejsca zdarzenia (parking, trasa, dom)</li>
        <li>Wymiana i naprawa opon na drodze</li>
        <li>Obsługa i wulkanizacja pojazdów ciężarowych (TIR) oraz osobowych</li>
        <li>Profesjonalne wyważanie i wykręcanie zapieczonych śrub</li>
        <li>Transport drogowy — szczegóły ustalane indywidualnie pod wskazanym numerem telefonu</li>
      </ul>
      <p>Dostępność: 24 godziny na dobę, 7 dni w tygodniu — w tym weekendy i święta.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Wulkanizacja i mechanika mobilna" },
      { icon: "📍", title: "Lokalizacja", desc: "Nowe Boryszewo 98A k. Płocka" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Serwis opon 24/7 z dojazdem — auta, TIR-y, sprzęt rolniczy" },
    ],
    contact: {
      email: "",
      phone: "727 939 676",
      website: "",
      address: "Nowe Boryszewo 98A, k. Płocka",
    },
    social: { facebook: "https://www.facebook.com/profile.php?id=100076056799579", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 8,
    name: "Młyn Przedpełce Kocięcki Paweł",
    nameHighlight: "Przedpełce",
    tagline: "Ponad 150 lat tradycji rodzinnego młynarstwa",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_mlyn_przedpelce.jpg",
    logoEmoji: "🌾",
    description: `<p>Młyn Przedpełce Kocięcki Paweł to przedsiębiorstwo z ponad 150-letnią tradycją rodzinnego młynarstwa, które łączy doświadczenie i tradycję z nowoczesnymi technologiami stosowanymi w przetwórstwie zbóż.</p>
      <p>W ofercie młyna znajdziesz m.in.:</p>
      <ul style="margin:0 0 0 20px; padding:0; line-height:1.8;">
        <li>Mąki pszenne i żytnie oraz mąki orkiszowe</li>
        <li>Otręby pszenne i żytnie</li>
        <li>Skup pszenicy i żyta z oceną jakości we własnym laboratorium</li>
        <li>Receptury dostosowane do indywidualnych wymagań klienta</li>
      </ul>
      <p>Firma stawia na własne laboratorium do badań jakości, atrakcyjne ceny, szybkie terminy realizacji oraz pełne zadowolenie klienta — na stronie znajdziesz też sekcję z recepturami i poradami piekarniczymi.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Młynarstwo i przetwórstwo zbóż" },
      { icon: "📍", title: "Lokalizacja", desc: "Przedpełce, gm. Staroźreby" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Mąki pszenne, żytnie i orkiszowe, skup zbóż" },
    ],
    contact: {
      email: "",
      phone: "",
      website: "https://www.mlynprzedpelce.com/",
      address: "Przedpełce 15, 09-440 Staroźreby",
    },
    social: { facebook: "https://www.facebook.com/profile.php?id=61579547769849", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 9,
    name: "DJ Ravi Mirosław Kopyt",
    nameHighlight: "Ravi",
    tagline: "Muzyczna oprawa każdej imprezy",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_dj_ravi.jpg",
    logoEmoji: "🎧",
    description: `<p>Wieloletnie doświadczenie, setki zagranych imprez i instynkt wyczuwania nastroju tłumu — to właśnie wyróżnia DJ Raviego na tle innych. Niezależnie od okazji, gwarantuje show, które zapadnie w pamięć.</p>
      <p>Współpraca z profesjonalistą takim jak DJ Ravi Mirosław Kopyt to gwarancja, że Twoje wydarzenie nabierze wyjątkowego charakteru i energii, która porwie gości na parkiet.</p>
      <p>Dobry DJ to nie tylko osoba odtwarzająca muzykę, ale przede wszystkim architekt nastroju, który potrafi płynnie łączyć utwory i dostosować playlistę do bieżących emocji na sali.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Oprawa muzyczna imprez" },
      { icon: "📍", title: "Lokalizacja", desc: "Ciółkowo" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "DJ na imprezy i wydarzenia" },
    ],
    contact: {
      email: "",
      phone: "518-391-029",
      website: "",
      address: "",
    },
    social: { facebook: "https://www.facebook.com/profile.php?id=100002569793719", instagram: "", linkedin: "", youtube: "", tiktok: "", twitter: "" },
  },
  {
    id: 10,
    name: "Stolryś Usługi Stolarskie",
    nameHighlight: "Stolrys",
    tagline: "Meble na wymiar — 30 lat doświadczenia w stolarstwie",
    tier: "Sponsor",
    logo: "grafika/sponsorzy/company_logo_stolrys.jpg",
    logoEmoji: "🪵",
    description: `<p>Stolryś Usługi Stolarskie to firma z Ciółkówka, która od 30 lat działa w branży stolarskiej, tworząc meble dopasowane do indywidualnych potrzeb klientów z całej Polski i zagranicy.</p>
      <p>W ofercie firmy znajdziesz m.in.:</p>
      <ul style="margin:0 0 0 20px; padding:0; line-height:1.8;">
        <li>Meble na zamówienie — do domu, biura, lokali usługowych i hoteli</li>
        <li>Meble modułowe</li>
        <li>Drzwi wewnętrzne</li>
        <li>Usługi CNC, oklejanie i lakierowanie</li>
      </ul>
      <p>Zespół profesjonalistów podchodzi do każdego zlecenia z największą starannością i zaangażowaniem, traktując stolarstwo nie tylko jako zawód, ale przede wszystkim jako pasję — przeprowadzając klienta przez cały proces, od projektu po realizację.</p>`,
    perks: [
      { icon: "🎯", title: "Branża", desc: "Stolarstwo i meble na wymiar" },
      { icon: "📍", title: "Lokalizacja", desc: "Ciółkówko" },
      { icon: "🤝", title: "Współpraca od", desc: "2026" },
      { icon: "⭐", title: "Specjalizacja", desc: "Meble na zamówienie, CNC, lakierowanie" },
    ],
    contact: {
      email: "",
      phone: "531-135-438",
      website: "https://stolrys.com.pl/",
      address: "Ciółkówko",
    },
    social: { facebook: "", instagram: "https://www.instagram.com/stolrys/", linkedin: "", youtube: "", tiktok: "", twitter: "" },
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
