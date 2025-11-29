/* Sections principales - Style EliSun avec CSS nesting */

/* === INDICATEURS D'ÉTAPES VERSION 1 (GRADIENT) === */
.step-indicator {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 50px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, var(--secondary), var(--accent));
  box-shadow: 0 4px 14px rgba(251, 175, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: all var(--transition-fast);
  cursor: default;



  .step-number {
    width: 32px;
    height: 32px;
    background: white;
    color: var(--secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.9);
    position: relative;
    z-index: 1;
  }

  .step-text {
    font-size: 14px;
    font-weight: 600;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(0, 0, 0, 0.05) 100%);
    pointer-events: none;
  }
  

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(251, 175, 0, 0.35);
  
    .step-number {
      transform: scale(1.05);
    }

  }

}


/* === INDICATEURS D'ÉTAPES VERSION 2 (FLAT/MODERNE) === */
.step-indicator-v2 {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 24px;
  background: var(--background-primary);
  border: 2px solid var(--primary-color);
  position: relative;
  transition: all var(--transition-normal);
  cursor: default;

  .step-number {
    width: 28px;
    height: 28px;
    background: var(--primary-color);
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 800;
    position: relative;
    z-index: 1;
  }

  .step-text {
    font-size: 15px;
    font-weight: 600;
    color: var(--primary-color);
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid var(--primary-color);
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    opacity: 0.6;
  }

  &:hover {
    background: var(--primary-ultra-light);
    transform: translateX(4px);

    .step-number {
      transform: scale(1.1);
    }

    &::after {
      opacity: 1;
      transform: translateY(-50%) translateX(2px);
    }
  }
}

/* === INDICATEURS D'ÉTAPES VERSION 3 (BACKGROUND-IMAGE) === */
.step-indicator-v3 {
  display: inline-flex;
  align-items: center;
  padding: 8px 40px;
  border-radius: 6px;
  margin-bottom: 24px;
  background-image: linear-gradient(180deg, #EEFFEC00 56%, var(--secondary-ultra-light) 37%);
  position: relative;
  transition: all var(--transition-normal);

  .step-number {
    display: none;
  }

  .step-text {
    font-size: 14px;
    font-weight: 600;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
  }
}

/* === INDICATEURS D'ÉTAPES VERSION 4 (SOLAIRE/ÉNERGÉTIQUE) === */
.step-indicator-solar {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 16px 24px;
  border-radius: 12px;
  margin-bottom: 24px;
  background: linear-gradient(45deg, var(--primary) 0%, var(--primary-light) 100%);
  position: relative;
  transition: all var(--transition-normal);
  cursor: default;
  box-shadow: var(--shadow-primary);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, var(--secondary), var(--accent), var(--primary));
    border-radius: 14px;
    z-index: -1;
    opacity: 0;
    transition: opacity var(--transition-fast);
  }

  .step-number {
    width: 36px;
    height: 36px;
    background: white;
    color: var(--primary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 800;
    position: relative;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);

    &::after {
      content: '⚡';
      position: absolute;
      top: -8px;
      right: -8px;
      font-size: 12px;
      opacity: 0;
      transition: all var(--transition-fast);
    }
  }

  .step-text {
    font-size: 15px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 25px rgba(43, 155, 31, 0.4);

    &::before {
      opacity: 1;
    }

    .step-number::after {
      opacity: 1;
      transform: rotate(15deg);
    }
  }
}

/* === INDICATEURS D'ÉTAPES VERSION 5 (FAMILIAL/CONFIANCE) === */
.step-indicator-family {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding: 18px 28px;
  border-radius: 50px;
  margin-bottom: 24px;
  background: var(--white);
  border: 3px solid var(--primary);
  position: relative;
  transition: all var(--transition-cubic);
  cursor: default;
  box-shadow: var(--shadow-subtle);

  .step-number {
    width: 42px;
    height: 42px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 800;
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

    &::before {
      content: '';
      position: absolute;
      width: 50px;
      height: 50px;
      border: 2px dashed var(--secondary);
      border-radius: 50%;
      top: -4px;
      left: -4px;
      opacity: 0;
      animation: rotate 3s linear infinite;
      animation-play-state: paused;
    }
  }

  .step-text {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary);
    position: relative;
  }

  &::after {
    content: '🏠';
    position: absolute;
    top: -10px;
    right: 15px;
    font-size: 20px;
    opacity: 0;
    transform: translateY(10px);
    transition: all var(--transition-normal);
  }

  &:hover {
    background: var(--primary-ultra-light);
    border-color: var(--secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);

    .step-number::before {
      opacity: 1;
      animation-play-state: running;
    }

    &::after {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* === INDICATEURS D'ÉTAPES VERSION 6 (PREMIUM/LUXE) === */
.step-indicator-premium {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding: 20px 32px;
  border-radius: 16px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, 
    var(--white) 0%, 
    var(--neutral) 50%, 
    var(--white) 100%);
  border: 1px solid var(--primary);
  position: relative;
  transition: all var(--transition-normal);
  cursor: default;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(251, 175, 0, 0.3), 
      transparent);
    transition: left 0.6s ease;
  }

  .step-number {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    position: relative;
    box-shadow: 0 4px 12px rgba(43, 155, 31, 0.3);
    border: 2px solid white;

    &::after {
      content: '★';
      position: absolute;
      top: -6px;
      right: -6px;
      color: var(--secondary);
      font-size: 14px;
      opacity: 0;
      transform: scale(0);
      transition: all var(--transition-fast);
    }
  }

  .step-text {
    font-size: 17px;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(43, 155, 31, 0.2);
    border-color: var(--secondary);

    &::before {
      left: 100%;
    }

    .step-number::after {
      opacity: 1;
      transform: scale(1);
    }
  }
}

/* === INDICATEURS D'ÉTAPES VERSION 7 (ÉCOLOGIQUE/NATURE) === */
.step-indicator-eco {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 14px 26px;
  border-radius: 25px;
  margin-bottom: 24px;
  background: var(--white);
  border: 2px solid var(--primary);
  position: relative;
  transition: all var(--transition-normal);
  cursor: default;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transition: width 0.4s ease;
  }

  .step-number {
    width: 38px;
    height: 38px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 800;
    position: relative;
    transition: all var(--transition-fast);

    &::before {
      content: '';
      position: absolute;
      width: 44px;
      height: 44px;
      border: 2px solid var(--primary-light);
      border-radius: 50%;
      top: -3px;
      left: -3px;
      opacity: 0;
      transform: scale(0.8);
      transition: all var(--transition-fast);
    }
  }

  .step-text {
    font-size: 15px;
    font-weight: 600;
    color: var(--primary);
    position: relative;

    &::after {
      content: '🌱';
      margin-left: 8px;
      opacity: 0;
      transform: translateX(-10px);
      transition: all var(--transition-fast);
    }
  }

  &:hover {
    background: var(--primary-ultra-light);
    transform: translateX(6px);

    &::before {
      width: 100%;
    }

    .step-number {
      background: var(--secondary);
      transform: rotate(360deg);

      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }

    .step-text::after {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

/* === INDICATEURS D'ÉTAPES VERSION 8 (TECHNIQUE/PROFESSIONNEL) === */
.step-indicator-tech {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 6px;
  margin-bottom: 24px;
  background: var(--neutral-dark);
  position: relative;
  transition: all var(--transition-normal);
  cursor: default;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid var(--primary);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    opacity: 0;
    transition: all var(--transition-fast);
  }

  .step-number {
    width: 32px;
    height: 32px;
    background: var(--primary);
    color: var(--neutral-dark);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    font-family: 'Courier New', monospace;
    position: relative;
    transition: all var(--transition-fast);

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, var(--primary), var(--secondary));
      border-radius: 6px;
      z-index: -1;
      opacity: 0;
      transition: opacity var(--transition-fast);
    }
  }

  .step-text {
    font-size: 14px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: var(--font-secondary);
  }

  &:hover {
    background: var(--primary);
    transform: translateX(8px);

    &::before {
      width: 100%;
    }

    &::after {
      opacity: 1;
      transform: translateY(-50%) translateX(4px);
    }

    .step-number {
      background: var(--neutral-dark);
      color: var(--primary);

      &::before {
        opacity: 1;
      }
    }

    .step-text {
      color: var(--neutral-dark);
    }
  }
}


/* === SECTION CTA FINALE === */
.cta-section {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  background: white;



  /* Gradient radial blanc au centre pour améliorer la lisibilité */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 0.3) 100%);
    pointer-events: none;
    z-index: 2;
  }

  /* Pattern tech grille colorée sur tout le background */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 8px,
        rgba(251, 175, 0, 0.08) 8px,
        rgba(251, 175, 0, 0.08) 10px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 8px,
        rgba(43, 155, 31, 0.06) 8px,
        rgba(43, 155, 31, 0.06) 10px
      );
    opacity: 1;
    pointer-events: none;
    z-index: 1;
  }

  .containerMax {
    position: relative;
    z-index: 3;
  }

  /* Container principal en structure verticale */
  .cta-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    position: relative;

  }

  /* Colonne droite - Formulaire utilisant input-cta-group */
  .cta-right {
    width: 100%;
    max-width: 700px;

  }


}

