import React from 'react'
import { styles } from '../styles';
import { services, technologies } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='intro_sub_title'>
          Introduction
        </p>
        <h2 className='intro_title'>
          À propos de moi...
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='intro_description'>
        Enguerran, 25 ans, ancien science politique en reconversion professionnelle depuis un an maintenant.
        Un profil à la croisée de deux chemins. Parler de mon intérêt pour C++ et C#.
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
        de mon M1. <br />

        Au delà des connaissances pures et de la
        maîtrise de l'anglais, j'y ai acquis un grand
        sens de l'organisation et de la rigueur !
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='active'>
        <h3 className='active_title'>
          La pédagogie active
        </h3>
        <div className='active_line' />
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='active_description'>
        Issu à l'origine d'un parcours universitaire,
        j'ai effectivement arpenté les chemins de
        la science politique jusqu'à la validation
        de mon M1. <br />

        Au delà des connaissances pures et de la
        maîtrise de l'anglais, j'y ai acquis un grand
        sens de l'organisation et de la rigueur !
      </motion.p>

    </>
  )
}

export default SectionWrapper(About, "about");