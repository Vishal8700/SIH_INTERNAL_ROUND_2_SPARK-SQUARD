import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './CreditScorePredictor.css';

const CreditScorePredictor = () => {
  const [formData, setFormData] = useState({
    CollectCnt: '',
    TLSum: '',
    TLMaxSum: '',
  });

  const [predictedOutcome, setPredictedOutcome] = useState(0);
  const [probability0, setProbability0] = useState(0);
  const [probability1, setProbability1] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // The constant values
    const constants = {
      DerogCnt: 2,
      BanruptcyInd: 0,
      InqCnt06: 1,
      InqTimeLast: 3.0,
      InqFinanceCnt24: 5,
      TLTimeFirst: 10,
      TLTimeLast: 5,
      TLCnt03: 2,
      TLCnt12: 4,
      TLCnt24: 6,
      TLCnt: 12,
      TLSatCnt: 8,
      TLDel60Cnt: 0,
      TLBadCnt24: 1,
      TL75UtilCnt: 2,
      TL50UtilCnt: 2,
      TLBalHCPct: 30,
      TLSatPct: 7,
      TLDel3060Cnt24: 0,
      TLDel90Cnt24: 0,
      TLDel60CntAll: 0,
      TLOpenPct: 80,
      TLBadDerogCnt: 0,
      TLDel60Cnt24: 1,
      TLOpen24Pct: 90
    };

    // Merge form data with constants
    const requestData = {
      ...constants,
      CollectCnt: parseInt(formData.CollectCnt),
      TLSum: parseFloat(formData.TLSum),
      TLMaxSum: parseFloat(formData.TLMaxSum),
    };

    fetch('http://localhost:8007/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictedOutcome(data.predicted_outcome);
        setProbability0(data.probability_0);
        setProbability1(data.probability_1);
      })
      .catch((error) => console.error('Error:', error));
  };

  const data = {
    labels: ['Probability of Outcome 0', 'Probability of Outcome 1'],
    datasets: [
      {
        label: 'Predicted Probabilities',
        data: [probability0, probability1],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="credit-score-predictor">
      <div className="credit-predicted-info">
        <div className="chart-container">
          <h3>Predicted Probabilities</h3>
          <Bar data={data} />
        </div>
        <div className="credit-info-box">
          <h3>Predicted Outcome</h3>
          <p>{predictedOutcome === 0 ? 'Low Risk' : 'High Risk'}</p>
        </div>
        <div className="credit-info-box">
          <h3>Probability of Low Risk</h3>
          <p>{(probability0 * 100).toFixed(2)}%</p>
        </div>
        <div className="credit-info-box">
          <h3>Probability of High Risk</h3>
          <p>{(probability1 * 100).toFixed(2)}%</p>
        </div>
      </div>

      <div className="credit-form-container">
        <form className="credit-form" onSubmit={handleSubmit}>
          <h2>Credit Score Predictor</h2>
          {Object.keys(formData).map((key) => (
            <div className="credit-form-group" key={key}>
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').trim()}:</label>
              <input
                type="number"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className='credit-button'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreditScorePredictor;