import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  increaseAmount: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
