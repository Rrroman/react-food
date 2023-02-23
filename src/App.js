import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MealsRootLayout from './components/Layout/MealsRoot';
import RootLayout from './components/Layout/Root';
import { mealLoader } from './components/Meals/AvailableMeals';
import { mealDetailsLoader } from './components/Meals/MealItem/MealItemDetails';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MealDetailsPage from './pages/MealDetails';
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
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
