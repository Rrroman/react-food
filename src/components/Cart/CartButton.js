import React from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';

export default function CartButton({ setIsCartModal }) {
  return (
    <button className={classes.button} onClick={() => setIsCartModal(true)}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Open Cart</span>
      <span className={classes.badge}>99</span>
    </button>
  );
}
