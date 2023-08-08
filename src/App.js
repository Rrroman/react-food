import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MealsRootLayout from './components/Layout/MealsRoot';
import RootLayout from './components/Layout/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MealPage from './pages/Meal';
import MealEdit from './pages/MealEdit';
import MealAdd from './pages/MealAdd';
import MealsPage from './pages/Meals';
import NewsletterPage from './pages/Newsletter';
import AuthenticationPage from './pages/Authentication';
import {
  authenticationAction,
  logoutAction,
  protectAuthLoader,
  tokenLoader,
} from './services/authenticationService';
import {
  mealDeleteAction,
  mealLoader,
  mealsLoader,
  saveMealAction,
} from './services/mealService';
import { newsletterAction } from './services/newsletterService';

const router = createBrowserRouter([
  {
    path: '/', // Can be removed
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
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
                loader: protectAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <MealAdd />,
            action: saveMealAction,
            loader: protectAuthLoader,
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
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
      id="root"
      loader={tokenLoader}
    >
      <Route index element={<HomePage />} />
      <Route path="meals" element={<MealsRootLayout />}>
        <Route index element={<MealsPage />} loader={mealsLoader} />
        <Route path=":id" id="meal" loader={mealLoader}>
          <Route index element={<MealPage />} action={mealDeleteAction} />
          <Route
            path="edit"
            element={<MealEdit />}
            action={saveMealAction}
            loader={protectAuthLoader}
          />
        </Route>
        <Route
          path="new"
          element={<MealAdd />}
          action={saveMealAction}
          loader={protectAuthLoader}
        />
      </Route>
      <Route
        path="auth"
        element={<AuthenticationPage />}
        action={authenticationAction}
      />
      <Route
        path="newsletter"
        element={<NewsletterPage />}
        action={newsletterAction}
      />
      <Route path="logout" action={logoutAction} />
    </Route>
  )
);

console.log(router, router2);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
