# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🏗️ Project Architecture

**EliSun** is a photovoltaic company website built using the "Vibe Coding" methodology with vanilla JavaScript/CSS/HTML stack.

### Core Stack
- **Frontend**: Vanilla HTML5/CSS3/JavaScript (ES6+ modules) - NO frameworks
- **CSS**: Tailwind CSS v3.4.17 + CSS custom properties (NO SCSS)
- **Bundler**: Webpack with multi-page configuration
- **Animations**: GSAP + Lenis smooth scroll
- **Development**: Webpack dev server with hot reload

### Key Constraints
- **FORBIDDEN**: React, Next.js, Vue, Python, jQuery, SCSS, CSS-in-JS
- **REQUIRED**: ES6+ modules, French comments, mobile-first CSS
- **CSS Approach**: Tailwind for utilities, custom CSS for brand-specific styles
- **Colors/Typography**: Managed in CSS custom properties, NOT Tailwind theme

### Architecture Pattern
```
src/js/main.js → Entry point importing all modules
├── components/ → Page sections (hero, services, gallery, etc.)
├── animations/ → GSAP/Lenis interactions
└── utils/ → Analytics and tracking

src/css/main.css → Tailwind + custom imports
├── base/ → Variables, reset, typography, utilities
└── CSS custom properties for EliSun brand identity
```

## 🚀 Development Commands

### Essential Commands
```bash
npm run dev          # Start dev server on localhost:8080
npm run build        # Production build
npm run format       # Prettier formatting
```

### Code Quality Commands
```bash
# JavaScript
npm run lint         # ESLint JavaScript (alias for lint:js)
npm run lint:js      # Analyze JavaScript code quality
npm run lint:js:fix  # Auto-fix JavaScript issues

# CSS
npm run lint:css      # Analyze CSS code quality
npm run lint:css:fix  # Auto-fix CSS issues
```

### Port Management
If port 8080 is busy:
```bash
npx kill-port 8080   # Kill process on port
npm run dev          # Restart server
```

### Webpack Multi-Page Setup
- **index.html**: Main landing page
- **about.html, services.html, contact.html**: Additional pages
- All pages automatically get JS/CSS injection via HtmlWebpackPlugin

## 📋 Vibe Coding Methodology

This project follows strict documentation discipline. **AFTER EVERY CODE SESSION:**

### Required File Updates
1. **PREFERENCES.md** - Document session feedback and style preferences
2. **IMPLEMENTATION_PLAN.md** - Update roadmap progress (130-step plan)
3. **START_HERE.md** - Update current phase status if changed

### Documentation Structure
- **vibe_coding/START_HERE.md** - Project overview and current status
- **vibe_coding/CONTEXT.md** - Business context and brand identity
- **vibe_coding/ARCHITECTURE.md** - Technical architecture decisions
- **vibe_coding/PROJECT_RULES.md** - Non-negotiable technical constraints
- **vibe_coding/PREFERENCES.md** - Code style preferences with mandatory update checklist

## 🎨 Brand Identity

### Colors (CSS Custom Properties)
- **Primary**: EliSun blue variations (`--color-elisun-blue-*`)
- **Secondary**: Solar yellow (`--color-elisun-yellow-*`)
- **Accent**: Ecological green (`--color-elisun-green-*`)