/* === SECTION MESSAGE DE CONFIANCE FINALE === */
.final-trust-section {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  .trust-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(30, 33, 34, 0.6) 100%),
      url('../../assets/images/images/asset1.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    .trust-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(1px);
    }
  }
  
  .containerMax {
    position: relative;
    z-index: 2;
  }
  
  .trust-content-centered {
    text-align: center;
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 0 auto;
    
    .trust-icon {
      margin-bottom: 2rem;
      
      i {
        font-size: 4rem;
        color: var(--accent);
        background: rgba(255, 255, 255, 0.2);
        padding: 2rem;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.3);
        transition: all 0.4s ease;
        
        &:hover {
          transform: scale(1.1);
          background: var(--accent);
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      }
    }
    
    .trust-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: white;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }
    
    .trust-description {
      font-size: var(--text-xl);
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
      font-weight: 400;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
      
      @media (max-width: 768px) {
        font-size: var(--text-lg);
      }
    }
  }
  
  @media (max-width: 768px) {
    min-height: 500px;
    
    .trust-content-centered {
      padding: 3rem 1.5rem;
      
      .trust-icon i {
        font-size: 3rem;
        width: 100px;
        height: 100px;
        padding: 1.5rem;
      }
      
      .trust-title {
        font-size: 2rem;
      }
    }
  }
}

/* === SECTION HERO === */
.hero-section {
  min-height: 116vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Couches de background avec rotation automatique et zoom */
  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transition: opacity 1s ease-in-out;
    z-index: -1;
    transform-origin: center center;
    will-change: transform, opacity;
    transform: scale(1);

    /* Clipper la zone visible uniquement à la hauteur de la hero (116vh) */
    clip-path: inset(0 0 calc(100% - 116vh) 0);
  }

  &::before {
    background-image: var(--bg-before);
    opacity: var(--opacity-before, 1);
  }

  &::after {
    background-image: var(--bg-after);
    opacity: var(--opacity-after, 0);
  }

  /* Activation de l'animation zoom via data-attributes */
  &[data-animate-before='true']::before {
    animation: heroBackgroundZoom 5000ms ease-out forwards;
  }

  &[data-animate-after='true']::after {
    animation: heroBackgroundZoom 5000ms ease-out forwards;
  }

}

/* Animation zoom-in progressif */
@keyframes heroBackgroundZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

.hero-section {

  .hero-left {
    /* background-color: transparent;
    padding: 80px 40px; */
    margin-top: 200px;
    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {
      margin-top: 100px;
      padding: 0 1rem;
    }

    .content-block {

      h1{
        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

        @media (max-width: 1024px) {
          font-size: 2rem;
          line-height: 1.2;
        }
      }

      .hero-subtitle {
        font-size: var(--text-xl);
        margin-bottom: 2rem;
        line-height: var(--leading-relaxed);
        font-weight: 300;
        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

        @media (max-width: 1024px) {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
      }

      .hero-cta {
        display: flex;
        gap: 8px;

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }
    }
  }

  /* === CERTIFICATIONS DANS HERO === */
  .hero-certifications {
    margin-top: auto;
    padding: 3rem 0;
    position: relative;
    z-index: 2;
    max-width: 100vw;
    width: 100%;

    /* Overflow hidden seulement sur mobile pour l'animation */
    @media (max-width: 1024px) {
      overflow: hidden;
    }

    .certifications-scroll-wrapper {
      display: flex;
      flex-wrap: nowrap;
      gap: 3rem;

      /* Desktop : pas d'animation, centrage des logos */
      @media (min-width: 1025px) {
        width: 100%;
        justify-content: center;
        animation: none;
      }

      /* Mobile/Tablette : animation de défilement */
      @media (max-width: 1024px) {
        width: max-content;
        gap: 2rem;
        animation: scrollCertifications 24s ease-in-out infinite alternate;
        will-change: transform;

      }

      .certification-logo-hero {
        flex: 0 0 auto;
        width: 140px;
        height: 50px;
        object-fit: contain;
        opacity: 0.9;
        transition: all 0.3s ease;

        @media (max-width: 1024px) {
          width: 120px;
          height: 40px;
        }

      }
    }
  }
}

/* Animation de défilement horizontal va-et-vient (DOIT être en dehors de .hero-section) */
@keyframes scrollCertifications {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% + 100vw));
  }
}

/* === HERO INSTALLATION SPÉCIFIQUE === */
.hero-installation {
  background-image:
    linear-gradient(135deg, rgba(30, 33, 34, 0.75) 0%, rgba(0, 0, 0, 0.4) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100%),
    url('/src/assets/images/images/bg_installation12.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 700px;
  position: relative;
  overflow-x: visible;
  display: flex;
  align-items: center;

  .hero-left {
    background-color: transparent;
    padding: 80px 40px;
    position: relative;

    .content-block {
      .hero-subtitle {
        font-size: var(--text-xl);
        margin-bottom: 2rem;
        line-height: var(--leading-relaxed);
        font-weight: 300;
      }

      .hero-cta {
        display: flex;
        gap: 8px;

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }
    }
  }
}

/* === HERO MATERIEL SPÉCIFIQUE === */
.hero-materiel {
  background-image:
    linear-gradient(135deg, rgba(30, 33, 34, 0.75) 0%, rgba(0, 0, 0, 0.4) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100%),
    url('/src/assets/images/images/bg_hero_materiel.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 700px;
  position: relative;
  overflow-x: visible;
  display: flex;
  align-items: center;

  .hero-left {
    background-color: transparent;
    padding: 80px 40px;
    position: relative;

    .content-block {
      .hero-subtitle {
        font-size: var(--text-xl);
        margin-bottom: 2rem;
        line-height: var(--leading-relaxed);
        font-weight: 300;
      }

      .hero-cta {
        display: flex;
        gap: 8px;

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }
    }
  }
}

/* === FLOATING CARDS === */
.floating-cards-container {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 80px; /* Même padding que hero-left pour alignement */
  position: relative;
  overflow: visible;
}

.floating-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateX(0); /* Position de base, sera ajustée par JS */
  z-index: 10;
  transition: transform 0.3s ease;
}

.floating-card {
  background-color: var(--background-secondary-o8);
  opacity: 0.5;
  color: white;
  padding: 1rem 1.5rem 1rem 1rem;
  border-radius: 12px 0 0 12px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;

  i {
    font-size: 2rem;
    flex-shrink: 0;
  }

  &:hover {
    transform: translateX(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    background-color: var(--primary);
  }
}

.floating-card-particuliers {
  animation: float-in-particuliers 0.8s ease-out 0.5s both;
}

.floating-card-professionnels {
  animation: float-in-professionnels 0.8s ease-out 0.7s both;
}

@keyframes float-in-particuliers {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes float-in-professionnels {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Responsive - masquer sur mobile et tablette */
@media (max-width: 1024px) {
  .floating-cards-container {
    display: none;
  }
}

/* === TRIGGER BLOCK - COMPOSANT GLOBAL === */
.trigger-block {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: rgba(248, 250, 252, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin: 0 auto;
  width: fit-content;
  position: relative;
  z-index: 10;

  .trigger-button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 1.5rem;
    background: var(--white);
    border: 1px solid var(--border-accent);
    border-radius: 8px;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: var(--accent);
      color: var(--white);
      border-color: var(--accent);
    }

    &:hover:not(.active) {
      background: var(--neutral);
      color: var(--accent);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 0.5rem 1rem;
    }
  }
}

/* === SECTION BANNIERE === */
.banner-section {
  padding: 8rem 0 16rem 0;
  background: var(--background-primary);
  position: relative;
  overflow: hidden;

  /* Triangle géométrique en coin supérieur gauche */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-right: 100px solid transparent;
    border-top: 100px solid rgba(43, 155, 31, 0.15);
    pointer-events: none;
    z-index: 1;
  }
  
  /* Pattern tech subtil */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 5%;
    width: 200px;
    height: 200px;
    background-image: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 8px,
        rgba(251, 175, 0, 0.08) 8px,
        rgba(251, 175, 0, 0.08) 10px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 8px,
        rgba(43, 155, 31, 0.06) 8px,
        rgba(43, 155, 31, 0.06) 10px
      );
    opacity: 1;
    pointer-events: none;
    z-index: 1;
  }
  
  .certification-logo {
    width: 100%;
    max-width: 200px;
    height: 60px;
    object-fit: contain;
    margin: 0 auto;
    display: block;
    opacity: 0.7;
    filter: grayscale(1);
    transition: var(--transition-normal);
    
  }
  
  /* === SECTION BANNER HIGHLIGHTS === */
  .banner-highlights {
    display: none;
    padding: 4rem 0 2rem 0;
    position: relative;
    z-index: 2;


    .highlights-left {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-right: 2rem;

      @media (max-width: 1024px) {
        padding-right: 0;
        margin-bottom: 3rem;
      }
    }

    .highlight-item {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);

        .highlight-icon-svg {
          transform: scale(1.1);
        }
      }
    }

    .highlight-icon {
      flex-shrink: 0;
      width: 60px;
      height: 60px;
      background: var(--primary-ultra-light);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--primary-light);
      transition: all 0.3s ease;

      .highlight-icon-svg {
        width: 32px;
        height: 32px;
        filter: brightness(0) saturate(100%) invert(29%) sepia(77%) saturate(1398%) hue-rotate(88deg) brightness(96%) contrast(101%);
        transition: all 0.3s ease;
      }
    }

    .highlight-content {
      flex: 1;

      .highlight-title {
        font-size: var(--text-xl);
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.75rem;
        line-height: 1.3;
        font-family: var(--header-font);
      }

      .highlight-text {
        font-size: var(--text-base);
        color: var(--text-color);
        line-height: 1.6;
        margin: 0;
      }
    }


  }

  /* Widget économies complet */
  .savings-widget {
    background: var(--background-primary);
    overflow: visible;
    position: relative;
    
    .widget-header {
      text-align: center;
      margin-bottom: 2rem;
      
      .widget-title {
        font-size: var(--text-xl);
        font-weight: 600;
        color: var(--neutral-dark);
        line-height: var(--leading-relaxed);
      }
    }
    
    /* grid-tailwind gère maintenant la mise en page */

    /* Wrapper des left-sections pour hauteur fixe */
    .left-section-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
    }

    /* Section gauche complète */
    .left-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transition: opacity 0.3s ease, z-index 0.3s ease;

      /* Par défaut (particulier) - position normale */
      &[data-target="particulier"] {
        position: relative;
        opacity: 1;
        z-index: 2;
      }

      /* Professionnel - absolute + invisible par défaut */
      &[data-target="professionnel"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        z-index: 1;
        pointer-events: none;
      }

      /* Classe active pour professionnel */
      &[data-target="professionnel"].active {
        opacity: 1;
        z-index: 2;
        pointer-events: auto;
      }

      /* Classe inactive pour particulier */
      &[data-target="particulier"].inactive {
        opacity: 0;
        z-index: 1;
        pointer-events: none;
      }

      /* Ordre vertical : radio buttons → titre → pourcentage */
      .particulier-pro-section {
        order: 1;

        .selector-label {
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--neutral-medium);
          margin-bottom: 1rem;
          text-align: left;
        }

        /* Cards horizontales professionnels */
        .pro-features-cards {
          display: flex;
          flex-direction: row;
          gap: 0.75rem;
          max-width: 440px;

          .pro-feature-card {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            padding: 1rem 0.75rem;
            background: rgba(248, 250, 252, 0.8);
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            transition: all 0.3s ease;
            align-items: center;
            text-align: center;
            flex: 1;
            min-width: 100px;

            &:hover {
              background: rgba(255, 255, 255, 0.95);
              border-color: var(--accent);
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            }

            .pro-card-icon {
              flex-shrink: 0;
              width: 2.5rem;
              height: 2.5rem;
              background: linear-gradient(135deg, var(--accent), var(--primary-color));
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--white);

              svg {
                width: 1.5rem;
                height: 1.5rem;
              }
            }

            .pro-card-content {
              h4 {
                font-size: var(--text-base);
                font-weight: 600;
                color: var(--neutral-dark);
                margin-bottom: 0.25rem;
                line-height: 1.2;
              }

              p {
                font-size: 0.75rem;
                color: var(--neutral-medium);
                line-height: 1.3;
                margin: 0;
              }
            }
          }
        }
      }

      .title-section {
        order: 2;
        text-align: left;

        .dynamic-percentage-highlight {
          font-weight: 700;
          color: var(--accent);
          font-size: 1.3em;
        }
      }

    }
    
    /* Section droite - Image */
    .right-section {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-right: -300px;
      
      .savings-image {
        position: absolute;
        height: 150%;
        width: 100%;
        left: 0;
        top: 0;
        /* box-shadow: var(--accent) 90px -20px 0; */
        border-radius: 20px 20px 0 0;
        overflow: hidden;
        transition: all 0.4s ease;
        z-index: 0;
        transform: scale(1.5);
      
        
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: top;
          transition: all 0.3s ease;
          transform: scaleX(-1);
        }
      }
    }
    
    .widget-separator {
      width: 1px;
      height: 120px;
      background: linear-gradient(to bottom, transparent, var(--neutral-medium), transparent);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background: var(--neutral-medium);
        border-radius: 50%;
      }
    }
  }
  
  /* Radio group dans le widget */
  .radio-group {
    display: flex;
    gap: 0.75rem;
    max-width: 440px;
    
    input[type="radio"] {
      display: none;
    }
    
    .radio-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem 0.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      cursor: pointer;
      transition: var(--transition-normal);
      background: var(--background-primary);
      min-width: 100px;
      gap: 0.75rem;
      flex: 1;
      
      .card-icon {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: contain;
        opacity: 0.7;
        transition: var(--transition-normal);
      }
      
      .radio-text {
        font-size: var(--text-base);
        font-weight: 600;
        color: var(--neutral-dark);
        transition: var(--transition-normal);
      }
      
      &:hover {
        border-color: var(--primary);
        background: var(--primary-ultra-light);
        transform: translateY(-2px);
        box-shadow: var(--shadow-medium);
        
        .card-icon {
          opacity: 1;
          transform: scale(1.1);
        }
        
        .radio-text {
          color: var(--primary);
        }
      }
    }
    
