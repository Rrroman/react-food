import { useContext } from 'react';
import CartContext from '../store/cartContext';

const useItemsAmount = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const itemsAmount = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return itemsAmount;
};

export default useItemsAmount;
