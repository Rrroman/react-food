import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

import classes from './MealDetailsForm.module.css';

function MealDetailsForm({ mealDetails, method }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate(-1);
  }

  return (
    <>
      <Form method={method} className={classes.form}>
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

export async function saveMealAction({ request, params }) {
  const method = request.method;
  const mealData = await request.formData();
  const meal = {
    name: mealData.get('name'),
    description: mealData.get('description'),
    price: +mealData.get('price'),
    cooking_description: mealData.get('cooking_description'),
  };

  let url = 'http://localhost:8080/meals';

  if (method === 'PATCH') {
    url += `/${params.id}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meal),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save meal' }, { status: 500 });
  }

  return redirect('/meals');
}
