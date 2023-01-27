import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isCartModal, setIsCartModal] = useState(false);

  const closeCartHandler = () => setIsCartModal(false);
  const openCartHandler = () => setIsCartModal(true);

  return (
    <>
      {isCartModal && <Cart closeCartModal={closeCartHandler} />}
      <Header openCartModal={openCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
