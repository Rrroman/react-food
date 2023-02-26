import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MealsRootLayout from './components/Layout/MealsRoot';
import RootLayout from './components/Layout/Root';
import { mealsLoader } from './components/Meals/AvailableMeals';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MealPage, { mealDeleteAction, mealLoader } from './pages/Meal';
import MealEdit from './pages/MealEdit';
import MealAdd, { saveMeal } from './pages/MealAdd';
import MealsPage from './pages/Meals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'meals',
        element: <MealsRootLayout />,
        children: [
          {
            index: true,
            element: <MealsPage />,
            loader: mealsLoader,
          },
          {
            path: ':id',
            id: 'meal',
            loader: mealLoader,
            children: [
              {
                index: true,
                element: <MealPage />,
                action: mealDeleteAction,
              },
              {
                path: 'edit',
                element: <MealEdit />,
              },
            ],
          },
          {
            path: 'new',
            element: <MealAdd />,
            action: saveMeal,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
