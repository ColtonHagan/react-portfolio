/**
 * Projects.js
 * 
 * Description: Projects page with slider going over varous projects I have completed.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import React from 'react';
import "./index.scss";
import Loader from 'react-loaders';
import ProjectSlider from './components/ProjectSlider';
import portfolio from "../../assets/images/portfolio.jpg";
import deadwood from "../../assets/images/deadwood.jpg";
import pagewise from "../../assets/images/PageWise.png";
import bestreads from "../../assets/images/bestreads.png";
import bytebrawn from "../../assets/images/bytebrawn.png";
import pokemon from "../../assets/images/pokemon.jpg"
import AnimatedLetters from "../../components/AnimatedLetters";

const Projects = () => {
  const projectArray = [
    {
      title: "This portfolio website",
      github: "https://github.com/ColtonHagan/react-portfolio",
      img: portfolio,
    },
    {
      title: "ByteBrawn workout website",
      github: "https://github.com/ColtonHagan/ByteBrawn",
      img: bytebrawn,
    },
    {
      title: "Deadwood board game",
      github: "https://github.com/ColtonHagan/Deadwood/tree/gui",
      img: deadwood,
    },
    {
      title: "PageWise an android reading tracker",
      github: "https://github.com/kurtzhk/pagewise/tree/codeCleanUp",
      img: pagewise,
    },
    {
      title: "BestReads a book review website",
      github: "https://github.com/ColtonHagan/PortfolioFor330/tree/master/Book%20Reviews",
      img: bestreads,
    },
    {
      title: "Basic Pokemon game",
      github: "https://github.com/ColtonHagan/PortfolioFor330/tree/master/Pokemon%20Game",
      img: pokemon,
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
        <div id="slider-wrapper">
          <ProjectSlider projects={projectArray} />
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  );
};

export default Projects;
