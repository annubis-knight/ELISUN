/**
 * NAVBAR MOBILE - Gestion du menu hamburger
 */

class NavbarMobile {
  constructor() {
    this.hamburger = null;
    this.mobileMenu = null;
    this.closeBtn = null;
    this.init();
  }

  /**
   * Initialisation avec polling (réessaye jusqu'à ce que les éléments existent)
   */
  init() {
    const hamburger = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-close');

    // Si éléments pas encore injectés, réessayer dans 100ms
    if (!hamburger || !mobileMenu || !closeBtn) {
      setTimeout(() => this.init(), 100);
      return;
    }

    this.hamburger = hamburger;
    this.mobileMenu = mobileMenu;
    this.closeBtn = closeBtn;

    this.setupEventListeners();
    console.log('✅ NavbarMobile initialisé');
  }

  /**
   * Configuration des event listeners
   */
  setupEventListeners() {
    // Ouvrir menu mobile
    this.hamburger.addEventListener('click', () => this.open());

    // Fermer menu mobile (bouton croix)
    this.closeBtn.addEventListener('click', () => this.close());

    // Fermer menu mobile au clic sur lien
    this.mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.close());
    });
  }

  /**
   * Ouvrir le menu mobile
   */
  open() {
    this.mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Fermer le menu mobile
   */
  close() {
    this.mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

// Auto-initialisation
new NavbarMobile();

export default NavbarMobile;
