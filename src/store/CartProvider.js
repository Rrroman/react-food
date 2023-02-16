import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== action.item.id),
          action.item,
        ],
      };
    case 'INCREASE_AMOUNT':
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === action.item.id) {
              return {
                ...item,
                amount: (item.amount += 1),
              };
            } else {
              return item;
            }
          }),
        ],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item.id === action.item.id) {
              if (item.amount - 1 === 0) {
                return null;
              } else {
                item.amount -= 1;
                return item;
              }
            } else {
              return item;
            }
          })
          .filter((item) => {
            return item;
          }),
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
  const increaseAmount = (item) => {
    dispatch({ type: 'INCREASE_AMOUNT', item });
  };
  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', item });
  };

  const cartContext = {
    items: cartState.items,
    addItem,
    increaseAmount,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
