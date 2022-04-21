import { Container } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { HeaderHeight } from '../variables/vairables';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Projects = () => {
  const defaultProps = {
    center: {
      lat: 51.166667,
      lng: 71.433333,
    },
    zoom: 5,
  };
  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      Projects
      <Container maxWidth="xl">
        <div style={{ height: '520px', width: '100%' }} className="py-8">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDqDVk27L0HqRCeV2ekSUZa2WLrNmbTmFI' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
          </GoogleMapReact>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
