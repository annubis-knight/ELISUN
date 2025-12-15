// functions/index.js
const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const cors = require('cors')({ origin: true });
const axios = require('axios');

// Import de la logique Brevo (formulaire modal complet)
const { createBrevoContact } = require('./brevo-logic');

// Définition du secret pour la clé API Brevo
const brevoApiKey = defineSecret('BREVO_API_KEY');

// ============================================
// FONCTION 1 : Formulaire modal (tous les champs)
// ============================================
exports.brevoContact = onRequest({ secrets: [brevoApiKey] }, (req, res) => {
  return cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      await createBrevoContact(req.body, brevoApiKey.value());
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('❌ Erreur brevoContact:', error.message);
      return res.status(500).json({ success: false, error: error.message });
    }
  });
});

// ============================================
// FONCTION 2 : CTA progressif (email + prénom + nom)
// Stratégie : updateEnabled pour créer OU mettre à jour
// ============================================
exports.brevoLead = onRequest({ secrets: [brevoApiKey] }, (req, res) => {
  return cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, prenom, nom } = req.body;

    // Validation email obligatoire
    if (!email) {
      console.log('❌ Email manquant dans la requête');
      return res.status(400).json({ success: false, error: 'Email requis' });
    }

    // Construction des attributs (uniquement si fournis)
    const attributes = {};
    if (prenom && prenom.trim()) attributes.PRENOM = prenom.trim();
    if (nom && nom.trim()) attributes.NOM = nom.trim();

    // 🔍 LOGS DE DEBUG
    console.log('📧 Email reçu:', email);
    console.log('📝 Attributs:', attributes);
    console.log('🔢 Nombre d\'attributs:', Object.keys(attributes).length);

    const payload = {
      email: email,
      updateEnabled: true
    };

    if (Object.keys(attributes).length > 0) {
      payload.attributes = attributes;
    }

    console.log('📦 Payload:', JSON.stringify(payload, null, 2));

    try {
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts',
        payload,
        {
          headers: {
            'api-key': brevoApiKey.value(),
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('✅ Lead créé/mis à jour - ID:', response.data.id || '(update)');

      return res.status(200).json({ 
        success: true, 
        id: response.data.id,
        message: 'Contact créé ou mis à jour'
      });

    } catch (error) {
      // 🔍 LOGS D'ERREUR DÉTAILLÉS
      console.error('❌ Erreur brevoLead');
      console.error('📍 Status:', error.response?.status);
      console.error('💬 Message:', error.response?.data?.message);
      console.error('🔑 Code:', error.response?.data?.code);

      return res.status(500).json({
        success: false,
        error: error.response?.data?.message || error.message,
        code: error.response?.data?.code
      });
    }
  });
});
