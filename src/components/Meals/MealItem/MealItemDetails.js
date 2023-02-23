import { json, Link } from 'react-router-dom';
import classes from './MealItemDetails.module.css';

export default function MealItem({ mealDetails }) {
  return (
    <div className={classes.meal}>
      <h1>{mealDetails.name}</h1>
      <div className={classes.description}>
        <p>{mealDetails.description}</p>
        <h2>Our receipt:</h2>
        <p>{mealDetails.cooking_description}</p>
      </div>
      <div>
        <p className={classes.price}>${mealDetails.price}</p>
        <Link to="/" className={classes.link}>
          Home
        </Link>
      </div>
    </div>
  );
}

export async function mealDetailsLoader({ request, params }) {
  const response = await fetch('http://localhost:8080/products/' + params.id);
  if (!response.ok) {
    throw json(
      { message: 'Something went wrong!' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}