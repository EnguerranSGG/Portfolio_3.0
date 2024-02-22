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
    Universite_Lille,
    centrakor,
    Huluette,
    threejs,
    openclassrooms,
    simplon,
    LaBonneAuberge,
    LaFarandole,
    Portfolio
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
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C#",
      icon: CSharp,
    },
    {
      name: "C++",
      icon: Cplusbis,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: ".NET",
      icon: NET,
    },
    {
      name: "PostgreSQL",
      icon: postgreSQL,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Excalidraw",
      icon: excalidraw,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Formation - Développeur .NET",
      company_name: "Simplon",
      icon: simplon,
      iconBg: "#ffffff",
      date: "Nov. 2023 - Févr. 2024",
      points: [
        "Inititation à .NET 6(.NET 6).",
        "Programmation Orientée Objet en C#.",
        "Conception UML / Méthode Merise (MLD, MCD, MPD).",
        "SQL / BackEnd REST en ASP. Net Core (Minimal API, API, MVC, Entity Framework).",
        "Base de donnée PostgreSQL.",
        "Initiation aux bonnes partiques / Test unitaire."
      ],
    },
    {
      title: "Stage - Developpeur Front-End",
      company_name: "Huluette Design",
      icon: Huluette,
      iconBg: "#E6DEDD",
      date: "Oct. 2023 - Nov. 2023",
      points: [
        "Conception et dévelopement en autonomie d'un site vitre pour l'entreprise 'La Farandole'."
      ],
    },
    {
      title: "Formation - Developpeur Front-end",
      company_name: "Simplon",
      icon: simplon,
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
      iconBg: "#E6DEDD",
      date: "Sept. 2016 - Janv. 2021",
      points: [
        "Réalisation d'un mémoire sur le processus de création d'un chantier public autour de la vente d'armes françaises au Yémen.",
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
      source_code_link: "https://github.com/EnguerranSGG/CV_Portfolio",
    },
  ];
  
  export { technologies, experiences, projects };