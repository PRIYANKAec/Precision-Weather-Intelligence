"use client";

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { useGlobalContext } from "@/app/context/globalContext";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

const FlyToActiveCity = ({ activeCityCords }) => {
  const map = useMapEvents({
    load: () => console.log('Map loaded')
  });

  useEffect(() => {
    if (activeCityCords) {
      const zoomLev = 13;
      const flyToOptions = {
        duration: 1.5,
      };

      map.flyTo(
        [activeCityCords.lat, activeCityCords.lon],
        zoomLev,
        flyToOptions
      );
    }
  }, [activeCityCords, map]);

  return null;
};

const Mapbox = () => {
  const { forecast } = useGlobalContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const activeCityCords = forecast?.coord;

  if (!forecast || !forecast.coord || !activeCityCords) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="flex-1 basis-[50%] border rounded-lg">
      {isClient && (
        <MapContainer
          center={[activeCityCords.lat, activeCityCords.lon]}
          zoom={13}
          scrollWheelZoom={false}
          className="rounded-lg m-4"
          style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <FlyToActiveCity activeCityCords={activeCityCords} />
        </MapContainer>
      )}
    </div>
  );
};

export default Mapbox;