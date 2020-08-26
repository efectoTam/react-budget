import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ saveBudget, saveRemainder, updateQuestion}) => {

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
    saveRemainder(amount);
    updateQuestion(false);
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

Question.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemainder: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired
}

export default Question;