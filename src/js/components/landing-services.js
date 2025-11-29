// Composant Services - Gestion de la section services
export default class Services {
  constructor() {
    this.element = document.querySelector('#services');
    this.serviceCards = document.querySelectorAll('.service-card');
    this.simulationButton = document.querySelector('#services button');
    this.init();
  }

  init() {
    if (!this.element) return;
    
    console.log('Services component initialized');
    this.addCardInteractions();
    this.addButtonInteraction();
  }

  addCardInteractions() {
    this.serviceCards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        // Animation stagger des icônes
        const icon = card.querySelector('.service-icon');
        if (icon) {
          icon.style.transform = 'rotateY(15deg)';
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        const icon = card.querySelector('.service-icon');
        if (icon) {
          icon.style.transform = 'rotateY(0deg)';
        }
      });
    });
  }

  addButtonInteraction() {
    if (this.simulationButton) {
      this.simulationButton.addEventListener('click', () => {
        console.log('🧮 Redirection vers simulateur');
        // Sera développé en Phase 5
      });
    }
  }
}