input[type="radio"]:checked + .radio-card {
      border-color: var(--primary);
      border-width: 2px;
      background: var(--primary-ultra-light);
      
      .card-icon {
        opacity: 1;
        transform: scale(1.15);
      }
      
      .radio-text {
        color: var(--primary);
        font-weight: 700;
      }
    }
  }
  
  @media (max-width: 768px) {
    .radio-group {
      justify-content: center;
      gap: 0.75rem;
      
      .radio-card {
        min-width: 80px;
        padding: 1rem 0.75rem;
        
.card-icon {
          width: 2rem;
          height: 2rem;
        }
        
        .radio-text {
          font-size: var(--text-sm);
        }
      }
    }
  }
  
  


  /* Section résultat - Card avec image bien intégrée */
  .result-section {
    display: flex;
    justify-content: center;
    
    .result-card {
      background: linear-gradient(145deg, #ffffff 0%, #fefcf3 50%, #fff8e1 100%);
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 16px 40px rgba(251, 175, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.08);
      border: 3px solid var(--accent);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover {
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 20px 50px rgba(251, 175, 0, 0.25), 0 12px 32px rgba(0, 0, 0, 0.12);
        border-color: var(--secondary);
      }
      
      /* Animation de mise à jour */
      &.updating {
        animation: card-pulse 0.6s ease-out;
        
        .percentage-number {
          animation: number-bounce 0.8s ease-out;
        }
        
        .card-image img {
          transition: all 0.3s ease-out;
        }
      }
      
      /* Effet de brillance animé */
      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(251, 175, 0, 0.08) 0%, transparent 70%);
        animation: pulse-glow 4s ease-in-out infinite;
      }
      
      /* Bordure supérieure décorative */
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--accent) 0%, var(--secondary) 50%, var(--accent) 100%);
        background-size: 200% 100%;
        animation: shimmer 2s ease-in-out infinite;
      }
      
      .card-image {
        width: 120px;
        height: 120px;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--accent-ultra-light) 0%, rgba(255, 255, 255, 0.8) 100%);
        border: 2px solid var(--accent-light);
        transition: var(--transition-normal);
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-normal);
        }
        
        &:hover {
          transform: scale(1.05);
          border-color: var(--accent);
          
          img {
            transform: scale(1.1);
          }
        }
      }
      
      .card-content {
        text-align: center;
        
        .percentage-display {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 1rem;
          
          .percentage-number {
            font-size: 4rem;
            font-weight: 900;
            color: var(--accent);
            line-height: 0.8;
            text-shadow: 0 6px 12px rgba(251, 175, 0, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            z-index: 1;
            
            /* Effet de brillance sur le nombre */
            background: linear-gradient(45deg, var(--accent), #ff8c00, var(--accent));
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 3s ease-in-out infinite;
            
            @media (max-width: 768px) {
              font-size: 3.5rem;
            }
          }
          
          .percentage-symbol {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--accent);
            text-shadow: 0 4px 8px rgba(251, 175, 0, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            
            @media (max-width: 768px) {
              font-size: 2rem;
            }
          }
        }
        
        .result-labels {
          .result-main-label {
            font-size: var(--text-base);
            font-weight: 600;
            color: var(--neutral-dark);
            margin-bottom: 0.5rem;
            line-height: var(--leading-tight);
          }
          
          .result-sub-label {
            font-size: var(--text-sm);
            color: var(--neutral-medium);
            font-weight: 400;
            line-height: var(--leading-relaxed);
            
            .amount {
              font-weight: 700;
              color: var(--accent);
              font-size: var(--text-base);
              background: var(--accent-ultra-light);
              padding: 0.25rem 0.5rem;
              border-radius: 6px;
              border: 1px solid var(--accent-light);
              display: inline-block;
              margin: 0.25rem 0;
            }
          }
        }
      }
      
      @media (max-width: 768px) {
        padding: 1.25rem;
        gap: 1.25rem;
        
        .card-image {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  
}

/* === SECTION BÉNÉFICES === */
.benefits-section {
  /* Section neutre sans margin ni styles visuels */
  position: relative;

  /* Conteneur visuel avec tous les effets graphiques */
  .benefits-visual-container {
    color: white;
    margin: 0 40px;
    padding: 8rem 0 5rem 0;
    border-radius: 20px;
    background: linear-gradient(90deg, #2b991e90 0%, var(--primary-lighter) 100%)
                ,url('../../assets/images/background/bg-connected.png') center/cover no-repeat
                ;
    position: relative;
    overflow: hidden;

    @media (max-width: 1024px) {
      margin: 0 1rem;
      padding: 3rem 0 2rem 0;
      border-radius: 12px;
    }
  }

  /* LEFT - Gallery container avec effet de profondeur */
  .gallery-container {
    position: relative;
    width: 100%;
    height: 750px;
    perspective: 1000px;

    @media (max-width: 768px) {
      height: 400px;
    }
  }

  .gallery-item {
    position: absolute;
    transition: all 0.4s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Item arrière-plan gauche */
    &.gallery-item-back-left {
      width: max-content;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      transform: translate(-40%, 0%);
    }

    /* Item arrière-plan droite */
    &.gallery-item-back-right {
      height: 75%;
      top: 0;
      right: 0;
      z-index: 1;
      transform: translate(40%, 12%);
    }

    /* Item premier plan */
    &.gallery-item-front {
      height: 90%;
      width: max-content;
      top: 0;
      left: 50%;
      transform: translate(-50%, 5%);
      z-index: 3;
      filter: drop-shadow(0 0px 40px rgb(46, 255, 106));  
    }

  }

  /* LEFT - Single image container (alternative simple) */
  .single-image-container {
    position: relative;
    width: 100%;
    height: 750px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 8px 40px rgba(46, 255, 106, 0.3));
      transition: transform 0.4s ease;

      &:hover {
        transform: scale(1.02);
      }
    }

    @media (max-width: 768px) {
      height: 400px;
    }
  }

  /* RIGHT - Installation bento container (superposition des grids) */
  .installation-bento-container {
    position: relative;
    width: 100%;
    height: 750px;

    .installation-bento-grid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
      transition: opacity 0.6s ease;
      pointer-events: none;

      &.active {
        opacity: 1;
        pointer-events: auto;
      }

      /* Layout de base bento-grid - CRUCIAL: display: grid défini ici */
      .bento-grid {
        display: grid;
        gap: 1rem;
        height: 100%;

        /* Layout 1 - Default (3 cards horizontales) */
        &:not(.bento-layout-2):not(.bento-layout-3) {
          grid-template-columns: repeat(3, 1fr);

          @media (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        }

        /* Layout 2 - Card large gauche + 2 cards empilées droite */
        &.bento-layout-2 {
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 1fr 1fr;

          .bento-large {
            grid-row: 1 / 3;
          }

          .bento-stack {
            grid-column: 2;
            grid-row: 1 / 3;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .bento-small {
              flex: 1;
            }
          }

          @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto;

            .bento-stack {
              grid-column: 1;
              grid-row: auto;
            }
          }
        }

        /* Layout 3 - Card large haut + 2 cards horizontales bas */
        &.bento-layout-3 {
          grid-template-columns: 1fr;
          grid-template-rows: 2fr 1fr;

          .bento-top {
            grid-column: 1;
            grid-row: 1;
          }

          .bento-bottom-row {
            grid-column: 1;
            grid-row: 2;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            .bento-half {
              min-height: 120px;
            }
          }

          @media (max-width: 768px) {
            grid-template-rows: auto auto;

            .bento-bottom-row {
              grid-template-columns: 1fr;
            }
          }
        }

        /* Styles de base des bento-cards */
        .bento-card {
          border-radius: 1rem;
          overflow: hidden;
          min-height: 140px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          }

          /* Card blanche */
          &.card-white {
            background: var(--white);
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            border: 2px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

            p {
              margin: 0;
              font-size: 0.95rem;
              line-height: 1.5;
              color: var(--neutral-dark);

              strong {
                display: block;
                font-size: 1.25rem;
                color: var(--secondary);
                margin-bottom: 0.25rem;
                font-weight: 700;
              }
            }
          }

          /* Card dark avec image pose-panneau */
          &.card-dark {
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../../assets/images/images/pose-panneau.png);
            background-size: cover;
            background-position: center;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

            p {
              margin: 0;
              font-size: 0.95rem;
              line-height: 1.5;
              color: var(--white);

              strong {
                display: block;
                font-size: 1.25rem;
                color: var(--secondary);
                margin-bottom: 0.25rem;
                font-weight: 700;
              }
            }
          }

          /* Card gradient green avec image intemperies */
          &.card-gradient-green {
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('/src/assets/images/images/intemperies.jpg');
            background-size: cover;
            background-position: center;
            padding: 1.5rem;
            display: flex;
            align-items: flex-end;
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

            .card-mixed-content {
              position: relative;
              z-index: 1;

              p {
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
                color: var(--white);

                strong {
                  display: block;
                  font-size: 1.25rem;
                  margin-bottom: 0.25rem;
                  font-weight: 700;
                  color: var(--white);
                }
              }
            }
          }

          /* Card gradient orange avec image connexion-wifi */
          &.card-gradient-orange {
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('/src/assets/images/images/connexion-wifi.jpg');
            background-size: cover;
            background-position: center;
            padding: 1.5rem;
            display: flex;
            align-items: flex-end;
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

            .card-mixed-content {
              position: relative;
              z-index: 1;

              p {
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
                color: var(--white);

                strong {
                  display: block;
                  font-size: 1.25rem;
                  margin-bottom: 0.25rem;
                  font-weight: 700;
                  color: var(--white);
                }
              }
            }
          }

          /* Card image générique */
          &.card-image {
            background-size: cover;
            background-position: center;
            padding: 1.5rem;
            display: flex;
            align-items: flex-end;
            position: relative;

            /* Onduleur dans layout-2 */
            .bento-stack & {
              background-image: url('/src/assets/images/images/onduleur-swatten.webp');
            }

            /* Production active dans layout-3 */
            &.bento-top {
              background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('/src/assets/images/images/scenariot2.jpg');
            }

            .card-mixed-content {
              position: relative;
              z-index: 1;

              p {
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
                color: var(--white);

                strong {
                  display: block;
                  font-size: 1.25rem;
                  margin-bottom: 0.25rem;
                  font-weight: 700;
                  color: var(--white);
                }
              }
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      height: auto;

      .installation-bento-grid {
        position: relative;
        opacity: 1;
        pointer-events: auto;
        margin-bottom: 2rem;

        .bento-grid {
          grid-template-columns: 1fr !important;
        }
      }
    }
  }


  /* RIGHT - Nouvelle structure bento-grid pour les bénéfices */
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 8rem;

    .benefit-block {
      margin-bottom: 2rem;

      .benefit-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;

        h3 {
          font-size: 1.5rem;
          color: var(--color-elisun-blue);
          margin: 0;
          font-weight: 700;
        }
      }

      /* Benefit content wrapper avec animation reveal */
      .benefit-content {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;

        &.visible {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Layout de base bento-grid */
      .bento-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 1.5rem;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }

        .bento-card {
          border-radius: 1rem;
          overflow: hidden;
          min-height: 140px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          }

          /* === Styles des différents types de cards === */

          /* Card blanche */
          &.card-white {
            background: var(--white);
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            border: 2px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

            p {
              margin: 0;
              font-size: 0.95rem;
              line-height: 1.5;
              color: var(--neutral-dark);

              strong {
                display: block;
                font-size: 1.25rem;
                color: var(--secondary);
                margin-bottom: 0.25rem;
                font-weight: 700;
              }
            }
          }

          /* Card noire/dark */
          &.card-dark {
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(../../assets/images/images/pose-panneau.png);
            background-size: cover;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

            p {
              margin: 0;
              font-size: 0.95rem;
              line-height: 1.5;
              color: var(--white);

              strong {
                display: block;
                font-size: 1.25rem;
                color: var(--secondary);
                margin-bottom: 0.25rem;
                font-weight: 700;
              }
            }
          }

          /* Card gradient vert */
          &.card-gradient-green {
            background: linear-gradient(135deg, var(--primary), var(--primary-light));
            padding: 1.5rem;
            display: flex;
            align-items: flex-end;
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);


            .card-mixed-content {
              position: relative;
              z-index: 1;

              p {
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
                color: var(--white);

                strong {
                  display: block;
                  font-size: 1.25rem;
                  margin-bottom: 0.25rem;
                  font-weight: 700;
                  color: var(--white);
                }
              }
            }
          }

          /* Card gradient orange */
          &.card-gradient-orange {
            background: linear-gradient(135deg, var(--secondary), var(--secondary-light));
            padding: 1.5rem;
            display: flex;
            align-items: flex-end;
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

            .card-mixed-content {
              position: relative;
              z-index: 1;

              p {
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
                color: var(--neutral-dark);

                strong {
                  display: block;
                  font-size: 1.25rem;
                  margin-bottom: 0.25rem;
                  font-weight: 700;
                  color: var(--neutral-dark);
                }
              }
            }
          }

          /* Card avec background image */
          &.card-image {
            background: linear-gradient(135deg, rgba(43, 155, 31, 0.85), rgba(63, 176, 40, 0.85)),
                        url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600') center/cover;
            padding: 1.5rem;
            display: flex;
            align-items: flex-end;
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);


            .card-mixed-content {
              position: relative;
              z-index: 1;

              p {
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
                color: var(--white);

                strong {
                  display: block;
                  font-size: 1.25rem;
                  margin-bottom: 0.25rem;
                  font-weight: 700;
                  color: var(--white);
                }
              }
            }
          }
        }

        /* Layout 1 - Default (3 cards horizontales) - Premier bénéfice */
        &:not(.bento-layout-2):not(.bento-layout-3) {
          grid-template-columns: 1fr 1fr;

          .bento-card {
            &:first-child {
              grid-row: span 1;
            }

            &:nth-child(2) {
              grid-row: span 1;
            }

            &:last-child {
              grid-column: 2;
              grid-row: 1 / 3;
            }
          }

          /* Card Durabilité avec image intemperies */
          .card-gradient-green {
            background-image:
              linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
              url('/src/assets/images/images/intemperies.jpg');
            background-size: cover;
            background-position: center;

            .card-mixed-content p {
              color: var(--white);

              strong {
                color: var(--white);
              }
            }
          }
        }

        /* Layout 2 - Card large gauche + 2 cards empilées droite - Deuxième bénéfice */
        &.bento-layout-2 {
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 1fr 1fr;

          /* Card 98% conversion avec image connexion-wifi */
          .bento-large.card-gradient-orange {
            background-image:
              linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
              url('/src/assets/images/images/connexion-wifi.jpg');
            background-size: cover;
            background-position: center;
            grid-row: 1 / 3;

            .card-mixed-content p {
              color: var(--white);

              strong {
                color: var(--white);
              }
            }
          }

          .bento-large {
            grid-row: 1 / 3;
          }

          .bento-stack {
            grid-column: 2;
            grid-row: 1 / 3;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .bento-small {
              flex: 1;
            }

            /* Card Hybride avec image onduleur-swatten */
            .card-image {
              background-image: url('/src/assets/images/images/onduleur-swatten.webp');
              background-size: cover;
              background-position: center;

              .card-mixed-content p {
                color: var(--white);

                strong {
                  color: var(--white);
                }
              }
            }
          }
        }

        /* Layout 3 - Card large haut + 2 cards horizontales bas - Troisième bénéfice */
        &.bento-layout-3 {
          grid-template-columns: 1fr;
          grid-template-rows: 2fr 1fr;

          /* Card Autonomie 80% avec image scenariot2 */
          .bento-top.card-image {
            background-image:
              linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
              url('/src/assets/images/images/scenariot2.jpg');
            background-size: cover;
            background-position: center;
            grid-column: 1;
            grid-row: 1;
          }

          .bento-top {
            grid-column: 1;
            grid-row: 1;
          }

          .bento-bottom-row {
            grid-column: 1;
            grid-row: 2;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            .bento-half {
              min-height: 120px;
            }

            /* Card Lithium avec image battery-lifepo */
            .card-dark {
              background-image:
                linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
                url('/src/assets/images/images/battery-lifepo.png');
              background-size: cover;
              background-position: center;

              p {
                color: var(--white);

                strong {
                  color: var(--white);
                }
              }
            }
          }
        }
      }
    }
  }
}

