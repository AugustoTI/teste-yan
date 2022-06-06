import * as S from './styles';
import { api } from '../../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductItem = () => {
  const [product, setProduct] = useState(null);
  const { idProduct } = useParams();

  useEffect(() => {
    api.get('products/' + idProduct).then(({ data }) => setProduct(data));
  }, [idProduct]);

  if (!product) return;
  return (
    <S.Container>
      <img src={product.image} alt="text qualquer" />
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <ul>
          {product.sizes.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </div>
    </S.Container>
  );
};
