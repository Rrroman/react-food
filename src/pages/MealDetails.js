import React from 'react';
import Card from '../components/UI/Card';
import MealItemDetails from '../components/Meals/MealItem/MealItemDetails';
import { useLoaderData } from 'react-router-dom';
import Container from '../components/Layout/Container';

const MealDetailsPage = () => {
  const data = useLoaderData();
  return (
    <Container>
      <Card>
        <MealItemDetails mealDetails={data.meal} />
      </Card>
    </Container>
  );
};

export default MealDetailsPage;
