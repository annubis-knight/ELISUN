# CSS Development Guidelines - EliSun Project

This file provides CSS-specific guidance for Claude Code when working in the `src/css/` directory.

## 🔍 Stylelint - Code Quality Check

**TOUJOURS lancer Stylelint avant de commiter du CSS :**

```bash
npm run lint:css      # Vérifier la qualité CSS
npm run lint:css:fix  # Corriger automatiquement les problèmes
```

**Ce que Stylelint détecte :**
- ✅ Propriétés CSS dupliquées
- ✅ Valeurs redondantes dans les raccourcis (`0 0 48px 0` → `0 0 48px`)
- ✅ Notation de couleurs non standardisée (`rgba` → `rgb` moderne)
- ✅ Propriétés qui devraient être des raccourcis (`top/right/bottom/left` → `inset`)
- ✅ Sélecteurs dupliqués
- ✅ Media queries (notation moderne)

**Configuration** : `.stylelintrc.json` à la racine du projet

**Workflow** :
1. Écrire/modifier CSS
2. `npm run lint:css` pour détecter les problèmes
3. `npm run lint:css:fix` pour corriger automatiquement
4. Corriger manuellement les problèmes restants
5. Commit uniquement quand Stylelint valide le code

---

## 🚨 CRITICAL RULES

### CSS Nesting OBLIGATOIRE
**TOUJOURS** utiliser l'imbrication/nesting CSS pour hiérarchie visuelle.

❌ **INTERDIT** - Classes au même niveau sans encapsulation :
```css
.content-container { }
.benefit-label { }
.benefit-block { }
.benefit-header { }
```

✅ **OBLIGATOIRE** - Structure hiérarchique imbriquée :
```css
.content-container {
  .benefit-label {
    /* styles du label */
  }

  .benefit-block {
    .benefit-header {
      h3 { }

      .icon-circle {
        &:hover { }
        img { }
      }
    }

    .benefit-text { }
  }
}
```

**Avantages** :
- Hiérarchie visuelle claire
- Encapsulation des styles
- Maintenance facilitée
- Refactoring plus sûr

## 📏 Spacing Strategy (Macro vs Micro)

### Spacing MACRO → Tailwind dans HTML
Utilisé pour les **layouts, sections, containers**.

**Où** : `<section>`, `.containerMax`, `.grid-tailwind`, colonnes grid Tailwind

**Exemples** :
```html
<section class="py-32 mb-16">
  <div class="containerMax">
    <div class="grid-tailwind gap-8">
```

**Équivalences** :
- `padding: 8rem 0` → `py-32`
- `margin-bottom: 4rem` → `mb-16`
- `gap: 2rem` → `gap-8`

**Avantages** :
- Modification rapide sans toucher CSS
- Responsive automatique avec breakpoints Tailwind (`lg:py-16`)
- Cohérence avec le système de design

### Spacing MICRO → CSS dans fichiers
Utilisé pour les **composants réutilisables**.

**Où** : `.btn-primary`, `.card-elisun`, `.benefit-block`, `.tetris-card`, `.tab-button`

**Exemples** :
```css
.btn-primary {
  padding: 0.75rem 2rem;
  gap: 0.5rem;
}

.benefit-block {
  margin-bottom: 2rem;

  .benefit-header {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
}
```

**Avantages** :
- Cohérence du composant garantie
- Réutilisabilité maximale
- Encapsulation CSS
- Un seul endroit à modifier

**Règle simple** : Si c'est un composant réutilisable, le spacing va dans le CSS.

## 🎨 Variables CSS vs Tailwind

### CSS Custom Properties (Variables)
Utilisées pour les **couleurs, typographie, valeurs EliSun-specific**.

**Fichier** : `src/css/base/variables.css`

**Structure** :
```css
:root {
  /* Colors EliSun */
  --color-elisun-blue: #2E7D32;
  --color-elisun-yellow: #FFEB3B;
  --color-elisun-orange: #FF9800;

  /* Spacing (si besoin) */
  --spacing-section: 8rem;
}
```

