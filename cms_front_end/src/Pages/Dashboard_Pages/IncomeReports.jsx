import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { FaPrint, FaShareAlt } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import '../../Style/Income_Reports.css';

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const IncomeReports = ({ incomes = [] }) => {
  const categories = [...new Set(incomes.map(income => income.category))];
  const categoryData = categories.map(category => 
    incomes.filter(income => income.category === category).reduce((sum, income) => sum + parseFloat(income.amount), 0)
  );

  const totalIncome = incomes.reduce((sum, income) => sum + parseFloat(income.amount), 0);
  const monthlyIncome = Array.from({ length: 12 }, (_, i) =>
    incomes.filter(income => new Date(income.date).getMonth() === i).reduce((sum, income) => sum + parseFloat(income.amount), 0)
  );

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Income',
        data: monthlyIncome,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: categories,
    datasets: [
      {
        label: 'Income by Category',
        data: categoryData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',   // Pink
          'rgba(54, 162, 235, 0.6)',   // Blue
          'rgba(255, 206, 86, 0.6)',   // Yellow
          'rgba(75, 192, 192, 0.6)',   // Teal
          'rgba(153, 102, 255, 0.6)',  // Purple
          'rgba(255, 159, 64, 0.6)',   // Orange
          'rgba(199, 199, 199, 0.6)',  // Grey
          'rgba(233, 30, 99, 0.6)',    // Deep Pink
          'rgba(126, 87, 194, 0.6)',   // Deep Purple
          'rgba(0, 150, 136, 0.6)'     // Dark Cyan
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(233, 30, 99, 1)',
          'rgba(126, 87, 194, 1)',
          'rgba(0, 150, 136, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const componentRef = useRef();

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Income Report',
          text: 'Check out the latest income report!',
          url: window.location.href,
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.log('Share failed', error));
    } else {
      alert('Share not supported on this browser.');
    }
  };

  return (
    <div className="income-reports">
      <div className="report-header">
        <h2 id='Income-reports'>Income Reports</h2>
        <div className="report-actions">
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-secondary">
                <FaPrint /> Print Report
              </button>
            )}
            content={() => componentRef.current}
          />
          <button className="btn btn-secondary" onClick={handleShare}>
            <FaShareAlt /> Share Report
          </button>
        </div>
      </div>
      <div ref={componentRef}>
        <div className="summary">
          <div className="summary-item">
            <h3>Total Income</h3>
            <p>Tsh{totalIncome.toFixed(2)}</p>
          </div>
          <div className="summary-item">
            <h3>Average Monthly Income</h3>
            <p>Tsh{(totalIncome / 12).toFixed(2)}</p>
          </div>
          <div className="summary-item">
            <h3>Highest Month</h3>
            <p>Tsh{Math.max(...monthlyIncome).toFixed(2)}</p>
          </div>
        </div>

        <div className="chart-container">
          <h3>Monthly Income</h3>
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: '#333',
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    color: '#333',
                  },
                  grid: {
                    color: 'rgba(200, 200, 200, 0.2)',
                  },
                },
              },
              animation: {
                duration: 1000,
              },
            }}
            height={300}
            width={600}
          />
        </div>

        <div className="chart-container">
          <h3 className='mt-5'>Income by Category</h3>
          <Pie
            data={pieData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              animation: {
                duration: 1000,
              },
            }}
            height={300}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default IncomeReports;
