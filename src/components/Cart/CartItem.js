import { Link } from 'react-router-dom';
import classes from './CartItem.module.css';

const CartItem = ({ food, onRemove, onAdd, onClose }) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>
          <Link to={`meals/${food.id}`} onClick={onClose}>
            {food.name}
          </Link>
        </h2>
        <div className={classes.summary}>
          <span className={classes.price}>${food.price.toFixed(2)}</span>
          <span className={classes.amount}>x {food.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => onRemove(food)}>-</button>
        <button onClick={() => onAdd(food)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
