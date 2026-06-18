# Đakovački Kulin — Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Izgraditi modernu, responzivnu statičnu početnu stranicu za Udrugu kulinara "Đakovački Kulin" kao tri odvojene datoteke (HTML + CSS + JS).

**Architecture:** Tri datoteke u `C:/Users/Tomislav/kulin-djakovo/` — `index.html` definira semantičku strukturu, `style.css` sadrži sve stilove s CSS custom properties, `main.js` dodaje hamburger menu i smooth scroll. Nema vanjskih dependency-ja osim jednog Google Fonts importa.

**Tech Stack:** Vanilla HTML5, CSS3 (custom properties, grid, flexbox, media queries), Vanilla JS (ES6), Inter font (Google Fonts)

---

## Mapa datoteka

| Datoteka | Odgovornost |
|---|---|
| `index.html` | Semantička HTML struktura, meta tagovi, SEO, OG tagovi |
| `style.css` | Sve vizualne definicije — varijable, layout, komponente, responsivnost |
| `main.js` | Hamburger toggle, smooth scroll, nav scroll efekt |

---

## Task 1: Osnovna struktura projekta i CSS varijable

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `main.js`

- [ ] **Korak 1: Kreiraj `index.html` s kompletnim `<head>` blokom**

```html
<!DOCTYPE html>
<html lang="hr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Đakovački Kulin — Udruga kulinara Đakovo</title>
  <meta name="description" content="Udruga kulinara Đakovački Kulin čuva tradiciju slavonskog kulina i promiče kvalitetu domaćih proizvoda od 1988. godine.">
  <meta property="og:title" content="Đakovački Kulin — Udruga kulinara Đakovo">
  <meta property="og:description" content="Više od 35 godina čuvamo tradiciju slavonskog kulina kroz natjecanja i promicanje domaće kvalitete.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://kulin-djakovo.com/">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- sekcije dolaze u sljedećim taskovima -->
  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Korak 2: Kreiraj `style.css` s CSS custom properties i resetom**

```css
/* ── VARIJABLE ── */
:root {
  --color-brand:       #6b0f0f;
  --color-brand-light: #c0392b;
  --color-bg:          #120303;
  --color-bg-alt:      #0d0202;
  --color-surface:     #1e0404;
  --color-border:      #3a0a0a;
  --color-white:       #ffffff;
  --color-muted:       rgba(255, 255, 255, 0.6);

  --font-family: 'Inter', system-ui, sans-serif;
  --max-width: 1100px;
  --radius: 4px;
  --transition: 0.2s ease;
}

/* ── RESET ── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  background: var(--color-bg);
  color: var(--color-white);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}
```

- [ ] **Korak 3: Kreiraj prazan `main.js`**

```js
// main.js — Đakovački Kulin
// Hamburger menu, smooth scroll, nav scroll efekt
```

- [ ] **Korak 4: Otvori `index.html` u browseru i provjeri da je prazna crna stranica bez grešaka u konzoli**

---

## Task 2: Navigacija

**Files:**
- Modify: `index.html` — dodaj `<nav>` unutar `<body>` prije `<script>`
- Modify: `style.css` — dodaj nav stilove

- [ ] **Korak 1: Dodaj `<nav>` HTML u `index.html`**

Dodaj odmah nakon `<body>` taga (prije `<script>`):

```html
<header class="site-header" id="vrh">
  <nav class="nav" aria-label="Glavna navigacija">
    <a href="#vrh" class="nav-logo" aria-label="Đakovački Kulin — povratak na vrh">
      <span class="nav-logo-icon" aria-hidden="true">🥩</span>
      <span class="nav-logo-text">Đakovački Kulin</span>
    </a>

    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navMenu" aria-label="Otvori navigacijski izbornik">
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
    </button>

    <ul class="nav-menu" id="navMenu" role="list">
      <li><a href="#vrh" class="nav-link">Naslovnica</a></li>
      <li><a href="#o-nama" class="nav-link">O nama</a></li>
      <li><a href="#o-nama" class="nav-link">Kulin</a></li>
      <li><a href="#galerija" class="nav-link">Galerija</a></li>
      <li><a href="#kontakt" class="nav-link">Kontakt</a></li>
    </ul>
  </nav>
</header>
```

- [ ] **Korak 2: Dodaj nav stilove u `style.css`**

```css
/* ── NAVIGACIJA ── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-brand);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: var(--color-white);
  transition: opacity var(--transition);
}

.nav-logo:hover { opacity: 0.85; }
.nav-logo-icon { font-size: 20px; }

.nav-menu {
  display: flex;
  list-style: none;
  gap: 32px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color var(--transition);
  padding: 4px 0;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  color: var(--color-white);
  border-bottom-color: rgba(255, 255, 255, 0.5);
}

/* Hamburger button — skriven na desktopu */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav-toggle-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}

