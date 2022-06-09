import * as S from './styles';
import { api } from '../../api';
import { useEffect, useState } from 'react';
import { Slider } from '../../components/Slider';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const mediaQuery = {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  useEffect(() => {
    api.get('products').then(({ data }) => setProducts(data));
  }, []);

  return (
    <section>
      <S.ProductsTitle>Our products</S.ProductsTitle>
      <Slider slideOf={products} breakpoints={mediaQuery} />
    </section>
  );
};
