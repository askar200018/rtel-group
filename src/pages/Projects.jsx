import { Box, Container, Divider, Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from '!mapbox-gl';
import { HeaderHeight } from '../variables/vairables';
import { MARKERS } from '../mock/markers';
import Popup from '../components/Popup';
import { HashRouter } from 'react-router-dom';

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

    map.current.addControl(new mapboxgl.NavigationControl());
    MARKERS.forEach((marker) => {
      const popupNode = document.createElement('div');
      ReactDOM.render(
        <HashRouter>
          <Popup marker={marker} />
        </HashRouter>,
        popupNode,
      );

      new mapboxgl.Marker()
        .setLngLat(marker.coordinates)
        .setPopup(
          new mapboxgl.Popup({ className: 'custom-popup', maxWidth: '300px' }).setDOMContent(
            popupNode,
          ),
        )
        .addTo(map.current);
    });
  }, []);

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <Box
        sx={{
          paddingY: '32px',
        }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          Проекты
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <Container sx={{ position: 'relative' }}>
        <div style={{ height: '520px', width: '100%' }} className="pb-8">
          <div ref={mapContainer} className="map-container" style={{ height: '100%' }} />
        </div>
      </Container>
    </div>
  );
};

export default Projects;
