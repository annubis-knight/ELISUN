// src/js/components/ui-cookie-consent.js
// Configuration et initialisation de vanilla-cookieconsent pour EliSun
// Documentation : https://cookieconsent.orestbida.com/

import * as CookieConsent from 'vanilla-cookieconsent';

/**
 * Configuration des catégories de cookies
 * - necessary : Cookies essentiels (toujours actifs)
 * - analytics : Google Analytics, statistiques
 * - marketing : Pixels publicitaires, remarketing
 */
const cookieConsentConfig = {
  // === PARAMÈTRES GÉNÉRAUX ===

  // Nom du cookie qui stocke les préférences
  cookie: {
    name: 'elisun_cookie_consent',
    // Durée de vie : 6 mois (182 jours)
    expiresAfterDays: 182,
    // Domaine : automatique (détecté)
    // domain: 'elisun-toulouse.fr', // Décommenter en production si nécessaire
  },

  // Mode de consentement : opt-in (RGPD strict)
  // Les cookies non-essentiels sont bloqués par défaut
  mode: 'opt-in',

  // Révision de la configuration (incrémenter si la politique change)
  revision: 1,

  // Afficher le bouton de préférences dans le footer
  // (on le gère manuellement avec un lien)
  manageScriptTags: true,

  // === CATÉGORIES DE COOKIES ===
  categories: {
    // Cookies nécessaires (toujours actifs, non désactivables)
    necessary: {
      enabled: true,
      readOnly: true, // L'utilisateur ne peut pas les désactiver
    },

    // Cookies analytiques (Google Analytics, etc.)
    analytics: {
      enabled: false, // Désactivés par défaut (opt-in)
      readOnly: false,
      // Callback quand l'utilisateur accepte cette catégorie
      autoClear: {
        cookies: [
          { name: /^_ga/ },      // Google Analytics
          { name: /^_gid/ },     // Google Analytics
          { name: /^_gat/ },     // Google Analytics
        ],
      },
    },

    // Cookies marketing (Facebook Pixel, Google Ads, etc.)
    marketing: {
      enabled: false, // Désactivés par défaut (opt-in)
      readOnly: false,
      autoClear: {
        cookies: [
          { name: /^_fbp/ },     // Facebook Pixel
          { name: /^_fbc/ },     // Facebook Click ID
        ],
      },
    },
  },

  // === TEXTES EN FRANÇAIS ===
  language: {
    default: 'fr',
    autoDetect: 'document', // Détecte la langue du document HTML

    translations: {
      fr: {
        consentModal: {
          title: 'Nous utilisons des cookies',
          description: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et personnaliser le contenu. Vous pouvez choisir les cookies que vous souhaitez accepter.',
          acceptAllBtn: 'Tout accepter',
          acceptNecessaryBtn: 'Refuser tout',
          showPreferencesBtn: 'Gérer les préférences',
          footer: '<a href="/mentions-legales.html">Mentions légales</a> | <a href="/politique-confidentialite.html">Politique de confidentialité</a>',
        },

        preferencesModal: {
          title: 'Préférences de cookies',
          acceptAllBtn: 'Tout accepter',
          acceptNecessaryBtn: 'Refuser tout',
          savePreferencesBtn: 'Enregistrer mes préférences',
          closeIconLabel: 'Fermer',
          serviceCounterLabel: 'Service|Services',

          sections: [
            {
              title: 'Utilisation des cookies',
              description: 'Les cookies nous permettent d\'améliorer votre expérience de navigation, de mémoriser vos préférences et d\'analyser l\'utilisation de notre site. Vous pouvez à tout moment modifier vos préférences.',
            },
            {
              title: 'Cookies strictement nécessaires <span class="pm__badge">Toujours actifs</span>',
              description: 'Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation et l\'accès aux fonctionnalités essentielles (formulaires, sécurité, etc.). Sans ces cookies, le site ne peut pas fonctionner correctement.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies analytiques',
              description: 'Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site en collectant des informations de manière anonyme. Cela nous permet d\'améliorer continuellement notre site.',
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
                    description: 'Identifiant unique pour distinguer les utilisateurs',
                    expiration: '2 ans',
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description: 'Identifiant unique pour la session',
                    expiration: '24 heures',
                  },
                ],
              },
            },
            {
              title: 'Cookies marketing',
              description: 'Ces cookies sont utilisés pour suivre les visiteurs sur les sites web afin de leur afficher des publicités pertinentes. Ils permettent également de mesurer l\'efficacité de nos campagnes publicitaires.',
              linkedCategory: 'marketing',
              cookieTable: {
                headers: {
                  name: 'Nom',
                  domain: 'Domaine',
                  description: 'Description',
                  expiration: 'Expiration',
                },
                body: [
                  {
                    name: '_fbp',
                    domain: 'Facebook',
                    description: 'Utilisé par Facebook pour diffuser des publicités',
                    expiration: '3 mois',
                  },
                ],
              },
            },
            {
              title: 'Plus d\'informations',
              description: 'Pour toute question concernant notre politique de cookies, vous pouvez nous contacter par email à <a href="mailto:contact@elisun-toulouse.fr">contact@elisun-toulouse.fr</a>.',
            },
          ],
        },
      },
    },
  },

  // === APPARENCE ===
  guiOptions: {
    consentModal: {
      layout: 'box wide',        // Options: 'box', 'box wide', 'cloud', 'bar'
      position: 'bottom left', // Options: 'bottom/middle/top' + 'left/center/right'
      equalWeightButtons: true,  // Boutons de même taille
      flipButtons: false,        // Inverser l'ordre des boutons
    },
    preferencesModal: {
      layout: 'box',             // Options: 'box', 'bar'
      position: 'right',         // Options: 'left', 'right'
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  // === CALLBACKS ===

  // Appelé à chaque changement de consentement
  onConsent: ({ cookie }) => {
    console.log('🍪 Consentement enregistré:', cookie);

    // Si analytics acceptés, initialiser Google Analytics
    if (CookieConsent.acceptedCategory('analytics')) {
      console.log('📊 Analytics acceptés - Initialisation GA...');
      initGoogleAnalytics();
    }

    // Si marketing acceptés, initialiser les pixels
    if (CookieConsent.acceptedCategory('marketing')) {
      console.log('📢 Marketing acceptés - Initialisation pixels...');
      initMarketingPixels();
    }
  },

  // Appelé quand l'utilisateur change ses préférences
  onChange: ({ cookie, changedCategories }) => {
    console.log('🍪 Préférences modifiées:', changedCategories);

    // Recharger la page si nécessaire pour appliquer les changements
    // (optionnel - décommenter si besoin)
    // if (changedCategories.includes('analytics') || changedCategories.includes('marketing')) {
    //   window.location.reload();
    // }
  },

  // Appelé à la première visite
  onFirstConsent: ({ cookie }) => {
    console.log('🍪 Premier consentement:', cookie);
  },
};

/**
 * Initialise Google Analytics (à appeler uniquement si consentement donné)
 */
function initGoogleAnalytics() {
  // Vérifier si GA n'est pas déjà chargé
  if (window.gtag) {
    console.log('📊 Google Analytics déjà initialisé');
    return;
  }

  // ID de mesure Google Analytics (à remplacer par le vrai ID)
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Remplacer par votre ID

  // Créer le script GA
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialiser gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true, // RGPD : anonymiser les IPs
  });

  console.log('📊 Google Analytics initialisé');
}

/**
 * Initialise les pixels marketing (Facebook, etc.)
 */
function initMarketingPixels() {
  // Facebook Pixel (à implémenter si nécessaire)
  // const FB_PIXEL_ID = 'XXXXXXXXXX'; // TODO: Remplacer par votre ID

  console.log('📢 Pixels marketing initialisés (placeholder)');
}

/**
 * Initialise le cookie consent
 */
export function initCookieConsent() {
  // Exécuter uniquement côté client
  if (typeof window === 'undefined') return;

  // Initialiser avec la configuration
  CookieConsent.run(cookieConsentConfig);

  console.log('🍪 Cookie Consent initialisé');

  // Exposer l'API globalement pour le bouton "Gérer les cookies"
  window.CookieConsent = CookieConsent;
}

/**
 * Ouvre le modal de préférences (pour le lien dans le footer)
 */
export function showCookiePreferences() {
  CookieConsent.showPreferences();
}

/**
 * Vérifie si une catégorie est acceptée
 * @param {string} category - 'necessary', 'analytics', ou 'marketing'
 * @returns {boolean}
 */
export function isCategoryAccepted(category) {
  return CookieConsent.acceptedCategory(category);
}

// Auto-initialisation au chargement du module
initCookieConsent();
