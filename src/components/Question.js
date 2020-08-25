import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = ( {saveBudget, saveRemaining}) => {

  // Define state
  const [ amount, saveAmount ] = useState(0);
  const [ error, saveError ] = useState(false);

  // Function that read budget
  const defineBudget = e => {
    saveAmount(parseInt(e.target.value));
  }

  // Submit to define the budget
  const addBudget = e => {
    e.preventDefault();

    // Validate
    if(amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }

    // If validate is ok
    saveError(false);
    saveBudget(amount);
    saveRemaining(amount);
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error
      ? <Error
          message="El presupuesto es incorrecto"
        />
      : null
      }
      <form
        onSubmit={addBudget}
      >
        <input 
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
}

export default Question;