/**
 * ui-progressive-input.js
 * Gestion du formulaire progressif avec validation d'adresse Google Places API
 * Étapes : 1. Adresse (Google) → 2. Email → 3. Nom/Prénom
 *
 * Intégration Brevo : crée/met à jour un contact à chaque étape
 */

// Configuration - Coordonnées de Toulouse (centre d'intervention)
const BASE_COORDS = { lat: 43.6047, lng: 1.4442 };

// Configuration localStorage
const STORAGE_KEY = 'elisunProgressiveLead';

// Configuration API Brevo (via proxy backend)
const hostname = window.location.hostname;
const IS_LOCAL = hostname === 'localhost'
  || hostname === '127.0.0.1'
  || hostname.startsWith('192.168.');

const API_CONFIG = {
  enabled: true,
  endpoint: IS_LOCAL
    ? 'http://localhost:3000/api/brevo-lead' // Serveur local (dev)
    : '/api/brevo-lead' // Firebase Functions (production)
};

// État global du progressive input
let progressiveState = {
  currentStep: 1,
  autocomplete: null,
  selectedPlace: null,
  data: {
    address: '',
    distance: null,
    zone: '',
    coords: null,
    email: '',
    firstName: '',
    lastName: ''
  }
};

/**
 * Initialise le progressive input
 * Appelé depuis main.js
 */
export function initProgressiveInput() {
  const container = document.getElementById('progressive-input-container');
  if (!container) {
    console.warn('⚠️ Progressive input container non trouvé');
    return;
  }

  // Initialiser l'étape 1 (adresse Google)
  initStep1();

  console.log('✅ Progressive Input initialisé');
}

/**
 * ÉTAPE 1 : Validation d'adresse Google Places
 */
function initStep1() {
  const input = document.getElementById('progressive-address-input');
  const nextBtn = document.getElementById('progressive-next-btn');

  if (!input) return;

  // Vérifier que l'API Google Maps est chargée
  if (typeof google === 'undefined' || !google.maps || !google.maps.places) {
    console.warn('⚠️ Google Maps API non chargée, réessai dans 1s...');
    setTimeout(initStep1, 1000);
    return;
  }

  // Initialiser l'autocomplete Google Places
  progressiveState.autocomplete = new google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: 'fr' },
    fields: ['formatted_address', 'geometry'],
    types: ['address']
  });

  // Écouter la sélection d'une adresse
  progressiveState.autocomplete.addListener('place_changed', () => {
    progressiveState.selectedPlace = progressiveState.autocomplete.getPlace();
    console.log('📍 Adresse sélectionnée:', progressiveState.selectedPlace?.formatted_address);
  });

  // Bouton suivant / vérifier
  if (nextBtn) {
    nextBtn.addEventListener('click', handleStep1Validation);
  }

  // Validation au Enter
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleStep1Validation();
    }
  });

  console.log('✅ Étape 1 (Google Places) initialisée');
}

/**
 * Validation de l'étape 1 : adresse + calcul distance
 */
function handleStep1Validation() {
  const place = progressiveState.selectedPlace;

  if (!place || !place.geometry) {
    showProgressiveMessage(
      '<i class="fas fa-exclamation-triangle"></i> Veuillez sélectionner une adresse dans la liste',
      'error'
    );
    return;
  }

  const clientLat = place.geometry.location.lat();
  const clientLng = place.geometry.location.lng();
  const distance = calculateDistance(BASE_COORDS.lat, BASE_COORDS.lng, clientLat, clientLng);

  // Sauvegarder les données
  progressiveState.data.address = place.formatted_address;
  progressiveState.data.distance = distance;
  progressiveState.data.zone = distance <= 60 ? 'proche' : distance <= 80 ? 'moyen' : 'loin';
  progressiveState.data.coords = { lat: clientLat, lng: clientLng };

  // Afficher message de distance
  if (distance <= 60) {
    showProgressiveMessage(
      `<i class="fas fa-check-circle"></i> Parfait ! Vous êtes à <strong>${distance} km</strong> de Toulouse. Intervention rapide garantie !`,
      'success'
    );
  } else if (distance <= 80) {
    showProgressiveMessage(
      `<i class="fas fa-exclamation-circle"></i> Vous êtes à <strong>${distance} km</strong>. Intervention possible selon disponibilités.`,
      'warning'
    );
  } else {
    showProgressiveMessage(
      `<i class="fas fa-info-circle"></i> Vous êtes à <strong>${distance} km</strong>. Nous vous recontacterons pour étudier les possibilités.`,
      'info'
    );
  }

  // Émettre événement pour tracking GTM
  document.dispatchEvent(new CustomEvent('progressiveInputStep', {
    detail: { step: 1, data: progressiveState.data }
  }));

  // Passer à l'étape 2 après un court délai
  setTimeout(() => goToStep(2), 1500);
}

