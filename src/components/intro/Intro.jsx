import React from 'react'
import './intro.css'
import Me from '../../img/me.png'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'

function Intro() {

  const theme = useContext(ThemeContext);
  let dark_mode = theme.state.dark_mode;

  return (
    <div className='intro'>
     
     <div className="left_intro">
      <div className="left_intro_wrapper">
         <h2 className='left_intro_title'>Hello My name is</h2>
         <h1 className='left_intro_name'>John Hassan</h1>
          
          <div className="my_jobs">
             <div className="jobs_wrapper">
              <div className="job_item">Web Developer</div>
              <div className="job_item">Photographer</div>
              <div className="job_item">Graphic Desiner</div>
              <div className="job_item">Web Developer</div>
             </div>
          </div>

          <p className="intro_desc" style={{
            color: dark_mode ? 'white' : 'rgb(53, 53, 53)',
          }} >
            I have a great expenience building websites for users from all around the world ,
            using different tecnologies to develop and maintain the websites begining from React
            to angular and more.
          </p>
      </div>

      <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>

     </div>

     <div className="right_intro">
      <div className="right_intro_background"></div>
       <img src={Me} alt="the image of me"  className='right_intro_image' />
       
     </div>

    </div>
  )
}

export default Intro