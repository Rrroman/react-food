import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const DUMMY_LIST = [
  { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
  { id: 'c2', name: 'Beer', amount: 4, price: 32.99 },
  { id: 'c3', name: 'Potato', amount: 3, price: 2.99 },
];

const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {DUMMY_LIST.map((food) => (
        <li>{food.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount: 10</span>
        <span>Total Price: 42</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
