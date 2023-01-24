import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import CartButton from '../Cart/CartButton';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>The most delicious food is here!</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table with food" />
      </div>
    </>
  );
}
