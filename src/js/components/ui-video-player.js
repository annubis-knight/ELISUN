/**
 * ui-video-player.js
 * Lecteur vidéo YouTube intégré dans les cards
 * - Desktop : affiche la vidéo inline dans la card
 * - Tablette/Mobile : affiche la vidéo dans une modal fullscreen
 * - Ferme et arrête la vidéo au clic sur le bouton close
 */

// Breakpoint pour le mode modal (tablette et mobile)
const MODAL_BREAKPOINT = 1024;

// Référence à la modal vidéo (créée dynamiquement)
let videoModal = null;

/**
 * Vérifie si on est en mode mobile/tablette
 */
function isMobileOrTablet() {
  return window.innerWidth < MODAL_BREAKPOINT;
}

/**
 * Crée la modal vidéo si elle n'existe pas
 */
function createVideoModal() {
  if (videoModal) return videoModal;

  // Créer la structure de la modal
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal-backdrop"></div>
    <div class="video-modal-content">
      <button type="button" class="video-modal-close" aria-label="Fermer la vidéo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="video-modal-iframe-container"></div>
    </div>
  `;

  document.body.appendChild(modal);
  videoModal = modal;

  // Fermer au clic sur le backdrop
  const backdrop = modal.querySelector('.video-modal-backdrop');
  backdrop.addEventListener('click', closeVideoModal);

  // Fermer au clic sur le bouton
  const closeBtn = modal.querySelector('.video-modal-close');
  closeBtn.addEventListener('click', closeVideoModal);

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeVideoModal();
    }
  });

  return modal;
}

/**
 * Ouvre la modal avec la vidéo YouTube
 */
function openVideoModal(videoId) {
  const modal = createVideoModal();
  const iframeContainer = modal.querySelector('.video-modal-iframe-container');

  // Créer l'iframe YouTube
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.className = 'video-modal-iframe';

  iframeContainer.innerHTML = '';
  iframeContainer.appendChild(iframe);

  // Afficher la modal
  modal.classList.add('active');
  document.body.classList.add('video-modal-open');

  console.log('▶️ Vidéo ouverte en modal:', videoId);
}

/**
 * Ferme la modal vidéo
 */
function closeVideoModal() {
  if (!videoModal) return;

  const iframeContainer = videoModal.querySelector('.video-modal-iframe-container');
  iframeContainer.innerHTML = ''; // Arrête la vidéo

  videoModal.classList.remove('active');
  document.body.classList.remove('video-modal-open');

  console.log('⏹️ Modal vidéo fermée');
}

/**
 * Initialise tous les lecteurs vidéo de la page
 */
export function initVideoPlayers() {
  const videoCards = document.querySelectorAll('.card-video[data-value-video]');

  if (videoCards.length === 0) {
    return;
  }

  videoCards.forEach(card => {
    const videoId = card.dataset.valueVideo;
    if (!videoId) return;

    const thumbnail = card.querySelector('.video-thumbnail');
    const playButton = card.querySelector('.play-button');
    const videoPlayer = card.querySelector('.video-player');
    const closeButton = card.querySelector('.video-close-btn');
    const iframeContainer = card.querySelector('.video-iframe-container');

    if (!thumbnail || !playButton || !videoPlayer || !iframeContainer) {
      console.warn('⚠️ Structure vidéo incomplète pour:', videoId);
      return;
    }

    // Handler pour ouvrir la vidéo (inline ou modal selon la taille d'écran)
    const handleOpenVideo = () => {
      if (isMobileOrTablet()) {
        // Mode tablette/mobile → ouvrir en modal
        openVideoModal(videoId);
      } else {
        // Mode desktop → ouvrir inline dans la card
        openVideoInline(card, videoId, thumbnail, videoPlayer, iframeContainer);
      }
    };

    // Clic sur le bouton play → lancer la vidéo
    playButton.addEventListener('click', handleOpenVideo);

    // Clic sur la thumbnail → lancer la vidéo
    thumbnail.addEventListener('click', handleOpenVideo);

    // Clic sur le bouton fermer (inline uniquement) → arrêter et fermer
    if (closeButton) {
      closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        closeVideoInline(card, thumbnail, videoPlayer, iframeContainer);
      });
    }
  });

  console.log(`✅ ${videoCards.length} lecteur(s) vidéo initialisé(s)`);
}

/**
 * Ouvre et lance la vidéo YouTube en mode inline (desktop)
 */
function openVideoInline(card, videoId, thumbnail, videoPlayer, iframeContainer) {
  // Créer l'iframe YouTube avec autoplay
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.className = 'video-iframe';

  // Vider le container et ajouter l'iframe
  iframeContainer.innerHTML = '';
  iframeContainer.appendChild(iframe);

  // Masquer la thumbnail, afficher le player
  thumbnail.hidden = true;
  videoPlayer.hidden = false;

  // Ajouter classe active pour styles
  card.classList.add('video-playing');

  console.log('▶️ Vidéo lancée inline:', videoId);
}

/**
 * Ferme la vidéo inline et revient à la thumbnail (desktop)
 */
function closeVideoInline(card, thumbnail, videoPlayer, iframeContainer) {
  // Supprimer l'iframe (arrête la vidéo)
  iframeContainer.innerHTML = '';

  // Afficher la thumbnail, masquer le player
  thumbnail.hidden = false;
  videoPlayer.hidden = true;

  // Retirer classe active
  card.classList.remove('video-playing');

  console.log('⏹️ Vidéo inline fermée');
}

// Auto-initialisation au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVideoPlayers);
} else {
  initVideoPlayers();
}
