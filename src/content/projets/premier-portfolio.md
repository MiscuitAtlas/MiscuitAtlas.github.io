---
titre: Premier portfolio
resume: La première version de mon portfolio, codée à la main en HTML, CSS, Bootstrap 5 et JavaScript. Remplacée par ce site, elle reste en ligne.
annee: '2026'
contexte: Projet personnel
role: Conception et développement
stack: [HTML, CSS, Bootstrap 5, JavaScript, GitHub Pages]
ordre: 9
depot: https://github.com/MiscuitAtlas/portfolio-bootstrap
demo: https://miscuitatlas.github.io/portfolio-bootstrap/
couverture: ../../assets/projets/portfolio-bootstrap/accueil.png
couvertureAlt: Page d’accueil du premier portfolio, avec la fiche de profil, les onglets du parcours et le bandeau qui renvoie vers ce site
captures:
  - src: ../../assets/projets/portfolio-bootstrap/projets.png
    alt: Onglet Projets avec les cartes de VacancesConnectées, de Roque, du suivi du sommeil et de l’escape game
    legende: L’onglet Projets, avec une carte et une galerie de captures par projet.
---

## Le projet

La première version de mon portfolio, avant ce site. Elle présente mon parcours, mes compétences et mes projets sur une seule page à onglets, avec le CV à télécharger et la lettre de motivation dans une fenêtre modale. Elle reste en ligne, mais n’est plus mise à jour.

## Choix techniques

- **HTML, CSS et Bootstrap 5**, sans framework ni générateur de site. La barre de navigation et le pied de page sont des fichiers partagés, chargés en JavaScript.
- **Galerie de captures** écrite en JavaScript sans bibliothèque, à partir du carrousel de Bootstrap.
- **Formulaire de contact** relié à Formspree, avec un champ piège anti-spam.

## Sécurité

- **Content Security Policy** stricte : aucun script ni style écrit dans les pages, seuls le site et jsDelivr peuvent fournir du code.
- **Subresource Integrity** sur Bootstrap et Font Awesome : le navigateur vérifie leur empreinte avant de les exécuter.

## Pourquoi une nouvelle version

Ce site charge Bootstrap et Font Awesome depuis un CDN, et chaque projet n’y a qu’une carte. Ce portfolio-ci sert lui-même toutes ses ressources et consacre une page à chaque projet.
