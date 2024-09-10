// RiskMatrix.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  registerables,
} from 'chart.js';

// Register all components
ChartJS.register(...registerables);

const RiskMatrix = ({ trendData }) => {
  const chartData = {
    labels: trendData.map(point => point.label),
    datasets: [
      {
        label: 'Trend Level',
        data: trendData.map(point => point.value),
        borderColor: '#007BFF',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Trend Level',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="risk-matrix-container" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ color: '#333' }}>Risk Matrix</h2>
      <div style={{ height: '400px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default RiskMatrix;