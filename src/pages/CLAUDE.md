# HTML Development Guidelines - EliSun Project

This file provides HTML-specific guidance for Claude Code when working in the `src/pages/` directory.

## 🚨 CRITICAL RULES

### Commentaires Français OBLIGATOIRES
Tous les commentaires HTML doivent être **descriptifs et en français**.

✅ **CORRECT** :
```html
<!-- Section Hero avec CTA principal -->
<section id="hero-section" class="hero-section">
    <!-- Image de fond avec parallax -->
    <div class="hero-background">
        <img src="..." alt="Panneaux solaires EliSun">
    </div>

    <!-- Contenu texte principal -->
    <div class="hero-content">
        <h1>Votre Transition Solaire Commence Ici</h1>
    </div>
</section>
```

❌ **INTERDIT** :
```html
<!-- Hero section with main CTA -->
<section id="hero-section">
    <!-- Background image with parallax -->
    <div class="hero-background">
```

### Structure Sémantique HTML5
Utiliser les **bonnes balises sémantiques**.

```html
<!-- ✅ CORRECT -->
<header>
  <nav>...</nav>
</header>

<main>
  <section id="hero">...</section>
  <section id="benefits">...</section>
  <article class="blog-post">...</article>
  <aside class="sidebar">...</aside>
</main>

<footer>...</footer>

<!-- ❌ INTERDIT -->
<div class="header">
  <div class="nav">...</div>
</div>

<div class="main">
  <div class="hero">...</div>
  <div class="benefits">...</div>
</div>
```

## 📐 Pattern Standard Section

### Structure Obligatoire
Toutes les sections doivent suivre ce pattern :

```html
<section id="nom-section" class="nom-section">
    <div class="containerMax">
        <div class="grid-tailwind">
            <!-- Contenu de la section -->
        </div>
    </div>
</section>
```

**Pourquoi ?**
- `<section>` : Sémantique HTML5
- `.containerMax` : Largeur max + centrage (max-width: 1300px)
- `.grid-tailwind` : Grille Tailwind responsive (12 colonnes)

### Exemple complet - Section Benefits
```html
<!-- Section Bénéfices -->
<section id="benefits-elisun" class="benefits-section">
    <div class="containerMax">
        <div class="grid-tailwind">
            <!-- Header de section -->
            <div class="col-span-4 lg:col-span-12">
                <h2 class="heading-xl">Nos Solutions Photovoltaïques</h2>
                <p class="text-center">Des technologies de pointe...</p>
            </div>

            <!-- LEFT - Image ou gallery -->
            <div class="col-span-4 lg:col-span-7">
                <div class="gallery-container">
                    <img src="..." alt="Installation solaire">
                </div>
            </div>

            <!-- RIGHT - Content grid -->
            <div class="col-span-4 lg:col-span-5 lg:col-start-8">
                <div class="content-container">
                    <!-- Contenu -->
                </div>
            </div>
        </div>
    </div>
</section>
```

## 🎨 Classes Tailwind - Grid System

### Colonnes Responsive
```html
<!-- Mobile: 4 col, Desktop: 6 col -->
<div class="col-span-4 lg:col-span-6">
  Content
</div>

<!-- Mobile: 4 col, Desktop: 4 col -->
<div class="col-span-4 lg:col-span-4">
  Content
</div>

<!-- Mobile: 4 col, Desktop: 12 col (pleine largeur) -->
<div class="col-span-4 lg:col-span-12">
  Content
</div>
```

### Positionnement Grid
```html
<!-- Commence à la colonne 8 (desktop) -->
<div class="col-span-4 lg:col-span-5 lg:col-start-8">
  Content
</div>

<!-- Prend 7 colonnes et commence à la colonne 1 -->
<div class="col-span-4 lg:col-span-7 lg:col-start-1">
  Content
</div>
```

