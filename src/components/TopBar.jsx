import { Container } from '@mui/material';
import NavbarLink from './NavbarLink';
import LanguageMenu from './LanguageMenu';

const TopBar = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: 'black',
        paddingY: '8px',
        fontFamily: 'Roboto, sans-serif',
      }}>
      <ul className="flex justify-end space-x-4">
        <NavbarLink linkTo="/catalog" name="Контакты"></NavbarLink>
        <li className="w-20">
          <LanguageMenu />
        </li>
      </ul>
    </Container>
  );
};

export default TopBar;
