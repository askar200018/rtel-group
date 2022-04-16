import { Link } from 'react-router-dom';

const NavbarLink = (props) => {
  return (
    <li>
      {/* <Link
        href="/rtel-group/catalog"
        underline="hover"
        variant="body2"
        to="/rtel-group/catalog"
        sx={{
          color: 'white',
          '&:hover': {
            underline: 'underline',
          },
        }}>
        {props.name}
      </Link> */}
      <Link to={props.linkTo} variant="body2" className="text-white hover:underline text-sm">
        {props.name}
      </Link>
      {props.children}
    </li>
  );
};

export default NavbarLink;
