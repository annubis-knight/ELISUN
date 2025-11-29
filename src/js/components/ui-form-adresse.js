/**
 * Gestion du formulaire d'adresse pour devis
 */

class AddressForm {
  constructor() {
    this.init();
  }

  init() {
    // Sélection des éléments
    this.addressInput = document.getElementById('address-input');
    this.devisBtn = document.getElementById('devis-btn');

    if (this.addressInput && this.devisBtn) {
      this.bindEvents();
    }
  }

  bindEvents() {
    // Validation en temps réel de l'adresse
    this.addressInput.addEventListener('input', () => {
      this.validateAddress();
    });

    // Gestion du clic sur le bouton devis
    this.devisBtn.addEventListener('click', () => {
      this.handleDevisRequest();
    });

    // Validation à la perte de focus
    this.addressInput.addEventListener('blur', () => {
      this.validateAddress();
    });

    // Soumission avec Entrée
    this.addressInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleDevisRequest();
      }
    });
  }

  validateAddress() {
    const address = this.addressInput.value.trim();
    const isValid = address.length > 10; // Validation basique

    // Mise à jour visuelle
    if (address.length > 0) {
      if (isValid) {
        this.addressInput.style.borderColor = 'var(--primary-color)';
        this.addressInput.classList.remove('error');
      } else {
        this.addressInput.style.borderColor = '#ef4444';
        this.addressInput.classList.add('error');
      }
    } else {
      this.addressInput.style.borderColor = 'var(--primary-color)';
      this.addressInput.classList.remove('error');
    }

    return isValid;
  }

  handleDevisRequest() {
    const address = this.addressInput.value.trim();

    if (!address) {
      // Focuser sur l'input si vide
      this.addressInput.focus();
      this.showMessage('Veuillez saisir votre adresse complète', 'error');
      return;
    }

    if (!this.validateAddress()) {
      this.showMessage('Veuillez saisir une adresse complète et valide', 'error');
      return;
    }

    // Simulation d'envoi de devis
    this.showMessage('Demande de devis envoyée ! Nous vous répondons sous 24h.', 'success');
    
    // Ici on pourrait intégrer avec un service externe
    console.log('Demande de devis pour:', address);

    // Optionnel : rediriger vers une page de confirmation ou ouvrir un modal
    // window.location.href = '/merci-devis';
  }

  showMessage(text, type = 'info') {
    // Création d'un message temporaire
    const message = document.createElement('div');
    message.className = `address-message ${type}`;
    message.textContent = text;
    
    // Style du message
    message.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? 'var(--primary-color)' : '#ef4444'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      font-weight: 500;
      max-width: 300px;
      animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(message);

    // Suppression automatique après 4 secondes
    setTimeout(() => {
      message.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => {
        if (message.parentNode) {
          document.body.removeChild(message);
        }
      }, 300);
    }, 4000);

    // Ajouter les animations CSS si elles n'existent pas
    if (!document.querySelector('#address-form-animations')) {
      const style = document.createElement('style');
      style.id = 'address-form-animations';
      style.textContent = `
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
}

// Initialisation automatique quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  new AddressForm();
});

export default AddressForm;