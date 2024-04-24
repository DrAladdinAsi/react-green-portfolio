import React, { useContext } from 'react'
import "./about.css"
import Photographer from '../../img/girlWithcamera.jpg'
import Award from '../../img/award.png'
import { ThemeContext } from '../../Context'

function About() {
  const theme = useContext(ThemeContext);
  let dark_mode = theme.state.dark_mode;

  return (
    <div className="about">
       <div className="about_left">
        <div className="about_photographer_background"></div>
        <img src={Photographer} alt="an Image of a photographer" className='about_image_photographer' />
       </div>
       <div className="about_right">
        <h1 className="about_right_title" style={{
          color: dark_mode ? 'white': 'rgb(83, 83, 83)',
        }}>About Me</h1>
        <p className="subTitle">It is a long established fact that the reader will be distracted by the readable content.</p>
        <p className="about_right_parghraph" style={{
          color: dark_mode ? 'white': 'rgb(68, 68, 68)',
        }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid sit commodi adipisci 
          labore totam repellendus a perspiciatis possimus neque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, magnam Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quae.</p>
        <div className="about_right_text">
          <img src={Award} alt="an Image for award price" className='about_image_right_award'/>
          
          <div className="about_right_text_inside">
          <span className='about_right_title_for_text' style={{
          color: dark_mode ? 'white': 'rgb(32, 32, 32)',
        }}>
          International Desgin Award 2021s</span>
          <p className="about_right_text_pargraph_image" style={{
          color: dark_mode ? 'white': 'rgb(68, 68, 68)',
        }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fuga repellat reprehenderit iusto sit vitae lore
          </p>
          </div>

        </div>
       </div>
    </div>
  )
}

export default About