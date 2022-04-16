import { Container, Link } from '@mui/material';
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
          <Link className="flex" href="#" underline="hover" variant="h6" sx={{ color: 'white' }}>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            Rtel Group
          </Link>
        </div>
        <ul className="flex space-x-8">
          <NavbarLink name="Каталог продукции"></NavbarLink>
          <NavbarLink name="Проекты"></NavbarLink>
          <NavbarLink name="Решения"></NavbarLink>
          <NavbarLink name="Итоги работ"></NavbarLink>
          <NavbarLink name="Оформить запрос"></NavbarLink>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
