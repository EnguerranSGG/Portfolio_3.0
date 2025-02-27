import React from "react";

import { profilePic } from "../assets";

import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <>
      <section className="about">
        <div className="about_div">
          <div className="about_features">
            <div className="about_ball" />
            <div className="about_line" />
          </div>
          <div className="about_text">
            <div>
              <h1>
                Bienvenue, je suis <span>Enguerran</span>
              </h1>
            </div>
            <p>
              Développeur en transition vers l’intelligence artificielle et la data science.
            </p>
          </div>
        </div>

        <div className="about_image">
          <img src={profilePic} alt="profile" />
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Hero, "");

