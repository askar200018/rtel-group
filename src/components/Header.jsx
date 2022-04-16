import Navbar from './Navbar';
import TopBar from './TopBar';

const Header = () => {
  return (
    <div className="fixed min-w-full top-0 right-0">
      <TopBar />
      <Navbar />
    </div>
  );
};

export default Header;
