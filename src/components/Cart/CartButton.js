import React from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import useBumpAnimation from '../../hooks/useBumpAnimation';
import useItemsAmount from '../../hooks/useItemsAmount';

export default function CartButton({ openCartModal }) {
  const itemsAmount = useItemsAmount();

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
