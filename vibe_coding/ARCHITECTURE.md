# 🏗️ Architecture et structure du projet

**Utilité** : Vision structurelle complète - composants, relations, patterns
**Usage** : Consultez avant tout développement de nouvelle feature ou refactoring
**Pour l'IA** : Cette architecture est la FONDATION du projet. Tout nouveau code 
doit s'intégrer dans cette structure existante. Ne proposez JAMAIS de modifications 
architecturales sans justification explicite et validation préalable.

---

## 🏗️ Structure du projet EliSun

### Architecture HTML/CSS/JS + Webpack (VERSION MODULAIRE OPTIMISÉE 2025-09-24)
```
ClaudeCode-ELISUN/
├── src/
│   ├── pages/                  # Pages HTML séparées
│   │   ├── index.html         # Landing page principale
│   │   ├── installation.html  # Page processus installation (avec .step-indicator)
│   │   ├── materiel.html      # Catalogue e-commerce produits
│   │   ├── about.html         # À propos détaillé
│   │   ├── services.html      # Services étendus
│   │   └── contact.html       # Contact étendu
│   ├── css/                   # CSS + Tailwind (PAS DE SCSS) - ARCHITECTURE MODULAIRE
│   │   ├── main.css           # Point d'entrée @import Tailwind + imports séquentiels
│   │   ├── base/
│   │   │   ├── reset.css      # Reset CSS custom
│   │   │   ├── variables.css  # CSS custom properties EliSun (couleurs/fonts)
│   │   │   ├── typography.css # Typographies et tailles
│   │   │   ├── utilities.css  # Helpers atomiques uniquement (positioning, etc.)
│   │   │   └── animations.css # @keyframes centralisés réutilisables
│   │   ├── components/        # Composants CSS modulaires par responsabilité
│   │   │   ├── header.css     # Header + navigation
│   │   │   ├── navbar.css     # Navigation spécifique
│   │   │   ├── buttons.css    # Tous boutons (.bouton, .btn-*, .tab-button)
│   │   │   ├── cards.css      # Toutes cards (floating, price, trust, result)
│   │   │   ├── forms.css      # Formulaires et radio-group
│   │   │   ├── sections.css   # Sections avec .step-indicator
│   │   │   ├── footer.css     # Footer
│   │   │   └── modals.css     # Modales/lightbox
│   │   └── pages/             # Styles spécifiques pages
│   │       ├── home.css       # Landing page
│   │       ├── materiel.css   # Page catalogue e-commerce
│   │       ├── about.css      # Page à propos
│   │       ├── services.css   # Page services
│   │       └── contact.css    # Page contact
│   ├── js/
│   │   ├── main.js           # Point d'entrée principal + init
│   │   ├── components/       # Composants JS modulaires
│   │   │   ├── hero.js       # Section hero avec animations
│   │   │   ├── services.js   # Grille services photovoltaïques
│   │   │   ├── testimonials.js # Carousel témoignages clients
│   │   │   ├── contact-form.js # Formulaire devis multi-étapes
│   │   │   ├── gallery.js    # Galerie réalisations + lightbox
│   │   │   ├── benefits.js   # Section bénéfices avec triple mode parallaxe + animations scroll
│   │   │   ├── swiper-config.js # Configuration Swiper carousels
│   │   │   ├── faq-accordion.js # Accordéons FAQ interactifs
│   │   │   ├── features-nav.js # Navigation sticky features + auto-hide
│   │   │   └── trigger-block.js # Toggle particuliers/professionnels (opacity/z-index)
│   │   ├── animations/       # GSAP + Lenis
│   │   │   ├── scroll.js     # Lenis smooth scroll config
│   │   │   ├── transitions.js # GSAP animations (fade, slide)
│   │   │   └── interactions.js # Hover effects, click animations
│   │   └── utils/           # Utilitaires et helpers
│   │       ├── analytics.js  # Google Analytics 4 integration
│   │       ├── tracking.js   # Facebook Pixel + Hotjar setup
│   │       ├── dom.js        # Helpers manipulation DOM
│   │       └── validators.js # Validation formulaires
│   └── assets/
│       ├── images/          # Assets visuels optimisés
│       │   ├── logo/        # Logo EliSun (SVG + PNG)
│       │   ├── hero/        # Image hero principale (WebP)
│       │   ├── gallery/     # Photos réalisations clients
│       │   └── icons/       # Icons photovoltaïque, maison, etc.
│       ├── fonts/           # Polices custom (Inter, Poppins)
│       └── videos/          # Vidéos démonstration (optionnel)
├── dist/                    # Build production (généré par Webpack)
│   ├── css/                 # CSS minifié avec hash
│   ├── js/                  # JS minifié avec hash
│   ├── assets/              # Assets optimisés
│   └── index.html           # HTML final injecté
├── webpack.config.js        # Config Webpack dev/prod
├── tailwind.config.js      # Thème EliSun (couleurs/fonts/animations)
├── package.json            # Scripts npm custom (dev/build/prod)
├── .gitignore              # Ignore node_modules, dist, etc.
└── vibe_coding/            # Documentation projet (7 fichiers)
```

