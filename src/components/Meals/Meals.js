import React, { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

export default function Meals() {
  const { meals } = useLoaderData();

  return (
    <>
      <MealsSummary />
      <Suspense
        fallback={
          <p style={{ textAlign: 'center', color: 'white' }}>Loading...</p>
        }
      >
        <Await resolve={meals}>
          {(loadedMeals) => <AvailableMeals meals={loadedMeals} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadMeals() {
  const response = await fetch('http://localhost:8080/meals');
  if (!response.ok) {
    throw json(
      { message: 'Something went wrong!' },
      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();
    return data.meals;
  }
}

export function mealsLoader() {
  return defer({
    meals: loadMeals(),
  });
}
