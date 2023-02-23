import { json, Link } from 'react-router-dom';
import classes from './MealDetails.module.css';

export default function MealDetails({ mealDetails }) {
  return (
    <div className={classes.meal}>
      <h1>{mealDetails.name}</h1>
      <div className={classes.description}>
        <p>{mealDetails.description}</p>
        <h2>Our receipt:</h2>
        <p>{mealDetails.cooking_description}</p>
        <Link to="edit" className={classes.link}>
          Edit
        </Link>
        <Link to="delete" className={classes.link}>
          Delete
        </Link>
      </div>
      <div>
        <p className={classes.price}>${mealDetails.price}</p>
        <Link to=".." className={classes.link}>
          Back
        </Link>
      </div>
    </div>
  );
}

export async function mealDetailsLoader({ request, params }) {
  const response = await fetch('http://localhost:8080/meals/' + params.id);
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
