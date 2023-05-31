import React from 'react'
import "./index.scss";
import emailjs from "@emailjs/browser"
import { useRef } from 'react';

const ContactForm = () => {
    const form = useRef();
    const emailForm = (e) => {
        console.log("submit clicked");
        e.preventDefault();
        emailjs.sendForm('service_qxqeu18', 'template_92etw9j', form.current, 'YLW3S_1QtgxX0QNZg')
            .then((result) => {
                alert("Email sent :)");
                window.location.reload(false);
            }, (error) => {
                alert("Error sending email, please try again :(");
                console.log(error.text);
            });
    }
    return (
        <div className="contact-form">
            <form ref={form} onSubmit={emailForm}>
                <ul>
                    <div className='single-line'>
                        <li>
                            <input type='text' name='name' placeholder='Name' required/>
                        </li>
                        <li className="right" >
                            <input type='email' name='email' placeholder='Email' required/>
                        </li>
                    </div>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required/>
                    </li>
                    <li>
                        <textarea classNamename='message' placeholder='Message' required/>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="Send email" />
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default ContactForm