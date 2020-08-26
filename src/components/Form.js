import React, { useState } from 'react';

const Form = () => {
  const [name, saveName] = useState('');
  const [amount, saveAmount] = useState(0);

  // When the user add some expense
  const addExpense = e => {
    e.preventDefault();
    // Validate

    // Build the expense

    // Pass the expense to the main component
  }


  return (
    <form
      onSubmit={addExpense}
    >
      <h2>Agrega tus gastos aquí</h2>
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