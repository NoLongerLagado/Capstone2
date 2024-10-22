import React from 'react';
import { MapContainer, GeoJSON, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import lagunaData from './philippines-json-maps/2023/geojson/provdists/hires/municities-provdist-403400000.0.1.json'; 

const PhilippinesMap = () => {
  
  const onEachFeature = (feature, layer) => {
    const cityName = feature.properties.adm3_en || 'Unknown Area';

   
    layer.bindPopup(`<strong>${cityName}</strong>`);

   
    console.log('Feature Geometry Type:', feature.geometry.type);

   
    layer.on({
      click: (e) => {
        layer.openPopup(e.latlng); 
      }
    });
  };

 
  const createEmojiIcon = (emoji) => {
    return L.divIcon({
      className: 'emoji-icon',
      html: `<div style="font-size: 24px;">${emoji}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30], 
    });
  };

 
  const markers = [
    { position: [14.260279775981006, 121.08052145395523], emoji: '😊', cityName: 'Santa Rosa' }, 
    { position: [14.3036, 121.0781], emoji: '😡', cityName: 'Biñan' },      
    { position: [14.2471, 121.1367], emoji: '😐', cityName: 'Cabuyao' },
    { position: [14.3562, 121.0553], emoji: '😐', cityName: 'San Pedro' },   
    { position: [14.2127, 121.1639], emoji: '😐', cityName: 'Calamba' }, 
  ];

  return (
    <MapContainer style={{ height: '500px', width: '100%' }} center={[14.1721, 121.3255]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

     
      <GeoJSON data={lagunaData} onEachFeature={onEachFeature} />

     
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={createEmojiIcon(marker.emoji)}
        >
          <Popup>{marker.cityName}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PhilippinesMap;
