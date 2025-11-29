/**
 * Gestionnaire d'interactions pour les journey-items ELISUN
 * Système d'accordion cliquable avec contenu dynamique
 * Permet de basculer entre les différentes étapes du processus installation
 */

class CustomerJourney {
    constructor() {
        // Protection contre l'initialisation multiple
        if (CustomerJourney.instance) {
            return CustomerJourney.instance;
        }

        // Sélection des éléments
        this.section = document.querySelector('#parcours-client-elisun');
        this.journeyItems = document.querySelectorAll('.journey-item');
        this.journeyContents = document.querySelectorAll('.journey-content');
        this.showcaseGroups = document.querySelectorAll('.journey-showcase-group');

        this.activeClass = 'active';
        this.isToggling = false;

        // Marquer cette instance comme l'instance principale
        CustomerJourney.instance = this;

        this.init();
    }

    init() {
        if (!this.section || this.journeyItems.length === 0) return;

        this.setupJourneyItemsListeners();
        this.setupInitialState();
    }

    /**
     * Configuration des écouteurs d'événements sur les journey-items
     */
    setupJourneyItemsListeners() {
        this.journeyItems.forEach((item, index) => {
            // Supprimer les listeners existants
            const existingHandler = item._journeyClickHandler;
            if (existingHandler) {
                item.removeEventListener('click', existingHandler);
            }

            // Créer et stocker le nouveau handler
            const newHandler = (e) => this.handleJourneyItemClick(e);
            item._journeyClickHandler = newHandler;
            item.addEventListener('click', newHandler);
        });
    }

    /**
     * Gestion des clics sur les journey-items
     */
    handleJourneyItemClick(e) {
        e.preventDefault();
        e.stopPropagation();

        // Éviter le clic si c'est sur le journey-tab à l'intérieur
        if (e.target.closest('.journey-tab')) return;

        // Débounce pour éviter les double clics
        if (this.isToggling) return;

        this.isToggling = true;
        this.toggleJourneyItem(e.currentTarget);

        setTimeout(() => {
            this.isToggling = false;
        }, 500);
    }

    /**
     * Basculer l'état d'un journey-item et de son contenu associé
     */
    toggleJourneyItem(targetItem) {
        const journeyTab = targetItem.querySelector('.journey-tab');
        if (!journeyTab) return;

        const tabId = journeyTab.dataset.tab;
        const targetContent = document.querySelector(`[data-content="${tabId}"]`);
        if (!targetContent) return;

        const isCurrentlyActive = targetItem.classList.contains(this.activeClass);

        if (isCurrentlyActive) {
            // Désactiver si déjà actif
            targetItem.classList.remove(this.activeClass);
            targetContent.classList.remove(this.activeClass);
        } else {
            // Désactiver tous les autres journey-items et leurs contenus
            this.journeyItems.forEach(item => item.classList.remove(this.activeClass));
            this.journeyContents.forEach(content => content.classList.remove(this.activeClass));
            this.showcaseGroups.forEach(group => group.classList.remove(this.activeClass));

            // Activer le journey-item cliqué et son contenu
            targetItem.classList.add(this.activeClass);
            targetContent.classList.add(this.activeClass);

            // Activer le groupe showcase correspondant
            const targetShowcaseGroup = document.querySelector(`[data-group="${tabId}"]`);
            if (targetShowcaseGroup) {
                targetShowcaseGroup.classList.add(this.activeClass);
            }
        }
    }

    /**
     * Configuration de l'état initial (premier journey-item actif)
     */
    setupInitialState() {
        const activeJourneyItem = document.querySelector('.journey-item.active');
        if (!activeJourneyItem && this.journeyItems.length > 0) {
            // Activer le premier journey-item par défaut
            this.journeyItems[0].classList.add(this.activeClass);
            const firstJourneyTab = this.journeyItems[0].querySelector('.journey-tab');
            if (firstJourneyTab) {
                const tabId = firstJourneyTab.dataset.tab;
                const firstContent = document.querySelector(`[data-content="${tabId}"]`);
                const firstShowcaseGroup = document.querySelector(`[data-group="${tabId}"]`);

                if (firstContent) {
                    firstContent.classList.add(this.activeClass);
                }
                if (firstShowcaseGroup) {
                    firstShowcaseGroup.classList.add(this.activeClass);
                }
            }
        }
    }
}

// Auto-initialisation avec protection contre la double initialisation
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#parcours-client-elisun')) {
        if (!window.customerJourney) {
            window.customerJourney = new CustomerJourney();
        }
    }
});

export default CustomerJourney;