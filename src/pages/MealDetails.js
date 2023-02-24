import React from 'react';
import Card from '../components/UI/Card';
import MealDetails from '../components/Meals/Meal/MealDetails';
import { json, useRouteLoaderData } from 'react-router-dom';
import Container from '../components/Layout/Container';

const MealDetailsPage = () => {
  const data = useRouteLoaderData('meal-details');
  return (
    <Container>
      <Card>
        <MealDetails mealDetails={data.meal} />
      </Card>
    </Container>
  );
};

export default MealDetailsPage;

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