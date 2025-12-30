# Convention des Data Attributes - EliSun

Ce document définit les règles de nommage et d'utilisation des attributs `data-*` dans le projet EliSun.

---

## Philosophie : Nommer par Objectif

**Principe clé** : En lisant un attribut, on doit comprendre **instantanément son objectif**.

```html
<!-- Bon : Je sais que c'est du tracking -->
data-track-cta="hero"

<!-- Mauvais : C'est quoi "step" ? Formulaire ? Animation ? Navigation ? -->
data-step="1"
```

---

## Convention Adoptée : 4 Préfixes

| Préfixe | Objectif | Usage |
|---------|----------|-------|
| `data-track-*` | Analytics GTM | Tracking clics, scroll, formulaire |
| `data-action-*` | Déclencheurs | Modal, slide, toggle, navigation, filtre |
| `data-state-*` | États | Étape courante, indicateur, animation, audience |
| `data-value-*` | Données | Video ID, pourcentage, labels |

---

## 1. `data-track-*` — Analytics GTM

**Objectif** : Envoyer des événements à Google Tag Manager.

| Attribut | Valeur | Description |
|----------|--------|-------------|
| `data-track-cta` | `"hero"`, `"navbar"`, `"footer"` | Tracking clic sur CTA |

**Fichier JS** : `src/js/utils/gtm-atracking.js` (sera remplacé)

**Exemple** :
```html
<button data-track-cta="hero-primary">Demander un devis</button>
```

---

## 2. `data-action-*` — Déclencheurs d'Actions

**Objectif** : Déclencher une action (ouvrir modal, changer slide, toggle, filtrer).

| Attribut | Valeur | Description |
|----------|--------|-------------|
| `data-action-modal` | `"devis"` | Ouvre un modal spécifique |
| `data-action-close` | (sans valeur) | Ferme le modal parent |
| `data-action-nav` | `"next"`, `"prev"` | Navigation formulaire |
| `data-action-slide` | `"1"`, `"2"` | Active un slide (1-based) |
| `data-action-toggle` | `"panneaux-specs"` | Toggle visibilité (ID cible) |
| `data-action-filter` | `"particulier"`, `"professionnel"` | Filtre le contenu |

**Fichiers JS** : `ui-modal-devis.js`, `page-materiel-onduleur-slider.js`, `page-materiel-specs-toggle.js`, `page-materiel-trigger-block.js`

**Exemples** :
```html
<!-- Ouvrir modal -->
<button data-action-modal="devis">Obtenir un devis</button>

<!-- Fermer modal -->
<button data-action-close aria-label="Fermer">x</button>

<!-- Navigation formulaire -->
<button data-action-nav="next">Suivant</button>
<button data-action-nav="prev">Précédent</button>

<!-- Changer de slide -->
<button data-action-slide="1" class="active">HICONICS</button>
<button data-action-slide="2">SWATTEN</button>

<!-- Toggle specs -->
<button data-action-toggle="onduleurs-specs">Voir les specs</button>

<!-- Filtrer par audience -->
<button data-action-filter="particulier">Particuliers</button>
```

---

## 3. `data-state-*` — États

**Objectif** : Représenter l'état actuel d'un élément.

| Attribut | Valeur | Description |
|----------|--------|-------------|
| `data-state-step` | `"1"`, `"2"` | Numéro d'étape formulaire |
| `data-state-indicator` | `"1"`, `"2"` | Indicateur de progression |
| `data-state-slide` | `"1"`, `"2"` | État du slide (contenu) |
| `data-state-scroll` | `"1"`, `"2"` | Étape scroll reveal |
| `data-state-audience` | `"particulier"`, `"professionnel"` | Section par audience |
| `data-state-anim-before` | `"true"`, `"false"` | État animation hero before |
| `data-state-anim-after` | `"true"`, `"false"` | État animation hero after |
| `data-state-parallax` | `"parent"`, `"bg"`, `"content"` | Rôle parallax |

**Fichiers JS** : `ui-modal-devis.js`, `landing-benefices.js`, `landing-hero-background.js`