### Spacing Macro avec Tailwind
```html
<!-- Padding vertical + margin bottom -->
<section class="py-32 mb-16">
  <div class="containerMax">
    <div class="grid-tailwind gap-8">
```

**Équivalences** :
- `py-32` = `padding: 8rem 0`
- `mb-16` = `margin-bottom: 4rem`
- `gap-8` = `gap: 2rem`

## 🎯 Components HTML Patterns

### Tab Button Pattern
```html
<!-- Tab buttons avec numéros -->
<div class="journey-tabs">
    <div class="journey-container">
        <div class="journey-tab tab-button active" data-tab="1">
            <div class="step-number">01</div>
            <img src="./assets/images/icons/icon.svg" alt="Description" class="tab-icon" />
        </div>
        <p class="font-normal opacity-60 my-2">Label du tab</p>
    </div>
</div>
```

### Step Indicator Pattern
```html
<!-- Indicateur d'étape avec background gradient -->
<div class="step-indicator-v3">
    <span class="step-text">Performance Exceptionnelle</span>
</div>
```

### Bento Grid / Tetris Grid Pattern
```html
<!-- Grille tetris 6 colonnes -->
<div class="tetris-grid">
    <!-- Colonne 1 -->
    <div class="tetris-column">
        <div class="tetris-card card-stat">
            <div class="tetris-subtext">15+</div>
            <p>Années d'expérience</p>
        </div>
        <div class="tetris-card card-certification">
            <img src="..." alt="Certification">
        </div>
    </div>

    <!-- Colonne 2 -->
    <div class="tetris-column">
        <div class="tetris-card card-testimonial">
            <p>"Témoignage client..."</p>
            <div class="testimonial-author">
                <strong>Marie D.</strong><br>
                Cliente satisfaite
            </div>
        </div>
    </div>

    <!-- ... 4 autres colonnes -->
</div>
```

### Feature Text-Image Pattern
```html
<!-- Feature avec texte à gauche, image à droite -->
<div class="feature-block feature-text-image">
    <div class="feature-content">
        <h2>Notre Expertise Photovoltaïque</h2>
        <p>Description...</p>
        <ul class="feature-list">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
        </ul>
    </div>
    <div class="feature-image">
        <img src="./assets/images/..." alt="Description">
    </div>
</div>
```

### Card Pattern
```html
<!-- Card avec background, overlay, content -->
<div class="benefit-item benefit-actif">
    <div class="benefit-background">
        <div class="benefit-icon-large">
            <img src="..." alt="Icône" class="benefit-icon-svg">
        </div>
        <div class="benefit-overlay"></div>
    </div>
    <div class="benefit-content">
        <h3>Titre du bénéfice</h3>
        <p>Description...</p>
    </div>
</div>
```

## 📝 Accessibilité (a11y)

### Alt Text Descriptifs
```html
<!-- ✅ CORRECT - Descriptif et contextuel -->
<img src="technicien.png" alt="Technicien EliSun installant des panneaux solaires sur un toit">

<!-- ❌ INTERDIT - Non descriptif -->
<img src="technicien.png" alt="Image">
<img src="technicien.png" alt="Technicien">
```

### ARIA Labels
```html
<!-- Navigation -->
<nav aria-label="Navigation principale">
  <ul>
    <li><a href="#home">Accueil</a></li>
  </ul>
</nav>

<!-- Bouton avec icône -->
<button aria-label="Ouvrir le menu" class="menu-toggle">
  <svg>...</svg>
</button>
```

### Landmarks
```html
<header role="banner">
  <nav role="navigation">...</nav>
</header>

<main role="main">
  <section aria-labelledby="benefits-title">
    <h2 id="benefits-title">Nos Bénéfices</h2>
  </section>
</main>

<footer role="contentinfo">...</footer>
```

### Lazy Loading
```html
<!-- Images avec lazy loading -->
<img
  src="image.jpg"
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
>
```

## 🔧 Webpack HtmlWebpackPlugin

