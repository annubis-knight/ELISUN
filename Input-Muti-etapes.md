# INPUT MULTI-ÉTAPES - ELISUN CTA

## HTML Structure

<!DOCTYPE html> <html lang="fr"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>CTA Input Multi-étapes</title> <link rel="stylesheet" href="style.css"> </head> <body> <!-- SECTION CTA PRINCIPALE --> <section class="cta"> <div class="cta-content"> <h2>Rejoignez la transition solaire</h2> <p>Recevez votre devis personnalisé gratuit</p>
  <!-- 🎯 CONTAINER DU INPUT DYNAMIQUE -->
  <div id="inputContainer" class="input-wrapper">
    <!-- Le contenu sera injecté par JavaScript -->
  </div>
</div>
</section> <script src="script.js"></script> </body> </html> ```


// ============================================
// INPUT MULTI-ÉTAPES - CONFIGURATION
// ============================================

// 🔧 DÉFINIS TES ÉTAPES ICI (un input = une étape OU plusieurs inputs = une étape)
const steps = [
  {
    // ✉️ ÉTAPE 1 : Email seul
    fields: ['email'],
    html: `
      <input 
        type="email" 
        id="email" 
        placeholder="Votre email professionnel" 
        required
        autocomplete="email"
      >
      <button id="validateBtn" type="button">Continuer →</button>
    `
  },
  {
    // 👤 ÉTAPE 2 : Nom + Prénom (2 inputs côte à côte)
    fields: ['nom', 'prenom'],
    html: `
      <input 
        type="text" 
        id="nom" 
        placeholder="Nom" 
        required
        autocomplete="family-name"
      >
      <input 
        type="text" 
        id="prenom" 
        placeholder="Prénom" 
        required
        autocomplete="given-name"
      >
      <button id="validateBtn" type="button">Valider →</button>
    `
  }
  
  // 💡 EXEMPLE : Ajouter une 3ème étape (téléphone + ville)
  // {
  //   fields: ['telephone', 'ville'],
  //   html: `
  //     <input type="tel" id="telephone" placeholder="06 12 34 56 78">
  //     <input type="text" id="ville" placeholder="Ville">
  //     <button id="validateBtn">Finaliser</button>
  //   `
  // }
];

// ============================================
// 🔐 CONFIGURATION API BREVO (CRM)
// ============================================

const BREVO_CONFIG = {
  apiKey: 'xkeysib-VOTRE_CLE_API', // 🔑 Clé API depuis https://app.brevo.com/settings/keys/api
  endpoint: 'https://api.brevo.com/v3/contacts',
  listId:  // 📋 ID de ta liste Brevo (optionnel)[1]
};

// ⚠️ IMPORTANT SÉCURITÉ : En production, appelle un backend proxy, pas directement Brevo !
// Exemple : const PROXY_URL = 'https://ton-domaine.com/api/contact';

// ============================================
// LOGIQUE PRINCIPALE
// ============================================

const container = document.getElementById('inputContainer');
let currentStep = 0; // Index de l'étape actuelle

// 🎬 INITIALISATION : Affiche la première étape
container.innerHTML = steps[currentStep].html;

