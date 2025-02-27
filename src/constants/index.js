import {
  git,
  python,
  SQL,
  unity,
  docker,
  linux,
  csharp,
  java,
  typescript,
  angular,
  nestjs,
  spring,
  gitAVIF,
  unityAVIF,
  dockerAVIF,
  angularAVIF,
  Universite_Lille,
  centrakor,
  Huluette,
  openclassrooms,
  simplon,
  Universite_LilleAVIF,
  centrakorAVIF,
  HuluetteAVIF,
  openclassroomsAVIF,
  simplonAVIF,
  LaBonneAuberge,
  LaFarandole,
  ShopTendance,
  MeteoProject,
  UserExplorer,
  PokedexProject,
  LaBonneAubergeAVIF,
  LaFarandoleAVIF,
  ShopTendanceAVIF,
  MeteoProjectAVIF,
  UserExplorerAVIF,
  PokedexProjectAVIF,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "experience",
    title: "Parcours",
  },
  {
    id: "projects",
    title: "Projets",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Angular",
    icon: angular,
    iconAVIF: angularAVIF,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Unity",
    icon: unity,
    iconAVIF: unityAVIF,
  },
  {
    name: "docker",
    icon: docker,
    iconAVIF: dockerAVIF,
  },
  {
    name: "git",
    icon: git,
    iconAVIF: gitAVIF,
  },
  {
    name: "linux",
    icon: linux,
  }
];

const experiences = [
  {
    title: "Formation Autodidacte - Data Science & Machine Learning",
    company_name: "OpenClassrooms / Coursera",
    icon: openclassrooms,
    iconAVIF: openclassroomsAVIF,
    iconBg: "#E6DEDD",
    date: "Mars 2025 - En cours",
    points: [
      "Initiation à l’analyse de données et au machine learning.",
      "Étude de Python, Pandas, Scikit-learn et algèbre linéaire.",
      "Exploration des systèmes de recommandation et des modèles prédictifs.",
    ],
  },
  {
    title: "Concepteur Développeur d'Applications - Titre RNCP (Bac+3/+4)",
    company_name: "Simplon",
    icon: simplon,
    iconAVIF: simplonAVIF,
    iconBg: "#ffffff",
    date: "Sept. 2024 - Juillet 2025",
    points: [
      "Développement et sécurisation d’applications sous Linux, PostgreSQL et Docker.",
      "Conception logicielle : analyse des besoins, architecture en couches, bases de données SQL/NoSQL.",
      "Gestion de projet en méthodologie Agile (Scrum, Kanban).",
      "Tests unitaires, documentation et contribution à la mise en production.",
      "Projet marquant : développement de bots Discord pour automatiser la gestion du serveur Simplon Hauts-de-France.",
    ],
  },
  {
    title: "Formation - Développeur .NET",
    company_name: "Simplon",
    icon: simplon,
    iconAVIF: simplonAVIF,
    iconBg: "#ffffff",
    date: "Nov. 2023 - Fév. 2024",
    points: [
      "Développement backend avec .NET 6 et C#.",
      "Modélisation et gestion de bases de données avec PostgreSQL et MERISE.",
      "Conception d'API REST avec ASP.NET Core (MVC, Entity Framework).",
      "Mise en place de tests unitaires et initiation aux bonnes pratiques de développement.",
    ],
  },
  {
    title: "Stage - Développeur Front-End",
    company_name: "Huluette Design",
    icon: Huluette,
    iconAVIF: HuluetteAVIF,
    iconBg: "#E6DEDD",
    date: "Déc. 2023",
    points: [
      "Conception et développement d’un site catalogue en React pour l’entreprise La Farandole.",
    ],
  },
  {
    title: "Formation - Développeur Front-end",
    company_name: "Simplon",
    icon: simplon,
    iconAVIF: simplonAVIF,
    iconBg: "#ffffff",
    date: "Sept. 2023 - Oct. 2023",
    points: [
      "Développement d’interfaces dynamiques avec JavaScript, React et Redux.",
    ],
  },
  {
    title: "Formation Autodidacte - Développement Web",
    company_name: "OpenClassrooms / Codecademy",
    icon: openclassrooms,
    iconAVIF: openclassroomsAVIF,
    iconBg: "#E6DEDD",
    date: "Mai 2023 - Août 2023",
    points: [
      "Apprentissage des bases du développement web : HTML5, CSS3, JavaScript.",
    ],
  },
  {
    title: "CDD - Vendeur",
    company_name: "Centrakor / Nature & Découvertes",
    icon: centrakor,
    iconAVIF: centrakorAVIF,
    iconBg: "#E6DEDD",
    date: "Sept. 2021 - Avril 2023",
    points: [
      "Gestion des ventes et relation client.",
      "Travail en équipe et gestion de stock.",
      "Encaissement et suivi des opérations de caisse.",
    ],
  },
  {
    title:
      "M1 Spécialité European Affairs + Licence de Droit, Économie et Gestion - Science Politique",
    company_name: "Université de Lille",
    icon: Universite_Lille,
    iconAVIF: Universite_LilleAVIF,
    iconBg: "#E6DEDD",
    date: "Sept. 2016 - Août 2020",
    points: [
      "Rédaction d’un mémoire sur les enjeux politiques et stratégiques de la vente d’armes françaises dans le cadre du conflit yéménite.",
      "Gestion de projet et analyse de politiques publiques.",
      "Droit administratif, pénal, international et européen.",
      "Maîtrise de l’anglais à un niveau académique.",
    ],
  },
];