**Exemples** :
```html
<!-- Étapes formulaire -->
<div data-state-step="1" class="active">Étape 1</div>
<div data-state-step="2" hidden>Étape 2</div>

<!-- Indicateurs de progression -->
<span data-state-indicator="1" class="active"></span>
<span data-state-indicator="2"></span>

<!-- Contenu par audience -->
<div data-state-audience="particulier">Offres particuliers</div>
<div data-state-audience="professionnel" hidden>Offres pro</div>

<!-- Parallax -->
<section data-state-parallax="parent">
  <div data-state-parallax="bg"></div>
  <div data-state-parallax="content"></div>
</section>
```

---

## 4. `data-value-*` — Données

**Objectif** : Stocker des données associées à un élément.

| Attribut | Valeur | Description |
|----------|--------|-------------|
| `data-value-video` | `"_FY7WNiGN_c"` | ID YouTube |
| `data-value-label` | `"Paramètre"`, `"Valeur"` | Label responsive tables |
| `data-value-percent` | `"60"`, `"80"`, `"100"` | Valeur pourcentage |

**Fichiers** : `ui-video-player.js`, CSS responsive tables

**Exemples** :
```html
<!-- Video player -->
<div class="card-video" data-value-video="_FY7WNiGN_c">
  <img src="thumbnail.jpg" alt="Vidéo">
</div>

<!-- Progress bar -->
<div class="garantie-progress" data-value-percent="80"></div>

<!-- Table responsive -->
<td data-value-label="Paramètre">Modèle</td>
<td data-value-label="Valeur">BGPV 500</td>
```

**CSS associé** :
```css
.garantie-progress {
  &[data-value-percent="60"] { width: 60%; }
  &[data-value-percent="80"] { width: 80%; }
  &[data-value-percent="100"] { width: 100%; }
}
```

---

## Tableau de Migration (Réalisée le 2025-12-30)

| Ancien | Nouveau |
|--------|---------|
| `data-open-modal="devis"` | `data-action-modal="devis"` |
| `data-close-modal` | `data-action-close` |
| `data-nav="next"` | `data-action-nav="next"` |
| `data-step="1"` (form) | `data-state-step="1"` |
| `data-step-indicator="1"` | `data-state-indicator="1"` |
| `data-slide="0"` | `data-action-slide="1"` (1-based) |
| `data-target="specs-id"` | `data-action-toggle="specs-id"` |
| `data-type="particulier"` | `data-action-filter="particulier"` |
| `data-target="particulier"` | `data-state-audience="particulier"` |
| `data-video-id="xxx"` | `data-value-video="xxx"` |
| `data-percentage="80"` | `data-value-percent="80"` |
| `data-label="xxx"` | `data-value-label="xxx"` |
| `data-parallax-parent` | `data-state-parallax="parent"` |
| `data-animate-before` | `data-state-anim-before` |
| `data-step="01"` (scroll) | `data-state-scroll="1"` |

---

## Règles de Bonnes Pratiques

### 1. Unicité des noms
Chaque attribut doit avoir **une seule signification** dans tout le projet.

### 2. Valeurs 1-based
Toutes les valeurs numériques commencent à 1 (pas 0).

```html
<!-- Correct -->
data-action-slide="1"
data-state-step="1"
```

### 3. Accessibilité (ARIA)
Les `data-*` ne remplacent pas ARIA pour l'accessibilité.

```html
<dialog data-action-modal="devis"
        aria-hidden="true"
        aria-modal="true"
        aria-labelledby="modal-title">
```

---

## Checklist Avant Commit

- [ ] L'attribut suit la convention `data-[action|state|track|value]-[détail]`
- [ ] Le nom est unique (pas de collision avec un autre usage)
- [ ] La valeur utilise le format 1-based pour les index
- [ ] Le fichier JS correspondant utilise le bon sélecteur
- [ ] Les sélecteurs CSS sont mis à jour si nécessaire

---

## Historique des Modifications

| Date | Version | Changements |
|------|---------|-------------|
| 2025-12-30 | 1.0 | Création du document |
| 2025-12-30 | 2.0 | Refactoring complet vers 4 préfixes (action, state, track, value) |
