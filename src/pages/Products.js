import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Cart from '../components/Cart/Cart';
import Meals from '../components/Meals/Meals';
import CartProvider from '../store/CartProvider';

export const ProductsPage = () => {
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
};

export default ProductsPage;
