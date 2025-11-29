// Composant ContactForm - Gestion du formulaire de contact
export default class ContactForm {
  constructor() {
    this.form = document.querySelector('#contact-form');
    this.inputs = this.form ? this.form.querySelectorAll('input, select, textarea') : [];
    this.submitButton = this.form ? this.form.querySelector('button[type="submit"]') : null;
    this.init();
  }

  init() {
    if (!this.form) return;
    
    console.log('ContactForm component initialized');
    this.addValidation();
    this.addSubmitHandler();
  }

  addValidation() {
    this.inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });
      
      input.addEventListener('input', () => {
        // Retirer la classe d'erreur au fur et à mesure de la saisie
        if (input.classList.contains('error')) {
          input.classList.remove('error');
          input.style.borderColor = '';
        }
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    if (field.hasAttribute('required') && !value) {
      isValid = false;
    }

    if (field.type === 'email' && value && !this.isValidEmail(value)) {
      isValid = false;
    }

    if (!isValid) {
      field.classList.add('error');
      field.style.borderColor = '#ef4444';
    } else {
      field.classList.remove('error');
      field.style.borderColor = '#10b981';
    }

    return isValid;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  addSubmitHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validation de tous les champs
      let allValid = true;
      this.inputs.forEach(input => {
        if (!this.validateField(input)) {
          allValid = false;
        }
      });

      if (allValid) {
        console.log('✅ Formulaire valide - Envoi en cours...');
        this.simulateSubmit();
      } else {
        console.log('❌ Formulaire invalide');
      }
    });
  }

  simulateSubmit() {
    const originalText = this.submitButton.innerHTML;
    this.submitButton.innerHTML = 'Envoi en cours...';
    this.submitButton.disabled = true;

    setTimeout(() => {
      this.submitButton.innerHTML = '✓ Message envoyé !';
      this.submitButton.style.backgroundColor = '#10b981';
      
      setTimeout(() => {
        this.submitButton.innerHTML = originalText;
        this.submitButton.disabled = false;
        this.submitButton.style.backgroundColor = '';
        this.form.reset();
      }, 3000);
    }, 2000);
  }
}

// Initialisation automatique selon pattern des autres composants
export function initContactForm() {
    return new ContactForm();
}