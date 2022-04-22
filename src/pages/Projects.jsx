import { Container } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import { HeaderHeight } from '../variables/vairables';

mapboxgl.accessToken =
  'pk.eyJ1Ijoib3NrYXItYWdhIiwiYSI6ImNsMmF2aDlkdDA3NzIza25yZTB6cGlsY3gifQ.Ma1eN-_aYN5AHkewOnTR5A';
const Projects = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(66.9237);
  const [lat, setLat] = useState(48.0196);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [lng, lat],
      zoom: zoom,
    });
    const test = 'hellllo from test';
    new mapboxgl.Marker()
      .setLngLat([71.44598, 51.1801])
      .setPopup(
        new mapboxgl.Popup({ className: 'test' }).setHTML(
          `
            <h1>Hello World!</h1>
            <h2 className="text-red-500 test">${test}</h2>
          `,
        ),
      )
      .addTo(map.current);
  }, []);

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      Projects
      <Container sx={{ position: 'relative' }}>
        <div style={{ height: '520px', width: '100%' }} className="py-8">
          <div ref={mapContainer} className="map-container" style={{ height: '100%' }} />
        </div>
      </Container>
    </div>
  );
};

export default Projects;
