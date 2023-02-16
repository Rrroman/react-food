import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import CartProvider from '../../store/CartProvider';
import Cart from '../Cart/Cart';
import Header from './Header';
import classes from './Root.module.css';

const RootLayout = () => {
  const navigation = useNavigation();
  const [isCartModal, setIsCartModal] = useState(false);
  const loadingRef = useRef(null);

  const closeCartHandler = () => setIsCartModal(false);
  const openCartHandler = () => setIsCartModal(true);

  useEffect(() => {
    let animationTimeout;
    if (navigation.state === 'loading') {
      animationTimeout = setTimeout(() => {
        if (loadingRef.current) {
          loadingRef.current.style.opacity = 1;
        }
      }, 0);
    } else {
      if (loadingRef.current) {
        loadingRef.current.style.opacity = 0;
      }
    }

    return () => clearTimeout(animationTimeout);
  }, [navigation.state]);

  return (
    <CartProvider>
      <div className={classes.loading} ref={loadingRef}>
        Loading...
      </div>
      {isCartModal && <Cart closeCartModal={closeCartHandler} />}
      <Header openCartModal={openCartHandler} />
      <main>
        <Outlet />
      </main>
    </CartProvider>
  );
};

export default RootLayout;
