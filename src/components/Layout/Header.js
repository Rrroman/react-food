import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import CartButton from '../Cart/CartButton';
import { NavLink } from 'react-router-dom';

export default function Header({ openCartModal }) {
  return (
    <>
      <header className={classes.header}>
        <h1>Best Food!</h1>
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
        </ul>
        <CartButton openCartModal={openCartModal} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table with food" />
      </div>
    </>
  );
}
