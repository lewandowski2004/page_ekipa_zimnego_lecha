# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static multi-page website for "Ekipa Zimnego Lecha" (an amateur Polish football team). Plain HTML/CSS/vanilla JS — **no build step, no bundler, no package manager, no backend/database, no tests**. All content is Polish-language.

Deployed via GitHub Pages with a custom domain (see `CNAME`: `ekipa-zimnego-lecha.pl`). Deploying is just pushing to `main` — there is no CI/build pipeline.

## Working with this repo

- There is nothing to "build", "install", or "run" — open the HTML files directly in a browser, or serve the directory with any static file server, to preview changes.
- No linter/formatter/test runner is configured. Verify changes by opening the affected page(s) in a browser.
- Most "content edits" (news posts, sponsors, calendar events, gallery photos, players) are done by editing plain JS data arrays in `js/*.js`, not HTML markup.

## Cache busting

`<script>` tags in the HTML files are versioned with a query string, e.g. `js/news.js?v=20260619`. **Whenever you modify a JS file, bump the `?v=` date suffix on its `<script>` tag in every HTML file that includes it**, so browsers/CDN don't serve a stale cached copy.

## Page → data → script map

Each page is a static HTML shell that gets populated client-side from a JS data array, matched via `?id=` query params where relevant:

| Page | Purpose | Data array (in JS file) | Render entry point |
|---|---|---|---|
| `index.html` | Landing page (hero, news teaser, sponsor slider, players, calendar, contact forms) | `NEWS` (`js/news.js`), `EVENTS` (`js/calendar.js`) | `renderMainPageNews()`, `renderCalendar()` |
| `aktualnosci.html` | Full news listing | `NEWS` (`js/news.js`) | `renderNewsListing()` |
| `aktualnosc.html?id=N` | Single news article | `NEWS` (`js/news.js`) | `renderNewsArticle()` (looks up by `id`) |
| `sponsor.html?id=N` | Single sponsor profile | `SPONSORS` (`js/sponsor.js`) | `render()` (looks up by `id`) |
| `galeria.html` | Photo gallery with lightbox | `PHOTOS` (`js/gallery.js`) | lightbox renderer in `js/gallery.js` |
| `sponsor.html` slider section on `index.html` | Auto-scrolling sponsor logo carousel | hardcoded `<a href="sponsor.html?id=N">` list directly in `index.html` | `js/sponsor-slider.js` |

`js/index.js` is the shared "site chrome" script for `index.html`: nav scroll state, hamburger menu, scroll-to-top, `IntersectionObserver`-based fade-ins (`.fade-in`/`.visible`), player filter buttons (`data-category` / `data-filter`), and the two contact forms.

Each data record (`NEWS` item, `SPONSORS` item, `EVENTS` item, `PHOTOS` item) is a plain object literal — to add/edit content, add/edit an object in the corresponding array. IDs in `NEWS`/`SPONSORS` are referenced from other pages via `?id=`, so don't reuse an existing id when adding a new entry, and keep cross-links (e.g. sponsor mentions inside a news article's `content` HTML, like `<a href="sponsor.html?id=5">`) in sync.

## Forms

Both contact forms on `index.html` (`#sponsorForm`, `#sparringForm`) submit via `fetch` to a Formspree endpoint (`FORM_ENDPOINT` in `js/index.js`) — there is no server code in this repo handling submissions. Each form has a hidden honeypot field (`name="_gotcha"`) for spam filtering; `setupForm()` silently drops the submission client-side if it's filled in.

The "sparring" form is dynamic: `SR_CONFIG` in `js/index.js` swaps the form's icon/title/description/labels/fields depending on the selected `sr-type` (`sparing` / `turniej` / `event` / `inne`) via `applySrType()`.

## Cross-page navigation convention

`index.html` itself links to in-page sections with bare anchors (`#news`, `#players`, ...). Every other page (`galeria.html`, `aktualnosci.html`, `aktualnosc.html`, `sponsor.html`) links back to those same sections with `index.html#news`, etc., since those sections only exist on the landing page. Keep this distinction when adding nav links to a page.

## Assets

Images live under `grafika/`, split by purpose: `ekipa/` (team branding/logos), `zawodnicy/` (player photos, filename matches the player name, e.g. `oliwier_majchrzak.jpg`), `sponsorzy/` (sponsor logos, `company_logo_*.jpg`), `aktualnosci/` (news post images). Player cards without a photo fall back to an emoji placeholder (`<div class="player-image-placeholder">`) instead of an `<img>`.

## Styling

`css/style.css` holds shared site-wide styles and CSS variables (e.g. `var(--orange)`, `var(--gray)` — also referenced directly inside inline styles in JS-generated HTML in `js/news.js` and `js/sponsor.js`). Each page additionally loads one page-specific stylesheet (`css/index.css`, `css/news.css`, `css/gallery.css`, `css/sponsor.css`).
