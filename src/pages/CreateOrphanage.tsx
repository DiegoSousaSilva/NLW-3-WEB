import React from "react";
import { useHistory } from "react-router-dom";
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from "react-icons/fi";
import L from 'leaflet';
/* import { LeafletMouseEvent } from 'leaflet'; */

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/create-orphanage.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor: [0, -60]
})

export default function CreateOrphanage() {
  const {goBack} = useHistory();

  return (
    <div id="page-create-orphanage">
      <Sidebar/>

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <MapContainer 
              center={[-5.5132955,-47.4645257]}
              zoom={15}
              maxZoom={18}
              style={ {width: '100%', height: 200} }
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
              {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />*/}      
              
              <Marker
                interactive={false}
                icon= {mapIcon}
                position={[-5.5132955,-47.4645257]}
              />

            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
    /*             value={name}
                onChange={event => setName(event.target.value)} */
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="name"
                maxLength={300}
/*                 value={about}
                onChange={event => setAbout(event.target.value)} */
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                type="file"
                multiple
                accept=".png, .jpg, .jpeg"
/*                 onChange={handleSelectImages} */
                id="image[]"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
        /*         value={instructions}
                onChange={event => setInstructions(event.target.value)} */
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input
                id="opening_hours"
 /*                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)} */
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
/*                   className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)} */
                >
                  Sim
                </button>
                <button
                  type="button"
/*                   className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)} */
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}
