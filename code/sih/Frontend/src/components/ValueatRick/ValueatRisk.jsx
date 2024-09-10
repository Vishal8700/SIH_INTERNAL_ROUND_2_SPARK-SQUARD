
import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2'; // Importing Line chart from Chart.js
import './ValueAtRiskModel.css'; // Import the CSS file

const ValueAtRiskModel = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [varData, setVarData] = useState({}); // State to store VaR data
  const [loading, setLoading] = useState(false); // State to manage loading

  const fetchVarData = useCallback(async () => {
    if (!startDate || !endDate) return; // Prevent fetching if dates are not set
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8008/predict_var/?ticker=MSFT&start_date=${startDate}&end_date=${endDate}`);
      const data = await response.json();
      setVarData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [startDate, endDate]); // Include startDate and endDate as dependencies

  useEffect(() => {
    fetchVarData(); // Fetch data when startDate or endDate changes
  }, [fetchVarData]);

  const getChartData = () => {
    const labels = Object.keys(varData['1%'] || {});
    const data1 = Object.values(varData['1%'] || {});
    const data5 = Object.values(varData['5%'] || {});
    const data10 = Object.values(varData['10%'] || {});

    return {
      labels,
      datasets: [
        {
          label: '1% VaR',
          data: data1,
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: false,
        },
        {
          label: '5% VaR',
          data: data5,
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: false,
        },
        {
          label: '10% VaR',
          data: data10,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        },
      ],
    };
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else if (name === 'endDate') {
      setEndDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVarData(); // Fetch data when the form is submitted
  };

  return (
    <main className="value-at-risk-model">
      <div className="chart-container">
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <Line data={getChartData()} />
        )}
      </div>
      <div className="form-container">
        <h2>Value at Risk Model</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleDateChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default ValueAtRiskModel;