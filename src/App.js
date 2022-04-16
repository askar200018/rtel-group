import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import TestComponent from './components/TestComponent';
import Catalog from './pages/Catalog';
import Main from './pages/Main';
// import TestPage from './pages/TestPage';

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen" style={{ paddingTop: '108px' }}>
      <Header />
      <Routes>
        <Route path="/rtel-group" element={<Main />} />
        <Route path="/rtel-group/catalog" element={<Catalog />} />
        <Route path="/rtel-group/about" element={<TestComponent />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
