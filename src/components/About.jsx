import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className="intro_sub_title">Introduction</p>
        <h2 className="intro_title">À propos de moi...</h2>
      </motion.div>

      {/* 🟢 Section 1 : Transition vers le numérique */}
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="intro_description">
        Ancien étudiant en sciences politiques spécialisé dans la conduite de
        projets européens, j’ai décidé il y a deux ans de me réorienter vers le
        développement informatique. D’abord séduit par cette capacité à matérialiser
        des idées en solutions concrètes et utiles, je l’ai été encore davantage
        par la rencontre stimulante entre le monde des idées et la réalité
        technique, exigeant ingéniosité et créativité. Curieux et autodidacte,
        j’ai commencé mon apprentissage avec HTML et CSS avant d’intégrer une
        formation intensive chez Simplon afin de structurer mon apprentissage et
        monter en compétences.
        <br />
        <br />
      </motion.p>

      {/* 🟢 Section 2 : Débuts chez Simplon & stage Farandole */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="academic">
        <div className="academic_line" />
        <h3 className="academic_title">
          Une formation intensive et professionnalisante
        </h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="academic_description"
      >
        Chez Simplon, j’ai acquis une solide base technique en développement
        web. J’ai d’abord été formé au front-end avec JavaScript, React et la
        gestion d’API, avant de me familiariser avec la programmation orientée
        objet, le langage UML, la méthodologie Kanban et la gestion de bases de
        données durant une formation orienté back-end. Ces connaissances ont été
        mises en pratique lors de plusieurs projets concrets, notamment la
        réalisation d’un site vitrine pour l’entreprise "La Farandole" lors de
        mon premier stage, ainsi que le développement d’un site de restaurant
        fictif en équipe.
      </motion.p>

      {/* 🟢 Section 3 : Formation CDA et stage chez AIR */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="active">
        <h3 className="active_title">
          Approfondissement et mise en application
        </h3>
        <div className="active_line" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="active_description"
      >
        Ensuite, dans le cadre de ma formation de Concepteur Développeur
        d’Applications, j’ai renforcé mes compétences en conception logicielle,
        sécurité applicative et DevOps (Docker, GitHub Actions, Linux). Ce
        parcours s’est concrétisé par un projet collaboratif visant à
        automatiser la gestion du serveur Discord régional de Simplon
        Hauts-de-France grâce à plusieurs bots. <br />
        <br />
        Actuellement, je poursuis mon apprentissage au sein de
        <strong> l’association A.I.R. </strong> (Accueil Insertion Rencontre) où
        je participe au développement d’un site vitrine ainsi que de deux
        applications : l’une dédiée à la gestion d’une boutique solidaire et
        l’autre au suivi des apprenants en Français Langue Étrangère. Cette
        expérience me permet d’affiner ma méthodologie et de travailler sur des
        projets à impact social tout en consolidant mes compétences techniques.
      </motion.p>

      {/* 🟢 Section 4 : Spécialisation en IA */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="academic">
        <div className="academic_line" />
        <h3 className="academic_title">Vers l'intelligence artificielle...</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="active_description"
      >
        Désormais, mon ambition est de me spécialiser dans le Machine Learning.
        D’aussi loin que je me souvienne et bien avant que je la regarde d’un
        point de vue technique, j’ai toujours considéré l’intelligence
        artificielle comme un domaine passionnant. Sur les bancs de l’université
        déjà je croyais en son potentiel, en effet il est indéniable que nos
        sociétés sont appelées à se refonder autour d’elle. Personnellement, je
        souhaite aujourd'hui devenir Machine Learning Engineer, particulièrement
        dans l'industrie du jeu vidéo, secteur idéal selon moi pour concevoir
        des expériences innovantes et immersives. <br />
        <br />
        Je suis donc à la recherche d’une alternance dès la rentrée
        2025 pour perfectionner mes compétences et évoluer dans un cadre
        professionnel et académique stimulant. Mes différentes expériences m’ont
        appris l’importance d’une conception rigoureuse, du découpage des tâches
        en équipe et surtout la valeur de l’expérimentation sans crainte de
        l’échec.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
