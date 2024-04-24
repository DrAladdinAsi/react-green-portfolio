import React, { useRef } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import Map  from '../map/Map'


function Contact() {
  let forRef = useRef();

  let handleSubmit = (e)=>{
   e.preventDefault();
   console.log("You have clicked the submit button")
  }

  return (
    <div className='contact' >
      <div className="contact_sideColumn"></div>

      <div className="contact_list">
        <div className="contact_leftSide">
          <span className='contact_leftSide_bg_title'>Let's discuss your project</span>
          <div className="contact_infos">
            
          <div className="info_item">
            <img src={Phone} alt="info item image" className='info_item_image' />
            <span>011 2176485</span>
          </div>

          <div className="info_item">
            <img src={Email} alt="info item image" className='info_item_image' />
            <span>alaa_aldeen@gmail.com</span>
          </div>

          <div className="info_item">
            <img src={Address} alt="info item image" className='info_item_image' />
            <span>Los Angles , USA</span>
          </div>

          </div>

          <div className="map_contact">
            <Map items={[{latitude:34.05,longitude:-118.24}]}/>
          </div>
        
        </div>
        <div className="contact_rightSide">
          <form ref={forRef} onSubmit={handleSubmit}>
            <input type="text" placeholder='Your name'  className='user_name' name='user_name' />
            <input type="text" placeholder='Subject'  className='user_subject' name='user_subject' />
            <input type="text" placeholder='Your email'  className='user_email' name='user_email' />
            <textarea name="user_text" rows="5"></textarea>
            <button className='contact_btn'>submit</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact