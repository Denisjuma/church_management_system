import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaSignOutAlt, FaArrowUp, FaCalendarCheck, FaCashRegister, FaArrowDown, FaDollarSign, FaFileInvoiceDollar, FaMoneyBillWave, FaChartPie, FaClipboardList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchFinancialReport } from "../actions/reportActions";
import { fetchIncomes } from "../actions/incomeActions";
import { fetchExpenses} from '../actions/expenseActions';
import { Collapse } from "bootstrap";
import "./FinancialSummary.css";
import "./AdminDashboard.css";
import { logout } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

const AccountantDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading: reportLoading, report, error: reportError } = useSelector((state) => state.reports);
  const { loading: incomeLoading, incomes, error: incomeError } = useSelector((state) => state.income);
  const {loading: expenseLoading, expenses, error: expenseError  }= useSelector((state) => state.fetchExpenses);
 


  useEffect(() => {
    dispatch(fetchFinancialReport());
    dispatch(fetchIncomes());
    dispatch(fetchExpenses());
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const collapseElement = document.getElementById("collapseWidthExample");
    if (collapseElement) {
      new Collapse(collapseElement);
    }
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');  // Redirect to login page
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    const collapseElement = document.getElementById("collapseWidthExample");
    if (collapseElement) {
      const collapse = Collapse.getInstance(collapseElement);
      collapse.toggle();
    }
  };

  const totalIncome = incomes.reduce((sum, income) => sum + parseFloat(income.amount), 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
  // Calculate net balance
const netBalance = totalIncome - totalExpense;

  return (
    <>
      <div id="wrapper" className={sidebarOpen ? "toggled" : ""}>
        <center>
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Accountant <br /> Dashboard</h3>
            </div>
            <hr />
            <ul className="list-unstyled components">

            <li>
               <Link to="#">
               <FaDollarSign className="mr-2" /> Financial Summary
               </Link>
          </li>


            <li>
                <Link to="/income-management">
                  <FaFileInvoiceDollar className="mr-2" /> Income Management
                </Link>
              </li>
            
              <li>
                <Link to="/expense-management">
                  <FaMoneyBillWave className="mr-2" /> Expense Management
                </Link>
              </li>
              <li>
                <Link to="/budget-management">
                  <FaChartPie className="mr-2" /> Budget Management
                </Link>
              </li>
              <li>
                <Link to="/financial-reports">
                  <FaClipboardList className="mr-2" /> Financial Reports
                </Link>
              </li>
              <li>
                <Link to="/donation-management">
                  <FaCashRegister className="mr-2" /> Donation Management
                </Link>
              </li>
              
              <li>
                <button className="mr-2 btn btn-secondary" onClick={logoutHandler}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </ul>
          </nav>
        </center>
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="btn btn-info"
                id="sidebarCollapse"
                type="button"
                onClick={handleSidebarToggle}
              >
                <FaBars />
              </button>
              <p className="text-secondary">
                <FaUser /> bety
              </p>
            </div>
          </nav>

          <div className="container-fluid">
            <div className="financial-summary">
              <div className="summary-cards">
                {/* Total Income Card */}
                <div className="card bg-success text-white mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Total Income</h3>
                    {incomeLoading ? (
                      <p>Loading...</p>
                    ) : incomeError ? (
                      <p className="text-danger">{incomeError}</p>
                    ) : (
                      <p className="card-text">Tsh {totalIncome.toFixed(2)}</p>
                    )}
                  </div>
                </div>
                {/* Total Expenses Card */}
                <div className="card bg-danger text-white mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Total Expenses</h3>
                    {expenseLoading ? (
                      <p>Loading...</p>
                    ) : expenseError ? (
                      <p className="text-danger">{expenseError}</p>
                    ) : (
                      <p className="card-text">Tsh {totalExpense.toFixed(2)}</p>
                    )}
                  </div>
                </div>
                {/* Net Balance Card */}
                <div className={`card ${netBalance >= 0 ? "bg-primary" : "bg-warning"} text-white mb-4`}>
                  <div className="card-body">
                    <h3 className="card-title">Net Balance</h3>
                    <p className="card-text">
                      Tsh {netBalance.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              {/* Cash Flow Chart */}
             {/* <div className="cash-flow-chart">
                <h4>Cash Flow</h4>*/}
                {/* Placeholder for chart component */}
               {/* <div>Cash flow chart goes here</div>
              </div>*/}
              {/* Recent Transactions */}
             {/* <div className="recent-transactions">
                <h4>Recent Transactions</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report && report.recentTransactions && report.recentTransactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount ? transaction.amount.toFixed(2) : 0}</td>
                        <td>
                          {transaction.type === "income" ? (
                            <span className="text-success">
                              <FaArrowUp /> Income
                            </span>
                          ) : (
                            <span className="text-danger">
                              <FaArrowDown /> Expense
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                  </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountantDashboard;
