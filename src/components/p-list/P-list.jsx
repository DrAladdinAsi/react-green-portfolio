import React, { useContext } from 'react'
import './p-list.css'
import Product from '../product/Product'
import { ThemeContext } from '../../Context'

function Plist() {
  const theme = useContext(ThemeContext);
  let dark_mode = theme.state.dark_mode;

  return (
    <div className='p-list'>
        <h1 className="p-list_title">Create and Inspire by Lama</h1>
        <p className="p-list_pargraph" style={{color: dark_mode ? 'white':'rgb(68, 68, 68)',}}>Assi portfolio is the best portfolio in the world it will
        guarnted the dreamed job to you .I am sure you will be happy with it.</p>

        <div className="p-list_list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default Plist