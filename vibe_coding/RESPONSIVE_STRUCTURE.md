# 📱 Structure HTML/CSS Responsive - ELISUN

**Utilité** : Documentation de la structure responsive obligatoire pour toutes les sections
**Usage** : Référence constante pour le développement HTML/CSS
**Pour l'IA** : RESPECTER SCRUPULEUSEMENT cette structure dans tout développement HTML

---

## 🏗️ STRUCTURE OBLIGATOIRE

### Pattern de base
```html
<section>
   <!-- Section spécifique avec styles background/spacing -->
   ...
   <div class="containerMax">
      <!-- Contenu centré et largeur max -->
       ...
      <div class="grid-tailwind">
         <!-- Grille responsive Tailwind -->
         ...
      </div>
   </div>
</section>
```

## 📏 DÉFINITIONS DES CLASSES

### `.containerMax`
**Rôle** : Largeur maximale et centrage du contenu

**Définition CSS** :
```css
.containerMax {
    @apply mx-4 md:mx-8 lg:mx-auto lg:w-[90%];
    max-width: 1300px;
    height: 100%;
}
```

**Équivalent Tailwind** : `max-w-7xl mx-auto px-4`

### `.grid-tailwind` 
**Rôle** : Grille responsive avec Tailwind

**Définition CSS** :
```css
.grid-tailwind {
    @apply grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8;
    margin: auto;
}
```

**Adaptations courantes** :
- Services : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Avantages : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`  
- Contact : `grid lg:grid-cols-2 gap-16`

## 🔧 EXEMPLES D'USAGE

### Structure classique
```html
<section id="services" class="services section-padding bg-gray-50">
   <div class="containerMax">
      <div class="section-header text-center mb-16">
         <h2 class="text-section">Nos Services</h2>
      </div>
      <div class="grid-tailwind grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div class="service-card">...</div>
         <div class="service-card">...</div>
         <div class="service-card">...</div>
      </div>
   </div>
</section>
```

### Fusion de classes (simplification)
```html
<section>
   <div class="containerMax grid-tailwind grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>Bloc 1</div>
      <div>Bloc 2</div>
   </div>
</section>
```

### Ajout d'éléments intermédiaires
```html
<section>
   <div class="ancetre">
      <div class="containerMax">
         <div class="grand-parent">
            <div class="parent">
               <div class="grid-tailwind grid md:grid-cols-3 gap-8">
                  ...
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
```

## ⚡ RÉPARTITION RESPONSIVE

### Breakpoints Tailwind standards
- **Mobile** : `< 640px` → `grid-cols-1`
- **Tablet** : `≥ 640px` → `md:grid-cols-2` ou `md:grid-cols-3`
- **Desktop** : `≥ 1024px` → `lg:grid-cols-3` ou `lg:grid-cols-4`
- **Large** : `≥ 1280px` → `xl:grid-cols-4` ou `xl:grid-cols-6`

### Gestion des détails
- **Grilles** : Classes Tailwind (`grid`, `grid-cols-*`, `gap-*`)
- **Éléments enfants** : CSS custom pour spacing/typography/animations
- **Containers** : `.containerMax` pour largeurs et centrage
- **Backgrounds** : Directement sur `<section>` 

## 🚫 INTERDICTIONS

❌ **Responsive géré uniquement en CSS** - Toujours utiliser classes Tailwind pour grilles  
❌ **Utiliser les anciens containers** - Remplacer par `.containerMax`  
❌ **Grilles CSS pures** - Toujours utiliser `grid grid-cols-*` de Tailwind  
❌ **Max-width en dur** - Utiliser `.containerMax` (1300px max)  

## ✅ AVANTAGES DE CETTE APPROCHE

- **Cohérence** : Structure identique sur toutes les sections
- **Maintenance** : Classes utilitaires centralisées
- **Performance** : Responsive optimisé avec Tailwind
- **Flexibilité** : Adaptable selon contexte (fusion/ajout éléments)
- **Lisibilité** : Pattern clair et prévisible

---

**🎯 OBLIGATOIRE** : Utiliser cette structure pour toutes les sections principales des pages ELISUN