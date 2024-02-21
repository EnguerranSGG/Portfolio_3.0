import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    Universite_Lille,
    centrakor,
    Huluette,
    tripguide,
    threejs,
    openclassrooms,
    simplon,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };