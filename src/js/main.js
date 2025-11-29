/**
 * Point d'entrée principal JavaScript ELISUN
 * Initialisation complète selon conventions personnelles identifiées
 */

// Import des styles CSS avec Tailwind
import '../css/main.css';

// Import des nouveaux composants modulaires selon conventions
import { initSwipers } from './components/ui-swiper-config.js';
import { initFAQAccordions } from './components/page-faq-accordeon.js';
import { initContactForm } from './components/ui-form-contact.js';
import { initFeaturesNav } from './components/landing-caracteristiques-nav.js';
import { initTriggerBlock } from './components/page-materiel-trigger-block.js';
import { initSpecsToggle } from './components/page-materiel-specs-toggle.js';
import { initOnduleurSlider } from './components/page-materiel-onduleur-slider.js';

// Import des composants existants
import Hero from './components/landing-hero.js';
import Benefits from './components/landing-benefices.js';
import CustomerJourney from './components/page-installation-parcours.js';
// import IndexCustomerJourney from './components/index-customer-journey.js'; // SUPPRIMÉ - section parcours-client-exemple retirée
import Services from './components/landing-services.js';
import Testimonials from './components/landing-temoignages.js';
import Gallery from './components/landing-galerie.js';
import SavingsWidget from './components/landing-widget-economies.js';
import AddressForm from './components/ui-form-adresse.js';
import FloatingCards from './components/landing-cartes-flottantes.js';
import HeroBackgroundRotation from './components/landing-hero-background.js';
// ModalDevis s'auto-initialise via son propre écouteur d'événement 'includes:loaded'
import './components/ui-modal-devis.js';

// Import des animations si disponibles
try {
  import('./animations/scroll.js');
  import('./animations/transitions.js');
  import('./animations/interactions.js');
} catch (e) {
  console.log('Modules animations optionnels non trouvés');
}

// Import des utilitaires si disponibles
try {
  import('./utils/analytics.js');
  import('./utils/tracking.js');
} catch (e) {
  console.log('Modules utilitaires optionnels non trouvés');
}

// Gestion globale application ELISUN
class ElisunApp {
    constructor() {
        this.components = new Map();
        this.isInitialized = false;
        this.init();
    }

    init() {
        // Attendre que TOUT soit chargé (DOM + CSS + fonts + images)
        // pour éviter le FOUC (Flash of Unstyled Content)
        if (document.readyState === 'complete') {
            // Tout est déjà chargé
            this.initializeApp();
        } else {
            // Attendre l'événement 'load' qui se déclenche après CSS/fonts/images
            window.addEventListener('load', () => this.initializeApp());
        }
    }

    async initializeApp() {
        console.log('🌞 ELISUN - Initialisation application...');

        try {
            // Composants critiques selon conventions personnelles
            await this.initCriticalComponents();

            // Configuration utilitaires
            this.setupUtilities();

            // Finalisation
            this.isInitialized = true;

            // Afficher le contenu de la page (enlever l'opacité)
            document.body.classList.add('dom-loaded');

            console.log('✅ ELISUN App initialisée avec succès');

            // Event custom pour scripts externes
            document.dispatchEvent(new CustomEvent('elisun:ready'));

        } catch (error) {
            console.error('❌ Erreur initialisation ELISUN:', error);
            // En cas d'erreur, afficher quand même la page
            document.body.classList.add('dom-loaded');
        }
    }

    async initCriticalComponents() {
        // 1. Swiper carousels (témoignages, galerie) selon conventions
        const swiperManager = initSwipers();
        this.components.set('swipers', swiperManager);

        // 2. FAQ Accordéons selon conventions
        const faqManager = initFAQAccordions();
        this.components.set('faq', faqManager);

        // 3. Formulaire contact selon conventions
        const contactManager = initContactForm();
        this.components.set('contact', contactManager);

        // 4. Navigation sticky features
        initFeaturesNav();

        // 5. Trigger block particulier/professionnel
        initTriggerBlock();

        // 6. Toggle caractéristiques techniques
        initSpecsToggle();

        // 7. Slider onduleurs (HICONICS / SWATTEN)
        initOnduleurSlider();

        // 8. Modal devis - S'initialise automatiquement après le chargement des includes HTML
        // (voir modal-devis.js - écoute l'événement 'includes:loaded')

        // 4. Composants existants
        this.components.set('hero', new Hero());
        this.components.set('benefits', new Benefits());
        this.components.set('journey', new CustomerJourney());
        this.components.set('services', new Services());
        this.components.set('testimonials', new Testimonials());
        this.components.set('gallery', new Gallery());
        this.components.set('savingsWidget', new SavingsWidget());
        this.components.set('addressForm', new AddressForm());
        this.components.set('floatingCards', new FloatingCards());
        this.components.set('heroBackgroundRotation', new HeroBackgroundRotation());
        
        // 5. Navigation mobile et dropdowns
        this.initNavigation();
        
        console.log(`📦 ${this.components.size} composants initialisés`);
    }

    setupUtilities() {
        // Smooth scroll pour liens ancrage
        this.initSmoothAnchors();
        
        // Gestion responsive
        this.handleResize();
        
        // Accessibilité clavier
        this.initKeyboardNavigation();
    }

    initNavigation() {
        // Navbar fixe avec scroll selon conventions
        const header = document.getElementById('elisun-header');
        if (header) {
            let lastScrollY = window.scrollY;
            
            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 100) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }
                
                lastScrollY = currentScrollY;
            });
        }
    }

    initSmoothAnchors() {
        // Smooth scroll liens ancrage selon conventions
        const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = 80;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initKeyboardNavigation() {
        // Navigation clavier selon conventions accessibilité
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllDropdowns();
            }
        });
    }

    closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.navbar__item--active');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('navbar__item--active');
        });
    }

    handleResize() {
        // Gestion responsive selon conventions
        let resizeTimeout;
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const swiperManager = this.components.get('swipers');
                if (swiperManager) {
                    swiperManager.handleResize();
                }
            }, 250);
        });
    }

    // Méthodes publiques
    getComponent(name) {
        return this.components.get(name);
    }

    isReady() {
        return this.isInitialized;
    }
}

// Initialisation globale ELISUN
const elisunApp = new ElisunApp();

// Export global selon conventions
window.ELISUN = {
    app: elisunApp,
    version: '1.0.0'
};

console.log('🌞 ELISUN JavaScript chargé selon conventions personnelles');