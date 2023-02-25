import React from 'react';
import Card from '../UI/Card';
import AvailableMeal from './AvailableMeal';
import classes from './AvailableMeals.module.css';
import { json, Link, useLoaderData } from 'react-router-dom';

export default function AvailableMeals() {
  const data = useLoaderData();

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {data.meals.map((meal) => (
            <AvailableMeal meal={meal} key={meal.id}></AvailableMeal>
          ))}
        </ul>
        {data.meals.length === 0 && (
          <Link to="new" className={`${classes.link}`}>
            <h2>Add first meal!</h2>
          </Link>
        )}
      </Card>
    </section>
  );
}

export async function mealsLoader() {
  const response = await fetch('http://localhost:8080/meals');
  if (!response.ok) {
    throw json(
      { message: 'Something went wrong!' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
