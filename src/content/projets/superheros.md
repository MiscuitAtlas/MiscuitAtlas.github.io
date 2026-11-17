---
titre: SuperHéros
resume: Rechercher, consulter et comparer des super-héros selon leurs statistiques, à partir d’une API publique.
annee: '2025'
contexte: Projet de formation
role: Conception et développement
stack: [Vue.js 3, JavaScript, Bootstrap 5, API REST]
ordre: 4
depot: https://github.com/MiscuitAtlas/SuperHeros_VueJS
demo: https://miscuitatlas.github.io/SuperHeros_VueJS/
couverture: ../../assets/projets/superheros/liste.png
couvertureAlt: Liste des super-héros avec leurs statistiques de pouvoir
captures:
  - src: ../../assets/projets/superheros/recherche.png
    alt: Page de recherche de super-héros
    legende: La recherche par nom.
  - src: ../../assets/projets/superheros/detail.png
    alt: Fiche détaillée d’un super-héros
    legende: La fiche détaillée d’un héros.
  - src: ../../assets/projets/superheros/comparateur.png
    alt: Comparateur de pouvoirs entre deux super-héros
    legende: Le comparateur de pouvoirs.
---

## Le projet

Une application Vue.js qui interroge la [SuperHero API](https://akabab.github.io/superhero-api/) (données publiques au format JSON) pour explorer plus de 500 personnages.

## Fonctionnalités

- **Recherche** d’un héros par son nom.
- **Liste** de tous les héros avec leurs statistiques : intelligence, force, vitesse, endurance, puissance et combat.
- **Fiche détaillée** de chaque héros.
- **Comparateur** de pouvoirs entre héros.

## Points techniques

- Vue.js 3 chargé directement dans les pages, sans étape de build.
- Appels à l’API avec `fetch` et affichage réactif des résultats.
- Mise en page responsive avec Bootstrap 5.
- Démo publiée sur GitHub Pages.
