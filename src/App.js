import React from 'react';
import Question from './components/Question';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido contenido-principal">
          <Question />
        </div>
      </header>
    </div>
  );
}

export default App;