/* === CARD PRIX E-COMMERCE === */
.price-card-ecommerce {
  display: none;
  position: absolute;
  bottom: 20px;
  left: 20px;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  min-width: 280px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  }

  .price-card-header {
    margin-bottom: 1rem;

    .price-badge {
      background: var(--accent-color);
      color: var(--text-primary);
      font-size: var(--text-xs);
      font-weight: 700;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      display: inline-block;
    }
  }

  .price-card-body {
    .price-main {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-bottom: 1rem;

      .price-amount {
        font-size: var(--text-2xl);
        font-weight: 800;
        color: var(--primary-color);
        line-height: 1.1;
        font-family: var(--header-font);
      }

      .price-unit {
        font-size: var(--text-sm);
        color: var(--neutral-medium);
        font-weight: 500;
      }
    }

    .price-details {
      .price-old {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;

        .strikethrough {
          font-size: var(--text-base);
          color: var(--neutral-medium);
          text-decoration: line-through;
          font-weight: 500;
        }

        .discount-badge {
          background: #ef4444;
          color: white;
          font-size: var(--text-xs);
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
      }

      .price-subtitle {
        font-size: var(--text-sm);
        color: var(--text-color);
        font-weight: 500;
        line-height: 1.4;
      }
    }
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 1rem;
    min-width: auto;
    width: 100%;
  }
}