const projects = [
  {
    name: "La Bonne Auberge",
    description:
      "Site réalisé en groupe pendant ma formation de développeur .NET. Il nous a été demandé de créer un site de restaurant en ASP. Net Core MVC avec un système de réservation, d'avis et un backoffice. Un lien vers le site est disponible sur mon Github.",
    tags: [
      {
        name: "Asp.Net Core MVC",
        color: "aspnet-text",
      },
      {
        name: "SQLite",
        color: "sqlite-text",
      },
      {
        name: "Bootstrap",
        color: "bootstrap-text",
      },
    ],
    image: LaBonneAuberge,
    imageAVIF: LaBonneAubergeAVIF,
    source_code_link: "https://github.com/EnguerranSGG/LaBonneAuberge_ES",
  },
  {
    name: "La Farandole",
    description:
      "Site réalisé en complète autonomie pendant mon stage en tant que développeur Front-end chez Huluette Design. Il s'agit d'un site vitrine usant de la bibliothèque REACT pour l'entreprise 'La Farandole', il est maintenant hébergé sur Hostinger. Un lien vers le site est disponible sur mon Github.",
    tags: [
      {
        name: "react",
        color: "react-text",
      },
      {
        name: "css",
        color: "css-text",
      },
      {
        name: "JSON",
        color: "json-text",
      },
    ],
    image: LaFarandole,
    imageAVIF: LaFarandoleAVIF,
    source_code_link: "https://github.com/EnguerranSGG/Farandole_Project",
  },
  {
    name: "Pokedex",
    description:
      "Pokédex réalisé avec le framework Angular en fetchant les données d'une API. Site toujours en cours de développement mais un lien vers l'application actuelle est disponible sur mon Github.",
    tags: [
      {
        name: "angular",
        color: "angular-text",
      },
      {
        name: "scss",
        color: "scss-text",
      },
      {
        name: "TypeScript",
        color: "typescript-text",
      },
    ],
    image: PokedexProject,
    imageAVIF: PokedexProjectAVIF,
    source_code_link: "https://github.com/EnguerranSGG/Pokedex_Project",
  },
  {
    name: "ShopTendance",
    description:
      "Site réalisé en tant que projet chef d'oeuvre de ma formation de développeur Front-end chez Simplon. L'objectif était de réaliser le back-office d'un site de vétements fictif avec un CRUD complet usant de la librairie Redux ainsi qu'un système de filtrage des produits par catégorie utilisant React-router-dom.",
    tags: [
      {
        name: "redux",
        color: "redux-text",
      },
      {
        name: "react",
        color: "react-text",
      },
      {
        name: "JSON",
        color: "json-text",
      },
    ],
    image: ShopTendance,
    imageAVIF: ShopTendanceAVIF,
    source_code_link:
      "https://github.com/EnguerranSGG/ShopTendanceInventory_Project",
  },
  {
    name: "Météo Connect",
    description:
      "Site réalisé en groupe pendant ma formation de développeur Front-end chez Simplon. L'objectif était de concevoir une application de météo React en se connectant à une API de prévisions météorologiques. Un lien vers le site est disponible sur mon Github.",
    tags: [
      {
        name: "react",
        color: "react-text",
      },
      {
        name: "tailwind",
        color: "tailwind-text",
      },
    ],
    image: MeteoProject,
    imageAVIF: MeteoProjectAVIF,
    source_code_link: "https://github.com/EnguerranSGG/MeteoConnect_Project",
  },
  {
    name: "UserEXplorer",
    description:
      "Site réalisé pendant ma formation de développeur Front-end chez Simplon. L'objectif était de concevoir une interface consommant les données d'une API REST pour lister les employés d'une entreprise fictive. Un lien vers le site est disponible sur mon Github.",
    tags: [
      {
        name: "JavaScript",
        color: "js-text",
      },
      {
        name: "html",
        color: "html-text",
      },
      {
        name: "css",
        color: "css-text",
      },
    ],
    image: UserExplorer,
    imageAVIF: UserExplorerAVIF,
    source_code_link: "https://github.com/EnguerranSGG/userExplorer_Project",
  },
];

export { technologies, experiences, projects };
