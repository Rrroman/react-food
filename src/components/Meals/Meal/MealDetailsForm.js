import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

import classes from './MealDetailsForm.module.css';

function MealDetailsForm({ mealDetails }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate(-1);
  }

  return (
    <>
      <Form method="post" className={classes.form}>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="name">Title</label>
          <input
            id="name"
            type="text"
            name="name"
            defaultValue={mealDetails && mealDetails.name}
            placeholder="Meal name"
            required
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            defaultValue={mealDetails && mealDetails.description}
            placeholder="Meal description"
            required
          />
        </p>
        <p>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            name="price"
            defaultValue={mealDetails && mealDetails.price}
            placeholder="Meal price"
            required
          />
        </p>
        <p>
          <label htmlFor="cooking_description">Cooking description</label>
          <textarea
            id="cooking_description"
            name="cooking_description"
            rows="5"
            defaultValue={mealDetails && mealDetails.cooking_description}
            placeholder="Meal cooking description"
            required
          />
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
            Cancel
          </button>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting' : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
}

export default MealDetailsForm;
