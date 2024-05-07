import React from 'react'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='tech_container'>
      {technologies.map((technology) => (
        <div className='tech_card' key={technology.name}>
          <BallCanvas icon={technology.iconAVIF} onError={e => e.currentTarget.icon = `${technology.icon}`} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")