/* Mobile nav */
@media (max-width: 767px) {
  .nav-toggle { display: flex; }

  .nav-menu {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--color-brand);
    flex-direction: column;
    gap: 0;
    padding: 8px 0 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .nav-menu.is-open { display: flex; }

  .nav-link {
    display: block;
    padding: 12px 24px;
    border-bottom: none;
    font-size: 14px;
  }

  /* Hamburger → X animacija */
  .nav-toggle[aria-expanded="true"] .nav-toggle-bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .nav-toggle[aria-expanded="true"] .nav-toggle-bar:nth-child(2) {
    opacity: 0;
  }
  .nav-toggle[aria-expanded="true"] .nav-toggle-bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}
```

- [ ] **Korak 3: Dodaj hamburger toggle u `main.js`**

```js
// Hamburger menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Zatvori menu pri kliku na link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
```

- [ ] **Korak 4: Provjeri u browseru**
  - Desktop: navigacija vidljiva, hamburger skriven
  - Smanji prozor ispod 768px: hamburger gumb se pojavi, klik otvara/zatvara menu

---

## Task 3: Hero sekcija

**Files:**
- Modify: `index.html` — dodaj `<section id="hero">` iza `</header>`
- Modify: `style.css` — dodaj hero stilove

- [ ] **Korak 1: Dodaj hero HTML iza `</header>` taga**

```html
<section class="hero" id="hero">
  <div class="hero-content">
    <p class="hero-tag">Udruga kulinara · Đakovo</p>
    <h1 class="hero-title">
      Đakovački<br>
      <span class="hero-title-accent">Kulin</span>
    </h1>
    <div class="hero-divider" aria-hidden="true"></div>
    <p class="hero-sub">
      Čuvamo tradiciju slavonskog kulina i promičemo kvalitetu
      domaćih proizvoda već više od tri desetljeća.
    </p>
    <a href="#o-nama" class="hero-btn">Saznaj više</a>
  </div>
</section>
```

- [ ] **Korak 2: Dodaj hero stilove u `style.css`**

```css
/* ── HERO ── */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px;
  background: radial-gradient(ellipse at center, #2d0808 0%, #1a0505 50%, #0d0202 100%);
  overflow: hidden;
}

/* Suptilni radijalni sjaj iza sadržaja */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 40%, rgba(107, 15, 15, 0.25) 0%, transparent 65%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 680px;
}

.hero-tag {
  color: var(--color-brand-light);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 24px;
}

.hero-title-accent {
  color: var(--color-brand-light);
}

.hero-divider {
  width: 60px;
  height: 3px;
  background: var(--color-brand);
  margin: 0 auto 28px;
  border-radius: 2px;
}

.hero-sub {
  color: var(--color-muted);
  font-size: 17px;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto 40px;
}

.hero-btn {
  display: inline-block;
  background: var(--color-brand);
  color: var(--color-white);
  padding: 14px 36px;
  border-radius: var(--radius);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid var(--color-brand-light);
  transition: background var(--transition), transform var(--transition);
}

