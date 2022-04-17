import { Link } from 'react-router-dom';

const NavbarLink = (props) => {
  return (
    <li>
      <Link to={props.linkTo} variant="body2" className="text-white hover:underline text-sm">
        {props.name}
      </Link>
      {props.children}
    </li>
  );
};

export default NavbarLink;
