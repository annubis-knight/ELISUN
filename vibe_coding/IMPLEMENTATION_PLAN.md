# 📊 Plan d'implémentation et suivi de progression

**Utilité** : Roadmap complète + état d'avancement en temps réel du projet
**Usage** : Planification initiale + mise à jour après chaque session de développement
**Pour l'IA** : Ce fichier indique la séquence logique de développement ET où nous en sommes. 
Respectez l'ordre des phases, vérifiez les dépendances, et mettez à jour le statut après 
chaque contribution significative.


## 🗺️ ROADMAP DÉTAILLÉE - PROJET ELISUN (VERSION FUSIONNÉE)

### 📋 PHASE 1 : CONFIGURATION ET ARCHITECTURE (Jour 1)

#### 1.1 Initialisation du projet
- [X] Créer le dossier racine `ClaudeCode-ELISUN`
- [X] Initialiser le projet npm (`npm init`)
- [X] Créer la structure de dossiers complète selon ARCHITECTURE.md
- [X] Initialiser Git et créer `.gitignore`
- [X] Créer le fichier `README.md`
- **🎯 Checkpoint** : ✅ Validation de l'architecture de base

#### 1.2 Configuration des outils de build
- [X] Installer Webpack et ses dépendances
- [X] Configurer `webpack.config.js` pour dev et prod
- [X] Installer et configurer Tailwind CSS v3.4.17
- [X] Créer `tailwind.config.js` basique (sans thème)
- [X] Configurer CSS loader (PAS de SCSS - CSS pur uniquement)
- **🎯 Checkpoint** : ✅ Tests de build CSS et JS

#### 1.3 Installation des dépendances
- [X] Installer GSAP
- [X] Installer Lenis
- [X] Installer les loaders Webpack nécessaires
- [X] Configurer les scripts NPM dans `package.json`
- [X] Tester `npm run dev` et `npm run build`
- [X] **AJOUTÉ** : Résoudre erreurs npm run dev (fichiers JS/HTML manquants)
- [X] **AJOUTÉ** : Créer structure complète fichiers JS (components, animations, utils)
- [X] **AJOUTÉ** : Créer pages HTML de base (about, services, contact)
- [X] **AJOUTÉ** : Configurer gestion ports occupés (kill-port)
- **🎯 Checkpoint** : ✅ Environnement de développement fonctionnel

#### 1.4 Structure CSS de base
- [X] Créer `src/css/base/reset.css`
- [X] Créer `src/css/base/variables.css` (couleurs EliSun)
- [X] Créer `src/css/base/typography.css`
- [X] Créer `src/css/base/utilities.css`
- [X] Créer `src/css/main.css` avec imports Tailwind + customs
- **🎯 Checkpoint** : ✅ Styles de base appliqués

### 🎨 PHASE 2 : DÉVELOPPEMENT DE LA LANDING PAGE (Jours 2-3) ✅ TERMINÉE

#### 2.1 Structure HTML de base ✅
- [X] Créer `src/pages/index.html` avec structure sémantique
- [X] Définir les sections principales (Header, Hero, Services, Advantages, About, Contact, Footer)
- [X] Ajouter les balises meta essentielles + Google Fonts
- [X] Intégrer les liens vers CSS et JS
- [X] **AJOUTÉ** : Inspiration Solar Direct intégrée
- **🎯 Checkpoint** : ✅ Structure HTML validée

#### 2.2 Développement du Header ✅
- [X] Créer `src/css/components/header.css`
- [X] Développer le HTML du header avec logo et navigation améliorée
- [X] Header fixe avec backdrop-blur et shadow
- [X] Logo avec icône et animations hover
- [X] Navigation responsive + boutons d'action
- [X] Styler le header avec Tailwind + CSS custom
- [X] Burger menu mobile préparé
- **🎯 Checkpoint** : ✅ Header professionnel et responsive

#### 2.3 Section Hero ✅
- [X] Développer le HTML de la section hero avec layout split
- [X] Hero full-height avec grid 2 colonnes responsive
- [X] Contenu enrichi : titre impact + stats + visuels
- [X] Boutons CTA avec icônes et animations
- [X] Placeholder visuel avec éléments décoratifs
- [X] Typography hiérarchisée et claire
- **🎯 Checkpoint** : ✅ Hero section moderne finalisée

