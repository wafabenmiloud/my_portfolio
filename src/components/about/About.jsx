import React from 'react';
import './About.css';
import ME from '../../assets/meee.jpg'
import {FaAward, FaUsers, FaFolder} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="ME" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+</small>
            </article>
            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
          I'm a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python.
          Are you looking for a web developer to design and develop your website? If your answer is yes, then I welcome you and you are at the right place.

          </p>
          <a href="#contact" className='btn'> Let's Talk !</a>
        </div>
      </div>
    </section>
  )
}

export default About