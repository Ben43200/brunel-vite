import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const OpenMapComponent = () => {
  const position = [44.72473366745566, 5.032174801844155]; // Position par défaut, vous pouvez la changer

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
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
  );
}

export default OpenMapComponent;

