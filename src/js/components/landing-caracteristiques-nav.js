/**
 * Gestion de la navigation sticky des features
 * Active le lien correspondant au click
 * Détecte quand l'effet sticky est activé
 */

export function initFeaturesNav() {
  const navLinks = document.querySelectorAll('.feature-nav-link');
  const navSticky = document.querySelector('.features-nav-sticky');

  if (!navLinks.length || !navSticky) return;

  // Gérer le click sur les liens
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Retirer la classe active de tous les liens
      navLinks.forEach(l => l.classList.remove('active'));

      // Ajouter la classe active au lien cliqué
      link.classList.add('active');
    });
  });

  // Observer les sections pour mettre à jour automatiquement l'état actif
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        const correspondingLink = document.querySelector(`a[href="#${targetId}"]`);

        if (correspondingLink) {
          // Retirer la classe active de tous les liens
          navLinks.forEach(l => l.classList.remove('active'));
          // Ajouter au lien correspondant
          correspondingLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Observer toutes les features
  const features = document.querySelectorAll('[id^="feature-"]');
  features.forEach(feature => observer.observe(feature));

  // Détecter quand l'élément devient sticky et gérer l'opacity
  let scrollTimeout;
  let isSticky = false;

  const checkSticky = () => {
    const rect = navSticky.getBoundingClientRect();
    const stickyPosition = 100; // Correspond au top: 100px du CSS

    // Si l'élément est collé en haut (à sa position sticky)
    if (rect.top <= stickyPosition && rect.top > 0) {
      if (!isSticky) {
        isSticky = true;
        navSticky.classList.add('is-stuck');
      }

      // Réafficher immédiatement lors du scroll
      navSticky.classList.remove('is-hidden');

      // Réinitialiser le timer
      clearTimeout(scrollTimeout);

      // Masquer après 0.5s d'inactivité
      scrollTimeout = setTimeout(() => {
        if (isSticky) {
          navSticky.classList.add('is-hidden');
        }
      }, 500);

    } else {
      // L'élément n'est plus sticky
      isSticky = false;
      navSticky.classList.remove('is-stuck');
      navSticky.classList.remove('is-hidden');
      clearTimeout(scrollTimeout);
    }
  };

  window.addEventListener('scroll', checkSticky);
  checkSticky(); // Vérifier l'état initial
}
