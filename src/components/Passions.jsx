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
                Pour conclure cette présentation, outre la programmation, voici quelques-unes de mes passions.
            </motion.p>

            <div className='passions_wrapper'>
                <motion.div
                    variants={fadeIn("up", "spring", 0.5, 1)}
                    className='passions_container'
                >
                    <input type="radio" name="slide" id="passion1" defaultChecked/>
                    <label htmlFor="passion1" className='passion_card'>
                        <div className="row">
                            <div className="passion_description">
                                <h4>Littérature</h4>
                                <p>Particuièrement friand de littérature fantastique comme les nouvelles de H.P Lovecraft.</p>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="slide" id="passion2" />
                    <label htmlFor="passion2" className='passion_card'>
                        <div className="row">
                            <div className="passion_description">
                                <h4>Dessin</h4>
                                <p>En pratique amateur, je dessine pour me détendre.</p>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="slide" id="passion3" />
                    <label htmlFor="passion3" className='passion_card'>
                        <div className="row">
                            <div className="passion_description">
                                <h4>Jeux vidéo</h4>
                                <p>Très grand fan des jeux du studio FromSoftware.</p>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="slide" id="passion4" />
                    <label htmlFor="passion4" className='passion_card'>
                        <div className="row">
                            <div className="passion_description">
                                <h4>Animation japonsaise</h4>
                                <p>Passion sans borne pour l'animation japonaise.</p>
                            </div>
                        </div>
                    </label>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Passions)