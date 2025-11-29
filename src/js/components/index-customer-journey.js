/**
 * Gestionnaire d'interactions pour les onglets du parcours client INDEX
 * Système de tabs classique avec panneaux de contenu
 * Spécifiquement pour la section #parcours-client-exemple
 */

class IndexCustomerJourney {
    constructor() {
        // Protection contre l'initialisation multiple
        if (IndexCustomerJourney.instance) {
            return IndexCustomerJourney.instance;
        }

        // Sélection des éléments
        this.section = document.querySelector('#parcours-client-exemple');
        this.tabs = document.querySelectorAll('#parcours-client-exemple .journey-tab');
        this.panels = document.querySelectorAll('#parcours-client-exemple .journey-panel');

        this.activeClass = 'active';
        this.currentTab = null;

        // Marquer cette instance comme l'instance principale
        IndexCustomerJourney.instance = this;

        this.init();
    }

    init() {
        if (!this.section || this.tabs.length === 0) return;

        this.setupTabsListeners();
        this.setupInitialState();

        console.log('✅ Index Customer Journey initialized');
    }

    /**
     * Configuration des écouteurs d'événements sur les tabs
     */
    setupTabsListeners() {
        this.tabs.forEach((tab, index) => {
            // Supprimer les listeners existants
            const existingHandler = tab._indexTabHandler;
            if (existingHandler) {
                tab.removeEventListener('click', existingHandler);
            }

            // Créer et stocker le nouveau handler
            const newHandler = (e) => this.handleTabClick(e);
            tab._indexTabHandler = newHandler;
            tab.addEventListener('click', newHandler);
        });
    }

    /**
     * Gestion des clics sur les tabs
     */
    handleTabClick(e) {
        e.preventDefault();
        const clickedTab = e.currentTarget;
        this.activateTab(clickedTab);
    }

    /**
     * Activation d'un tab et de son panel associé
     */
    activateTab(targetTab) {
        const targetPanelId = targetTab.dataset.tab;

        // Désactiver tous les tabs et panels
        this.tabs.forEach(tab => tab.classList.remove(this.activeClass));
        this.panels.forEach(panel => panel.classList.remove(this.activeClass));

        // Activer le tab cliqué
        targetTab.classList.add(this.activeClass);
        this.currentTab = targetTab;

        // Activer le panel correspondant
        const targetPanel = document.getElementById(`panel-${targetPanelId}`);
        if (targetPanel) {
            targetPanel.classList.add(this.activeClass);
            this.animatePanel(targetPanel);
        }
    }

    /**
     * Animation d'apparition du contenu des panels
     */
    animatePanel(panel) {
        if (!panel) return;

        // Animation de fade-in avec translation
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(20px)';

        // Force reflow
        panel.offsetHeight;

        // Transition smooth
        panel.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        panel.style.opacity = '1';
        panel.style.transform = 'translateY(0)';

        // Réinitialiser la transition après l'animation
        setTimeout(() => {
            panel.style.transition = '';
        }, 400);
    }

    /**
     * Configuration de l'état initial (premier tab actif)
     */
    setupInitialState() {
        // Vérifier si un tab est déjà actif
        const activeTab = this.section.querySelector('.journey-tab.active');
        if (!activeTab && this.tabs.length > 0) {
            // Activer le premier tab par défaut
            this.activateTab(this.tabs[0]);
        } else if (activeTab) {
            this.currentTab = activeTab;
            // S'assurer que le panel correspondant est aussi actif
            const tabId = activeTab.dataset.tab;
            const panel = document.getElementById(`panel-${tabId}`);
            if (panel && !panel.classList.contains(this.activeClass)) {
                panel.classList.add(this.activeClass);
            }
        }
    }

    /**
     * Méthodes utilitaires publiques
     */

    // Activer un tab par son index
    activateTabByIndex(index) {
        if (this.tabs[index]) {
            this.activateTab(this.tabs[index]);
        }
    }

    // Navigation programmée (suivant/précédent)
    nextTab() {
        const currentIndex = Array.from(this.tabs).indexOf(this.currentTab);
        const nextIndex = (currentIndex + 1) % this.tabs.length;
        this.activateTabByIndex(nextIndex);
    }

    prevTab() {
        const currentIndex = Array.from(this.tabs).indexOf(this.currentTab);
        const prevIndex = currentIndex === 0 ? this.tabs.length - 1 : currentIndex - 1;
        this.activateTabByIndex(prevIndex);
    }
}

// Auto-initialisation pour index.html uniquement
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#parcours-client-exemple')) {
        if (!window.indexCustomerJourney) {
            window.indexCustomerJourney = new IndexCustomerJourney();
        }
    }
});

export default IndexCustomerJourney;