/**
 * Gestion du widget d'économies avec radio buttons dynamiques
 * Met à jour le pourcentage selon la sélection
 */

class SavingsWidget {
  constructor() {
    this.percentageTextElement = document.getElementById('dynamic-percentage-text');
    this.radioInputs = document.querySelectorAll('input[name="radio-group"]');

    // Données pour chaque type d'installation
    this.savingsData = {
      '6kv': {
        percentage: 785,
        description: 'Résidentiel standard'
      },
      '9kv': {
        percentage: 1550,
        description: 'Grande maison ou petit local'
      },
      '30kv': {
        percentage: 2885,
        description: 'Installation professionnelle'
      }
    };

    this.init();
  }

  init() {
    // Vérifier que les éléments essentiels existent
    if (!this.percentageTextElement) {
      console.warn('Élément de texte de pourcentage non trouvé (ID: dynamic-percentage-text)');
      return;
    }

    console.log('✅ Élément de texte de pourcentage trouvé:', this.percentageTextElement);

    // Écouter les changements sur les radio buttons
    console.log(`📻 ${this.radioInputs.length} radio buttons trouvés`);
    this.radioInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        console.log(`🔄 Radio button changé: ${e.target.value}`);
        this.updateSavings(e.target.value);
      });
    });

    // Initialiser avec la valeur par défaut (6kv)
    const defaultInput = document.querySelector('input[name="radio-group"]:checked');
    if (defaultInput) {
      this.updateSavings(defaultInput.value);
    }
  }

  updateSavings(installationType) {
    const data = this.savingsData[installationType];

    if (!data) {
      console.warn(`Données non trouvées pour le type: ${installationType}`);
      return;
    }

    // Mise à jour du pourcentage dans le texte du titre
    if (this.percentageTextElement) {
      this.animateNumber(this.percentageTextElement, data.percentage);
    }

    // Analytics tracking (optionnel)
    if (window.gtag) {
      gtag('event', 'widget_interaction', {
        'event_category': 'savings_calculator',
        'event_label': installationType,
        'value': data.percentage
      });
    }
  }
  
  animateNumber(element, targetValue) {
    const startValue = parseInt(element.textContent) || 0;
    const duration = 600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Fonction d'easing (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startValue + (targetValue - startValue) * easeOut);

      // Ajouter le symbole % pour l'élément de texte dans le titre
      if (element.id === 'dynamic-percentage-text') {
        element.textContent = currentValue + '€';
      } else {
        element.textContent = currentValue;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}

// Initialisation automatique si le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new SavingsWidget();
  });
} else {
  new SavingsWidget();
}

// Export pour utilisation en module
export default SavingsWidget;