/* === GALLERY CTA CONTAINER === */
.gallery-cta-container {
  margin-top: 2rem;

  .btn-full-width {
    width: 100%;
    justify-content: center;
    gap: 0.75rem;

    i {
      font-size: 1.25rem;
    }
  }
}

/* === SECTION PARCOURS CLIENT AVEC ONGLETS === */
.customer-journey-section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: white;
  display : none;
  
  
  /* Forme géométrique en coin */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 120px solid rgba(251, 175, 0, 0.12);
    border-left: 120px solid transparent;
    pointer-events: none;
    z-index: 1;
  }
  
  /* Contenu au-dessus */
  .containerMax {
    position: relative;
    z-index: 2;
  }

  /* Layout pour journey-item (bouton + titre côte à côte) */
  .journey-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;

    .journey-title {
      color: var(--text-primary);
      font-size: var(--text-xl);
      font-weight: 600;
      margin: 0;
    }

    @media (max-width: 768px) {
      gap: 1rem;

      .journey-title {
        font-size: var(--text-lg);
      }
    }
  }
  
  
  .containerMax {
    position: relative;
    z-index: 1;
  }
  
  h2 {
    color: var(--text-primary);
    
    span {
      color: var(--accent);
    }
  }
  
  .content-header p {
    color: var(--text-color);
  }
  
  /* Onglets navigation */
  .journey-tabs {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.25rem;
    }
    
    /* Container pour chaque étape */
    .journey-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      border-radius: 12px;
      transition: var(--transition-normal);
      
      /* Effet quinconce - décalage vertical alterné */
      &:nth-child(even) {
        padding: 150px 16px 70px 16px; 
      }
      
      &:nth-child(odd) {
        padding: 50px 16px 170px 16px;
      }
      
      /* Style pour container actif */
      /* &:has(.journey-tab.active) {
        background: rgba(43, 155, 31, 0.1);
      } */
      
      /* Container pour flèches */
      .arrow-container {
        position: absolute;
        top: 50%;
        right: -50%;
        width: 100%;
        height: 40px;
        z-index: 1;
        opacity: 0.3;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        
        img {
          width: 80px;
          height: 40px;
          object-fit: contain;
        }
        
        @media (max-width: 768px) {
          right: -15px;
          width: 16px;
          height: 16px;
          top: 30px;
          
          img {
            width: 16px;
            height: 8px;
          }
        }
      }
      
      /* Deuxième flèche renversée */
      &:nth-child(2) .arrow-container img {
        transform: scaleY(-1);
      }
    }

    /* Les styles journey-tab sont maintenant gérés par le composant .tab-button dans utilities.css */
    
    /* Responsive pour containers */
    @media (max-width: 768px) {
      .journey-container {
        &:nth-child(even) {
          margin-top: 10px;
        }
        
        &:nth-child(odd) {
          margin-bottom: 10px;
        }
        
      }
    }
  }
  
  /* === CONTENU DES PANNEAUX JOURNEY - VERSION SIMPLIFIÉE === */
  .journey-content {
    position: relative;
    min-height: 600px;
    margin-top: -4rem;
  }
  
  /* Panels avec animation d'affichage */
  .journey-panel {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Layout flexbox côte à côte */
    display: flex;
    min-height: 500px;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.1);
    background: var(--background-primary);
    border-radius: 20px;
    overflow: hidden;
    
    /* État actif */
    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      position: relative;
    }
    
    /* Responsive mobile */
    @media (max-width: 1024px) {
      flex-direction: column;
      min-height: auto;
    }
  }
  
  /* Contenu texte (50%) */
  .journey-panel .panel-content {
    flex: 1;
    min-width: 0;
    background: transparent;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
    
    @media (max-width: 1024px) {
      padding: 3rem;
    }
    
    @media (max-width: 768px) {
      padding: 2.5rem;
    }
    
  }
  
  /* Image (50%) */
  .journey-panel .panel-image {
    flex: 1;
    min-width: 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--neutral) 0%, var(--primary-ultra-light) 100%);
    
    @media (max-width: 1024px) {
      height: 400px;
    }
    
    img {
      width: 100%;
      height: 100%;
      min-height: 500px;
      object-fit: cover;
      transition: transform 0.5s ease;
      
      @media (max-width: 1024px) {
        min-height: 400px;
      }
      
      @media (max-width: 768px) {
        min-height: 300px;
      }
    }
    
    &:hover img {
      transform: scale(1.02);
    }
  }
  
  /* Styles pour les éléments à l'intérieur du panel-content */
  /* .panel-title {
    text-transform: uppercase;
  } */
  
  .panel-list {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
    
    li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: .5rem;
      font-size: var(--text-base);
      line-height: 1.6;
      color: var(--text-color);
      
      &:last-child {
        margin-bottom: 0;
      }
      
      i {
        color: var(--primary-color);
        font-size: 1.2rem;
        margin-top: 0.1rem;
        flex-shrink: 0;
        background: var(--primary-ultra-light);
        padding: 0.5rem;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  
  .panel-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: auto;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .stat-item {
      background: var(--background-primary);
      padding: .5rem;
      border-radius: 16px;
      text-align: center;
      /* border: 2px solid var(--primary-light); */
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(43, 155, 31, 0.1);
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(43, 155, 31, 0.15);
        border-color: var(--primary-color);
        background: var(--primary-ultra-light);
      }
      
      .stat-number {
        font-size: var(--text-2xl);
        font-weight: 800;
        color: var(--accent);
        display: block;
        margin-bottom: 0.5rem;
        font-family: var(--header-font);
      }
      
      .stat-label {
        font-size: var(--text-sm);
        color: var(--text-color);
        font-weight: 500;
        line-height: 1.4;
      }
    }
  }
}


/* === ANIMATIONS POUR LE WIDGET ÉCONOMIES === */
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes checkmark-appear {
  0% { 
    transform: scale(0) rotate(0deg); 
    opacity: 0; 
  }
  50% { 
    transform: scale(1.2) rotate(180deg); 
    opacity: 0.8; 
  }
  100% { 
    transform: scale(1) rotate(360deg); 
    opacity: 1; 
  }
}


@keyframes pulse-background {
  0%, 100% { 
    opacity: 0.3; 
    transform: translate(-50%, -50%) scale(1); 
  }
  50% { 
    opacity: 0.6; 
    transform: translate(-50%, -50%) scale(1.1); 
  }
}


/* === SECTION TRUST FINALE FLOTTANTE === */
.background-trust-image {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  
  @media (min-width: 768px) {
    height: 500px;
  }
  
  @media (min-width: 1024px) {
    height: 600px;
  }
}

.floating-trust-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  .trust-icon {
    i {
      font-size: 3rem;
      color: var(--accent-color);
      background: var(--primary-ultra-light);
      padding: 1.5rem;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.1);
        background: var(--accent-color);
        color: white;
      }
    }
  }
  
  .trust-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    font-family: var(--header-font);
  }
  
  .trust-description {
    font-size: var(--text-base);
    color: var(--text-color);
    line-height: 1.6;
  }
  
  @media (max-width: 1024px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin-top: -100px;
    width: 100%;
    max-width: none;
    
    .trust-icon i {
      font-size: 2.5rem;
      width: 70px;
      height: 70px;
      padding: 1.25rem;
    }
  }
}

