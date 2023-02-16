import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CartProvider from '../../store/CartProvider';
import Cart from '../Cart/Cart';
import Header from './Header';

const RootLayout = () => {
  const [isCartModal, setIsCartModal] = useState(false);

  const closeCartHandler = () => setIsCartModal(false);
  const openCartHandler = () => setIsCartModal(true);

  return (
    <CartProvider>
      {isCartModal && <Cart closeCartModal={closeCartHandler} />}
      <Header openCartModal={openCartHandler} />
      <main>
        <Outlet />
      </main>
    </CartProvider>
  );
};

export default RootLayout;
