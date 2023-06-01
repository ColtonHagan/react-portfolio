/**
 * ProjectSlider.js
 * 
 * Description: Project slider and settings.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./index.scss";
import ProjectItem from '../ProjectItem';

const ProjectSlider = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1250,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  return (
    <Slider className='slider' {...settings}>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          github={project.github}
          img={project.img}
        />
      ))}
    </Slider>
  );
};

export default ProjectSlider;