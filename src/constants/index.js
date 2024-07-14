import {
    javascript,
    html,
    css,
    reactjs,
    redux,
    postgreSQL,
    git,
    bootstrap,
    excalidraw,
    docker,
    CSharp,
    Cplusbis,
    NET,
    threejs,
    java,
    tailwind,
    MySQL,
    typescript,
    figma,
    angular,

    htmlAVIF,
    cssAVIF,
    gitAVIF,
    javascriptAVIF,
    reactjsAVIF,
    reduxAVIF,
    threejsAVIF,
    CSharpAVIF,
    CplusbisAVIF,
    NETAVIF,
    postgreSQLAVIF,
    excalidrawAVIF,
    bootstrapAVIF,
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
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      iconAVIF: htmlAVIF,
    },
    {
      name: "CSS 3",
      icon: css,
      iconAVIF: cssAVIF,
    },
    {
      name: "JavaScript",
      icon: javascript,
      iconAVIF: javascriptAVIF,
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
      icon: CSharp,
      iconAVIF: CSharpAVIF,
    },
    {
      name: "C++",
      icon: Cplusbis,
      iconAVIF: CplusbisAVIF,
    },
    {
      name: "React JS",
      icon: reactjs,
      iconAVIF: reactjsAVIF,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      iconAVIF: reduxAVIF,
    },
    {
      name: "Three JS",
      icon: threejs,
      iconAVIF: threejsAVIF,
    },
    {
      name: "Angular",
      icon: angular,
      iconAVIF: angularAVIF,
    },
    {
      name: ".NET",
      icon: NET,
      iconAVIF: NETAVIF,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap,
      iconAVIF: bootstrapAVIF,
    },
    {
      name: "Excalidraw",
      icon: excalidraw,
      iconAVIF: excalidrawAVIF,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "PostgreSQL",
      icon: postgreSQL,
      iconAVIF: postgreSQLAVIF,
    },
    {
      name: "MySQL",
      icon: MySQL,
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
    }
  ];
  
  const experiences = [
    {
      title: "Formation - Développeur .NET",
      company_name: "Simplon",
      icon: simplon,
      iconAVIF: simplonAVIF,
      iconBg: "#ffffff",
      date: "Nov. 2023 - Févr. 2024",
      points: [
        "Initiation à .NET 6(.NET 6).",
        "Programmation Orientée Objet en C#.",
        "Conception UML / Méthode Merise (MLD, MCD, MPD).",
        "SQL / BackEnd REST en ASP. Net Core (Minimal API, API, MVC, Entity Framework).",
        "Base de donnée PostgreSQL.",
        "Initiation aux bonnes pratiques / Test unitaire."
      ],
    },
    {
      title: "Stage - Développeur Front-End",
      company_name: "Huluette Design",
      icon: Huluette,
      iconAVIF: HuluetteAVIF,
      iconBg: "#E6DEDD",
      date: "Oct. 2023 - Nov. 2023",
      points: [
        "Conception et dévelopement en autonomie d'un site vitrine pour l'entreprise 'La Farandole'."
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
        "Élaboration d'interfaces web dynamiques au travers de JavaScript et de ses bibliothèques REACT et Redux.",
      ],
    },
    {
      title: "Formation - Autodidacte",
      company_name: "OpenClassrooms / Codacademy",
      icon: openclassrooms,
      iconAVIF: openclassroomsAVIF,
      iconBg: "#E6DEDD",
      date: "Mai 2023 - Août 2023",
      points: [
        "Initiation à la programmation au travers d'HTML5, CSS3, JavaScript."
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
        "Process de vente (observation, écoute).",
        "Travail d'équipe.",
        "Encaissement.",
        "Gestion de stock.",
        "Ouverture et clotûre du magasin."
      ],
    },
    {
      title: " M1 Spécialité European Affairs + Licence de droit, économie et gestion mention science politique",
      company_name: "Université de Lille",
      icon: Universite_Lille,
      iconAVIF: Universite_LilleAVIF,
      iconBg: "#E6DEDD",
      date: "Sept. 2016 - Janv. 2021",
      points: [
        "Réalisation d'un mémoire sur le processus de création d'un chantier public autour de la vente d'armes françaises dans le cadre du conflit Yémenite.",
        "Gestion de projet.",
        "Droit administratif, pénal, international et européen.",
        "Politiques publiques.",
        "Géopolitique.",
        "Pratique de l'anglais niveau universitaire."
      ],
    }
  ];
  
  const projects = [
    {
      name: "La Bonne Auberge",
      description:
        "Site réalisé en groupe pendant ma formation de développeur .NET. Il nous a été demandé de créer un site de restaurant en ASP. Net Core MVC avec un système de réservation, d'avis et un backoffice. Un lien vers le site est disponible sur mon Github.",
      tags: [
        {
          name: "Asp.Net Core MVC",
          color: "aspnet-text"
        },
        {
          name: "SQLite",
          color: "sqlite-text"
        },
        {
          name: "Bootstrap",
          color: "bootstrap-text"
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
          color: "react-text"
        },
        {
          name: "css",
          color: "css-text"
        },
        {
          name: "JSON",
          color: "json-text"
        }
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
          color: "angular-text"
        },
        {
          name: "scss",
          color: "scss-text"
        },
        {
          name: "TypeScript",
          color: "typescript-text"
        }
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
          color: "redux-text"
        },
        {
          name: "react",
          color: "react-text"
        },
        {
          name: "JSON",
          color: "json-text"
        }
      ],
      image: ShopTendance,
      imageAVIF: ShopTendanceAVIF,
      source_code_link: "https://github.com/EnguerranSGG/ShopTendanceInventory_Project",
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
        }
      ],
      image: MeteoProject,
      imageAVIF: MeteoProjectAVIF,
      source_code_link: "https://github.com/EnguerranSGG/MeteoConnect_Project"  
    },
    {
      name: "UserEXplorer",
      description: "Site réalisé pendant ma formation de développeur Front-end chez Simplon. L'objectif était de concevoir une interface consommant les données d'une API REST pour lister les employés d'une entreprise fictive. Un lien vers le site est disponible sur mon Github.",
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
        }
      ],
      image: UserExplorer,
      imageAVIF: UserExplorerAVIF,
      source_code_link: "https://github.com/EnguerranSGG/userExplorer_Project"
    }
  ];
  
  export { technologies, experiences, projects };