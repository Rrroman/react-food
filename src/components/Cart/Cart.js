import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ closeCartModal }) => {
  const cartCtx = useContext(CartContext);

  const addHandler = (item) => {
    cartCtx.increaseAmount(item);
  };
  const removeHandler = (item) => {
    cartCtx.removeItem(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((food) => (
        <CartItem
          key={food.id}
          food={food}
          onAdd={addHandler}
          onRemove={removeHandler}
          onClose={closeCartModal}
        />
      ))}
    </ul>
  );
  const hasItems = cartCtx.items.length > 0;
  const totalPrice = cartCtx.items.reduce((acc, item) => {
    return (acc += item.price * item.amount);
  }, 0);

  return (
    <Modal onClose={closeCartModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount: ${totalPrice.toFixed(2)}</span>
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