/* ===== SECTION GARANTIES ===== */
.garanties-section {
  background-image: url('../../assets/images/images/asset1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: hsla(47, 100%, 50%, 0.863);
    pointer-events: none;
  }

  .garanties-content {
    position: relative;
    z-index: 2;
    padding-right: 2rem;

    @media (max-width: 1024px) {
      padding-right: 0;
      margin-bottom: 3rem;
      text-align: center;
    }
  }


  .garanties-bars {
    position: relative;
    z-index: 2;
    padding-left: 2rem;

    @media (max-width: 1024px) {
      padding-left: 0;
    }
  }

  .garantie-item {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .garantie-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .garantie-label {
    font-size: var(--text-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .garantie-percentage {
    font-size: var(--text-sm);
    font-weight: 700;
  }

  .garantie-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  .garantie-progress {
    height: 100%;
    background: var(--accent-color);
    border-radius: 4px;
    position: relative;

    &[data-percentage="60"] {
      width: 60%;
    }
    &[data-percentage="80"] {
      width: 80%;
    }
    &[data-percentage="100"] {
      width: 100%;
    }
  }
}

/* Animation pour le filigrane solaire */
@keyframes solar-pulse {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1) rotate(180deg);
    opacity: 0.5;
  }
}

/* === SECTION FEATURES === */
.features-section {
  padding: 8rem 0;
  background: var(--white);

  /* Header section features */
  .features-header {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 3rem;

    .features-intro {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #64748b;
      margin: 1.5rem auto 0;
      max-width: 700px;
    }
  }

  /* Navigation sticky */
  .features-nav-sticky {
    position: sticky;
    top: 5vh;
    z-index: 10;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: rgba(248, 250, 252, 0.6);
    backdrop-filter: blur(8px);
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    margin: 0 auto 3rem;
    width: fit-content;
    transition: opacity 0.3s ease;

    /* Classe ajoutée quand l'utilisateur arrête de scroller (après 0.5s) */
    &.is-hidden {
      opacity: 0;
      pointer-events: none;
    }

    .feature-nav-link {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
      background: var(--white);
      border: 1px solid var(--border-accent);
      border-radius: 8px;
      text-decoration: none;
      color: var(--text-primary);
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.3s ease;

      i {
        display: none;
      }

      &.active {
        background: var(--accent);
        color: var(--white);
        border-color: var(--accent);
      }

      &:hover {
        background: var(--neutral);
        color: var(--accent);
        transform: translateY(-2px);
      }

      /* Responsive : même taille que trigger buttons mobile */
      @media (max-width: 1024px) {
        padding: 0.75rem 1rem;
        font-size: 0.75rem;
      }
    }
  }

  .feature-block {
    min-height: 400px;
    justify-content: space-between;
    border-radius: 12px;

    /* Feature 1 - Texte avec carte interactive */
    &.feature-text-image:not(.feature-certification) {
      display: flex;
      gap: 4rem;
      align-items: center;
      padding: 4rem;
      background: var(--white);

      @media (max-width: 1024px) {
        padding: 0;
      }

      .feature-content {
        flex: 0 0 45%;

        .feature-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 1.5rem;
          object-fit: contain;
        }

        h2 {
          margin-bottom: 1.5rem;
          color: var(--color-elisun-blue);

          .highlight-shift {
            color: var(--accent-color);
          }
        }

        p {
          margin-bottom: 2rem;
          line-height: 1.8;
          color: #64748b;
        }

        .feature-list {
          list-style: none;
          padding: 0;

          li {
            padding: 0.75rem 0;
            padding-left: 2rem;
            position: relative;

            &::before {
              content: '✓';
              position: absolute;
              left: 0;
              color: var(--primary-color);
              font-weight: bold;
              font-size: 1.2rem;
            }
          }
        }
      }

      .feature-image {
        flex: 0 0 35%;

        img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        /* Container image avec badges overlay */
        &.feature-image-with-badges {
          position: relative;

          /* Point central avec cercle de rayon d'action */
          .map-radius-center {
            position: absolute;
            top: 60%;
            left: 60%;
            transform: translate(-50%, -50%);
            z-index: 2;

            /* Cercle de rayon d'action */
            .map-radius-circle {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 500px;
              height: 500px;
              border: 3px dashed #2b9b1f;
              background-color: rgba(43, 155, 31, 0.2);
              border-radius: 50%;
              opacity: 0.4;
            }

            /* Point central */
            .map-center-point {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 16px;
              height: 16px;
              background: #2b9b1f;
              border-radius: 50%;
              box-shadow: 0 0 0 4px rgba(43, 155, 31, 0.2),
                          0 0 0 8px rgba(43, 155, 31, 0.1);
              z-index: 1;
            }
          }
        }
      }

      /* Container wrapper avec padding pour badges flottants */
      .map-image-wrapper {
        position: relative;
        padding: 0px 0px 0px 100px;

        /* Responsive : réduction padding et taille badges mobile */
        @media (max-width: 1024px) {
          padding: 0;

          .map-badge-expert,
          .map-badge-bullet,
          .map-badge-distance {
            transform: scale(0.7);
            transform-origin: top left;
          }

          .map-badge-distance {
            min-width: 180px;
            padding: 16px;
            transform: scale(0.7) translate(70%, -70%);
            transform-origin: bottom right;
          }

          .feature-image img {
            width: 100%;
            height: auto;
          }
        }

        /* Badge expert avec photos profil (haut gauche) */
        .map-badge-expert {
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          text-align: center;
          z-index: 3;
          width: fit-content;

          .expert-photos {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 10px;

            .expert-photo {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              object-fit: cover;
              border: 2px solid white;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            }
          }

          .expert-label {
            font-size: 11px;
            font-weight: 600;
            color: var(--secondary);
            line-height: 1.3;
            word-wrap: break-word;
          }
        }

        /* Badge bullet orange (haut droite) */
        .map-badge-bullet {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(40%, 50%);
          background: color-mix(in srgb, var(--background-accent) 50%, transparent);
          backdrop-filter: blur(10px);
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: none;
          align-items: center;
          gap: 8px;
          z-index: 3;
          color: white;

          .badge-icon {
            width: 20px;
            height: 20px;
            object-fit: contain;
            filter: brightness(0) invert(1);
          }
        }

        /* Badge distance avec barre de progression (bas gauche) */
        .map-badge-distance {
          position: absolute;
          bottom: 0;
          right: 0;
          transform: translate(50%, -50%);
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          padding: 24px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          min-width: 250px;
          gap: 20px;
          flex-direction: column;
          display: flex;
          z-index: 3;

          .distance-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .distance-label {
              font-size: 12px;
              font-weight: 500;
              line-height: 1.2;
            }

            .distance-value {
              font-size: 14px;
              font-weight: 700;
              color: var(--accent);
              line-height: 1;
            }
          }

          .progress-bar-container {
            width: 100%;

            .progress-bar-track {
              position: relative;
              width: 100%;
              height: 4px;
              background: var(--neutral-medium);
              border-radius: 2px;

              .progress-bar-fill {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                background: var(--accent);
                border-radius: 2px;
              }

              .progress-cursor {
                position: absolute;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 12px;
                height: 12px;
                background: var(--accent);
                border: 2px solid white;
                border-radius: 50%;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
              }
            }
          }
        }
      }

    }

    /* Feature 2 - Contenu SolarDirect avec tetris grid */
    &.solardirect-content {
      background: linear-gradient(90deg, #FBAF00CC, var(--background-accent) 100%)
      ,url('../../assets/images/background/bg-solardirect.jpg') center/cover no-repeat
      ;
      /* background: var(--background-accent); */

      .top-content {
        display: flex;
        align-items: center;
        min-height: 400px;
        padding: 0 48px;

        @media (max-width: 1024px) {
          padding: 0 12px;
        }

        .character-container {
          position: relative;
          z-index: 2;
          flex: 0 0 45%;

          img {
            width: 100%;
            height: auto;
            margin: -4rem 0rem -8rem -4rem;
          }

        }

        .text-content {
          padding: 2rem 0;
          flex: 1;

          .feature-icon {
            width: 80px;
            height: 80px;
            margin-bottom: 1.5rem;
            object-fit: contain;
          }

          h2 {
            margin-bottom: 1.5rem;

            .highlight-shift {
              font-weight:700;
            }
          }

          p {
            line-height: 1.8;
          }
        }
      }

      /* Tetris Grid - 6 colonnes */
      .tetris-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        width: 95%;
        margin: 0 auto;
        padding: 0;
        position: relative;
        z-index: 5;
        overflow: hidden;

        /* Responsive : 2 colonnes mobile */
        @media (max-width: 1024px) {
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          width: 100%;
        }

        /* Colonnes tetris - empilage vertical des cards */
        .tetris-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: flex-end;
          position: relative;
          bottom: -10px;

          &.tetris-column-double {
            grid-column: span 2;
          }
        }

        /* Sous-grille pour colonnes 4-5 : petites cards + grande card */
        .tetris-subgrid {
          grid-column: span 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 1rem;
          align-content: flex-end;
          position: relative;
          bottom: -10px;

          /* Les 2 premières cards : 1 colonne chacune, ligne 1 */
          .tetris-card:nth-child(1) {
            grid-column: 1;
            grid-row: 1;
          }

          .tetris-card:nth-child(2) {
            grid-column: 2;
            grid-row: 1;
          }

          /* 3ème card : span 2 colonnes, ligne 2 */
          .tetris-card:nth-child(3) {
            grid-column: 1 / span 2;
            grid-row: 2;
          }
        }

        /* Styles des cards */
        .tetris-card {
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;

          /* Contrainte globale : tous les p à 12px sauf exceptions */
          p {
            font-size: 12px;
          }

          /* Classe dédiée pour paragraphes tetris-cards */
          .tetris-text {
            font-size: 12px;
            margin-bottom: 0;
            line-height: 1.5;
          }


          &.card-stat {
            background-image:
              linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 100%),
              url('/src/assets/images/background/bg-connected.png');
            background-size: cover;
            background-position: center;
            color: var(--white);
            justify-content: center;
            align-items: flex-start;
            text-align: left;
            position: relative;

            /* Filtre pour rendre les blancs verts */
            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: url('/src/assets/images/background/bg-connected.png');
              background-size: cover;
              background-position: center;
              filter: brightness(0.8) sepia(1) hue-rotate(60deg) saturate(3);
              opacity: 0.7;
              z-index: 0;
              pointer-events: none;
              transform: scaleX(-1);
            }

            .stat-number {
              font-size: 3.5rem;
              font-weight: bold;
              line-height: 1;
              margin-bottom: 0.5rem;
              color: var(--white);
              position: relative;
              z-index: 1;
            }

            p {
              opacity: 0.9;
              position: relative;
              z-index: 1;
            }
          }

          &.card-stat-small {
            background-image: url('/src/assets/images/images/home-solar-panel-battery-storage.webp');
            background-size: cover;
            background-position: center bottom;
            color: var(--accent);
            text-align: left;
            justify-content: flex-start;
            align-items: flex-start;
            min-height: 350px;
            padding: 2rem 1.5rem;

            .stat-number-small {
              font-size: 2.5rem;
              font-weight: bold;
              line-height: 1;
              margin-bottom: 0.5rem;
              color: var(--accent);
            }

            p {
              font-size: 12px;
              font-weight: 600;
              color: var(--accent);
            }
          }

          &.card-certification {
            background-image: url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400');
            background-size: cover;
            background-position: center;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 200px;

            &.card-video {
              background-image: url('/src/assets/images/images/thumbnail.png');
              background-size: cover;
              background-position: center;
              position: relative;
              cursor: pointer;
              transition: transform 0.3s ease;

              &:hover {
                transform: scale(1.02);

                .play-button {
                  transform: scale(1.1);
                  background: var(--accent);
                }
              }

              .video-thumbnail {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                .play-button {
                  width: 60px;
                  height: 60px;
                  background: rgba(255, 255, 255, 0.9);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all 0.3s ease;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

                  svg {
                    width: 24px;
                    height: 24px;
                    color: var(--black);
                    margin-left: 4px;
                  }
                }
              }
            }
          }

          &.card-testimonial {
            background: var(--white);
            justify-content: space-between;
            padding: 2rem;
            color: var(--black);

            p {
              font-style: italic;
              margin-bottom: 1rem;
            }

            .testimonial-author {
              margin-top: 1rem;
              padding-top: 1rem;
              border-top: 2px solid var(--accent);
            }

            &.card-testimonial-swiper {
              background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
              padding: 0;
              overflow: hidden;
              position: relative;

              /* Texture background */
              &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: linear-gradient(85deg, var(--background-secondary), var(--background-secondary-o8 ));
                z-index: 0;
              }

              .testimonial-slider {
                display: flex;
                gap: 1rem;
                position: relative;
                z-index: 1;
                padding: 1rem 1rem 0rem 1rem;

                .testimonial-image {
                  width: 90%;
                  height: auto;
                  flex-shrink: 0;
                  border-radius: 8px;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }
              }
            }
          }

          &.card-testimonial-short {
            background: var(--white);
            justify-content: space-between;
            color: var(--black);

            p {
              font-style: italic;
              margin-bottom: 0.5rem;
            }

            strong {
              color: var(--accent);
            }
          }

          &.card-mixed-bg {
            /* background-image:
              linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
              url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400');
            background-size: cover;
            background-position: center; */
            background-color: #02133f;
            color: var(--white);
            justify-content: flex-end;

            .card-mixed-content {
              position: relative;
              z-index: 1;

              .stat-number-small {
                font-size: 2.5rem;
                font-weight: bold;
                line-height: 1;
                margin-bottom: 0.5rem;
                color: var(--white);
              }

              .tetris-text {
                color: var(--white);
              }
            }
          }

          &.card-info {
            background: var(--white);
            padding: 2rem;
            color: var(--black);

            strong {
              color: var(--accent);
            }

            &.card-info-solardirect {
              background-image:
                linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.85) 100%),
                url('/src/assets/images/images/asset2.png');
              background-size: cover;
              background-position: center;
              min-height: 300px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              padding: 2rem;
              color: var(--white);

              .card-info-content {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;

                strong {
                  font-size: 1.5rem;
                  color: var(--white);
                  margin-bottom: 0.5rem;
                }

                p {
                  font-size: 12px;
                  line-height: 1.5;
                  margin: 0;
                }

                .card-info-link {
                  display: inline-block;
                  color: var(--accent);
                  font-weight: 600;
                  font-size: 12px;
                  text-decoration: none;
                  transition: all 0.3s ease;
                  margin-top: 0.5rem;

                  &:hover {
                    color: var(--white);
                    transform: translateX(4px);
                  }
                }
              }
            }
          }

          &.card-badge {
            background: var(--white);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 1rem;
            border: 2px solid var(--accent);

            svg {
              width: 40px;
              height: 40px;
              margin-bottom: 0.5rem;
              color: var(--accent);
            }

            p {
              font-size: 12px;
              font-weight: 600;
              color: var(--black);
            }

            &.card-france {
              background-image: url('/src/assets/images/images/france-vert.png');
              background-size: cover;
              background-position: top left;
              position: relative;
              border: none;
              padding: 1.5rem;
              justify-content: flex-start;
              align-items: flex-start;


              .card-france-content {
                position: relative;
                z-index: 1;
                text-align: left;

                strong {
                  font-size: 16px;
                  color: var(--white);
                }

                p {
                  font-size: 12px;
                  font-weight: 600;
                  color: var(--white);
                }
              }
            }
          }
        }
      }
    }

    /* Feature 3 - Certifications avec badges flottants */
    &.feature-certification {
      display: flex;
      gap: 3rem;
      align-items: center;
      padding: 4rem;
      background: var(--white);

      @media (max-width: 1024px) {
        padding: 0;
      }

      .feature-content {
        flex: 0 0 45%;

        .feature-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 1.5rem;
          object-fit: contain;
        }

        h2 {
          margin-bottom: 1.5rem;
          color: var(--color-elisun-blue);

          .highlight-shift {
            color: var(--accent-color);
          }
        }

        p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #64748b;
        }

        .stats-container {
          margin-bottom: 2rem;
        }

        .btn-primary {
          margin-top: 1rem;
        }
      }

      /* Container wrapper avec padding pour badges flottants */
      .certification-image-wrapper {
        position: relative;
        padding-left: 60px;
        flex: 0 0 50%;

        /* Responsive : réduction padding et taille badges mobile */
        @media (max-width: 1024px) {
          padding-left: 0;
          flex: 1;

          .certifications-container,
          .certification-badge {
            transform: scale(0.75);
            transform-origin: top left;
          }

          .feature-image img {
            width: 100%;
            height: auto;
            aspect-ratio: 4/3;
          }
        }

        .feature-image {
          img {
            width: 100%;
            aspect-ratio: 3/4;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
        }

        /* Styles communs pour tous les badges de certification */
        .certification-badge {
          position: absolute;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          z-index: 3;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;

          /* Badge certification individuel */
          &.badge-cert {
            padding: 8px;
            position: relative;
            display: block;
            width: auto;
            height: auto;

            .cert-check {
              position: absolute;
              top: -8px;
              left: -8px;
              width: 24px;
              height: 24px;
              background: var(--accent);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
              border: 2px solid white;
              z-index: 1;

              i {
                color: white;
                font-size: 12px;
              }
            }

            .cert-logo {
              width: 60px;
              height: 60px;
              max-width: none;
              object-fit: contain;
              display: block;
            }
          }

          /* Badge expérience adapté au format certification */
          &.badge-experience-cert {
            background: color-mix(in srgb, var(--background-accent) 70%, transparent);
            backdrop-filter: blur(10px);

            .experience-content {
              width: 60px;
              height: 60px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: white;
              text-align: center;
              gap: 0;

              .experience-number {
                font-size: 26px;
                font-weight: 900;
                line-height: 1;
              }

              .experience-unit {
                font-size: 11px;
                font-weight: 600;
                line-height: 1.2;
              }

              .experience-label {
                font-size: 7px;
                font-weight: 500;
                line-height: 1;
                opacity: 0.9;
                margin-top: 1px;
              }
            }
          }


          /* Badge témoignage client (centre droite) */
          &.badge-review {
            right: 0px;
            bottom: 48px;
            transform: translateX(40%);
            flex-direction: column;
            gap: 12px;
            padding: 16px;
            max-width: 200px;
            text-align: center;

            .review-avatar {
              width: 48px;
              height: 48px;
              border-radius: 50%;
              object-fit: cover;
              border: 3px solid var(--accent);
              margin: 0 auto;
            }

            .review-content {
              display: flex;
              flex-direction: column;
              gap: 8px;

              .review-stars {
                display: flex;
                gap: 2px;
                justify-content: center;

                i {
                  color: #fbbf24;
                  font-size: 12px;
                }
              }

              .review-text {
                font-size: 11px;
                line-height: 1.4;
                color: var(--text-primary);
                font-style: italic;
                margin: 0;
              }

              .review-author {
                font-size: 11px;
                font-weight: 700;
                color: var(--primary);
                line-height: 1;
              }
            }
          }
        }

        /* Container pour badges certifications (haut gauche) */
        .certifications-container {
          position: absolute;
          top: 48px;
          left: 12px;
          display: flex;
          gap: 8px;
          z-index: 3;
        }
      }
    }
  }
}

