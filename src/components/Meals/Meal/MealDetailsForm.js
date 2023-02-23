import { useNavigate } from 'react-router-dom';

import classes from './MealDetailsForm.module.css';

function MealDetailsForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <>
      <h1 className={classes.title}>Edit this meal</h1>
      <form className={classes.form}>
        <p>
          <label htmlFor="name">Title</label>
          <input id="name" type="text" name="name" required />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <input id="description" type="url" name="description" required />
        </p>
        <p>
          <label htmlFor="price">Price</label>
          <input id="price" type="number" name="price" required />
        </p>
        <p>
          <label htmlFor="cooking_description">Cooking description</label>
          <textarea
            id="cooking_description"
            name="cooking_description"
            rows="5"
            required
          />
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button>Save</button>
        </div>
      </form>
    </>
  );
}

export default MealDetailsForm;
