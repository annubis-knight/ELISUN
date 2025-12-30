/**
 * CTA PROGRESSIF MULTI-ÉTAPES
 * Collecte progressive : email → prénom/nom → ouverture modal
 *
 * COMPORTEMENT :
 * - Toujours démarre à l'étape 1 (même après refresh)
 * - Pré-remplit les inputs avec les données localStorage
 * - L'utilisateur doit re-valider chaque étape à chaque visite
 *
 * ============================================
 * 📝 AJOUTER UNE ÉTAPE - GUIDE
 * ============================================
 *
 * 1. AJOUTER LE HTML dans index.html (section CTA, div.input-button-wrapper) :
 *
 *    <!-- Étape 3 : Téléphone (exemple) -->
 *    <input type="tel"
 *           id="cta-telephone-input"
 *           placeholder="06 12 34 56 78"
 *           class="input-field"
 *           autocomplete="tel"
 *           hidden>
 *
 * 2. AJOUTER LA CONFIG dans STEPS_CONFIG ci-dessous :
 *
 *    {
 *      fields: ['cta-telephone-input'],
 *      buttonText: 'Finaliser',
 *      openModal: true, // true si c'est la dernière étape
 *      validation: {
 *        'cta-telephone-input': {
 *          regex: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
 *          errorMessage: 'Téléphone invalide (format: 06 12 34 56 78)'
 *        }
 *      }
 *    }
 *
 * 3. METTRE À JOUR restoreState() pour pré-remplir le nouveau champ
 *
 * ============================================
 */

// ============================================
// 🔧 CONFIGURATION DES ÉTAPES
// ============================================

const STORAGE_KEY = 'elisunLead';

const STEPS_CONFIG = [
  {
    // ✉️ ÉTAPE 1 : Email seul
    fields: ['cta-email-input'],
    buttonText: 'Obtenir mon devis',
    validation: {
      'cta-email-input': {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: 'Email invalide'
      }
    }
  },
  {
    // 👤 ÉTAPE 2 : Prénom + Nom
    fields: ['cta-prenom-input', 'cta-nom-input'],
    buttonText: 'Valider',
    openModal: true, // Ouvre la modal à la fin de cette étape
    validation: {
      'cta-prenom-input': {
        regex: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,
        errorMessage: 'Prénom invalide (min 2 caractères)'
      },
      'cta-nom-input': {
        regex: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,
        errorMessage: 'Nom invalide (min 2 caractères)'
      }
    }
  }

  // 💡 EXEMPLE ÉTAPE 3 (décommenter et adapter) :
  // {
  //   fields: ['cta-telephone-input'],
  //   buttonText: 'Finaliser',
  //   openModal: true,
  //   validation: {
  //     'cta-telephone-input': {
  //       regex: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
  //       errorMessage: 'Téléphone invalide'
  //     }
  //   }
  // }
];

// ============================================
// 🔐 CONFIGURATION API BREVO (via proxy backend)
// ============================================

// Dev = localhost, 127.0.0.1, ou IP locale (192.168.x.x)
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

// ============================================
// 🎯 LOGIQUE PRINCIPALE
// ============================================

class CtaProgressive {
  constructor() {
    this.currentStep = 0; // Toujours démarrer à l'étape 1
    this.btn = null;
    this.inputs = {};
    this.init();
  }

  init() {
    // Récupérer les éléments DOM
    this.btn = document.getElementById('cta-signup-btn');

    // Collecter tous les inputs des étapes
    STEPS_CONFIG.forEach(step => {
      step.fields.forEach(fieldId => {
        const input = document.getElementById(fieldId);
        if (input) this.inputs[fieldId] = input;
      });
    });

    // Vérifier que les éléments essentiels existent
    if (!this.btn || Object.keys(this.inputs).length === 0) return;

    // Pré-remplir les inputs avec données existantes (mais rester étape 1)
    this.prefillInputs();

    // Afficher l'étape 1
    this.updateDisplay();

    // Écouter le clic sur le bouton
    this.btn.addEventListener('click', (e) => this.handleClick(e));

    console.log('✅ CTA Progressive initialisé');
  }

  // ============================================
  // 💾 GESTION DE L'ÉTAT (localStorage)
  // ============================================

