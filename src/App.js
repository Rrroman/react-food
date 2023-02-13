import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/RootLayout';
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
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
