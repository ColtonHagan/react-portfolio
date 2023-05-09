import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoSubtitle from "../../assets/images/bad-temp-subtitle-logo.png";
import Logo from "../../assets/images/bad-temp-logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faArchive, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img src={Logo} alt="Logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="replace"/>
            </Link>
            <nav>
                <NavLink exact="true" className="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faArchive} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/colton-hagan-002b891b6/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/ColtonHagan">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;