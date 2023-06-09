/**
 * ContactInformation.js
 * 
 * Description: ContactInformation containing location, contact information, and links.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import React from 'react';
import "./index.scss";
import ContactItem from '../ContactItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEnvelope, faPhone, faLocationPin, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";

const ContactInformation = () => {
    return (
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
                Currently located in Leavenworth, WA, but willing to relocate anywhere in the United States. Reach out if you are interested in hiring or want more information. Always available by email and available by phone on weekdays past noon PST.
            </p>
            <ul>
                <li>
                    <ContactItem logo={faLocationPin} title="Current Location" text="Leavenworth, WA" />
                </li>
                <li>
                    <ContactItem logo={faGlobe} title="Available Locations" text="United States" />
                </li>
                <li>
                    <ContactItem logo={faComment} title="Languages" text="English" />
                </li>
                <li>
                    <ContactItem logo={faEnvelope} title="Email" text="coltonmhagan@gmail.com" />
                </li>
                <li>
                    <ContactItem logo={faPhone} title="Phone" text="(509) 741-7428" />
                </li>
            </ul>
            <ul className='logos'>
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
    )
}

export default ContactInformation;