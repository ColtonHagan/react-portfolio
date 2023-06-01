/**
 * About.js
 * 
 * Description: About page containing picture and about me blurb.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import React from 'react';
import Loader from 'react-loaders';
import Image from "../../assets/images/about-page-image.png";
import Resume from "../../assets/pdf/resume.pdf";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./index.scss";

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="image-zone">
          <img src={Image} alt="Colton Hagan" />
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={'letter-animate'}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={20}
            />
          </h1>
          <p>
            I'm a recent graduate of Western Washington University with a Computer Science BS Degree. I'm a
            hardworking individual with strong communication skills and enjoy working in high-pressure team environments.
            I'm looking to put my knowledge of computer science to work by designing, coding, testing, and debugging software.
          </p>
          <a href={Resume} className="flat-button" download="resume">Resume</a>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default About;