/**
 * Configuration et initialisation des carousels Swiper ELISUN
 * Gestion des témoignages, galerie réalisations et autres carousels
 */

export class SwiperConfig {
    constructor() {
        this.swipers = new Map();
        this.init();
    }

    init() {
        // Initialiser tous les carousels après chargement du DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initAllSwipers());
        } else {
            this.initAllSwipers();
        }
    }

    initAllSwipers() {
        this.initTestimonialsSwiper();
        this.initGallerySwiper();
    }

    // Configuration Swiper témoignages clients
    initTestimonialsSwiper() {
        const swiperElement = document.querySelector('.testimonials-swiper');
        if (!swiperElement) return;

        const testimonialSwiper = new Swiper('.testimonials-swiper', {
            // Configuration de base
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            
            // Navigation
            navigation: {
                nextEl: '.testimonials-next',
                prevEl: '.testimonials-prev',
            },
            
            // Responsive breakpoints
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
            
            // Effets et transitions
            effect: 'slide',
            speed: 600,
            
            // Callbacks pour animations personnalisées
            on: {
                slideChange: () => {
                    this.onTestimonialSlideChange();
                },
                init: () => {
                    console.log('Swiper témoignages initialisé');
                }
            }
        });

        this.swipers.set('testimonials', testimonialSwiper);
    }

    // Configuration Swiper galerie réalisations
    initGallerySwiper() {
        const swiperElement = document.querySelector('.gallery-swiper');
        if (!swiperElement) return;

        const gallerySwiper = new Swiper('.gallery-swiper', {
            // Configuration galerie
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            
            // Navigation
            navigation: {
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
            },
            
            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3.2,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 4.2,
                    spaceBetween: 30,
                },
            },
            
            // Effet paralaxe pour les images
            parallax: true,
            speed: 800,
            
            // Lazy loading des images
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 2,
            },
            
            // Callbacks
            on: {
                slideChange: () => {
                    this.onGallerySlideChange();
                },
                click: (swiper, event) => {
                    this.onGalleryImageClick(event);
                }
            }
        });

        this.swipers.set('gallery', gallerySwiper);
    }

    // Callback changement slide témoignages
    onTestimonialSlideChange() {
        // Animation d'apparition du contenu
        const activeSlide = document.querySelector('.testimonials-swiper .swiper-slide-active');
        if (activeSlide) {
            const content = activeSlide.querySelector('.testimonial-content');
            if (content) {
                content.style.opacity = '0';
                content.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    content.style.transition = 'all 0.6s ease';
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }, 100);
            }
        }
    }

    // Callback changement slide galerie
    onGallerySlideChange() {
        // Effet d'échelle sur l'image active
        const slides = document.querySelectorAll('.gallery-swiper .swiper-slide');
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img) {
                if (slide.classList.contains('swiper-slide-active')) {
                    img.style.transform = 'scale(1.05)';
                } else {
                    img.style.transform = 'scale(1)';
                }
            }
        });
    }

    // Gestion clic sur image galerie pour lightbox (optionnel)
    onGalleryImageClick(event) {
        const clickedImage = event.target.closest('img');
        if (clickedImage) {
            // Ici on pourrait ouvrir une lightbox
            console.log('Image cliquée:', clickedImage.alt);
            // this.openLightbox(clickedImage);
        }
    }

    // Méthodes utilitaires
    destroySwiper(swiperName) {
        const swiper = this.swipers.get(swiperName);
        if (swiper) {
            swiper.destroy(true, true);
            this.swipers.delete(swiperName);
        }
    }

    pauseAutoplay(swiperName) {
        const swiper = this.swipers.get(swiperName);
        if (swiper && swiper.autoplay) {
            swiper.autoplay.stop();
        }
    }

    resumeAutoplay(swiperName) {
        const swiper = this.swipers.get(swiperName);
        if (swiper && swiper.autoplay) {
            swiper.autoplay.start();
        }
    }

    // Méthode pour redimensionnement responsive
    handleResize() {
        this.swipers.forEach((swiper) => {
            if (swiper) {
                swiper.update();
            }
        });
    }

    // Nettoyage pour éviter les fuites mémoire
    destroy() {
        this.swipers.forEach((swiper, name) => {
            this.destroySwiper(name);
        });
    }
}

// Initialisation automatique
export function initSwipers() {
    return new SwiperConfig();
}