import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MealsRootLayout from './components/Layout/MealsRoot';
import RootLayout from './components/Layout/Root';
import { mealLoader } from './components/Meals/AvailableMeals';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MealDetailsPage, { mealDetailsLoader } from './pages/MealDetails';
import MealEdit from './pages/MealEdit';
import MealPurpose, { addMealAction } from './pages/MealPurpose';
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
            loader: mealLoader,
          },
          {
            path: ':id',
            id: 'meal-details',
            loader: mealDetailsLoader,
            children: [
              {
                index: true,
                element: <MealDetailsPage />,
              },
              {
                path: 'edit',
                element: <MealEdit />,
              },
            ],
          },
          {
            path: 'new',
            element: <MealPurpose />,
            action: addMealAction,
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
