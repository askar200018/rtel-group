import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const Dropdownlink = () => {
  const [show, setShow] = useState(true);

  return (
    <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} className="relative">
      <a
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        href="#"
        className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
        aria-current="page">
        Каталог продукции
      </a>
      <DropdownMenu className={show ? 'visible' : 'hidden'} />
    </div>
  );
};

export default Dropdownlink;
