// Configuration ESLint v9 - Format flat config
// Détection de doublons, code mort, et best practices JavaScript

import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  // Configuration recommandée ESLint
  js.configs.recommended,

  // Configuration pour les fichiers JavaScript du projet
  {
    files: ['src/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Globales du navigateur
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        alert: 'readonly',
        // Timers
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        // APIs navigateur
        IntersectionObserver: 'readonly',
        CustomEvent: 'readonly',
        FormData: 'readonly',
        performance: 'readonly',
        // GSAP (utilisé dans le projet)
        gsap: 'readonly',
        // Swiper (bibliothèque externe)
        Swiper: 'readonly',
        // Google Analytics
        gtag: 'readonly'
      }
    },
    plugins: {
      import: importPlugin,
      sonarjs: sonarjs
    },
    rules: {
      // ============================================
      // Import/Export - Détection doublons imports
      // ============================================
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'warn',

      // ============================================
      // Variables - Code mort et variables inutilisées
      // ============================================
      'no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      'no-undef': 'error',

      // ============================================
      // SonarJS - Détection doublons et complexité
      // ============================================
      'sonarjs/no-duplicate-string': ['warn', { threshold: 3 }],
      'sonarjs/cognitive-complexity': ['warn', 15],
      'sonarjs/no-identical-functions': 'error',
      'sonarjs/no-duplicated-branches': 'warn',
      'sonarjs/no-redundant-jump': 'error',
      'sonarjs/no-collapsible-if': 'warn',

      // ============================================
      // Best practices JavaScript moderne
      // ============================================
      'no-console': 'off', // Console autorisée pour ce projet
      'prefer-const': 'error', // Utiliser const quand possible
      'no-var': 'error', // Interdire var (utiliser const/let)
      'eqeqeq': ['error', 'always'], // Toujours utiliser === au lieu de ==
      'no-implicit-globals': 'error',

      // ============================================
      // Erreurs communes
      // ============================================
      'no-unreachable': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error'
    }
  },

  // Fichiers à ignorer
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      '**/*.min.js'
    ]
  }
];
