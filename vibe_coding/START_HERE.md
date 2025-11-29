# 🚀 Point d'entrée principal du projet

**Utilité** : Première lecture obligatoire pour l'IA - vue d'ensemble complète du projet
**Usage** : Chargez ce fichier au début de chaque session de développement
**Pour l'IA** : Ce fichier contient le contexte global nécessaire pour comprendre le projet. 
Lisez-le AVANT toute génération de code. Il définit les objectifs, la stack technique, 
et les liens vers les autres fichiers de documentation essentiels.

---

## 🏢 INFORMATIONS PROJET

**Client** : ELISUN (Entreprise familiale photovoltaïque toulousaine)
**Secteur** : Vente et installation kits photovoltaïques premium
**Statut** : Partenaire SolarDirect avec exclusivité produits Iconics sur Toulouse
**Type de projet** : Site vitrine avec landing page de génération de leads
**Envergure** : TPE familiale (2 personnes - Sébastien + frère technicien)

**Objectifs principaux** : 
- Lead generation (demandes de devis photovoltaïque premium)
- Positionnement "excellence technique accessible" sur Toulouse
- Conversion prospects → clients par avatars (retraités, couples, pros)
- Mise en avant exclusivité Iconics + prix direct usine

**Budget développement** : Projet personnel avec itérations
**Deadline** : Flexible avec progression étape par étape

## 📊 ÉTAT D'AVANCEMENT

**Contenus** : ✅ Définis (contexte EliSun avec brand identity)
**Design** : ✅ Base créée (couleurs, typos, utilities CSS)
**Développement** : ✅ Architecture complète + serveur dev fonctionnel

**Phase actuelle** : ✅ **PHASE 4-5 EN COURS** - Animations avancées scroll + Pages additionnelles (2/6 terminées)
**Serveur dev** : ✅ http://localhost:8080 fonctionnel avec site multi-pages et navigation complète
**Dernière mise à jour** : ✅ Triple mode parallaxe gallery-container (classic, sticky smooth, sticky instant) avec LERP configurable
**Pages disponibles** : ✅ index.html (landing optimisée) + materiel.html (catalogue) + installation.html (processus optimisé) + about/services/contact.html (structure)
**Navigation** : ✅ Navbar desktop + mobile avec liens "Comment ça se passe" + "Nos kits photovoltaïque" fonctionnels
**Configuration Webpack** : ✅ Multi-pages avec HtmlWebpackPlugin installation.html + materiel.html + hot-reload
**Architecture CSS optimisée** : ✅ Structure modulaire (buttons.css, cards.css, forms.css, animations.css) + séparation responsabilités
**Section Benefits** : ✅ Bento-grid 3 bénéfices + Triple mode parallaxe + Animations reveal + Tab-button states synchronisés
**Section Features** : ✅ 3 features avec badges certifications, navigation sticky auto-hide, titres avec spans highlight
**Section Banner** : ✅ Trigger-block toggle particuliers/professionnels + dual left-sections + cards garanties premium
**JavaScript avancé** : ✅ benefits.js avec LERP smoothing 60fps + Hystérésis anti-flickering + IntersectionObserver
**Parallaxe gallery** : ✅ 3 modes (classic -0.2 factor, sticky smooth LERP 0.1, instant direct transform)
**Animations scroll** : ✅ Benefit-content fade-in/translateY + Tab-button inactive/active synchronisation
**UX progressive** : ✅ Navigation sticky auto-hide + Toggle sections + Parallaxe configurable selon contexte
**Prochaine étape** : Continuer Phase 5 (À propos, Services détaillés, FAQ) ou Phase 4 (GSAP Timeline/Lenis)

## 🛠️ STACK TECHNIQUE

### **Frontend**
- Framework : HTML/CSS/JavaScript Vanilla
- Styling : Tailwind CSS (grids et responsive)
- Bundler : Webpack (imports JS modulaires)
- Animations : GSAP + Lenis (smooth scroll)
- Outils : Scripts npm custom (dev/prod/build)

### **Backend**
- Type : Site statique (pas de backend)
- Formulaires : Service tiers (Netlify Forms ou similaire)

### **Déploiement**
- Hébergement : À définir (Netlify/Vercel recommandé)
- Domaine : À configurer selon client
- Environnements : Dev local + Production

## 📁 NAVIGATION DOCUMENTATION

