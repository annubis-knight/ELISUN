/**
 * Gestionnaire du modal de demande de devis
 * Gestion de l'ouverture, fermeture, validation et soumission du formulaire
 * Inclut focus trap, accessibilité ARIA, localStorage et événements custom
 */

class ModalDevis {
  constructor() {
    // Protection contre l'initialisation multiple
    if (ModalDevis.instance) {
      return ModalDevis.instance;
    }

    // Sélection des éléments du DOM
    this.modal = document.querySelector('#modal-devis');
    this.modalCard = this.modal?.querySelector('.modal-card');
    this.closeBtn = this.modal?.querySelector('[data-close-modal]');
    this.form = document.querySelector('#form-devis');
    this.formSuccess = this.form?.querySelector('.form-success');
    this.openButtons = document.querySelectorAll('[data-open-modal="devis"]');

    // Navigation multi-étapes
    this.currentStep = 1;
    this.totalSteps = 2;
    this.steps = this.form?.querySelectorAll('[data-step]');
    this.stepIndicators = this.form?.querySelectorAll('[data-step-indicator]');
    this.btnNext = this.form?.querySelector('[data-nav="next"]');
    this.btnPrev = this.form?.querySelector('[data-nav="prev"]');
    this.btnSubmit = this.form?.querySelector('.btn-submit');
    this.formAlert = this.form?.querySelector('.form-alert');

    // État du modal
    this.isOpen = false;
    this.focusedElementBeforeModal = null;
    this.focusableElements = [];

    ModalDevis.instance = this;
    this.init();
  }

  init() {
    if (!this.modal || !this.form) {
      console.warn('⚠️ Modal devis ou formulaire non trouvé');
      return;
    }
    
    this.setupEventListeners();
    this.goToStep(1); // Initialiser à l'étape 1
  }