/**
 * ÉTAPE 2 : Saisie de l'email
 */
function initStep2() {
  const emailInput = document.getElementById('progressive-email-input');
  const nextBtn = document.getElementById('progressive-next-btn-step2');

  if (emailInput) {
    emailInput.focus();

    // Validation au Enter
    emailInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleStep2Validation();
      }
    });
  }

  // Attacher l'événement au bouton
  if (nextBtn) {
    nextBtn.onclick = handleStep2Validation;
  }
}

/**
 * Validation de l'étape 2 : email
 */
function handleStep2Validation() {
  const emailInput = document.getElementById('progressive-email-input');
  const email = emailInput?.value.trim();

  // Validation basique de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showProgressiveMessage(
      '<i class="fas fa-exclamation-triangle"></i> Veuillez entrer une adresse email valide',
      'error'
    );
    return;
  }

  // Sauvegarder l'email
  progressiveState.data.email = email;

  // Sauvegarder dans localStorage
  saveData({ email: email });

  // Masquer le message d'erreur
  hideProgressiveMessage();

  // Émettre événement pour tracking GTM
  document.dispatchEvent(new CustomEvent('progressiveInputStep', {
    detail: { step: 2, data: progressiveState.data }
  }));

  // Envoi API Brevo (première fois avec l'email)
  sendToBrevoAPI();

  // Passer à l'étape 3
  goToStep(3);
}

/**
 * ÉTAPE 3 : Saisie du nom et prénom
 */
function initStep3() {
  const firstNameInput = document.getElementById('progressive-firstname-input');
  const lastNameInput = document.getElementById('progressive-lastname-input');
  const nextBtn = document.getElementById('progressive-next-btn-step3');

  if (firstNameInput) {
    firstNameInput.focus();
  }

  // Validation au Enter sur le dernier champ
  if (lastNameInput) {
    lastNameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleStep3Validation();
      }
    });
  }

  // Attacher l'événement au bouton
  if (nextBtn) {
    nextBtn.onclick = handleStep3Validation;
  }
}

/**
 * Validation de l'étape 3 : nom/prénom + soumission finale
 */
function handleStep3Validation() {
  const firstNameInput = document.getElementById('progressive-firstname-input');
  const lastNameInput = document.getElementById('progressive-lastname-input');

  const firstName = firstNameInput?.value.trim();
  const lastName = lastNameInput?.value.trim();

  // Validation
  if (!firstName || firstName.length < 2) {
    showProgressiveMessage(
      '<i class="fas fa-exclamation-triangle"></i> Veuillez entrer votre prénom',
      'error'
    );
    return;
  }

  if (!lastName || lastName.length < 2) {
    showProgressiveMessage(
      '<i class="fas fa-exclamation-triangle"></i> Veuillez entrer votre nom',
      'error'
    );
    return;
  }

  // Sauvegarder les données
  progressiveState.data.firstName = firstName;
  progressiveState.data.lastName = lastName;

  // Sauvegarder dans localStorage
  saveData({ firstName: firstName, lastName: lastName });

  // Émettre événement pour tracking GTM
  document.dispatchEvent(new CustomEvent('progressiveInputStep', {
    detail: { step: 3, data: progressiveState.data }
  }));

  // Soumission finale
  handleFinalSubmission();
}

/**
 * Soumission finale du progressive input
 */
async function handleFinalSubmission() {
  const nextBtn = document.getElementById('progressive-next-btn-step3');

  // État loading
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
  }

  try {
    // Envoi final à Brevo avec toutes les données (nom/prénom inclus)
    await sendToBrevoAPI();

    // Émettre événement de soumission complète
    document.dispatchEvent(new CustomEvent('progressiveInputComplete', {
      detail: progressiveState.data
    }));

    console.log('📊 Progressive Input - Données finales:', progressiveState.data);

    // Afficher message de succès
    showProgressiveMessage(
      '<i class="fas fa-check-circle"></i> Merci ! Nous vous recontacterons très rapidement.',
      'success'
    );

    // Afficher l'étape de confirmation
    goToStep(4);

  } catch (error) {
    console.error('❌ Erreur soumission progressive input:', error);
    showProgressiveMessage(
      '<i class="fas fa-exclamation-triangle"></i> Une erreur est survenue. Veuillez réessayer.',
      'error'
    );

    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';
    }
  }
}