### **Fichiers essentiels** (à consulter dans cet ordre)
1. **CONTEXT.md** → Contexte client, marque et spécifications
2. **PROJECT_RULES.md** → Standards techniques et contraintes
3. **ARCHITECTURE.md** → Structure technique du projet
4. **PREFERENCES.md** → Vos préférences de code et feedback
5. **IMPLEMENTATION_PLAN.md** → Roadmap et suivi de progression

### **En cas de questions spécifiques**
- Problème technique récurrent → **PREFERENCES.md**
- Besoin contexte métier → **CONTEXT.md**
- Doute sur architecture → **ARCHITECTURE.md**
- Planning/priorisation → **IMPLEMENTATION_PLAN.md**

## 🎯 SESSION ACTUELLE (2025-10-16)

**Objectif session** : ✅ Triple mode parallaxe gallery-container + Smoothing LERP configurable + Benefit-content animations
**Fichiers créés/mis à jour** :
- ✅ **src/pages/index.html** : Ajout .benefit-content wrapper (paragraphe + bento-grid) pour chaque bénéfice
- ✅ **src/pages/index.html** : Tab-button avec classe .tab-button-inactive initial state
- ✅ **src/pages/index.html** : CTA buttons après bento-grids dans .gallery-cta-container
- ✅ **src/css/components/sections.css** : Style .benefit-content avec fade-in/translateY animations
- ✅ **src/css/components/buttons.css** : Variante .tab-button-inactive (dark green, white border/icon)
- ✅ **src/js/components/benefits.js** : Triple mode parallaxe (classic, sticky smooth, sticky instant)
- ✅ **src/js/components/benefits.js** : setupGalleryParallaxClassic() - Parallaxe subtil facteur -0.2
- ✅ **src/js/components/benefits.js** : setupGalleryParallaxSticky() - Sticky 50px avec LERP smoothing
- ✅ **src/js/components/benefits.js** : setupGalleryParallaxInstant() - Application directe sans smoothing
- ✅ **src/js/components/benefits.js** : Calcul galleryNaturalTop précis avec offsetTop
- ✅ **src/js/components/benefits.js** : Synchronisation tab-button inactive/active avec benefit-content visibility
- ✅ **vibe_coding/PREFERENCES.md** : Session 2025-10-16 documentée avec détails techniques complets
- ✅ **vibe_coding/IMPLEMENTATION_PLAN.md** : Phase 4.3 Parallax & Scroll Effects ajoutée
- ✅ **vibe_coding/START_HERE.md** : État avancement mis à jour avec triple mode parallaxe

**Réalisations session** :
- **Triple mode parallaxe** : System toggle facile entre 3 comportements (classic/sticky smooth/instant)
- **Migration CSS propre** : sectionTest.css → sections.css + suppression classes obsolètes
- **Variantes tab-button** : .tab-button-white (fond blanc + border vert) + .tab-button-green (fond vert + icône blanche)
- **Section CTA verticale** : Texture grille colorée full background + gradient radial blanc (::before + ::after)
- **Animation scroll reveal** : Bento-grid fade-in/fade-out avec opacity 0 → 1 + translateY 20px
- **Parallaxe smooth LERP** : Gallery-container avec factor 0.1 + déplacement -0.2 * scroll + limites ±200px
- **Hystérésis anti-flickering** : IntersectionObserver seuils 30% apparition vs 10% disparition = zone morte 20%
- **Documentation code** : Schémas ASCII viewport + commentaires avec émojis + variables modifiables identifiées
- **CSS Nesting systématique** : `.content-container { .benefit-block { .benefit-header { } .bento-grid { .bento-card { } } } }`
- **Contenu professionnel** : Qualité/fiabilité dans paragraphe, garanties chiffrées dans cards
- **Pointer-events gestion** : `pointer-events: none` sur sections invisibles pour éviter interactions
- **Custom event dispatch** : `triggerBlockChange` event pour intégrations futures
- **Dimensions alignées** : Cards professionnels avec mêmes dimensions que radio-buttons particuliers

**Techniques employées** : Opacity/z-index toggle, position relative/absolute mix, structure HTML miroir, transitions CSS fluides, pointer-events management
**Prochaine session** : Animations GSAP sections, optimisation responsive mobile, pages secondaires (À propos, Services)

## 🔗 LIENS RAPIDES

**Environnement dev** : http://localhost:8080 (webpack-dev-server)
**Staging** : À configurer
**Production** : À déployer
**Repository** : Local (ClaudeCode-ELISUN)
**Design** : À créer avec itérations Windsurf
