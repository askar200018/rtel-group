import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import TestComponent from './components/TestComponent';
import Tetra from './pages/Tetra';
import Catalog from './pages/Catalog';
import Main from './pages/Main';

import './style.scss';
import PocSolutions from './pages/Poc';
import ScrollToTop from './components/ScrollToTop';
import CatalogDetail from './pages/CatalogDetail';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Solutions from './pages/Solutions';

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/rtel-group" element={<Main />} />
        <Route path="/rtel-group/catalog" element={<Catalog />} />
        <Route path="/rtel-group/catalog/tetra" element={<Tetra />} />
        <Route path="/rtel-group/catalog/poc-solutions" element={<PocSolutions />} />
        <Route path="/rtel-group/catalog/tetra/:categoryName" element={<CatalogDetail />} />
        <Route
          path="/rtel-group/catalog/tetra/:categoryId/:productId"
          element={<ProductDetail />}
        />
        <Route path="/rtel-group/solutions" element={<Solutions />} />
        <Route path="/rtel-group/about" element={<TestComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
