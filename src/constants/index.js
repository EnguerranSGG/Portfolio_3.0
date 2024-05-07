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
    Portfolio,

    LaBonneAubergeAVIF,
    LaFarandoleAVIF,
    PortfolioAVIF
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
      name: "Bootstrap 5",
      icon: bootstrap,
      iconAVIF: bootstrapAVIF,
    },
    {
      name: "JavaScript",
      icon: javascript,
      iconAVIF: javascriptAVIF,
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
      name: ".NET",
      icon: NET,
      iconAVIF: NETAVIF,
    },
    {
      name: "PostgreSQL",
      icon: postgreSQL,
      iconAVIF: postgreSQLAVIF,
    },
    {
      name: "git",
      icon: git,
      iconAVIF: gitAVIF,
    },
    {
      name: "Excalidraw",
      icon: excalidraw,
      iconAVIF: excalidrawAVIF,
    },
    {
      name: "docker",
      icon: docker,
      iconAVIF: dockerAVIF,
    },
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
        "Inititation à .NET 6(.NET 6).",
        "Programmation Orientée Objet en C#.",
        "Conception UML / Méthode Merise (MLD, MCD, MPD).",
        "SQL / BackEnd REST en ASP. Net Core (Minimal API, API, MVC, Entity Framework).",
        "Base de donnée PostgreSQL.",
        "Initiation aux bonnes pratiques / Test unitaire."
      ],
    },
    {
      title: "Stage - Developpeur Front-End",
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
      title: "Formation - Developpeur Front-end",
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
        "Géopolitique",
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
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
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
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: LaFarandole,
      imageAVIF: LaFarandoleAVIF,
      source_code_link: "https://github.com/EnguerranSGG/Farandole_Project",
    },
    {
      name: "Mon premier portfolio",
      description:
        "Il s'agit ici de mon tout premier portfolio réalisé pendant ma formation en autodidacte. Si vous voulez en savoir plus sur ma passion du dessin et des jeux vidéo, (et que vous n'avez pas peur d'avoir un peu mal aux yeux) n'hésitez pas à le visiter! Un lien vers le site est disponible sur mon Github.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        }
      ],
      image: Portfolio,
      imageAVIF: PortfolioAVIF,
      source_code_link: "https://github.com/EnguerranSGG/CV_Portfolio",
    },
  ];
  
  export { technologies, experiences, projects };