### Component System
- **Cards**: `.card-elisun` with hover animations
- **Buttons**: `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Layout**: `.container-elisun`, `.section-padding`
- **Grids**: `.grid-auto-fit`, `.grid-auto-fill`

## 🔄 Development Workflow

### Current Status
- **Phase 1**: ✅ Complete (Webpack + Tailwind + base structure)
- **Phase 2**: Next - HTML structure development
- **Phases 3-8**: Landing page → animations → content → analytics → deployment

### Component Development Pattern
1. Create component JS class in `src/js/components/`
2. Add corresponding CSS in appropriate location
3. Import in `main.js`
4. Test with `npm run dev`
5. **Run code quality checks** (see below)
6. Update documentation files

## 🔍 Code Quality & Linting

**CRITICAL**: Always run linters before committing code. This project uses automated tools to detect duplicates, dead code, and enforce best practices.

### Tools Configured

#### Stylelint (CSS)
- **Version**: v16.26.1
- **Config**: `.stylelintrc.json`
- **Detects**: Duplicate properties, redundant values, color notation issues, shorthand opportunities

```bash
npm run lint:css      # Check CSS quality
npm run lint:css:fix  # Auto-fix CSS issues (884 issues auto-fixed in initial run)
```

#### ESLint (JavaScript)
- **Version**: v9.33.0 with flat config
- **Config**: `eslint.config.js`
- **Plugins**: @eslint/js, eslint-plugin-import, eslint-plugin-sonarjs
- **Detects**: Unused variables, duplicate imports, identical functions, duplicate strings, cognitive complexity

```bash
npm run lint:js       # Check JavaScript quality
npm run lint:js:fix   # Auto-fix JavaScript issues
npm run lint          # Alias for lint:js
```

### Pre-Commit Workflow

**MANDATORY before every commit:**

1. **Run both linters:**
   ```bash
   npm run lint:css
   npm run lint:js
   ```

2. **Fix auto-fixable issues:**
   ```bash
   npm run lint:css:fix
   npm run lint:js:fix
   ```

3. **Manually fix remaining issues** reported by linters

4. **Verify fixes:**
   ```bash
   npm run lint:css
   npm run lint:js
   ```

5. **Commit only when both linters pass** (or have acceptable warnings)

### What Linters Detect

**Code Duplication:**
- ✅ Duplicate CSS properties
- ✅ Duplicate JavaScript imports
- ✅ Identical functions (SonarJS)
- ✅ Duplicate string literals

**Dead Code:**
- ✅ Unused CSS properties
- ✅ Unused JavaScript variables
- ✅ Unreachable code

**Best Practices:**
- ✅ Modern CSS notation (rgb vs rgba)
- ✅ Shorthand properties (inset vs top/right/bottom/left)
- ✅ const vs let vs var enforcement
- ✅ Cognitive complexity warnings

### Code Style Enforcement - CRITICAL RULES

#### 🚨 CSS Nesting OBLIGATOIRE
**TOUJOURS** utiliser l'imbrication/nesting CSS - JAMAIS de classes au même niveau.

```css
/* ✅ CORRECT */
.parent {
  .child {
    .grandchild { }
  }
}

