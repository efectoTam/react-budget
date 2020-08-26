import React, { Fragment } from 'react';

const BudgetControl = ({ budget, remainder}) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: $ {budget}
      </div>
      <div className="alert ">
        Restante: $ {remainder}
      </div>
    </Fragment>
  );
}
 
export default BudgetControl;