import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import CartButton from '../Cart/CartButton';
import { Link } from 'react-router-dom';

export default function Header({ openCartModal }) {
  return (
    <>
      <header className={classes.header}>
        <h1>Best Food!</h1>
        <ul className={classes.list}>
          <Link to="/" className={classes.link}>
            {' '}
            Home{' '}
          </Link>
          <Link to="/products" className={classes.link}>
            {' '}
            Products{' '}
          </Link>
        </ul>
        <CartButton openCartModal={openCartModal} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table with food" />
      </div>
    </>
  );
}
