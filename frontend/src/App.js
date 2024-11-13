import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpenses from "./components/TotalExpenses";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL || "http://localhost:5000/api/expenses"
    );
    setExpenses(response.data);
  };

  const addExpense = async (expense) => {
    const response = await axios.post(
      "http://localhost:5000/api/expenses",
      expense
    );
    setExpenses([...expenses, response.data]);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    setExpenses(expenses.filter((exp) => exp._id !== id));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-4">Personal Expense Tracker</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="col-md-6">
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
          <TotalExpenses expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
