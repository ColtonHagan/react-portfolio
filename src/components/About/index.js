import React from 'react';
import "./index.scss";
import Loader from 'react-loaders';
import Image from "../../assets/images/about-page-image.png";
import Resume from "../../assets/pdf/resume.pdf";

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="image-zone">
          <img src={Image} alt="Colton Hagan"/>
        </div>
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            I'm recent graduate of Western Washington University with a Computer Science BS Degree who is a <br/>
            hardworking individual with communication skills and enjoys a high-pressure team environments. <br/>
            Looking to put my knowledge of computer science to work by designing, coding, testing, and debugging software.
          </p>
          <a href={Resume} className="flat-button" download="resume">Resume</a>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default About