import React from 'react';
import { json, redirect } from 'react-router-dom';
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

export async function authenticationAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported  mode' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not authenticate user' }, { status: 500 });
  }

  return redirect('/');
}