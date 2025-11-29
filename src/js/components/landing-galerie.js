// Composant Gallery - Gestion de la galerie de réalisations
export default class Gallery {
  constructor() {
    this.element = document.querySelector('#gallery');
    this.galleryItems = document.querySelectorAll('.gallery-item');
    this.init();
  }

  init() {
    if (!this.element) return;
    
    console.log('Gallery component initialized');
    this.addHoverEffects();
  }

  addHoverEffects() {
    this.galleryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.03)';
        item.style.cursor = 'pointer';
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
      });

      item.addEventListener('click', () => {
        console.log('🎨 Ouverture lightbox galerie');
        // Lightbox sera développée en Phase 5
      });
    });
  }
}