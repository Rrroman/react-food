import { Link, useSubmit } from 'react-router-dom';
import classes from './MealDetails.module.css';

export default function MealDetails({ mealDetails }) {
  const submit = useSubmit();
  const deleteMealHandler = () => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this meal?'
    );

    if (isConfirmed) {
      submit(null, { method: 'DELETE' });
    }
  };

  return (
    <div className={classes.meal}>
      <h2>{mealDetails.name}</h2>
      <div className={classes.description}>
        <p>{mealDetails.description}</p>
        <h3>Our receipt:</h3>
        <p>{mealDetails.cooking_description}</p>
        <div className={classes.wrapper}>
          <Link to="edit" className={classes.link}>
            Edit
          </Link>
          <button onClick={deleteMealHandler} className={classes.link}>
            Delete
          </button>
          <Link to="../new" className={`${classes.link} ${classes.new}`}>
            Purpose new meal!
          </Link>
        </div>
      </div>
      <div className={classes.aside}>
        <p className={classes.price}>${mealDetails.price}</p>
        <Link to=".." className={classes.link}>
          Back
        </Link>
      </div>
    </div>
  );
}
