import React, { useContext } from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/cart-context';

export default function CartButton({ openCartModal }) {
  const cartCtx = useContext(CartContext);
  const cartItemsAmount = cartCtx.items.reduce((acc, item) => {
    return acc + item.totalAmount;
  }, 0);

  return (
    <button className={classes.button} onClick={openCartModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Open Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
}
