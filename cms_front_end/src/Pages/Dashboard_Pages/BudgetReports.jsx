import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { useReactToPrint } from 'react-to-print';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import '../../Style/BudgetReports.css';

const BudgetReports = ({ budgets }) => {
  // Extract categories and calculate totals for each category
  const categories = [...new Set(budgets.map(budget => budget.category))];
  const categoryData = categories.map(category =>
    budgets.filter(budget => budget.category === category).reduce((sum, budget) => sum + parseFloat(budget.amount), 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Budgets by Category',
        data: categoryData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const reportRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
    documentTitle: 'Budget Report',
  });

  return (
    <div className="budget-reports">
      <h2>Budget Reports</h2>
      <div className="chart-container" ref={reportRef}>
        <Bar data={data} options={{ maintainAspectRatio: false }} />
      </div>
      <div className="actions">
        <button onClick={handlePrint} className="btn btn-secondary">Print Report</button>
        <div className="share-buttons">
          <FacebookShareButton url={window.location.href} quote="Check out this budget report!">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title="Check out this budget report!">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href} title="Check out this budget report!">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
      <div className="table-container">
        <h3 id="Budget-Details">Budget Details</h3>
        <table className="budget-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => (
              <tr key={index}>
                <td>{budget.category}</td>
                <td>{budget.description}</td>
                <td>${parseFloat(budget.amount).toFixed(2)}</td>
                <td>{new Date(budget.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetReports;
