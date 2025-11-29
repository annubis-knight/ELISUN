// Composant Hero - Gestion de la section d'accueil
export default class Hero {
  constructor() {
    this.element = document.querySelector('#home');
    this.stats = document.querySelectorAll('.hero-stats .stat-item');
    this.ctaButtons = document.querySelectorAll('.hero-cta button');
    this.init();
  }

  init() {
    if (!this.element) return;
    
    console.log('Hero component initialized');
    this.addInteractions();
  }

  addInteractions() {
    // Animation des stats au hover
    this.stats.forEach(stat => {
      stat.addEventListener('mouseenter', () => {
        stat.style.transform = 'scale(1.05)';
      });
      
      stat.addEventListener('mouseleave', () => {
        stat.style.transform = 'scale(1)';
      });
    });

    // Effet sur les boutons CTA
    this.ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.textContent.includes('Simulation')) {
          console.log('🧮 Ouverture simulateur');
        } else if (e.target.textContent.includes('réalisations')) {
          document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}