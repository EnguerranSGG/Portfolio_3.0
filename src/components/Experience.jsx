import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: 'radial-gradient(ellipse at top, #e99e68, transparent), radial-gradient(ellipse at bottom, #cfa689, transparent)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
    <div className='experience_icon_container'>
      <img src={experience.icon} alt={experience.company_name} className='experience_icon' />
    </div>}>
    <div>
      <h3 className='experience_title'>{experience.title}</h3>
      <p className='experience_company_name'>{experience.company_name}</p>
      <p>{experience.company_description}</p>
    </div>

    <ul className='experience_details'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='experience_point'>
          <p className='experience_point_text'>{point}</p>
        </li>
      ))}
    </ul>

    

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div>
        <p className='intro_sub_title' id='experience'>
          Timeline
        </p>
        <h2 className='intro_title'>
          Mon parcours
        </h2>
      </motion.div>

      <div className='experience_container'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience");