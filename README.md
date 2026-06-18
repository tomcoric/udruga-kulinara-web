# Đakovački Kulin — Službena web stranica

Informativna web stranica Udruge kulinara **Đakovački Kulin** iz Đakova. Stranica čuva i promiče tradiciju slavonskog kulina te informira o udruzi, natjecanjima i medijskoj pokrivenosti od 1988. godine.

---

## Struktura projekta

```
.
├── index.html          # Hrvatska verzija stranice
├── style.css           # Svi stilovi (CSS varijable, layout, animacije)
├── main.js             # Interaktivnost (hamburger, scroll efekti, lightbox...)
├── en/
│   └── index.html      # Engleska verzija stranice
└── pictures/           # Slike i logotipi
    ├── logo_udruge.1.png
    ├── logo_veliki.png
    ├── logo_udruge_HD.png
    ├── Spice-backgrounds.jpg
    ├── katedrala.png
    └── Title slika.jpg
```

---

## Sekcije stranice

| Sekcija | ID | Opis |
|---|---|---|
| Hero | `#hero` | Naslovna slika s logotipom i pozivom na akciju |
| O nama | `#o-nama` | Povijest i vrijednosti udruge, popis članova |
| Galerija | `#galerija` | Fotografije s natjecanja i događaja |
| Što je kulin? | `#sto-je-kulin` | Edukativni sadržaj o kulinu, tradiciji i EU zaštiti |
| Mediji | `#mediji` | Medijska pokrivenost — linkovi na vanjske članke |
| Kontakt | `#kontakt` | Adresa, e-mail i telefon |

---

## Tehnologije

- **HTML5** — semantička struktura, ARIA pristupačnost, OG tagovi za društvene mreže
- **CSS3** — CSS varijable, Flexbox, Grid, responzivni dizajn (mobile-first)
- **Vanilla JavaScript** — bez frameworka, bez vanjskih dependencyja
- **Google Fonts** — Inter (400, 600, 700, 800)

---

## Animacije i interaktivnost

- **Parallax** — hero pozadina i section-header slike pomiču se 30% sporije od sadržaja pri scrollu
- **Scroll fade-in** — elementi se pojavljuju s blagim translateY pri ulasku u viewport (`IntersectionObserver`)
- **Animirani brojači** — stats bar: `35+` se broji od 0, ostala polja imaju typewriter efekt
- **Lightbox** — klik na galerijske slike otvara overlay s prikazom pune veličine
- **Hamburger menu** — animacija prelaska u X na mobilnom
- **Nav scroll efekt** — navigacija potamni nakon 80px scrolla
- **Responzivnost** — prilagođeno za desktop (1024px+), tablet (768–1023px) i mobitel (<768px)

---

## Pokretanje

Projekt ne zahtijeva build alate ni server. Dovoljno je otvoriti `index.html` u browseru, ili pokrenuti lokalni server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Zatim otvoriti [http://localhost:8000](http://localhost:8000).

---

## Dostupnost (Accessibility)

- Skip link za preskok navigacije
- ARIA labeli na interaktivnim elementima
- Tipkovnička navigacija za lightbox (`ESC` za zatvaranje)
- Podrška za `prefers-reduced-motion` — parallax se isključuje korisnicima koji preferiraju smanjeno kretanje

---

## Jezične verzije

| Jezik | Putanja |
|---|---|
| Hrvatski | `/index.html` |
| Engleski | `/en/index.html` |

---

## Deploy

Projekt je **čisti statični site** bez build koraka — samo uploadajte sve datoteke na hosting.

### GitHub Pages

```bash
git add .
git commit -m "Update"
git push origin main
```

Aktivirajte GitHub Pages u Settings → Pages → Source: `main` grana, `/ (root)`.

### Klasični hosting (FTP)

Uploadajte sve datoteke (`index.html`, `style.css`, `main.js`, `pictures/`, `en/`) u root direktorij hostinga.

---

## Status projekta

| Stavka | Status |
|--------|--------|
| Hrvatska verzija | ✅ Gotovo |
| Engleska verzija | ✅ Gotovo |
| Responzivni dizajn | ✅ Gotovo |
| Accessibility (ARIA) | ✅ Gotovo |
| SEO / OG tagovi | ✅ Gotovo |
| Kontakt forma (backend) | ⬜ Nije implementirano |