**Usage dans CSS** :
```css
.btn-primary {
  background: var(--color-elisun-blue);
  color: white;
}
```

❌ **NE PAS** redéfinir les couleurs dans `tailwind.config.js`
✅ **TOUJOURS** utiliser CSS custom properties pour les couleurs brand

### Tailwind Classes
Utilisées pour les **utilities, spacing macro, responsive**.

## 📐 Grid vs Flexbox - Quand utiliser quoi ?

### CSS Grid
Pour les **layouts 2D** (colonnes ET lignes).

**Idéal pour** :
- Grilles de cards
- Layouts complexes type bento-grid, tetris-grid
- Galeries photos
- Dashboards

**Exemple** :
```css
.tetris-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}
```

### Flexbox
Pour les **alignements 1D** (ligne OU colonne).

**Idéal pour** :
- Header texte + image côte-à-côte
- Navigation horizontale
- Empilage vertical de cards
- 2 blocs alignés

**Exemple** :
```css
.feature-text-image {
  display: flex;
  gap: 4rem;
  align-items: center;

  .feature-content {
    flex: 1;
  }

  .feature-image {
    flex: 0 0 45%;
  }
}
```

**Règle d'or** : Si le layout peut se faire en Flexbox, privilégier Flexbox (plus simple).

## ♻️ Component Reusability (DRY Principle)

### Process AVANT de créer une nouvelle classe

1. **Chercher** dans `src/css/components/` si une classe similaire existe
2. **Vérifier** dans `src/css/base/utilities.css` pour les helpers
3. **Si existe** : Réutiliser directement ou créer une variante modificateur
4. **Si n'existe pas** : Créer la nouvelle classe dans le bon fichier

### Exemples de réutilisation

✅ **BON** - Réutiliser `.step-indicator-v3` au lieu de créer `.benefit-label`
✅ **BON** - Réutiliser `.tab-button` dans benefits ET customer-journey
✅ **BON** - Créer variantes `.tab-button-white`, `.tab-button-green`

❌ **MAUVAIS** - Créer `.benefit-label` alors que `.step-indicator-v3` existe déjà
❌ **MAUVAIS** - Dupliquer le code CSS dans 2 fichiers différents

### Variantes modificateurs

Utiliser des modificateurs BEM-like pour les variantes :

```css
.tab-button {
  /* styles de base */

  &.tab-button-white {
    background: var(--white);
    border: 2px solid var(--primary-color);
  }

  &.tab-button-green {
    background: var(--primary-color);
    border: 2px solid var(--primary-color);
  }
}
```

### Placement des classes

- **Composants réutilisables** → `src/css/components/buttons.css`, `cards.css`, etc.
- **Helpers atomiques** → `src/css/base/utilities.css`
- **Sections spécifiques** → `src/css/components/sections.css`
- **Pages** → `src/css/pages/` (rarement utilisé)

## 📁 Organisation des fichiers CSS

### Structure actuelle
```
src/css/
├── main.css (point d'entrée avec @import)
├── base/
│   ├── variables.css (custom properties)
│   ├── reset.css
│   ├── typography.css
│   ├── utilities.css (helpers atomiques)
│   └── animations.css
├── components/
│   ├── ui-buttons.css (tous les boutons)
│   ├── ui-cards.css (toutes les cards)
│   ├── ui-stats.css (statistiques, compteurs)
│   ├── ui-forms.css (formulaires)
│   ├── ui-indicateurs.css (step indicators v1-v8)
│   ├── ui-badges.css (badges, triggers, certifications)
│   └── sections/
│       ├── layout-header.css (en-tête global)
│       ├── layout-navbar.css (navigation)
│       ├── layout-footer.css (pied de page)
│       ├── landing-hero.css (hero landing page)
│       ├── landing-banniere.css (bannières)
│       ├── landing-benefices.css (section bénéfices + bento-grids)
│       ├── landing-caracteristiques.css (tetris-grid)
│       ├── landing-parcours.css (customer journey)
│       ├── landing-conversion.css (sections CTA)
│       ├── page-produits.css (sections page matériel)
│       ├── page-accordeon.css (accordéons réutilisables)
│       └── page-faq.css (sections page FAQ)
└── pages/
    └── (aucun fichier - dossier réservé pour tests temporaires)
```

