import { defer, json, redirect } from 'react-router-dom';
import { getAuthToken } from './authenticationService';

const MEAL_URL = 'http://localhost:8080/meals';

export async function mealLoader({ request, params }) {
  const response = await fetch(MEAL_URL + '/' + params.id);
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

export async function mealDeleteAction({ request, params }) {
  const response = await fetch(MEAL_URL + '/' + params.id, {
    method: request.method,
    headers: {
      Authorization: 'Bearer ' + getAuthToken(),
    },
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete meal' },
      {
        status: 500,
      }
    );
  } else {
    return redirect('/meals');
  }
}

async function loadMeals() {
  const response = await fetch(MEAL_URL);
  if (!response.ok) {
    throw json(
      { message: 'Something went wrong!' },
      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();
    return data.meals;
  }
}

export function mealsLoader() {
  return defer({
    meals: loadMeals(),
  });
}

export async function saveMealAction({ request, params }) {
  const token = getAuthToken();
  const method = request.method;
  const mealData = await request.formData();
  const meal = {
    name: mealData.get('name'),
    description: mealData.get('description'),
    price: +mealData.get('price'),
    cooking_description: mealData.get('cooking_description'),
  };

  let url = MEAL_URL;

  if (method === 'PATCH') {
    url += `/${params.id}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
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
