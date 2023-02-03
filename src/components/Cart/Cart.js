import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ closeCartModal }) => {
  const cartCtx = useContext(CartContext);
  const totalPrice = (food) => food.price * food.amount;
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((food) => (
        <li key={food.id}>
          {food.name} - {food.price} x {food.amount} = ${totalPrice(food)}
        </li>
      ))}
    </ul>
  );
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={closeCartModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount: ${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeCartModal}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
