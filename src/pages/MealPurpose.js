import React from 'react';
import { json, redirect } from 'react-router-dom';
import Container from '../components/Layout/Container';
import MealDetailsForm from '../components/Meals/Meal/MealDetailsForm';
import Card from '../components/UI/Card';

const MealPurpose = () => {
  return (
    <Container>
      <Card>
        <h1>Add new meal</h1>
        <MealDetailsForm />
      </Card>
    </Container>
  );
};

export default MealPurpose;

export async function addMealAction({ request, params }) {
  const mealData = await request.formData();
  const meal = {
    name: mealData.get('name'),
    description: mealData.get('description'),
    price: +mealData.get('price'),
    cooking_description: mealData.get('cooking_description'),
  };

  const response = await fetch('http://localhost:8080/meals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meal),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save meal' }, { status: 500 });
  }

  return redirect('/meals');
}
