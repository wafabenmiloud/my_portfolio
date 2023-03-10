import React from "react";
import "./About.css";
import ME from "../../assets/codeee.jpg";
import { FaAward, FaUsers, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article> */}
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Hello! My name is Wafa BEN MILOUD, and I am a full-stack developer
            who is passionate about creating innovative digital solutions and I
            am excited to start my career in this field. I have experience with
            HTML, CSS, JavaScript, and I am familiar with front-end frameworks
            such as React and Vue.js. On the back-end, I have worked with
            Node.js, MongoDB and MySQL. <br/><br/>I am always eager to learn new
            technologies and expand my skills. My goal is to build user-friendly
            and responsive websites and applications that provide an excellent
            user experience. I am a dedicated problem-solver who is committed to
            delivering high-quality work that meets my clients' needs. <br/><br/>Thank you
            for taking the time to read my bio, and please feel free to check
            out my portfolio to see some of the projects I have worked on. I am
            open to any feedback or suggestions to help me improve my skills and
            knowledge in the field.
          </p>
          <a href="#contact" className="btn">
            {" "}
            Let's Talk !
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
