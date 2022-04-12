import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TestComponent from './components/TestComponent';
import TestPage from './pages/TestPage';

const App = () => {
  return (
    <div className="bg-gradient-to-r bg-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="about" element={<TestComponent />} />
      </Routes>
    </div>
  );
};

export default App;