/**
 * Navigation entre les étapes
 * @param {number} step - Numéro de l'étape (1, 2, 3 ou 4)
 */
function goToStep(step) {
  progressiveState.currentStep = step;

  // Masquer toutes les étapes
  const steps = document.querySelectorAll('.progressive-step');
  steps.forEach(s => s.classList.remove('active'));

  // Afficher l'étape courante
  const currentStepEl = document.getElementById(`progressive-step-${step}`);
  if (currentStepEl) {
    currentStepEl.classList.add('active');
  }

  // Mettre à jour les indicateurs de progression
  updateProgressIndicator(step);

  // Initialiser l'étape
  switch (step) {
    case 2:
      initStep2();
      break;
    case 3:
      initStep3();
      break;
    case 4:
      // Étape de confirmation - rien à initialiser
      break;
  }

  console.log(`📍 Progressive Input - Étape ${step}`);
}

/**
 * Met à jour l'indicateur de progression visuel
 * @param {number} step - Étape courante
 */
function updateProgressIndicator(step) {
  const indicators = document.querySelectorAll('.progress-dot');
  indicators.forEach((dot, index) => {
    if (index + 1 < step) {
      dot.classList.add('completed');
      dot.classList.remove('active');
    } else if (index + 1 === step) {
      dot.classList.add('active');
      dot.classList.remove('completed');
    } else {
      dot.classList.remove('active', 'completed');
    }
  });
}

/**
 * Calcul de distance (formule Haversine)
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Rayon de la Terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Affiche un message dans le progressive input
 */
function showProgressiveMessage(text, type) {
  const messageEl = document.getElementById('progressive-message');
  if (!messageEl) return;

  messageEl.innerHTML = text;
  messageEl.className = `progressive-message ${type}`;
  messageEl.style.display = 'block';
}

/**
 * Masque le message du progressive input
 */
function hideProgressiveMessage() {
  const messageEl = document.getElementById('progressive-message');
  if (messageEl) {
    messageEl.style.display = 'none';
  }
}

/**
 * Réinitialise le progressive input
 */
export function resetProgressiveInput() {
  progressiveState = {
    currentStep: 1,
    autocomplete: progressiveState.autocomplete,
    selectedPlace: null,
    data: {
      address: '',
      distance: null,
      zone: '',
      coords: null,
      email: '',
      firstName: '',
      lastName: ''
    }
  };

  // Vider les champs
  const inputs = document.querySelectorAll('#progressive-input-container input');
  inputs.forEach(input => input.value = '');

  // Revenir à l'étape 1
  goToStep(1);
  hideProgressiveMessage();

  console.log('🔄 Progressive Input réinitialisé');
}

/**
 * Récupère les données du progressive input
 * @returns {Object} Données collectées
 */
export function getProgressiveInputData() {
  return { ...progressiveState.data };
}

// ============================================
// 💾 GESTION DE L'ÉTAT (localStorage)
// ============================================

/**
 * Récupère les données sauvegardées
 */
function getSavedData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

/**
 * Sauvegarde les données dans localStorage
 * @param {Object} newData - Nouvelles données à fusionner
 */
function saveData(newData) {
  const current = getSavedData();
  const merged = { ...current, ...newData };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

// ============================================
// 🚀 ENVOI API BREVO (via proxy backend)
// ============================================

/**
 * Envoie les données à l'API Brevo pour créer/mettre à jour le contact
 */
async function sendToBrevoAPI() {
  if (!API_CONFIG.enabled || !API_CONFIG.endpoint) return;

  const data = progressiveState.data;

  // On n'envoie que si on a au moins l'email
  if (!data.email) {
    console.log('⏳ Brevo: En attente de l\'email...');
    return;
  }

  try {
    const payload = {
      email: data.email,
      prenom: data.firstName || '',
      nom: data.lastName || '',
      // Attributs supplémentaires pour Brevo (noms exacts de Brevo)
      attributes: {
        ADRESSE_POSTALE: data.address || ''
      }
    };

    console.log('📤 Envoi à Brevo:', payload);

    const response = await fetch(API_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Lead envoyé à Brevo:', result);
    } else {
      const error = await response.json();
      console.error('❌ Erreur API Brevo:', error);
    }
  } catch (error) {
    // Erreur silencieuse - ne pas bloquer l'UX
    console.error('❌ Erreur réseau Brevo:', error);
  }
}
