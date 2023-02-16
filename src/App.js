import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/Root';
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
        loader: async () => {
          const response = await fetch('http://localhost:8080/products');
          if (!response.ok) {
            throw new Error('Something went wrong!', response);
          } else {
            const data = await response.json();
            return data.products;
          }
        },
      },
      { path: 'products/:id', element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
