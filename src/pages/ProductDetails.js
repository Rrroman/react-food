import React from 'react';
import Card from '../components/UI/Card';
import MealItemDetails from '../components/Meals/MealItem/MealItemDetails';
import { useLoaderData } from 'react-router-dom';
import Container from '../components/Layout/Container';

const ProductDetailsPage = () => {
  const data = useLoaderData();
  return (
    <Container>
      <Card>
        <MealItemDetails mealDetails={data.product} />
      </Card>
    </Container>
  );
};

export default ProductDetailsPage;
