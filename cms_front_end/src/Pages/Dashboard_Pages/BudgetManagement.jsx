import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlusCircle, FaChartPie, FaMoneyCheckAlt, FaCalendarAlt, FaBackward } from 'react-icons/fa';
import '../../Style/BudgetManagement.css';
import BudgetReports from './BudgetReports';
import { Link } from 'react-router-dom';
import { fetchBudgets, addBudget } from '../../actions/budgetAction';

const BudgetManagement = () => {
  const dispatch = useDispatch();
  const { budgets, loading, error, addBudgetLoading, addBudgetError, newBudget } = useSelector(state => state.budget);
  const [localNewBudget, setLocalNewBudget] = useState(newBudget);

  useEffect(() => {
    dispatch(fetchBudgets());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalNewBudget({ ...localNewBudget, [name]: value });
  };

  const handleAddBudget = () => {
    const parsedBudget = {
      ...localNewBudget,
      amount: parseFloat(localNewBudget.amount) || 0, // Ensure amount is a number
    };
    dispatch(addBudget(parsedBudget));
    setLocalNewBudget({ date: '', amount: '', category: '', description: '' });
  };

  return (
    <div className="budget-management">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Budget Management</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="#Budget-Entry">
              <FaMoneyCheckAlt className="mr-2" /> Budget Entry
            </a>
          </li>
          <li>
            <a href="#Budget-Reports">
              <FaChartPie className="mr-2" /> Budget Reports
            </a>
          </li>
          <li>
            <a href="#Budget-Details">
              <FaCalendarAlt className="mr-2" /> Budgets Details
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
        <h2 id='Budget-Entry'>Budget Entry</h2>
        {addBudgetLoading && <p>Loading...</p>}
        {addBudgetError && <p>Error: {addBudgetError}</p>}
        <div className="budget-form">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={localNewBudget.date}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={localNewBudget.amount}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={localNewBudget.category}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={localNewBudget.description}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button onClick={handleAddBudget} className="btn btn-primary">
            <FaPlusCircle /> Add Budget
          </button>
        </div>

        <h2 id='Budget-Reports'>Budget Records</h2>
        {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((budget, index) => (
                <tr key={index}>
                  <td>{budget.date}</td>
                  <td>{budget.amount}</td>
                  <td>{budget.category}</td>
                  <td>{budget.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Include the Budget Reports component */}
        <BudgetReports budgets={budgets} />
      </div>
    </div>
  );
};

export default BudgetManagement;