## 🧩 STANDARDS DE BASE

### **Principes obligatoires**
- **Mobile-first** : Responsive avec Tailwind grids
- **Structure HTML** : Pattern obligatoire `<section> → .containerMax → .grid-tailwind`
- **Performance** : Webpack optimisé + images WebP
- **SEO** : Structure HTML sémantique + meta tags
- **Maintenance** : Code modulaire et commenté
- **Animations** : GSAP performant + Lenis smooth

### **Technologies du projet**
- **Frontend** : HTML5 + CSS3 + JavaScript ES6+
- **Bundler** : Webpack (dev-server + production build)
- **Styles** : Tailwind CSS + CSS custom variables
- **Animations** : GSAP (animations) + Lenis (smooth scroll)
- **Hébergement** : Netlify (recommandé pour sites statiques)

## 🎯 RÈGLES TECHNIQUES

- **Vanilla JavaScript** : Pas de frameworks lourds
- **Modularité** : Composants JS importables via Webpack
- **Performance** : Images optimisées, CSS/JS minifiés
- **Séparation** : Styles séparés par composant et utilité
- **Nommage** : Fichiers explicites en français
- **Environnements** : Dev (hot-reload) et Prod (optimisé)
- **Tracking** : GA4, Hotjar, Facebook Pixel intégrés

## 📱 STRUCTURE RESPONSIVE OBLIGATOIRE

### Pattern HTML standard
```html
<section>
   <div class="containerMax">
      <div class="grid-tailwind">
         <!-- Contenu -->
      </div>
   </div>
</section>
```

### Classes utilitaires
- **`.containerMax`** : Largeur max (1300px) + centrage + marges responsive
- **`.grid-tailwind`** : Grilles Tailwind responsive + spacing optimal
- **Détails** : Voir `RESPONSIVE_STRUCTURE.md` pour spécifications complètes

### Répartition responsabilités
- **Grilles/Layout** : Classes Tailwind (`grid grid-cols-*`, `gap-*`)
- **Éléments enfants** : CSS custom (typography, colors, animations)
- **Breakpoints** : Standards Tailwind (sm, md, lg, xl)

## 🧩 ARCHITECTURE CSS MODULAIRE (2025-09-24)

### Séparation stricte des responsabilités
- **`base/utilities.css`** : Helpers atomiques uniquement (`.absolute-center`, `.flex-center`)
- **`components/buttons.css`** : Tous boutons (`.bouton`, `.btn-*`, `.tab-button`)
- **`components/cards.css`** : Toutes cards (`.floating-cards`, `.price-card`, `.result-card`)
- **`components/forms.css`** : Formulaires (`.radio-group`, `.email-form`, `.signup-form`)
- **`components/sections.css`** : Sections spécifiques (`.step-indicator`, hero, etc.)
- **`base/animations.css`** : Tous @keyframes centralisés et réutilisables

### Règles anti-redondance
- **Un composant = un seul fichier** : Éviter duplication entre files
- **Migration logique** : Utilities → Components selon fonction
- **Exemple** : `.tab-button` (utilities) → `buttons.css` (logique composant)
- **Consolidation** : `.step-indicator` dans sections.css (contexte section)

