import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: 'rgb(31, 41, 55)',
        paddingY: '16px',
      }}>
      <nav className="flex justify-between">
        <div>
          <Link
            to="/rtel-group"
            className="flex items-center text-xl font-medium text-white"
            variant="h6">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            Rtel Group
          </Link>
        </div>
        <ul className="flex items-center space-x-8">
          <NavbarLink linkTo="/rtel-group/catalog" name="Каталог продукции"></NavbarLink>
          <NavbarLink linkTo="/rtel-group/catalog" name="Проекты"></NavbarLink>
          <NavbarLink linkTo="/rtel-group/solutions" name="Решения"></NavbarLink>
          <NavbarLink linkTo="/rtel-group/catalog" name="Итоги работ"></NavbarLink>
          <NavbarLink linkTo="/rtel-group/catalog" name="Оформить запрос"></NavbarLink>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
