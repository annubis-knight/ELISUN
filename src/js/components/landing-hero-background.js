/**
 * Rotation automatique du background de la section hero
 * Change l'image toutes les 5 secondes avec effet fade in-out et zoom
 */

import bgMain11 from '../../assets/images/images/bg_main11.jpg';
import bgMain8 from '../../assets/images/images/bg_main8.jpg';
import bgMain from '../../assets/images/images/bg_main.jpg';
import bgMain12 from '../../assets/images/images/bg_main12.webp';

class HeroBackgroundRotation {
    constructor() {
        this.heroSection = document.querySelector('.hero-section');
        this.backgrounds = [bgMain, bgMain8, bgMain12, bgMain11];
        this.currentIndex = 3;
        this.transitionDuration = 5000;
        this.fadeDelay = 1000;
        this.useBeforeLayer = true;

        if (this.heroSection) this.init();
    }

    init() {
        this.prepareLayer('before', this.backgrounds[this.currentIndex]);
        this.interval = setInterval(() => this.changeBackground(), this.transitionDuration);
    }

    /**
     * Préparer une couche en arrière-plan avec nouvelle image + reset zoom
     */
    prepareLayer(layer, imageUrl) {
        const gradients = `
            linear-gradient(135deg, rgba(30, 33, 34, 0.75) 0%, rgba(0, 0, 0, 0.4) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 80%)
        `;
        this.heroSection.style.setProperty(`--bg-${layer}`, `${gradients}, url('${imageUrl}')`);
        this.heroSection.setAttribute(`data-animate-${layer}`, 'false');
        setTimeout(() => this.heroSection.setAttribute(`data-animate-${layer}`, 'true'), 100);
    }

    /**
     * Basculer vers la nouvelle couche visible
     */
    toggleLayers(visibleLayer, hiddenLayer) {
        this.heroSection.style.setProperty(`--opacity-${visibleLayer}`, '1');
        this.heroSection.style.setProperty(`--opacity-${hiddenLayer}`, '0');
        setTimeout(() => this.heroSection.setAttribute(`data-animate-${hiddenLayer}`, 'false'), this.fadeDelay);
    }

    /**
     * Change le background avec effet fade in-out et zoom
     */
    changeBackground() {
        this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
        const hiddenLayer = this.useBeforeLayer ? 'after' : 'before';
        const visibleLayer = this.useBeforeLayer ? 'before' : 'after';

        this.prepareLayer(hiddenLayer, this.backgrounds[this.currentIndex]);

        setTimeout(() => {
            this.toggleLayers(hiddenLayer, visibleLayer);
            this.useBeforeLayer = !this.useBeforeLayer;
        }, 50);
    }

    /**
     * Arrêter la rotation
     */
    stopRotation() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// Auto-initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    new HeroBackgroundRotation();
});

export default HeroBackgroundRotation;
