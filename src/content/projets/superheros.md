---
titre: SuperHéros
resume: Rechercher, filtrer et comparer 563 personnages selon leurs statistiques de pouvoir, à partir d’une API publique.
annee: '2025'
contexte: Projet de formation
role: Conception et développement
stack: [Vue.js 3, JavaScript, Bootstrap 5, API REST]
ordre: 4
depot: https://github.com/MiscuitAtlas/SuperHeros_VueJS
demo: https://miscuitatlas.github.io/SuperHeros_VueJS/
couverture: ../../assets/projets/superheros/liste.png
couvertureAlt: Liste des personnages avec leurs statistiques de pouvoir et les filtres par éditeur et par camp
captures:
  - src: ../../assets/projets/superheros/recherche.png
    alt: Recherche de « spider » avec les statistiques de chaque personnage
    legende: La recherche instantanée, par nom de héros ou nom civil.
  - src: ../../assets/projets/superheros/detail.png
    alt: Fiche détaillée de Batman avec ses statistiques, sa biographie et son apparence
    legende: La fiche détaillée d’un personnage.
  - src: ../../assets/projets/superheros/matcher.png
    alt: SuperPower Matcher avec des curseurs de niveau minimum et les personnages correspondants
    legende: Le SuperPower Matcher, qui filtre par niveaux minimums.
---

## Le projet

Une application Vue.js qui interroge la [superhero-api](https://github.com/akabab/superhero-api), des données publiques au format JSON, pour explorer 563 personnages. Réalisée lors d’un TP de licence professionnelle, puis reprise pour corriger ses défauts et la compléter.

## Fonctionnalités

- **Recherche** instantanée par nom de héros ou nom civil, sans tenir compte des accents.
- **Liste** complète, filtrable par éditeur et par camp, triée par nom ou par puissance totale.
- **Fiche détaillée** : statistiques en barres, biographie et apparence.
- **SuperPower Matcher** : un curseur par statistique fixe un niveau minimum, et les personnages qui les atteignent tous s’affichent du plus puissant au moins puissant.

## Points techniques

- Vue.js 3 chargé directement dans les pages, sans étape de build : l’application s’ouvre même sans serveur.
- Composants partagés entre les pages (navigation, ligne de personnage, statistiques, chargement), données chargées une seule fois.
- Dépendances en versions figées, avec contrôle d’intégrité (SRI).
- Gestion des états de chargement et d’erreur, et pages accessibles au clavier.
- Tests unitaires de la recherche, du matcher et des filtres avec `node:test`.
- Démo publiée sur GitHub Pages.
