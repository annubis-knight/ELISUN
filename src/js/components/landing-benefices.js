/**
 * Composant Section Bénéfices - Interactions et animations
 * Fonctionnalités : Scroll animations, bento-grid reveal, parallax sticky
 */

class Benefits {
    constructor() {
        this.sections = document.querySelectorAll('.benefits-section');
        this.observers = []; // Stockage des observers pour cleanup éventuel
        this.init();
    }

    // ═══════════════════════════════════════════════════════════════
    // UTILITAIRES
    // ═══════════════════════════════════════════════════════════════

    /**
     * Factory pour créer des IntersectionObserver
     * @param {Function} callback - Fonction callback
     * @param {Object} options - Options de l'observer
     */
    createObserver(callback, options = {}) {
        const defaults = {
            threshold: options.threshold || 0.5,
            rootMargin: options.rootMargin || '0px'
        };
        const observer = new IntersectionObserver(callback, { ...defaults, ...options });
        this.observers.push(observer);
        return observer;
    }

    /**
     * Mise à jour état classe CSS
     * @param {Element} element - Élément DOM
     * @param {String} className - Nom de la classe
     * @param {Boolean} shouldAdd - Ajouter (true) ou retirer (false)
     */
    toggleClass(element, className, shouldAdd) {
        if (!element) return;
        element.classList.toggle(className, shouldAdd);
    }

    // ═══════════════════════════════════════════════════════════════
    // INITIALISATION
    // ═══════════════════════════════════════════════════════════════

    init() {
        if (this.sections.length === 0) return;

        this.setupBentoGridReveal();
        this.setupGalleryParallax();

        console.log('✅ Benefits section initialized');
    }

    // ═══════════════════════════════════════════════════════════════
    // BENTO-GRID REVEAL (Affichage progressif au scroll)
    // ═══════════════════════════════════════════════════════════════

    /**
     * Reveal progressif des bento-grids au scroll avec hystérésis anti-flickering
     * Seuils: apparition 0.5 / disparition 0.8
     */
    setupBentoGridReveal() {
        const benefitContents = document.querySelectorAll('.benefit-content');

        const bentoObserver = this.createObserver((entries) => {
            entries.forEach(entry => {
                const isVisible = entry.target.classList.contains('visible');
                const ratio = entry.intersectionRatio;
                const benefitBlock = entry.target.closest('.benefit-block');
                const tabButton = benefitBlock?.querySelector('.tab-button');
                const stepNumber = benefitBlock?.querySelector('.step-number')?.textContent.trim();

                if (!isVisible && ratio >= 0.5) {
                    // FADE-IN: Apparition
                    this.toggleClass(entry.target, 'visible', true);
                    this.toggleClass(tabButton, 'tab-button-inactive', false);
                    this.activateBentoGrid(entry.target, stepNumber);
                }
                else if (isVisible && ratio < 0.8) {
                    // FADE-OUT: Disparition (seuil différent pour hystérésis)
                    this.toggleClass(entry.target, 'visible', false);
                    this.toggleClass(tabButton, 'tab-button-inactive', true);
                }
            });
        }, { threshold: [0, 0.5, 0.8, 1], rootMargin: '0px' });

        benefitContents.forEach(content => bentoObserver.observe(content));

        // Initialiser le premier benefit et bento-grid au chargement
        this.initializeFirstBentoGrid();
    }

    /**
     * Activer le bento-grid correspondant au step
     * @param {Element} target - Élément benefit-content
     * @param {String} stepNumber - Numéro de l'étape (ex: "01")
     */
    activateBentoGrid(target, stepNumber) {
        if (!stepNumber) return;

        const section = target.closest('.benefits-section');
        const bentoGrids = section?.querySelectorAll('.installation-bento-grid');

        if (bentoGrids && bentoGrids.length > 0) {
            bentoGrids.forEach(grid => grid.classList.remove('active'));
            const targetGrid = section?.querySelector(`.installation-bento-grid[data-step="${stepNumber}"]`);
            if (targetGrid) targetGrid.classList.add('active');
        }
    }

    /**
     * Initialiser le premier benefit-content et bento-grid au chargement
     */
    initializeFirstBentoGrid() {
        this.sections.forEach(section => {
            const bentoGrids = section.querySelectorAll('.installation-bento-grid');

            if (bentoGrids && bentoGrids.length > 0) {
                const firstBenefitContent = section.querySelector('.benefit-content');
                const firstBenefitBlock = firstBenefitContent?.closest('.benefit-block');
                const firstTabButton = firstBenefitBlock?.querySelector('.tab-button');

                this.toggleClass(firstBenefitContent, 'visible', true);
                this.toggleClass(firstTabButton, 'tab-button-inactive', false);

                bentoGrids.forEach(grid => grid.classList.remove('active'));
                const firstGrid = section.querySelector('.installation-bento-grid[data-step="01"]');
                if (firstGrid) firstGrid.classList.add('active');
            }
        });
    }

    // ═══════════════════════════════════════════════════════════════
    // PARALLAX STICKY (Gallery container qui suit le scroll)
    // ═══════════════════════════════════════════════════════════════

    /**
     * Effet sticky sur gallery-container (mode instant sans smoothing)
     */
    setupGalleryParallax() {
        this.sections.forEach(section => {
            const galleryContainer = section.querySelector(
                '.gallery-container, .single-image-container, .installation-bento-container'
            );

            if (!galleryContainer) return;

            const config = {
                sticky_offset: 50 // Distance depuis le haut de la fenêtre
            };

            this.applyInstantSticky(section, galleryContainer, config);
        });
    }

    /**
     * Application sticky instantanée (sans smoothing LERP)
     * Actif uniquement sur desktop (>1024px)
     * @param {Element} section - Section parente
     * @param {Element} galleryContainer - Container à rendre sticky
     * @param {Object} config - Configuration {sticky_offset}
     */
    applyInstantSticky(section, galleryContainer, config) {
        const handleScroll = () => {
            // Vérifier si on est sur desktop (>1024px)
            if (window.innerWidth <= 1024) {
                // Reset le transform sur mobile/tablette
                galleryContainer.style.transform = 'translateY(0)';
                return;
            }

            const sectionRect = section.getBoundingClientRect();
            const galleryOffsetTop = galleryContainer.offsetTop;
            const galleryNaturalTop = sectionRect.top + galleryOffsetTop;

            // Vérifier si la section est visible
            if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
                if (galleryNaturalTop < config.sticky_offset) {
                    // Calculer le translate nécessaire pour maintenir le sticky
                    const neededTranslate = config.sticky_offset - galleryNaturalTop;
                    const maxTranslate = section.offsetHeight - galleryContainer.offsetHeight - galleryOffsetTop;
                    const finalTranslate = Math.max(0, Math.min(neededTranslate, maxTranslate));

                    galleryContainer.style.transform = `translateY(${finalTranslate}px)`;
                } else {
                    galleryContainer.style.transform = 'translateY(0)';
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Reset au resize si passage mobile/tablette
        window.addEventListener('resize', handleScroll, { passive: true });
    }

    // ═══════════════════════════════════════════════════════════════
    // CLEANUP (optionnel)
    // ═══════════════════════════════════════════════════════════════

    /**
     * Nettoyer tous les observers (utile si destruction du composant)
     */
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    new Benefits();
});

export default Benefits;
