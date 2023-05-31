import React from 'react'
import "./index.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const ProjectItem = ({title, github, img}) => {

  return (
    <div className="project-item">
        <img src={img} alt={title} />
        <div className="img-info">
            <h2>{title}</h2>
            <a href={github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="github-icon"/>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem;