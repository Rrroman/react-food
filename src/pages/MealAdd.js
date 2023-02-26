import React from 'react';
import Container from '../components/Layout/Container';
import MealDetailsForm from '../components/Meals/Meal/MealDetailsForm';
import Card from '../components/UI/Card';

const MealAdd = () => {
  return (
    <Container>
      <Card>
        <h1>Add new meal</h1>
        <MealDetailsForm method="POST" />
      </Card>
    </Container>
  );
};

export default MealAdd;
