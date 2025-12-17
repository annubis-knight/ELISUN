# Installation et Configuration de vanilla-cookieconsent

Guide complet pour intégrer vanilla-cookieconsent dans un projet Webpack + Vanilla JS.

**Date d'installation** : 16 décembre 2024
**Version installée** : 3.1.0
**Projet** : EliSun (Webpack + Vanilla JS + Firebase Hosting)

---

## Table des matières

1. [Présentation](#1-présentation)
2. [Prérequis](#2-prérequis)
3. [Installation](#3-installation)
4. [Configuration](#4-configuration)
5. [Intégration CSS](#5-intégration-css)
6. [Intégration JavaScript](#6-intégration-javascript)
7. [Ajout du lien "Gérer les cookies"](#7-ajout-du-lien-gérer-les-cookies)
8. [Personnalisation](#8-personnalisation)
9. [Personnalisation avancée des boutons](#9-personnalisation-avancée-des-boutons)
10. [Personnalisation des toggles](#10-personnalisation-des-toggles)
11. [Blocage des scripts tiers](#11-blocage-des-scripts-tiers)
12. [Problèmes rencontrés et solutions](#12-problèmes-rencontrés-et-solutions)
13. [Checklist de validation](#13-checklist-de-validation)
14. [Ressources](#14-ressources)

---

## 1. Présentation

### Pourquoi vanilla-cookieconsent ?

| Critère | vanilla-cookieconsent |
|---------|----------------------|
| **Licence** | MIT (gratuit, open source) |
| **Taille** | ~152 KB (léger) |
| **Dépendances** | Aucune |
| **Compatibilité** | Vanilla JS, React, Vue, Angular |
| **RGPD** | Compliant (opt-in par défaut) |
| **Multi-langue** | Oui (français inclus) |
| **Auto-blocking** | Oui (scripts bloqués jusqu'au consentement) |

### Fonctionnalités clés

- **3 catégories de cookies** : nécessaires, analytiques, marketing
- **Consentement granulaire** : l'utilisateur choisit par catégorie
- **Centre de préférences** : modal détaillé avec table des cookies
- **Persistance** : préférences stockées dans un cookie (6 mois)
- **Callbacks** : événements onConsent, onChange, onFirstConsent

---

## 2. Prérequis

### Stack technique requis

```
- Node.js >= 16
- npm ou yarn
- Webpack (ou autre bundler)
- Projet avec ES6 modules
```

### Structure de projet attendue

```
projet/
├── src/
│   ├── js/
│   │   ├── main.js
│   │   └── components/
│   │       └── ui-cookie-consent.js  (à créer)
│   └── css/
│       ├── main.css
│       └── components/
│           └── ui-cookie-consent.css  (à créer)
├── package.json
└── webpack.config.cjs
```

---

## 3. Installation

### Étape 3.1 : Installer le package npm

```bash
npm install vanilla-cookieconsent
```

**Résultat attendu** :
```
added 1 package, and audited XXX packages in Xs
```

### Étape 3.2 : Vérifier l'installation

```bash
ls node_modules/vanilla-cookieconsent/dist/
```

**Fichiers disponibles** :
- `cookieconsent.css` - Styles par défaut
- `cookieconsent.esm.js` - Module ES6
- `cookieconsent.umd.js` - Module UMD (CDN)

### Étape 3.3 : Vérifier package.json

```json
{
  "dependencies": {
    "vanilla-cookieconsent": "^3.1.0"
  }
}
```

---

## 4. Configuration

### Étape 4.1 : Créer le fichier de configuration

Créer `src/js/components/ui-cookie-consent.js` :

```javascript
// src/js/components/ui-cookie-consent.js
import * as CookieConsent from 'vanilla-cookieconsent';

const cookieConsentConfig = {
  // Nom du cookie de préférences
  cookie: {
    name: 'mon_site_cookie_consent',
    expiresAfterDays: 182, // 6 mois
  },

  // Mode opt-in (RGPD strict)
  mode: 'opt-in',

  // Gestion automatique des scripts
  manageScriptTags: true,

  // Catégories de cookies
  categories: {
    necessary: {
      enabled: true,
      readOnly: true, // Non désactivable
    },
    analytics: {
      enabled: false, // Désactivé par défaut
      readOnly: false,
      autoClear: {
        cookies: [
          { name: /^_ga/ },
          { name: /^_gid/ },
        ],
      },
    },
    marketing: {
      enabled: false,
      readOnly: false,
      autoClear: {
        cookies: [
          { name: /^_fbp/ },
        ],
      },
    },
  },

  // Textes en français
  language: {
    default: 'fr',
    translations: {
      fr: {
        consentModal: {
          title: 'Nous utilisons des cookies',
          description: 'Nous utilisons des cookies pour améliorer votre expérience...',
          acceptAllBtn: 'Tout accepter',
          acceptNecessaryBtn: 'Refuser tout',
          showPreferencesBtn: 'Gérer les préférences',
        },
        preferencesModal: {
          title: 'Préférences de cookies',
          acceptAllBtn: 'Tout accepter',
          acceptNecessaryBtn: 'Refuser tout',
          savePreferencesBtn: 'Enregistrer mes préférences',
          sections: [
            {
              title: 'Cookies strictement nécessaires',
              description: 'Ces cookies sont indispensables...',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies analytiques',
              description: 'Ces cookies nous aident à comprendre...',
              linkedCategory: 'analytics',
            },
            {
              title: 'Cookies marketing',
              description: 'Ces cookies sont utilisés pour...',
              linkedCategory: 'marketing',
            },
          ],
        },
      },
    },
  },

  // Apparence
  guiOptions: {
    consentModal: {
      layout: 'box wide',
      position: 'bottom center',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
    },
  },

  // Callbacks
  onConsent: ({ cookie }) => {
    console.log('Consentement enregistré:', cookie);

    if (CookieConsent.acceptedCategory('analytics')) {
      // Initialiser Google Analytics ici
    }
  },
};

export function initCookieConsent() {
  CookieConsent.run(cookieConsentConfig);
  window.CookieConsent = CookieConsent;
}

// Auto-initialisation
initCookieConsent();
```

### Étape 4.2 : Points de configuration importants

| Option | Valeur recommandée | Explication |
|--------|-------------------|-------------|
| `mode` | `'opt-in'` | RGPD : cookies non-essentiels désactivés par défaut |
| `cookie.expiresAfterDays` | `182` | 6 mois (CNIL recommande max 13 mois) |
| `manageScriptTags` | `true` | Bloque automatiquement les scripts avec `data-category` |
| `categories.*.readOnly` | `true` pour necessary | L'utilisateur ne peut pas désactiver |
| `categories.*.enabled` | `false` pour analytics/marketing | Désactivés par défaut |

---

## 5. Intégration CSS

### Étape 5.1 : Importer le CSS officiel

Dans `src/js/main.js` :

```javascript
// Importer le CSS officiel de cookie consent
import 'vanilla-cookieconsent/dist/cookieconsent.css';
```

### Étape 5.2 : Créer le CSS personnalisé (optionnel)

Créer `src/css/components/ui-cookie-consent.css` :

```css
/* Personnalisation vanilla-cookieconsent */

:root {
  --cc-primary-color: #3b82f6; /* Couleur principale */
  --cc-bg: #ffffff;
  --cc-border-radius: 0.75rem;
}

/* Bouton principal */
.cm__btn--accept-all {
  background: var(--cc-primary-color) !important;
  border-radius: 0.5rem !important;
}

/* Animation d'entrée */
@keyframes cc-slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.cm {
  animation: cc-slide-up 0.3s ease-out !important;
}
```

### Étape 5.3 : Importer le CSS personnalisé

Dans `src/css/main.css` :

```css
@import url('./components/ui-cookie-consent.css');
```

---

## 6. Intégration JavaScript

### Étape 6.1 : Importer dans main.js

```javascript
// src/js/main.js

// CSS
import 'vanilla-cookieconsent/dist/cookieconsent.css';

// Auto-initialisation du cookie consent
import './components/ui-cookie-consent.js';
```

### Étape 6.2 : Ordre des imports

**Important** : Le CSS doit être importé AVANT le JavaScript pour éviter un flash de contenu non stylisé.

```javascript
// ✅ CORRECT
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import './components/ui-cookie-consent.js';

// ❌ INCORRECT
import './components/ui-cookie-consent.js';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
```

---

## 7. Ajout du lien "Gérer les cookies"

### Étape 7.1 : Ajouter dans le footer HTML

```html
<footer>
  <div class="footer-legal">
    <a href="/mentions-legales">Mentions légales</a>
    <span>•</span>
    <button type="button"
            class="cookie-preferences-link"
            onclick="CookieConsent.showPreferences()">
      Gérer les cookies
    </button>
  </div>
</footer>
```

### Étape 7.2 : Styliser le bouton

```css
.cookie-preferences-link {
  cursor: pointer;
  color: inherit;
  text-decoration: underline;
  background: none;
  border: none;
  font-size: inherit;
}
```

### Étape 7.3 : Alternative avec data-attribute

```html
<!-- Utiliser data-cc pour déclencher automatiquement -->
<button type="button" data-cc="show-preferencesModal">
  Gérer les cookies
</button>
```

---

## 8. Personnalisation

### 8.1 Layouts disponibles

**Modal de consentement** (`consentModal.layout`) :
- `'box'` - Petite boîte
- `'box wide'` - Boîte large (recommandé)
- `'cloud'` - Style nuage
- `'bar'` - Barre horizontale

**Position** (`consentModal.position`) :
- `'bottom center'` (recommandé)
- `'bottom left'` / `'bottom right'`
- `'middle center'`
- `'top center'`

### 8.2 Ajouter une table de cookies

Dans la section `preferencesModal.sections` :

```javascript
{
  title: 'Cookies analytiques',
  linkedCategory: 'analytics',
  cookieTable: {
    headers: {
      name: 'Nom',
      domain: 'Domaine',
      description: 'Description',
      expiration: 'Expiration',
    },
    body: [
      {
        name: '_ga',
        domain: 'Google Analytics',
        description: 'Identifiant unique',
        expiration: '2 ans',
      },
    ],
  },
}
```

### 8.3 Ajouter le footer avec liens

```javascript
consentModal: {
  footer: '<a href="/mentions-legales">Mentions légales</a> | <a href="/confidentialite">Politique de confidentialité</a>',
}
```

---

## 9. Personnalisation avancée des boutons

### 9.1 Structure HTML des boutons

vanilla-cookieconsent v3 utilise l'attribut `data-role` pour identifier les boutons, **pas des classes CSS**.

**Modal de consentement (.cm)** :
```html
<button data-role="all">Tout accepter</button>
<button data-role="necessary">Refuser tout</button>
<button data-role="show">Gérer les préférences</button>
```

**Modal de préférences (.pm)** :
```html
<button data-role="all">Tout accepter</button>
<button data-role="necessary">Refuser tout</button>
<button class="pm__btn--save">Enregistrer</button>
```

### 9.2 Sélecteurs CSS corrects

**⚠️ IMPORTANT** : Utiliser les sélecteurs d'attribut `[data-role="..."]`, pas les classes `--accept-all`.

```css
/* ❌ INCORRECT - Ces classes n'existent PAS */
.cm__btn--accept-all { }
.cm__btn--accept-necessary { }

/* ✅ CORRECT - Utiliser data-role */
.cm__btn[data-role="all"] { }
.cm__btn[data-role="necessary"] { }
.cm__btn[data-role="show"] { }
```

### 9.3 Exemple complet de personnalisation des boutons

```css
/* === BOUTONS DU MODAL DE CONSENTEMENT === */

/* Base commune pour tous les boutons */
.cm .cm__btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 16px 32px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 5px !important;
  border: 1px solid !important;
  transition: all 0.3s ease !important;
  cursor: pointer !important;

  /* Bouton PRIMARY (Tout accepter) */
  &[data-role="all"] {
    background: var(--primary-color) !important;
    color: white !important;
    border-color: var(--primary-color) !important;

    &:hover {
      background: white !important;
      color: var(--primary-color) !important;
      transform: translateY(-4px) !important;
    }
  }

  /* Bouton SECONDARY (Refuser tout) */
  &[data-role="necessary"] {
    background: white !important;
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;

    &:hover {
      background: var(--primary-color) !important;
      color: white !important;
      transform: translateY(-2px) !important;
    }
  }

  /* Lien "Gérer les préférences" */
  &[data-role="show"] {
    background: transparent !important;
    color: var(--primary-color) !important;
    text-decoration: underline !important;
    border: none !important;
    padding: 0.5rem !important;
    text-transform: none !important;

    &:hover {
      color: var(--secondary-color) !important;
    }
  }
}
```

### 9.4 Boutons du modal de préférences

```css
/* === BOUTONS DU MODAL DE PRÉFÉRENCES === */

.pm .pm__btn {
  padding: 12px 24px !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  border-radius: 5px !important;
  border: 1px solid !important;
  transition: all 0.3s ease !important;

  /* Bouton PRIMARY */
  &[data-role="all"] {
    background: var(--primary-color) !important;
    color: white !important;
    border-color: var(--primary-color) !important;

    &:hover {
      background: white !important;
      color: var(--primary-color) !important;
    }
  }

  /* Bouton SECONDARY */
  &[data-role="necessary"] {
    background: white !important;
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;

    &:hover {
      background: var(--primary-color) !important;
      color: white !important;
    }
  }

  /* Bouton Enregistrer */
  &--save {
    background: var(--primary-color) !important;
    color: white !important;
    border-color: var(--primary-color) !important;

    &:hover {
      background: white !important;
      color: var(--primary-color) !important;
    }
  }
}
```

---

## 10. Personnalisation des toggles

### 10.1 Structure HTML des toggles

Les toggles utilisent un `<input type="checkbox">` caché avec un `<span class="toggle__icon">` pour l'affichage visuel.

```html
<div class="section__toggle-wrapper">
  <input type="checkbox" class="section__toggle" />
  <span class="toggle__icon">
    <span class="toggle__icon-circle"></span>
    <span class="toggle__icon-on"><!-- SVG coche --></span>
    <span class="toggle__icon-off"><!-- SVG X --></span>
  </span>
</div>
```

### 10.2 Sélecteurs CSS corrects pour les toggles

**⚠️ IMPORTANT** : Le style du toggle dépend de l'état `:checked` de l'input, pas de classes.

```css
/* ❌ INCORRECT - Ces classes ne sont pas ajoutées dynamiquement */
.toggle__icon--on { }
.toggle__icon--off { }

/* ✅ CORRECT - Utiliser le sélecteur sibling ~ */
.section__toggle ~ .toggle__icon { }           /* État par défaut */
.section__toggle:checked ~ .toggle__icon { }   /* État checked */
.section__toggle:disabled ~ .toggle__icon { }  /* État désactivé */
```

### 10.3 Exemple complet de personnalisation des toggles

```css
/* === TOGGLE SWITCH (personnalisation couleurs) === */

/* État OFF (non coché) */
.section__toggle ~ .toggle__icon {
  background: #383838 !important; /* Gris foncé */
}

/* État ON (coché) */
.section__toggle:checked ~ .toggle__icon {
  background: var(--primary-color) !important; /* Couleur primaire */
}

/* État désactivé (cookies nécessaires - toujours actifs) */
.section__toggle:disabled ~ .toggle__icon {
  background: #94a3b8 !important; /* Gris */
  cursor: not-allowed !important;
}

/* Couleur des icônes SVG (coche et X) */
.toggle__icon svg {
  stroke: var(--primary-color) !important;
}
```

### 10.4 Note sur les cookies nécessaires

Les cookies "strictement nécessaires" ont leur toggle **désactivé** (`disabled`) car :
- C'est une exigence RGPD : ces cookies sont obligatoires
- L'utilisateur ne peut pas les refuser
- Le toggle grisé informe visuellement l'utilisateur

---

## 11. Blocage des scripts tiers

### 11.1 Méthode 1 : data-category (recommandé)

```html
<!-- Script bloqué jusqu'au consentement "analytics" -->
<script type="text/plain" data-category="analytics">
  // Code Google Analytics
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Script bloqué jusqu'au consentement "marketing" -->
<script type="text/plain" data-category="marketing">
  // Code Facebook Pixel
  fbq('init', 'XXXXXXXXXX');
</script>
```

**Important** : Utiliser `type="text/plain"` pour empêcher l'exécution avant consentement.

### 11.2 Méthode 2 : Chargement dynamique

```javascript
onConsent: ({ cookie }) => {
  if (CookieConsent.acceptedCategory('analytics')) {
    // Charger GA dynamiquement
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script.async = true;
    document.head.appendChild(script);
  }
}
```

### 11.3 Vérifier le consentement

```javascript
// Dans n'importe quel fichier JS
if (window.CookieConsent && CookieConsent.acceptedCategory('analytics')) {
  // L'utilisateur a accepté les cookies analytics
  trackEvent('button_click', 'cta_hero');
}
```

---

## 12. Problèmes rencontrés et solutions

### Problème 1 : "CookieConsent is not defined"

**Symptôme** : Erreur dans la console au clic sur "Gérer les cookies"

**Cause** : Le module n'expose pas CookieConsent globalement par défaut

**Solution** : Exposer manuellement dans le fichier de config :

```javascript
// À la fin de ui-cookie-consent.js
window.CookieConsent = CookieConsent;
```

---

### Problème 2 : Modal ne s'affiche pas

**Symptôme** : Pas de bannière cookie au chargement

**Causes possibles** :
1. CSS non importé
2. JavaScript non exécuté
3. Cookie de consentement déjà présent

**Solutions** :

```javascript
// 1. Vérifier que le CSS est importé AVANT le JS
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import './components/ui-cookie-consent.js';

// 2. Vérifier la console pour les erreurs

// 3. Supprimer le cookie existant pour tester
// Dans DevTools > Application > Cookies > Supprimer le cookie de consent
```

---

### Problème 3 : Flash of Unstyled Content (FOUC)

**Symptôme** : La modal apparaît brièvement sans styles

**Cause** : CSS chargé après le JS

**Solution** : Importer le CSS en premier dans main.js

---

### Problème 4 : Scripts toujours exécutés malgré refus

**Symptôme** : Google Analytics se charge même sans consentement

**Cause** : Scripts non marqués avec `type="text/plain"` et `data-category`

**Solution** :

```html
<!-- ❌ INCORRECT -->
<script async src="https://www.googletagmanager.com/gtag/js"></script>

<!-- ✅ CORRECT -->
<script type="text/plain" data-category="analytics"
        data-src="https://www.googletagmanager.com/gtag/js"></script>
```

---

### Problème 5 : Erreur Webpack "Module not found"

**Symptôme** : `Module not found: Error: Can't resolve 'vanilla-cookieconsent'`

**Cause** : Package non installé ou chemin incorrect

**Solution** :

```bash
# Réinstaller le package
npm install vanilla-cookieconsent

# Vérifier dans node_modules
ls node_modules/vanilla-cookieconsent
```

---

### Problème 6 : Z-index conflits

**Symptôme** : Modal cachée derrière d'autres éléments

**Solution** :

```css
#cc-main {
  z-index: 9999 !important;
}
```

---

### Problème 7 : Boutons personnalisés ne fonctionnent pas

**Symptôme** : Les styles CSS des boutons ne s'appliquent pas

**Cause** : Utilisation de sélecteurs de classe incorrects

**Solution** : Utiliser les sélecteurs d'attribut `data-role`

```css
/* ❌ INCORRECT */
.cm__btn--accept-all { }

/* ✅ CORRECT */
.cm__btn[data-role="all"] { }
```

---

### Problème 8 : Toggles ne changent pas de couleur

**Symptôme** : Les toggles restent avec la couleur par défaut

**Cause** : Utilisation de sélecteurs de classe au lieu du sélecteur sibling

**Solution** : Utiliser le sélecteur `~` avec `:checked`

```css
/* ❌ INCORRECT */
.toggle__icon--on { background: orange; }

/* ✅ CORRECT */
.section__toggle:checked ~ .toggle__icon { background: orange !important; }
```

---

### Problème 9 : Toggles ne cliquables plus après personnalisation CSS

**Symptôme** : Les toggles ne répondent plus aux clics

**Cause** : Styles CSS qui surchargent le positionnement natif

**Solution** : Ne personnaliser que les couleurs, pas le positionnement

```css
/* ❌ INCORRECT - Casse le comportement */
.toggle__icon {
  position: absolute !important;
  width: 0 !important;
  opacity: 0 !important;
}

/* ✅ CORRECT - Seulement les couleurs */
.section__toggle ~ .toggle__icon {
  background: #383838 !important;
}
```

---

## 13. Checklist de validation

### Avant mise en production

- [ ] **Installation**
  - [ ] Package npm installé
  - [ ] Version 3.x (pas 2.x qui a une API différente)

- [ ] **Configuration**
  - [ ] Mode `opt-in` activé
  - [ ] Catégories définies (necessary, analytics, marketing)
  - [ ] Textes en français
  - [ ] Cookie name personnalisé

- [ ] **Intégration**
  - [ ] CSS officiel importé
  - [ ] CSS personnalisé créé (optionnel)
  - [ ] JavaScript importé dans main.js
  - [ ] `window.CookieConsent` exposé globalement

- [ ] **UI/UX**
  - [ ] Modal s'affiche au premier chargement
  - [ ] Bouton "Tout accepter" fonctionne
  - [ ] Bouton "Refuser tout" fonctionne
  - [ ] Bouton "Gérer les préférences" ouvre le modal détaillé
  - [ ] Lien "Gérer les cookies" dans le footer fonctionne
  - [ ] Modal responsive (mobile)
  - [ ] Boutons personnalisés avec les bonnes couleurs
  - [ ] Toggles fonctionnent et changent de couleur

- [ ] **Conformité RGPD**
  - [ ] Cookies non-essentiels désactivés par défaut
  - [ ] Consentement granulaire possible
  - [ ] Possibilité de retirer le consentement
  - [ ] Information claire sur chaque catégorie

- [ ] **Technique**
  - [ ] Scripts analytics bloqués sans consentement
  - [ ] Scripts se chargent après consentement
  - [ ] Pas d'erreur dans la console
  - [ ] Build Webpack réussit

---

## 14. Ressources

### Documentation officielle

- **Site** : https://cookieconsent.orestbida.com/
- **GitHub** : https://github.com/orestbida/cookieconsent
- **npm** : https://www.npmjs.com/package/vanilla-cookieconsent

### Configuration avancée

- **Toutes les options** : https://cookieconsent.orestbida.com/reference/configuration-reference.html
- **Personnalisation CSS** : https://cookieconsent.orestbida.com/reference/css-customization.html
- **API JavaScript** : https://cookieconsent.orestbida.com/reference/api-reference.html

### RGPD et conformité

- **CNIL - Guide cookies** : https://www.cnil.fr/fr/cookies-et-autres-traceurs
- **Recommandations CNIL 2020** : Durée max 13 mois, opt-in obligatoire

---

## Annexe : Fichiers créés

| Fichier | Rôle |
|---------|------|
| `src/js/components/ui-cookie-consent.js` | Configuration et initialisation |
| `src/css/components/ui-cookie-consent.css` | Personnalisation des styles |
| `src/components/footer.html` | Ajout du lien "Gérer les cookies" |

---

## Annexe : Récapitulatif des sélecteurs CSS

### Boutons

| Élément | Sélecteur CSS |
|---------|---------------|
| Bouton "Tout accepter" | `.cm__btn[data-role="all"]` |
| Bouton "Refuser tout" | `.cm__btn[data-role="necessary"]` |
| Bouton "Gérer préférences" | `.cm__btn[data-role="show"]` |
| Bouton "Enregistrer" (préférences) | `.pm__btn--save` |

### Toggles

| État | Sélecteur CSS |
|------|---------------|
| Toggle OFF | `.section__toggle ~ .toggle__icon` |
| Toggle ON | `.section__toggle:checked ~ .toggle__icon` |
| Toggle désactivé | `.section__toggle:disabled ~ .toggle__icon` |

### Autres éléments

| Élément | Sélecteur CSS |
|---------|---------------|
| Flèche accordéon | `.pm__section-arrow svg` |
| Badge "Toujours actif" | `.pm__badge` |
| Container principal | `#cc-main` |

---

## Historique des modifications

| Date | Version | Changement |
|------|---------|------------|
| 16/12/2024 | 1.0 | Installation initiale v3.1.0 |
| 17/12/2024 | 1.1 | Ajout personnalisation boutons et toggles |
