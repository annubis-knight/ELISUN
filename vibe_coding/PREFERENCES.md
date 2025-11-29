# 🎯 Préférences de style de code et feedback IA

**Utilité** : Historique détaillé de vos préférences sur le code généré - j'aime/j'aime pas
**Usage** : Consultez AVANT chaque génération de code + mettez à jour après chaque itération
**Pour l'IA** : Ce fichier est CRITIQUE pour votre apprentissage. Respectez scrupuleusement 
ces préférences documentées. Elles reflètent mes goûts personnels et l'expérience client TPE/PME. 
Consultez-le systématiquement et référencez les préférences appliquées dans vos réponses.


## 📝 HISTORIQUE DES ITÉRATIONS

### Session 2025-10-11 - PROJET ELISUN - Trigger-block toggle particuliers/professionnels avec opacity/z-index

**Code généré** : Composant trigger-block pour switcher entre sections particuliers/professionnels + dual left-sections avec gestion opacity
**✅ Ce qui était parfait** :
- **Toggle radio-button behavior** : Un seul bouton actif à la fois avec classe `.active`
- **Dual content sections** : Deux `.left-section` avec data-target="particulier/professionnel"
- **Gestion opacity + z-index** : Particulier en `position: relative` (hauteur de référence) + Professionnel en `position: absolute` + `opacity: 0`
- **Transitions fluides** : `transition: opacity 0.3s ease, z-index 0.3s ease` pour fade-in/fade-out
- **Pointer-events gestion** : `pointer-events: none` quand section invisible
- **Structure miroir** : Même architecture HTML (`.particulier-pro-section` + `.title-section`) pour alignment hauteurs
- **Cards professionnels concises** : Garanties chiffrées (20 ans onduleur, 30 ans production) avec icônes SVG
- **Contenu premium** : Qualité/fiabilité dans paragraphe, garanties dans cards
- **No display: none** : Évite sauts layout brutaux, préfère opacity pour transitions smooth

**❌ À corriger la prochaine fois** :
- Toujours préférer `opacity + z-index` plutôt que `display: none/block` pour toggles visuels
- Garder une section en position normale pour définir hauteur container

**🔧 Ajustements demandés** :
- **✅ NOUVEAU** : Toggle sections avec opacity/z-index au lieu de display none/block
- **✅ NOUVEAU** : Section visible en `position: relative`, section cachée en `position: absolute` + `opacity: 0`
- **✅ NOUVEAU** : Structure HTML miroir pour alignment automatique des hauteurs
- **✅ NOUVEAU** : Cards garanties professionnels côte à côte (flex-direction: row)
- **✅ NOUVEAU** : Dimensions cards alignées avec radio-buttons (max-width: 440px, padding: 1rem 0.75rem, border: 2px)
- **✅ NOUVEAU** : Custom event dispatch `triggerBlockChange` pour intégrations futures

**Fichiers créés/modifiés** :
- `src/js/components/trigger-block.js` : Toggle logic avec classes active/inactive
- `src/css/components/sections.css` : Styles trigger-block + pro-features-cards + left-section states
- `src/pages/index.html` : Structure dual left-sections + trigger-block buttons

### Session 2025-10-06 - PROJET ELISUN - Refactoring sections bénéfices + features avec tetris grid
**Code généré** : Section benefits avec bento-grid + Section features avec 3 variantes (text-image, tetris-grid, text-image)
**✅ Ce qui était parfait** :
- **CSS Nesting strict** : Toutes les classes encapsulées hiérarchiquement (correction après rappel utilisateur)
- **Réutilisation classes** : `.step-indicator-v3` et `.tab-button` réutilisés au lieu de créer nouvelles classes
- **Variantes tab-button** : `.tab-button-white` et `.tab-button-green` créées dans `buttons.css`
- **Tetris grid pattern** : 6 colonnes `.tetris-column` avec flexbox vertical + `justify-content: flex-end`
- **Grid vs Flexbox** : Changement `top-content` de grid → flexbox (plus adapté pour 2 éléments côte-côte)
- **Migration CSS propre** : `sectionTest.css` → `sections.css` avec nesting complet
- **Structure HTML optimale** : 6 colonnes indépendantes empilant cards sans contrainte de rows
- **Background image** : Linear gradient + image de fond avec overlay primary-lighter

**❌ À corriger la prochaine fois** :
- **TOUJOURS appliquer CSS nesting dès le départ** (ne pas attendre rappel utilisateur)
- Toujours vérifier les classes existantes AVANT de créer nouvelles classes
- Privilégier Flexbox pour layouts simples (2 éléments côte-à-côte)

**🔧 Ajustements demandés** :
- **🚨 CRITIQUE ABSOLU** : CSS Nesting obligatoire pour TOUS les composants - jamais de classes au même niveau
- **✅ CONFIRMÉ** : Réutiliser `.step-indicator-v3`, `.tab-button` plutôt que créer nouveaux composants
- **✅ NOUVEAU** : Tetris grid = Grid 6 colonnes + Flexbox vertical par colonne (pas de gestion rows)
- **✅ NOUVEAU** : Grid pour multi-colonnes précises, Flexbox pour alignements simples
- **✅ NOUVEAU** : `justify-content: flex-end` pour alignement depuis le "sol"
- **✅ NOUVEAU** : Variantes couleur via modificateurs (`.tab-button-white`, `.tab-button-green`)

### Session 2025-08-14 - PROJET ELISUN - Mise à jour fichiers vibe_coding avec structure 3 sections landing page
**Code généré** : Intégration contenu_landing.md dans documentation vibe_coding
**✅ Ce qui était parfait** :
- **Analyse systématique** : Lecture complète fichiers vibe_coding existants pour éviter duplication
- **Structure cohérente 3 sections** : Hero, Bénéfices, Parcours Client détaillés avec contenu validé
- **Intégration CONTEXT.md** : Ajout section complète "Structure détaillée Landing Page ELISUN"
- **Enrichissement IMPLEMENTATION_PLAN.md** : Phase 5.1 enrichie avec tâches précises par section
- **Conservation contexte** : Respect architecture existante et préférences documentées
- **Messages validés intégrés** : Titres H1/H2, paragraphes, CTA, preuves autorité, étapes parcours
- **Éléments visuels précis** : Navbar, frise process, grille 3x2, side image, layout zébré
- **Cohérence brand** : Respect couleurs, tons, positionnement ELISUN

**❌ À corriger la prochaine fois** :
- Vérifier que tous les éléments du contenu_landing.md sont bien intégrés
- Maintenir cette précision dans l'implémentation HTML/CSS

**🔧 Ajustements demandés** :
- **NOUVEAU** : Toujours analyser fichiers existants avant mise à jour
- **NOUVEAU** : Intégrer contenus validés avec structure détaillée
- **NOUVEAU** : Documenter éléments visuels précis (grilles, images, layouts)
- **NOUVEAU** : Maintenir cohérence entre fichiers documentation

### Session 2025-08-14 - PROJET ELISUN - Avatars clients ultra-détaillés pour copywriting
**Code généré** : Enrichissement granulaire avatars clients avec profils psychographiques complets
**✅ Ce qui était parfait** :
- **Parcours conviction structuré** : Solution Aware → Most Aware (5 étapes)
- **Personnalisation UX poussée** : Ton/messages/fonctionnalités adaptés par segment
- **Tracking segmenté** : Analytics/Pixel/Hotjar par avatar pour optimisation
- **Intégration cohérente** : CONTEXT.md + IMPLEMENTATION_PLAN.md enrichis
- **Mémoires créées** : Conservation contexte granulaire pour futures sessions

**❌ À corriger la prochaine fois** :
- Maintenir cette granularité dans le développement des contenus
- Tester les messages par avatar avant implémentation finale

**🔧 Ajustements demandés** :
- **CRITIQUE** : Toujours développer contenus avec cette granularité avatar
- **NOUVEAU** : Prévoir A/B testing systématique par segment
- **NOUVEAU** : Tracking ultra-segmenté pour optimisation continue
- **NOUVEAU** : Copywriting adapté aux objections profondes identifiées

### Session 2025-08-14 - PROJET ELISUN - Enrichissement contexte client complet
**Code généré** : Mise à jour complète fichiers vibe_coding avec spécifications détaillées ELISUN
**✅ Ce qui était parfait** :
- Intégration exhaustive fiche descriptive ELISUN dans CONTEXT.md
- Segmentation client détaillée (3 avatars : retraités, couples, professionnels)
- Arguments commerciaux hiérarchisés (qualité → prix → service → réseau → accompagnement)
- Avantages concurrentiels structurés (piliers principaux + différenciants)
- Gamme produits spécialisée (Iconics exclusivité + Le Bourgeois)
- Positionnement premium accessible clairement défini
- Mise à jour IMPLEMENTATION_PLAN.md avec fonctionnalités spécifiques
- Enrichissement START_HERE.md avec nouvelles spécifications
- Création mémoire structurée pour conservation contexte
- Respect des patterns existants sans duplication

**❌ À corriger la prochaine fois** :
- Continuer à respecter l'ordre de priorité des arguments commerciaux
- Maintenir cohérence entre tous les fichiers de documentation

**🔧 Ajustements demandés** :
- **NOUVEAU** : Toujours intégrer les spécifications client détaillées avant développement
- **NOUVEAU** : Structurer les avatars clients pour personnalisation UX
- **NOUVEAU** : Hiérarchiser les arguments commerciaux dans l'ordre de priorité
- **NOUVEAU** : Mettre en avant les exclusivités et différenciateurs uniques

