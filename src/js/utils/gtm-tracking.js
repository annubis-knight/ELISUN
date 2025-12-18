// src/js/utils/gtm-tracking.js
// Module de tracking GTM pour EliSun
// Gère les événements dataLayer pour Google Tag Manager

// ===================================
// INITIALISATION DATALAYER
// ===================================
window.dataLayer = window.dataLayer || [];

/**
 * Push un événement dans le dataLayer
 * @param {string} eventName - Nom de l'événement
 * @param {Object} eventData - Données associées
 */
function pushEvent(eventName, eventData = {}) {
  const payload = {
    event: eventName,
    ...eventData,
    timestamp: new Date().toISOString()
  };

  window.dataLayer.push(payload);

  // Log en dev uniquement
  if (process.env.NODE_ENV !== 'production') {
    console.log('📊 GTM Event:', eventName, eventData);
  }
}

// ===================================
// EVENTS CTA & NAVIGATION
// ===================================

/**
 * Track un clic sur un CTA devis
 * @param {string} location - Emplacement du CTA (hero, banner, footer, navbar)
 */
export function trackCTADevis(location) {
  pushEvent('clic_cta_devis', {
    cta_location: location,
    cta_type: 'devis'
  });
}

/**
 * Track un clic sur le numéro de téléphone
 */
export function trackPhoneClick() {
  pushEvent('contact_click', {
    contact_method: 'telephone'
  });
}

/**
 * Track un clic sur l'email
 */
export function trackEmailClick() {
  pushEvent('contact_click', {
    contact_method: 'email'
  });
}

/**
 * Track un clic WhatsApp
 */
export function trackWhatsAppClick() {
  pushEvent('contact_click', {
    contact_method: 'whatsapp'
  });
}

// ===================================
// EVENTS FORMULAIRE DEVIS
// ===================================

/**
 * Track l'ouverture de la modal devis
 * @param {string} source - D'où vient l'ouverture (cta_hero, cta_footer, etc.)
 */
export function trackModalOpen(source = 'unknown') {
  pushEvent('modal_devis_open', {
    modal_source: source
  });
}

/**
 * Track la progression dans le formulaire multi-étapes
 * @param {number} step - Numéro de l'étape (1, 2)
 */
export function trackFormStep(step) {
  pushEvent('form_step_view', {
    form_name: 'devis',
    step_number: step
  });
}

/**
 * Track la soumission du formulaire devis (LEAD)
 * @param {Object} formData - Données du formulaire
 */
export function trackFormSubmit(formData = {}) {
  pushEvent('generate_lead', {
    form_name: 'devis',
    kit_selected: formData.puissance || 'non_specifie',
    lead_value: 8500, // Valeur moyenne d'un projet
    currency: 'EUR'
  });
}

// ===================================
// EVENTS WIDGET ÉCONOMIES
// ===================================

/**
 * Track la sélection d'une puissance de kit
 * @param {string} power - Puissance sélectionnée (3kV, 6kV, 9kV, etc.)
 */
export function trackKitSelection(power) {
  pushEvent('selection_kit', {
    kit_power: power,
    page_section: 'widget_economie'
  });
}

/**
 * Track la sélection du type utilisateur
 * @param {string} userType - particulier ou professionnel
 */
export function trackUserTypeSelection(userType) {
  pushEvent('selection_user_type', {
    user_type: userType
  });
}

// ===================================
// EVENTS CTA PROGRESSIF (EMAIL)
// ===================================

/**
 * Track la soumission de l'email dans la CTA progressive
 * @param {string} location - Emplacement de la CTA (footer, hero, etc.)
 */
export function trackEmailCapture(location = 'cta_section') {
  pushEvent('email_capture', {
    capture_location: location,
    capture_type: 'progressive_cta'
  });
}

// ===================================
// EVENTS SCROLL (ENGAGEMENT)
// ===================================

const scrollTracked = {
  25: false,
  50: false,
  75: false,
  100: false
};

/**
 * Track la profondeur de scroll
 * À appeler sur l'événement scroll
 */
export function trackScrollDepth() {
  const scrollPercent = Math.round(
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  );

  [25, 50, 75, 100].forEach(threshold => {
    if (scrollPercent >= threshold && !scrollTracked[threshold]) {
      scrollTracked[threshold] = true;
      pushEvent('scroll_depth', {
        scroll_percent: threshold
      });
    }
  });
}

// ===================================
// CONSENT MODE - MISE À JOUR
// ===================================

/**
 * Met à jour le consentement GTM quand l'utilisateur accepte
 * @param {Object} consent - Objet de consentement { analytics: bool, marketing: bool }
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

  // Event pour signaler le changement de consentement
  pushEvent('consent_update', {
    analytics_granted: consent.analytics,
    marketing_granted: consent.marketing
  });
}

// ===================================
// INITIALISATION AUTO
// ===================================

/**
 * Initialise le tracking automatique (scroll, liens contact)
 */
export function initGTMTracking() {
  // Tracking scroll avec throttle
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      trackScrollDepth();
      scrollTimeout = null;
    }, 200);
  });

  // Tracking automatique des liens téléphone/email/whatsapp
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';

    if (href.startsWith('tel:')) {
      trackPhoneClick();
    } else if (href.startsWith('mailto:')) {
      trackEmailClick();
    } else if (href.includes('wa.me') || href.includes('whatsapp')) {
      trackWhatsAppClick();
    }
  });

  // Tracking automatique des CTA avec data-track-cta
  document.addEventListener('click', (e) => {
    const cta = e.target.closest('[data-track-cta]');
    if (cta) {
      const location = cta.getAttribute('data-track-cta');
      trackCTADevis(location);
    }
  });

  console.log('📊 GTM Tracking initialisé');
}

// Export par défaut pour import simple
export default {
  trackCTADevis,
  trackPhoneClick,
  trackEmailClick,
  trackWhatsAppClick,
  trackModalOpen,
  trackFormStep,
  trackFormSubmit,
  trackKitSelection,
  trackUserTypeSelection,
  trackEmailCapture,
  trackScrollDepth,
  updateGTMConsent,
  initGTMTracking
};