/* ===== SUIVI ENERGETIQUE SECTION ===== */
.suivi-energetique-section {
  background-color: var(--background-primary);
  padding: var(--spacing-20) 0;
  position: relative;

  .feature-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 1.5rem;
    object-fit: contain;
  }

  .hero-image {
    border-radius: 16px;
    overflow: hidden;
    height: 800px;
    width: 450px;
    box-shadow: -15px 15px 0px var(--border-accent);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .image-preparation {
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-radius: 16px;
    height: 250px;
    width: 250px;
    transform: translate(75%, -25%);
    border: 1px solid var(--border-accent);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  /* Panneaux badges container */
  .panneaux-badges-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 32px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .panneau-badge-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      .badge-icon {
        font-size: 1.5rem;
        color: var(--text-dark);
        margin-bottom: 4px;
      }

      .badge-text {
        .badge-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--black);
          line-height: 1;
          margin-bottom: 4px;

          span {
            font-size: 1rem;
            font-weight: 400;
          }
        }

        .badge-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          line-height: 1.2;
        }
      }
    }
  }
}

/* === SECTION PANNEAUX SOLAIRES - PAGE MATÉRIEL === */
.panneaux-solaires-section {
  background: var(--gray-light);
  padding: 0;
  position: relative;
  display: flex;
  align-items: stretch;

  .containerMax {
    display: flex;
    align-items: center;
    padding-top: 0;
  }

  .panneaux-split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: stretch;
    width: 100%;
    min-height: 100vh;
    padding-top: 80px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .panneaux-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 32px;
      line-height: 1.2;
    }

    .panneaux-features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 48px 0;

      li {
        margin-bottom: 12px;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-dark);

        i {
          margin-right: 12px;
          font-size: 1.25rem;
        }
      }
    }

    .panneaux-badges-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      border-top: 1px solid #e5e7eb;
      padding-top: 32px;

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .panneau-badge-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        .badge-icon {
          font-size: 1.5rem;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .badge-text {
          .badge-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--black);
            line-height: 1;
            margin-bottom: 4px;

            span {
              font-size: 1rem;
              font-weight: 400;
            }
          }

          .badge-label {
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--text-muted);
            text-transform: uppercase;
            line-height: 1.2;
          }
        }
      }
    }
  }

  .panneaux-image {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    overflow: hidden;

    img {
      /* display: none; */
      position: absolute;
      width: 90%;
      align-self: flex-start;
      height: 120%;
      max-width: 600px;
      object-fit: contain;
      filter: drop-shadow(0 5px 15px grey);
    }
  }
}

