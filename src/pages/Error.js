import React, { useEffect } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import Card from '../components/UI/Card';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  let errorTitle = 'An error occurred';
  let message = 'Something went wrong';

  useEffect(() => {
    const navigateTimeout = setTimeout(() => navigate('/'), 7000);
    return () => {
      clearTimeout(navigateTimeout);
    };
  }, [navigate]);

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    errorTitle = 'Not found';
    message = 'The page you are looking for could not be found';
  }

  return (
    <Card>
      <div style={{ textAlign: 'center' }}>
        <h1>{errorTitle}</h1>
        <p>{message}</p>
        <p>
          <Link to="/">Go back home</Link>
        </p>
      </div>
    </Card>
  );
};

export default ErrorPage;