#### 2.4 Section Services ✅
- [X] Créer la structure HTML des services avec 3 cards détaillées
- [X] Cards avec icônes, listes de fonctionnalités et hover effects
- [X] Grid responsive avec spacing optimal
- [X] CTA section intégrée pour simulation
- [X] Couleurs thématiques par service (bleu/vert/jaune)
- [X] Typography et hiérarchie parfaites
- **🎯 Checkpoint** : ✅ Section services professionnelle complète

#### 2.5 Section Avantages + À propos ✅
- [X] **AJOUTÉ** : Section avantages avec 4 piliers (économies, environnement, autonomie, valorisation)
- [X] **AJOUTÉ** : Icônes et grid 4 colonnes responsive
- [X] Structurer le HTML de la section à propos avec storytelling familial
- [X] Stats visuelles dans cards blanches
- [X] Contenu enrichi sur l'expertise et l'expérience
- [X] Visuel placeholder avec éléments décoratifs
- [X] Styler avec grille Tailwind et spacing optimisé
- **🎯 Checkpoint** : ✅ Sections avantages et à propos finalisées

#### 2.6 Section Contact ✅
- [X] Créer le formulaire de contact HTML multi-champs professionnel
- [X] Formulaire avec validation visuelle et labels
- [X] Champs : prénom, nom, email, téléphone, code postal, type projet, message
- [X] Section info avec avantages EliSun et contact direct
- [X] Design en 2 colonnes avec backgrounds et spacing
- [X] Styling focus states et accessibilité
- **🎯 Checkpoint** : ✅ Formulaire de contact professionnel fonctionnel

#### 2.7 Footer ✅
- [X] Développer le HTML du footer complet avec 4 colonnes
- [X] Logo, description, liens sociaux
- [X] Sections services et contact structurées
- [X] Footer bottom avec mentions légales et certification RGE
- [X] Styling responsive avec spacing optimal
- [X] Links hover effects et focus states
- **🎯 Checkpoint** : ✅ Footer complet et professionnel

### 🏠 PHASE 3 : LANDING PAGE (Jours 3-4) ✅ TERMINÉE

#### 3.1 Section Hero ✅
- [X] HTML structure hero avec title/baseline/CTA
- [X] CSS hero responsive (mobile-first) avec pattern containerMax
- [X] JavaScript hero.js (interactions, stats hover, navigation scroll)
- [X] **AJOUTÉ** : Interactions CTA avec navigation intelligente
- [X] Test hero sur tous devices
- **🎯 Checkpoint** : ✅ Hero interactif et responsive

#### 3.2 Section Bénéfices ✅ COMPLÈTE + AMÉLIORATIONS UX + REFACTORING 2025-01-16
- [X] **STRUCTURE** : HTML grille 3x2 + side image (maison panneaux solaires 40% desktop)
- [X] **CONTENUS ENRICHIS** : H2 + 6 bénéfices avec messages validés contenu_landing.md
- [X] **PERSONNALISATION AVATARS** : Tons adaptés retraités/couples/pros dans les 6 bénéfices
- [X] **CSS AVANCÉ** : Hover effects, animations icônes, tons solaires EliSun, responsive
- [X] **INTERACTIONS JS** : benefits.js avec animations scroll, hover cards, stats dynamiques
- [X] **FONCTIONNALITÉS SPÉCIFIQUES** : Mini-calculateur intégré économies par profil
- [X] **CONTENUS DIFFÉRENCIANTS** : Arguments concurrentiels (exclusivité HiConics, SolarDirect, etc.)
- [X] **OBJECTIONS ANTICIPÉES** : Messages rassurants intégrés (garanties, transparence, accompagnement)
- [X] Pattern containerMax → grid-tailwind + optimisation mobile
- [X] **AMÉLIORATION 2025-09-10** : Refonte design complète (fond blanc vs vert)
- [X] **AMÉLIORATION 2025-09-10** : Remplacement images par icônes Font Awesome taille XL
- [X] **AMÉLIORATION 2025-09-10** : Système hover révélation texte avec `interpolate-size: allow-keywords`
- [X] **AMÉLIORATION 2025-09-10** : Suppression design cards au profit d'un style épuré
- [X] **AMÉLIORATION 2025-09-10** : Ajout check icons verts sur statistiques de fin
- [X] **AMÉLIORATION 2025-09-10** : JavaScript gestion bénéfice actif dynamique au hover
- [X] **REFACTORING 2025-01-16** : Structure bento-grid complète (step-indicator-v3 + tab-button + 3 cards/bénéfice)
- [X] **REFACTORING 2025-01-16** : Migration CSS sectionTest.css → sections.css avec nesting hiérarchique
- [X] **REFACTORING 2025-01-16** : Variantes tab-button (.tab-button-white + .tab-button-green)
- [X] **REFACTORING 2025-01-16** : Animation scroll reveal fade-in/fade-out (opacity 0→1 + translateY)
- [X] **REFACTORING 2025-01-16** : Parallaxe smooth gallery avec LERP (factor 0.1, déplacement -0.2*scroll, ±200px)
- [X] **REFACTORING 2025-01-16** : Hystérésis anti-flickering (seuils 30% apparition / 10% disparition = zone morte 20%)
- [X] **REFACTORING 2025-01-16** : Documentation exhaustive avec schémas ASCII + commentaires émojis
- **🎯 Checkpoint** : ✅ Section bénéfices 100% terminée + animations modernes + hystérésis

