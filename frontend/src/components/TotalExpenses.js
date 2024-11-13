import React from "react";

const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  return (
    <div className="card text-center mt-4">
      <div className="card-body">
        <h5 className="card-title">Total Expenses</h5>
        <p className="card-text">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TotalExpenses;
