---
titre: Suivi du sommeil
resume: Une application web pour noter ses nuits, calculer ses cycles de sommeil et suivre sa semaine avec des indicateurs et un graphique.
annee: '2024'
contexte: Projet de formation
role: Conception et développement
stack: [CakePHP 5, PHP 8, MySQL, Chart.js]
ordre: 3
depot: https://github.com/MiscuitAtlas/Suivi_Sommeil_CakePHP
---

## Le projet

Une application web en CakePHP où chaque utilisateur dispose de son espace personnel pour suivre son sommeil au quotidien.

## Fonctionnalités

- **Comptes utilisateurs** : inscription, connexion et modification du compte, avec le plugin d’authentification de CakePHP. Les mots de passe sont hachés.
- **Saisie quotidienne** : heure de coucher et de lever, forme au réveil (de 0 à 10), siestes, sport et commentaire libre.
- **Cycles de sommeil** : la durée de la nuit est convertie en cycles de 90 minutes.
- **Résumé hebdomadaire** : un tableau jour par jour et un graphique Chart.js de l’évolution des cycles.
- **Indicateurs** : l’objectif de la semaine est atteint avec au moins 42 cycles au total et au moins 4 jours consécutifs à 5 cycles ou plus.
- **Menu administrable** : les liens de navigation sont stockés en base et gérés depuis l’application.

## Points techniques

- Architecture MVC de CakePHP 5 : contrôleurs, tables et entités, gabarits.
- Schéma de base versionné avec les migrations CakePHP, et jeu de données de test (seeds).
- Protection CSRF activée sur les formulaires grâce au middleware du framework.
