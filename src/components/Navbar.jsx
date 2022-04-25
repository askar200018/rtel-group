import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  const catalogMenu = [
    { link: '/catalog/tetra', name: 'DMR системы и терминалы' },
    {
      link: '/catalog/poc-solutions',
      name: 'PoC-решения для оперативной связи поверх сети сотового оператора',
    },
  ];
  const solutionsMenu = [
    { link: '/solutions/smart-tower', name: 'Smart Tower' },
    {
      link: '/solutions/cybe-rr',
      name: 'Cybe-RR',
    },
    {
      link: '/solutions/hytalk',
      name: 'Hytalk',
    },
  ];
  return (
    <div className="py-4 bg-gray-800">
      <Container maxWidth="xl">
        <nav className="flex justify-between">
          <div>
            <Link to="/" className="flex items-center text-xl font-medium text-white" variant="h6">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              Rtel Group
            </Link>
          </div>
          <ul className="flex items-center space-x-8">
            {/* <MenuLink links={catalogLinks}>Каталог продукции</MenuLink> */}
            <NavbarLink linkTo="/catalog" name="Каталог продукции" menu={catalogMenu}></NavbarLink>
            <NavbarLink linkTo="/projects" name="Проекты"></NavbarLink>
            <NavbarLink linkTo="/solutions" name="Решения" menu={solutionsMenu}></NavbarLink>
            <NavbarLink linkTo="/solutions/results" name="Итоги работ"></NavbarLink>
            <NavbarLink linkTo="/feedback" name="Оформить запрос"></NavbarLink>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