### Session 2025-08-14 - PROJET ELISUN - Phase 1 + Phase 2 COMPLÈTE inspirée Solar Direct
**Code généré** : Configuration + landing page complète professionnelle
**✅ Ce qui était parfait** :
- Installation Tailwind CSS v3.4.17 exacte comme demandé
- Respect strict des contraintes CSS (pas de SCSS)
- Mise à jour IMPLEMENTATION_PLAN.md (oubli corrigé)
- Suppression complète références SCSS du projet
- Tailwind.config.js simplifié (sans thème custom)
- Approche CSS ajustée : couleurs/typos/spacing en CSS pur
- Classes CSS spécifiques (.logo-text, .nav-link) vs classes Tailwind globales
- Résolution problème npm run dev avec création fichiers manquants
- Gestion intelligente des ports occupés (kill-port puis restart)
- **PHASE 2 AJOUTS** : Landing page moderne inspirée Solar Direct
- **PHASE 2 AJOUTS** : Header fixe avec navigation améliorée et logo
- **PHASE 2 AJOUTS** : Hero section avec split layout, stats et visuels
- **PHASE 2 AJOUTS** : Section services détaillée avec cards interactives
- **PHASE 2 AJOUTS** : Section avantages avec icônes et grid responsive
- **PHASE 2 AJOUTS** : Section à propos avec stats et storytelling familial
- **PHASE 2 AJOUTS** : Contact avec formulaire professionnel multi-champs
- **PHASE 2 AJOUTS** : Footer complet avec liens sociaux et certifications
- **PHASE 2 AJOUTS** : CSS componenents modulaires (header.css)
- **PHASE 2 AJOUTS** : Classes utilitaires enrichies (boutons, couleurs)
- **PHASE 2 AJOUTS** : Typography et hiérarchie visuelle parfaite

**❌ À corriger la prochaine fois** :
- ⚠️ **CRITIQUE** : TOUJOURS mettre à jour les fichiers de suivi APRÈS chaque session
- Prévoir animations GSAP dès le développement HTML (Phase 4)

**🔧 Ajustements demandés** :
- **IMPÉRATIF** : Pas de thème dans Tailwind - CSS pur pour couleurs/typos/spacing
- Tailwind uniquement pour layout et classes utilitaires de base
- Styles spécifiques EliSun dans fichiers CSS séparés
- Créer structure fichiers complète dès Phase 1 pour éviter erreurs compilation
- **NOUVEAU** : Inspiration Solar Direct très réussie - continuer cette approche professionnelle
- **NOUVEAU** : Développement modulaire par sections très efficace

## 🚨 RAPPEL AUTOMATIQUE - MISE À JOUR FICHIERS DE SUIVI

**🚨 OBLIGATION ABSOLUE APRÈS CHAQUE ITÉRATION DE CODE :**

### Session 2025-08-14 - AVATARS CLIENTS ULTRA-DÉTAILLÉS ✅ TERMINÉE
- ✅ CONTEXT.md enrichi avec granularité copywriting (objections brutes/profondes, tons, canaux)
- ✅ IMPLEMENTATION_PLAN.md mis à jour avec personnalisation UX par avatar
- ✅ Parcours conviction structuré (Solution Aware → Most Aware)
- ✅ Tracking segmenté prévu (Analytics/Pixel/Hotjar par avatar)
- ✅ A/B Testing planifié pour messages/visuels par segment
- ✅ Mémoires créées pour conservation granularité avatars
- ✅ PREFERENCES.md mis à jour avec cette session

### Session 2025-08-14 - STRUCTURE RESPONSIVE OBLIGATOIRE ✅ TERMINÉE
**Code généré** : Intégration structure responsive avec classes .containerMax et .grid-tailwind
**✅ Ce qui était parfait** :
- **Structure documentée** : RESPONSIVE_STRUCTURE.md créé avec exemples complets
- **Classes utilitaires** : .containerMax (1300px max) + .grid-tailwind intégrées
- **Pattern obligatoire** : `<section> → .containerMax → .grid-tailwind` documenté
- **Répartition claire** : Grilles Tailwind + détails CSS custom
- **Breakpoints standards** : Mobile (4 cols) → Tablet (8 cols) → Desktop (12 cols)
- **Documentation complète** : PREFERENCES.md + PROJECT_RULES.md + ARCHITECTURE.md mis à jour
- **Exemples d'usage** : Structure classique, fusion classes, éléments intermédiaires
- **Interdictions claires** : Responsive uniquement CSS, anciens containers

**❌ À corriger la prochaine fois** :
- Appliquer systématiquement cette structure dans tout nouveau développement HTML
- Vérifier cohérence avec existing code en Phase 2

**🔧 Ajustements demandés** :
- **CRITIQUE** : TOUJOURS utiliser pattern `<section> → .containerMax → .grid-tailwind`
- **NOUVEAU** : Responsive grilles = Tailwind, détails enfants = CSS custom
- **NOUVEAU** : Max-width 1300px via .containerMax uniquement

### Session 2025-08-14 - PHASE 3 LANDING PAGE COMPLÈTE ✅ TERMINÉE
**Code généré** : Enrichissement complet landing page avec témoignages et interactions JavaScript
**✅ Ce qui était parfait** :
- **Structure responsive** : Application systématique pattern .containerMax → .grid-tailwind
- **Section témoignages** : 3 témoignages par avatar (retraité, couple, professionnel)
- **Interactions JavaScript** : Composants Hero, Services, Testimonials, ContactForm, Gallery
- **Validation formulaire** : Validation temps réel avec feedback visuel
- **Hover effects** : Animations sur cards, boutons, avatars, galerie
- **JavaScript modulaire** : Classes ES6+ avec imports/exports, initialisation propre
- **Stats visuelles** : Témoignages avec stats globales (98% satisfaits, 500+ installations)
- **Content personnalisé** : Messages adaptés par segment client
- **CSS transitions** : Animations fluides sur tous les éléments interactifs
- **Structure HTML** : Nouvelle section témoignages entre À propos et Contact

**❌ À corriger la prochaine fois** :
- Continuer l'approche modulaire JavaScript pour Phase 4 (animations GSAP)
- Maintenir cohérence interactions sur nouvelles sections

**🔧 Ajustements demandés** :
- **NOUVEAU** : Approche JavaScript modulaire très réussie - continuer
- **NOUVEAU** : Interactions utilisateur bien pensées et fluides
- **NOUVEAU** : Témoignages par avatar pertinents et authentiques
- **NOUVEAU** : Structure responsive parfaitement appliquée

### Session 2025-08-15 - REFACTORING CSS ET SIMPLIFICATION HTML ✅ TERMINÉE
**Code généré** : Refactoring complet système CSS avec nouvelle palette couleurs et simplification HTML
**✅ Ce qui était parfait** :
- **Palette couleurs cohérente** : Vert `#2b9b1f` + orange doux `#fb923c` + blanc dominant
- **CSS avec nesting** : Fichier `sections.css` avec imbrication visuelle et sélecteurs intelligents  
- **Simplification HTML** : Suppression des classes Tailwind verboses, HTML plus lisible
- **Classes sémantiques ciblées** : `.hero-section`, `.benefits-section` pour regroupement logique
- **Variables CSS** : Système complet avec couleurs primaire/secondaire + variations
- **Structure responsive** : Conservation classe `gridTailwind` + sélecteurs CSS enfants
- **Séparation responsabilités** : CSS pour styling, HTML pour structure claire
- **Composant CustomerJourney** : JavaScript complet avec timeline interactive et avatars

**❌ À corriger la prochaine fois** :
- **CRITIQUE** : Mettre à jour les fichiers vibe_coding IMMÉDIATEMENT après changements
- **IMPORTANT** : Toujours suivre le workflow Workflow.md pour traçabilité
- Maintenir cette approche CSS nesting + HTML simple

**🔧 Ajustements demandés** :
- **NOUVEAU** : Préférer CSS custom properties + nesting vs classes Tailwind dans HTML
- **NOUVEAU** : HTML doit rester simple et lisible, CSS fait le styling
- **NOUVEAU** : Classes sémantiques seulement quand ça regroupe logiquement
- **NOUVEAU** : Utiliser sélecteurs CSS (enfants, adjacents, etc.) pour éviter multiplication classes
- **NOUVEAU** : Orange doux jaune `#fb923c` parfait pour palette secondaire
- **CRITIQUE** : TOUJOURS suivre Workflow.md pour mise à jour documentation

### Session 2025-08-15 - ANALYSE STYLE CSS EXEMPLES ET CONVENTIONS ✅ TERMINÉE
**Code généré** : Analyse complète des 11 fichiers CSS d'exemples pour comprendre le style de codage
**✅ Ce qui était parfait** :
- **Méthodologie d'analyse** : Lecture systématique de tous les fichiers d'exemples CSS fournis
- **Respect du workflow** : Suivi strict de Workflow.md pour la consultation des fichiers
- **Structure d'analyse** : Organisation claire patterns → conventions → documentation
- **Identification patterns CSS** : Variables CSS, nesting, architecture modulaire, responsive patterns
- **Documentation préférences** : Intégration observations dans PREFERENCES.md
- **Approche respectueuse** : Analyse des goûts existants sans imposer de nouveaux standards

