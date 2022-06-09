/* eslint-disable no-fallthrough */
import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const { payload } = action;
      if (!state.includes(payload)) {
        return [...state, payload];
      }
    }

    case types.REMOVE_TO_CART: {
      const { payload: ID } = action;
      const cartFilter = state.filter((product) => {
        return product.id !== ID;
      });
      return cartFilter;
    }

    case types.INCREASE_QUANTITY: {
      const { payload: ID } = action;
      const cart = [...state];

      const teste = cart.map((product) => {
        if (product.id === ID) {
          product.amount++;
        }
        return product;
      });
      console.log(teste);
      return teste;
    }
  }

  return [...state];
};
