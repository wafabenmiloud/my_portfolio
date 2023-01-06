import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>
        Let’s get you the info you’re looking for. Which of these options sounds
        most like you?
      </h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* <article className="service">
          <div className="service__head">
            <h3>Web Designer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I create websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I create websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I create websites</p>
            </li>
          </ul> 
          <h6 className="service__list">hhhhhhhhhhhhhhhhhhhhhh</h6>
        </article> */}
        <article className="service">
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I create inclusive websites that allow your superpowers to shine.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Here are some skills which I use to develop and design a
            professional and responsive website: ReactJS, CSS3,
            JavaScript, HTML5, Python. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My Offers: Unlimited Revisions, Fast Delivery, Responsive Design, Custom Code. Satisfaction is guaranteed.</p>
            </li>
          </ul> 
          
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Mobile Applications Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designed, developed, tested and deployed mobile applications using Kony APIs, Java, HTML, CSS, Javascript, Eclipse, Apache Tomcat Server, and Websphere.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed HTML5 mobile application with HTML5, javascript, jQuery, JSON and Restful Web Service.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>I create websites</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
