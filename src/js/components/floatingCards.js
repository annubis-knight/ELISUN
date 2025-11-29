/**
 * Gestion du positionnement des floating cards
 * Calcule et applique la translation pour que les cards touchent le bord droit de la fenêtre
 */

class FloatingCards {
  constructor() {
    this.floatingCards = document.querySelector('.floating-cards');
    this.init();
  }

  init() {
    if (!this.floatingCards) return;

    // Calculer et appliquer le positionnement initial
    this.updatePosition();

    // Recalculer lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    // Obtenir la position actuelle des cards
    const cardsRect = this.floatingCards.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    // Calculer simplement la distance entre le bord droit des cards et le bord de la fenêtre
    const distanceToEdge = windowWidth - cardsRect.right;

    // Appliquer uniquement cette distance
    this.floatingCards.style.transform = `translateX(${distanceToEdge}px)`;
  }
}

// Initialiser les floating cards
document.addEventListener('DOMContentLoaded', () => {
  new FloatingCards();
});

export default FloatingCards;