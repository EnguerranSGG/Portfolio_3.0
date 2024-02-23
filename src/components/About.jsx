import React from 'react'
import { styles } from '../styles';
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
        Ancien "science politiste" de 25 ans, cela va bientôt faire un an maintenant que je me suis reconverti en tant
        développeur. Ce qui m'a tout de suite plu dans ce secteur ? Son champ des possibles et sa transversalité !<br /><br />
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
        nombreux travaux de groupe et projets. Ils m'ont permis de gagner une expérience notoire dans la gestion de projet.
        Expérience que j'aspire consolider et concrétiser à l'avenir.


      </motion.p>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='active'>
        <h3 className='active_title'>
          La pédagogie active
        </h3>
        <div className='active_line' />
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='active_description'>
        Après ma période d'apprentissage en autodidacte, lorsque j'eus envie de passer aux choses sérieuses, je rejoignis
        le centre de formation Simplon. Le fait d'avoir toujours travaillé sur des projets
        concrêts avec leur deadline et une grande autonomie m'a fait gagner en confiance et en débrouillardise, compétences
        essentielles pour un développeur. <br /><br />
        Maintenant, je n'aspire plus qu'à une seule chose, poursuivre mon apprentissage. Acquérir un socle de connaissances
        encore plus solides avant de me spécialiser. Je porte notamment un grand intêret pour les technologies de réalité
        augmentée et de réalité virtuelle, c'est pourquoi j'ai commencé à apprendre C# et C++.
      </motion.p>

    </>
  )
}

export default SectionWrapper(About, "about");