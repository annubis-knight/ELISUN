/**
 * Gestion du slider des onduleurs et stockage (HICONICS / SWATTEN)
 * Permet de basculer entre les différentes marques simultanément sur les deux sections
 */

export function initOnduleurSlider() {
  // Sélectionner les boutons de trigger et les slider tracks
  const triggerButtons = document.querySelectorAll('.onduleurs-section .trigger-button');
  const onduleurSliderTrack = document.querySelector('.onduleur-slider-track');
  const stockageSliderTrack = document.querySelector('.stockage-slider-track');

  // Vérifier que les éléments onduleur existent
  if (!triggerButtons.length || !onduleurSliderTrack) {
    console.warn('Onduleur slider: éléments non trouvés');
    return;
  }

  // Ajouter un event listener sur chaque bouton
  triggerButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Retirer la classe active de tous les boutons
      triggerButtons.forEach(btn => btn.classList.remove('active'));

      // Ajouter la classe active au bouton cliqué
      button.classList.add('active');

      // Récupérer l'index de la slide depuis l'attribut data-slide
      const slideIndex = button.getAttribute('data-slide');

      // Mettre à jour la position des deux sliders (onduleur ET stockage)
      // Slide 0 = pas de transformation (position initiale)
      // Slide 1 = translateX(-100%) pour afficher la deuxième slide
      if (slideIndex === '0') {
        onduleurSliderTrack.classList.remove('slide-1');
        // Mettre à jour aussi le slider stockage si présent
        if (stockageSliderTrack) {
          stockageSliderTrack.classList.remove('slide-1');
        }
      } else if (slideIndex === '1') {
        onduleurSliderTrack.classList.add('slide-1');
        // Mettre à jour aussi le slider stockage si présent
        if (stockageSliderTrack) {
          stockageSliderTrack.classList.add('slide-1');
        }
      }
    });
  });
}
