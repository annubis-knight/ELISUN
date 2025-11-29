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
npm run lint         # ESLint JavaScript
npm run format       # Prettier formatting
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
5. Update documentation files

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