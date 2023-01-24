import React from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';

export default function CartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Open Cart</span>
      <span className={classes.badge}>99</span>
    </button>
  );
}