.hero-btn:hover {
  background: var(--color-brand-light);
  transform: translateY(-1px);
}
```

- [ ] **Korak 3: Provjeri u browseru** — hero treba zauzimati gotovo cijeli ekran, naslov velik, crveni akcent na "Kulin", gumb funkcionira (scroll do `#o-nama`, koji još ne postoji — to je u redu)

---

## Task 4: Statistike traka

**Files:**
- Modify: `index.html` — dodaj `.stats-bar` iza `</section>` hero-a
- Modify: `style.css` — dodaj stats stilove

- [ ] **Korak 1: Dodaj stats HTML iza hero `</section>`**

```html
<div class="stats-bar" aria-label="Ključne činjenice o udruzi">
  <div class="stat-item">
    <span class="stat-num">35+</span>
    <span class="stat-lbl">Godina tradicije</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">1988.</span>
    <span class="stat-lbl">Godina osnivanja</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">Svake godine</span>
    <span class="stat-lbl">Nova natjecanja</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">Đakovo</span>
    <span class="stat-lbl">Sjedište udruge</span>
  </div>
</div>
```

- [ ] **Korak 2: Dodaj stats stilove u `style.css`**

```css
/* ── STATISTIKE ── */
.stats-bar {
  background: var(--color-brand);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
}

.stat-item:last-child { border-right: none; }

.stat-num {
  font-size: 26px;
  font-weight: 800;
  color: var(--color-white);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-lbl {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
}

@media (max-width: 767px) {
  .stats-bar { grid-template-columns: repeat(2, 1fr); }

  .stat-item:nth-child(2) { border-right: none; }
  .stat-item:nth-child(1),
  .stat-item:nth-child(2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
}
```

- [ ] **Korak 3: Provjeri u browseru** — 4 stupca na desktopu, 2×2 na mobitelu, crvena pozadina

---

## Task 5: Sekcija "O udruzi"

**Files:**
- Modify: `index.html` — dodaj `<section id="o-nama">`
- Modify: `style.css` — dodaj about stilove

- [ ] **Korak 1: Dodaj about HTML iza stats-bar diva**

```html
<section class="about" id="o-nama">
  <div class="about-inner">
    <div class="about-text">
      <p class="section-tag">O udruzi</p>
      <h2 class="about-title">Više od 35 godina<br>njegujemo slavonski okus</h2>
      <p class="about-body">
        Udruga kulinara "Đakovački kulin" osnovana je s ciljem očuvanja i promocije
        tradicijskog slavonskog kulina. Od 1988. godine organiziramo natjecanja u sklopu
        manifestacije "Đakovački vezovi" gdje stručna komisija ocjenjuje kvalitetu
        domaćih kulina prema strogo definiranim kriterijima.
      </p>
      <p class="about-body">
        Drago nam je što možemo pozdraviti sve ljubitelje slavonske tradicije i pozvati
        ih da se upoznaju s radom naše udruge. Transparentno prikazujemo svaki aspekt
        naše djelatnosti jer vjerujemo u kvalitetu i autentičnost.
      </p>
      <a href="#kontakt" class="about-link">Kontaktirajte nas →</a>
    </div>

    <aside class="about-card" aria-label="Zašto Đakovački kulin">
      <h3 class="about-card-title">Zašto Đakovački kulin?</h3>
      <ul class="about-card-list">
        <li class="about-card-item">
          <span class="about-card-dot" aria-hidden="true"></span>
          Tradicijski slavonski recept
        </li>
        <li class="about-card-item">
          <span class="about-card-dot" aria-hidden="true"></span>
          Stručna komisija ocjenjivanja
        </li>
        <li class="about-card-item">
          <span class="about-card-dot" aria-hidden="true"></span>
          Dio "Đakovačkih vezova"
        </li>
        <li class="about-card-item">
          <span class="about-card-dot" aria-hidden="true"></span>
          Promocija domaće kvalitete
        </li>
        <li class="about-card-item">
          <span class="about-card-dot" aria-hidden="true"></span>
          Aktivni od 1988. godine
        </li>
      </ul>
    </aside>
  </div>
</section>
```

