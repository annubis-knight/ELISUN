/**
 * Gestion du bloc toggle particulier/professionnel
 * Comportement radio button : un seul actif à la fois
 * Switch entre left-section particuliers et professionnels
 */

export function initTriggerBlock() {
  const triggerButtons = document.querySelectorAll('.trigger-button');
  const particulierSection = document.querySelector('.left-section[data-target="particulier"]');
  const professionnelSection = document.querySelector('.left-section[data-target="professionnel"]');

  if (!triggerButtons.length || !particulierSection || !professionnelSection) return;

  // État initial : particulier visible, professionnel invisible (géré par CSS)
  // Pas besoin d'initialisation JavaScript

  // Gérer le click sur les boutons
  triggerButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Retirer la classe active de tous les boutons
      triggerButtons.forEach(btn => btn.classList.remove('active'));

      // Ajouter la classe active au bouton cliqué
      button.classList.add('active');

      // Récupérer le type sélectionné (particulier ou professionnel)
      const selectedType = button.getAttribute('data-type');

      // Toggle entre particulier et professionnel avec opacity + z-index
      if (selectedType === 'particulier') {
        particulierSection.classList.remove('inactive');
        professionnelSection.classList.remove('active');
      } else if (selectedType === 'professionnel') {
        particulierSection.classList.add('inactive');
        professionnelSection.classList.add('active');
      }

      // Dispatch event custom pour utilisation externe si nécessaire
      document.dispatchEvent(new CustomEvent('triggerBlockChange', {
        detail: { type: selectedType }
      }));
    });
  });
}
