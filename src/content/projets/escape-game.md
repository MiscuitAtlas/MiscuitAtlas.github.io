---
titre: Escape Game en ligne
resume: Trois escape games chronométrés dans le navigateur, avec comptes joueurs, classement des meilleurs scores et historique des parties.
annee: '2025'
contexte: Projet de formation
role: Conception et développement, front-end et back-end
stack: [Vue.js 3, Vue Router, PHP, PDO, MySQL]
ordre: 2
depot: https://github.com/MiscuitAtlas/EscapeGame_VueJS
couverture: ../../assets/projets/escape-game/choix-du-jeu.png
couvertureAlt: Écran de choix entre les trois escape games, avec l’historique des parties du joueur
captures:
  - src: ../../assets/projets/escape-game/accueil.png
    alt: Page d’accueil de l’escape game
    legende: La page d’accueil.
  - src: ../../assets/projets/escape-game/connexion.png
    alt: Formulaire de connexion
    legende: La connexion des joueurs.
  - src: ../../assets/projets/escape-game/inscription.png
    alt: Formulaire d’inscription
    legende: L’inscription.
---

## Le projet

Une application web où le joueur choisit parmi trois escape games et doit résoudre les énigmes avant la fin du chronomètre (180 secondes) :

- **Le Vaisseau Perdu**
- **La Bibliothèque Mystérieuse**
- **Le Laboratoire Abandonné**, où il faut notamment composer la bonne potion

Chaque partie terminée enregistre le score et le temps restant. Le joueur retrouve son historique, et un classement affiche les meilleurs joueurs de chaque jeu. Des effets sonores accompagnent les bonnes et les mauvaises réponses.

## Architecture

- **Front-end** : application monopage en Vue.js 3, avec Vue Router pour la navigation entre l’accueil, l’inscription, la connexion, la salle de jeu et les trois scénarios.
- **Back-end** : une API en PHP qui échange du JSON avec le front (inscription, connexion, enregistrement des parties, classement, historique).
- **Base de données** : MySQL, avec trois tables (utilisateurs, jeux, parties).

## Points techniques

- Mots de passe stockés hachés avec `password_hash` et vérifiés avec `password_verify`.
- Toutes les requêtes SQL passent par des requêtes préparées PDO, ce qui protège contre l’injection SQL.
- Session PHP pour identifier le joueur connecté.
- Classement calculé côté base de données, par jeu.
