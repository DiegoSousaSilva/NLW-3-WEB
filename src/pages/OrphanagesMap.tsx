import React, {useEffect} from 'react';

import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { MapContainer,TileLayer, Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';
import markerMapImg from '../images/map-marker.svg';
import api from '../services/api';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';



const OrphanagesMap = ()=>{

  useEffect(()=>{
    api.get('orphanages')
      .then(response => {console.log(response)});

  }, []);

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
        center={[-5.5132955,-47.4645257]}
        zoom={15}
        maxZoom={18}
        style={ {width: '100%', height: '100%'} }
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
        {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />*/}      
        
        <Marker
          icon= {mapIcon}
          position={[-5.5132955,-47.4645257]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das crianças peculiares
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#000"/>
            </Link>
          </Popup>   
        </Marker>  

      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage"> 
        <FiPlus size={32} color="#fff"/>
      </Link>

    </div>
  );
}

export default OrphanagesMap;