**✅ PATTERNS IDENTIFIÉS DANS VOS EXEMPLES** :
- **Variables CSS** : Système complet `:root` avec couleurs primitives + sémantiques
- **CSS Nesting** : Imbrication visuelle pour composants complexes (.itemParralaxe, .gallery-item)
- **Architecture modulaire** : Séparation variables.css + typography.css + component.css + landing.css
- **Classes sémantiques** : `.hero-section`, `.gallery-item`, `.benefit-item` (BEM-like)
- **Responsive mobile-first** : @media queries avec breakpoints standards
- **Transitions fluides** : `transition: all 0.3s ease` pattern récurrent
- **Hover effects** : Transform + box-shadow pour interactions riches
- **CSS custom properties** : Utilisation intensive var(--color-name) pour cohérence
- **Tailwind + CSS hybride** : @layer components pour extensions sémantiques
- **Grid layouts** : CSS Grid + Flexbox selon contexte
- **Positioning avancé** : Absolute + transform pour layouts créatifs
- **Typography hiérarchisée** : @layer base pour styles globaux typographiques

**❌ À corriger la prochaine fois** :
- Continuer à respecter ces patterns dans le développement ELISUN
- Maintenir l'approche hybride Tailwind + CSS custom que vous préférez

**🔧 Ajustements demandés** :
- **CONFIRMÉ** : Votre style CSS nesting + variables + classes sémantiques
- **CONFIRMÉ** : Architecture modulaire avec fichiers séparés par fonction
- **CONFIRMÉ** : Approche hybride Tailwind utilitaires + CSS custom détaillé
- **CONFIRMÉ** : Transitions et animations fluides systématiques
- **CONFIRMÉ** : Mobile-first avec responsive CSS Grid/Flexbox
- **NOUVEAU** : Préférence évidente pour layouts créatifs (parallax, overlays, positioning)
- **NOUVEAU** : Goût confirmé pour interactions riches (hover, transform, opacity)

### Session 2025-08-15 - REFACTORING CSS COMPLET SELON PRÉFÉRENCES ✅ TERMINÉE
**Code généré** : Mise à jour complète des fichiers CSS selon vos conventions identifiées dans les exemples
**✅ Ce qui était parfait** :
- **Méthodologie systématique** : Analyse → Identification écarts → Refactoring → Documentation
- **Variables CSS sémantiques** : Migration vers système primitives + sémantiques (--elisun-green, --primary-color)
- **CSS Nesting appliqué** : Transformation sections.css avec imbrication visuelle pour tous composants
- **Transitions cohérentes** : Adoption `transition: var(--transition-normal)` = `all 0.3s ease`
- **Hover effects enrichis** : Transform + box-shadow + scale selon vos patterns
- **Architecture modulaire respectée** : variables.css + typography.css + components.css
- **Système boutons unifié** : border-radius: 50px + box-shadow avec effet translate
- **Responsive mobile-first** : Conservation approche existante avec breakpoints standards
- **Couleurs cohérentes** : Suppression références inexistantes, utilisation variables définies
- **Font display** : Ajout `--header-font: 'Playfair Display'` selon vos exemples
- **Positioning créatif** : Overlays, absolute positioning pour layouts avancés

**✅ TRANSFORMATIONS MAJEURES APPLIQUÉES** :
- **variables.css** : Système primitives (--elisun-green, --white) + sémantiques (--primary-color, --background-accent)
- **sections.css** : CSS nesting complet avec imbrication visuelle pour hero, benefits, journey, testimonials
- **utilities.css** : Boutons avec box-shadow effects, hover transforms, navigation avec overflow:hidden
- **Transitions uniformes** : `var(--transition-normal)` et `var(--transition-cubic)` selon vos patterns
- **Typography hiérarchisée** : --header-font pour titres, weights et font-family cohérents

**❌ À corriger la prochaine fois** :
- Tester les nouvelles variables dans le HTML existant
- Vérifier compatibilité avec composants JavaScript

**🔧 Ajustements demandés** :
- **CONFIRMÉ** : Votre approche CSS nesting + variables sémantiques est maintenant appliquée
- **CONFIRMÉ** : Transitions fluides et hover effects selon vos goûts
- **CONFIRMÉ** : Architecture modulaire respectée et enrichie
- **CONFIRMÉ** : Couleurs cohérentes avec système primitives/sémantiques
- **NOUVEAU** : CSS refactorisé maintient fonctionnalités tout en adoptant votre style
- **NOUVEAU** : Boutons avec effects box-shadow et transform selon vos exemples

### Session 2025-08-15 - ANALYSE STYLE HTML EXEMPLES PERSONNELS ✅ TERMINÉE
**Code généré** : Analyse complète de 8 fichiers HTML d'exemples pour comprendre votre style de codage HTML
**✅ Ce qui était parfait** :
- **Méthodologie complète** : Lecture systématique index.html, landing.html, template.html, expertise.html, collaborateurs.html, projets.html
- **Respect workflow vibe_coding** : Suivi strict séquence documentée
- **Analyse patterns HTML** : Structure, organisation, conventions personnelles identifiées
- **Extraction préférences** : Classes, attributs, patterns récurrents documentés
- **Documentation détaillée** : Observations précises intégrées dans PREFERENCES.md

**✅ PATTERNS HTML IDENTIFIÉS DANS VOS EXEMPLES** :
- **Commentaires descriptifs** : Headers explicites avec description page/section/utilité
- **Structure sémantique** : `<section>` avec IDs descriptifs, `<div>` pour regroupements fonctionnels
- **Pattern containerMax + grid-tailwind** : CONFIRMÉ dans tous vos exemples
- **Classes composites** : `.hero-section`, `.gallery-item`, `.content-block` (BEM-like sémantique)
- **Navigation complexe** : Dropdowns, hamburger mobile, CTA séparés desktop/mobile
- **Swiper/SwiperJS** : Usage récurrent pour carousels, galeries, témoignages
- **W3-include-html** : Pattern d'inclusion composants (navbar, footer) via fetch
- **Images avec lazy loading** : `loading="lazy"` systématique, alts descriptifs
- **Links sémantiques** : href explicites, structure `a > div.bouton` pour boutons
- **Formulaires structurés** : Labels associés, validation, champs métier pertinents
- **Scripts modulaires** : bundle.min.js + scripts spécifiques, defer systématique
- **Accessibilité** : aria-label, navigation clavier, structure hiérarchique

**✅ CONVENTIONS SPÉCIFIQUES OBSERVÉES** :
- **Français prioritaire** : Commentaires, classes, attributs en français
- **IDs descriptifs** : `#sectionHeroExpertise`, `#projets-biens-entiers`, `#interest-section2`
- **Classes fonctionnelles** : `.button-wrapper`, `.content-header`, `.presentation-profile`
- **Attributs data** : `data-section`, `data-parallax-parent`, `data-accordion-toggle`
- **Responsive classes** : `max-lg:hidden`, `lg:col-span-6`, `md:col-start-2` (Tailwind précis)
- **Structure accordéon** : Patterns répétés pour FAQ/skills avec toggles JavaScript
- **Cards avec overlays** : Pattern récurrent `.background` + `.overlay` + `.content`
- **Grid positioning** : `col-span-X`, `col-start-X`, `row-start-X` usage avancé

**❌ À corriger la prochaine fois** :
- Appliquer ces patterns HTML dans les nouvelles sections ELISUN
- Maintenir cohérence commentaires français et structure sémantique

**🔧 Ajustements demandés** :
- **CONFIRMÉ** : Commentaires descriptifs obligatoires en français
- **CONFIRMÉ** : Structure sémantique avec sections et IDs explicites
- **CONFIRMÉ** : Classes composites BEM-like pour composants
- **CONFIRMÉ** : Pattern containerMax + grid-tailwind systématique
- **CONFIRMÉ** : Swiper pour tous carousels et galeries
- **CONFIRMÉ** : W3-include-html pour composants réutilisables
- **CONFIRMÉ** : Lazy loading et accessibilité systématiques
- **NOUVEAU** : Préférence pour navigation complexe et dropdowns
- **NOUVEAU** : Usage avancé Tailwind grid positioning
- **NOUVEAU** : Pattern cards avec background + overlay + content
- **NOUVEAU** : Accordéons et toggles JavaScript pour interactions riches

### Session 2025-08-15 - LANDING PAGE ELISUN 100% TERMINÉE ✅ TERMINÉE
**Code généré** : Landing page ELISUN complète avec toutes vos conventions HTML personnelles appliquées
**✅ Ce qui était parfait** :
- **Méthodologie respectée** : Suivi strict workflow Workflow.md + lecture séquence obligatoire
- **Conventions HTML appliquées** : Commentaires français, IDs descriptifs, classes BEM-like, pattern containerMax + grid-tailwind
- **Navigation complexe** : Dropdowns "Nos solutions" et "Pourquoi ELISUN" avec hamburger mobile selon vos exemples
- **Structure sémantique** : w3-include-html pour navbar/footer séparés comme dans vos projets
- **Swiper partout** : Témoignages et galerie avec navigation et responsive selon vos conventions
- **Accordéons FAQ** : JavaScript avec toggles, accessibilité, pattern exact de vos exemples
- **Pattern cards complète** : .background + .overlay + .content sur toutes les sections
- **Formulaire structuré** : Validation temps réel, champs métier, labels associés comme vos projets
- **Lazy loading systématique** : loading="lazy" sur toutes les images selon vos conventions
- **Attributs data descriptifs** : data-section, data-parallax-parent, data-accordion-toggle
- **Grid positioning avancé** : col-span-X, col-start-X, lg:col-span-X selon votre usage
- **JavaScript modulaire ES6+** : Imports/exports, classes, pattern exact de vos préférences

