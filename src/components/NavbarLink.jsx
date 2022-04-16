import { Link } from '@mui/material';

const NavbarLink = (props) => {
  return (
    <li>
      <Link
        href="#"
        underline="hover"
        variant="body2"
        sx={{
          color: 'white',
          '&:hover': {
            underline: 'underline',
          },
        }}>
        {props.name}
      </Link>

      {props.children}
    </li>
  );
};

export default NavbarLink;
