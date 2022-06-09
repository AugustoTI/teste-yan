import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { GlobalProvider } from '../contexts/GlobalProvider';
import { Home } from '../pages/Home';
import { ProductItem } from '../pages/ProductItem';
import { Products } from '../pages/Products';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:idProduct" element={<ProductItem />} />
          </Routes>
        </Content>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
};
