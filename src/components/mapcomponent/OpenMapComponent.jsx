import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';

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
  const position = [44.72473366745566, 5.032174801844155]; // Position par défaut, vous pouvez la changer
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <div>
      <input 
        type="checkbox" 
        checked={isInteractive} 
        onChange={() => setIsInteractive(!isInteractive)} 
      />
      <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <SetInteraction isInteractive={isInteractive} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Un popup exemple.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default OpenMapComponent;