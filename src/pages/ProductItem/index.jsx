import * as S from './styles';
import { api } from '../../api';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CurrencyConverter } from '../../util/currency-converter';
import { GlobalContext } from '../../contexts/GlobalProvider/context';
import {
  addToCart,
  increaseProductQuantity,
  removeToCart,
} from '../../contexts/GlobalProvider/actions';

export const ProductItem = () => {
  const [alreadyExists, setAlreadyExists] = useState(false);
  const { dispatch, cart } = useContext(GlobalContext);
  const [product, setProduct] = useState(null);
  const { idProduct } = useParams();

  useEffect(() => {
    api.get('products/' + idProduct).then(({ data }) => setProduct(data));
  }, [idProduct]);

  useEffect(() => {
    const indexFindProduct = cart.findIndex((productSearch) => {
      return productSearch.id === Number(idProduct);
    });

    cart.includes(cart[indexFindProduct])
      ? setAlreadyExists(true)
      : setAlreadyExists(false);
  }, [cart, idProduct]);

  if (!product) return <h1>Loading...</h1>;
  return (
    <S.Container>
      <img src={product.image} alt="" />
      <div>
        <h1>{product.name}</h1>
        <b>{CurrencyConverter(product.price)}</b>
        <p>{product.description}</p>
        <S.Button>Comprar</S.Button>
        {alreadyExists ? (
          <S.Button onClick={() => removeToCart(dispatch, product.id)}>
            Remover do carrinho
          </S.Button>
        ) : (
          <S.Button onClick={() => addToCart(dispatch, product)}>
            Adicionar ao carrinho
          </S.Button>
        )}
        <S.Button onClick={() => increaseProductQuantity(dispatch, product.id)}>
          Aumentar
        </S.Button>
        <S.Button>Diminuir</S.Button>
      </div>
    </S.Container>
  );
};
