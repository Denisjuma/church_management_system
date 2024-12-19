import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses, addExpense } from '../../actions/expenseActions';
import { FaPlusCircle, FaChartPie, FaDonate, FaMoneyCheckAlt, FaCalendarAlt, FaBackward } from 'react-icons/fa';
import '../../Style/ExpenseManagement.css';
import ExpenseReports from './ExpenseReports';
import { Link } from 'react-router-dom';

const ExpenseManagement = () => {
  const dispatch = useDispatch();
  const expenseState = useSelector((state) => state.fetchExpenses);
  const { expenses } = expenseState;

  const [newExpense, setNewExpense] = useState({ date: '', amount: '', category: '', source: '', description: '' });

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleAddExpense = () => {
    dispatch(addExpense(newExpense));
    setNewExpense({ date: '', amount: '', category: '', source: '', description: '' });
  };

  return (
    <div className="expense-management">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Expense Management</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="#Expense-Entry">
                 <FaMoneyCheckAlt className="mr-2" /> Expense Entry
            </a>
          </li>
          <li>
            <a href="#Expense-Records">
               <FaDonate className="mr-2" /> Expense Records
            </a>
          </li>
          <li>
            <a href="#Expense-Reports">
               <FaChartPie className="mr-2" /> Expense Reports
            </a>
          </li>
          <li>
            <Link to="/accountant-dashboard">
                 <FaBackward className="mr-2" /> Back
            </Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <h2 id='Expense-Entry'>Expense Entry</h2>
        <div className="expense-form">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={newExpense.date}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Source</label>
            <input
              type="text"
              name="source"
              value={newExpense.source}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={newExpense.description}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button onClick={handleAddExpense} className="btn btn-primary">
            <FaPlusCircle /> Add Expense
          </button>
        </div>

        <h2 id='Expense-Records'>Expense Records</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Source</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {expenses && expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.source}</td>
                <td>{expense.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <ExpenseReports expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpenseManagement;
