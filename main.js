// main.js — Đakovački Kulin

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// ── HAMBURGER MENU ──
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── SCROLL FADE-IN ──
const fadeTargets = [
  '.about-text > p',
  '.about-card',
  '.gallery-item',
  '.contact-item',
  '.about-details',
  '.about-link',
];

fadeTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('fade-in');
  });
});

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ── ANIMIRANI BROJAČ (stats bar) ──
// Polja koja se broje (samo "35+")
const COUNTER_FIELDS = ['35+'];

// Polja s typewriter efektom
const TYPEWRITER_FIELDS = ['Svake godine', 'Đakovo', '1988.'];

function animateCounter(el) {
  const text   = el.textContent.trim();
  if (!COUNTER_FIELDS.includes(text)) return; // samo definirana brojevna polja

  const suffix = text.replace(/[\d]/g, '');
  const target = parseInt(text.replace(/\D/g, ''), 10);

  const duration = 3600; // sporije odbrojavanje
  const start    = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    // linearna brzina — jednako cijelo vrijeme, nema ubrzanja ni usporavanja
    const current  = Math.round(target * progress);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

function animateTypewriter(el) {
  const text     = el.textContent.trim();
  if (!TYPEWRITER_FIELDS.includes(text)) return;

  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 80);
}

const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statsBar.querySelectorAll('.stat-num').forEach(el => {
          animateCounter(el);
          animateTypewriter(el);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterObserver.observe(statsBar);
}

// ── LIGHTBOX ──
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose   = document.getElementById('lightboxClose');

function openLightbox(src, alt, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxCaption.textContent = caption || '';
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
  setTimeout(() => { lightboxImg.src = ''; }, 250);
}

// Označi klikabilne gallery iteme i dodaj listener
document.querySelectorAll('.gallery-item').forEach(item => {
  const img = item.querySelector('.gallery-img');
  if (!img) return; // placeholder, preskoči

  item.classList.add('gallery-item--has-img');
  const caption = item.querySelector('.gallery-caption');

  item.addEventListener('click', () => {
    openLightbox(img.src, img.alt, caption ? caption.textContent : '');
  });

  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(img.src, img.alt, caption ? caption.textContent : '');
    }
  });
});

// Zatvori na X ili klik izvan slike
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
}

// Zatvori na ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('is-open')) {
    closeLightbox();
  }
});

// ── NAV SCROLL EFEKT ──
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
