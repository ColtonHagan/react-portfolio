
/**
 * ProjectItem.js
 * 
 * Description: ProjectItem slide with project img, description, and github link.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const ProjectItem = ({ title, github, img }) => {
  return (
    <div className="project-item">
      <img src={img} alt={title} />
      <div id="img-info">
        <h2>{title}</h2>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} id="github-icon" />
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;