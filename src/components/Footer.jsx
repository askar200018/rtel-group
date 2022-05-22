import logo from '../assets/images/logo.jpg';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800">
      <div className="flex justify-between container mx-auto">
        <div>
          <a href="https://flowbite.com" className="flex items-center">
            <img src={logo} alt="Logo" height={36} className="h-[36px]" />
          </a>
        </div>
        <div className="flex space-x-8">
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">Решения</h5>
            <ul>
              <li className="mb-2">
                <a className=" text-gray-400" href="#">
                  Проекты
                </a>
              </li>
              <li className="mb-2">
                <a className=" text-gray-400" href="#">
                  Продукты
                </a>
              </li>
              <li className="mb-2">
                <a className=" text-gray-400" href="#">
                  Пресс-центр
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">Адрес</h5>
            <ul className=" max-w-[240px]">
              <li className="mb-2 text-gray-400">
                129344, г. Москва, ул. Летчика Бабушкина, вл. 1 стр. 2
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-medium text-white">Контакты</h5>
            <ul>
              <li className="mb-2 text-gray-400">+7 (495) 901-15-20</li>
              <li className="mb-2 text-gray-400">+7 (495) 901-15-20</li>
              <li className="mb-2 text-gray-400">+7 (495) 901-15-20</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
