import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

export const Interativemap = ({ markers, setMarkers, initialPosition }) => {
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    const newMarker = {
      id: new Date().getTime(), // Generate a unique ID for the marker
      lat,
      lng,
    };
    setMarkers([...markers, newMarker]);
  };
  return (
    <div className="map-container">
      {/* Your map component */}
      <Map
        center={initialPosition}
        zoom={13}
        style={{ height: "400px" }}
        onClick={handleMapClick}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Render all the markers */}
        {markers.map((marker) => (
          <Marker key={marker.id} position={[marker.lat, marker.lng]}>
            <Popup>
              Latitude: {marker.lat.toFixed(4)}, Longitude:{" "}
              {marker.lng.toFixed(4)}
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
};