### Ordre d'import dans main.css
```css
/* Base styles */
@import './base/reset.css';
@import './base/variables.css';
@import './base/typography.css';
@import './base/utilities.css';
@import './base/animations.css';

/* Components styles */
@import './components/buttons.css';
@import './components/cards.css';
@import './components/forms.css';
@import './components/sections.css';
```

### Architecture modulaire CSS validée
- **`variables.css`** : Variables CSS primitives + sémantiques hexadécimales
- **`typography.css`** : Styles typographiques globaux (pas dans composants)
- **`utilities.css`** : Helpers atomiques uniquement (positioning, layout)
- **`animations.css`** : @keyframes évitant duplication code
- **`sections.css`** : CSS nesting pour sections + `.step-indicator`

### Règles de maintenance
- **Tests validation** : Build webpack + vérification classes appliquées
- **HTML simplifié** : Classes sémantiques vs inline CSS
- **Diagnostic obligatoire** : Analyser conflits CSS avant modifications
- **Flexbox direct** : `display: flex` + `flex: 1` préféré aux sélecteurs complexes

## 🎬 Techniques d'animation avancées (2025-01-16)

### **Triple Mode Parallaxe Gallery-Container**
- **Mode 1 - Classic** : Parallaxe subtil facteur -0.2 avec LERP smoothing 0.1
- **Mode 2 - Sticky Smooth** : Simulation sticky top: 50px avec LERP smoothing configurable
- **Mode 3 - Instant** : Application directe transform sans smoothing (réponse immédiate)
- **Toggle facile** : Constant `PARALLAX_MODE = 'classic' | 'sticky' | 'instant'`
- **Fichier** : `src/js/components/benefits.js` (lignes 297-581)

### **LERP Smoothing (Linear Interpolation)**
- **Usage** : Animations 60fps ultra fluides avec requestAnimationFrame
- **Formule** : `currentValue = start + (end - start) * factor`
- **Factor** : 0.05-0.2 (plus petit = plus smooth, plus grand = plus réactif)
- **Implémentation modes** : Classic (-0.2 factor), Sticky smooth (LERP 0.1), Instant (aucun)
- **Boucle animation** : `requestAnimationFrame` avec ticking flag (modes classic/sticky uniquement)
- **Calcul sticky précis** : `galleryNaturalTop = sectionRect.top + galleryOffsetTop` pour position exacte
- **Fichier** : `src/js/components/benefits.js` (fonction lerp + boucles animate)

### **IntersectionObserver avec Hystérésis**
- **Problème** : Flickering quand élément oscille autour du seuil
- **Solution** : Seuils différents apparition (90%) vs disparition (80%)
- **Zone morte** : 10% entre les seuils = stabilité visuelle
- **Threshold array** : `[0, 0.8, 0.9, 1]` pour détecter franchissement seuils
- **Implémentation 1** : Bento-grid fade-in/fade-out sans scintillement
- **Implémentation 2** : Tab-button inactive/active synchronisé avec benefit-content
- **Fichier** : `src/js/components/benefits.js` (observers benefit-content)

### **Parallaxe conditionnel optimisé**
- **Calcul conditionnel** : Uniquement si `rect.top < window.innerHeight && rect.bottom > 0`
- **Limites dynamiques** : `Math.max(-200, Math.min(200, value))` empêche déplacement excessif (classic)
- **Limite sticky** : `maxTranslate = section.height - gallery.height - offsetTop` (sticky smooth/instant)
- **Ticking flag** : Évite surcharge avec requestAnimationFrame (modes classic/sticky smooth)
- **Passive listeners** : `{ passive: true }` pour performance scroll
- **Mode instant** : Application directe `style.transform` dans handleScroll sans RAF

### **CSS Transitions avec états multiples**
- **Opacity + Transform** : `opacity 0.6s ease, transform 0.6s ease`
- **États** : Default (opacity: 0) → Visible (opacity: 1 + translateY: 0)
- **Classe toggle** : `.visible` ajoutée/retirée par IntersectionObserver