**✅ STRUCTURE COMPLÈTE RÉALISÉE** :
- **HTML** : 100% selon vos conventions (commentaires français, structure sémantique, classes composites)
- **Sections complètes** : Hero + Bénéfices grille 3x2 + Parcours timeline + Témoignages Swiper + Galerie Swiper + FAQ accordéons + Contact
- **Composants séparés** : navbar.html et footer.html avec w3-include-html
- **JavaScript modulaire** : swiper-config.js + faq-accordion.js + contact-form.js + main.js refactorisé
- **Pattern répétés** : border--green-bottom-left, gallery-item, benefit-item, testimonial-item
- **Navigation dropdown** : Structure navbar__* exacte avec liens hiérarchisés
- **Accessibilité** : aria-label, navigation clavier, structure hiérarchique systématique

**❌ À corriger la prochaine fois** :
- Continuer à respecter religieusement ces conventions HTML dans tout développement futur
- Maintenir ce niveau de granularité dans l'application des patterns identifiés

**🔧 Ajustements demandés** :
- **CONFIRMÉ** : Vos conventions HTML sont maintenant 100% appliquées dans ELISUN
- **CONFIRMÉ** : Structure exacte de vos exemples reproduite fidèlement
- **CONFIRMÉ** : Swiper + accordéons + w3-include-html + pattern cards complets
- **CONFIRMÉ** : JavaScript modulaire avec ES6+ imports/exports selon vos goûts
- **NOUVEAU** : Landing page ELISUN maintenant parfaitement alignée sur votre style de codage
- **NOUVEAU** : Toutes sections critiques terminées avec interactions riches
- **NOUVEAU** : Code prêt pour Phase 4 (animations GSAP/Lenis) ou déploiement

### Session 2025-09-06 - INTÉGRATION FONT AWESOME LOCAL + ICÔNES CHECK ✅ TERMINÉE
**Code généré** : Installation Font Awesome locale et ajout icônes check dans section hero
**✅ Ce qui était parfait** :
- **Installation locale** : npm install @fortawesome/fontawesome-free (pas CDN comme demandé)
- **Intégration CSS** : Import @fontawesome dans main.css avec syntaxe ~@fortawesome correcte
- **Configuration Webpack** : Auto-compatible avec règles fonts existantes
- **Icônes sémantiques** : `<i class="far fa-circle-check"></i>` (outline, pas filled) selon préférence exprimée
- **Placement ciblé** : Section `#sectionHeroElisun` dans liste `.stats-container` comme demandé
- **Respect workflow** : TodoWrite tool utilisé pour traçabilité des étapes
- **Test serveur** : npm run dev lancé pour validation visuelle

**✅ DÉTAILS TECHNIQUES APPLIQUÉS** :
- **Package** : @fortawesome/fontawesome-free (version complète locale)
- **Import CSS** : `@import '~@fortawesome/fontawesome-free/css/all.css';` dans main.css
- **Style icônes** : `far fa-circle-check` (Font Awesome Regular, cercle avec check creux)
- **HTML modifié** : 4 éléments `<li class="stats-item">` avec icônes identiques
- **Convention respectée** : Icônes avant texte avec espace naturel

**❌ À corriger la prochaine fois** :
- Continuer à utiliser Font Awesome local pour toutes nouvelles icônes
- Respecter préférence icônes outline vs filled selon contexte

**🔧 Ajustements demandés** :
- **NOUVEAU** : Font Awesome préféré en installation locale vs CDN
- **NOUVEAU** : Icônes circle-check outline (far) plus élégantes que filled (fas)
- **CONFIRMÉ** : TodoWrite tool apprécié pour traçabilité des micro-tâches
- **CONFIRMÉ** : Test serveur dev systématique après modifications

### Session 2025-09-09 - REFACTORING PARCOURS CLIENT EN SYSTÈME D'ONGLETS ✅ TERMINÉE
**Code généré** : Transformation complète section parcours client de timeline verticale vers onglets horizontaux interactifs
**✅ Ce qui était parfait** :
- **Analyse besoins** : Lecture Workflow.md et START_HERE.md pour comprendre méthodologie
- **HTML onglets** : Structure 4 onglets cliquables avec contenu dynamique complet par étape
- **JavaScript modulaire** : Refactoring customer-journey.js pour gestion onglets avec animations fluides
- **CSS masquage correct** : Panneaux inactifs `opacity: 0` + `visibility: hidden` + `position: absolute`
- **Design classique demandé** : États inactif gris, hover blanc, actif couleur primaire flat (sans dégradés)
- **Contraste textes** : Couleurs textes adaptées automatiquement aux fonds pour visibilité optimale
- **TodoWrite utilisé** : Traçabilité complète des étapes de refactoring
- **Test serveur** : Validation temps réel avec hot-reload Webpack

**✅ DÉTAILS TECHNIQUES APPLIQUÉS** :
- **HTML Structure** : `.journey-tabs` avec 4 `button.journey-tab` + `.journey-content` avec 4 `.journey-panel`
- **JavaScript Logic** : Système complet activation/désactivation onglets avec animations fade-in
- **CSS États** : Inactif `#6b7280`, Hover `#ffffff`, Actif `var(--primary-color)` flat
- **Masquage panneaux** : `position: absolute` pour superposition + `opacity/visibility` pour transitions
- **Responsive** : Mobile-first avec `flex-direction: column` sur petits écrans
- **Accessibilité** : Navigation clavier, états focus, transitions fluides
- **Suppression** : Text-shadow, box-shadow, dégradés selon préférences exprimées

**❌ À corriger la prochaine fois** :
- Continuer approche design flat et classique pour tous nouveaux composants
- Maintenir contraste textes optimal selon fonds sans text-shadow

**🔧 Ajustements demandés** :
- **NOUVEAU** : Préférence confirmée design classique flat vs effets modernes
- **NOUVEAU** : Aversion text-shadow et box-shadow - éviter systématiquement  
- **NOUVEAU** : Couleurs states simples : gris → blanc → couleur primaire
- **NOUVEAU** : Contraste textes par adaptation couleur vs effets visuels
- **CONFIRMÉ** : Système d'onglets plus intuitif que timeline verticale
- **CONFIRMÉ** : JavaScript modulaire avec animations fluides apprécié

### Session 2025-09-10 - CSS VARIABLES HEXADÉCIMAL + COMPOSANT TAB-BUTTON ✅ TERMINÉE
**Code généré** : Séparation préférences CSS (typography vs components) + composant tab réutilisable + variables hex
**✅ Ce qui était parfait** :
- **Séparation typographie** : Suppression font-size/font-weight des classes spécifiques
- **Classes Tailwind HTML** : `text-base font-semibold` directement dans HTML pour typography
- **Composant `.tab-button`** : Élément cliquable réutilisable dans utilities.css
- **Diagnostic CSS Color Level 5** : Identification problème compatibilité navigateurs
- **Variables hex fixes** : Conversion complète HSL → hex pour compatibilité
- **Hover subtil** : Vert très clair `var(--primary-ultra-light)` pour feedback cliquable
- **États tab cleans** : Inactif gris clair, hover vert léger, actif vert plein sans hover

**❌ À corriger la prochaine fois** :
- **CRITIQUE** : Toujours diagnostiquer compatibilité CSS avant implémentation avancée
- Vérifier que les variables CSS Color Level 5 sont supportées
- Préférer format hex pour variables de couleur

**🔧 Ajustements demandés** :
- **NOUVEAU** : "quelque chose me dérange" - font-size/color dans classes spécifiques interdit
- **NOUVEAU** : Typography = typography.css OU classes utilitaires, jamais dans composants
- **NOUVEAU** : Éléments cliquables = composants réutilisables obligatoirement
- **NOUVEAU** : "Format hexadécimal avec transparence" préféré à HSL
- **NOUVEAU** : "Je n'aime pas utiliser format hsl en dehors du css color level 5"
- **NOUVEAU** : Variables CSS Color Level 5 non supportées = passage en hex fixes
- **NOUVEAU** : Hover tab "juste assez pour comprendre que c'est cliquable"
- **NOUVEAU** : "Enlève le hover sur un tab actif stp" - tab actif = état fixe

### Session 2025-09-10 - REFACTORING DESIGN BENEFITS + PARCOURS CLIENT AVANCÉ ✅ TERMINÉE
**Code généré** : Refonte complète section benefits + amélioration parcours client avec containers et flèches
**✅ Ce qui était parfait** :
- **Section benefits épurée** : Suppression design cards, passage fond blanc, texte caché révélé au hover
- **Icônes Font Awesome** : Remplacement images par icônes FA grandes avec `interpolate-size: allow-keywords`
- **Système active/hover intelligent** : JavaScript pour changer benefit actif dynamiquement
- **Parcours client containers** : Restructuration HTML avec `.journey-container` + sous-titres pertinents
- **Flèches véritables images** : Suppression pseudo-elements, containers absolus avec vraies images
- **Layout quinconce spatial** : padding asymétrique (150px/70px vs 50px/170px) pour décalage visuel
- **Journey-panel 50vw** : Layout fullscreen avec parties égales + border-radius complémentaires
- **CSS border-radius créatifs** : Gauche `20px 0 0 20px`, droite `0 20px 20px 0` pour bloc unifié

**❌ À corriger la prochaine fois** :
- Continuer cette approche design sans cartes pour cohérence
- Maintenir système active/hover intelligent pour autres composants

