import React from 'react';
import './Header.css';
import CV from '../../assets/CV_eng.pdf'
import ME from '../../assets/mee.jpg'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi! It's</h5>
        <h1>Wafa</h1>
        <h5 className='text-light'>I'm a Fullstack Developer</h5> 
        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn'>How Can I Help ? </a>
        </div>
       <div className='row'>
            
              
              <div className='header__socials'>
                <a href="https://www.linkedin.com/in/wafa-ben-miloud-382126181/" target="_blank"><BsLinkedin/></a>
                <a href="https://github.com/wafabenmiloud" target="_blank"><BsGithub/></a>
              </div>
              <div className="block">
              <div className='me'>
                <img src={ME} alt="me" className='me__img'/>
              </div>
              <p>Welcome to my little slice of the internet, I hope you find something useful here.<br/>
              I design<span> interfaces</span>, build <span>websites</span> and <span>mobile apps</span>.<br/><br/>
              Read more <span>about me</span> or ask me anything.<br/>
              Thanks for dropping by,<br/><br/><span>Wafa</span>.
              </p>
              </div>
              <a href="#contact" className='scroll__down'>Scroll</a>

       </div>

      </div>
    </header>
  )
}

export default Header