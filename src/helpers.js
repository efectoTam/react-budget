export const checkBudget = (budget, remainder) => {
  let colorClass;

  if((budget / 4) > remainder) {
    colorClass = 'alert alert-danger';
  } else if ((budget / 2) > remainder) {
    colorClass = 'alert alert-warning';
  } else {
    colorClass = "alert alert-success";
  }

  return colorClass;
}