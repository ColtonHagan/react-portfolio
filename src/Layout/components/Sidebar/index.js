/**
 * Sidebar.js
 * 
 * Description: Sidebar navigation bar that transforms into hamburger drop down on smaller screen sizes.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArchive, faUser, faEnvelope, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./index.scss";

const Sidebar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className="nav-bar">
            <FontAwesomeIcon onClick={() => setMenu(!menu)} icon={menu ? faClose : faBars} className="mobile-menu" />
            <Link className="logo" to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav className={menu ? "mobile" : ""} onClick={() => setMenu(false)}>
                <NavLink exact={+true} id="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact={+true} id="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink exact={+true} id="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faArchive} />
                </NavLink>
                <NavLink exact={+true} id="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/colton-hagan-002b891b6/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/ColtonHagan">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://discord.com/users/ColtonHagan#7205">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
