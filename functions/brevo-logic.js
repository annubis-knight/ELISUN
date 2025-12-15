// shared/brevo-logic.js
const axios = require('axios');

/**
 * Crée ou met à jour un contact dans Brevo
 * @param {Object} data - Données du formulaire
 * @param {string} apiKey - Clé API Brevo
 * @returns {Promise<Object>}
 */
async function createBrevoContact(data, apiKey) {
  const { nom, prenom, email, telephone, puissance, adresse, description } = data;
  
  // Validation des champs obligatoires
  if (!nom || !prenom || !email || !telephone || !description) {
    throw new Error('Champs obligatoires manquants');
  }
  
  console.log('📤 Envoi à Brevo (formulaire modal):', {
    email,
    attributes: {
      PRENOM: prenom,
      NOM: nom,
      TEL: telephone,
      PUISSANCE_KW: puissance || 'Non spécifié',
      ADRESSE_POSTALE: adresse || '',
      DESCRIPTION_PROJET: description
    }
  });
  
  // Appel API Brevo
  const response = await axios.post(
    'https://api.brevo.com/v3/contacts',
    {
      email: email,
      attributes: {
        PRENOM: prenom,
        NOM: nom,
        TEL: telephone,
        PUISSANCE_KW: puissance || 'Non spécifié',
        ADRESSE_POSTALE: adresse || '',
        DESCRIPTION_PROJET: description
      },
      updateEnabled: true
    },
    {
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json'
      }
    }
  );
  
  console.log('✅ Contact créé/mis à jour - ID:', response.data.id || '(update)');
  return response.data;
}

module.exports = { createBrevoContact };
