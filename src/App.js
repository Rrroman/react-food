import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MealsRootLayout from './components/Layout/MealsRoot';
import RootLayout from './components/Layout/Root';
import { mealLoader } from './components/Meals/AvailableMeals';
import { mealDetailsLoader } from './components/Meals/Meal/MealDetails';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MealDetailsPage from './pages/MealDetails';
import MealEdit from './pages/MealEdit';
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
            element: <MealDetailsPage />,
            loader: mealDetailsLoader,
          },
          {
            path: ':id/edit',
            element: <MealEdit />,
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