#### 3.3 Section Parcours Client ✅ COMPLÈTE + REFONTE LAYOUT
- [X] **STRUCTURE** : HTML frise 4 étapes + layout zébré (images alternées) + responsive
- [X] **CONTENUS ENRICHIS** : H2 + 4 étapes détaillées avec messages validés contenu_landing.md
- [X] **PERSONNALISATION AVATARS** : Process adapté par profil (retraités focus sécurité, couples innovation, pros ROI)
- [X] **CSS AVANCÉ** : Animations timeline, hover effects étapes, design moderne responsive
- [X] **INTERACTIONS JS** : customer-journey.js avec progression visuelle, micro-interactions
- [X] **FONCTIONNALITÉS SPÉCIFIQUES** : Formulaire simulation intégré étape 1, tracking étapes
- [X] **CONTENUS DIFFÉRENCIANTS** : Différence local/national, exclusivités ELISUN par étape
- [X] **OBJECTIONS ANTICIPÉES** : Messages rassurants délais, qualité, suivi par étape
- [X] **PREUVES SOCIALES** : Témoignages micro intégrés par étape selon avatar
- [X] Pattern containerMax → grid-tailwind + optimisation mobile timeline
- [X] **REFONTE 2025-09-10** : Création containers journey avec numéros post-it (z-index élevé)
- [X] **REFONTE 2025-09-10** : Ajout sous-titres aux onglets avec layout flexible
- [X] **REFONTE 2025-09-10** : Intégration flèches entre étapes (images réelles vs pseudo-éléments)
- [X] **REFONTE 2025-09-10** : Implémentation layout quinconce avec padding asymétrique
- [X] **REFONTE 2025-09-10** : État actif container avec background vert clair `:has()` selector
- [X] **REFONTE 2025-09-10** : Panels journey full-width 50vw avec flexbox
- [X] **REFONTE 2025-09-10** : Border-radius complémentaires (gauche vs droite)
- [X] **REFONTE 2025-09-10** : Flèches alternées (normal/renversée) selon position paire/impaire
- **🎯 Checkpoint** : ✅ Section parcours client 100% terminée et optimisée + Layout sophistiqué

#### 3.5 Refactoring CSS et simplification HTML ✅ AJOUTÉ
- [X] **PALETTE COULEURS** : Vert `#2b9b1f` + orange doux `#fb923c` + blanc dominant
- [X] **SYSTÈME CSS** : Fichier `sections.css` avec nesting et variables CSS complètes
- [X] **SIMPLIFICATION HTML** : Suppression classes Tailwind verboses pour lisibilité
- [X] **CLASSES SÉMANTIQUES** : Utilisation ciblée (`.hero-section`, `.benefits-section`)
- [X] **SÉLECTEURS INTELLIGENTS** : CSS enfants, adjacents pour éviter multiplication classes
- [X] **SÉPARATION RESPONSABILITÉS** : HTML structure, CSS styling complet
- **🎯 Checkpoint** : ✅ Code plus simple, clair et maintenable

#### 3.4 Section Contact/Devis ✅
- [X] HTML formulaire multi-étapes avec pattern containerMax
- [X] CSS form responsive + validations visuelles temps réel
- [X] JavaScript contact-form.js + validators.js complets
- [X] Validation email, champs requis, feedback utilisateur
- [X] **AJOUTÉ** : Simulation envoi avec états visuels (envoi → succès → reset)
- [X] Tests formulaire complets fonctionnels
- **🎯 Checkpoint** : ✅ Formulaire professionnel et validé

