import React, { useState } from 'react';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { MapContainer as Map, TileLayer, Marker, Popup } from "react-leaflet";

const LocationInput = () => {
  const [position, setPosition] = useState(null);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        console.log(error.message);
      }
    );
  };

  return (
    <div>
      <button onClick={handleLocation}>Get location</button>
      {position && (
        <Map style={{height:'50vh'}} center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>
              Your location: <pre>{JSON.stringify(position, null, 2)}</pre>
            </Popup>
          </Marker>
        </Map>
      )}
    </div>
  );
};

export default LocationInput;