### Configuration Multi-Pages
Toutes les pages doivent être déclarées dans `webpack.config.js` :

```javascript
// webpack.config.js
new HtmlWebpackPlugin({
  template: './src/pages/index.html',
  filename: 'index.html',
  inject: 'body',
}),

new HtmlWebpackPlugin({
  template: './src/pages/about.html',
  filename: 'about.html',
  inject: 'body',
}),
```

### Injection Automatique
Webpack injecte **automatiquement** :
- Les fichiers CSS compilés
- Les fichiers JS bundlés

**Donc PAS besoin de** :
```html
<!-- ❌ NE PAS FAIRE -->
<link rel="stylesheet" href="styles.css">
<script src="main.js"></script>
```

**Webpack le fait automatiquement** :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EliSun - Panneaux Solaires</title>
    <!-- Webpack injecte le CSS ici -->
</head>
<body>
    <!-- Contenu -->
    <!-- Webpack injecte le JS ici -->
</body>
</html>
```

## 🎯 Best Practices

### Classes Descriptives
```html
<!-- ✅ Descriptif -->
<div class="feature-text-image">
<div class="customer-journey-section">
<div class="benefits-flex-container">

<!-- ❌ Non descriptif -->
<div class="feature-1">
<div class="section-2">
<div class="container-3">
```

### Ordre des Attributs
```html
<!-- Ordre recommandé -->
<img
  src="..."           <!-- 1. Source -->
  alt="..."           <!-- 2. Accessibilité -->
  class="..."         <!-- 3. Classes -->
  id="..."            <!-- 4. ID -->
  data-tab="..."      <!-- 5. Data attributes -->
  loading="lazy"      <!-- 6. Autres -->
  width="800"
  height="600"
>
```

### Indentation & Lisibilité
```html
<!-- ✅ Bien indenté -->
<section class="hero-section">
    <div class="containerMax">
        <div class="grid-tailwind">
            <div class="col-span-4 lg:col-span-12">
                <h1>Titre</h1>
            </div>
        </div>
    </div>
</section>

<!-- ❌ Mal indenté -->
<section class="hero-section">
<div class="containerMax">
<div class="grid-tailwind">
<div class="col-span-4 lg:col-span-12">
<h1>Titre</h1>
</div></div></div></section>
```

### Data Attributes
```html
<!-- Pour interactions JS -->
<div class="journey-tab" data-tab="1" data-section="installation">
  Tab 1
</div>

<div class="gallery-item" data-parallax-speed="0.5" data-parallax-parent=".hero">
  Image
</div>
```

## 🎨 Typography & Headings

### Hiérarchie des Titres
```html
<!-- ✅ Hiérarchie correcte -->
<section>
  <h2>Titre Section</h2>
  <article>
    <h3>Sous-titre Article</h3>
    <h4>Détail</h4>
  </article>
</section>

<!-- ❌ Sauter des niveaux -->
<section>
  <h2>Titre</h2>
  <h4>Détail</h4> <!-- ❌ Skip h3 -->
</section>
```

### Classes Typography
```html
<h1 class="heading-xl">Très grand titre</h1>
<h2 class="heading-lg">Grand titre</h2>
<h3 class="heading-md">Titre moyen</h3>
<p class="text-lg">Paragraphe large</p>
<span class="text-primary">Texte coloré</span>
```

## 📱 Responsive Images

### Srcset pour Responsive
```html
<img
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  alt="Installation panneaux solaires"
  loading="lazy"
>
```

### Picture Element
```html
<picture>
  <source media="(min-width: 1024px)" srcset="image-desktop.webp" type="image/webp">
  <source media="(min-width: 640px)" srcset="image-tablet.webp" type="image/webp">
  <source srcset="image-mobile.webp" type="image/webp">
  <img src="image-fallback.jpg" alt="Description">
