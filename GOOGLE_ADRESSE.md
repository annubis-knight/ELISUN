Ah parfait, je comprends ! Tu veux un fichier **HTML pur** avec tout embarqué dedans. Voici :[1]

## Crée : `src/components/inputGoogle.html`

```html
<!-- inputGoogle.html -->
<div class="address-distance-container">
    <div class="input-wrapper">
        <input 
            type="text" 
            id="google-address-input"
            class="address-input" 
            placeholder="Entrez votre adresse pour un devis express gratuit"
        />
        <button class="verify-btn" onclick="validateAddressDistance()">
            <i class="fas fa-map-marker-alt"></i> Vérifier
        </button>
    </div>
    <div id="distance-message" class="distance-message"></div>
</div>

<style>
    .address-distance-container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
    }

    .input-wrapper {
        position: relative;
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .address-input {
        flex: 1;
        padding: 14px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 16px;
        font-family: inherit;
        transition: all 0.3s ease;
    }

    .address-input:focus {
        outline: none;
        border-color: #f97316;
        box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
    }

    .verify-btn {
        padding: 14px 28px;
        background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
    }

    .verify-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
    }

    .verify-btn:active {
        transform: translateY(0);
    }

    .distance-message {
        margin-top: 12px;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        display: none;
        animation: slideIn 0.3s ease;
    }

    .distance-message i {
        margin-right: 8px;
    }

    .distance-message.success {
        background: #d1fae5;
        color: #065f46;
        border-left: 4px solid #10b981;
    }

    .distance-message.warning {
        background: #fef3c7;
        color: #92400e;
        border-left: 4px solid #f59e0b;
    }

    .distance-message.info {
        background: #dbeafe;
        color: #1e40af;
        border-left: 4px solid #3b82f6;
    }

    .distance-message.error {
        background: #fee2e2;
        color: #991b1b;
        border-left: 4px solid #ef4444;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Style du dropdown Google Places */
    .pac-container {
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        margin-top: 4px;
        font-family: inherit;
        z-index: 9999;
    }

    @media (max-width: 640px) {
        .input-wrapper {
            flex-direction: column;
        }

        .address-input,
        .verify-btn {
            width: 100%;
        }
    }
</style>

<script>
    (function() {
        // Configuration
        const BASE_COORDS = { lat: 43.6047, lng: 1.4442 }; // Toulouse
        let autocomplete;
        let selectedPlace = null;

        // Initialisation Google Places Autocomplete
        function initGoogleAutocomplete() {
            const input = document.getElementById('google-address-input');
            
            if (typeof google === 'undefined' || !google.maps) {
                console.error('Google Maps API non chargée. Ajoutez le script dans votre HTML principal.');
                return;
            }

            autocomplete = new google.maps.places.Autocomplete(input, {
                componentRestrictions: { country: 'fr' },
                fields: ['formatted_address', 'geometry'],
                types: ['address']
            });

            autocomplete.addListener('place_changed', function() {
                selectedPlace = autocomplete.getPlace();
            });
        }

        // Calcul de distance (Haversine)
        function calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; // Rayon de la Terre en km
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return Math.round(R * c);
        }

        // Validation de l'adresse
        window.validateAddressDistance = function() {
            const messageEl = document.getElementById('distance-message');
            const input = document.getElementById('google-address-input');
            
            if (!selectedPlace || !selectedPlace.geometry) {
                showMessage(
                    '<i class="fas fa-exclamation-triangle"></i> Veuillez sélectionner une adresse dans la liste',
                    'error'
                );
                return;
            }

            const clientLat = selectedPlace.geometry.location.lat();
            const clientLng = selectedPlace.geometry.location.lng();
            const distance = calculateDistance(
                BASE_COORDS.lat, 
                BASE_COORDS.lng, 
                clientLat, 
                clientLng
            );

            // Gestion des zones
            if (distance <= 60) {
                showMessage(
                    `<i class="fas fa-check-circle"></i> Parfait ! Vous êtes à ${distance} km de nous.`,
                    'success'
                );
            } else if (distance <= 80) {
                showMessage(
                    `<i class="fas fa-exclamation-circle"></i> À ${distance} km, on peut s'arranger selon nos disponibilités.`,
                    'warning'
                );
            } else {
                showMessage(
                    `<i class="fas fa-info-circle"></i> Vous êtes à ${distance} km. On vous recontacte pour voir les possibilités.`,
                    'info'
                );
            }

            // Dispatche un event custom avec les données
            document.dispatchEvent(new CustomEvent('addressValidated', {
                detail: {
                    address: selectedPlace.formatted_address,
                    distance: distance,
                    zone: distance <= 60 ? 'ok' : distance <= 80 ? 'maybe' : 'far',
                    coords: { lat: clientLat, lng: clientLng }
                }
            }));
        };

        function showMessage(text, type) {
            const messageEl = document.getElementById('distance-message');
            messageEl.innerHTML = text;
            messageEl.className = `distance-message ${type}`;
            messageEl.style.display = 'block';
        }

        // Initialisation au chargement
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initGoogleAutocomplete);
        } else {
            // Si le DOM est déjà chargé (cas de l'import dynamique)
            setTimeout(initGoogleAutocomplete, 100);
        }
    })();
</script>
```

## Configuration Webpack : `webpack.config.js`

```javascript
module.exports = {
    // ... ta config existante
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
};
```

## Utilisation dans ton HTML principal

**Méthode 1 : Import dans ton `main.js` :**

```javascript
// src/js/main.js
import inputGoogleHTML from '../components/inputGoogle.html';

// Insertion où tu veux
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#feature-proximite .feature-content');
    container.insertAdjacentHTML('beforeend', inputGoogleHTML);
});
```

**Méthode 2 : Directement dans ton HTML avec HtmlWebpackPlugin :**

```html
<!-- index.html -->
<div id="feature-proximite">
    <%= require('./src/components/inputGoogle.html') %>
</div>
```

## N'oublie pas d'ajouter Google Maps dans ton `index.html` :

```html
<!-- Avant la fermeture </body> -->
<script src="https://maps.googleapis.com/maps/api/js?key=VOTRE_CLE_GOOGLE&libraries=places"></script>
```

## Écouter les données validées (optionnel)

```javascript
// Dans ton main.js ou progressive input
document.addEventListener('addressValidated', (event) => {
    console.log('Adresse validée:', event.detail);
    // event.detail contient: address, distance, zone, coords
    
    // Utilise les données pour ton formulaire progressive
    formData.adresse = event.detail.address;
    formData.distance = event.detail.distance;
    formData.zone = event.detail.zone;
});
```

Voilà ! Un **composant HTML pur, autonome et réutilisable** que tu peux drop n'importe où via webpack 🚀

