import React from 'react';

import emailjs from '@emailjs/browser'
const ContactMe = () => {
    const sendemail=(e)=>{
        e.preventDefault()

emailjs.sendForm('service_myf2xxo','template_0fhr9da',e.target, 'kqRThIw4HtfRdqaHc')
    }
    return (
        <div className='mx-10'>
                   <div className="App">
      <h1 className="page__title text-7xl text-black mt-[200px]">Contact Us</h1>
      <form className="contact__form">
        <label htmlFor="emailFrom">Email:</label>
        <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com"/>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" className="message__box"></textarea>
        <button variant="contained"  className="submit__btn" style={{marginTop: "5px"}}>
        Send
      </button>
      </form>
    </div>

        </div>
    );
};

export default ContactMe;