  getSavedData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  }

  saveData(newData) {
    const current = this.getSavedData();
    const merged = { ...current, ...newData };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  }

  /**
   * Pré-remplit tous les inputs avec les données sauvegardées
   * SANS changer l'étape courante (reste à 0)
   */
  prefillInputs() {
    const saved = this.getSavedData();

    // Pré-remplir chaque input si donnée existante
    if (saved.email && this.inputs['cta-email-input']) {
      this.inputs['cta-email-input'].value = saved.email;
    }
    if (saved.prenom && this.inputs['cta-prenom-input']) {
      this.inputs['cta-prenom-input'].value = saved.prenom;
    }
    if (saved.nom && this.inputs['cta-nom-input']) {
      this.inputs['cta-nom-input'].value = saved.nom;
    }
    // Ajouter ici les nouveaux champs si étapes supplémentaires :
    // if (saved.telephone && this.inputs['cta-telephone-input']) {
    //   this.inputs['cta-telephone-input'].value = saved.telephone;
    // }
  }

  // ============================================
  // 🎨 AFFICHAGE DES ÉTAPES
  // ============================================

  updateDisplay() {
    const currentStepConfig = STEPS_CONFIG[this.currentStep];
    if (!currentStepConfig) return;

    // Cacher tous les inputs
    Object.values(this.inputs).forEach(input => {
      input.hidden = true;
      input.parentElement?.classList.remove('visible');
    });

    // Afficher les inputs de l'étape actuelle
    currentStepConfig.fields.forEach(fieldId => {
      const input = this.inputs[fieldId];
      if (input) {
        input.hidden = false;
        input.parentElement?.classList.add('visible');
      }
    });

    // Mettre à jour le texte du bouton
    this.btn.textContent = currentStepConfig.buttonText;

    // Gérer l'attribut data-action-modal
    if (currentStepConfig.openModal) {
      this.btn.setAttribute('data-action-modal', 'devis');
    } else {
      this.btn.removeAttribute('data-action-modal');
    }

    // Focus sur le premier input visible (sauf étape 1 au chargement)
    const firstInput = this.inputs[currentStepConfig.fields[0]];
    if (firstInput && this.currentStep > 0) {
      firstInput.focus();
    }
  }

  // ============================================
  // ✅ VALIDATION DES CHAMPS
  // ============================================

  validateField(fieldId, value) {
    const stepConfig = STEPS_CONFIG[this.currentStep];
    const fieldValidation = stepConfig.validation?.[fieldId];

    // Champ vide
    if (!value || value.trim() === '') {
      return { valid: false, message: 'Ce champ est requis' };
    }

    // Validation regex si définie
    if (fieldValidation?.regex && !fieldValidation.regex.test(value.trim())) {
      return { valid: false, message: fieldValidation.errorMessage };
    }

    return { valid: true };
  }

  showFieldError(input, message) {
    // Ajouter la classe d'erreur avec animation shake
    input.classList.add('error', 'shake');

    // Afficher le message (tooltip ou autre)
    input.setAttribute('title', message);

    // Retirer l'animation après 300ms
    setTimeout(() => {
      input.classList.remove('shake');
    }, 300);

    // Retirer l'erreur quand l'utilisateur tape
    const removeError = () => {
      input.classList.remove('error');
      input.removeAttribute('title');
      input.removeEventListener('input', removeError);
    };
    input.addEventListener('input', removeError);
  }

  // ============================================
  // 🖱️ GESTION DU CLIC
  // ============================================

  async handleClick(e) {
    const stepConfig = STEPS_CONFIG[this.currentStep];
    if (!stepConfig) return;

    // Collecter et valider les données de l'étape
    const stepData = {};
    let isValid = true;

    for (const fieldId of stepConfig.fields) {
      const input = this.inputs[fieldId];
      if (!input) continue;

      const value = input.value.trim();
      const validation = this.validateField(fieldId, value);

      if (!validation.valid) {
        this.showFieldError(input, validation.message);
        isValid = false;
        continue;
      }

      // Mapper le fieldId vers une clé propre (cta-email-input → email)
      const key = fieldId.replace('cta-', '').replace('-input', '');
      stepData[key] = value;
    }

    // Arrêter si validation échoue
    if (!isValid) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Toujours bloquer l'événement par défaut
    e.preventDefault();
    e.stopPropagation();

    // Sauvegarder les données
    this.saveData(stepData);

    // Envoi API optionnel
    if (API_CONFIG.enabled) {
      await this.sendToAPI();
    }

    // Passer à l'étape suivante ou finaliser
    this.currentStep++;

    if (this.currentStep < STEPS_CONFIG.length) {
      // Encore des étapes : afficher la suivante
      this.updateDisplay();
    } else {
      // Dernière étape : ouvrir la modal manuellement
      this.openDevisModal();
    }
  }

  // ============================================
  // 📋 OUVERTURE MODAL DEVIS
  // ============================================

  openDevisModal() {
    // Déclencher l'événement custom pour ouvrir la modal
    const modal = document.querySelector('#modal-devis');
    if (modal) {
      // Pré-remplir les champs de la modal avec les données sauvegardées
      const saved = this.getSavedData();

      const emailInput = modal.querySelector('input[name="email"]');
      const prenomInput = modal.querySelector('input[name="prenom"]');
      const nomInput = modal.querySelector('input[name="nom"]');

      if (emailInput && saved.email) emailInput.value = saved.email;
      if (prenomInput && saved.prenom) prenomInput.value = saved.prenom;
      if (nomInput && saved.nom) nomInput.value = saved.nom;

      // Ouvrir la modal
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  // ============================================
  // 🚀 ENVOI API BREVO (via proxy backend)
  // ============================================

  async sendToAPI() {
    if (!API_CONFIG.endpoint) return;

    const data = this.getSavedData();

    try {
      const response = await fetch(API_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          prenom: data.prenom || '',
          nom: data.nom || ''
        })
      });

      if (response.ok) {
        console.log('✅ Lead envoyé à Brevo');
      } else {
        console.error('❌ Erreur API:', await response.json());
      }
    } catch (error) {
      // Erreur silencieuse - ne pas bloquer l'UX
      console.error('❌ Erreur réseau:', error);
    }
  }
}

// ============================================
// 🎬 INITIALISATION
// ============================================

const initCtaProgressive = () => {
  // Vérifier si au moins le bouton existe (sinon pas sur la bonne page)
  const btn = document.getElementById('cta-signup-btn');
  if (!btn) return;

  // Attendre que tous les inputs soient disponibles (polling limité)
  const checkInputs = (attempts = 0) => {
    const email = document.getElementById('cta-email-input');
    const prenom = document.getElementById('cta-prenom-input');
    const nom = document.getElementById('cta-nom-input');

    if (email && prenom && nom) {
      new CtaProgressive();
    } else if (attempts < 20) {
      setTimeout(() => checkInputs(attempts + 1), 100);
    }
  };

  checkInputs();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCtaProgressive);
} else {
  initCtaProgressive();
}

export { CtaProgressive, initCtaProgressive };
