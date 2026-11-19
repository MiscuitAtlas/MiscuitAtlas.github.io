---
titre: Roque, échecs en ligne
resume: Jeu d’échecs en ligne entre amis, avec Vue 3 et Django Channels. Partie par code, coups en temps réel par WebSocket, règles complètes vérifiées par le serveur.
annee: '2025'
contexte: Projet de licence professionnelle DLWM, réalisé en binôme avec Théo Defossez
role: Interface et logique de jeu, puis réécriture complète
stack: [Vue 3, Django, Channels, WebSocket, Python, pytest, Docker]
ordre: 3
depot: https://github.com/MiscuitAtlas/echecs-vue-django
demo: https://echecs-vue-django.onrender.com
couverture: ../../assets/projets/echecs/partie.jpg
couvertureAlt: Partie en cours vue des Blancs, avec les coups possibles du pion e4, la feuille de notation et la discussion
captures:
  - src: ../../assets/projets/echecs/accueil.jpg
    alt: Page d’accueil avec les boutons Jouer sans compte et Créer un compte, et un échiquier d’exemple
    legende: On peut jouer sans compte, avec un pseudo d’invité.
  - src: ../../assets/projets/echecs/noirs.jpg
    alt: La même partie vue des Noirs, avec l’échiquier retourné
    legende: La même partie chez l’adversaire, qui a les Noirs.
  - src: ../../assets/projets/echecs/parties.jpg
    alt: Page Mes parties avec la création d’une partie, la saisie d’un code et la liste des parties
    legende: Créer une partie, en rejoindre une avec son code, retrouver ses parties.
---

## Le projet

Deux joueurs s’affrontent chacun sur son écran : l’un crée la partie et envoie le code à l’autre, puis chaque coup s’affiche aussitôt chez l’adversaire. En licence, je m’occupais de l’interface Vue et de la logique de jeu, et Théo du serveur Django. Cette première version ne faisait pas encore jouer les deux joueurs ensemble : chacun jouait sur son propre échiquier. Je l’ai donc réécrite pour en faire un vrai jeu en réseau.

Pour essayer la démo seul, il suffit de cliquer sur « Jouer sans compte », de créer une partie, puis d’ouvrir son lien dans une fenêtre de navigation privée pour jouer l’adversaire. Elle est hébergée gratuitement sur Render : après un quart d’heure sans visite, le premier chargement prend environ une minute.

## Fonctionnalités

- **Temps réel** : coups, messages et propositions de nulle passent par WebSocket (Django Channels), avec reconnexion automatique.
- **Règles complètes** : roque, prise en passant, promotion, mat, pat, triple répétition, cinquante coups et matériel insuffisant.
- **Échiquier** jouable au clic, en glisser-déposer, au doigt et au clavier, retourné pour les Noirs, avec la feuille de notation en notation française.
- **Comptes** : inscription, jeu sans compte, historique des parties, discussion, abandon et nulle.

## Le moteur de règles

Les règles sont écrites en Python pur, sans bibliothèque d’échecs. Le serveur rejoue la partie à chaque coup reçu et refuse tout coup illégal, joué hors de son tour ou envoyé deux fois. Le générateur de coups est testé avec les décomptes de référence (perft) de six positions publiées, qui couvrent les roques, les prises en passant, les promotions et les clouages.

## Sécurité

La première version permettait de changer le mot de passe de n’importe quel compte avec sa seule adresse email, et désactivait la protection CSRF. La version actuelle :

- exige le jeton CSRF sur toute modification, et bloque la connexion 15 minutes après 5 échecs ;
- ne montre une partie et sa discussion qu’à ses deux joueurs ;
- vérifie l’origine des connexions WebSocket, qui servent seulement à recevoir, jamais à jouer ;
- applique une politique de sécurité du contenu stricte, sans script ni style en ligne ;
- limite les messages, les parties en attente et les comptes invités ;
- lit la clé secrète dans l’environnement.

## Qualité

- 67 tests pytest (règles, API, WebSocket, en-têtes) et 5 tests Vitest, Ruff et ESLint.
- Image Docker : Node construit l’interface, Python la sert avec l’API et les WebSockets.