#### 3.6 Optimisation CSS Variables + Composant Tab-Button ✅ AJOUTÉ
- [X] **DIAGNOSTIC COMPATIBILITÉ** : Identification CSS Color Level 5 non supporté navigateurs
- [X] **VARIABLES HEXADÉCIMAL** : Conversion complète HSL → hex (#2b9b1f, #fb923c, etc.)
- [X] **VARIATIONS FIXES** : Calcul manuel primary-light/dark/ultra-light en hex
- [X] **COMPOSANT TAB-BUTTON** : Élément cliquable réutilisable dans utilities.css
- [X] **SÉPARATION TYPOGRAPHY** : Suppression font-size/color des classes composants
- [X] **CLASSES TAILWIND HTML** : text-base font-semibold directement dans HTML
- [X] **ÉTATS HOVER SUBTILS** : Tab inactif gris clair → hover vert léger → actif vert sans hover
- **🎯 Checkpoint** : ✅ Variables compatibles + composants réutilisables selon préférences

#### 3.7 Intégration Pourcentage Dynamique Section Bannière ✅ AJOUTÉ 2025-09-14
- [X] **INTÉGRATION TITRE** : Pourcentage dynamique dans H2 "économisez jusqu'à [15%] sur vos panneaux solaires"
- [X] **JAVASCRIPT SYNCHRONISÉ** : Mise à jour `dynamic-percentage-text` selon radio buttons (6kV→15%, 9kV→22%, 30kV→35%)
- [X] **TEXTE EXCLUSIVITÉ** : Ajout paragraphe Hitronics + réseau SolarDirect pour crédibilité
- [X] **STYLE HIGHLIGHT** : `.dynamic-percentage-highlight` couleur accent, bold, 1.3em avec text-shadow subtil
- [X] **NETTOYAGE CODE** : Suppression ancien affichage carte pourcentage + styles CSS obsolètes (.percentage-section, .percentage-card, etc.)
- [X] **SYMBOLE % CONDITIONNEL** : Ajout automatique via JavaScript selon ID élément cible
- [X] **SIMPLIFICATION JAVASCRIPT** : Adaptation logique pour éléments supprimés sans erreurs init
- [X] **CORRECTION FONCTIONNALITÉ** : Restauration texte dynamique suite problème références obsolètes
- **🎯 Checkpoint** : ✅ Widget économies optimisé avec pourcentage intégré + message commercial renforcé

### ⚡ PHASE 4 : ANIMATIONS & INTERACTIONS (Jour 5)
#### 4.1 GSAP Setup
- [ ] Installation et config GSAP
- [ ] animations/transitions.js (fade-in, slide-in)
- [ ] animations/interactions.js (hover, click)
- [ ] Timeline animations sections
- [ ] Performance animations mobile
- **Statut** : ❌ À faire

#### 4.2 Lenis Smooth Scroll
- [ ] Installation et config Lenis
- [ ] animations/scroll.js
- [ ] Smooth scroll desktop/mobile
- [ ] Anchor links navigation
- [ ] Test performance scroll
- **Statut** : ❌ À faire

#### 4.3 Parallax & Scroll Effects ✅ AJOUTÉ
- [X] **Effet parallaxe gallery-container** : Triple mode (classic, sticky smooth, sticky instant)
- [X] **Mode classic** : Parallaxe subtil facteur -0.2 avec smoothing LERP
- [X] **Mode sticky smooth** : Simulation sticky top: 50px avec LERP factor 0.1
- [X] **Mode instant** : Application directe transform sans smoothing pour réponse immédiate
- [X] **LERP smoothing** : Linear interpolation 60fps avec requestAnimationFrame
- [X] **Hystérésis scroll** : Seuils apparition 0.9 vs disparition 0.8 anti-flickering
- [X] **Animations reveal** : Benefit-content avec fade-in/translateY au scroll
- [X] **Tab-button states** : Synchronisation inactive/active avec IntersectionObserver
- **Statut** : ✅ Terminé - Triple mode parallaxe fonctionnel

### 🎯 PHASE 5 : FONCTIONNALITÉS TRANSVERSALES & TOOLS (Jour 6)

#### 5.1 Pages additionnelles du site
- [X] **Page Matériel/Catalogue** : E-commerce avec panneaux, kits, onduleurs, stockage - Prix et specs détaillées
- [X] **Page Installation/Processus** : Processus A à Z en 4 étapes détaillées + démarches administratives complètes
- [ ] **Page À propos** : Histoire familiale, expertise, réseau SolarDirect avec storytelling
- [ ] **Page Services détaillés** : Gamme produits, installation, maintenance, SAV
- [ ] **Page Réalisations/Portfolio** : Galerie projets avec filtres et témoignages clients
- [ ] **Page FAQ** : Questions fréquentes par avatar avec réponses adaptées
- [ ] **Pages légales** : Mentions légales, politique confidentialité, CGV
- **Statut** : 🔄 En cours - Pages matériel + installation terminées

#### 5.2 Outils et calculateurs avancés
- [ ] **Calculateur ROI avancé** : Simulation complète avec graphiques et comparaisons
- [ ] **Configurateur kits** : Outil interactif sélection matériel selon besoins
- [ ] **Carte interactive** : Zone d'intervention avec témoignages géolocalisés
- [ ] **Simulateur financements** : Aides, subventions, échelonnements par profil
- [ ] **Comparateur concurrentiel** : Arguments ELISUN vs marché avec données
- **Statut** : ❌ À faire

#### 5.3 Fonctionnalités business transversales
- [ ] **Système de parrainage** : Interface clients pour recommandations
- [ ] **Espace client** : Suivi installation, Smart Conso, SAV
- [ ] **Lead nurturing** : Séquences emails automatisées par avatar
- [ ] **Booking système** : Prise RDV automatisée pour devis/installation
- [ ] **Chat bot intelligent** : Qualification automatique et orientation
- **Statut** : ❌ À faire

### 📊 PHASE 6 : TRACKING & ANALYTICS ELISUN (Jour 7)

#### 6.1 Analytics segmentées par avatar client
- [ ] Créer compte GA4 ELISUN avec segments avatar
- [ ] Intégration gtag + custom dimensions (avatar_type, age_range, situation)
- [ ] Objectifs par avatar : Retraités (contact tél), Couples (calculateur), Pros (devis)
- [ ] Événements personnalisés par parcours client
- [ ] Entonnoirs conversion segmentés (Solution Aware → Most Aware)
- [ ] Dashboard analytics avec KPIs par avatar
- [ ] Rapports performance messages/objections par segment
- **Statut** : ❌ À faire

#### 6.2 Retargeting ultra-ciblé par avatar
- [ ] Créer Facebook Pixel ELISUN avec paramètres custom
- [ ] Intégration pixel + events par avatar (ViewContent_Retraites, AddToCart_Couples, etc.)
- [ ] Événements conversion segmentés par profil client
- [ ] Test pixel avec Facebook Pixel Helper
- [ ] **Audiences retargeting** : 60-75 ans (sécurité), 28-40 ans (innovation), 35-65 pros (ROI)
- [ ] **Audiences lookalike** : Basées sur conversions par avatar
- [ ] **Créatifs adaptés** : Visuels/messages par segment (rassurance/dynamisme/efficacité)
- **Statut** : ❌ À faire

#### 6.3 Hotjar analyse comportementale
- [ ] Créer compte Hotjar ELISUN
- [ ] Intégration script Hotjar
- [ ] Configuration heatmaps (formulaire, calculateur, galerie)
- [ ] Setup enregistrements sessions (parcours conversion)
- [ ] Analyse comportementale par avatar client
- [ ] Optimisation UX basée sur données
- **Statut** : ❌ À faire

### 🚀 PHASE 7 : OPTIMISATION & DÉPLOIEMENT (Jour 8)
#### 7.1 Performance
- [ ] Audit Lighthouse (Performance/SEO)
- [ ] Optimisation images (sizes, lazy loading)
- [ ] Minification CSS/JS production
- [ ] Test vitesses chargement mobile
- [ ] Correction Core Web Vitals
- **Statut** : ❌ À faire

#### 7.2 Tests finaux
- [ ] Tests multi-navigateurs (Chrome, Firefox, Safari)
- [ ] Tests mobile (iOS/Android)
- [ ] Validation HTML/CSS
- [ ] Test formulaire bout-en-bout
- [ ] Test analytics/tracking
- **Statut** : ❌ À faire

#### 7.3 Déploiement
- [ ] Configuration Netlify
- [ ] Domain custom (si fourni client)
- [ ] HTTPS et redirections
- [ ] Test site production
- [ ] Monitoring uptime
- **Statut** : ❌ À faire

### 📝 PHASE 8 : DOCUMENTATION & FORMATION (Jour 9)
#### 8.1 Documentation client
- [ ] Guide utilisation admin
- [ ] Instructions modifications contenu
- [ ] Contact support technique
- [ ] Backup et maintenance
- [ ] Analytics expliqués
- **Statut** : ❌ À faire

## 📈 AVANCEMENT ACTUEL

**Phase actuelle** : Phase 5 - 🔄 EN COURS - Pages additionnelles (3/6 terminées) + Optimisations UX avancées landing page
**Session en cours** : Trigger-block toggle particuliers/professionnels dans section banner avec gestion opacity/z-index
**Prochaine étape** : Continuer Phase 5 - Pages À propos, Services, Réalisations, FAQ
**Alternative** : Phase 4 - Animations GSAP/Lenis ou optimisations responsive mobile
**Réalisations session** :
- ✅ **Trigger-block toggle** : Composant radio-button behavior pour switcher particuliers/professionnels
- ✅ **Dual left-sections** : Structure HTML miroir (`.particulier-pro-section` + `.title-section`) pour alignment hauteurs
- ✅ **Gestion opacity/z-index** : Particulier `position: relative` (hauteur référence) + professionnel `position: absolute` + `opacity: 0`
- ✅ **Transitions fluides** : Fade-in/fade-out avec `transition: opacity 0.3s ease` au lieu de display none/block
- ✅ **Cards garanties premium** : Côte à côte (flex-direction: row) avec contenu concis (20 ans onduleur, 30 ans production)
- ✅ **Contenu professionnel différencié** : Qualité/fiabilité dans paragraphe, garanties chiffrées dans cards
- ✅ **Pointer-events management** : `pointer-events: none` sur sections invisibles pour éviter interactions
- ✅ **Dimensions alignées** : Cards professionnels mêmes dimensions que radio-buttons (max-width: 440px, padding: 1rem 0.75rem)
- ✅ **Custom event dispatch** : `triggerBlockChange` event pour intégrations futures
- ✅ **Composant trigger-block.js** : Toggle logic avec classes active/inactive + initialisations

**Progression globale** : 83/130 étapes (64% complété) - Phase 3 terminée + Landing page optimisée + 3 pages Phase 5 complètes
**Dernière mise à jour** : 2025-10-11 - Section banner toggle particuliers/professionnels avec opacity/z-index + cards garanties premium

## 🎯 OBJECTIFS SESSION SUIVANTE
1. **Priorité 1** : Phase 5 - Continuer pages additionnelles (À propos, Services détaillés, FAQ)
2. **Priorité 2** : Phase 4 - Animations GSAP/Lenis (landing page + matériel prêtes)
3. **Alternative** : Optimisations UX/UI page matériel et ajustements contenus
4. **Maintenance** : Tests multi-navigateurs et optimisations performance

## 📋 NOUVELLES SPÉCIFICATIONS ELISUN INTÉGRÉES
- ✅ **Avatars clients ultra-détaillés** : Profils démo/psycho, objections brutes/profondes, messages clés, tons, canaux
- ✅ **Arguments commerciaux hiérarchisés** : Qualité → Prix → Service → Réseau → Accompagnement
- ✅ **Objections transversales** : 5 brutes + 5 profondes communes identifiées
- ✅ **Parcours conviction** : Solution Aware → Most Aware (5 étapes)
- ✅ **Personnalisation UX** : Ton/messages/fonctionnalités adaptés par avatar
- ✅ **Avantages concurrentiels** : 9 points différenciants structurés
- ✅ **Gamme produits spécialisée** : Iconics exclusivité + Le Bourgeois
- ✅ **Services inclus** : SAV ultra-réactif, Smart Conso, parrainage 3%
- ✅ **Positionnement premium accessible** : "Excellence technique accessible Toulouse"
- ✅ **Tracking segmenté** : Analytics/Pixel/Hotjar par avatar pour optimisation continue

## ⚠️ RÈGLES DE PROGRESSION
- ✅ **Une phase à la fois** : Ne pas avancer sans validation précédente
- 📝 **Documentation continue** : Mettre à jour PREFERENCES.md avec retours
- 🧪 **Tests systématiques** : Chaque composant testé avant passage suivant
- 💬 **Validation client** : Contenus et design validés avant finalisation
