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
        <nav className={classes.list}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${classes.link} ${classes.active}` : null
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meals"
                className={({ isActive }) =>
                  isActive ? `${classes.link} ${classes.active}` : null
                }
              >
                Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newsletter"
                className={({ isActive }) =>
                  isActive ? `${classes.link} ${classes.active}` : null
                }
              >
                Newsletter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? `${classes.link} ${classes.active}` : null
                }
              >
                Authentication
              </NavLink>
            </li>
          </ul>
        </nav>
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
