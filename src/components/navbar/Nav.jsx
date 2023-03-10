import React, { useState } from 'react'
import './Nav.css';
import {AiFillHome, AiFillMessage} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {GiBookshelf} from 'react-icons/gi'
import {FaAward} from 'react-icons/fa'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={activeNav==='#' ? 'active' : ''} onClick={()=>{setActiveNav('#')}}><AiFillHome/></a>
      <a href="#portfolio" className={activeNav==='#portfolio' ? 'active' : ''} onClick={()=>{setActiveNav('#portfolio')}}><GiBookshelf/></a>
      <a href="#experience" className={activeNav==='#experience' ? 'active' : ''} onClick={()=>{setActiveNav('#experience')}}><FaAward/></a>
      <a href="#about" className={activeNav==='#about' ? 'active' : ''} onClick={()=>{setActiveNav('#about')}}><BiUserPin/></a>
      {/* <a href="#services" className={activeNav==='#services' ? 'active' : ''} onClick={()=>{setActiveNav('#services')}}><RiServiceLine/></a> */}
      <a href="#contact" className={activeNav==='#contact' ? 'active' : ''} onClick={()=>{setActiveNav('#contact')}}><AiFillMessage/></a>

    </nav>
  )
}

export default Nav