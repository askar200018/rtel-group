import { Container } from '@mui/material';
import NavbarLink from './NavbarLink';

const TopBar = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: 'black',
        paddingY: '8px',
      }}>
      <ul className="flex justify-end space-x-8">
        <NavbarLink linkTo="/rtel-group/catalog" name="Контакты"></NavbarLink>
        <NavbarLink linkTo="/rtel-group/catalog" name="Язык"></NavbarLink>
      </ul>
    </Container>
  );
};

export default TopBar;