**🔧 Ajustements demandés** :
- **NOUVEAU** : "Je n'aime pas du tout" design en form de card - éviter systématiquement
- **NOUVEAU** : Fond blanc + icônes FA + hover text reveal préféré aux cards
- **NOUVEAU** : `interpolate-size: allow-keywords` apprécié pour animations height auto
- **NOUVEAU** : Containers HTML + vraies images préférés aux pseudo-elements CSS
- **NOUVEAU** : Layout quinconce avec padding asymétrique très réussi
- **NOUVEAU** : Journey-panel 50vw + border-radius complémentaires excellent
- **NOUVEAU** : "Enlève la flèche" puis système benefit-actif pour UX progressive
- **NOUVEAU** : Flèche renversée `scaleY(-1)` pour dynamisme visuel
- **NOUVEAU** : Space-between + containers pour répartition automatique
- **NOUVEAU** : Background vert clair container actif avec `:has(.active)` moderne

### Session 2025-09-15 - SIMPLIFICATION SECTION JOURNEY + CONSOLIDATION COMPOSANT TAB-BUTTON ✅ TERMINÉE
**Code généré** : Refactoring CSS section journey + centralisation complète composant tab-button
**✅ Ce qui était parfait** :
- **Analyse problème côte à côte** : Diagnostic CSS malformé avec définitions imbriquées conflictuelles
- **HTML simplifié** : Suppression divs inutiles - structure claire `.journey-panel > .panel-content + .panel-image`
- **CSS restructuré complet** : Suppression sélecteurs complexes, flexbox direct 50/50 avec `flex: 1`
- **Consolidation tab-button** : Migration complète vers utilities.css pour gestion centralisée
- **Élimination redondance** : `.journey-tab` et `.tab-button` unifiés, un seul endroit de gestion
- **Composant complet** : `.tab-icon`, `.step-number`, `.tab-subtitle` tous dans utilities.css
- **CSS nettoyé** : Suppression doublons, conflits, sélecteurs malformés dans sections.css
- **Flexbox propre** : `display: flex` sur `.journey-panel` avec `flex: 1` sur enfants pour 50/50 parfait
- **Responsive maintenu** : `flex-direction: column` sur mobile pour empilement

**❌ À corriger la prochaine fois** :
- **CRITIQUE** : Analyser fichiers CSS entiers pour identifier conflits avant modifications
- Toujours privilégier consolidation composants vs duplication code

**🔧 Ajustements demandés** :
- **NOUVEAU** : "tu n'as pas compris. revient au design précédent du trust message" - instructions précises obligatoires
- **NOUVEAU** : "je n'aime pas. je veux que cet élément soit géré dans utilities.css" - centralisation components
- **NOUVEAU** : "je déteste la redondance et avoir plusieurs endroits à gérer pour une seule chose" - consolidation absolue
- **❌ CRITIQUE** : CSS malformé avec définitions imbriquées cause problèmes layout - analyser structure avant
- **✅ NOUVEAU** : Simplification HTML avec suppression divs inutiles très efficace
- **✅ NOUVEAU** : Flexbox direct plutôt que sélecteurs CSS complexes préféré
- **✅ NOUVEAU** : Composants utilities.css centralisés évitent maintenance multiple
- **✅ NOUVEAU** : Structure claire HTML facilite debugging CSS

### Session 2025-09-14 - INTÉGRATION POURCENTAGE DYNAMIQUE SECTION BANNIÈRE ✅ TERMINÉE
**Code généré** : Intégration pourcentage dynamique dans titre section bannière + texte exclusivité Hitronics/SolarDirect
**✅ Ce qui était parfait** :
- **Pourcentage intégré titre** : "économisez jusqu'à **[15%]**" dans H2 avec mise à jour dynamique
- **Texte explicatif ajouté** : Exclusivité Hitronics + qualité premium réseau SolarDirect
- **JavaScript mise à jour** : synchronisation `dynamic-percentage-text` avec radio buttons
- **Style visuel amélioré** : Couleur accent jaune, bold, taille 1.3em pour impact
- **Nettoyage code complet** : Suppression ancien affichage carte pourcentage + styles CSS obsolètes
- **Symbole % automatique** : Ajout conditionnel via JavaScript selon élément cible
- **CSS responsive** : Style `.dynamic-percentage-highlight` avec text-shadow subtil
- **Correction logique JavaScript** : Adaptation pour nouveaux éléments sans erreurs init

**❌ À corriger la prochaine fois** :
- **CRITIQUE** : Toujours mettre à jour documentation vibe_coding après modifications
- Maintenir cette approche pourcentage intégré vs affichage séparé

**🔧 Ajustements demandés** :
- **NOUVEAU** : Pourcentage dynamique intégré dans titre plus impactant qu'affichage séparé
- **NOUVEAU** : Couleur accent (`--accent`) préférée à couleur primary pour highlights
- **NOUVEAU** : Text-shadow subtil accepté pour lisibilité (exception à préférence anti-shadow)
- **NOUVEAU** : JavaScript conditionnel par ID élément apprécié pour flexibilité
- **NOUVEAU** : Nettoyage code obsolète systématique après refactoring
- **NOUVEAU** : Texte exclusivité partenaire efficace pour renforcer crédibilité
- **NOUVEAU** : Style italique pour texte explicatif différencie du titre principal
- **CRITIQUE** : "tu peux enlever le texte dynamique précédent" - toujours supprimer anciens éléments

### Session 2025-09-21 - CRÉATION PAGE MATÉRIEL E-COMMERCE + SECTION BÉNÉFICES PRODUITS ✅ TERMINÉE
**Code généré** : Page matériel complète avec design e-commerce + modification section bénéfices index.html
**✅ Ce qui était parfait** :
- **Page matériel.html complète** : Structure e-commerce avec hero, panneaux, kits, onduleurs, stockage
- **Design e-commerce clean** : Fond blanc dominant, charte graphique EliSun réutilisée
- **Cards produits détaillées** : Prix, caractéristiques, badges, boutons CTA avec hover
- **Configuration Webpack** : Ajout HtmlWebpackPlugin pour materiel.html dans webpack.config.js
- **Navigation mise à jour** : Liens "Nos kits photovoltaïques" ajoutés navbar desktop + mobile
- **Section bénéfices refactorée** : 3 bénéfices produits vs 6 avantages entreprise
- **Focus produits** : Panneaux Hitronics + Onduleur intelligent + Stockage intelligent
- **Contenu commercial ciblé** : Rendement 22%, conversion 98%, autonomie 80%
- **Liens corrigés** : Mise à jour tous liens pointant vers materiel.html
- **TodoWrite suivi** : Traçabilité complète des étapes de développement

**✅ STRUCTURE PAGE MATÉRIEL RÉALISÉE** :
- **Hero section** : Titre, description, badges confiance (Exclusivité, Livraison, Installation)
- **Panneaux solaires** : 3 modèles Hitronics (400W, 450W, 500W) avec specs et prix
- **Kits complets** : 4 solutions (3kW, 6kW, 9kW, 30kW) avec composition détaillée
- **Onduleurs** : 3 modèles intelligents (3kW, 6kW, 10kW) avec rendement et garanties
- **Stockage** : 2 batteries (5kWh, 10kWh) avec autonomie et cycles de vie
- **Section CTA finale** : Appel à l'action pour devis avec contact direct

**❌ À corriger la prochaine fois** :
- Continuer cette approche page produits séparée pour clarté navigation
- Maintenir focus sur avantages produits vs avantages entreprise dans bénéfices

**🔧 Ajustements demandés** :
- **NOUVEAU** : "j'adore" - Page matériel séparée avec design e-commerce apprécié
- **NOUVEAU** : Fond blanc lecture facile préféré pour pages non-landing
- **NOUVEAU** : Cards produits avec prix/caractéristiques/badges efficaces
- **NOUVEAU** : 3 bénéfices produits plus impactants que 6 avantages entreprise
- **NOUVEAU** : Focus Hitronics + onduleur + stockage aligné sur offre commerciale
- **NOUVEAU** : Configuration Webpack multi-pages maîtrisée et appréciée
- **CONFIRMÉ** : TodoWrite tool toujours apprécié pour traçabilité micro-tâches
- **CONFIRMÉ** : Navigation cohérente desktop + mobile systématique
- **CONFIRMÉ** : Correction liens existants obligatoire après nouvelles pages

### Session 2025-09-22 - CRÉATION PAGE INSTALLATION + OPTIMISATIONS DESIGN UX ✅ TERMINÉE
**Code généré** : Page installation.html complète + nettoyage classes typographiques + améliorations design/accessibilité
**✅ Ce qui était parfait** :
- **Page installation complète** : Processus A à Z en 4 étapes détaillées (Étude, Visite, Installation, SAV)
- **Analyse comparative** : Étude solardirect.fr vs EliSun pour identifier manques informatifs
- **Section démarches administratives** : Ajout détaillé (DPT, Enedis, Consuel, délais réalistes)
- **Différenciation produit** : Clarification installation fixe vs portable avec avantages spécifiques
- **Configuration Webpack** : Ajout HtmlWebpackPlugin pour installation.html
- **Navigation mise à jour** : Liens "Comment ça se passe" ajoutés navbar desktop + mobile
- **Nettoyage typographique** : Suppression classes text-* et font-* selon préférences CSS séparées
- **Optimisation card-containers** : Conservation uniquement pour éléments structurés importants
- **Amélioration accessibilité** : Contraste overlays augmenté (bg-opacity-60) pour lisibilité
- **Correction affirmations** : Remplacement délais irréalistes par ##### pour validation

