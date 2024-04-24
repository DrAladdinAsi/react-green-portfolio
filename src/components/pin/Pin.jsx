import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './pin.scss'

function Pin({item}) {
    const position = [item.latitude,item.longitude]
  return (
    <Marker position={position} >
   
    </Marker>
  )
}

export default Pin