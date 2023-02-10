import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/UI/Card';

const ProductDetailsPage = () => {
  const params = useParams();
  return (
    <Card>
      <h1 style={{ textAlign: 'center' }}>
        Product Details for{' '}
        <i>
          <u>{params.id}</u>
        </i>{' '}
        - will be added soon
      </h1>
    </Card>
  );
};

export default ProductDetailsPage;
