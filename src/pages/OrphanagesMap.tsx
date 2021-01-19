import React, {useEffect, useState} from 'react';

import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { MapContainer,TileLayer, Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';
import markerMapImg from '../images/map-marker.svg';
import api from '../services/api';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}


const OrphanagesMap = ()=>{
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(()=>{
    api.get('orphanages')
      .then(res => {
        setOrphanages(res.data);
      });

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

        <Link to="/orphanages/create" className="create-orphanage"> 
        <FiPlus size={32} color="#fff"/>
      </Link>
        
      </aside>

      <MapContainer 
        center={[-5.5132955,-47.4645257]}
        zoom={15}
        maxZoom={18}
        style={ {width: '100%', height: '100%'} }
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
        {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />*/}      
        
      {orphanages.map(orphanage =>{
        return (
          <Marker
          icon= {mapIcon}
          position={[orphanage.latitude, orphanage.longitude]}
          key={orphanage.id}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            {orphanage.name}
            <Link to={`/orphanages/${orphanage.id}`}>
              <FiArrowRight size={20} color="#000"/>
            </Link>
          </Popup>   
        </Marker>  
        )
      })}

      </MapContainer>


    </div>
  );
}

export default OrphanagesMap;