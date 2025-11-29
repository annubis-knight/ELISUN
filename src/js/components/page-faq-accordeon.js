/**
 * Gestionnaire d'accordéons FAQ ELISUN
 * Gestion des questions fréquentes avec animations et accessibilité
 */

export class FAQAccordion {
    constructor() {
        this.accordions = [];
        this.init();
    }

    init() {
        // Initialiser après chargement du DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initAccordions());
        } else {
            this.initAccordions();
        }
    }

    initAccordions() {
        // Sélectionner tous les éléments FAQ
        const faqItems = document.querySelectorAll('[data-accordion-toggle]');
        
        faqItems.forEach((item, index) => {
            this.setupAccordionItem(item, index);
        });

        console.log(`${faqItems.length} accordéons FAQ initialisés`);
    }

    setupAccordionItem(item, index) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (!question || !answer || !icon) {
            console.warn('Structure accordéon incomplète pour l\'item:', item);
            return;
        }

        // Configuration initiale
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, padding 0.3s ease';
        
        // Accessibilité
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', answer.id);
        question.setAttribute('tabindex', '0');
        answer.setAttribute('aria-hidden', 'true');

        // Event listeners
        question.addEventListener('click', () => this.toggleAccordion(item, question, answer, icon));
        question.addEventListener('keydown', (e) => this.handleKeydown(e, item, question, answer, icon));

        // Stockage de la référence
        this.accordions.push({
            item,
            question,
            answer,
            icon,
            isOpen: false
        });
    }

    toggleAccordion(item, question, answer, icon) {
        const accordion = this.accordions.find(acc => acc.item === item);
        if (!accordion) return;

        if (accordion.isOpen) {
            this.closeAccordion(accordion);
        } else {
            // Fermer les autres accordéons (comportement accordéon exclusif)
            this.closeAllAccordions();
            this.openAccordion(accordion);
        }
    }

    openAccordion(accordion) {
        const { item, question, answer, icon } = accordion;
        
        // Animation d'ouverture
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.paddingTop = '1rem';
        answer.style.paddingBottom = '1rem';
        
        // Mise à jour des états
        item.classList.add('faq-item--active');
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
        
        // Accessibilité
        question.setAttribute('aria-expanded', 'true');
        answer.setAttribute('aria-hidden', 'false');
        
        accordion.isOpen = true;
        
        // Analytics ou tracking optionnel
        this.trackFAQOpen(item.dataset.accordionToggle);
    }

    closeAccordion(accordion) {
        const { item, question, answer, icon } = accordion;
        
        // Animation de fermeture
        answer.style.maxHeight = '0';
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';
        
        // Mise à jour des états
        item.classList.remove('faq-item--active');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
        
        // Accessibilité
        question.setAttribute('aria-expanded', 'false');
        answer.setAttribute('aria-hidden', 'true');
        
        accordion.isOpen = false;
    }

    closeAllAccordions() {
        this.accordions.forEach(accordion => {
            if (accordion.isOpen) {
                this.closeAccordion(accordion);
            }
        });
    }

    // Gestion clavier pour accessibilité
    handleKeydown(e, item, question, answer, icon) {
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.toggleAccordion(item, question, answer, icon);
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.focusNextAccordion(item);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.focusPreviousAccordion(item);
                break;
            case 'Home':
                e.preventDefault();
                this.focusFirstAccordion();
                break;
            case 'End':
                e.preventDefault();
                this.focusLastAccordion();
                break;
        }
    }

    focusNextAccordion(currentItem) {
        const currentIndex = this.accordions.findIndex(acc => acc.item === currentItem);
        const nextIndex = (currentIndex + 1) % this.accordions.length;
        this.accordions[nextIndex].question.focus();
    }

    focusPreviousAccordion(currentItem) {
        const currentIndex = this.accordions.findIndex(acc => acc.item === currentItem);
        const prevIndex = currentIndex === 0 ? this.accordions.length - 1 : currentIndex - 1;
        this.accordions[prevIndex].question.focus();
    }

    focusFirstAccordion() {
        if (this.accordions.length > 0) {
            this.accordions[0].question.focus();
        }
    }

    focusLastAccordion() {
        if (this.accordions.length > 0) {
            this.accordions[this.accordions.length - 1].question.focus();
        }
    }

    // Méthode pour ouvrir un accordéon spécifique (par ID)
    openAccordionById(accordionId) {
        const accordion = this.accordions.find(acc => 
            acc.item.dataset.accordionToggle === accordionId
        );
        
        if (accordion && !accordion.isOpen) {
            this.closeAllAccordions();
            this.openAccordion(accordion);
        }
    }

    // Tracking optionnel des interactions FAQ
    trackFAQOpen(faqId) {
        // Ici on pourrait envoyer des analytics
        console.log(`FAQ ouverte: ${faqId}`);
        
        // Exemple avec Google Analytics ou autre
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'faq_open', {
        //         'event_category': 'FAQ',
        //         'event_label': faqId
        //     });
        // }
    }

    // Méthode de recherche dans les FAQ
    searchFAQ(searchTerm) {
        if (!searchTerm) {
            // Afficher toutes les FAQ
            this.accordions.forEach(accordion => {
                accordion.item.style.display = 'block';
            });
            return;
        }

        const term = searchTerm.toLowerCase();
        let hasResults = false;

        this.accordions.forEach(accordion => {
            const questionText = accordion.question.textContent.toLowerCase();
            const answerText = accordion.answer.textContent.toLowerCase();
            
            if (questionText.includes(term) || answerText.includes(term)) {
                accordion.item.style.display = 'block';
                hasResults = true;
            } else {
                accordion.item.style.display = 'none';
                this.closeAccordion(accordion);
            }
        });

        return hasResults;
    }

    // Nettoyage
    destroy() {
        this.accordions.forEach(accordion => {
            accordion.question.removeEventListener('click', this.toggleAccordion);
            accordion.question.removeEventListener('keydown', this.handleKeydown);
        });
        this.accordions = [];
    }
}

// Initialisation automatique
export function initFAQAccordions() {
    return new FAQAccordion();
}