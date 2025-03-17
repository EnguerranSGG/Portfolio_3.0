import React from 'react'
import { motion } from 'framer-motion'

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
      <div className="projectcard_container" onClick={() => window.open(source_code_link, "_blank")}>
        <div className="projectcard_bg">
          <img src={imageAVIF} onError={e => e.currentTarget.src = `${image}`} alt={name} className="projectcard_image" />
          <div className="projectcard_content">
          </div>
        </div>
        <div className="projectcard_info">
          <h3 className="projectcard_title">{name}</h3>
          <p className="projectcard_description">{description}</p>
          <div className="projectcard_tags">
            {tags.map((tag) => (
              <p key={tag.name} className={`projectcard_tag ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
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
        une formation. Les projets réalisés au cours de ma dernière formation ne sont pas encore présents.
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