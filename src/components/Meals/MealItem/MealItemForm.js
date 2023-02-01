import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm({ meal, onAddToCart }) {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const amountText = amountInputRef.current.value;
    const amountNumber = +amountText;

    if (amountNumber > 3 || amountNumber < 1 || !amountText.trim().length) {
      setIsValid(false);
      return;
    }

    onAddToCart(amountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: 'amount' + meal.id,
          type: 'number',
          min: '1',
          max: '3',
          step: '1',
          defaultValue: '1',
        }}
        label="Amount"
      />
      <button>+ Add</button>
      {!isValid && <p>Is not valid amount. Min 1, max 3</p>}
    </form>
  );
}

export default MealItemForm;