- [ ] **Korak 2: Dodaj about stilove u `style.css`**

```css
/* ── ZAJEDNIČKI SECTION ELEMENTI ── */
.section-tag {
  color: var(--color-brand-light);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

/* ── O UDRUZI ── */
.about {
  background: var(--color-bg);
  padding: 88px 24px;
}

.about-inner {
  display: flex;
  gap: 56px;
  align-items: flex-start;
  max-width: var(--max-width);
  margin: 0 auto;
}

.about-text { flex: 1; }

.about-title {
  font-size: clamp(24px, 4vw, 34px);
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 20px;
}

.about-body {
  color: var(--color-muted);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
}

.about-link {
  display: inline-block;
  margin-top: 8px;
  color: var(--color-brand-light);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-brand);
  padding-bottom: 2px;
  transition: color var(--transition), border-color var(--transition);
}

.about-link:hover {
  color: var(--color-white);
  border-color: var(--color-brand-light);
}

/* Kartica */
.about-card {
  flex-shrink: 0;
  width: 300px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--color-brand);
  border-radius: var(--radius);
  padding: 28px;
}

.about-card-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-white);
}

.about-card-list {
  list-style: none;
}

.about-card-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-muted);
  font-size: 13px;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
}

.about-card-item:last-child { border-bottom: none; }

.about-card-dot {
  width: 8px;
  height: 8px;
  background: var(--color-brand);
  border-radius: 1px;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .about-inner {
    flex-direction: column;
    gap: 40px;
  }
  .about-card { width: 100%; }
}
```

- [ ] **Korak 3: Provjeri u browseru** — dva stupca na desktopu, jedan stupac na tabletu/mobitelu, kartica s crvenom gornjom linijom

---

## Task 6: Galerija

**Files:**
- Modify: `index.html` — dodaj `<section id="galerija">`
- Modify: `style.css` — dodaj gallery stilove

- [ ] **Korak 1: Dodaj gallery HTML iza about `</section>`**

```html
<section class="gallery" id="galerija">
  <div class="gallery-inner">
    <div class="section-header">
      <p class="section-tag">Galerija</p>
      <h2 class="section-title">Natjecanja i događaji</h2>
      <div class="section-divider" aria-hidden="true"></div>
    </div>

    <div class="gallery-grid">
      <!-- Featured slika (zauzima 2 stupca) -->
      <figure class="gallery-item gallery-item--featured">
        <div class="gallery-placeholder" aria-hidden="true">
          <span class="gallery-placeholder-icon">📸</span>
        </div>
        <figcaption class="gallery-caption">Đakovački vezovi — natjecanje u kulinu</figcaption>
      </figure>

      <figure class="gallery-item">
        <div class="gallery-placeholder" aria-hidden="true">
          <span class="gallery-placeholder-icon">📸</span>
        </div>
        <figcaption class="gallery-caption">Ocjenjivanje kvalitete</figcaption>
      </figure>

      <figure class="gallery-item">
        <div class="gallery-placeholder" aria-hidden="true">
          <span class="gallery-placeholder-icon">📸</span>
        </div>
        <figcaption class="gallery-caption">Slavonska tradicija</figcaption>
      </figure>

      <figure class="gallery-item">
        <div class="gallery-placeholder" aria-hidden="true">
          <span class="gallery-placeholder-icon">📸</span>
        </div>
        <figcaption class="gallery-caption">Natjecatelji</figcaption>
      </figure>

      <figure class="gallery-item">
        <div class="gallery-placeholder" aria-hidden="true">
          <span class="gallery-placeholder-icon">📸</span>
        </div>
        <figcaption class="gallery-caption">Nagrade i priznanja</figcaption>
      </figure>
    </div>
  </div>
</section>
```

- [ ] **Korak 2: Dodaj gallery stilove u `style.css`**