/* === SECTION ONDULEURS - PAGE MATÉRIEL === */
.onduleurs-section {
  background: var(--white);
  padding: 0;
  position: relative;
  display: flex;
  align-items: stretch;

  .containerMax {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    gap: 40px;
    width: 100%;
  }

  .trigger-block {
    margin-bottom: 0;
  }

  /* Slider onduleurs */
  .onduleur-slider {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .onduleur-slider-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 200%; /* 2 slides = 200% */
  }

  .onduleur-slide {
    min-width: 50%;     /* 50% du track (200%) = 100% du viewport */
    width: 50%;         /* Idem pour garantir la largeur correcte */
    flex-shrink: 0;
  }

  /* Classe pour déplacer le slider vers la slide 2 (sera ajoutée via JS) */
  .onduleur-slider-track.slide-1 {
    transform: translateX(-50%);
  }

  .onduleurs-split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: stretch;
    width: 100%;
    min-height: 100vh;
    padding-top: 80px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .onduleurs-image {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;

    img {
      width: 95%;
      height: auto;
      max-width: 550px;
      object-fit: contain;
      filter: drop-shadow(0 5px 15px grey);
    }
  }

  .onduleurs-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 32px;
      line-height: 1.2;
      color: var(--black);
    }

    .onduleurs-features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 48px 0;

      li {
        margin-bottom: 12px;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-dark);

        i {
          margin-right: 12px;
          font-size: 1.25rem;
        }
      }
    }

    .onduleurs-badges-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      padding-top: 32px;

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .onduleur-badge-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        .badge-icon {
          font-size: 1.5rem;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .badge-text {
          .badge-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--black);
            line-height: 1;
            margin-bottom: 4px;

            span {
              font-size: 1rem;
              font-weight: 400;
            }
          }

          .badge-label {
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--text-muted);
            text-transform: uppercase;
            line-height: 1.2;
          }
        }
      }
    }
  }
}

/* === SECTION STOCKAGE - PAGE MATÉRIEL === */
.stockage-section {
  background: var(--gray-light);
  padding: 0;
  position: relative;
  display: flex;
  align-items: stretch;

  .containerMax {
    display: flex;
    align-items: center;
    padding-top: 80px;
    width: 100%;
  }

  /* Slider stockage */
  .stockage-slider {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .stockage-slider-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 200%; /* 2 slides = 200% */
  }

  .stockage-slide {
    min-width: 50%;     /* 50% du track (200%) = 100% du viewport */
    width: 50%;         /* Idem pour garantir la largeur correcte */
    flex-shrink: 0;
  }

  /* Classe pour déplacer le slider vers la slide 2 (sera ajoutée via JS) */
  .stockage-slider-track.slide-1 {
    transform: translateX(-50%);
  }

  .stockage-split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: stretch;
    min-height: 100vh;
    width: 100%;
    padding-top: 80px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .stockage-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 32px;
      line-height: 1.2;
    }

    .stockage-features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 48px 0;

      li {
        margin-bottom: 12px;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-dark);

        i {
          margin-right: 12px;
          font-size: 1.25rem;
        }
      }
    }

    .stockage-badges-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      border-top: 1px solid #e5e7eb;
      padding-top: 32px;

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .stockage-badge-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        .badge-icon {
          font-size: 1.5rem;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .badge-text {
          .badge-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--black);
            line-height: 1;
            margin-bottom: 4px;

            span {
              font-size: 1rem;
              font-weight: 400;
            }
          }

          .badge-label {
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--text-muted);
            text-transform: uppercase;
            line-height: 1.2;
          }
        }
      }
    }
  }

  .stockage-image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      width: 90%;
      height: auto;
      max-width: 600px;
      min-height: 80vh;
      object-fit: contain;
      filter: drop-shadow(0 5px 15px grey);
    }
  }
}

/* === CERTIFICATIONS CONTAINER SUR IMAGES - PAGE MATÉRIEL === */
.product-certifications-container {
  position: absolute;
  /* Position par défaut : centre bas */
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;

  /* Modifieur : coin supérieur gauche */
  &.top-left {
    bottom: 60vh;
    top: auto;
    left: 40px;
    right: auto;
    transform: none;
  }

  /* Modifieur : coin supérieur droit */
  &.top-right {
    bottom: 60vh;
    top: auto;
    right: 12px;
    left: auto;
    transform: none;
  }

  /* Modifieur : coin inférieur gauche */
  &.bottom-left {
    bottom: 20px;
    top: auto;
    left: 0px;
    right: auto;
    transform: none;
  }

  /* Modifieur : coin inférieur droit */
  &.bottom-right {
    bottom: 20px;
    right: 0px;
    left: auto;
    transform: none;
  }

  .certification-badge {
    &.badge-cert {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      /* padding: 8px; */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 76px;       /* 60px (contenu) + 8px (padding) × 2 */
      height: 76px;      /* Idem pour garantir taille fixe */
      transition: transform 0.3s ease;
      overflow: hidden;

      &:hover {
        transform: translateY(-2px);
      }

      .cert-text {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        color: var(--black);
        text-align: center;
      }

      .cert-logo {
        width: 76px;
        height: 76px;
        object-fit: contain;
        display: block;
      }
    }
  }
}

/* === SYSTÈME ACCORDÉON CARACTÉRISTIQUES TECHNIQUES === */
.section-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.toggle-specs-btn {
  margin-top: 24px;
  background: transparent;
  border: none;
  color: var(--accent-color);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  .toggle-icon {
    transition: transform 0.3s ease;
  }

  &.active {
    .toggle-icon {
      transform: rotate(180deg);
    }
  }
}

.specs-container {
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease;
  interpolate-size: allow-keywords;

  &.active {
    height: auto;

  }

  img {
    width: 100%;
    height: auto;
    display: block;
    padding: 80px 0;
  }

  /* Styles pour les tables techniques */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 40px 0;
    font-size: 15px;
    line-height: 1.6;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    overflow: hidden;

    thead {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

      tr {
        th {
          padding: 16px 20px;
          text-align: left;
          font-weight: 600;
          font-size: 16px;
          border-bottom: 2px solid #dee2e6;
        }
      }
    }

    tbody {
      tr {
        transition: background-color 0.2s ease;

        &:nth-child(even) {
          background-color: #f8f9fa;
        }

        &:hover {
          background-color: #e7f3ff;
        }

        td {
          padding: 14px 20px;
          border-bottom: 1px solid #e9ecef;
          vertical-align: top;

          &:first-child {
            font-weight: 500;
            color: #495057;
            width: 45%;
          }

          &:last-child {
            color: #212529;
          }
        }

        &:last-child td {
          border-bottom: none;
        }
      }
    }
  }

  /* Responsive mobile */
  @media (max-width: 768px) {
    table {
      font-size: 14px;

      thead tr th {
        padding: 12px 16px;
        font-size: 15px;
      }

      tbody tr td {
        padding: 10px 16px;

        &:first-child {
          width: 50%;
        }
      }
    }
  }
}
