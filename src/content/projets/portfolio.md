---
titre: Ce portfolio
resume: Un site statique rapide et sans dépendance tierce au chargement, avec une politique de sécurité du contenu stricte générée à chaque build.
annee: '2026'
contexte: Projet personnel
role: Conception, design et développement
stack: [Astro, TypeScript, CSS, GitHub Actions, GitHub Pages]
ordre: 8
depot: https://github.com/MiscuitAtlas/MiscuitAtlas.github.io
couverture: ../../assets/projets/portfolio/accueil.png
couvertureAlt: Page d’accueil du portfolio en mode sombre, avec la fiche de présentation au format annuaire
captures:
  - src: ../../assets/projets/portfolio/mode-clair.png
    alt: Page d’accueil du portfolio en mode clair
    legende: Le mode clair, mémorisé d’une visite à l’autre.
  - src: ../../assets/projets/portfolio/etude-de-cas.png
    alt: Page d’étude de cas du projet RAG
    legende: Une page d’étude de cas.
---

## Le projet

Le site que vous lisez. Il présente mon parcours et mes projets, et applique les pratiques de sécurité que je défends, même pour un site vitrine.

## Choix techniques

- **Astro et TypeScript** : les pages sont générées à l’avance en HTML statique. Le navigateur ne charge que quelques kilo-octets de JavaScript, pour le changement de thème et le formulaire de contact.
- **Contenu typé** : chaque projet est un fichier Markdown dont les métadonnées sont validées par un schéma. Un champ manquant fait échouer le build au lieu de produire une page incomplète.
- **Images optimisées** à la compilation, aux formats modernes et à plusieurs tailles.
- **Déploiement continu** : à chaque modification, GitHub Actions vérifie le code, construit le site et le publie sur GitHub Pages.

## Sécurité

- **Content Security Policy** générée à chaque build : chaque script et chaque feuille de style autorisés sont identifiés par leur empreinte, sans `unsafe-inline`.
- **Aucune ressource tierce** : polices et icônes sont servies par le site lui-même. Aucun traceur, aucune requête vers un CDN.
- **Données personnelles limitées** : pas de téléphone ni d’adresse e-mail publiés, le contact passe par un formulaire avec un champ piège anti-spam.

## Accessibilité

Navigation complète au clavier, contrastes vérifiés en mode sombre et en mode clair, animations désactivées lorsque le système le demande.
