import React, { useContext, useEffect, useState } from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/cartContext';

export default function CartButton({ openCartModal }) {
  const [isBump, setIsBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const itemsAmount = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    if (itemsAmount === 0) {
      return;
    }

    setIsBump(true);
    const bumpTimeout = setTimeout(() => {
      setIsBump(false);
      clearTimeout(bumpTimeout);
    }, 300);

    return () => {
      clearTimeout(bumpTimeout);
    };
  }, [itemsAmount]);
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
