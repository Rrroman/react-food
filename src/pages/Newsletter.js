import Container from '../components/Layout/Container';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import Card from '../components/UI/Card';

function NewsletterPage() {
  return (
    <Container>
      <Card>
        <h1>Newsletter Sign Up</h1>
        <NewsletterSignup />
      </Card>
    </Container>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}
