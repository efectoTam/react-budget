import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';

const BudgetControl = ({ budget, remainder}) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: $ {budget}
      </div>
      <div className={ checkBudget(budget, remainder) }>
        Restante: $ {remainder}
      </div>
    </Fragment>
  );
}
 
export default BudgetControl;