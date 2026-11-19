---
titre: Suivi du sommeil
resume: Application web de suivi du sommeil par cycles de 90 minutes, avec bilan de la semaine, contrôle d’accès par ressource et menu administrable.
annee: '2024'
contexte: TP CakePHP, licence professionnelle DLWM
role: Conception et développement
stack: [CakePHP 5, PHP 8, MySQL, PHPUnit, Docker]
ordre: 5
depot: https://github.com/MiscuitAtlas/suivi-sommeil-cakephp
demo: https://suivi-sommeil.onrender.com
couverture: ../../assets/projets/suivi-sommeil/tableau-de-bord.jpg
couvertureAlt: Tableau de bord avec la nuit du jour à 5 cycles, les objectifs de la semaine et les dernières nuits
captures:
  - src: ../../assets/projets/suivi-sommeil/semaine.jpg
    alt: Bilan d’une semaine avec les objectifs atteints, les moyennes et le graphique des cycles par nuit
    legende: 'Le bilan de la semaine : objectifs, moyennes et cycles par nuit.'
  - src: ../../assets/projets/suivi-sommeil/ajout.jpg
    alt: Formulaire d’ajout d’une nuit qui propose les heures de réveil en fin de cycle
    legende: La saisie d’une nuit, avec les heures de réveil conseillées.
  - src: ../../assets/projets/suivi-sommeil/menus.jpg
    alt: Gestion du menu de navigation avec les boutons pour changer l’ordre des liens
    legende: Le menu de navigation, géré par les administrateurs.
  - src: ../../assets/projets/suivi-sommeil/accueil.jpg
    alt: Page d’accueil qui présente le principe des cycles de sommeil
    legende: La page d’accueil, pour les visiteurs.
---

## Le projet

Chaque matin, l’utilisateur note l’heure du coucher et du lever. L’application calcule la durée et le nombre de cycles de 90 minutes, indique si le réveil est tombé en fin de cycle et suit deux objectifs sur la semaine : 42 cycles au total, et quatre jours d’affilée à cinq cycles ou plus. Réalisé lors d’un TP de licence professionnelle, puis réécrit sur CakePHP 5.4.

La démo en ligne crée un compte par visiteur, avec trois semaines de nuits déjà saisies, supprimé au bout de deux heures. Elle est hébergée gratuitement sur Render : après un quart d’heure sans visite, le premier chargement prend environ une minute.

## Fonctionnalités

- **Saisie d’une nuit** : heures, forme au réveil, siestes, sport et commentaire. Le formulaire propose les heures de réveil qui tombent en fin de cycle.
- **Tableau de bord** et **bilan de la semaine** avec graphique, moyennes et navigation d’une semaine à l’autre.
- **Historique** paginé et triable, une seule nuit par date.
- **Comptes** : inscription, profil, changement de mot de passe, suppression du compte et de ses données.
- **Menu administrable** : liens ajoutés, modifiés et réordonnés depuis l’application par les administrateurs.

## Sécurité

La première version contenait plusieurs failles : une page publique réinitialisait le mot de passe de n’importe quel compte et l’affichait à l’écran, toutes les nuits de tous les utilisateurs étaient visibles, et une nuit d’un autre compte se modifiait en changeant l’identifiant dans l’adresse. La version actuelle les corrige :

- contrôle d’accès par ressource avec le plugin Authorization, vérification obligatoire sur chaque requête ;
- propriétaire d’une nuit et rôle d’un compte jamais lus dans le formulaire, cycles recalculés par le serveur ;
- jeton CSRF sur chaque formulaire, actions sensibles uniquement en POST, ancien mot de passe exigé pour le changer ;
- politique de sécurité du contenu stricte, sans script ni style en ligne, et aucune bibliothèque chargée depuis un CDN ;
- aucun secret dans le dépôt : la configuration locale a été retirée de l’historique ;
- sur la démo, des comptes isolés par visiteur, un menu partagé en lecture seule, HSTS et cookies réservés au HTTPS.

## Qualité

- Calcul des cycles et du bilan dans des services indépendants du framework.
- 82 tests PHPUnit : règles de calcul, validation, droits d’accès, démo en ligne et pile de middlewares.
- Code vérifié avec les règles de codage CakePHP, pages auditées avec axe, interface adaptée au téléphone.
