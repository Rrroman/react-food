import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartModal, setIsCartModal] = useState(false);

  const closeCartHandler = () => setIsCartModal(false);
  const openCartHandler = () => setIsCartModal(true);

  return (
    <CartProvider>
      <div>
        {isCartModal && <Cart closeCartModal={closeCartHandler} />}
        <Header openCartModal={openCartHandler} />
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
