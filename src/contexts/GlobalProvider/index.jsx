import P from 'prop-types';
import { useState } from 'react';
import { GlobalContext } from './context';

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newProduct = { ...product, amount: 1 };
    setCart([...cart, newProduct]);
  };

  const removeFromCart = (productID) => {
    const cartUpdated = cart.filter((product) => product.id !== productID);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (productID) => {
    const cartUpdated = [...cart];
    const productPosition = cartUpdated.findIndex(
      (product) => product.id === productID,
    );

    if (
      cartUpdated[productPosition].amount < cartUpdated[productPosition].stock
    ) {
      cartUpdated[productPosition].amount++;
      setCart(cartUpdated);
    }
  };

  const decreaseAmount = (productID) => {
    const cartUpdated = [...cart];
    const productPosition = cartUpdated.findIndex(
      (product) => product.id === productID,
    );

    if (cartUpdated[productPosition].amount > 1) {
      cartUpdated[productPosition].amount--;
      setCart(cartUpdated);
    } else {
      removeFromCart(productID);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: P.node.isRequired,
};
