import React from 'react';
import Card from '../components/UI/Card';
import MealDetails from '../components/Meals/Meal/MealDetails';
import { useLoaderData } from 'react-router-dom';
import Container from '../components/Layout/Container';

const MealDetailsPage = () => {
  const data = useLoaderData();
  return (
    <Container>
      <Card>
        <MealDetails mealDetails={data.meal} />
      </Card>
    </Container>
  );
};

export default MealDetailsPage;
