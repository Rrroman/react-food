import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/UI/Card';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateTimeout = setTimeout(() => navigate('/'), 5000);
    return () => {
      clearTimeout(navigateTimeout);
    };
  }, [navigate]);

  return (
    <Card>
      <h1 style={{ textAlign: 'center' }}>
        Oops something goes wrong! <Link to="/">Get me back</Link>
      </h1>
    </Card>
  );
};

export default ErrorPage;
