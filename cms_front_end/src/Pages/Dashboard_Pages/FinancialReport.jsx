import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { useReactToPrint } from 'react-to-print';
import {Link} from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import '../../Style/FinancialReport.css';
import { fetchIncomes } from '../../actions/incomeActions';
import { fetchExpenses} from '../../actions/expenseActions';
import { useDispatch, useSelector } from "react-redux";
import  { useState, useEffect } from "react";

const FinancialReport = () => {
  const dispatch = useDispatch();
  const { loading: incomeLoading, incomes, error: incomeError } = useSelector((state) => state.income);
  const {loading: expenseLoading, expenses, error: expenseError  }= useSelector((state) => state.fetchExpenses);


  useEffect(() => {
    dispatch(fetchIncomes());
    dispatch(fetchExpenses());
  }, [dispatch]);


  // Sample data
 /* const incomes = [
    { category: 'Donations', amount: 5000, date: '2024-01-01' },
    { category: 'Tithes', amount: 3000, date: '2024-01-05' },
    { category: 'Offerings', amount: 2000, date: '2024-01-10' },
  ];

  const expenses = [
    { category: 'Maintenance', amount: 1200, date: '2024-01-15' },
    { category: 'Utilities', amount: 600, date: '2024-01-20' },
    { category: 'Salaries', amount: 2000, date: '2024-01-25' },
    { category: 'Events', amount: 800, date: '2024-01-30' },
  ];*/

  const incomeCategories = [...new Set(incomes.map(income => income.category))];
  const expenseCategories = [...new Set(expenses.map(expense => expense.category))];

  const incomeData = incomeCategories.map(category =>
    incomes.filter(income => income.category === category).reduce((sum, income) => sum + income.amount, 0)
  );

  const expenseData = expenseCategories.map(category =>
    expenses.filter(expense => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0)
  );

  const incomeBarData = {
    labels: incomeCategories,
    datasets: [
      {
        label: 'Income by Category',
        data: incomeData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const expenseBarData = {
    labels: expenseCategories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: expenseData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const reportRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
    documentTitle: 'Financial Report',
  });

  const totalIncome = incomes.reduce((sum, income) => sum + parseFloat(income.amount), 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
  // Calculate net balance
const netBalance = totalIncome - totalExpense;

  return (
    <div className="financial-report">
        <Link to='/accountant-dashboard'>
        <button className='btn btn-dark'>Back
        </button>
        </Link>
      <h2>Financial Report</h2>
      <div className="report-header">
        <div className="summary">
          <div className="summary-item">
            <h3>Total Income</h3>
            <p>Tsh{totalIncome && totalIncome.toFixed(2)}</p>
          </div>
          <div className="summary-item">
            <h3>Total Expenses</h3>
            <p>Tsh{totalExpense.toFixed(2)}</p>
          </div>
          <div className="summary-item">
            <h3>Net Income</h3>
            <p>Tsh{netBalance.toFixed(2)}</p>
          </div>
        </div>
        <div className="actions">
          <button onClick={handlePrint} className="btn btn-primary">Print Report</button>
          <div className="share-buttons">
            <FacebookShareButton url={window.location.href} quote="Check out this financial report!">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href} title="Check out this financial report!">
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href} title="Check out this financial report!">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
      <br/>
      <div className="chart-container" ref={reportRef}>
        <div className="chart-wrapper">
          <h3>Income by Category</h3>
          <Bar data={incomeBarData} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="chart-wrapper">
          <h3>Expenses by Category</h3>
          <Bar data={expenseBarData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
     {/* <div className="table-container">
        <h3>Income Details</h3>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((income, index) => (
              <tr key={index}>
                <td>{income.category}</td>
                <td>Tsh{income}</td>
                <td>{new Date(income.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-container">
        <h3>Expense Details</h3>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.category}</td>
                <td>Tsh{expense}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>*/}
    </div>
  );
};

export default FinancialReport;
