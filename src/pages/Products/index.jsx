import * as S from './styles';
import { api } from '../../api';
import { useEffect, useState } from 'react';
import { Slider } from '../../components/Slider';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products').then(({ data }) => setProducts(data));
  }, []);

  return (
    <section>
      <S.ProductsTitle>Our products</S.ProductsTitle>
      <Slider slideOf={products} />
    </section>
  );
};
