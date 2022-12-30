import React from 'react';
import './Header.css';
import CV from '../../assets/CV_eng.pdf'
import ME from '../../assets/mee.jpg'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Wafa BEN MILOUD</h1>
        <h5 className='text-light'>Fullstack Developer</h5> 
        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn'>How Can I Help ? </a>
        </div>
        <div className='me'>
          <img src={ME} alt="me" style={{borderRadius: '5rem 5rem 0 0'}} />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <div className='header__socials'>
          <a href="https://www.linkedin.com/in/wafa-ben-miloud-382126181/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/wafabenmiloud" target="_blank"><BsGithub/></a>
        </div>

      </div>
    </header>
  )
}

export default Header