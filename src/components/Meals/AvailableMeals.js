import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { json, useLoaderData } from 'react-router-dom';

export default function AvailableMeals() {
  const data = useLoaderData();

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {data.meals.map((meal) => (
            <MealItem meal={meal} key={meal.id}></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export async function mealLoader() {
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