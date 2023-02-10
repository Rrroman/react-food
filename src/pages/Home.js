import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';

export const HomePage = () => {
  return (
    <div
      style={{ maxWidth: '40rem', textAlign: 'center', marginInline: 'auto' }}
    >
      <Card>
        <h1>Home Page</h1>
        <p>
          Go to{' '}
          <Link to="/products" style={{ color: 'aqua' }}>
            Products
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default HomePage;
