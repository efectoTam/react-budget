import React, { useState, useEffect } from 'react';
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
  const [ expense, saveExpense ] = useState({});
  const [ createexpense, saveCreateExpense ] = useState(false);

  // UseEffect update remainder
  useEffect(() => {
    if(createexpense) {

      // Add new budget
      saveExpenses([
        ...expenses,
        expense
      ]);
      // Take from the budget
      const budgetRemainder = remainder - expense.amount;
      saveRemainder(budgetRemainder);

      //Reset to false
      saveCreateExpense(false);
    }
  }, [expense]);

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
                    saveExpense={saveExpense}
                    saveCreateExpense={saveCreateExpense}
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
