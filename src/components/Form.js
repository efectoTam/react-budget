import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ saveExpense, saveCreateExpense }) => {
  const [name, saveName] = useState('');
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  // When the user add some expense
  const addExpense = e => {
    e.preventDefault();
    // Validate
    if(amount < 1 || isNaN(amount) || name.trim() === '') {
      saveError(true);
      return;
    }
    saveError(false);
    // Build the expense
    const expense = {
      name,
      amount,
      id: shortid.generate()
    }
    // Pass the expense to the main component
    saveExpense(expense);
    saveCreateExpense(true);

    // Reset form
    saveName('');
    saveAmount(0);
  }


  return (
    <form
      onSubmit={addExpense}
    >
      <h2>Agrega tus gastos aquí</h2>
      { error
       ? <Error message="Ambos campos son obligatorios o presupuesto incorrecto"/> 
       : null
      }
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. transporte"
          value={name}
          onChange={e => saveName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={amount}
          onChange={e => saveAmount(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
}
 
export default Form;