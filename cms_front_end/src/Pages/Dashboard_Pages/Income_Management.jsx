import React, { useEffect } from 'react';
import { FaPlusCircle, FaChartPie, FaDonate, FaMoneyCheckAlt, FaCalendarAlt, FaBackward } from 'react-icons/fa';
import '../../Style/Income.css';
import IncomeReports from '../Dashboard_Pages/IncomeReports';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncomes, addIncome } from '../../actions/incomeActions';

const IncomeManagement = () => {
  const dispatch = useDispatch();
  const { incomes, loading, error, addIncomeLoading, addIncomeError, newIncome } = useSelector((state) => state.income);

  useEffect(() => {
    dispatch(fetchIncomes());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_NEW_INCOME', payload: { [name]: value } });
  };

  const handleAddIncome = () => {
    dispatch(addIncome(newIncome));
    dispatch({ type: 'RESET_NEW_INCOME' });
  };

  return (
    <div className="income-management">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Income Management</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="#Income-entry">
              <FaMoneyCheckAlt className="mr-2" /> Income Entry
            </a>
          </li>
          <li>
            <a href='#Income-records'>
              <FaDonate className="mr-2" /> Income Records
            </a>
          </li>
          <li>
            <a href="#Income-reports">
              <FaChartPie className="mr-2" /> Income Reports
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
        <h2 id="Income-entry">Income Entry</h2>
        <div className="income-form">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={newIncome?.date || ''}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={newIncome?.amount || ''}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={newIncome?.category || ''}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={newIncome?.description || ''}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button onClick={handleAddIncome} className="btn btn-primary">
            <FaPlusCircle className="mr-2" /> Add Income
          </button>
        </div>

        <h2 id="Income-records">Income Records</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
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
              {incomes && incomes.map((income, index) => (
                <tr key={index}>
                  <td>{income.date}</td>
                  <td>{income.amount}</td>
                  <td>{income.category}</td>
                  <td>{income.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <IncomeReports incomes={incomes} />
      </div>
    </div>
  );
};

export default IncomeManagement;
