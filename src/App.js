import { Route, Routes } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import TestPage from './pages/TestPage';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="about" element={<TestComponent />} />
      </Routes>
    </div>
  );
};

export default App;
