import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsRootLayout from './components/Layout/ProductsRoot';
import RootLayout from './components/Layout/Root';
import { mealLoader } from './components/Meals/AvailableMeals';
import { mealDetailsLoader } from './components/Meals/MealItem/MealItemDetails';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailsPage from './pages/ProductDetails';
import ProductsPage from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'products',
        element: <ProductsRootLayout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: mealLoader,
          },
          {
            path: ':id',
            element: <ProductDetailsPage />,
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