### 🚨 RÈGLE DE NOMMAGE DES FICHIERS CSS - OBLIGATOIRE

**TOUJOURS** utiliser des préfixes contextuels pour identifier immédiatement l'usage d'un fichier.

#### **Préfixes obligatoires :**

1. **`ui-*`** → Composants UI réutilisables (toutes pages)
   ```
   ✅ ui-buttons.css          (tous les boutons)
   ✅ ui-cards.css            (toutes les cards)
   ✅ ui-stats.css            (statistiques, compteurs)
   ✅ ui-forms.css            (formulaires)
   ✅ ui-indicateurs.css      (step indicators v1-v8)
   ✅ ui-badges.css           (badges, triggers, certifications)
   ✅ ui-bento.css            (bento-grids)
   ✅ ui-benefit-block.css    (blocs bénéfices)
   ```

2. **`layout-*`** → Structure globale (header, nav, footer)
   ```
   ✅ layout-header.css       (en-tête global)
   ✅ layout-navbar.css       (navigation)
   ✅ layout-footer.css       (pied de page)
   ```

3. **`landing-*`** → Sections de la landing page (index.html)
   ```
   ✅ landing-hero.css
   ✅ landing-banniere.css
   ✅ landing-benefices.css
   ✅ landing-caracteristiques.css
   ✅ landing-parcours.css
   ✅ landing-conversion.css
   ```

4. **`page-*`** → Sections spécifiques à une page
   ```
   ✅ page-produits.css       (materiel.html)
   ✅ page-accordeon.css      (accordéons réutilisables)
   ✅ page-faq.css            (faq.html)
   ✅ page-installation.css   (installation.html)
   ```

5. **`base/`** → Pas de préfixe (déjà dans un dossier explicite)
   ```
   ✅ base/variables.css
   ✅ base/reset.css
   ✅ base/typography.css
   ✅ base/utilities.css
   ✅ base/animations.css
   ```

#### **Exemples de renommage :**

```css
/* ❌ AVANT (nommage ambigu) */
hero.css                  // Quelle page ? 🤔
buttons.css               // Global ou page spécifique ? 🤔
parcours.css              // Landing ou installation ? 🤔

/* ✅ APRÈS (nommage explicite) */
landing-hero.css          // Landing page ✅
ui-buttons.css            // Composant UI global ✅
landing-parcours.css      // Section parcours de la landing ✅
page-installation.css     // Page installation ✅
```

#### **Avantages :**
- 🎯 **Contexte immédiat** : On sait où les styles sont appliqués
- 📂 **Tri alphabétique** : Les styles d'une même catégorie sont groupés
- 🔗 **Cohérence CSS/JS** : Même logique de nommage pour JS et CSS
- 🔧 **Maintenabilité** : Plus facile de trouver un fichier de styles
- ♻️ **Réutilisation** : Les `ui-*` sont clairement identifiés comme réutilisables

---

### Composants UI réutilisables → `ui-{nom}.css`
- `ui-buttons.css` - Tous les boutons
- `ui-cards.css` - Toutes les cards
- `ui-stats.css` - Statistiques et compteurs
- `ui-forms.css` - Formulaires
- `ui-indicateurs.css` - Step indicators
- `ui-badges.css` - Badges et certifications

#### Sections landing page → `landing-{nom}.css`
- `landing-hero.css` - Hero de la landing page
- `landing-banniere.css` - Bannières marketing
- `landing-benefices.css` - Section bénéfices avec bento-grids
- `landing-caracteristiques.css` - Section caractéristiques avec tetris-grid
- `landing-parcours.css` - Customer journey
- `landing-conversion.css` - Sections CTA et conversion

