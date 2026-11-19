---
titre: Escape Game en ligne
resume: Trois escape games chronométrés dans le navigateur, avec comptes joueurs, classement par salle et historique des parties. API PHP sécurisée.
annee: '2025'
contexte: Projet de formation
role: Conception et développement, front-end et back-end
stack: [Vue.js 3, Vite, PHP, PDO, MySQL]
ordre: 5
depot: https://github.com/MiscuitAtlas/escape-game-vue-php
demo: https://miscuitatlas.github.io/escape-game-vue-php/
couverture: ../../assets/projets/escape-game/bibliotheque.jpg
couvertureAlt: La Bibliothèque Mystérieuse en cours de partie, avec le chronomètre, les indices et le classement de la salle
captures:
  - src: ../../assets/projets/escape-game/laboratoire.jpg
    alt: Le laboratoire, avec les ingrédients trouvés et le chaudron à remettre dans l’ordre
    legende: 'Le laboratoire : trouver les ingrédients, puis les verser dans le bon ordre.'
  - src: ../../assets/projets/escape-game/vaisseau.jpg
    alt: Le vaisseau, où la carte d’accès utilisée sur le panneau de contrôle demande un code
    legende: 'Le vaisseau : chaque pièce s’utilise au bon endroit, puis il faut répondre au code de sécurité.'
  - src: ../../assets/projets/escape-game/victoire.jpg
    alt: Fenêtre de victoire indiquant le score enregistré au classement
    legende: La fin de partie, avec le score calculé par le serveur.
  - src: ../../assets/projets/escape-game/compte.jpg
    alt: Page Mon compte avec les statistiques et l’historique des parties
    legende: L’historique et les statistiques du joueur.
---

## Le projet

Une application web où le joueur choisit une salle et doit en sortir en moins de trois minutes :

- **La Bibliothèque Mystérieuse** : quatre devinettes cachées dans le décor gardent la porte.
- **Le Laboratoire Abandonné** : retrouver les bons ingrédients et préparer la potion dans le bon ordre.
- **Le Vaisseau Perdu** : ramasser des pièces, les utiliser au bon endroit et répondre aux codes de sécurité.

Le score dépend du temps restant, moins une pénalité par indice. On peut jouer sans compte ; avec un compte, les scores entrent au classement de chaque salle et l’historique des parties est conservé. Réalisé en licence professionnelle, puis repris en entier.

## Architecture

- **Front-end** : Vue.js 3 et Vue Router, construit avec Vite. Le chronomètre, les indices, le score et la sauvegarde sont regroupés dans un composable partagé par les trois salles.
- **API** : PHP 8 et PDO, un fichier par route, qui échange du JSON avec le front sur la même origine.
- **Base de données** : MySQL ou MariaDB, trois tables (joueurs, salles, parties).
- **Démo** : sans serveur, l’application passe en mode démonstration, publiée sur GitHub Pages.

## Sécurité

La première version faisait confiance au navigateur : l’identifiant du joueur et son score arrivaient dans la requête, et un simple email suffisait pour changer le mot de passe d’un compte. La version actuelle corrige ces failles :

- identité lue dans la session PHP (cookie `HttpOnly`, `SameSite`, identifiant régénéré à la connexion), jamais dans la requête ;
- score recalculé par le serveur à partir du temps restant et des indices, bornés et validés ;
- changement de mot de passe qui exige l’ancien, mots de passe hachés avec `password_hash` ;
- requêtes préparées, corps JSON obligatoire contre les attaques CSRF, erreurs génériques, aucun accès à la base dans le dépôt.

## Qualité

- Tests unitaires avec Vitest, et tests d’intégration de l’API contre un vrai serveur PHP et une vraie base.
- Zones du décor accessibles au clavier, fenêtre de fin de partie modale, pages auditées avec axe.
- Réponses tolérantes : accents, majuscules et articles ne comptent pas.
