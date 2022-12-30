import React from 'react'
import './Contact.css';
import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qgzp0ie', 'template_9fq64f2', form.current, 'd7sBonK0ktOThGU7w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Let's start with Home Page</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>Wafabenmiloud@gmail.com</h5>
              <a href="mailto:wafabenmiloud@gmail.com">Send a message</a>
            </article>
            <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Wafa ben miloud</h5>
              <a href="https://m.me/Wafouta.wafouta3" target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+216 52 095 367</h5>
              <a href="https://api.whatsapp.com/send?phone=21652095367&text=Let's%20Talk%20!" target='_blank'>Send a message</a>
            </article>
          </div>
          <form onSubmit={sendEmail} ref={form}>
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='example@gmail.com' required />
            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btnn'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact