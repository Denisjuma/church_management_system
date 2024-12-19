import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { useReactToPrint } from 'react-to-print';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import '../../Style/ExpenseReports.css';

const ExpenseReports = ({ expenses = [] }) => { // Default to empty array if expenses is undefined
  const categories = [...new Set(expenses.map(expense => expense.category))];
  const categoryData = categories.map(category => 
    expenses.filter(expense => expense.category === category).reduce((sum, expense) => sum + parseFloat(expense.amount), 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
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
    documentTitle: 'Expense Report',
  });

  return (
    <div className="expense-reports">
      <h2 id='Expense-Reports'>Expense Reports</h2>
      <div className="chart-container" ref={reportRef}>
        <Bar data={data} options={{ maintainAspectRatio: false }} />
      </div>
      <div className="actions">
        <button onClick={handlePrint} className="btn btn-secondary">Print Report</button>
        <div className="share-buttons">
          <FacebookShareButton url={window.location.href} quote="Check out this expense report!">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title="Check out this expense report!">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href} title="Check out this expense report!">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default ExpenseReports;
