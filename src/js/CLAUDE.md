# JavaScript Development Guidelines - EliSun Project

This file provides JavaScript-specific guidance for Claude Code when working in the `src/js/` directory.

## 🔍 ESLint - Code Quality Check

**TOUJOURS lancer ESLint avant de commiter du JavaScript :**

```bash
npm run lint:js       # Vérifier la qualité JavaScript
npm run lint:js:fix   # Corriger automatiquement les problèmes
npm run lint          # Alias pour lint:js
```

**Ce que ESLint détecte :**
- ✅ Variables non utilisées (dead code)
- ✅ Imports dupliqués
- ✅ Fonctions identiques (duplication de code via SonarJS)
- ✅ Chaînes de caractères dupliquées (magic strings)
- ✅ Complexité cognitive excessive (>15)
- ✅ Utilisation de `var` au lieu de `const/let`
- ✅ Code inaccessible (unreachable)
- ✅ Problèmes d'égalité (== vs ===)

**Plugins activés :**
- `@eslint/js` - Configuration ESLint recommandée
- `eslint-plugin-import` - Gestion des imports/exports
- `eslint-plugin-sonarjs` - Détection de duplication et complexité

**Configuration** : `eslint.config.js` à la racine du projet

**Workflow** :
1. Écrire/modifier JavaScript
2. `npm run lint:js` pour détecter les problèmes
3. `npm run lint:js:fix` pour corriger automatiquement
4. Corriger manuellement les problèmes restants (variables inutilisées, etc.)
5. Commit uniquement quand ESLint valide le code

**Globales configurées** : setTimeout, fetch, GSAP, Swiper, IntersectionObserver, CustomEvent, etc.

---

## 🚨 CRITICAL RULES

### ES6+ Modules OBLIGATOIRES
**TOUJOURS** utiliser la syntaxe ES6+ modules (import/export).

✅ **CORRECT** :
```javascript
// main.js
import { initHero } from './components/hero.js';
import { initAnimations } from './animations/scrollAnimations.js';

// hero.js
export function initHero() {
  // ...
}

export default class Hero {
  // ...
}
```

❌ **INTERDIT** :
```javascript
// CommonJS
const hero = require('./components/hero');
module.exports = { initHero };

// Script tags global
// NO global variables without modules
```

### Commentaires Français OBLIGATOIRES
Tous les commentaires doivent être en **français**.

```javascript
// ✅ CORRECT
// Initialisation du hero avec animations GSAP
function initHero() {
  // Configuration de la timeline principale
  const tl = gsap.timeline();
}

// ❌ INTERDIT
// Initialize hero with GSAP animations
function initHero() {
  // Main timeline configuration
  const tl = gsap.timeline();
}
```

### Const/Let - JAMAIS var
```javascript
// ✅ CORRECT
const API_URL = 'https://api.example.com';
let counter = 0;

// ❌ INTERDIT
var API_URL = 'https://api.example.com';
var counter = 0;
```

## 📁 Structure des fichiers

```
src/js/
├── main.js (point d'entrée - import tous les modules)
├── components/
│   ├── hero.js
│   ├── benefits.js
│   ├── customerJourney.js
│   └── ...
├── animations/
│   ├── scrollAnimations.js
│   ├── gsapConfig.js
│   └── lenisScroll.js
└── utils/
    ├── analytics.js
    ├── tracking.js
    └── helpers.js
```

### main.js - Point d'entrée
```javascript
// Import des styles
import '../css/main.css';

// Import des composants
import { initHero } from './components/hero.js';
import { initBenefits } from './components/benefits.js';
import { initCustomerJourney } from './components/customerJourney.js';

// Import des animations
import { initScrollAnimations } from './animations/scrollAnimations.js';
import { initLenis } from './animations/lenisScroll.js';

// Import des utilitaires
import { initAnalytics } from './utils/analytics.js';

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initBenefits();
  initCustomerJourney();
  initScrollAnimations();
  initLenis();
  initAnalytics();
});
```

## 🎨 GSAP + Lenis - Patterns

### GSAP Timeline Pattern
```javascript
// animations/scrollAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Animation fade-in pour les sections
  gsap.utils.toArray('.section-fade').forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    });
  });

  // Animation cards avec stagger
  gsap.from('.benefit-item', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.benefits-section',
      start: 'top 70%',
    },
  });
}
```

### Lenis Smooth Scroll Pattern
```javascript
// animations/lenisScroll.js
import Lenis from '@studio-freight/lenis';

export function initLenis() {
  // Configuration Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  });

  // Animation loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Integration GSAP + Lenis
  lenis.on('scroll', ScrollTrigger.update);

  return lenis;
}
```

## 🎯 Component Pattern

### Classe Component Pattern
```javascript
// components/customerJourney.js

/**
 * Gestion des onglets du parcours client
 * @class CustomerJourney
 */
export default class CustomerJourney {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.tabs = this.container.querySelectorAll('.journey-tab');
    this.contents = this.container.querySelectorAll('.journey-content');

    this.init();
  }

  /**
   * Initialisation des event listeners
   */
  init() {
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => this.switchTab(index));
    });
  }

  /**
   * Change l'onglet actif
   * @param {number} index - Index de l'onglet à activer
   */
  switchTab(index) {
    // Retirer classe active de tous les tabs
    this.tabs.forEach(t => t.classList.remove('active'));
    this.contents.forEach(c => c.classList.remove('active'));

    // Ajouter classe active au tab cliqué
    this.tabs[index].classList.add('active');
    this.contents[index].classList.add('active');
  }
}

// Export fonction init pour main.js
export function initCustomerJourney() {
  const journey = new CustomerJourney('.customer-journey-section');
  return journey;
}
```