</picture>
```

## 🔗 Asset Paths & Build Rules

### 🚨 Règle Critique: Chemins des Images et Assets

Après le build Webpack, **TOUTES les pages HTML sont à la racine de `dist/`** (pas de sous-dossiers).

#### ✅ CORRECT - Pour Images dans src/pages/
```html
<!-- Utiliser toujours ./ (chemin relatif simple) -->
<img src="./assets/images/logo.png" alt="Logo">
<img src="./assets/images/icons/icon.svg" alt="Icône">
<img src="./assets/images/background/bg.jpg" alt="Fond">
```

#### ❌ JAMAIS - Chemins avec ../
```html
<!-- ❌ INTERDIT - Cassera après le build -->
<img src="../assets/images/logo.png" alt="Logo">

<!-- Pourquoi? Installation.html ne sera PAS dans src/pages/
     après le build - tout sera à la racine de dist/ -->
```

#### ✅ CORRECT - Pour Composants w3-include-html
```html
<!-- Webpack copie src/components → dist/components/ -->
<div w3-include-html="components/navbar.html"></div>
<div w3-include-html="components/footer.html"></div>
<div w3-include-html="components/modal-devis.html"></div>

<!-- ❌ JAMAIS -->
<div w3-include-html="../components/navbar.html"></div>
```

#### ✅ CORRECT - Pour Favicon
```html
<!-- Favicon utilise aussi ./assets/ -->
<link rel="icon" type="image/svg+xml" href="./assets/images/logo/favicon.svg">
<link rel="icon" type="image/png" sizes="96x96" href="./assets/images/logo/favicon-96x96.png">
<link rel="shortcut icon" href="./assets/images/logo/favicon.ico">
```

#### ℹ️ Open Graph Images (URLs Absolues)
```html
<!-- URLs ABSOLUES UNIQUEMENT pour Open Graph -->
<meta property="og:image" content="https://www.elisun-toulouse.fr/assets/images/og/index-og.jpg">

<!-- Pas de chemins relatifs! Open Graph needs full URLs for social media -->
```

---

## 📋 SEO & Meta Tags (Requis)

Chaque page HTML **DOIT** avoir cette structure dans `<head>` :

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO de base -->
    <meta name="description" content="Description unique < 160 caractères">
    <meta name="author" content="EliSun - Expert Photovoltaïque Toulouse">
    <link rel="canonical" href="https://www.elisun-toulouse.fr/[page].html">
    <title>Titre Unique et Optimisé pour Google</title>

    <!-- Google Tag Manager (espace réservé) -->
    <!--
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
    ...
    -->

    <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="EliSun Toulouse">
    <meta property="og:url" content="https://www.elisun-toulouse.fr/[page].html">
    <meta property="og:title" content="Titre pour partage">
    <meta property="og:description" content="Description pour partage">
    <meta property="og:image" content="https://www.elisun-toulouse.fr/assets/images/og/[page]-og.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="fr_FR">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="./assets/images/logo/favicon.svg">
    <link rel="icon" type="image/png" sizes="96x96" href="./assets/images/logo/favicon-96x96.png">
    <link rel="shortcut icon" href="./assets/images/logo/favicon.ico">
    <link rel="apple-touch-icon" sizes="96x96" href="./assets/images/logo/favicon-96x96.png">

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      ...
    }
    </script>
</head>
```

---

## ⚠️ Anti-patterns à éviter

❌ Commentaires en anglais
❌ Alt text vides ou non descriptifs
❌ Inline styles dans HTML (`style="color: red"`)
❌ Scripts dans `<head>` sans defer/async
❌ IDs non-uniques
❌ Imbrication excessive de divs
❌ Manque de structure, utiliser plutôt `.containerMax → .grid-tailwind`
❌ **Chemins `../assets/` pour images** (CASSERA après le build!)
❌ **Chemins `../components/` pour w3-include-html** (CASSERA après le build!)
❌ URLs relatives dans Open Graph (DOIT être absolue)
