import React from "react";
import "./Portfolio.css";
import COT from "../../assets/cot.png";
import BrainGym from "../../assets/brainGym.png";
import Go from "../../assets/gov.png";
import BLOG from "../../assets/blogapp.mp4";
import MedApp from "../../assets/medapp.mp4";
import quiz from "../../assets/quiz.png";

const data = [
  {
    id: 1,
    image: quiz,
    video: false,
    title: "MERN Stack QUIZ",
    code: "https://github.com/wafabenmiloud/quiz",
    demo: "https://quiz-three-ruby.vercel.app",
    skills: ['HTML', 'CSS', 'React JS', 'Node JS', 'MongoDB'],
  },
  {
    id: 2,
    image: BrainGym,
    title: "Brain Gym",
    code: "https://github.com/wafabenmiloud/brainGym",
    demo: "https://brain-gym.vercel.app/",
    skills: ['HTML', 'CSS', 'React JS'],
    video: false,
  },
  {
    id: 3,
    image: Go,
    title: "Govact",
    code: "https://github.com/wafabenmiloud/Govact",
    demo: "https://govact.vercel.app/",
    skills: ['HTML', 'CSS', 'React JS', 'Node JS', 'MongoDB'],
    video: false,
  },
  {
    id: 4,
    image: BLOG,
    video: true,
    title: "Blog",
    code: "https://github.com/wafabenmiloud/blogApp",
    demo: "https://main--strong-centaur-4d916e.netlify.app",
    skills: ['HTML', 'CSS', 'React JS', 'Node JS', 'MongoDB'],
  },
  {
    id: 5,
    image: MedApp,
    video: true,
    title: "Book your appointment.",
    code: "https://github.com/wafabenmiloud/medapp",
    demo: "",
    skills: ['Flutter', 'Node JS', 'MongoDB'],
  },
  {
    id: 6,
    image: COT,
    title: "Circus Of Things",
    code: "https://github.com/wafabenmiloud/cot",
    demo: "https://cot.vercel.app/",
    skills: ['HTML', 'CSS'],
    video: false,
  },
 
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="portfolio__container">
        {data.map(({ id, image, title, code, demo, skills, video }) => {
          return (
            <div key={id} className="card">
              <div className="img">
                {!video ? (
                  <img src={image} />
                ) : (
                  <video controls>
                    <source src={image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
                  <div className="title__content">
                  <h3>{title}</h3>
                    <hr className="divider"/>
                  </div>
                  <div>
                    <ul className="tags">
                        {skills.map((skill,index)=>{
                          return <li className="tag" key={index}>{skill}</li>
                        })}
                    </ul>
                  </div>


           
                <ul className="content">
                  <a href={code} className="btn" target="_blank">
                    Code Source
                  </a>
                  <a href={demo} className="btn" target="_blank">
                    Live Demo
                  </a>
                </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
