import React from 'react'
import { motion } from 'framer-motion'
import { VRHeadsetCanvas } from './canvas'

import { SectionWrapper } from '../hoc'

const Hero = () => {
  return (
    <>
    <section className="about">
      <div className='about_div'>
        <div className='about_features'>
          <div className='about_ball'/>
          <div className='about_line'/>
        </div>
        <div className='about_text'>
          <h1>Bonjour, je suis <span>Enguerran</span></h1>
          <p>Un jeune développeur en quête d'une alternance pour sa formation de développeur web !</p>
        </div>
      </div>

    </section>
    <section className="vr_headset">
    <VRHeadsetCanvas />
    </section>
    </>
  )
}

export default SectionWrapper(Hero , "")