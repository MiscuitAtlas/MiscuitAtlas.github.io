---
titre: VacancesConnectées
resume: Site de location de logements de vacances entre particuliers, en PHP sans framework. Recherche par dates, réservation sans chevauchement, avis après le séjour et espace propriétaire.
annee: '2024'
contexte: Projet de 2e année de DEUST IOSI
role: Conception et développement
stack: [PHP 8, PDO, MySQL, SQLite, PHPUnit, Docker]
ordre: 3
depot: https://github.com/MiscuitAtlas/vacances-connectees
demo: https://vacances-connectees.onrender.com
couverture: ../../assets/projets/vacances-connectees/accueil.jpg
couvertureAlt: Page d’accueil avec les illustrations de quatre logements et le formulaire de recherche rempli pour la Bretagne du 19 au 26 décembre
captures:
  - src: ../../assets/projets/vacances-connectees/fiche.jpg
    alt: Fiche d’un chalet à Chamonix avec l’encadré de réservation et le prix des sept nuits
    legende: 'La fiche d’un logement : le prix du séjour se calcule pendant la saisie des dates.'
  - src: ../../assets/projets/vacances-connectees/calendrier.jpg
    alt: Calendrier des disponibilités sur deux mois, avec les nuits réservées barrées, et les avis des voyageurs
    legende: Le calendrier des disponibilités et les avis laissés après le séjour.
  - src: ../../assets/projets/vacances-connectees/recherche.jpg
    alt: Résultats de recherche avec huit logements disponibles du 19 au 26 décembre et les filtres à gauche
    legende: Avec des dates, la recherche ne montre que les logements libres.
  - src: ../../assets/projets/vacances-connectees/proprietaire.jpg
    alt: Espace propriétaire avec les réservations à venir et les annonces à modifier ou supprimer
    legende: 'L’espace propriétaire : réservations reçues et annonces.'
---

## Le projet

Un site où les voyageurs cherchent un logement libre à leurs dates, le réservent et donnent leur avis après le séjour, et où les propriétaires publient leurs logements. Réalisé seul en fin de DEUST à partir d’un cahier des charges, puis réécrit en PHP orienté objet, sans framework : routeur, contrôleurs, gabarits et accès à la base sont écrits à la main.

Dans la démo en ligne, chaque visiteur a sa propre copie du site, effacée au bout de deux heures. Les comptes de démonstration s’ouvrent en un clic, et une page affiche les emails que le site aurait envoyés : lien de mot de passe oublié, réservation reçue par le propriétaire. Elle est hébergée gratuitement sur Render : après un quart d’heure sans visite, le premier chargement prend environ une minute.

## Fonctionnalités

- **Recherche** par destination, dates, voyageurs, chambres et prix, avec tri et pagination.
- **Fiche logement** avec équipements, calendrier des disponibilités et avis. Les illustrations sont des SVG dessinés par le serveur selon le type de logement et son cadre.
- **Réservation** confirmée tout de suite si les dates sont libres, annulation jusqu’à la veille, un avis par séjour après le départ.
- **Espace propriétaire** : annonces avec photo, réservations à venir, email à chaque réservation ou annulation.
- **Comptes** : inscription, profil, mot de passe oublié avec un lien envoyé par email.

## Sécurité

La première version, en HTML, JavaScript et PHP avec mysqli, comptait plusieurs failles : la page de mot de passe oublié changeait le mot de passe de n’importe quel compte à partir de sa seule adresse email, la recherche était vulnérable aux injections SQL, les annonces s’affichaient sans échappement et rien n’empêchait deux voyageurs de réserver les mêmes nuits. La version actuelle les corrige :

- requêtes préparées partout, texte de recherche échappé jusque dans `LIKE`, affichage échappé ;
- jeton CSRF sur chaque formulaire, contrôle d’accès sur chaque réservation et chaque logement ;
- dates revérifiées dans une transaction qui verrouille le logement, prix calculé par le serveur ;
- connexion bloquée 15 minutes après 5 échecs, même message et même temps de réponse pour un email inconnu ;
- lien de réinitialisation à usage unique valable 30 minutes, dont seule l’empreinte SHA-256 est stockée, construit sans faire confiance à l’en-tête `Host` ;
- photos vérifiées sur leur contenu et réencodées en WebP sous un nom aléatoire ;
- sur la démo, une base par visiteur, créée seulement au premier formulaire valable : un robot sans cookie ni jeton n’en crée aucune ;
- politique de sécurité du contenu stricte et aucune bibliothèque chargée depuis un CDN.

## Qualité

- 63 tests PHPUnit : validation des séjours, recherche, chevauchement des réservations, sécurité des comptes, photos, droits d’accès et isolation des visiteurs de la démo, jusqu’aux parcours HTTP complets.
- Code vérifié avec les règles PSR-12, pages auditées avec axe, interface adaptée au téléphone.
- Fonctionne avec MySQL, MariaDB ou SQLite, et s’installe avec des données de démonstration.
