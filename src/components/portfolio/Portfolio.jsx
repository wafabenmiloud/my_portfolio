import React from "react";
import "./Portfolio.css";
import COT from "../../assets/cot.png";
import BrainGym from "../../assets/brainGym.png";
import Go from "../../assets/gov.png";
import BLOG from "../../assets/blog.png";
import MedApp from "../../assets/medapp.mp4";

const data = [
  {
    id: 1,
    image: COT,
    title: "Circus Of Things",
    code: "https://github.com/wafabenmiloud/cot",
    demo: "https://cot.vercel.app/",
    skills: "HTML, CSS",
    video: false,
  },
  {
    id: 2,
    image: BrainGym,
    title: "Brain Gym",
    code: "https://github.com/wafabenmiloud/brainGym",
    demo: "https://brain-gym.vercel.app/",
    skills: "HTML, CSS, React JS",
    video: false,
  },
  {
    id: 3,
    image: Go,
    title: "Govact",
    code: "https://github.com/wafabenmiloud/Govact",
    demo: "https://govact.vercel.app/",
    skills: "HTML, CSS, React JS",
    video: false,
  },
  {
    id: 4,
    image: BLOG,
    video: false,
    title: "Blog",
    code: "https://github.com/wafabenmiloud/blogApp",
    demo: "https://blog-app-tawny-ten.vercel.app",
    skills: "HTML, CSS, React JS, Node JS, MongoDB",
  },
  {
    id: 5,
    image: MedApp,
    video: true,
    title: "Book your appointment now",
    code: "https://github.com/wafabenmiloud/",
    demo: "",
    skills: "Flutter, Node JS, MongoDB",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Potfolio</h2>
      <div className="portfolio__container">
        {data.map(({ id, image, title, code, demo, skills, video }) => {
          return (
            <div key={id} className="card">
              <div className="face face1">
                <div className="content">
                  {!video ? (
                    <img src={image} />
                  ) : (
                    <video width="380" height="180" controls>
                      <source src={image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className="span">                  <h4>{skills}</h4>
</div>
                  <h3>{title}</h3>

                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <a href={code} className="btn" target="_blank">
                    Code Source
                  </a>
                  <a href={demo} className="btn" target="_blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
