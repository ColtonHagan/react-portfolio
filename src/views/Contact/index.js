/**
 * Contact.js
 * 
 * Description: This file contains the Contact page, with contact form and contact information.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import React from 'react';
import "./index.scss";
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';
import ContactForm from './components/ContactForm';
import ContactInformation from './components/ContactInformation';

const Contact = () => {
    return (
        <>
            <div className="container contact-page">
                <h1>
                    <AnimatedLetters
                        letterClass={'letter-animate'}
                        strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
                        idx={20}
                    />
                </h1>
                <div id='contact-wrapper'>
                    <div id='form-wrapper'>
                        <h2>Message Me</h2>
                        <ContactForm className="form" />
                    </div>
                    <div id='contact-information'>
                        <ContactInformation />
                    </div>
                </div>
            </div>
            <Loader type="triangle-skew-spin" />
        </>
    );
}

export default Contact;
