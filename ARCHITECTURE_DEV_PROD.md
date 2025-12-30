# Architecture DEV/PROD & Firebase Hosting - EliSun

## Vue d'ensemble

Le projet utilise une architecture **duale** permettant de développer localement avec un serveur Express tout en déployant sur Firebase Hosting + Cloud Functions en production.

---

## 1. Configuration Firebase

### firebase.json
```
Emplacement: /firebase.json
```

| Section | Configuration |
|---------|---------------|
| **Hosting** | `public: "dist/"` - Dossier de build Webpack |
| **Rewrites API** | `/api/brevo-contact` → Function `brevoContact` |
| | `/api/brevo-lead` → Function `brevoLead` |
| **Cache** | JS/CSS/Images: 1 an (hash) / HTML: no-cache |
| **URLs** | `cleanUrls: true`, `trailingSlash: false` |
| **Runtime** | Node.js 20 |

### .firebaserc
```json
{ "projects": { "default": "elisun-website" } }
```

---

## 2. Cloud Functions (Production)

### Structure du dossier `functions/`

```
functions/
├── index.js          # Entry point - 2 fonctions exportées
├── brevo-logic.js    # Logique partagée Brevo
├── package.json      # type: "commonjs", node: "20"
└── package-lock.json
```

### functions/index.js - Fonctions exportées

#### `brevoContact` (Modal formulaire complet)
- **Route**: `/api/brevo-contact`
- **Méthode**: POST
- **Données**: nom, prenom, email, telephone, puissance, adresse, description
- **Logique**: Appelle `createBrevoContact()` depuis `brevo-logic.js`
- **Secret**: `BREVO_API_KEY` via `defineSecret()`

#### `brevoLead` (CTA progressif)
- **Route**: `/api/brevo-lead`
- **Méthode**: POST
- **Données**: email, prenom (optionnel), nom (optionnel)
- **Stratégie**: `updateEnabled: true` (crée ou met à jour)
- **Attributs Brevo**: `PRENOM`, `NOM`

### functions/brevo-logic.js - Logique partagée

```javascript
createBrevoContact(data, apiKey)
├── Valide: nom, prenom, email, telephone, description
├── Attributs Brevo: PRENOM, NOM, TEL, PUISSANCE_KW, ADRESSE_POSTALE, DESCRIPTION_PROJET
├── POST → https://api.brevo.com/v3/contacts
└── updateEnabled: true
```

### Gestion des Secrets

| Environnement | Méthode |
|---------------|---------|
| **Production** | Firebase Secret Manager via `defineSecret('BREVO_API_KEY')` |
| **Accès** | `brevoApiKey.value()` dans les fonctions |

---

## 3. Serveur Local (Développement)

### server.js
```
Emplacement: /server.js
Port: 3000
```

| Aspect | Configuration |
|--------|---------------|
| **Framework** | Express.js |
| **CORS** | Activé pour tous les origines |
| **Import** | `createRequire` pour charger CommonJS depuis ES Module |

### Routes miroir

| Route | Fonction Firebase équivalente |
|-------|------------------------------|
| `POST /api/brevo-contact` | `brevoContact` |
| `POST /api/brevo-lead` | `brevoLead` |

### Variables d'environnement (.env)

```
BREVO_API_KEY=xkeysib-xxxxx
```

Le serveur utilise `dotenv` pour charger la clé API localement.

---

## 4. Détection DEV/PROD (Frontend)

### Logique commune (ui-modal-devis.js & landing-cta-progressive.js)

```javascript
const hostname = window.location.hostname;
const IS_LOCAL = hostname === 'localhost'
  || hostname === '127.0.0.1'
  || hostname.startsWith('192.168.');

const API_ENDPOINT = IS_LOCAL
  ? 'http://localhost:3000/api/...'  // DEV
  : '/api/...';                       // PROD
```

### Fichiers concernés

| Fichier | Endpoint utilisé |
|---------|------------------|
| `src/js/components/ui-modal-devis.js` | `/api/brevo-contact` |
| `src/js/components/landing-cta-progressive.js` | `/api/brevo-lead` |

---

## 5. Webpack Configuration

### webpack.config.cjs

| Aspect | Développement | Production |
|--------|---------------|------------|
| **Mode** | `development` | `production` |
| **Output** | `js/[name].js` | `js/[name].[contenthash].js` |
| **CSS** | `style-loader` (injecté) | `MiniCssExtractPlugin` (fichier séparé) |
| **SourceMaps** | `eval-source-map` | `source-map` |
| **DevServer** | Port 8080, HMR activé | - |

### Pages générées (HtmlWebpackPlugin)

- `index.html` (landing)
- `materiel.html` (produits)
- `installation.html` (installation)
- `faq.html` (FAQ)

### Assets copiés (CopyWebpackPlugin)

- `src/assets/` → `dist/assets/`
- `src/components/` → `dist/components/`

---

## 6. Flux de données

### Développement (Local)

```
Browser (localhost:8080)
    ↓
Frontend détecte IS_LOCAL = true
    ↓
fetch('http://localhost:3000/api/brevo-contact')
    ↓
server.js (Express)
    ↓
createBrevoContact() [functions/brevo-logic.js]
    ↓
Brevo API (clé depuis .env)
```

### Production (Firebase)

```
Browser (elisun-toulouse.fr)
    ↓
Frontend détecte IS_LOCAL = false
    ↓
fetch('/api/brevo-contact')
    ↓
Firebase Hosting rewrite
    ↓
Cloud Function: brevoContact
    ↓
createBrevoContact() [functions/brevo-logic.js]
    ↓
Brevo API (clé depuis Secret Manager)
```

---

## 7. Commandes

### Développement

```bash
# Terminal 1 - Frontend
npm run dev              # Webpack DevServer sur :8080

# Terminal 2 - Backend
node server.js           # Express sur :3000
```

### Production

```bash
npm run build            # Build dans dist/
firebase deploy          # Deploy hosting + functions
```

---

## 8. Résumé des fichiers clés

| Fichier | Rôle | Environnement |
|---------|------|---------------|
| `firebase.json` | Config hosting + rewrites | PROD |
| `.firebaserc` | Projet Firebase cible | PROD |
| `.env` | Clé API locale | DEV |
| `server.js` | Serveur Express local | DEV |
| `functions/index.js` | Cloud Functions | PROD |
| `functions/brevo-logic.js` | Logique Brevo partagée | DEV + PROD |
| `webpack.config.cjs` | Bundler frontend | DEV + PROD |
| `ui-modal-devis.js` | Modal + détection env | DEV + PROD |
| `landing-cta-progressive.js` | CTA + détection env | DEV + PROD |

---

## 9. Points architecturaux clés

1. **DRY**: `brevo-logic.js` est partagé entre `server.js` et `functions/index.js`
2. **Auto-détection**: Le frontend détecte l'environnement via `window.location.hostname`
3. **Secrets sécurisés**: Production utilise Firebase Secret Manager, pas de clés dans le code
4. **Rewrites Firebase**: Les routes `/api/*` sont transparentes entre dev et prod
5. **CommonJS/ESM**: `server.js` (ESM) utilise `createRequire` pour importer `brevo-logic.js` (CommonJS)
