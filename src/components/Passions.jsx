import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const Passions = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
          <p className='intro_sub_title'>
            Centres d'intérêt
          </p>
          <h2 className='intro_title'>
            Mes passions
          </h2>
        </motion.div>
  
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='intro_description'>
          Pour conclure cette présentation, voici quelques-unes de mes passions. 
        </motion.p>
  
        <div className='passions_container'>
        </div>
      </>
    );
};

export default SectionWrapper(Passions)