import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MealsRootLayout from './components/Layout/MealsRoot';
import RootLayout from './components/Layout/Root';
import { mealsLoader } from './components/Meals/AvailableMeals';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MealPage, { mealDeleteAction, mealLoader } from './pages/Meal';
import MealEdit from './pages/MealEdit';
import MealAdd from './pages/MealAdd';
import MealsPage from './pages/Meals';
import { saveMealAction } from './components/Meals/Meal/MealDetailsForm';
import NewsletterPage from './pages/Newsletter';

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
                action: saveMealAction,
              },
            ],
          },
          {
            path: 'new',
            element: <MealAdd />,
            action: saveMealAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
