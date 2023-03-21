import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cartContext';
import classes from './AvailableMeal.module.css';
import MealForm from './Meal/MealForm';

export default function AvailableMeal({ meal }) {
  const cartCtx = useContext(CartContext);
  const price = meal.price.toFixed(2);

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: amount,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>
          <Link to={`${meal.id}`}>{meal.name}</Link>
        </h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <MealForm meal={meal} onAddToCart={addToCartHandler} />
    </li>
  );
}
