import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm({meal}) {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
}

export default MealItemForm;
