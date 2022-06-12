import * as S from './styles';
import { api } from '../../api';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CurrencyConverter } from '../../util/currency-converter';
import { GlobalContext } from '../../contexts/GlobalProvider/context';
import { Modal } from '../../components/Modal';

export const ProductItem = () => {
  const [alreadyExists, setAlreadyExists] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(GlobalContext);
  const [product, setProduct] = useState(null);
  const { idProduct } = useParams();
  const [showModal, setShowModal] = useState(false);

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
        <S.Button onClick={() => setShowModal(true)}>Buy now</S.Button>
        {alreadyExists ? (
          <S.Button onClick={() => removeFromCart(product.id)}>
            Remove from Shopping Cart
          </S.Button>
        ) : (
          <S.Button onClick={() => addToCart(product)}>
            Add to Shopping Cart
          </S.Button>
        )}
      </div>
      <Modal modalActive={showModal} setModal={setShowModal} />
    </S.Container>
  );
};
