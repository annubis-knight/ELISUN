/**
 * Gestion du toggle des caractéristiques techniques
 * Toggle l'affichage des specs avec animation height
 */

export function initSpecsToggle() {
  const toggleButtons = document.querySelectorAll('.toggle-specs-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-action-toggle');
      const specsContainer = document.getElementById(targetId);

      if (!specsContainer) return;

      // Toggle la classe active sur le bouton et le container
      button.classList.toggle('active');
      specsContainer.classList.toggle('active');
    });
  });
}
