import React from "react";
import "./Portfolio.css";
import COT from "../../assets/cot.png";
import BrainGym from "../../assets/brainGym.png";
import Go from "../../assets/gov.png";

const data = [
  {
    id: 1,
    image: COT,
    title: "Circus Of Things",
    code: "https://github.com/wafabenmiloud/cot",
    demo: "https://cot.vercel.app/",
  },
  {
    id: 2,
    image: BrainGym,
    title: "Brain Gym",
    code: "https://github.com/wafabenmiloud/brainGym",
    demo: "https://brain-gym.vercel.app/",
  },
  {
    id: 3,
    image: Go,
    title: "Govact",
    code: "https://github.com/wafabenmiloud/Govact",
    demo: "https://govact.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Potfolio</h2>
      <div className="portfolio__container">
        {data.map(({ id, image, title, code, demo }) => {
          return (
            <div key={id} className="card">
              <div className="face face1">
                <div className="content">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                <a href={code} className='btn' target="_blank">Code Source</a>
                 <a href={demo} className='btn' target="_blank">Live Demo</a>
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
