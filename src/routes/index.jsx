import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
};
