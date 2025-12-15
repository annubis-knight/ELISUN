// server.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import { createRequire } from 'module';

// Import CommonJS depuis ES Module
const require = createRequire(import.meta.url);
const { createBrevoContact } = require('./functions/brevo-logic');

dotenv.config();
console.log('🔑 Clé API chargée:', process.env.BREVO_API_KEY ? '✅ Oui' : '❌ Non');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route API Brevo
app.post('/api/brevo-contact', async (req, res) => {
  console.log('📨 Réception formulaire:', req.body);
  
  try {
    const result = await createBrevoContact(req.body, process.env.BREVO_API_KEY);
    
    console.log('✅ Contact créé dans Brevo:', result);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Contact créé avec succès' 
    });
    
  } catch (error) {
    console.error('❌ Erreur Brevo:', error.response?.data || error.message);
    
    return res.status(500).json({ 
      success: false,
      error: error.message || 'Erreur lors de la création du contact',
      details: error.response?.data
    });
  }
});

// Route API Brevo pour CTA progressif (email + prénom + nom uniquement)
app.post('/api/brevo-lead', async (req, res) => {
  console.log('\n========================================');
  console.log('📨 RÉCEPTION LEAD CTA');
  console.log('========================================');
  
  const { email, prenom, nom } = req.body;

  console.log('📧 Email:', email);
  console.log('👤 Prénom:', prenom || '(vide)');
  console.log('👤 Nom:', nom || '(vide)');

  // Validation minimale
  if (!email) {
    console.log('❌ Email manquant - requête rejetée\n');
    return res.status(400).json({
      success: false,
      error: 'Email requis'
    });
  }

  // ✅ NE PAS ENVOYER D'ATTRIBUTS VIDES
  const attributes = {};
  if (prenom && prenom.trim()) attributes.PRENOM = prenom.trim();
  if (nom && nom.trim()) attributes.NOM = nom.trim();

  console.log('📝 Attributs à envoyer:', attributes);
  console.log('🔢 Nombre d\'attributs:', Object.keys(attributes).length);

  const payload = {
    email: email,
    updateEnabled: true
  };

  // Ajouter attributes seulement s'il y en a
  if (Object.keys(attributes).length > 0) {
    payload.attributes = attributes;
  }

  console.log('📦 Payload complet:', JSON.stringify(payload, null, 2));
  console.log('🚀 Envoi à Brevo...\n');

  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      payload,
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ SUCCÈS BREVO');
    console.log('📊 ID Contact:', response.data.id || '(update - pas d\'ID retourné)');
    console.log('📊 Réponse complète:', response.data);
    console.log('========================================\n');

    return res.status(200).json({ 
      success: true,
      id: response.data.id,
      message: 'Contact créé ou mis à jour'
    });

  } catch (error) {
    console.error('❌ ERREUR BREVO');
    console.error('📍 Status HTTP:', error.response?.status);
    console.error('🔑 Code erreur:', error.response?.data?.code);
    console.error('💬 Message:', error.response?.data?.message);
    console.error('📦 Détails complets:', JSON.stringify(error.response?.data, null, 2));
    console.error('========================================\n');

    return res.status(500).json({
      success: false,
      error: error.response?.data?.message || error.message,
      code: error.response?.data?.code,
      details: error.response?.data
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend ELISUN lancé sur http://localhost:${PORT}`);
  console.log(`📡 Endpoints disponibles :`);
  console.log(`   POST http://localhost:${PORT}/api/brevo-contact (formulaire modal)`);
  console.log(`   POST http://localhost:${PORT}/api/brevo-lead (CTA progressif)`);
});
