import Leaflet from 'leaflet';

import mapIconImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapIconImg,

  iconSize: [38, 48],
  iconAnchor: [19, 48],
  popupAnchor: [170, 2],
})

export default mapIcon;