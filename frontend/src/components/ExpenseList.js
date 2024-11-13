import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <ul className="list-group mb-4">
      {expenses.map((expense) => (
        <li
          key={expense._id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>{expense.title}</strong> - ${expense.amount} on{" "}
            {new Date(expense.date).toLocaleDateString()}
          </div>
          <button
            onClick={() => deleteExpense(expense._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
