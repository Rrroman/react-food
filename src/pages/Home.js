import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/UI/Container';
import Card from '../components/UI/Card';

export const HomePage = () => {
  return (
    <Container>
      <Card>
        <h1>Tasting Heaven: Indulge in Our Ultimate Foodie Experience</h1>
        <p>
          Looking for the ultimate foodie experience? Look no further than
          "Tasting Heaven," a culinary journey that will take you on a flavorful
          adventure you'll never forget. This magazine is a celebration of all
          things delicious, featuring recipes, stories, and tips from the
          world's top chefs and food experts. From the vibrant flavors of street
          food to the luxurious indulgences of fine dining, "Tasting Heaven" has
          it all.
        </p>
        <p>
          Each issue is filled with mouth-watering recipes that will inspire you
          to get creative in the kitchen, as well as insider tips on where to
          find the best ingredients and cooking techniques. But "Tasting Heaven"
          isn't just about the food itself – it's also about the stories behind
          it. You'll hear from chefs, restaurateurs, and food enthusiasts who
          are passionate about sharing their love for cuisine with the world.
          You'll learn about the cultural significance of different dishes, as
          well as the techniques and traditions that make them unique.
        </p>
        <p>
          So whether you're a seasoned foodie or just looking to expand your
          culinary horizons, "Tasting Heaven" is the perfect magazine for you.
          Join us on a delicious journey that will tantalize your taste buds and
          leave you craving more.
        </p>
        <p style={{ textAlign: 'right' }}>
          <Link to="meals" style={{ color: 'var(--color-secondary-400)' }}>
            Go to Meals
          </Link>
        </p>
      </Card>
    </Container>
  );
};

export default HomePage;
