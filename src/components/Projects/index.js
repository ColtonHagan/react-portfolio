import React from 'react';
import "./index.scss";
import Loader from 'react-loaders';
import ProjectSlider from '../ProjectSlider';
import portfolio from  "../../assets/images/portfolio2.jpg";


const Projects = () => {
  const projectArray = [
    {
      title: "This portfolio website",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "portfolio website",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "This portfolio website made using React and SCSS",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "This portfolio website made using React and SCSS",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "This portfolio website made using React and SCSS",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
  ];
  return (
    <>
        <div className="slider-wrapper">
          <ProjectSlider projects={projectArray} />
        </div>
        <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Projects;