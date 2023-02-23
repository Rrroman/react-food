import React from 'react';
import Card from '../components/UI/Card';
import MealDetails from '../components/Meals/Meal/MealDetails';
import { useRouteLoaderData } from 'react-router-dom';
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
