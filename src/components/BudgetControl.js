import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';
import PropTypes from 'prop-types';

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

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remainder: PropTypes.number.isRequired
}
 
export default BudgetControl;