import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/Root';
import { mealLoader } from './components/Meals/AvailableMeals';
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
        element: <ProductsPage />,
        loader: mealLoader,
      },
      { path: 'products/:id', element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
