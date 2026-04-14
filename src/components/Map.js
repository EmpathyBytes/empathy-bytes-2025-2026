import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with React
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// for click events
const ClickHandler = ({setMarkers}) => {
    useMapEvents({
        click(e) {
            const {lat, lng } = e.latlng
            setMarkers((prev) => [...prev, {lat, lng}])
        },
    })
    return null
}

const Map = () => {
    const [markers, setMarkers] = useState([])
    const center = [33.7756, -84.3963]
    return (
        <MapContainer
            center={center}
            zoom={15}
            style={{height: '500px', width: '100%'}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {/* all markers placed by users */}
            {markers.map((position, idx) => (
                <Marker key={`marker-${idx}`} position={[position.lat, position.lng]}>
                    <Popup>
                        Marker at {position.lat.toFixed(4)}, {position.lng.toFixed(4)}
                    </Popup>
                </Marker>
            ))}
            <ClickHandler setMarkers={setMarkers} />
        </MapContainer>
    )
}
export default Map