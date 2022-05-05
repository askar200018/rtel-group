import { useEffect, useRef } from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import { HeaderHeight } from '../variables/variables';
import DG from '2gis-maps';

const Contacts = () => {
  const mapContainer = useRef(null);
  useEffect(() => {
    const map = DG.map(mapContainer.current, {
      center: [54.98, 82.89],
      zoom: 13,
    });
    DG.marker([54.98, 82.89]).addTo(map).bindPopup('Вы кликнули по мне!');
  }, []);

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '48px',
      }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            paddingY: '48px',
          }}>
          <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
            КОНТАКТЫ
          </Typography>
          <Divider variant="middle" />
        </Box>
        <div className="flex justify-between p-4 bg-gray-100">
          <div className="flex-1 p-2">
            <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
              АДРЕС ПРЕДСТАВИТЕЛЬСТВА HYTERA В РОССИИ
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              115054, Россия, г. Москва, Павелецкая площадь 2, стр. 2, этаж 15, офис Хайтера
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              Телефон: +7 (495) 669-68-90
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              Email: info@hytera.ru
            </Typography>
            <Divider />
            <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
              АДРЕС ШТАБКВАРТИРЫ
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              Hytera Tower, Shenzhen Hi-Tech Industrial Park North, Beihuan RD.9108#, Nanshan
              District, Shenzhen, P.R.C.
            </Typography>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div ref={mapContainer} className="w-[500px] h-[300px] bg-green-600"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
