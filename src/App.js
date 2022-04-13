import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import TestComponent from './components/TestComponent';
import Main from './pages/Main';
// import TestPage from './pages/TestPage';

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r bg-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<TestComponent />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
