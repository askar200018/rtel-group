import { Container } from '@mui/material';
import NavbarLink from './NavbarLink';
import LanguageMenu from './LanguageMenu';

const TopBar = () => {
  return (
    <div className="py-2 bg-black">
      <Container
        maxWidth="xl"
        sx={{
          fontFamily: 'Roboto, sans-serif',
        }}>
        <ul className="flex justify-end space-x-4">
          <NavbarLink linkTo="/catalog" name="Контакты"></NavbarLink>
          <li className="w-20">
            <LanguageMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default TopBar;
