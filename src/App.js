import React, { useState } from 'react';
import Question from './components/Question';

function App() {
  //Defining state
  const [ budget, saveBudget ] = useState(0);
  const [ remaining, saveRemaining ] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido contenido-principal">
          <Question
            saveBudget={saveBudget}
            saveRemaining={saveRemaining}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
