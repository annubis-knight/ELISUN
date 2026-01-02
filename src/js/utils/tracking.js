/**
 * Tracking DataLayer - EliSun
 * ===========================================
 *
 * Combine :
 * - Listeners auto-générés pour data-track="..."
 * - Fonctions exportées pour usage programmatique
 *
 * Source: tracking-events.yaml
 * Events: 27
 */

// Initialiser dataLayer
window.dataLayer = window.dataLayer || [];

/**
 * Pousse un événement vers dataLayer
 * @param {string} eventName - Nom de l'événement
 * @param {Object} eventData - Données supplémentaires
 */
function pushEvent(eventName, eventData = {}) {
  window.dataLayer.push({
    event: eventName,
    ...eventData,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString()
  });

  // Log en dev uniquement
  if (process.env.NODE_ENV !== 'production') {
    console.log('📊 GTM Event:', eventName, eventData);
  }
}

// ===================================
// FONCTIONS EXPORTÉES (usage programmatique)
// ===================================

/**
 * Track l'ouverture de la modal devis
 * @param {string} source - D'où vient l'ouverture (cta_hero, cta_footer, etc.)
 */
export function trackModalOpen(source = 'unknown') {
  pushEvent('modal_open', {
    modal_name: 'devis',
    modal_source: source
  });
}

/**
 * Track la progression dans le formulaire multi-étapes
 * @param {number} step - Numéro de l'étape (1, 2, 3...)
 */
export function trackFormStep(step) {
  pushEvent('form_step', {
    form_name: 'devis',
    step_number: step
  });
}

/**
 * Track la soumission du formulaire devis (LEAD)
 * @param {Object} formData - Données du formulaire
 */
export function trackFormSubmit(formData = {}) {
  pushEvent('form_submit', {
    form_name: 'devis',
    kit_selected: formData.puissance || 'non_specifie',
    lead_value: 8500,
    currency: 'EUR'
  });
}

/**
 * Met à jour le consentement GTM (Consent Mode v2)
 * @param {Object} consent - { analytics: bool, marketing: bool }
 */
export function updateGTMConsent(consent) {
  if (typeof gtag !== 'function') return;

  if (consent.analytics) {
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
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
// LISTENERS AUTOMATIQUES (data-track)
// ===================================

document.addEventListener('DOMContentLoaded', function() {

  // Helper pour ajouter des listeners
  function addTrackListener(selector, eventName, eventType = 'click') {
    document.querySelectorAll(selector).forEach(function(el) {
      el.addEventListener(eventType, function() {
        pushEvent(eventName, {
          element_id: this.id || 'unknown',
          page_section: this.closest('section')?.id || 'unknown'
        });
      });
    });
  }

  // ============================================
  // CONVERSIONS
  // ============================================
  addTrackListener('form[data-track="contact"]', 'form_submit', 'submit');
  addTrackListener('[data-track="phone"]', 'phone_click');
  addTrackListener('[data-track="email"]', 'email_click');
  addTrackListener('[data-track="whatsapp"]', 'whatsapp_click');
  addTrackListener('[data-track="form_continuer"]', 'form_step');

  // ============================================
  // ENGAGEMENT
  // ============================================
  addTrackListener('[data-track="cta-primary"]', 'cta_primary');
  addTrackListener('[data-track="cta-secondary"]', 'cta_secondary');
  addTrackListener('[data-track="video"]', 'video_play');
  addTrackListener('[data-track="accordion"]', 'accordion_open');
  addTrackListener('[data-track="tab"]', 'tab_click');
  addTrackListener('[data-track="modal"]', 'modal_open');

  // ============================================
  // NAVIGATION
  // ============================================
  addTrackListener('[data-track="menu"]', 'menu_click');
  addTrackListener('[data-track="logo"]', 'logo_click');
  addTrackListener('[data-track="nav"]', 'nav_internal');

  // ============================================
  // COOKIES
  // ============================================
  addTrackListener('[data-track="cookie-accept"]', 'cookie_accept');
  addTrackListener('[data-track="cookie-reject"]', 'cookie_reject');
  addTrackListener('[data-track="cookie-customize"]', 'cookie_customize');
  addTrackListener('[data-track="cookie-save"]', 'cookie_save');

  // ============================================
  // ERREURS (on load)
  // ============================================
  document.querySelectorAll('body.error-404, body.page-404, [data-page="404"]').forEach(function(el) {
    pushEvent('error_404', { element_id: 'page', page_section: '404' });
  });
  document.querySelectorAll('body.error-500, body.error, [data-page="error"]').forEach(function(el) {
    pushEvent('error_page', { element_id: 'page', page_section: 'error' });
  });
  addTrackListener('[data-track="form-error"]', 'error_form');

  // ============================================
  // SCROLL DEPTH
  // ============================================
  const scrollTracked = { 25: false, 50: false, 75: false, 100: false };

  window.addEventListener('scroll', function() {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    [25, 50, 75, 100].forEach(function(threshold) {
      if (scrollPercent >= threshold && !scrollTracked[threshold]) {
        scrollTracked[threshold] = true;
        pushEvent('scroll_' + threshold, { scroll_percent: threshold });
      }
    });
  });

  // ============================================
  // TIME ON PAGE
  // ============================================
  setTimeout(function() { pushEvent('read_30s', {}); }, 30000);
  setTimeout(function() { pushEvent('read_60s', {}); }, 60000);
  setTimeout(function() { pushEvent('read_120s', {}); }, 120000);

  console.log('📊 Tracking DataLayer initialisé (27 events)');
});
