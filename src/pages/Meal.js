import React from 'react';
import Card from '../components/UI/Card';
import MealDetails from '../components/Meals/Meal/MealDetails';
import { useRouteLoaderData } from 'react-router-dom';
import Container from '../components/UI/Container';

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


