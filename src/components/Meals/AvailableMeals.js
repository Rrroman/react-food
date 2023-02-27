import React from 'react';
import Card from '../UI/Card';
import AvailableMeal from './AvailableMeal';
import classes from './AvailableMeals.module.css';
import { Link } from 'react-router-dom';

export default function AvailableMeals({ meals }) {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <AvailableMeal meal={meal} key={meal.id}></AvailableMeal>
          ))}
        </ul>
        {meals.length === 0 && (
          <Link to="new" className={`${classes.link}`}>
            <h2>Add first meal!</h2>
          </Link>
        )}
      </Card>
    </section>
  );
}
