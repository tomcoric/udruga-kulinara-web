# Đakovački Kulin — Nova početna stranica: Design Spec

**Datum:** 2026-04-10  
**Projekt:** kulin-djakovo.com reimplementacija početne stranice  
**Lokacija output-a:** `C:/Users/Tomislav/kulin-djakovo/`

---

## Kontekst

Postojeći WordPress sajt `kulin-djakovo.com` je funkcionalan ali vizualno zastario (zadnji sadržaj 2018.), spor zbog heavy Avada theme-a, te ima SEO i accessibility propuste. Cilj je napraviti moderniju, čišću i responzivnu početnu stranicu koja zadržava isti sadržaj i svrhu, ali s novim dizajnom.

---

## Dizajn smjer

**Stil:** Tamna tradicija — tamna pozadina, burgundska crvena boja udruge kao primarna boja, moderna tipografija.

### Paleta boja
| Uloga | Boja | Hex |
|---|---|---|
| Primarna (brand) | Burgundska crvena | `#6b0f0f` |
| Akcent / hover | Svjetlija crvena | `#c0392b` |
| Pozadina (glavni) | Tamno crna | `#120303` |
| Pozadina (alt) | Crna | `#0d0202` |
| Površina kartice | Tamno crvenkasto | `#1e0404` |
| Border | Suptilna crvena | `#3a0a0a` |
| Tekst (primary) | Bijela | `#ffffff` |
| Tekst (muted) | Siva | `rgba(255,255,255,0.6)` |

### Tipografija
- **Headings:** `Inter` ili `system-ui`, weight 700–800
- **Body:** `Inter` ili `system-ui`, weight 400, size 14–16px, line-height 1.7
- **Labels/caps:** letter-spacing 3–4px, uppercase, size 10–11px

---

## Struktura stranice (sekcije po redu)

### 1. Navigacija (`<nav>`)
- Pozadina: `#6b0f0f`
- Lijevo: Logo s ikonom + naziv "Đakovački Kulin"
- Desno: Linkovi — Naslovnica, O nama, Kulin, Galerija, Kontakt
- Mobile: hamburger menu (toggle s JS-om), dropdown
- Sticky pozicija pri scrollu

### 2. Hero sekcija (`<section id="hero">`)
- Pozadina: tamni radijalni gradijent na bazi `#1a0505`
- Sadržaj (centrirano):
  - Tag: "Udruga kulinara · Đakovo" (crveni, uppercase, letter-spacing)
  - H1: "Đakovački Kulin" (velika bijela slova, "Kulin" u crvenoj)
  - Divider linija (crvena, 60px)
  - Podnaslov: "Čuvamo tradiciju slavonskog kulina i promičemo kvalitetu domaćih proizvoda već više od tri desetljeća."
  - CTA gumb: "Saznaj više" → `#o-nama`
- Min-height: 100vh na desktopu, auto na mobitelu

### 3. Statistike traka (`<div class="stats-bar">`)
- Pozadina: `#6b0f0f`
- 4 stupca: **35+ Godina tradicije** · **1988 Osnivanje** · **Natjecanja** (broj za potvrdu) · **Đakovo Sjedište**
- Na mobitelu: 2×2 grid

### 4. O udruzi (`<section id="o-nama">`)
- Pozadina: `#120303`
- Dva stupca (flex): tekst lijevo, kartica desno
- Tekst: tag, H2, paragraf, link "Pročitaj cijelu priču →"
- Kartica desno: border-top `#6b0f0f`, lista 4 ključne točke s crvenim squarama
- Na mobitelu: stack u jedan stupac, kartica ispod teksta

### 5. Galerija (`<section id="galerija">`)
- Pozadina: `#0d0202`
- Section header: tag + H2 + crveni divider
- Grid: 3 stupca, prva fotografija zauzima 2 stupca (featured)
- Ukupno 5 slika
- Hover efekt: overlay s crvenom pozadinom i caption tekstom
- Na mobitelu: 2 stupca (featured slika puna širina)
- Slike: placeholderi s CSS-om (udruga će zamijeniti stvarnim fotografijama)

### 6. Kontakt (`<section id="kontakt">`)
- Pozadina: `#6b0f0f`
- Centrirano: H2, podnaslov, 3 podatka (Adresa, E-mail, Manifestacija)
- Svaki podatak: label (uppercase, muted) + vrijednost

### 7. Footer (`<footer>`)
- Pozadina: `#0a0101`
- Lijevo: naziv udruge
- Desno: copyright
- Suptilno, minimalistično

---

## Tehničke specifikacije

### Struktura datoteka
```
kulin-djakovo/
├── index.html
├── style.css
└── main.js
```

### Responsivnost
- **Desktop:** ≥ 1024px — full layout, dva stupca gdje je propisano
- **Tablet:** 768–1023px — smanjena padding, naslovi manji
- **Mobile:** < 768px — jedan stupac, hamburger menu, stats 2×2

### JavaScript (`main.js`)
- Hamburger menu toggle
- Smooth scroll za anchor linkove
- Navigacija postaje opaque pri scrollu (opciono: suptilna animacija)

### CSS (`style.css`)
- CSS custom properties za sve boje (lako mijenjanje)
- Mobile-first media queries
- Bez vanjskih dependency-ja (nema Bootstrap, nema jQuery)
- Jedna Google Fonts importacija za `Inter`

### Pristupačnost
- Svi `<img>` tagovi imaju `alt` atribute
- Navigacija koristi `<nav>` semantic tag
- Headings u ispravnoj hijerarhiji (H1 → H2 → H3)
- `lang="hr"` na `<html>`
- `meta description` ispunjena
- Dovoljan kontrast teksta (bijelo na tamnoj pozadini ✓)

### SEO
- `<title>`: "Đakovački Kulin — Udruga kulinara Đakovo"
- `<meta name="description">`: kratki opis udruge
- Open Graph tagovi (og:title, og:description, og:type)

---

## Što se ne radi (out of scope)

- WordPress integracija (ovo je statični HTML prototip)
- Backend / forma za kontakt (samo podaci)
- Stvarne fotografije (placeholderi)
- Višejezična podrška
- Animacije pri scrollu (AOS ili slično)
