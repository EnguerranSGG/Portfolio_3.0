import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id='about'>
        <p className='intro_sub_title'>
          Introduction
        </p>
        <h2 className='intro_title'>
          À propos de moi...
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='intro_description'>
      Issu d’une formation en science politique spécialisée dans la conduite de projets européens, j’ai décidé il y a deux ans de me reconvertir dans le développement informatique. Ce choix est né du désir de travailler dans un domaine où logique, créativité et innovation se rencontrent. Après une première initiation autodidacte au HTML et CSS, j’ai rapidement élargi mes compétences en intégrant une formation intensive chez Simplon, où j’ai découvert la programmation back-end et front-end à travers divers langages, librairies et frameworks. <br/><br/>
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='academic'>
        <div className='academic_line' />
        <h3 className='academic_title'>
        Un apprentissage structuré et professionnalisant
        </h3>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='academic_description'>
      Au fil de mon parcours, j’ai consolidé mes connaissances en conception de solutions numériques et en gestion de bases de données. Mon expérience en développement s’est enrichie au travers de plusieurs projets concrets : création d’un site vitrine en React lors de mon premier stage, développement d’une application de gestion en .NET, et participation à un projet collaboratif visant à automatiser la gestion d’un serveur Discord. J’ai également été sensibilisé à la philosophie DevOps, à la conteneurisation avec Docker et aux pipelines CI/CD.
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='active'>
        <h3 className='active_title'>
          Vers l'intelligence artificielle...
        </h3>
        <div className='active_line' />
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='active_description'>
      Aujourd’hui, je me consacre pleinement à l’apprentissage de la data science, de l’algèbre linéaire et des fondamentaux de l’intelligence artificielle, avec pour objectif de devenir Machine Learning Engineer. Depuis longtemps, l’IA me fascine, non seulement par son potentiel à transformer nos sociétés, mais aussi par les défis techniques et éthiques qu’elle soulève. Convaincu que nous sommes à l’aube d’une révolution où la donnée et l’apprentissage automatique joueront un rôle central, je souhaite approfondir mon expertise et contribuer activement à cette dynamique.<br/><br/>Dans cette optique, je suis à la recherche d’une alternance pour la rentrée 2025, afin de perfectionner mes compétences, évoluer dans un cadre professionnel stimulant et participer à des projets d’innovation en intelligence artificielle.      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");
