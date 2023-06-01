/**
 * ContactItem.js
 * 
 * Description: ContactItem containing logo, contact parameters and information.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import React from 'react';
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactItem = ({ logo, title, text }) => {
  return (
    <div className='contact-item'>
      <div className='title-section'>
        <FontAwesomeIcon className="logo" icon={logo} />
        {title}
      </div>
      <div className='text-section'>
        {text}
      </div>
    </div>
  )
}

export default ContactItem;
