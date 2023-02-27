import React from 'react';
import Card from '../components/UI/Card';
import MealDetails from '../components/Meals/Meal/MealDetails';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import Container from '../components/Layout/Container';

const MealPage = () => {
  const data = useRouteLoaderData('meal');
  return (
    <Container>
      <Card>
        <h1>Meal Details</h1>
        <MealDetails mealDetails={data.meal} />
      </Card>
    </Container>
  );
};

export default MealPage;

export async function mealLoader({ request, params }) {
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

export async function mealDeleteAction({ request, params }) {
  const response = await fetch('http://localhost:8080/meals/' + params.id, {
    method: request.method,
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
