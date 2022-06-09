import P from 'prop-types';
import { useReducer } from 'react';
import { GlobalContext } from './context';
import { reducer } from './reducer';
import { data } from './shoppingCart';

export const GlobalProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, data);

  return (
    <GlobalContext.Provider value={{ cart, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: P.node.isRequired,
};
