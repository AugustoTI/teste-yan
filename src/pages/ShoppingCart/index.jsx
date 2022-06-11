import * as S from './styles';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalProvider/context';
import { CurrencyConverter } from '../../util/currency-converter';

export const ShoppingCart = () => {
  const { cart, increaseAmount, decreaseAmount, clearCart } =
    useContext(GlobalContext);

  return (
    <>
      <S.TitlePage>Shopping Cart</S.TitlePage>
      <hr />
      <S.Container>
        <div>
          <h2>Products in cart: {cart.length}</h2>
          {cart.length > 0 && (
            <>
              <S.Button onClick={() => clearCart()}>Clear Cart</S.Button>
              <S.Button>Buy now</S.Button>
            </>
          )}
        </div>
        <S.ListContainer>
          <ul>
            {cart.map(({ id, name, price, amount, image, stock }) => (
              <li key={id}>
                <h3>{name}</h3>
                <img src={image} alt="" />
                <b>{CurrencyConverter(price)}</b>
                <br />
                <span>Amount: {amount}</span>
                <S.Button
                  disabled={amount === stock}
                  onClick={() => increaseAmount(id)}
                >
                  {amount === stock ? 'product out of stock' : 'Increase'}
                </S.Button>
                <S.Button onClick={() => decreaseAmount(id)}>Decrease</S.Button>
              </li>
            ))}
          </ul>
        </S.ListContainer>
      </S.Container>
    </>
  );
};