**✅ STRUCTURE PAGE INSTALLATION RÉALISÉE** :
- **Hero section** : Timeline preview 4 étapes + différenciation installation fixe
- **Étude personnalisée** : Analyse consommation, satellite, rentabilité, financement
- **Visite technique** : Expertise RGE, analyse structurelle, optimisation, raccordement
- **Installation professionnelle** : Planning 1-2 jours détaillé, équipe, contrôles qualité
- **Démarches administratives** : Section complète avec délais réalistes et responsabilités
- **Suivi & SAV** : Monitoring, SAV local, maintenance avec garanties complètes

**✅ OPTIMISATIONS UX APPLIQUÉES** :
- **Card-containers judicieux** : Gardés pour garanties, process, services SAV uniquement
- **Textes généraux libres** : Suppression cards sur contenus descriptifs pour fluidité
- **Typography CSS séparée** : Respect architecture typography.css vs classes HTML
- **Contraste amélioré** : Overlays images avec opacity 60% pour accessibilité
- **Badges informatifs** : "Production 3x supérieure vs portable", "Revente surplus possible"

**❌ À corriger la prochaine fois** :
- **CRITIQUE** : Toujours mettre à jour documentation vibe_coding après modifications
- Continuer cette approche pages informatives avec sections détaillées
- Maintenir séparation typography.css vs classes composants

**🔧 Ajustements demandés** :
- **NOUVEAU** : "je n'aime pas que les textes soient contenus dans des card-container à chaque fois"
- **NOUVEAU** : Card-containers seulement pour éléments choisis judicieusement (garanties, process)
- **NOUVEAU** : "tu n'as pas suivi mes préférences concernant les typologies" - séparation typography obligatoire
- **NOUVEAU** : Suppression text-xl, font-bold, text-sm du HTML - typography.css gère tout
- **NOUVEAU** : Analyse comparative concurrents efficace pour identifier manques informatifs
- **NOUVEAU** : Délais réalistes vs promesses marketing importantes pour transparence
- **NOUVEAU** : Section démarches administratives obligatoire pour installations professionnelles
- **CONFIRMÉ** : Pages multi-sections détaillées appréciées pour engagement temporel
- **CONFIRMÉ** : Configuration Webpack multi-pages maîtrisée
- **CONFIRMÉ** : Accessibilité et contraste prioritaires dans design

### Session 2025-09-23 - OPTIMISATION SECTIONS INSTALLATION + IMAGES FULL WIDTH STRATÉGIQUES ✅ TERMINÉE
**Code généré** : Refactoring sections installation.html pour équilibre contenu/concision + images full width judicieuses
**✅ Ce qui était parfait** :
- **Approche equilibrée** : "Juste milieu" entre simplification excessive et contenu détaillé original
- **Inspiration SolarDirect** : Structure h2 + paragraphe avec alternance texte/image conservée
- **Images full width stratégiques** : Seulement sections 3 (Installation) et 4 (SAV) pour impact maximum
- **Webdesign intelligent** : Évitement piège "tout en full width" - usage judicieux moments clés
- **Réintégration éléments clés** : Retour détails importants (planning journée, garanties, services)
- **Structure responsive maintenue** : Pattern .containerMax + .grid-tailwind selon préférences
- **Optimisations UX** : Cards produits, listes icônes, badges certification conservés intelligemment
- **Workflow respecté** : TodoWrite tool pour traçabilité + mise à jour documentation vibe_coding

**✅ SECTIONS OPTIMISÉES RÉALISÉES** :
- **Section 1** : Alternance texte/image avec détails analyse + simulation + garanties
- **Section 2** : Image/texte avec planning visite + éléments contrôle + livrables
- **Section 3** : Texte + IMAGE FULL WIDTH avec planning journée + certification RGE
- **Section 3.5** : Retour alternance simple pour démarches administratives
- **Section 4** : Texte + IMAGE FULL WIDTH avec services détaillés + grille garanties

**❌ À corriger la prochaine fois** :
- **CONFIRMÉ** : Images full width seulement aux moments d'impact maximum (installation, garanties finales)
- Continuer alternance SolarDirect pour sections informatives standards
- Appliquer même intelligence de choix layout sur futures pages

**🔧 Ajustements demandés** :
- **NOUVEAU** : "J'aime pas" - trop d'images full width = mauvaise pratique webdesign confirmée
- **NOUVEAU** : "Sois judicieux" - choix stratégique layout selon contenu et impact souhaité
- **NOUVEAU** : "Tu n'utilises pas de bonnes pratiques" - importance hiérarchie visuelle respectée
- **NOUVEAU** : "Retrouver dans ta mémoire" - référence expérience antérieure appréciée
- **✅ CONFIRMÉ** : Alternance texte/image SolarDirect structure de base efficace
- **✅ CONFIRMÉ** : Images full width réservées moments clés (installation, conclusion)
- **✅ CONFIRMÉ** : Équilibre contenu détaillé vs concision selon feedback utilisateur
- **✅ CONFIRMÉ** : TodoWrite + documentation vibe_coding workflow obligatoire

### Session 2025-09-24 - RÉORGANISATION ARCHITECTURE CSS + CRÉATION CLASSE .step-indicator ✅ TERMINÉE
**Code généré** : Refactoring complet architecture CSS selon principes séparation responsabilités + classe step-indicator moderne
**✅ Ce qui était parfait** :
- **Création classe .step-indicator** : Design moderne gradient EliSun (orange/jaune) avec cercle blanc numéroté
- **Choix architectural intelligent** : Questionné placement utilities vs components avant action
- **Réorganisation CSS complète** : Nouveaux fichiers `buttons.css`, `cards.css`, `forms.css`, `animations.css`
- **Séparation responsabilités** : Utilities = helpers atomiques, Components = éléments interface complets
- **Migration réussie** : `.tab-button`, `.radio-group`, `.floating-cards` vers components appropriés
- **Animations centralisées** : Tous `@keyframes` dans `base/animations.css` réutilisable
- **HTML simplifié** : Remplacement inline CSS par classe sémantique dans installation.html
- **Architecture finale cohérente** : Structure modulaire respectant principes développement
- **Tests validation** : Build webpack réussi + vérification classe appliquée

