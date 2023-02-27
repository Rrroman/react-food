import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import CartButton from '../Cart/CartButton';
import { Link, NavLink } from 'react-router-dom';
import NewsletterSignup from '../Newsletter/NewsletterSignup';

export default function Header({ openCartModal }) {
  return (
    <>
      <header className={classes.header}>
        <Link to="/meals" className={classes.logo}>
          Best Food!
        </Link>
        <ul className={classes.list}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : null
            }
          >
            {' '}
            Home{' '}
          </NavLink>
          <NavLink
            to="/meals"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : null
            }
          >
            {' '}
            Meals{' '}
          </NavLink>
          <NavLink
            to="/newsletter"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : null
            }
          >
            {' '}
            Newsletter{' '}
          </NavLink>
        </ul>
        <div className={classes.aside}>
          <NewsletterSignup />
          <CartButton openCartModal={openCartModal} />
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table with food" />
      </div>
    </>
  );
}