```css
/* ── SECTION HEADER (dijeli galerija i kontakt) ── */
.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 800;
}

.section-divider {
  width: 50px;
  height: 3px;
  background: var(--color-brand);
  border-radius: 2px;
  margin: 16px auto 0;
}

/* ── GALERIJA ── */
.gallery {
  background: var(--color-bg-alt);
  padding: 88px 24px;
}

.gallery-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  cursor: pointer;
}

.gallery-item--featured {
  grid-column: span 2;
}

.gallery-placeholder {
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  transition: transform 0.3s ease;
}

.gallery-item--featured .gallery-placeholder {
  aspect-ratio: 16/9;
}

.gallery-placeholder-icon {
  font-size: 48px;
  opacity: 0.3;
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(107, 15, 15, 0.9));
  color: var(--color-white);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 24px 16px 14px;
  transform: translateY(100%);
  transition: transform 0.25s ease;
}

.gallery-item:hover .gallery-caption {
  transform: translateY(0);
}

.gallery-item:hover .gallery-placeholder {
  transform: scale(1.02);
}

@media (max-width: 767px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
  .gallery-item--featured {
    grid-column: 1 / -1;
  }
}
```

- [ ] **Korak 3: Provjeri u browseru** — featured slika zauzima 2 stupca, hover efekt prikazuje caption, na mobitelu featured je puna širina

---

## Task 7: Kontakt sekcija i Footer

**Files:**
- Modify: `index.html` — dodaj `<section id="kontakt">` i `<footer>`
- Modify: `style.css` — dodaj kontakt i footer stilove

- [ ] **Korak 1: Dodaj kontakt HTML iza gallery `</section>`**

```html
<section class="contact" id="kontakt">
  <div class="contact-inner">
    <div class="section-header">
      <p class="section-tag" style="color: rgba(255,255,255,0.6);">Kontakt</p>
      <h2 class="section-title">Kontaktirajte nas</h2>
      <div class="section-divider" style="background: rgba(255,255,255,0.4);" aria-hidden="true"></div>
      <p class="contact-sub">Imate pitanja o udruzi ili natjecanjima? Javite nam se.</p>
    </div>

    <ul class="contact-list" role="list">
      <li class="contact-item">
        <span class="contact-item-label">Adresa</span>
        <span class="contact-item-value">Đakovo, Osječko-baranjska županija</span>
      </li>
      <li class="contact-item">
        <span class="contact-item-label">E-mail</span>
        <a href="mailto:info@kulin-djakovo.com" class="contact-item-value contact-item-link">
          info@kulin-djakovo.com
        </a>
      </li>
      <li class="contact-item">
        <span class="contact-item-label">Manifestacija</span>
        <span class="contact-item-value">Đakovački vezovi</span>
      </li>
    </ul>
  </div>
</section>
```

- [ ] **Korak 2: Dodaj footer HTML iza contact `</section>`**

```html
<footer class="site-footer">
  <div class="footer-inner">
    <span class="footer-brand">Đakovački Kulin · Udruga kulinara</span>
    <span class="footer-copy">© 2025. — Sva prava pridržana</span>
  </div>
</footer>
```

- [ ] **Korak 3: Dodaj kontakt i footer stilove u `style.css`**

```css
/* ── KONTAKT ── */
.contact {
  background: var(--color-brand);
  padding: 88px 24px;
  text-align: center;
}

.contact-inner {
  max-width: 700px;
  margin: 0 auto;
}

.contact-sub {
  color: rgba(255, 255, 255, 0.75);
  font-size: 15px;
  margin-top: 16px;
}

.contact-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
  margin-top: 48px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.contact-item-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.contact-item-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-white);
}

.contact-item-link {
  transition: opacity var(--transition);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact-item-link:hover { opacity: 0.8; }

@media (max-width: 600px) {
  .contact-list {
    flex-direction: column;
    gap: 28px;
    align-items: center;
  }
}

/* ── FOOTER ── */
.site-footer {
  background: #0a0101;
  padding: 20px 24px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-brand {
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  font-weight: 600;
}

.footer-copy {
  color: rgba(255, 255, 255, 0.25);
  font-size: 11px;
}
```

