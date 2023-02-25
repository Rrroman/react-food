import React from 'react';
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
