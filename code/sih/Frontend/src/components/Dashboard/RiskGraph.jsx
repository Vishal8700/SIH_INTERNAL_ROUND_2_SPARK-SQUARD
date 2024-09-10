// RiskGraph.js
import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  registerables // This imports all the necessary components
} from 'chart.js';

// Register all components
ChartJS.register(...registerables);

const RiskGraph = ({ data }) => {
  // Check if data is valid
  if (!Array.isArray(data) || data.length === 0) {
    return <div style={{ padding: '20px', color: '#ff0000' }}>No data available to display.</div>;
  }

  const chartData = {
    labels: data.map(point => point.label),
    datasets: [
      {
        label: 'Risk Level',
        data: data.map(point => point.value),
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderWidth: 2,
        fill: true, // Fill the area under the line
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
          text: 'Risk Level',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="risk-graph-container" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ color: '#333' }}>Risk Graph</h2>
      <div style={{ height: '400px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

// Prop Types
RiskGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RiskGraph;