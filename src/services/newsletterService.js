export async function newsletterAction({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email, 'Lets pretend this is going to server');
  return { message: 'Signup successful!' };
}
