// Composant Testimonials - Gestion des témoignages clients
export default class Testimonials {
  constructor() {
    this.element = document.querySelector('.testimonials');
    this.carousel = document.querySelector('.testimonials-carousel');
    this.cards = document.querySelectorAll('.testimonial-card');
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.init();
  }

  init() {
    if (!this.element) return;
    
    console.log('Testimonials component initialized');
    this.addHoverEffects();
    this.startAutoPlay();
  }

  addHoverEffects() {
    this.cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      });
    });
  }

  startAutoPlay() {
    // Animation subtle des avatars
    setInterval(() => {
      const avatars = document.querySelectorAll('.testimonial-card .avatar');
      avatars.forEach((avatar, index) => {
        setTimeout(() => {
          avatar.style.transform = 'scale(1.1)';
          setTimeout(() => {
            avatar.style.transform = 'scale(1)';
          }, 200);
        }, index * 100);
      });
    }, 8000);
  }
}