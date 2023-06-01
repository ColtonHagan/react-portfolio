/**
 * ContactForm.js
 * 
 * Description: ContactForm that sends email to me when information is entered.
 * Author: Colton Hagan
 * Created: 5/31/2023
 */
import React from 'react'
import "./index.scss";
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const form = useRef();
    const emailForm = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qxqeu18', 'template_92etw9j', form.current, 'YLW3S_1QtgxX0QNZg')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Email sent.',
                    showConfirmButton: false,
                    customClass: {
                        popup: 'alert-popup',
                        icon: 'alert-icon'
                    },
                    timer: 1500
                })
                form.current.reset();
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error, please try again.',
                    showConfirmButton: false,
                    customClass: {
                        popup: 'alert-popup'
                    },
                    timer: 3000
                })
                console.log(error.text);
            });
    }
    return (
        <div className="contact-form">
            <form ref={form} onSubmit={emailForm}>
                <ul>
                    <div id='single-line'>
                        <li>
                            <input type='text' name='name' placeholder='Name' required />
                        </li>
                        <li className="right" >
                            <input type='email' name='email' placeholder='Email' required />
                        </li>
                    </div>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required />
                    </li>
                    <li>
                        <textarea name='message' placeholder='Message' required />
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="Send email" />
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default ContactForm;