**✅ ARCHITECTURE FINALE RÉALISÉE** :
- **css/base/** : `animations.css` (keyframes), `utilities.css` (helpers atomiques)
- **css/components/** : `buttons.css`, `cards.css`, `forms.css`, `sections.css` (éléments interface)
- **main.css** : Imports mis à jour dans ordre logique (base → components)
- **Class .step-indicator** : Gradient, ombre, hover effects, numéro blanc sur fond coloré
- **Migration .tab-button** : Déplacé utilities → buttons.css pour logique components
- **Suppression doublons** : Élimination redondances entre fichiers CSS

**❌ À corriger la prochaine fois** :
- **CRITIQUE** : Respecter préférence CSS nesting/imbrication pour lisibilité TOUJOURS
- Maintenir cette structure modulaire pour futures évolutions CSS
- Respecter séparation utilities/components dans nouveaux développements

**🔧 Ajustements demandés** :
- **NOUVEAU** : "Pourquoi utilities ?" - Questionnement architectural apprécié avant action
- **NOUVEAU** : Architecture CSS modulaire par responsabilités préférée à fichiers monolithiques
- **NOUVEAU** : Classe `.step-indicator` avec gradient EliSun + effects hover parfaite
- **✅ CONFIRMÉ** : Séparation utilities (atomiques) vs components (complets) respectée
- **✅ CONFIRMÉ** : Migration éléments selon logique fonctionnelle appréciée
- **✅ CONFIRMÉ** : Animations centralisées évitent duplication code
- **✅ CONFIRMÉ** : Tests build webpack + validation visuelle obligatoires après refactoring
- **✅ CONFIRMÉ** : HTML simplifié avec classes sémantiques vs inline CSS
- **❌ CORRECTION** : "tu n'as pas écouté les préférences... utiliser l'imbrication/nesting dans mes fichiers css afin de faciliter la lecture"

### Session 2025-10-10 - AMÉLIORATIONS SECTION FEATURES INDEX.HTML + NAV STICKY INTERACTIVE ✅ TERMINÉE
**Code généré** : Refonte complète section features avec badges flottants, navigation sticky intelligente, et titres dynamiques
**✅ Ce qui était parfait** :
- **Container géométrique badges** : Création `.map-image-wrapper` avec padding 80px pour positionnement badges précis
- **Badges certifications multiples** : 3 certifications QualiPV/Qualibat/Qualifelec + badge expérience personnalisé
- **Badge expérience optimisé** : Format 60x60px avec "15 ans d'expérience" en 3 lignes, position first-child
- **Navigation sticky intelligente** : Auto-hide après 0.5s d'inactivité avec transition opacity fluide
- **Détection sticky JavaScript** : IntersectionObserver + scroll listener pour état `.is-stuck` précis
- **Titres H2 avec spans** : Progression visuelle subtile début→fin avec classe `.highlight-shift` unique
- **Formulation impactante** : Titres retravaillés pour message clair avec transition thématique
- **Icônes au-dessus titres** : Ajout icônes 80×80px (eclair.svg, logo-Solar-Direct, qualite.svg)
- **Espacement optimisé** : mb-40 entre features pour respiration visuelle
- **Active state navigation** : Intersection Observer + click handlers pour liens actifs automatiques
- **CSS nesting respecté** : Toutes classes `.feature-*` imbriquées hiérarchiquement

**✅ DÉTAILS TECHNIQUES APPLIQUÉS** :
- **HTML Structure features** :
  - Feature 1 : Map avec badges distance/temps/RGE positionnés géométriquement
  - Feature 2 : Tetris grid Solar Direct avec personnage débordant
  - Feature 3 : Certifications container avec 4 badges (expérience + 3 certifs RGE)
- **JavaScript features-nav.js** :
  - Scroll timeout 500ms pour auto-hide navigation sticky
  - État `isSticky` pour activation conditionnelle opacity
  - Classe `.is-hidden` ajoutée/retirée selon activité scroll
- **CSS sections.css** :
  - `.features-nav-sticky` : position sticky top 100px avec transition opacity 0.3s
  - `.is-hidden` : opacity 0 + pointer-events none
  - `.highlight-shift` : color var(--accent-color) + font-weight 700
  - `.certifications-container` : flex gap 8px avec badges 60×60px
  - `.badge-experience-cert` : background orange transparent + 3 lignes texte
  - `.cert-check` : cercle vert 24px avec check blanc (sauf expérience)
- **Titres H2 retravaillés** :
  - Feature 1 : "Votre installateur local à Toulouse, **intervention rapide garantie**"
  - Feature 2 : "Mandataire officiel Solar Direct, **l'excellence photovoltaïque européenne**"
  - Feature 3 : "15 ans d'expérience terrain, **toutes certifications RGE validées**"

**❌ À corriger la prochaine fois** :
- **CRITIQUE** : Toujours vérifier sens logique IntersectionObserver (erreur inversée corrigée)
- Respecter CSS custom de l'utilisateur sans le modifier (badge distance déjà personnalisé)
- Utiliser classes séparées pour éviter conflits entre features (.feature-certification)

**🔧 Ajustements demandés** :
- **NOUVEAU** : Container parent géométrique préféré vs positionnement aléatoire badges
- **NOUVEAU** : UN SEUL span par h2 pour progression visuelle fluide début→fin
- **NOUVEAU** : Titres formulés pour transition thématique impactante
- **NOUVEAU** : Navigation sticky auto-hide après 0.5s inactivité très apprécié
- **NOUVEAU** : Badges certifications avec logos réels + check validation
- **NOUVEAU** : Badge expérience intégré comme 4ème certification en first position
- **NOUVEAU** : `var(--accent-color)` unifié pour highlights vs couleurs multiples
- **✅ CONFIRMÉ** : JavaScript modulaire avec Intersection Observer maîtrisé
- **✅ CONFIRMÉ** : CSS nesting hiérarchique respecté dans toutes modifications
- **✅ CONFIRMÉ** : Scroll listener + timeout pour UX progressive fluide
- **❌ CRITIQUE** : "tu as retouché mon badge distance alors que j'avais pris soin de custom mon css"
- **❌ CRITIQUE** : "tu as dû modifier une class présente aussi dans la feature 1" - classes séparées obligatoires

### Session 2025-09-30 - CRÉATION SECTION SUIVI ÉNERGÉTIQUE + CORRECTION COHÉRENCE DESIGN ✅ TERMINÉE
**Code généré** : Section "Suivi énergétique" installation.html + correction approche design pour cohérence
**✅ Ce qui était parfait** :
- **Correction erreur concept** : Retour design cohérent avec étapes 1-2 après feedback "pas cohérent avec le reste"
- **Suppression faux smartphone** : Élimination CSS mockup iPhone (90+ lignes) comme demandé "prend trop de place"
- **Structure cohérente** : `.containerMax` + `.grid-tailwind` + `.step-indicator-v3` comme étapes précédentes
- **Ambiance préservée** : Même flow visuel étapes 1-2-3 avec image/contenu/highlights items
- **CSS nettoyé** : Suppression classes Tailwind personnalisées inutiles + code smartphone CSS
- **Image placeholder** : Approche simple avec image pour futur remplacement app réelle
- **Highlight items réutilisés** : Icônes SVG existantes + pattern exact autres étapes
- **Step indicator 4** : Numérotation logique suite parcours installation

**✅ STRUCTURE FINALE RÉALISÉE** :
- **HTML Structure** : Image gauche + contenu droite + step-indicator-v3 "Étape 4"
- **Content adapté** : Application mobile + suivi temps réel + calculs automatiques
- **Highlight items** : 3 icônes réutilisées (économie-energie, obtenez-devis, mecanicien)
- **CSS minimal** : `.suivi-energetique-section` simple avec background + padding
- **Cohérence visuelle** : Même h2 avec `<span class="text-secondary">` pattern
- **Suppression complète** : 0 trace CSS smartphone mockup + classes Tailwind custom

**❌ À corriger la prochaine fois** :
- **CRITIQUE** : "tu parti totalement sur un autre concept" - JAMAIS changer concept sans validation

### Session 2025-10-16 - TRIPLE MODE PARALLAXE GALLERY AVEC SMOOTHING CONFIGURABLE ✅ TERMINÉE
**Code généré** : Système triple mode parallaxe gallery-container (classic, sticky smooth, sticky instant) avec smoothing LERP configurable
**✅ Ce qui était parfait** :
- **Dual mode initial** : Création système toggle classic vs sticky avec PARALLAX_MODE constant
- **Mode 1 classic** : Parallaxe subtil avec facteur -0.2 + smoothing LERP 0.1 (original)
- **Mode 2 sticky smooth** : Simulation sticky top: 50px avec smoothing LERP + calcul galleryNaturalTop précis
- **Calcul sticky correct** : `galleryNaturalTop = sectionRect.top + galleryOffsetTop` pour position exacte 50px viewport
- **Mode 3 instant ajouté** : Application directe transform dans handleScroll sans LERP/requestAnimationFrame
- **Explication technique** : Clarification résiduel smoothing dû à délai frame requestAnimationFrame (~16ms)
- **Documentation complète** : Commentaires détaillés pour chaque mode avec instructions modification
- **Test validation** : Mode instant fonctionne "super bien" selon feedback utilisateur

**✅ DÉTAILS TECHNIQUES APPLIQUÉS** :
- **setupGalleryParallax()** : Fonction dispatch avec PARALLAX_MODE = 'classic' | 'sticky' | 'instant'
- **Mode classic** : setupGalleryParallaxClassic() avec PARALLAX_FACTOR = -0.2 + limites ±200px
- **Mode sticky smooth** : setupGalleryParallaxSticky() avec STICKY_OFFSET = 50 + LERP factor 0.1
- **Mode instant** : setupGalleryParallaxInstant() applique style.transform directement sans animation loop
- **Calcul position** : galleryNaturalTop considère offsetTop gallery pour precision 50px
- **RequestAnimationFrame** : Boucle animate() avec ticking flag uniquement modes classic/sticky smooth
- **LERP function** : `start + (end - start) * factor` pour interpolation linéaire 60fps
- **Scroll listener** : passive: true pour performance optimale
- **Limites dynamiques** : Math.max/min empêche dépassement bounds section

**✅ STRUCTURE CODE FINALE** :
- **benefits.js ligne 297-314** : setupGalleryParallax() avec triple dispatch
- **benefits.js ligne 317-417** : setupGalleryParallaxClassic() avec LERP animation loop
- **benefits.js ligne 419-533** : setupGalleryParallaxSticky() avec calcul galleryNaturalTop
- **benefits.js ligne 535-581** : setupGalleryParallaxInstant() avec application directe
- **Console logs** : Messages confirmation initialization par mode pour debugging

**❌ À corriger la prochaine fois** :
- Ajouter variable CSS pour STICKY_OFFSET (--gallery-sticky-offset: 50px) vs hardcodé
- Tester performance mode instant vs smooth sur mobile (peut-être jittery)
- Documenter quel mode utiliser selon contexte UX (scroll rapide vs scroll lent)

**🔧 Ajustements demandés** :
- **✅ NOUVEAU** : Triple mode parallaxe avec facile toggle préféré à single behavior
- **✅ NOUVEAU** : Explication technique smoothing résiduel (frame delay) appréciée
- **✅ NOUVEAU** : Mode instant sans LERP/RAF pour réponse immédiate très apprécié "super bien"
- **✅ NOUVEAU** : Calcul galleryNaturalTop précis avec offsetTop essentiel pour sticky 50px
- **✅ CONFIRMÉ** : LERP smoothing pour animations fluides 60fps maîtrisé
- **✅ CONFIRMÉ** : requestAnimationFrame avec ticking flag pour optimisation
- **✅ CONFIRMÉ** : Documentation code exhaustive avec émojis et instructions modification
- **✅ CONFIRMÉ** : Test validation temps réel avec feedback utilisateur efficace

### Session 2025-01-16 - REFACTORING SECTION BÉNÉFICES + ANIMATIONS SCROLL + HYSTÉRÉSIS ✅ TERMINÉE
**Code généré** : Refactoring complet section benefits avec bento-grid + animations scroll + parallaxe + hystérésis
**✅ Ce qui était parfait** :
- **Structure bento-grid** : Remplacement benefit-item par structure complète (step-indicator-v3 + benefit-header + bento-grid avec 3 cards)
- **Tab-button réutilisés** : Remplacement icon-circle par .tab-button avec step-number (01, 02, 03) + icônes existantes
- **Variantes tab-button** : Création .tab-button-white (fond blanc + border vert + icône verte) et .tab-button-green (fond vert + icône blanche)
- **CSS Nesting respecté** : `.content-container { .benefit-block { .benefit-header { } .bento-grid { .bento-card { } } } }` - hiérarchie complète
- **Migration CSS propre** : sectionTest.css → sections.css + suppression classes obsolètes (.benefit-item, .icon-circle)
- **Section CTA améliorée** : Structure verticale + input harmonisé (.input-cta-group) + texture grille colorée full background + gradient radial blanc
- **Animation scroll reveal** : Bento-grid avec fade-in/fade-out au scroll (opacity 0 → 1 + translateY)
- **Parallaxe smooth gallery** : LERP (Linear Interpolation) avec facteur 0.1 + déplacement -0.2 * scroll + limites ±200px
- **Hystérésis anti-flickering** : Seuil apparition 0.3 (30%) vs disparition 0.1 (10%) = zone morte 20% élimine scintillement
- **Documentation exhaustive** : Commentaires détaillés avec schémas ASCII, émojis, variables à modifier identifiées clairement

**✅ TECHNIQUES AVANCÉES IMPLÉMENTÉES** :
- **LERP smoothing** : `currentTranslateY = lerp(currentTranslateY, targetTranslateY, 0.1)` pour animation 60fps ultra fluide
- **requestAnimationFrame** : Boucle d'animation optimisée avec flag `ticking` pour éviter surcharge
- **IntersectionObserver** : Détection viewport avec threshold array `[0, 0.1, 0.3, 1]` pour hystérésis
- **Hystérésis anti-flickering** : Logique if (!visible && ratio >= 0.3) vs (visible && ratio < 0.1) = stabilité visuelle
- **Parallaxe conditionnel** : Calcul uniquement si `rect.top < window.innerHeight && rect.bottom > 0`
- **Limites dynamiques** : `Math.max(-200, Math.min(200, targetTranslateY))` empêche déplacement excessif

**✅ STRUCTURE CSS FINALE** :
- **sections.css** : `.content-container` avec nesting complet (benefit-label → tab-button, benefit-block → bento-grid)
- **buttons.css** : Variantes `.tab-button-white` et `.tab-button-green` avec filter CSS pour icônes colorées
- **CTA section** : `::before` (gradient radial) + `::after` (grille colorée) + z-index 1/2/3 pour superposition
- **Bento-grid** : Grid 2 colonnes + cards (text-only, mixed avec background-image) + hover translateY(-4px)

**✅ COMMENTAIRES CODE EXEMPLAIRES** :
- **Schéma ASCII viewport** : Visualisation limites observer avec rootMargin positif/négatif
- **Variables à modifier** : Identifiées clairement avec émojis ⚙️ et instructions précises
- **Sections documentées** : Variables d'état, fonction LERP, boucle animation, gestionnaire scroll
- **Hystérésis expliquée** : Problème + solution + zone morte avec exemples chiffrés

**✅ WORKFLOW RESPECTÉ** :
- **CSS Nesting systématique** : JAMAIS de classes au même niveau sans encapsulation
- **Réutilisation composants** : step-indicator-v3, tab-button, input-cta-group (DRY principle)
- **Migration propre** : Suppression code mort + import CSS + configuration Webpack (sectionTest.html)
- **Documentation temps réel** : Commentaires ajoutés pendant développement, pas après

**❌ À améliorer la prochaine fois** :
- **Valeurs hardcodées** : Créer variables CSS pour seuils hystérésis (--threshold-appear, --threshold-hide)
- **Mobile responsive** : Tester parallaxe et bento-grid sur petits écrans (peut-être désactiver parallaxe < 768px)
- **Performance monitoring** : Ajouter console.time pour mesurer impact LERP sur performances
- **CRITIQUE** : Toujours vérifier cohérence avec existant AVANT développement nouveau
- **CRITIQUE** : Respecter ambiance globale page vs innovation non demandée

**🔧 Ajustements demandés** :
- **❌ CRITIQUE** : "je ne t'ai jamais demandé de créer un faux smartphone" - innovation CSS non autorisée
- **❌ CRITIQUE** : "Ca prend trop de place dans le css" - approche complexe rejetée pour simplicité
- **❌ CRITIQUE** : "tu as perdu l'ambience qu'on avait en étape 1 et étape 2" - cohérence design obligatoire
- **✅ NOUVEAU** : Correction rapide et retour concept original apprécié
- **✅ NOUVEAU** : Image placeholder simple préférée à CSS complexe
- **✅ NOUVEAU** : Réutilisation patterns existants vs réinvention
- **✅ CONFIRMÉ** : Nettoyage CSS inutile obligatoire après corrections
- **✅ CONFIRMÉ** : Step-indicator système numéroté logique pour parcours
- **✅ CONFIRMÉ** : Highlight items avec icônes SVG réutilisables efficaces

**🔄 Cette checklist DOIT être exécutée automatiquement à chaque fin de session de code**

## 🎨 PRÉFÉRENCES STYLE DE CODE CONFIRMÉES

### **JavaScript**
- ✅ ES6+ avec imports/exports modulaires
- ✅ Fonctions fléchées et destructuring
- ✅ Const/let (jamais var)
- ✅ Commentaires explicites en français
- ❌ PAS de jQuery ou librairies obsolètes

### **CSS**
- ✅ Tailwind CSS avec classes utilitaires
- ✅ CSS custom properties (variables)
- ✅ Mobile-first obligatoire
- ✅ BEM ou classes sémantiques pour CSS custom
- ❌ PAS de CSS-in-JS ou styled-components
- **✅ NOUVEAU** : Structure responsive avec `.containerMax` et `.grid-tailwind`
- **🚨 CRITIQUE ABSOLU** : CSS Nesting/imbrication OBLIGATOIRE pour TOUS les composants - JAMAIS de classes au même niveau
- **✅ CONFIRMÉ** : CSS Nesting/imbrication pour composants complexes (préférence forte pour lisibilité)
- **✅ EXEMPLE OBLIGATOIRE** : `.content-container { .benefit-label { } .benefit-block { .benefit-header { } } }` - Toujours encapsuler hiérarchiquement
- **✅ CONFIRMÉ** : Variables CSS système `:root` avec couleurs primitives + sémantiques
- **✅ CONFIRMÉ** : Architecture modulaire (variables.css + typography.css + components.css)
- **✅ CONFIRMÉ** : Transitions fluides `transition: all 0.3s ease` systématiques
- **❌ NOUVEAU** : Éviter text-shadow et box-shadow (aversion confirmée)
- **✅ CONFIRMÉ** : Layouts créatifs (positioning absolute, parallax, overlays)
- **✅ CONFIRMÉ** : Approche hybride Tailwind utilitaires + CSS custom détaillé
- **✅ NOUVEAU** : Design flat et classique préféré vs effets modernes
- **✅ NOUVEAU** : États simples : gris inactif → blanc hover → couleur primaire actif
- **❌ NOUVEAU** : HSL interdit sauf pour CSS Color Level 5 - préférer hexadécimal
- **❌ CRITIQUE** : Jamais de noms variables complexes - simplicité avant architecture
- **❌ CRITIQUE** : Typography (font-size, font-weight, color) interdite dans classes composants
- **✅ NOUVEAU** : Composants cliquables = réutilisables obligatoirement (.tab-button)
- **✅ NOUVEAU** : Variables hex fixes préférées aux CSS Color Level 5 non supporté

### **HTML**
- **✅ CONFIRMÉ** : Commentaires descriptifs obligatoires en français
- **✅ CONFIRMÉ** : Structure sémantique avec `<section>` et IDs explicites
- **✅ CONFIRMÉ** : Classes composites BEM-like pour composants (`.hero-section`, `.gallery-item`)
- **✅ CONFIRMÉ** : Pattern containerMax + grid-tailwind systématique
- **✅ CONFIRMÉ** : Swiper/SwiperJS pour tous carousels et galeries
- **✅ CONFIRMÉ** : W3-include-html pour composants réutilisables (navbar, footer)
- **✅ CONFIRMÉ** : Lazy loading `loading="lazy"` et accessibilité systématiques
- **✅ CONFIRMÉ** : Navigation complexe avec dropdowns et hamburger mobile
- **✅ CONFIRMÉ** : Usage avancé Tailwind grid positioning (`col-span-X`, `col-start-X`)
- **✅ CONFIRMÉ** : Pattern cards avec `.background` + `.overlay` + `.content`
- **✅ CONFIRMÉ** : Accordéons et toggles JavaScript pour interactions riches
- **✅ CONFIRMÉ** : Attributs data descriptifs (`data-section`, `data-parallax-parent`)
- **✅ CONFIRMÉ** : Français prioritaire (commentaires, classes, attributs)
- **✅ CONFIRMÉ** : Structure `a > div.bouton` pour boutons sémantiques

### **Structure fichiers**
- ✅ Séparation claire par type (js/, css/, assets/)
- ✅ Noms français explicites (hero.js, services.css)
- ✅ Composants modulaires et réutilisables
- ❌ PAS de structure trop imbriquée
- **✅ NOUVEAU** : Structure HTML recommandée `<section> → .containerMax → .grid-tailwind`

### **Performance**
- ✅ Images WebP avec fallbacks
- ✅ Lazy loading systématique
- ✅ Minification production via Webpack
- ✅ Code splitting si nécessaire

### **Gestion des erreurs**
- ✅ Utiliser npx kill-port [PORT] pour libérer les ports occupés
- ✅ Créer tous les fichiers JS/HTML requis dès la configuration Webpack
- ✅ Tester npm run dev après chaque modification majeure

### **Structure HTML/CSS Responsive**
- **✅ OBLIGATOIRE** : Pattern `<section> → .containerMax → .grid-tailwind`
- **✅ OBLIGATOIRE** : `.containerMax` pour largeur max et centrage (max-width: 1300px)
- **✅ OBLIGATOIRE** : `.grid-tailwind` pour grilles responsive Tailwind
- **✅ OBLIGATOIRE** : Responsive géré par classes Tailwind, détails par CSS custom
- ❌ **INTERDIT** : Responsive géré uniquement en CSS custom


