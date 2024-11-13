const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// GET all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new expense
router.post("/", async (req, res) => {
  const { title, amount, date } = req.body;
  if (!title || !amount || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const expense = new Expense({ title, amount, date });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE an expense by ID
router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
