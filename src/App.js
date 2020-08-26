import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {
  //Defining state
  const [ budget, saveBudget ] = useState(0);
  const [ remainder, saveRemainder ] = useState(0);
  const [ showquestion, updateQuestion] = useState(true);
  const [ expenses, saveExpenses ] = useState([]);

  // When we add a new expense
  const addNewExpense = expense => {
    saveExpenses([
      ...expenses,
      expense
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido contenido-principal">
          { showquestion ?
            (
              <Question
                saveBudget={saveBudget}
                saveRemainder={saveRemainder}
                updateQuestion={updateQuestion}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form
                    addNewExpense={addNewExpense}
                  />
                </div>
                <div className="one-half column">
                  <List
                    expenses={expenses}
                  />
                  <BudgetControl
                    budget={budget}
                    remainder={remainder}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
