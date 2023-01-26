import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isCartModal, setIsCartModal] = useState(true);
  return (
    <>
      <Cart isCartModal={isCartModal} setIsCartModal={setIsCartModal}/>
      <Header setIsCartModal={setIsCartModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