- [ ] **Korak 4: Provjeri u browseru** — kontakt sekcija crvena, 3 podatka u redu, footer minimalistički, e-mail je klikabilan link

---

## Task 8: JavaScript — smooth scroll i nav efekt pri scrollu

**Files:**
- Modify: `main.js` — dodaj smooth scroll i scroll efekt

- [ ] **Korak 1: Dodaj scroll efekt na navigaciju i smooth scroll u `main.js`**

Zamijeni sadržaj `main.js` s ovim:

```js
// ── HAMBURGER MENU ──
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── NAV SCROLL EFEKT ──
// Header dobiva sjenu i malo tamniju pozadinu nakon 80px scrolla
const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  const onScroll = () => {
    if (window.scrollY > 80) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}
```

- [ ] **Korak 2: Dodaj `.is-scrolled` stil u `style.css`**

```css
/* Nav scroll efekt */
.site-header.is-scrolled {
  background: #550c0c;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}
```

- [ ] **Korak 3: Provjeri u browseru** — scroll dolje: header potamni; na mobitelu: hamburger otvara/zatvara menu, klik na link zatvara menu i skrola na sekciju

---

## Task 9: Završna provjera responzivnosti

**Files:**
- Modify: `style.css` — dodaj globalne mobile stilove na kraj datoteke

- [ ] **Korak 1: Dodaj tablet i globalne mobile dopune na kraj `style.css`**

```css
/* ── TABLET (768px – 1023px) ── */
@media (min-width: 768px) and (max-width: 1023px) {
  .about-inner { gap: 32px; }
  .about-card { width: 260px; }
}

/* ── GLOBALNI MOBILE (< 768px) ── */
@media (max-width: 767px) {
  .hero { min-height: 80vh; padding: 100px 20px 60px; }
  .about  { padding: 56px 20px; }
  .gallery { padding: 56px 20px; }
  .contact { padding: 56px 20px; }
}
```

- [ ] **Korak 2: Provjeri na 3 veličine ekrana**

  Otvori DevTools → Toggle Device Toolbar i provjeri:
  - **375px (iPhone):** jednokolumnski layout, hamburger menu radi, stats 2×2, galerija 2-col
  - **768px (iPad):** about prelazi u jedan stupac
  - **1280px (Desktop):** puni dvostupčani layout, horizontalna navigacija

---

## Task 10: SEO i accessibility završnica

**Files:**
- Modify: `index.html` — provjera i dopuna meta tagova, aria atributa

- [ ] **Korak 1: Provjeri `<head>` — trebaju biti prisutni svi ovi elementi**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Đakovački Kulin — Udruga kulinara Đakovo</title>
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://kulin-djakovo.com/">
```

- [ ] **Korak 2: Provjeri semantic HTML**
  - `<header>` oko `<nav>` ✓
  - `<main>` — dodaj `<main>` tag koji omata sve sekcije od hero-a do footera
  - `<section>` za svaki tematski blok ✓
  - `<footer>` ✓
  - `<h1>` samo jednom (hero) ✓, `<h2>` za section naslove ✓, `<h3>` za karticu ✓

- [ ] **Korak 3: Dodaj `<main>` wrapper u `index.html`**

Dodaj `<main id="glavni-sadrzaj">` neposredno iza `</header>` i zatvori ga `</main>` neposredno prije `<footer>`.

- [ ] **Korak 4: Validacija**

  Otvori [https://validator.w3.org/](https://validator.w3.org/) → "Validate by Direct Input" → zalijepi HTML → provjeri da nema Error-a (Warnings su ok)

---

## Redoslijed commitova (ako koristiš git)

```bash
git init
git add index.html style.css main.js
git commit -m "feat: nova početna stranica Đakovački Kulin"
```
