import '../css/main.css';

// ✅ NOUVEAU : Import intl-tel-input
import 'intl-tel-input/build/css/intlTelInput.css';

// Cookie Consent - CSS officiel + personnalisation
import 'vanilla-cookieconsent/dist/cookieconsent.css';

// Composants modulaires
import { initFeaturesNav } from './components/landing-caracteristiques-nav.js';
import { initTriggerBlock } from './components/page-materiel-trigger-block.js';
import { initSpecsToggle } from './components/page-materiel-specs-toggle.js';
import { initOnduleurSlider } from './components/page-materiel-onduleur-slider.js';

// Composants de page
import Hero from './components/landing-hero.js';
import Benefits from './components/landing-benefices.js';
import SavingsWidget from './components/landing-widget-economies.js';
import HeroBackgroundRotation from './components/landing-hero-background.js';

// Modal s'auto-initialise
import './components/ui-modal-devis.js';

// Navbar mobile s'auto-initialise
import './components/ui-navbar-mobile.js';

// CTA progressif s'auto-initialise
import './components/landing-cta-progressive.js';

// Cookie Consent s'auto-initialise
import './components/ui-cookie-consent.js';

class ElisunApp {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'complete') {
            this.initializeApp();
        } else {
            window.addEventListener('load', () => this.initializeApp());
        }
    }

    async initializeApp() {
        console.log('🌞 ELISUN - Initialisation...');

        try {
            await this.initCriticalComponents();
            this.initNavigation();
            
            document.body.classList.add('dom-loaded');
            console.log('✅ ELISUN initialisée');
            
        } catch (error) {
            console.error('❌ Erreur initialisation:', error);
            document.body.classList.add('dom-loaded');
        }
    }

    async initCriticalComponents() {
        // Fonctions modulaires
        initFeaturesNav();
        initTriggerBlock();
        initSpecsToggle();
        initOnduleurSlider();
        
        // Composants de page
        new Hero();
        new Benefits();
        new SavingsWidget();
        new HeroBackgroundRotation();
    }

    initNavigation() {
        const header = document.getElementById('elisun-header');
        if (!header) return;
        
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

// Initialisation
const elisunApp = new ElisunApp();

window.ELISUN = {
    app: elisunApp,
    version: '1.0.0'
};

console.log('🌞 ELISUN JavaScript chargé');
