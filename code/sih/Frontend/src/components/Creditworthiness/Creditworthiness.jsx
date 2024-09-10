import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2'; // Importing Doughnut chart from Chart.js
import './Creditworthiness.css'; // Import the CSS file

const Creditworthiness = () => {
  const [formData, setFormData] = useState({
    loan_repayment: 'On-Time',
    default_risk_pred: 0,
    fraud_detected: 0,
    trade_predictor: 0,
  });
  const [clientRisk, setClientRisk] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to the API with form data
    fetch('http://localhost:8012/predict/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setClientRisk(data.client_risk);
      })
      .catch((error) => console.error('Error:', error));
  };

  const getChartData = () => {
    return {
      labels: ['Client Risk', 'Remaining'],
      datasets: [
        {
          data: [clientRisk, 100 - clientRisk],
          backgroundColor: ['#ff0037', '#EEEEEE'],
          hoverBackgroundColor: ['#ff0039', '#EEEEEE'],
        },
      ],
    };
  };

  return (
    <div className="creditworthiness">
      <div className="chart-container">
        <Doughnut 
          data={getChartData()} 
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }} 
        />
        <div className="client-risk">
          <span>{clientRisk.toFixed(2)}%</span>
        </div>
      </div>
      <div className="form-container">
        <h2>Client at Risk Finder</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Loan Repayment:</label>
            <div className="radio-group">
            <label>
              <input
                type="radio"
                name="loan_repayment"
                value="On-Time"
                checked={formData.loan_repayment === 'On-Time'}
                onChange={handleChange}
              />
              On-Time
            </label>
            <label>
              <input
                type="radio"
                name="loan_repayment"
                value="Late"
                checked={formData.loan_repayment === 'Late'}
                onChange={handleChange}
              />
              Late
            </label>
            <label>
              <input
                type="radio"
                name="loan_repayment"
                value="Defaulted"
                checked={formData.loan_repayment === 'Defaulted'}
                onChange={handleChange}
              />
              Defaulted
            </label>
              </div>
            
          </div>

          <div className="form-group">
            <label htmlFor="default_risk_pred">Default Risk Prediction:</label>
            <input
              type="number"
              id="default_risk_pred"
              name="default_risk_pred"
              value={formData.default_risk_pred}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fraud_detected">Fraud Detected:</label>
            <input
              type="number"
              id="fraud_detected"
              name="fraud_detected"
              value={formData.fraud_detected}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="trade_predictor">Trade Predictor:</label>
            <input
              type="number"
              id="trade_predictor"
              name="trade_predictor"
              value={formData.trade_predictor}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Creditworthiness;