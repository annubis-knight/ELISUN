# Guide d'implémentation Google Tag Manager (GTM)

Ce guide explique comment mettre en place GTM avec le tracking dataLayer dans n'importe quel projet web, en respectant le RGPD avec Consent Mode v2.

---

## Table des matières

1. [Prérequis](#prérequis)
2. [Architecture](#architecture)
3. [Phase 1 : Installation GTM](#phase-1--installation-gtm)
4. [Phase 2 : Consent Mode v2 (RGPD)](#phase-2--consent-mode-v2-rgpd)
5. [Phase 3 : Module de tracking JavaScript](#phase-3--module-de-tracking-javascript)
6. [Phase 4 : Configuration dans l'interface GTM](#phase-4--configuration-dans-linterface-gtm)
7. [Phase 5 : Tests et validation](#phase-5--tests-et-validation)
8. [Checklist finale](#checklist-finale)
9. [Événements recommandés](#événements-recommandés)

---

## Prérequis

- Un compte Google Tag Manager avec un conteneur créé
- Un ID GTM (format : `GTM-XXXXXXXX`)
- Une solution de cookie consent (vanilla-cookieconsent, Cookiebot, Axeptio, etc.)
- Accès au code source du site

---

## Architecture

```
src/
├── components/
│   ├── gtm-head.html      # Script GTM + Consent Mode (dans <head>)
│   └── gtm-body.html      # noscript fallback (après <body>)
├── js/
│   └── utils/
│       └── gtm-tracking.js # Module de tracking dataLayer
└── pages/
    └── *.html              # Pages avec includes GTM
```

---

## Phase 1 : Installation GTM

### Étape 1.1 : Créer le fichier gtm-head.html

Ce fichier contient le Consent Mode v2 ET le script GTM. Il doit être placé **le plus haut possible dans `<head>`**, juste après `<meta charset>`.

```html
<!-- Google Tag Manager - Consent Mode v2 + GTM -->
<!-- IMPORTANT: Ce script doit être placé le plus haut possible dans <head> -->

<!-- Consent Mode v2 - État par défaut (tout refusé sauf fonctionnel) -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // État par défaut RGPD : tout refusé jusqu'au consentement
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXXX');</script>
<!-- End Google Tag Manager -->
```

> **Important** : Remplacez `GTM-XXXXXXXX` par votre ID GTM.

### Étape 1.2 : Créer le fichier gtm-body.html

Ce fichier est le fallback pour les navigateurs sans JavaScript. Il doit être placé **juste après la balise `<body>`**.

```html
<!-- Google Tag Manager (noscript) -->
<!-- Fallback pour navigateurs sans JavaScript -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### Étape 1.3 : Inclure dans toutes les pages HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <!-- GTM doit être ici, le plus haut possible -->
    <include src="components/gtm-head.html"></include>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma page</title>
</head>
<body>
    <!-- GTM noscript juste après body -->
    <include src="components/gtm-body.html"></include>

    <!-- Contenu de la page -->
</body>
</html>
```

> **Note** : La syntaxe `<include>` fonctionne avec PostHTML-Include. Adaptez selon votre système de templating (PHP include, Twig, etc.).

---

## Phase 2 : Consent Mode v2 (RGPD)

Le Consent Mode v2 permet à GTM de respecter le choix de l'utilisateur. Par défaut, tout est refusé. Quand l'utilisateur accepte les cookies, on met à jour le consentement.

### Étape 2.1 : Fonction de mise à jour du consentement

Ajoutez cette fonction dans votre module de tracking :

```javascript
/**
 * Met à jour le consentement GTM quand l'utilisateur accepte
 * @param {Object} consent - { analytics: boolean, marketing: boolean }
 */
export function updateGTMConsent(consent) {
  if (typeof gtag !== 'function') return;

  // Analytics acceptés
  if (consent.analytics) {
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }

  // Marketing acceptés
  if (consent.marketing) {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
  }

  // Event pour signaler le changement
  window.dataLayer.push({
    event: 'consent_update',
    analytics_granted: consent.analytics,
    marketing_granted: consent.marketing
  });
}
```

### Étape 2.2 : Connecter à votre solution de cookies

#### Exemple avec vanilla-cookieconsent

```javascript
import * as CookieConsent from 'vanilla-cookieconsent';
import { updateGTMConsent } from './gtm-tracking.js';

const config = {
  // ... autres options

  onConsent: () => {
    updateGTMConsent({
      analytics: CookieConsent.acceptedCategory('analytics'),
      marketing: CookieConsent.acceptedCategory('marketing')
    });
  },

  onChange: () => {
    updateGTMConsent({
      analytics: CookieConsent.acceptedCategory('analytics'),
      marketing: CookieConsent.acceptedCategory('marketing')
    });
  }
};

CookieConsent.run(config);
```

#### Exemple avec Axeptio

```javascript
window._axcb = window._axcb || [];
window._axcb.push(function(axeptio) {
  axeptio.on('cookies:complete', function(choices) {
    updateGTMConsent({
      analytics: choices.google_analytics,
      marketing: choices.facebook_pixel
    });
  });
});
```

---

## Phase 3 : Module de tracking JavaScript

Créez un module centralisé pour tous vos événements dataLayer.

### Fichier : `src/js/utils/gtm-tracking.js`

```javascript
// Module de tracking GTM générique
// Adaptez les événements selon vos besoins

window.dataLayer = window.dataLayer || [];

/**
 * Push un événement dans le dataLayer
 */
function pushEvent(eventName, eventData = {}) {
  window.dataLayer.push({
    event: eventName,
    ...eventData,
    timestamp: new Date().toISOString()
  });

  // Log en dev
  if (process.env.NODE_ENV !== 'production') {
    console.log('📊 GTM Event:', eventName, eventData);
  }
}

// ===================================
// EVENTS CTA & NAVIGATION
// ===================================

export function trackCTAClick(location, ctaType = 'default') {
  pushEvent('cta_click', {
    cta_location: location,
    cta_type: ctaType
  });
}

export function trackPhoneClick() {
  pushEvent('contact_click', { contact_method: 'telephone' });
}

export function trackEmailClick() {
  pushEvent('contact_click', { contact_method: 'email' });
}

// ===================================
// EVENTS FORMULAIRE
// ===================================

export function trackFormOpen(formName, source = 'unknown') {
  pushEvent('form_open', {
    form_name: formName,
    form_source: source
  });
}

export function trackFormStep(formName, step) {
  pushEvent('form_step_view', {
    form_name: formName,
    step_number: step
  });
}

export function trackFormSubmit(formName, formData = {}) {
  pushEvent('form_submit', {
    form_name: formName,
    ...formData
  });
}

// ===================================
// EVENTS E-COMMERCE (optionnel)
// ===================================

export function trackProductView(product) {
  pushEvent('view_item', {
    currency: 'EUR',
    value: product.price,
    items: [{
      item_id: product.id,
      item_name: product.name,
      price: product.price
    }]
  });
}

export function trackAddToCart(product) {
  pushEvent('add_to_cart', {
    currency: 'EUR',
    value: product.price,
    items: [{
      item_id: product.id,
      item_name: product.name,
      price: product.price,
      quantity: product.quantity || 1
    }]
  });
}

// ===================================
// EVENTS SCROLL (engagement)
// ===================================

const scrollTracked = { 25: false, 50: false, 75: false, 100: false };

export function trackScrollDepth() {
  const scrollPercent = Math.round(
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  );

  [25, 50, 75, 100].forEach(threshold => {
    if (scrollPercent >= threshold && !scrollTracked[threshold]) {
      scrollTracked[threshold] = true;
      pushEvent('scroll_depth', { scroll_percent: threshold });
    }
  });
}

// ===================================
// CONSENT MODE
// ===================================

export function updateGTMConsent(consent) {
  if (typeof gtag !== 'function') return;

  if (consent.analytics) {
    gtag('consent', 'update', { 'analytics_storage': 'granted' });
  }

  if (consent.marketing) {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
  }

  pushEvent('consent_update', {
    analytics_granted: consent.analytics,
    marketing_granted: consent.marketing
  });
}

// ===================================
// INITIALISATION AUTO
// ===================================

export function initGTMTracking() {
  // Scroll tracking avec throttle
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      trackScrollDepth();
      scrollTimeout = null;
    }, 200);
  });

  // Auto-tracking liens contact
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    if (href.startsWith('tel:')) trackPhoneClick();
    else if (href.startsWith('mailto:')) trackEmailClick();
  });

  console.log('📊 GTM Tracking initialisé');
}
```

### Utilisation dans votre app

```javascript
import { initGTMTracking, trackCTAClick, trackFormSubmit } from './utils/gtm-tracking.js';

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
  initGTMTracking();
});

// Tracker un clic CTA
document.querySelector('.btn-cta').addEventListener('click', () => {
  trackCTAClick('hero', 'devis');
});

// Tracker une soumission de formulaire
form.addEventListener('submit', () => {
  trackFormSubmit('contact', { subject: 'demande_info' });
});
```

---

## Phase 4 : Configuration dans l'interface GTM

### Étape 4.1 : Créer les Variables

Dans GTM > Variables > Nouvelle variable définie par l'utilisateur :

| Nom Variable | Type | Configuration |
|--------------|------|---------------|
| DLV - cta_location | Variable de couche de données | Nom : `cta_location` |
| DLV - cta_type | Variable de couche de données | Nom : `cta_type` |
| DLV - form_name | Variable de couche de données | Nom : `form_name` |
| DLV - step_number | Variable de couche de données | Nom : `step_number` |
| DLV - contact_method | Variable de couche de données | Nom : `contact_method` |
| DLV - scroll_percent | Variable de couche de données | Nom : `scroll_percent` |

### Étape 4.2 : Créer les Déclencheurs

| Nom Déclencheur | Type | Configuration |
|-----------------|------|---------------|
| Event - CTA Click | Événement personnalisé | Nom : `cta_click` |
| Event - Contact Click | Événement personnalisé | Nom : `contact_click` |
| Event - Form Open | Événement personnalisé | Nom : `form_open` |
| Event - Form Step | Événement personnalisé | Nom : `form_step_view` |
| Event - Form Submit | Événement personnalisé | Nom : `form_submit` |
| Event - Scroll 75% | Événement personnalisé | Nom : `scroll_depth`, Condition : DLV - scroll_percent = 75 |

### Étape 4.3 : Créer les Tags GA4

#### Tag 1 : GA4 Configuration

- **Type** : Google Analytics: Configuration GA4
- **Measurement ID** : G-XXXXXXXXXX
- **Déclencheur** : All Pages

#### Tag 2 : GA4 Event - CTA Click

- **Type** : Google Analytics: Événement GA4
- **Configuration Tag** : {{GA4 Configuration}}
- **Nom événement** : `cta_click`
- **Paramètres** :
  - `cta_location` → `{{DLV - cta_location}}`
  - `cta_type` → `{{DLV - cta_type}}`
- **Déclencheur** : Event - CTA Click

#### Tag 3 : GA4 Event - Form Submit (Lead)

- **Type** : Google Analytics: Événement GA4
- **Nom événement** : `generate_lead`
- **Paramètres** :
  - `form_name` → `{{DLV - form_name}}`
  - `value` → 100 (ou valeur estimée du lead)
  - `currency` → EUR
- **Déclencheur** : Event - Form Submit
- **Consent Settings** : Analytics Storage = Required

---

## Phase 5 : Tests et validation

### Étape 5.1 : Test en local

```bash
npm run dev
# Ouvrir la console du navigateur
# Taper : dataLayer
# Vérifier que les événements apparaissent
```

### Étape 5.2 : GTM Preview Mode

1. Dans GTM → clic **"Prévisualiser"**
2. Entrez l'URL de votre site
3. Le Tag Assistant s'ouvre
4. Testez chaque action et vérifiez les events

### Étape 5.3 : Vérifier GA4 en temps réel

1. Google Analytics → Rapports → Temps réel
2. Effectuez des actions sur votre site
3. Les événements doivent apparaître

### Étape 5.4 : Extensions Chrome utiles

- **Google Tag Assistant** : Valide la config GTM
- **Facebook Pixel Helper** : Vérifie Meta Pixel
- **GA Debugger** : Voir les events GA4

---

## Checklist finale

### Code

- [ ] `gtm-head.html` créé avec Consent Mode + script GTM
- [ ] `gtm-body.html` créé avec noscript fallback
- [ ] Includes ajoutés dans toutes les pages HTML
- [ ] Module `gtm-tracking.js` créé
- [ ] Connexion avec la solution de cookies (Consent Mode)
- [ ] Events ajoutés sur les éléments clés (CTA, formulaires, etc.)

### Interface GTM

- [ ] Variables dataLayer créées
- [ ] Déclencheurs créés pour chaque event
- [ ] Tag GA4 Configuration créé
- [ ] Tags GA4 Events créés
- [ ] Consent Settings configurés sur les tags

### Tests

- [ ] Preview Mode validé
- [ ] GA4 Temps Réel reçoit les events
- [ ] Consent Mode fonctionne (events bloqués sans consentement)

### Déploiement

- [ ] Version GTM publiée
- [ ] Site déployé
- [ ] Vérification en production

---

## Événements recommandés

### Pour un site vitrine / lead generation

| Événement | Quand | Données |
|-----------|-------|---------|
| `cta_click` | Clic sur CTA | location, type |
| `form_open` | Ouverture formulaire | form_name, source |
| `form_step_view` | Navigation multi-étapes | form_name, step |
| `form_submit` | Soumission formulaire | form_name, données |
| `contact_click` | Clic tel/email | method |
| `scroll_depth` | Scroll 25/50/75/100% | percent |

### Pour un e-commerce (GA4 Enhanced)

| Événement | Quand | Données |
|-----------|-------|---------|
| `view_item` | Vue produit | item_id, item_name, price |
| `add_to_cart` | Ajout panier | items[], value |
| `begin_checkout` | Début checkout | items[], value |
| `purchase` | Achat confirmé | transaction_id, value, items[] |

---

## Ressources

- [Documentation GTM](https://developers.google.com/tag-manager)
- [Consent Mode v2](https://developers.google.com/tag-platform/security/guides/consent)
- [GA4 Recommended Events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [vanilla-cookieconsent](https://cookieconsent.orestbida.com/)

---

*Guide créé à partir de l'implémentation du projet EliSun - Décembre 2024*
