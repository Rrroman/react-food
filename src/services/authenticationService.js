import { json, redirect } from 'react-router-dom';

export function getAuthToken() {
  return localStorage.getItem('token');
}

export function tokenLoader() {
  return getAuthToken();
}

export function protectAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth?mode=login');
  }

  return null;
}

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

  const responseData = await response.json();
  if (!responseData.token) {
    throw json({ message: 'Could not authenticate user' }, { status: 500 });
  }

  localStorage.setItem('token', responseData.token);

  return redirect('/');
}

export function logoutAction() {
  localStorage.removeItem('token');
  return redirect('/');
}
