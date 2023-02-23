import React from 'react';
import Container from '../components/Layout/Container';
import Card from '../components/UI/Card';
import MealDetailsForm from '../components/Meals/Meal/MealDetailsForm';

const MealEdit = () => {
  return (
    <Container>
      <Card>
        <MealDetailsForm />
      </Card>
    </Container>
  );
};

export default MealEdit;
