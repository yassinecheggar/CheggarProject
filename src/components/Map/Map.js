import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


import Myicon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Icon } from 'leaflet';




function Map() {
    return (
        <MapContainer center={[33.987325986895534, -6.841156741180882]} zoom={14} scrollWheelZoom={false}  style={{ height: '400px',
          width: '100%',
          padding:'20px',
          marginBottom:'50px'}} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker  position={[33.99379664759887, -6.847481091643666]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    )
}

export default Map

