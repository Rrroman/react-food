import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
import Card from '../components/UI/Card';
import Container from '../components/UI/Container';

const AuthenticationPage = () => {
  return (
    <Container>
      <Card>
        <AuthForm />
      </Card>
    </Container>
  );
};

export default AuthenticationPage;