#### Sections pages spécifiques → `page-{nom}.css`
- `page-produits.css` - Sections spécifiques à la page matériel
- `page-accordeon.css` - Composants accordéon réutilisables
- `page-faq.css` - Sections spécifiques à la page FAQ

#### Layout global → `layout-{nom}.css`
- `layout-header.css` - En-tête global du site
- `layout-navbar.css` - Navigation principale
- `layout-footer.css` - Pied de page global

### Règles de placement

**Avant de créer un nouveau fichier CSS** :

1. **Est-ce un composant UI réutilisable ?** → `components/ui-{nom}.css`
   - Exemple : boutons, cards, formulaires, badges

2. **Est-ce une section de la landing page ?** → `components/sections/landing-{nom}.css`
   - Exemple : hero, bannières, bénéfices, caractéristiques

3. **Est-ce une section spécifique à une page ?** → `components/sections/page-{nom}.css`
   - Exemple : FAQ, matériel, accordéon

4. **Est-ce un layout global du site ?** → `components/sections/layout-{nom}.css`
   - Exemple : header, navbar, footer

❌ **NE JAMAIS** créer de fichier dans `pages/` sauf pour des tests temporaires

### Ordre d'import dans main.css

```css
/* Import Font Awesome */
@import '~@fortawesome/fontawesome-free/css/all.css';

/* Import Tailwind CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import des styles de base */
@import './base/reset.css';
@import './base/variables.css';
@import './base/typography.css';
@import './base/utilities.css';
@import './base/animations.css';

/* Import des composants */
@import './components/sections/layout-header.css';
@import './components/sections/layout-navbar.css';
@import './components/ui-buttons.css';
@import './components/ui-cards.css';
@import './components/ui-stats.css';
@import './components/ui-forms.css';
@import './components/sections/layout-footer.css';

/* === COMPOSANTS UI RÉUTILISABLES === */
@import './components/ui-indicateurs.css';
@import './components/ui-badges.css';

/* === SECTIONS LANDING PAGE === */
@import './components/sections/landing-hero.css';
@import './components/sections/landing-banniere.css';
@import './components/sections/landing-benefices.css';
@import './components/sections/landing-caracteristiques.css';
@import './components/sections/landing-parcours.css';
@import './components/sections/landing-conversion.css';

/* === SECTIONS PAGES SPÉCIFIQUES === */
@import './components/sections/page-produits.css';
@import './components/sections/page-accordeon.css';
@import './components/sections/page-faq.css';
```

## 🎯 Best Practices

### Nommage des classes
- **Descriptif** : `.feature-text-image` plutôt que `.feature-1`
- **Français autorisé** : `.btn-primary`, `.card-elisun`, `.section-benefices`
- **BEM-like** : `.card-elisun__header`, `.btn-primary--large`

### Commentaires
Toujours en **français**, descriptifs :

```css
/* === SECTION BENEFITS === */
.benefits-section {
  /* Conteneur principal des bénéfices avec background image */
  background: linear-gradient(...);

  /* LEFT - Gallery container avec effet de profondeur */
  .gallery-container {
    /* ... */
  }
}
```

### Transitions et animations
```css
.element {
  transition: all 0.3s ease; /* Standard du projet */
}
```

### Responsive
Mobile-first obligatoire :

```css
.element {
  /* Mobile par défaut */
  padding: 1rem;

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 2rem;
  }
}
```

Ou utiliser Tailwind pour le responsive dans HTML.

## ⚠️ Anti-patterns à éviter

❌ Classes au même niveau sans nesting
❌ Dupliquer du CSS dans plusieurs fichiers
❌ Créer une nouvelle classe sans vérifier l'existant
❌ Mettre les couleurs brand dans tailwind.config.js
❌ Utiliser Grid quand Flexbox suffit
❌ Spacing micro dans HTML (ex: `<div class="p-4">` pour un bouton)
❌ Commentaires en anglais
