import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';

const ErrorPage = () => {
  return (
    <Card>
      Oops something goes wrong! <Link to="/">Get me back</Link>
    </Card>
  );
};

export default ErrorPage;
