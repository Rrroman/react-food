import React from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>The most delicious food is here!</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="Table with food" />
      </div>
    </>
  );
}
