import React from "react";

import { FiClock } from "react-icons/fi";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import mapIcon from "../utils/mapIcon";

import '../styles/pages/orphanage.css';
import Sidebar from "../components/Sidebar";


export default function Orphanage() {
  return (

    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das crianças" />

          <div className="images">

            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das crianças"/>
            </button>

            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das crianças"/>
            </button>
           
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das crianças"/>
            </button>

            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das crianças"/>
            </button>
            
          </div>

          <div className="orphanage-details-content">
            <h1>Lar das Crianças</h1>
            <p>Prestar assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade</p>

            <div className="map-container">
              <MapContainer
                center={[-5.5132955,-47.4645257]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[-5.5132955,-47.4645257]} />
              </MapContainer>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>Instrucoes</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                Aberto
              </div>  

            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          
        </div>
        </div>
      </main>
    </div>
  );
}