import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="about">
      <div className='about_div'>
        <div className='about_features'>
          <div className='about_ball'/>
          <div className='about_line'/>
        </div>
        <div className='about_text'>
          <h1>Bonjour, je suis <span>Enguerran</span></h1>
          <p>Un jeune développeur en quête d'alternance.</p>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  )
}

export default Hero