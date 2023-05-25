import React from 'react';
import "./index.scss";
import Loader from 'react-loaders';
import ProjectSlider from '../ProjectSlider';
import portfolio from  "../../assets/images/portfolio2.jpg";
import AnimatedLetters from "../AnimatedLetters";


const Projects = () => {
  const projectArray = [
    {
      title: "1111111111111",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "2222222222222",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "333333333333333333333",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "444444444444444444444444444",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "5555555",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
  ];
  return (
    <>
        <div className="container projects-page">
          <h1>
            <AnimatedLetters
                letterClass={'letter-animate'}
                strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                idx={20}
            />
          </h1>
          <div className="slider-wrapper">
            <ProjectSlider projects={projectArray} />
          </div>
        </div>
        <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Projects;