import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  imageAVIF,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="projectcard" id='projects'>
      <Tilt
      option={{ max: 45, scale: 1, speed: 450 }}
      className="projectcard_container">
        <div className="projectcard_bg">
          <img src={imageAVIF} onError={e => e.currentTarget.src = `${image}`} alt={name} className="projectcard_image"/> 
          <div className="projectcard_content">
          <div onClick={ () => window.open(source_code_link, "_blank") } className='projectcard_link'>
            <img src={github} alt="github" className="projectcard_icon"/>
          </div>
        </div>
        </div>
        <div className="projectcard_info">
          <h3 className="projectcard_title">{name}</h3>
          <p className="projectcard_description">{description}</p>
        </div>
        <div className="projectcard_tags">
          {tags.map((tag) => (
            <p key={tag.name} className={`projectcard_tag ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='intro_sub_title'>
          Projets
        </p>
        <h2 className='intro_title'>
          Mes travaux notoires
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='intro_description'>
        Vous trouverez-ici une partie des projets
        auxquels j'ai contribué seul ou en groupe ;
        qu'ils soient personnels ou réalisés durant
        une formation.
      </motion.p>

      <div className='works_container'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "Works")