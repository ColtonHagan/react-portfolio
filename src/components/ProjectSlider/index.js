import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import ProjectItem from '../ProjectItem';
import './index.scss';

const ProjectSlider = ({ projects }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      autoPlay
      autoPlayInterval={3000}
      infinite
      disableButtonsControls
    >
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          github={project.github}
          img={project.img}
        />
      ))}
    </AliceCarousel>
  );
};

export default ProjectSlider;
