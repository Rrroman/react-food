import { json } from 'react-router-dom';

export async function newsletterAction({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  const response = await fetch('http://localhost:8080/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw json(
      { message: `Something went wrong! ${response.statusText}` },
      {
        status: 500,
      }
    );
  }

  return { message: `Signup successful! ${email}` };
}
