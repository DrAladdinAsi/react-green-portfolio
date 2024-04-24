import React from 'react'
import './product.css'
import ProjectPhoto from '../../img/screenShotProject.png'


function Product() {
  return (
    <div className='product'>
      <div className="product_navbar">
        <div className="product_circle"></div>
        <div className="product_circle"></div>
        <div className="product_circle"></div>
      </div>

      <a href="\" target='_blank' rel="noreferrer">
        <img src={ProjectPhoto} alt="an image about project I have did it"  className='product_image'/>
      </a>
    </div>
  )
}

export default Product