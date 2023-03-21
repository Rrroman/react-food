import React, { useContext } from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/cartContext';
import useBumpAnimation from '../../hooks/useBumpAnimation';

export default function CartButton({ openCartModal }) {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const itemsAmount = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const isBump = useBumpAnimation(itemsAmount, 300);
  const btnClasses = `${classes.button} ${isBump ? classes.bump : ''}`;

  return (
    <button className={btnClasses} onClick={openCartModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Open Cart</span>
      <span className={classes.badge}>{itemsAmount}</span>
    </button>
  );
}