  /**
   * Configuration des écouteurs d'événements
   */
  setupEventListeners() {
    // Boutons d'ouverture
    this.openButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    // Bouton de fermeture
    this.closeBtn?.addEventListener('click', () => this.close());

    // Clic sur overlay
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Touche ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });

    // Navigation entre étapes
    this.btnNext?.addEventListener('click', () => this.nextStep());
    this.btnPrev?.addEventListener('click', () => this.prevStep());

    // Soumission
    this.form?.addEventListener('submit', (e) => this.handleSubmit(e));

    // Validation temps réel avec debounce
    this.setupRealTimeValidation();
  }

  /**
   * Ouvrir le modal
   */
  open() {
    if (!this.modal) return;

    this.focusedElementBeforeModal = document.activeElement;
    document.body.style.overflow = 'hidden';

    this.modal.classList.add('is-open');
    this.modal.setAttribute('aria-hidden', 'false');
    this.isOpen = true;

    // Charger progression sauvegardée
    this.loadProgressFromLocalStorage();

    // Émettre événement custom
    this.fireCustomEvent('opened', {});

    setTimeout(() => {
      const firstInput = this.form?.querySelector('#devis-nom');
      firstInput?.focus();
      this.setupFocusTrap();
    }, 100);
  }

  /**
   * Fermer le modal
   */
  close() {
    if (!this.modal) return;

    document.body.style.overflow = '';
    this.modal.classList.remove('is-open');
    this.modal.setAttribute('aria-hidden', 'true');
    this.isOpen = false;

    if (this.focusedElementBeforeModal) {
      this.focusedElementBeforeModal.focus();
    }

    setTimeout(() => this.resetForm(), 300);
  }

  /**
   * Navigation entre étapes
   */
  goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > this.totalSteps) return;

    this.currentStep = stepNumber;

    // Afficher/masquer les étapes
    this.steps?.forEach(step => {
      const stepNum = parseInt(step.getAttribute('data-step'));
      if (stepNum === stepNumber) {
        step.removeAttribute('hidden');
        step.classList.add('active');
      } else {
        step.setAttribute('hidden', '');
        step.classList.remove('active');
      }
    });

    // Mise à jour indicateurs de progression
    this.stepIndicators?.forEach(indicator => {
      const indicatorNum = parseInt(indicator.getAttribute('data-step-indicator'));
      if (indicatorNum <= stepNumber) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });

    // Afficher/masquer boutons navigation
    this.updateNavigationButtons();

    // Sauvegarder progression
    this.saveProgressToLocalStorage();

    // Émettre événement custom
    this.fireCustomEvent('step-changed', { step: stepNumber });
  }

  updateNavigationButtons() {
    // Bouton Précédent
    if (this.currentStep === 1) {
      this.btnPrev?.setAttribute('hidden', '');
    } else {
      this.btnPrev?.removeAttribute('hidden');
    }

    // Bouton Suivant / Submit
    if (this.currentStep === this.totalSteps) {
      this.btnNext?.setAttribute('hidden', '');
      this.btnSubmit?.removeAttribute('hidden');
    } else {
      this.btnNext?.removeAttribute('hidden');
      this.btnSubmit?.setAttribute('hidden', '');
    }
  }

  nextStep() {
    // Valider l'étape actuelle avant de passer à la suivante
    if (!this.validateCurrentStep()) {
      return;
    }
    this.goToStep(this.currentStep + 1);
  }

  prevStep() {
    this.goToStep(this.currentStep - 1);
  }

  validateCurrentStep() {
    const currentStepElement = this.form?.querySelector(`[data-step="${this.currentStep}"]`);
    const requiredInputs = currentStepElement?.querySelectorAll('.form-input[required], .form-textarea[required]');
    let isValid = true;

    requiredInputs?.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    // Afficher/masquer l'alerte globale
    this.toggleGlobalAlert(!isValid);

    return isValid;
  }

  /**
   * Afficher/masquer le message d'alerte global
   */
  toggleGlobalAlert(show) {
    if (!this.formAlert) return;

    if (show) {
      this.formAlert.removeAttribute('hidden');
    } else {
      this.formAlert.setAttribute('hidden', '');
    }
  }

  /**
   * Focus trap - empêcher le focus de sortir du modal
   */
  setupFocusTrap() {
    if (!this.modalCard) return;

    this.focusableElements = this.modalCard.querySelectorAll(
      'button:not([hidden]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = this.focusableElements[0];
    const lastFocusable = this.focusableElements[this.focusableElements.length - 1];

    this.modalCard.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    });
  }

  /**
   * Debounce pour validation
   */
  debounce(fn, delay = 300) {
    let timerId;
    return function(...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /**
   * Validation en temps réel des champs avec debounce
   */
  setupRealTimeValidation() {
    const inputs = this.form?.querySelectorAll('.form-input, .form-textarea');
    
    inputs?.forEach(input => {
      // Validation à la perte de focus (immédiate)
      input.addEventListener('blur', () => this.validateField(input));
      
      // Validation pendant la saisie (avec debounce)
      const debouncedValidate = this.debounce(() => {
        if (input.value.trim()) {
          this.validateField(input);
        }
      }, 500);
      
      input.addEventListener('input', () => {
        if (input.classList.contains('has-error')) {
          this.clearFieldError(input);
        }
        debouncedValidate();
      });
    });

    // Validation des radio buttons
    const radioInputs = this.form?.querySelectorAll('input[name="puissance"]');
    radioInputs?.forEach(radio => {
      radio.addEventListener('change', () => {
        const fieldset = radio.closest('.form-fieldset');
        this.clearFieldError(fieldset?.querySelector('.form-error'));
      });
    });
  }

  /**
   * Valider un champ individuel
   */
  validateField(field) {
    let isValid = true;

    if (field.hasAttribute('required') && !field.value.trim()) {
      isValid = false;
    }

    if (field.type === 'email' && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        isValid = false;
      }
    }

    if (field.type === 'tel' && field.value.trim()) {
      const telRegex = /^[0-9\s\.\-\+\(\)]{10,}$/;
      if (!telRegex.test(field.value)) {
        isValid = false;
      }
    }

    // Uniquement appliquer les classes CSS
    if (!isValid) {
      field.classList.add('has-error');
      field.classList.remove('is-valid');
    } else {
      field.classList.remove('has-error');
      field.classList.add('is-valid');
    }

    return isValid;
  }

  clearFieldError(field) {
    field?.classList?.remove('has-error');
  }

  /**
   * Gestion de la soumission du formulaire
   */
  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) return;

    const formData = this.getFormData();
    const submitBtn = this.btnSubmit;
    submitBtn?.classList.add('is-loading');
    submitBtn?.setAttribute('disabled', '');

    try {
      // Retry automatique en cas d'échec
      await this.retry(() => this.submitFormData(formData), 3, 1000);
      
      this.showSuccessMessage();
      
      // Nettoyer localStorage après succès
      localStorage.removeItem('modalDevisProgress');
      
      // Émettre événement custom
      this.fireCustomEvent('submitted', { data: formData });
    } catch (error) {
      console.error('❌ Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      submitBtn?.classList.remove('is-loading');
      submitBtn?.removeAttribute('disabled');
    }
  }

  validateForm() {
    let isFormValid = true;

    const textInputs = this.form?.querySelectorAll('.form-input[required], .form-textarea[required]');
    textInputs?.forEach(input => {
      if (!this.validateField(input)) isFormValid = false;
    });

    // Afficher/masquer l'alerte globale
    this.toggleGlobalAlert(!isFormValid);

    return isFormValid;
  }

  /**
   * Sanitiser les données avant envoi
   */
  sanitizeValue(str) {
    if (!str) return '';
    return String(str).trim().replace(/[<>"']/g, '');
  }

  getFormData() {
    const formData = new FormData(this.form);
    return {
      nom: this.sanitizeValue(formData.get('nom')),
      prenom: this.sanitizeValue(formData.get('prenom')),
      telephone: this.sanitizeValue(formData.get('telephone')),
      email: this.sanitizeValue(formData.get('email')),
      adresse: this.sanitizeValue(formData.get('adresse')) || '',
      puissance: this.sanitizeValue(formData.get('puissance')),
      description: this.sanitizeValue(formData.get('description'))
    };
  }

  /**
   * Retry automatique en cas d'échec réseau
   */
  async retry(fn, attempts = 3, delay = 1000) {
    let lastError;
    for (let i = 0; i < attempts; i++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;
        if (i < attempts - 1) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    throw lastError;
  }

  /**
   * Envoyer les données au backend
   */
  async submitFormData(data) {
    // Simulation d'envoi avec délai
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simuler un succès aléatoire (80% de succès)
        if (Math.random() > 0.2) {
          console.log('✅ Formulaire envoyé avec succès:', data);
          resolve();
        } else {
          reject(new Error('Erreur réseau simulée'));
        }
      }, 1500);
    });

    /* Production:
    const response = await fetch('/api/devis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Erreur serveur');
    }
    
    return response.json();
    */
  }

  showSuccessMessage() {
    this.form?.classList.add('is-submitted');
    this.formSuccess?.removeAttribute('hidden');
    setTimeout(() => this.close(), 5000);
  }

  resetForm() {
    this.form?.reset();
    this.form?.classList.remove('is-submitted');
    this.formSuccess?.setAttribute('hidden', '');
    this.toggleGlobalAlert(false);
    this.goToStep(1);

    const inputs = this.form?.querySelectorAll('.form-input, .form-textarea');
    inputs?.forEach(input => input.classList.remove('has-error', 'is-valid'));
  }

  /**
   * LocalStorage - Sauvegarder la progression
   */
  saveProgressToLocalStorage() {
    const data = {
      currentStep: this.currentStep,
      nom: this.form?.elements['nom']?.value || '',
      prenom: this.form?.elements['prenom']?.value || '',
      email: this.form?.elements['email']?.value || '',
      telephone: this.form?.elements['telephone']?.value || '',
      adresse: this.form?.elements['adresse']?.value || '',
      description: this.form?.elements['description']?.value || '',
      puissance: this.form?.querySelector('input[name="puissance"]:checked')?.value || ''
    };

    localStorage.setItem('modalDevisProgress', JSON.stringify(data));
  }

  /**
   * LocalStorage - Charger la progression
   */
  loadProgressFromLocalStorage() {
    const saved = localStorage.getItem('modalDevisProgress');
    if (!saved) return;

    try {
      const data = JSON.parse(saved);

      // Restaurer les champs texte
      ['nom', 'prenom', 'email', 'telephone', 'adresse', 'description'].forEach(field => {
        if (data[field] && this.form?.elements[field]) {
          this.form.elements[field].value = data[field];
        }
      });

      // Restaurer le radio button
      if (data.puissance) {
        const radio = this.form?.querySelector(`input[name="puissance"][value="${data.puissance}"]`);
        if (radio) radio.checked = true;
      }

      // Restaurer l'étape
      if (data.currentStep) {
        this.goToStep(parseInt(data.currentStep));
      }
    } catch (error) {
      console.error('Erreur lors du chargement de la progression:', error);
    }
  }

  /**
   * Émettre des événements custom
   */
  fireCustomEvent(name, detail) {
    const event = new CustomEvent(`devis:${name}`, {
      detail,
      bubbles: true,
      cancelable: true
    });
    this.modal?.dispatchEvent(event);
  }

  /**
   * Cleanup complet (destroy)
   */
  destroy() {
    // Retirer tous les event listeners en clonant les éléments
    [this.closeBtn, this.btnNext, this.btnPrev, this.btnSubmit].forEach(el => {
      if (el) el.replaceWith(el.cloneNode(true));
    });

    // Nettoyer les références
    this.modal = null;
    this.form = null;
    this.openButtons = null;
    ModalDevis.instance = null;
  }
}

// Auto-initialisation intelligente
const initModal = () => {
  const modalExists = !!document.querySelector('#modal-devis');
  const formExists = !!document.querySelector('#form-devis');

  if (modalExists && formExists && !window.modalDevis) {
    window.modalDevis = new ModalDevis();
    console.log('✅ ModalDevis initialisé');
  } else if (!modalExists || !formExists) {
    setTimeout(initModal, 100);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModal);
} else {
  initModal();
}

export default ModalDevis;
