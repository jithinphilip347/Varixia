import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/css/MapEmbed.css";

// Optional: Custom marker icon (transparent, since we're using ripple div on top)
const customIcon = new L.DivIcon({
  className: "custom-leaflet-icon",
  iconSize: [0, 0],
});

const MapEmbed = () => {
  // Set your location here
  const location = [24.4769439, 54.3791296];

  return (
    <div className="map-container">
      <MapContainer
        center={location}
        zoom={16}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location} icon={customIcon} />
      </MapContainer>

      {/* Ripple animation */}
      <div className="custom-marker">
        <div className="dot"></div>
        <div className="ripple"></div>
        <div className="ripple delay"></div>
      </div>
    </div>
  );
};

export default MapEmbed;
