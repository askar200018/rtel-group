import { Link } from 'react-router-dom';

const Popup = ({ marker }) => {
  return (
    <div>
      <h4 className="text-base text-gray-800">Использованные оборудования:</h4>
      <ul>
        {marker.equipments.map((equipment) => (
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
        to={marker.solution.link}
        className="text-blue-800 hover:underline outline-none"
        target="_blank">
        {marker.solution.text}
      </Link>
    </div>
  );
};

export default Popup;
