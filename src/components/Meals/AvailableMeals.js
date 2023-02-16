import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useLoaderData } from 'react-router-dom';

export default function AvailableMeals() {
  const meals = useLoaderData();
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem meal={meal} key={meal.id}></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
}
