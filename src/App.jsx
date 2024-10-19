import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet's CSS is included

function App() {
  const position = [15.4225, 73.9826];

  return (
    <>
      <MapContainer 
        center={position} 
        zoom={18} 
        scrollWheelZoom={false} 
        className='mapContainer'  // Corrected style syntax
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
