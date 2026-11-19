---
titre: Assistant RAG cybersécurité – MITRE ATT&CK et NVD
resume: Un assistant qui répond en français aux questions sur les CVE et les techniques MITRE ATT&CK, à partir des sources officielles et d’un modèle de langage exécuté en local.
annee: '2026'
contexte: Projet de Master 1 Cybersécurité, réalisé en binôme avec Bilal Medj
role: Co-développeur, puis reprise en version 2
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
    legende: La synthèse des résultats de la première version, présentée en soutenance.
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

- **Recherche exacte** : quand la question contient un identifiant (`CVE-2025-14037`, `T1053.005`), le système va directement chercher l’entrée correspondante. Si l’identifiant n’est pas dans la base, il le dit au lieu de répondre avec une entrée voisine.
- **Recherche vectorielle** : les extraits sont encodés avec le modèle `all-MiniLM-L6-v2` et indexés dans FAISS, pour les questions formulées librement.
- **Recherche hybride** : BM25 (mots-clés) et FAISS (sens) combinés, plus robuste sur les requêtes courtes.

**Une génération 100 % locale.** Mistral, exécuté avec Ollama, rédige la réponse en français à partir des extraits retrouvés et cite ses sources. Aucune donnée ne sort de la machine. Une interface Streamlit permet de discuter avec l’assistant et d’afficher les extraits utilisés.

**Une deuxième version plus solide.** Après la soutenance, j’ai repris le code en un paquet Python testé (70 tests) :

- la détection des techniques, que la version 1 ne récupérait pas depuis le passage à ATT&CK v18 (stratégies de détection, journaux à surveiller), ainsi que les tactiques et les mesures d’atténuation ;
- les noms des faiblesses CWE ;
- un prompt protégé contre l’injection via le contenu des CVE ;
- une évaluation plus complète.

## Évaluation

Le système RAG est comparé au même modèle utilisé seul, sur 20 questions portant sur MITRE ATT&CK et sur des CVE précises. Pour chaque question, une liste d’éléments attendus (identifiant, nom, sévérité, CWE) permet de mesurer la couverture de la réponse. S’y ajoutent la fidélité au contexte et le taux d’hallucination.

| Version 2 | RAG | Modèle seul |
| --- | --- | --- |
| Couverture des éléments attendus | 0,975 | 0,375 |
| Informations absentes de la question retrouvées | 24 sur 25 | 0 sur 25 |
| Fidélité au contexte | 1,00 | – |
| Taux d’hallucination | 0,05 | 0,50 |

Le modèle seul se trompe sur toutes les questions ATT&CK : six fois, il décrit la technique comme « l’utilisation de PowerShell ». Sur les CVE, il refuse de répondre en affirmant qu’elles n’existent pas. Le RAG ne fait qu’une erreur mesurée : il répond T1053 au lieu de T1053.005, alors que la bonne fiche était en tête des extraits.

La première version obtenait 0,85 contre 0,40 sur un corpus plus grand, avec une mesure moins stricte.

## Limites

Les métriques reposent sur des éléments vérifiables (identifiants, noms, scores) : en relisant les réponses, j’ai trouvé une erreur qu’elles ne voient pas, une CWE mal nommée. Le jeu de 20 questions reste réduit, et le corpus ne couvre que les CVE récentes. Les pistes suivantes sont un reranking des résultats et une image Docker pour faciliter le déploiement.

## Ce que j’en retiens

La qualité d’un RAG dépend autant de la recherche que du modèle. L’ajout de la recherche exacte sur les identifiants a corrigé la principale faiblesse de la recherche purement vectorielle, qui ramenait parfois une CVE proche au lieu de la bonne.

Une métrique mal définie peut aussi tromper. Ma première mesure des hallucinations ne regardait que les identifiants et les scores. Elle donnait 0 au modèle seul, alors qu’il invente le nom de toutes les techniques : c’est en relisant les réponses que je l’ai vu et corrigé.

Le [compte rendu complet](https://github.com/MiscuitAtlas/rag-cyber-mitre-nvd/blob/main/docs/Compte_rendu_P17.pdf) (28 pages) détaille la méthode et l’évaluation.
