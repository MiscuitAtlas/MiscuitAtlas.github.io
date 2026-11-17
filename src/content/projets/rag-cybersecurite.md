---
titre: Assistant RAG cybersécurité – MITRE ATT&CK et NVD
resume: Un assistant qui répond en français aux questions sur les CVE et les techniques MITRE ATT&CK, à partir des sources officielles et d’un modèle de langage exécuté en local.
annee: '2026'
contexte: Projet de Master 1 (P17), réalisé en binôme avec Bilal Medj
role: Co-développeur
stack: [Python, Sentence Transformers, FAISS, BM25, Ollama, Mistral, Streamlit]
ordre: 1
enAvant: true
depot: https://github.com/MiscuitAtlas/rag-cyber-mitre-nvd
couverture: ../../assets/projets/rag/interface.png
couvertureAlt: Interface Streamlit de l’assistant, avec une question, la réponse générée et les sources utilisées
captures:
  - src: ../../assets/projets/rag/architecture.png
    alt: Schéma du pipeline, des données sources jusqu’à la réponse de Mistral
    legende: L’architecture, des données sources jusqu’à la réponse générée.
  - src: ../../assets/projets/rag/pipeline-donnees.png
    alt: Préparation du corpus, de 1 948 CVE et 691 techniques à 3 926 extraits indexés
    legende: La préparation du corpus.
  - src: ../../assets/projets/rag/recherche.png
    alt: Comparaison des trois modes de recherche, exact, vectoriel et hybride
    legende: Les trois modes de recherche et quand chacun s’applique.
  - src: ../../assets/projets/rag/resultats.png
    alt: Diapositive des résultats, score moyen de 0,85 pour le RAG contre 0,40 pour le modèle seul
    legende: La synthèse des résultats présentée en soutenance.
  - src: ../../assets/projets/rag/recherche-exacte-cve.png
    alt: Terminal montrant la détection de l’identifiant CVE-2025-14037 et la réponse obtenue
    legende: La recherche exacte d’une CVE à partir de son identifiant.
---

## Le problème

Interrogé seul, un modèle de langage répond de façon approximative sur des données de sécurité précises. Il confond les identifiants, invente des scores CVSS et ne connaît pas les vulnérabilités publiées après son entraînement. À une question comme « Qu’est-ce que CVE-2025-14037 ? », il ne peut que deviner.

L’objectif était de construire un assistant **local** qui retrouve d’abord le bon contexte dans les sources officielles, puis s’appuie dessus pour répondre, en citant ses sources.

## Ce que nous avons construit

**Un corpus issu des sources officielles.** 1 948 CVE tirées du flux récent de la National Vulnerability Database et 691 techniques et sous-techniques de MITRE ATT&CK Enterprise (format STIX). Nous avons nettoyé ces données pour ne garder que les champs utiles (identifiant, description, sévérité, score CVSS, CWE, plateformes), puis les avons converties en 2 639 documents texte, découpés en 3 926 extraits de 120 mots avec un chevauchement de 30 mots.

**Une recherche en trois modes.**

- **Recherche exacte** : quand la question contient un identifiant (`CVE-2025-14037`, `T1053.005`), le système va directement chercher l’entrée correspondante.
- **Recherche vectorielle** : les extraits sont encodés avec le modèle `all-MiniLM-L6-v2` et indexés dans FAISS, pour les questions formulées librement.
- **Recherche hybride** : BM25 (mots-clés) et FAISS (sens) combinés, plus robuste sur les requêtes courtes.

**Une génération 100 % locale.** Mistral, exécuté avec Ollama, rédige la réponse en français à partir des extraits retrouvés. Aucune donnée ne sort de la machine. Une interface Streamlit permet de poser des questions et d’afficher les sources utilisées.

## Évaluation

Nous avons comparé le système RAG au même modèle utilisé seul, sur 20 questions portant sur MITRE ATT&CK et sur des CVE précises. Pour chaque question, une liste d’éléments attendus (identifiant, nom, sévérité, CWE) permet de calculer un score de couverture.

| Score de couverture moyen | RAG | Modèle seul |
| --- | --- | --- |
| Ensemble des questions | 0,85 | 0,40 |
| Questions MITRE ATT&CK | 0,80 | 0,55 |
| Questions CVE | 0,90 | 0,25 |

Le RAG fait mieux sur 15 questions sur 20 et égalise sur les 5 autres : le modèle seul ne le dépasse jamais. L’écart est le plus fort sur les CVE, où la réponse dépend d’informations exactes que le modèle ne peut pas deviner.

## Limites

Le score de couverture repose sur la présence de mots-clés : une réponse juste mais formulée autrement peut être sous-évaluée. Le jeu de 20 questions reste réduit, et le corpus ne couvre que les CVE récentes. Les pistes suivantes sont un reranking des résultats, l’ajout de la base CWE complète et une image Docker pour faciliter le déploiement.

## Ce que j’en retiens

La qualité d’un RAG dépend autant de la recherche que du modèle. L’ajout de la recherche exacte sur les identifiants a corrigé la principale faiblesse de la recherche purement vectorielle, qui ramenait parfois une CVE proche au lieu de la bonne.

Le [compte rendu complet](https://github.com/MiscuitAtlas/rag-cyber-mitre-nvd/blob/main/docs/Compte_rendu_P17.pdf) (28 pages) détaille la méthode et l’évaluation.
