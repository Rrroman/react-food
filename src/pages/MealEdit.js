import React from 'react';
import Container from '../components/Layout/Container';
import Card from '../components/UI/Card';
import MealDetailsForm from '../components/Meals/Meal/MealDetailsForm';
import { useRouteLoaderData } from 'react-router-dom';

const MealEdit = () => {
  const data = useRouteLoaderData('meal-details');
  return (
    <Container>
      <Card>
        <MealDetailsForm mealDetails={data.meal} />
      </Card>
    </Container>
  );
};

export default MealEdit;
