# 📋 Règles de développement et conventions

**Utilité** : Standards de code, bonnes pratiques et contraintes techniques strictes
**Usage** : Référence constante - chaque génération de code doit respecter ces règles
**Pour l'IA** : Ces règles sont NON-NÉGOCIABLES. Vérifiez leur conformité avant de 
proposer du code. En cas de doute entre créativité et règles, TOUJOURS privilégier 
les règles. Mentionnez explicitement quelle règle vous appliquez.

---

# EXEMPLE :

## 🏗️ STANDARDS TECHNIQUES

### **Framework et technologies**
- Stack : HTML5 + CSS3 + JavaScript ES6+ (VANILLA UNIQUEMENT)
- CSS : Tailwind CSS 3.4.17 + CSS custom variables
- Bundler : Webpack (dev-server + production + multi-pages)
- Animations : GSAP + Lenis (smooth scroll)
- Configuration : HtmlWebpackPlugin pour chaque page HTML
- Hébergement : Firebase

### **Structure de code**
- Organisation modulaire avec imports ES6
- Composants JavaScript séparés et réutilisables
- Styles CSS séparés par composant et utilité
- Noms de fichiers explicites en français
- INTERDICTION : React, Next.js, Nuxt, Python, Vue
- Code lisible et simple avant optimisation
- **OBLIGATOIRE** : Structure HTML `<section> → .containerMax → .grid-tailwind`
- **🚨 CRITIQUE ABSOLU** : CSS Nesting/imbrication OBLIGATOIRE pour TOUS les composants
  - ❌ INTERDIT : Classes au même niveau sans encapsulation
  - ✅ OBLIGATOIRE : Structure hiérarchique `.parent { .child { .grandchild { } } }`
  - 📝 Exemple : `.content-container { .benefit-block { .benefit-header { h3 { } } } }`
  - 🎯 Objectif : Hiérarchie visuelle claire et maintenabilité du code CSS
- **NOUVEAU** : Consolidation composants obligatoire - un seul endroit de gestion par élément
- **NOUVEAU** : Architecture CSS modulaire - séparation utilities (atomiques) vs components (complets)
- **NOUVEAU** : Interdiction formelle de duplication code (redondance = rejet)
- **NOUVEAU** : Classes sémantiques réutilisables (.step-indicator, .tab-button, etc.)
- **NOUVEAU** : Tests validation obligatoires (build webpack + vérification visuelle)

## ⚡ PERFORMANCE OBLIGATOIRE

### **Vitesse de chargement**
- Images optimisées (WebP + fallbacks + lazy loading)
- CSS/JS minifiés et optimisés par Webpack en production
- Mobile-first OBLIGATOIRE (développement commence par mobile)
- Scripts npm séparés : build:css et build:js pour optimisations

### **SEO technique**
- Balises meta complètes sur toutes les pages
- Structure HTML sémantique
- Schema.org si pertinent
- Sitemap XML généré automatiquement

## 📱 COMPATIBILITÉ & ACCESSIBILITÉ

### **Responsive design**
- Mobile-first obligatoire
- Breakpoints standards : 375px, 768px, 1024px, 1440px

### **Accessibilité**
- Contraste couleurs conforme [AA/AAA selon budget]
- Navigation clavier fonctionnelle
- Textes alternatifs sur images importantes
- Balises ARIA si interactions complexes

## 🛠️ MAINTENANCE & ÉVOLUTIVITÉ

### **Simplicité du code**
- Privilégier solutions simples aux solutions complexes
- Documentation technique en français
- Zéro dépendance inutile
- Commentaire à chaque début de fichier, et à chaque fois que tu jugeras nécessaire

### **Versioning et sauvegarde**
- Git obligatoire avec commits explicites en français
- Branches : main + dev (+ feature si projet complexe)
- Backup automatique si hébergement critique

## 💰 CONVERSIONS & BUSINESS

### **Analytics & tracking**
- [GA4 systématique / GA4 + pixels selon budget / tracking minimal]
- RGPD compliant avec bandeau cookies

## 🎨 STANDARDS VISUELS

### **Cohérence interface**
- Respect strict de l'identité de marque (voir CONTEXT.md)
- Hiérarchie visuelle claire (titres, sous-titres, paragraphes)
- Espacement cohérent (système de grille grâce à gridTailwind et aux classes unitaires de spacing de tailwind))
- Animations sobres et utiles uniquement

### **Contenus**
- Textes fournis par le client utilisés tels quels
- Images optimisées et pertinentes
- Call-to-actions dans le ton de la marque
- Zéro lorem ipsum en production

## 🔒 SÉCURITÉ & CONFORMITÉ

### **Sécurité de base**
- HTTPS obligatoire
- [Validation côté serveur systématique / côté client suffisant selon criticité]
- Mots de passe admin forts

### **Conformité légale**
- Mentions légales complètes
- RGPD : bandeau cookies + politique de confidentialité
- [CGV si e-commerce / CGU si nécessaire]
- Déclaration CNIL si collecte données sensibles

