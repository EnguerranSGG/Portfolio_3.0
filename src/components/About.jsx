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
        Ancien étudiant en sciences poltiques spécialisé dans la conduite de projets européens, cela fait un an et demi que je me suis tourné vers la programmation informatique. Si j’ai choisi cette voie, en parallèle de mon attrait pour les nouvelles technologies, c’est pour la transversalité absolue du secteur. <br /><br />
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='academic'>
        <div className='academic_line' />
        <h3 className='academic_title'>
          La rigueur universitaire
        </h3>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='academic_description'>
        Issu à l'origine d'un parcours universitaire,
        j'ai effectivement arpenté les chemins de
        la science politique jusqu'à la validation
        de mon M1. Au delà des connaissances pures et de la
        maîtrise de l'anglais, j'y ai acquis un grand
        sens de l'organisation et de la rigueur ! <br /><br />
        En plus des savoirs et compétences académiques, au fil des années, j'ai eu l'occasion de participer à de
        nombreux travaux de groupe et projets. Ils m'ont permis de gagner une expérience notoire dans la gestion de projet et dans la travail d'équipe.
        Expérience que j'aspire à consolider et concrétiser à l'avenir.


      </motion.p>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='active'>
        <h3 className='active_title'>
          La pédagogie active
        </h3>
        <div className='active_line' />
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='active_description'>
        Après ma période d'apprentissage en autodidacte, je rejoignis Simplon pour plusieurs mois de formation intensive en développement Front-end et Back-end avec de véritables professionnels du secteur. Le fait d'avoir toujours travaillé sur des projets
        concrêts avec des délais impartis et une grande autonomie m'a fait gagner en confiance et en débrouillardise, compétences
        essentielles pour un développeur. <br /><br />
        Maintenant, je n'aspire plus qu'à une seule chose, poursuivre mon apprentissage. Acquérir un socle de connaissances
        encore plus solide avant de me spécialiser. Je porte notamment un grand intérêt pour la programmation orientée objet.
      </motion.p>

    </>
  )
}

export default SectionWrapper(About, "about");