### Function Pattern (plus simple)
```javascript
// components/benefits.js

/**
 * Initialisation des bénéfices avec animations hover
 */
export function initBenefits() {
  const benefitItems = document.querySelectorAll('.benefit-item');

  benefitItems.forEach((item) => {
    item.addEventListener('mouseenter', handleBenefitHover);
    item.addEventListener('mouseleave', handleBenefitLeave);
  });
}

/**
 * Gestion du hover sur un bénéfice
 * @param {Event} e - Événement mouse
 */
function handleBenefitHover(e) {
  const item = e.currentTarget;
  item.classList.add('benefit-actif');
}

/**
 * Gestion de la sortie du hover
 * @param {Event} e - Événement mouse
 */
function handleBenefitLeave(e) {
  const item = e.currentTarget;
  item.classList.remove('benefit-actif');
}
```

## 📊 Analytics & Tracking

### Google Analytics Pattern
```javascript
// utils/analytics.js

/**
 * Initialisation Google Analytics 4
 */
export function initAnalytics() {
  // Configuration GA4
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');

  // Tracking événements custom
  trackCTAClicks();
  trackFormSubmissions();
  trackScrollDepth();
}

/**
 * Tracking des clics sur CTA
 */
function trackCTAClicks() {
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-cta');

  ctaButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const buttonText = e.target.textContent.trim();

      gtag('event', 'cta_click', {
        button_text: buttonText,
        page_location: window.location.href,
      });
    });
  });
}

/**
 * Tracking de la profondeur de scroll
 */
function trackScrollDepth() {
  const milestones = [25, 50, 75, 100];
  const tracked = new Set();

  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    milestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);

        gtag('event', 'scroll_depth', {
          percent: milestone,
        });
      }
    });
  });
}
```

## 🛠️ Utilitaires & Helpers

### Helpers communs
```javascript
// utils/helpers.js

/**
 * Attend que le DOM soit chargé
 * @param {Function} callback - Fonction à exécuter
 */
export function onDOMReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

/**
 * Debounce pour optimiser les events
 * @param {Function} func - Fonction à debouncer
 * @param {number} wait - Délai en ms
 * @returns {Function}
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Vérifie si un élément est visible dans le viewport
 * @param {HTMLElement} element - Élément à vérifier
 * @returns {boolean}
 */
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
```

## 📝 Conventions de nommage

### Variables et fonctions
```javascript
// ✅ camelCase pour variables et fonctions
const heroSection = document.querySelector('.hero');
let isMenuOpen = false;

function initHero() { }
function handleMenuToggle() { }
```

### Classes
```javascript
// ✅ PascalCase pour les classes
class HeroComponent { }
class CustomerJourney { }
```

### Constantes
```javascript
// ✅ UPPER_SNAKE_CASE pour les constantes globales
const API_URL = 'https://api.elisun.fr';
const MAX_ITEMS = 10;
const DEFAULT_DURATION = 1.5;
```

### Fichiers
```javascript
// ✅ camelCase ou kebab-case
// customerJourney.js OU customer-journey.js
// scrollAnimations.js OU scroll-animations.js
```

## 🎯 Best Practices

### JSDoc Commentaires
```javascript
/**
 * Initialise le carousel de témoignages
 * @param {string} selector - Sélecteur CSS du carousel
 * @param {Object} options - Options de configuration
 * @param {number} options.autoplay - Délai autoplay en ms
 * @param {boolean} options.loop - Active le mode loop
 * @returns {Object} Instance du carousel
 */
export function initTestimonialsCarousel(selector, options = {}) {
  // ...
}
```

### Arrow Functions
```javascript
// ✅ Privilégier les arrow functions pour callbacks
items.forEach((item) => {
  item.addEventListener('click', () => handleClick(item));
});

// ✅ Sauf si besoin du contexte 'this'
class Component {
  init() {
    this.element.addEventListener('click', function() {
      // 'this' fait référence à l'élément
      this.classList.toggle('active');
    });
  }
}
```

### Destructuring
```javascript
// ✅ Utiliser le destructuring
const { width, height } = element.getBoundingClientRect();
const [first, second, ...rest] = array;

// Dans les paramètres
function createCard({ title, image, description }) {
  // ...
}
```

### Template Literals
```javascript
// ✅ Utiliser les template literals
const html = `
  <div class="card">
    <h3>${title}</h3>
    <p>${description}</p>
  </div>
`;
```

## ⚠️ Anti-patterns à éviter

❌ `var` au lieu de `const`/`let`
❌ Commentaires en anglais
❌ CommonJS (`require`, `module.exports`)
❌ Variables globales sans modules
❌ jQuery (vanilla JS uniquement)
❌ Code synchrone bloquant (utiliser async/await)
❌ Event listeners sans nettoyage (memory leaks)
❌ Manipulation DOM excessive (utiliser templates)
