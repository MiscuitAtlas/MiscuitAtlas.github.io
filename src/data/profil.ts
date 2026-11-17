/**
 * Contenu du profil : un seul endroit à modifier pour mettre à jour le site.
 */

export const profil = {
    nom: 'Maxence Français',
    titre: 'Étudiant en Master 2 Cybersécurité – Défense des systèmes d’information',
    ecole: 'INSA Hauts-de-France',
    accroche:
        'Je travaille à la croisée de la gestion des identités, de la défense des systèmes d’information et du développement sécurisé, avec deux stages en DSI hospitalière.',
    description:
        'Portfolio de Maxence Français, étudiant en Master 2 Cybersécurité à l’INSA Hauts-de-France, à la recherche d’un stage de fin d’études de 20 semaines à partir de mars 2027.',
    // Entrée d'annuaire affichée en haut de l'accueil (format LDIF).
    dn: 'cn=Maxence Français,ou=Cybersécurité,o=INSA Hauts-de-France',
    attributs: [
        { cle: 'objectif', valeur: 'stage de fin d’études, 20 semaines minimum, dès mars 2027', disponible: true },
        { cle: 'domaines', valeur: 'IAM et Active Directory, défense des SI, développement sécurisé' },
        { cle: 'experience', valeur: '2 stages en DSI, Groupe AHNAC (secteur hospitalier)' },
        { cle: 'formation', valeur: 'Master Cybersécurité – Défense des SI, INSA Hauts-de-France' },
        { cle: 'localisation', valeur: 'Hauts-de-France (62), permis B' },
    ],
    cv: '/cv/CV_Maxence_Francais.pdf',
    linkedin: 'https://www.linkedin.com/in/maxence-fran%C3%A7ais-a039a2307/',
    github: 'https://github.com/MiscuitAtlas',
    formspree: 'https://formspree.io/f/mvgzabrl',
} as const;

export type Experience = {
    debut: string;
    fin: string;
    poste: string;
    structure: string;
    lieu: string;
    points?: { titre: string; texte: string }[];
    resume?: string;
};

export const experiences: Experience[] = [
    {
        debut: 'mars 2025',
        fin: 'juin 2025',
        poste: 'Stage DSI – Développeur ASP.NET Core & IAM / SecOps',
        structure: 'Groupe AHNAC',
        lieu: 'Liévin',
        points: [
            {
                titre: 'Refonte d’une application IAM & Active Directory',
                texte: 'Application web centralisée en ASP.NET Core MVC (C#, LDAP) pour gérer tout le cycle de vie des comptes utilisateurs et les rôles d’accès.',
            },
            {
                titre: 'Sécurisation des accès',
                texte: 'Authentification unique (authentification Windows), journalisation des actions d’administration, protection des configurations sensibles (appsettings.json, User Secrets).',
            },
            {
                titre: 'Automatisation des demandes d’accès',
                texte: 'Circuit de validation des demandes (VPN, droits applicatifs) avec notifications aux équipes support et aux directeurs d’établissement.',
            },
            {
                titre: 'Environnement',
                texte: 'Travail aux côtés d’un expert .NET / C# senior, dans le secteur hospitalier.',
            },
        ],
    },
    {
        debut: 'avril 2024',
        fin: 'juin 2024',
        poste: 'Stage DSI – Développeur web & analyste données (SQL / HQL)',
        structure: 'Groupe AHNAC',
        lieu: 'Liévin',
        points: [
            {
                titre: 'Outils métier',
                texte: 'Applications web internes de suivi de facturation (impayés, acquittés) et outil de signalement d’incidents avec capture d’écran automatique pendant la migration du SI (HTML, ASP, PHP, JavaScript).',
            },
            {
                titre: 'Bases de données',
                texte: 'Requêtes SQL et HQL (Hibernate) complexes pour le reporting médical et le traitement automatisé des clôtures de contrats.',
            },
            {
                titre: 'Données de santé',
                texte: 'Extraction, nettoyage et archivage automatisé de données patients et de comptes rendus médicaux, sous contraintes strictes de confidentialité (HDS, RGPD).',
            },
        ],
    },
    {
        debut: 'octobre 2022',
        fin: 'aujourd’hui',
        poste: 'Employé commercial – CDI étudiant',
        structure: 'ALDI',
        lieu: 'Bully-les-Mines',
        resume: 'Caisse, boulangerie, mise en rayon et réserve, en parallèle de mes études.',
    },
    {
        debut: 'juillet 2022',
        fin: 'août 2022',
        poste: 'Hôte de caisse – emploi saisonnier',
        structure: 'Supermarché Match',
        lieu: 'Grenay',
    },
];

export const formations = [
    {
        periode: '2025 – 2027',
        diplome: 'Master Cybersécurité – Défense des systèmes d’information',
        etablissement: 'INSA Hauts-de-France – Université Polytechnique Hauts-de-France, Valenciennes',
    },
    {
        periode: '2025',
        diplome: 'Licence professionnelle Développement de logiciel web et mobile & cyber',
        etablissement: 'INSA Hauts-de-France – Université Polytechnique Hauts-de-France, Valenciennes',
    },
    {
        periode: '2024',
        diplome: 'DEUST Informatique d’organisation et systèmes d’information',
        etablissement: 'INSA Hauts-de-France – Université Polytechnique Hauts-de-France, Valenciennes',
    },
    {
        periode: '2022',
        diplome: 'Baccalauréat général, mention assez bien',
        etablissement: 'Lycée Henri Darras, Liévin – spécialités physique-chimie et NSI',
    },
];

export const competences = [
    {
        domaine: 'Sécurité et réseaux',
        outils: ['Active Directory / LDAP', 'Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'Autopsy', 'Volatility'],
        usage: 'IAM en stage ; tests d’intrusion et forensique en Master.',
    },
    {
        domaine: 'Systèmes et scripting',
        outils: ['Linux (Debian)', 'Windows Server', 'Docker', 'Bash', 'PowerShell', 'Git'],
        usage: 'Administration d’infrastructures sécurisées en Master.',
    },
    {
        domaine: 'Langages',
        outils: ['Python', 'C#', 'C / C++', 'PHP', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Dart'],
        usage: 'Python pour le projet RAG, C# en stage, PHP et JavaScript pour le web.',
    },
    {
        domaine: 'Frameworks',
        outils: ['ASP.NET Core MVC', 'Vue.js', 'CakePHP', 'Flutter', 'React Native', 'Node.js', 'Astro', 'Bootstrap'],
        usage: 'ASP.NET Core en stage, les autres dans mes projets.',
    },
    {
        domaine: 'Données',
        outils: ['SQL', 'HQL (Hibernate)', 'MySQL', 'SQLite', 'MongoDB', 'FAISS'],
        usage: 'Reporting médical en stage, recherche vectorielle pour le projet RAG.',
    },
] as const;
