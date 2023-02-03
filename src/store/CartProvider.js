import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items.filter((item) => {
            if (item.id !== action.item.id) {
              return true;
            } else {
              state.totalAmount = state.totalAmount - item.price * item.amount;
              return false;
            }
          }),
          action.item,
        ],
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item.id),
      };
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