// 🎯 EVENT DELEGATION : Un seul écouteur pour tous les clics
container.addEventListener('click', async (e) => {
  
  // ✋ Réagit uniquement au clic sur le bouton de validation
  if (e.target.id !== 'validateBtn') return;
  
  // Empêche les doubles clics
  e.target.disabled = true;
  e.target.textContent = 'Envoi...';

  // ============================================
  // 1️⃣ COLLECTE & VALIDATION DES DONNÉES
  // ============================================
  
  const data = {};
  let isValid = true;
  
  // Boucle sur tous les champs de l'étape actuelle
  steps[currentStep].fields.forEach(fieldId => {
    const input = document.getElementById(fieldId);
    const value = input?.value.trim();
    
    // 🛡️ Validation : Champ vide
    if (!value) {
      input.classList.add('error');
      isValid = false;
      setTimeout(() => input.classList.remove('error'), 300);
      return;
    }
    
    // 🛡️ Validation : Email (regex basique)
    if (fieldId === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        input.classList.add('error');
        alert('Email invalide');
        isValid = false;
        return;
      }
    }
    
    // 🛡️ Validation : Téléphone français (optionnel)
    if (fieldId === 'telephone') {
      const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
      if (!phoneRegex.test(value)) {
        input.classList.add('error');
        alert('Téléphone invalide (format: 06 12 34 56 78)');
        isValid = false;
        return;
      }
    }
    
    // ✅ Champ valide
    data[fieldId] = value;
    
    // 💾 STOCKAGE LOCAL : Persist dans le navigateur
    localStorage.setItem(fieldId, value);
  });
  
  // ❌ Arrête si validation échoue
  if (!isValid) {
    e.target.disabled = false;
    e.target.textContent = steps[currentStep].fields.length > 1 ? 'Valider →' : 'Continuer →';
    return;
  }

  // ============================================
  // 2️⃣ ENVOI À BREVO (CRM)
  // ============================================
  
  try {
    // 📧 Récupère l'email (soit de cette étape, soit du localStorage)
    const email = data.email || localStorage.getItem('email');
    
    // 📦 Construction du payload Brevo
    const payload = {
      email: email,
      attributes: {
        // 🔄 Mappe tes champs selon tes attributs Brevo
        NOM: data.nom || localStorage.getItem('nom') || '',
        PRENOM: data.prenom || localStorage.getItem('prenom') || '',
        // TELEPHONE: data.telephone || '',
        // VILLE: data.ville || ''
      },
      listIds: BREVO_CONFIG.listId,
      updateEnabled: true // ♻️ Met à jour le contact s'il existe déjà
    };
    
    // 🚀 Appel API Brevo
    const response = await fetch(BREVO_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_CONFIG.apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    // ⚠️ Gestion des erreurs API
    if (!response.ok) {
      const error = await response.json();
      console.error('❌ Erreur Brevo:', error);
      
      // Code 400 = Contact existe déjà (OK pour nous)
      if (response.status !== 400) {
        alert('Erreur lors de l\'envoi. Réessayez.');
        e.target.disabled = false;
        e.target.textContent = 'Réessayer';
        return;
      }
    }
    
    console.log('✅ Données envoyées à Brevo');
    
  } catch (error) {
    // 🚨 Erreur réseau
    console.error('❌ Erreur réseau:', error);
    alert('Problème de connexion. Vérifiez votre réseau.');
    e.target.disabled = false;
    e.target.textContent = 'Réessayer';
    return;
  }

  // ============================================
  // 3️⃣ PASSAGE À L'ÉTAPE SUIVANTE OU FIN
  // ============================================
  
  currentStep++; // Incrémente l'étape
  
  if (currentStep < steps.length) {
    // 📄 Encore des étapes : Affiche la suivante
    container.innerHTML = steps[currentStep].html;
    
  } else {
    // ✅ Toutes les étapes terminées
    container.innerHTML = `
      <div class="success-message">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <div>Merci ! Vous recevrez votre devis sous 24h.</div>
      </div>
    `;
    
    // 🧹 OPTIONNEL : Nettoie le localStorage après succès
    // localStorage.clear();
    
    // 📊 OPTIONNEL : Track la conversion (Google Analytics, Meta Pixel, etc.)
    // gtag('event', 'conversion', { 'send_to': 'AW-XXXXX/YYYYY' });
  }
});

// ============================================
// 🔄 PRÉ-REMPLISSAGE AUTOMATIQUE (optionnel)
// ============================================

// Si l'utilisateur revient sur la page, pré-remplit avec les données localStorage
window.addEventListener('load', () => {
  steps[currentStep].fields.forEach(fieldId => {
    const savedValue = localStorage.getItem(fieldId);
    if (savedValue) {
      const input = document.getElementById(fieldId);
      if (input) input.value = savedValue;
    }
  });
});
