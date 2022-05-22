import { Link } from 'react-router-dom';

const Popup = ({ marker, language }) => {
  return (
    <div>
      <h4 className="text-base text-gray-800">Использованные оборудования:</h4>
      <ul>
        {marker[`equipments_${language}`].map((equipment) => (
          <li key={equipment.text}>
            <Link
              to={equipment.link}
              className="text-blue-800 hover:underline outline-none"
              target="_blank">
              {equipment.text}
            </Link>
          </li>
        ))}
      </ul>
      <h4 className="text-base text-gray-800">Решения:</h4>
      <Link
        to={marker[`solution_${language}`].link}
        className="text-blue-800 hover:underline outline-none"
        target="_blank">
        {marker[`solution_${language}`].text}
      </Link>
    </div>
  );
};

export default Popup;
