import React from 'react';
import './Portfolio.css';
import COT from '../../assets/cot.png'
import BrainGym from '../../assets/brainGym.png'
import Go from '../../assets/gov.png'

const data = [
  {
    id:1,
    image:COT,
    title:'Circus Of Things',
    code:'https://github.com/wafabenmiloud/cot',
    demo:'https://cot.vercel.app/'
  },
  {
    id:2,
    image:BrainGym,
    title:'Brain Gym',
    code:'https://github.com/wafabenmiloud/BrainGym',
    demo:'https://braingym-2ebbf.web.app/'
  },
  {
    id:3,
    image:Go,
    title:'Govact',
    code:'https://github.com/wafabenmiloud/Govact',
    demo:'https://govact.vercel.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Potfolio</h2>
      <div className='container portfolio__container'>
        
       {
        data.map(({id,image,title,code,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={code} className='btn' target='_blank'>Code Source</a>
            <a href={demo} className='btn' target='_blank'>Live Demo</a>
            </div>
          </article>
          );
        })
       }
       

      </div>

    </section>
  )
}

export default Portfolio