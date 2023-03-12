import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Spinner from '../UI/Spinner';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

export default function Meals() {
  const { meals } = useLoaderData();

  return (
    <>
      <MealsSummary />
      <Suspense fallback={<Spinner />}>
        <Await resolve={meals}>
          {(loadedMeals) => <AvailableMeals meals={loadedMeals} />}
        </Await>
      </Suspense>
    </>
  );
}


