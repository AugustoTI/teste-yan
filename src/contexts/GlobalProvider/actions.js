import * as types from './types';

export const addToCart = (dispatch, itemSelected) => {
  const product = { ...itemSelected, amount: 1 };

  dispatch({ type: types.ADD_TO_CART, payload: product });
};

export const removeToCart = (dispatch, itemIDSelected) => {
  dispatch({ type: types.REMOVE_TO_CART, payload: itemIDSelected });
};

export const increaseProductQuantity = (dispatch, itemIDSelected) => {
  dispatch({ type: types.INCREASE_QUANTITY, payload: itemIDSelected });
};

export const decreaseProductQuantity = (dispatch, itemIDSelected) => {
  dispatch({ type: types.DECREASE_QUANTITY, payload: itemIDSelected });
};

export const clearShoppingCart = (dispatch) => {
  dispatch({ type: types.CLEAR_CART });
};
