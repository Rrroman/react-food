import React from 'react';
import CartIcon from './CartIcon';
import styles from './CartButton.module.css';

export default function CartButton() {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Open Cart</span>
      <span className={styles.badge}>99</span>
    </button>
  );
}
