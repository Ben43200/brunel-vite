import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './MapContainer.module.scss';
// import markerIcon from 'images/marker.png'; // Remplacez par le chemin d'accès à votre image

// const markerIcon = "images/marker.png";

const markerIcon = new URL('../../utils/marker2.png', import.meta.url).href; // Remplacez par le chemin d'accès à votre image
const customMarker = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 40),
});

const SetInteraction = ({ isInteractive }) => {
  const map = useMap();

  useEffect(() => {
    if (isInteractive) {
      map.dragging.enable();
      map.touchZoom.enable();
      map.doubleClickZoom.enable();
      map.scrollWheelZoom.enable();
    } else {
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
    }
    map.invalidateSize(); // Force la carte à vérifier la taille de son conteneur et à se recentrer
  }, [isInteractive, map]);

  return null;
}

const OpenMapComponent = () => {
  const position = [44.724729856051376, 5.032518124596882]; // Position par défaut, vous pouvez la changer
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <div>
      <input 
        type="checkbox" 
        checked={isInteractive} 
        onChange={() => setIsInteractive(!isInteractive)} 
      />
<div className={styles['map-container-parent']}>
<MapContainer className={styles['map-container']} center={position} zoom={13}>
      {/* <MapContainer className='map-container' center={position} zoom={13} > */}

        <SetInteraction isInteractive={isInteractive} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customMarker}>
          <Popup>
            Un popup exemple.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    </div>
  );
}

export default OpenMapComponent;