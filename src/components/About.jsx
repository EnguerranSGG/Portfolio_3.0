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
        Issu d’une formation en sciences politiques spécialisée dans la conduite de projets européens, j’ai décidé il y a un an et demi de me réorienter vers l’informatique, un domaine qui allie rigueur, créativité et innovation. Mon intérêt pour la programmation m’a rapidement conduit à explorer la data science et l’intelligence artificielle, des domaines où l’analyse et la modélisation de données jouent un rôle central. <br /><br />
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='academic'>
        <div className='academic_line' />
        <h3 className='academic_title'>
          De la rigueur académique à l’analyse de données
        </h3>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='academic_description'>
        Mon parcours universitaire m’a apporté une solide capacité d’analyse, une organisation rigoureuse et une bonne maîtrise de l’anglais. En travaillant sur des projets de recherche et des études comparatives, j’ai développé un esprit critique et méthodique, des compétences essentielles en data science et en machine learning. <br /><br />
        Au fil des années, j’ai également acquis une expérience significative en gestion de projet et en travail d’équipe. Cette capacité à structurer, organiser et collaborer efficacement me permet aujourd’hui d’aborder des problématiques complexes liées à l’analyse de données et à l’apprentissage automatique.
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='active'>
        <h3 className='active_title'>
          Un apprentissage progressif et pragmatique
        </h3>
        <div className='active_line' />
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='active_description'>
        Après une période d’apprentissage en autodidacte, j’ai intégré Simplon pour une formation intensive en développement logiciel. J’y ai acquis des compétences solides en programmation (Java, .NET, TypeScript) et en gestion des bases de données (PostgreSQL, SQL). Ce parcours m’a permis de travailler sur des projets concrets avec des contraintes réelles, renforçant ainsi ma capacité à résoudre des problèmes complexes de manière efficace et autonome. <br /><br />
        Aujourd’hui, je me spécialise dans l’intelligence artificielle et la data science. J’explore activement les fondamentaux du machine learning, de l’analyse de données et des systèmes de recommandation. Mon objectif est d’acquérir une expertise technique approfondie pour contribuer à des projets innovants dans ces domaines. <br /><br />
        Je suis actuellement à la recherche d’une <strong>alternance pour la rentrée 2025</strong>, afin de consolider mes compétences et d’évoluer au sein d’une équipe spécialisée en IA et en data science.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");
