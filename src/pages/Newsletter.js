import Container from '../components/UI/Container';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import Card from '../components/UI/Card';

function NewsletterPage() {
  return (
    <Container>
      <Card>
        <h1>Newsletter Sign Up</h1>
        <NewsletterSignup />
        <p>
          Are you tired of cooking the same meals every week? Do you want to add
          some variety to your diet and try out new and exciting dishes? Look no
          further than our newsletter about new meals!
        </p>
        <p>
          By signing up for our newsletter, you'll receive regular updates on
          the latest and greatest recipes from around the world. From
          mouthwatering Italian pasta dishes to spicy Thai curries, we've got
          something to tantalize every taste bud.
        </p>
        <p>
          Our team of expert chefs and food bloggers scours the internet and
          culinary world to bring you the best new meal ideas. You'll get access
          to exclusive recipes, cooking tips, and ingredient recommendations
          that will take your meals to the next level.
        </p>
        <p>
          Our team of expert chefs and food bloggers scours the internet and
          culinary world to bring you the best new meal ideas. You'll get access
          to exclusive recipes, cooking tips, and ingredient recommendations
          that will take your meals to the next level.
        </p>
        <p>
          But that's not all - our newsletter also includes information on the
          latest kitchen gadgets and appliances, as well as reviews and
          recommendations to help you make informed purchasing decisions.
        </p>
        <p>
          So what are you waiting for? Sign up for our newsletter today and
          start discovering delicious new meals that will leave you feeling
          satisfied and inspired in the kitchen.
        </p>
      </Card>
    </Container>
  );
}

export default NewsletterPage;

export async function newsletterAction({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email, 'Lets pretend this is going to server');
  return { message: 'Signup successful!' };
}
