import React from 'react';
import './Footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
     
      <div className='footer__socials'>
          <a href="https://www.linkedin.com/in/wafa-ben-miloud-382126181/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/wafabenmiloud" target="_blank"><BsGithub/></a>
        </div>
        <div className="footer__copyright">
          <small> &copy; wafabenmiloud, All rights reserved. </small>
        </div>
    </footer>
  )
}

export default Footer