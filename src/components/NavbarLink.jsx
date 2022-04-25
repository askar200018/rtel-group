import { Link } from 'react-router-dom';

const NavbarLink = (props) => {
  return (
    <li className="group">
      <Link to={props.linkTo} variant="body2" className="peer text-white hover:underline text-sm">
        {props.name}
      </Link>
      {props.menu && (
        <ul className="absolute hidden py-2 px-2 bg-white rounded shadow group-hover:block">
          {props.menu.map((menuItem) => (
            <li
              key={menuItem.name}
              className="px-1 mb-2 text-sm hover:underline transition-all cursor-pointer last:mb-0">
              <Link to={menuItem.link}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarLink;
