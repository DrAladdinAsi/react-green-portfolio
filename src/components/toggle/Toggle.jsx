import React, { useContext } from 'react'
import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { ThemeContext } from '../../Context'

function Toggle() {
  const theme = useContext(ThemeContext);
  let dark_mode = theme.state.dark_mode;


  let handelClick = ()=>{
    console.log('the toggle clicked')
    theme.dispatch({type:'TOGGLE'});
  }

  return (
    <div className='toggle'>
      <img src={Sun} alt="the image of sun for the toggle" className='t-image' />
      <img src={Moon} alt="the image of Moon for the toggle" className='t-image' />
      <div className="t-button" onClick={handelClick} style={{left: dark_mode ? '0' : '1.7rem',}}></div>
    </div>
  )
}

export default Toggle