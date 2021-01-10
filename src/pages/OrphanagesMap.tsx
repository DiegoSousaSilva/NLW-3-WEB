import React from 'react';

import {FiPlus} from 'react-icons/fi';
import { MapContainer,TileLayer} from 'react-leaflet';
import { Link } from 'react-router-dom';
import markerMapImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap = ()=>{
  return(
    <div id="page-map"> 
      <aside>
        <header>
          <img src={markerMapImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Imperatriz</strong>
          <span>Maranhão</span>
        </footer>
        
      </aside>

      <MapContainer 
        center={[-5.5192797,-47.5479664]}
        zoom={15}
        maxZoom={18}
        style={ {width: '100%', height: '100%'} }
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </MapContainer>

      <Link to="/app" className="create-orphanage"> 
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;