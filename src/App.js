import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MealsRootLayout from './components/Layout/MealsRoot';
import RootLayout from './components/Layout/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MealPage from './pages/Meal';
import {
  mealDeleteAction,
  mealLoader,
  mealsLoader,
  saveMealAction,
} from './services/mealService';
import MealEdit from './pages/MealEdit';
import MealAdd from './pages/MealAdd';
import MealsPage from './pages/Meals';
import NewsletterPage from './pages/Newsletter';
import { newsletterAction } from './services/newsletterService';
import AuthenticationPage from './pages/Authentication';
import { authenticationAction } from './services/authenticationService';

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
        path: 'auth',
        element: <AuthenticationPage />,
        action: authenticationAction,
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
