import React, { useEffect, useRef, useState } from 'react';
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { getTokenDuration } from '../../services/authenticationService';
import CartProvider from '../../store/CartProvider';
import Cart from '../Cart/Cart';
import Header from './Header';
import classes from './Root.module.css';

const RootLayout = () => {
  const navigation = useNavigation();
  const [isCartModal, setIsCartModal] = useState(false);
  const loadingRef = useRef(null);
  const token = useLoaderData();
  const submit = useSubmit();

  const closeCartHandler = () => setIsCartModal(false);
  const openCartHandler = () => setIsCartModal(true);

  useEffect(() => {
    if (!token) {
      return () => null;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'POST' });
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'POST' });
    }, tokenDuration);
  }, [token, submit]);

  // Old way to show loading, it will appear at the top of the page
  // after clicking few time on the Meals link
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