/* ❌ INTERDIT */
.parent { }
.child { }
.grandchild { }
```

#### ♻️ Réutilisation Composants (DRY)
**TOUJOURS vérifier** les classes existantes avant d'en créer de nouvelles.
- Chercher dans `src/css/components/` et `utilities.css`
- Réutiliser ou créer variante (`.btn-primary`, `.btn-secondary`)

#### 📏 Spacing Macro/Micro
- **Macro** (sections, containers) → Tailwind dans HTML (`py-32`, `mb-16`)
- **Micro** (composants) → CSS dans fichiers (`.btn-primary { padding: ... }`)

#### 💬 Commentaires Français
**OBLIGATOIRE** dans tous les fichiers (HTML, CSS, JS).

### 📂 Contextual CLAUDE.md Files

This project uses **specialized CLAUDE.md files** for detailed domain instructions:

- **src/css/CLAUDE.md** → CSS rules (nesting détaillé, spacing, variables, Grid vs Flexbox)
- **src/js/CLAUDE.md** → JavaScript conventions (ES6+, modules, GSAP patterns)
- **src/pages/CLAUDE.md** → HTML structure (semantic, patterns, accessibility)

**Important** : When working in a specific directory, the local CLAUDE.md provides detailed best practices for that domain.

---

## 📦 Build & Asset Management

### 🚨 Critical Rules for Assets Path

#### Règle 1: Chemins Relatifs dans src/pages/
**DANS LES FICHIERS SOURCE** (`src/pages/*.html`):

```html
<!-- ✅ CORRECT - Chemin relatif pour images -->
<img src="./assets/images/logo.png" alt="Logo">

<!-- ❌ JAMAIS ../assets/ -->
<img src="../assets/images/logo.png" alt="Logo">

<!-- ℹ️ URLs absolues SEULEMENT pour Open Graph -->
<meta property="og:image" content="https://www.elisun-toulouse.fr/assets/images/og/image.jpg">
```

**Pourquoi?**
- Après le build, TOUTES les pages HTML sont à la racine de `dist/`
- `./assets/` fonctionne pour `dist/index.html` AND `dist/materiel.html`
- `../assets/` casserait les pages sub-directories (il n'y en a pas après build)

#### Règle 2: Inclusion des Composants HTML (PostHTML-Include)
**Utiliser la balise `<include>` avec chemin relatif depuis `src/`:**

```html
<!-- ✅ CORRECT - Syntaxe PostHTML-Include -->
<include src="components/navbar.html"></include>
<include src="components/footer.html"></include>
<include src="components/modal-devis.html"></include>

```

**Fonctionnement**:
- PostHTML-Include injecte le contenu des composants au moment du build
- Les composants sont directement intégrés dans le HTML final (pas de fetch runtime)
- Meilleur SEO car le contenu est présent dans le HTML statique

---

### 🏗️ Webpack Configuration Prerequisites

**AVANT de faire `npm run build`, vérifier:**

#### 1️⃣ Composants HTML (injection au build)
Les composants dans `src/components/` sont injectés automatiquement via PostHTML-Include.
**Pas besoin de les copier** - ils sont intégrés directement dans les pages HTML.

**Sanity check**: Vérifier que `src/components/` contient:
- `navbar.html` ✓
- `footer.html` ✓
- `modal-devis.html` ✓ (ou autres composants utilisés)

#### 2️⃣ HtmlWebpackPlugin pour Toutes les Pages
```javascript
new HtmlWebpackPlugin({
  template: './src/pages/index.html',
  filename: 'index.html',
  inject: 'body',
}),

new HtmlWebpackPlugin({
  template: './src/pages/installation.html',
  filename: 'installation.html',
  inject: 'body',
}),

new HtmlWebpackPlugin({
  template: './src/pages/materiel.html',
  filename: 'materiel.html',
  inject: 'body',
}),

new HtmlWebpackPlugin({
  template: './src/pages/faq.html',
  filename: 'faq.html',
  inject: 'body',
}),
```

**Chaque page HTML doit avoir sa propre entrée**. Ne pas commenter de pages!

#### 3️⃣ Meta Tags et SEO
**REQUIS dans chaque `src/pages/*.html`:**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...optimisée < 160 char...">
<meta name="author" content="EliSun - Expert Photovoltaïque Toulouse">
<link rel="canonical" href="https://www.elisun-toulouse.fr/[page].html">
<title>[Titre optimisé pour Google]</title>

<!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="EliSun Toulouse">
<meta property="og:url" content="https://www.elisun-toulouse.fr/[page].html">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://www.elisun-toulouse.fr/assets/images/og/[page]-og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="fr_FR">

<!-- Google Tag Manager - Voir section GTM ci-dessous -->
<include src="components/gtm-head.html"></include>

<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{ "@context": "https://schema.org", "@type": "...", ... }
</script>
```

---

### ✅ Pre-Build Checklist

**AVANT `npm run build`:**

```bash
# 1. Linter et formater le code
npm run lint:css:fix
npm run lint:js:fix

# 2. Vérifier les chemins dans src/pages/
# ✓ Toutes les images utilisent ./assets/
# ✓ Tous les includes utilisent <include src="components/...">
# ✓ Pas de ../ sauf dans Open Graph (urls absolues ok)

# 3. Vérifier les composants existent
ls src/components/navbar.html
ls src/components/footer.html
ls src/components/modal-devis.html
```

---

### 📊 Build Output Structure

**Après `npm run build`, `dist/` doit contenir:**

```
dist/
├── index.html                 # Landing page (navbar+footer+modal inclus)
├── installation.html          # Installation process (navbar+footer inclus)
├── materiel.html             # Products catalog (navbar+footer inclus)
├── faq.html                  # FAQ (navbar+footer inclus)
├── assets/
│   ├── images/
│   │   ├── images/           # Product images
│   │   ├── icons/            # SVG icons
│   │   ├── background/       # Background images
│   │   ├── logo/
│   │   │   ├── favicon.svg
│   │   │   ├── favicon.ico
│   │   │   ├── favicon.png
│   │   │   └── favicon-96x96.png
│   │   └── og/               # Open Graph images (TO BE CREATED)
│   │       ├── index-og.jpg
│   │       ├── installation-og.jpg
│   │       ├── materiel-og.jpg
│   │       └── faq-og.jpg
│   └── fonts/                # Google Fonts
├── js/
│   ├── main.[hash].js        # Main bundle
│   └── vendors.[hash].js     # Vendor libraries
└── css/                      # Extracted CSS (production only)
```

**Note**: Les composants (navbar, footer, modal) sont injectés directement dans les pages HTML au build.
Il n'y a PAS de dossier `components/` dans `dist/`.

**Check after build:**
```bash
# Verify structure
ls -la dist/*.html            # 4 pages
ls -la dist/assets/images/logo/favicon*  # 4 favicons
```

---

### 🚀 Deployment Checklist

**AVANT Firebase Deploy:**

```bash
# 1. Build production
npm run build

# 2. Test localement
npx http-server dist -p 3000 -o

# 3. Vérifier dans le navigateur (http://localhost:3000):
# ✓ Favicon visible dans onglet
# ✓ Navbar visible (injectée au build)
# ✓ Footer visible
# ✓ Modal devis s'ouvre (index.html)
# ✓ Pas d'erreur 404 (F12 → Console)
# ✓ Images chargent correctement
# ✓ Styles Tailwind appliqués
# ✓ Animations GSAP jouent

# 4. SEO check
# ✓ Chaque page a un titre unique
# ✓ Meta description < 160 chars
# ✓ Canonical URLs correctes
# ✓ Open Graph tags présents

# 5. Deploy
firebase deploy
```

---

## 📊 Google Tag Manager (GTM)

### Architecture GTM du projet

Le projet utilise GTM avec **Consent Mode v2** pour respecter le RGPD.

**Documentation complète** : Voir [GTM_SETUP.md](GTM_SETUP.md) à la racine

### Fichiers GTM

| Fichier | Description |
|---------|-------------|
| `src/components/gtm-head.html` | Consent Mode v2 + script GTM (dans `<head>`) |
| `src/components/gtm-body.html` | Fallback noscript (après `<body>`) |
| `src/js/utils/gtm-tracking.js` | Module centralisé de tracking dataLayer |
| `src/js/components/ui-cookie-consent.js` | Intégration vanilla-cookieconsent + Consent Mode |

### Intégration dans les pages HTML

**Chaque page `src/pages/*.html` doit inclure :**

```html
<head>
  <meta charset="UTF-8">
  <!-- GTM doit être le plus haut possible après charset -->
  <include src="components/gtm-head.html"></include>
  <!-- ... autres meta tags ... -->
</head>
<body>
  <!-- GTM noscript immédiatement après <body> -->
  <include src="components/gtm-body.html"></include>
  <!-- ... contenu page ... -->
</body>
```

### Events dataLayer trackés

| Event | Description | Paramètres |
|-------|-------------|------------|
| `cta_devis` | Clic sur CTA devis | `cta_location` |
| `modal_open` | Ouverture modal devis | `modal_name` |
| `form_step` | Progression formulaire | `step_number` |
| `form_submit` | Soumission formulaire | `puissance` |
| `phone_click` | Clic téléphone | `phone_number` |
| `email_click` | Clic email | `email` |
| `whatsapp_click` | Clic WhatsApp | - |
| `scroll_depth` | Profondeur scroll | `depth_percent` |

### Tracking automatique

Le module `gtm-tracking.js` track automatiquement :
- **Scroll** : 25%, 50%, 75%, 100%
- **Liens contact** : `tel:`, `mailto:`, `wa.me`
- **CTA** : Éléments avec attribut `data-track-cta`

### Ajouter un nouveau tracking

```javascript
// Dans le composant JS concerné
import { trackCTADevis, trackModalOpen } from '../utils/gtm-tracking.js';

// Appeler la fonction au bon moment
button.addEventListener('click', () => {
  trackCTADevis('hero_section');
});
```

### Test GTM en local

1. Ouvrir GTM → Workspace → Preview
2. Coller l'URL localhost:8080
3. Vérifier dans le Tag Assistant que les events se déclenchent
4. Console navigateur : `dataLayer` pour voir les events