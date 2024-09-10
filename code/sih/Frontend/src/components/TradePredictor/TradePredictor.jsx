

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './TradePredictor.css';

const TradePredictor = () => {
  const [formData, setFormData] = useState({
    cmc_rank: '',
    self_reported_circulating_supply: '',
    self_reported_market_cap: '',
    added_year: '',
    added_month: '',
    last_updated_year: '',
    last_updated_month: '',
    total_supply: '',
    circulating_supply: '',
    max_supply: '',
    num_market_pairs: '',
  });

  const [predictedPercentChange, setPredictedPercentChange] = useState(0);
  const [predictedPrice, setPredictedPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8003/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cmc_rank: parseInt(formData.cmc_rank),
        self_reported_circulating_supply: parseInt(formData.self_reported_circulating_supply),
        self_reported_market_cap: parseInt(formData.self_reported_market_cap),
        added_year: parseInt(formData.added_year),
        added_month: parseInt(formData.added_month),
        last_updated_year: parseInt(formData.last_updated_year),
        last_updated_month: parseInt(formData.last_updated_month),
        total_supply: parseFloat(formData.total_supply),
        circulating_supply: parseFloat(formData.circulating_supply),
        max_supply: parseFloat(formData.max_supply),
        num_market_pairs: parseInt(formData.num_market_pairs),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictedPercentChange(data.predicted_percent_change);
        setPredictedPrice(data.predicted_price);
      })
      .catch((error) => console.error('Error:', error));
  };

  const data = {
    labels: ['Predicted Percent Change', 'Predicted Price'],
    datasets: [
      {
        label: 'Predictions',
        data: [predictedPercentChange, predictedPrice],
        backgroundColor: [
          predictedPercentChange >= 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="trade-predictor">
      <div className="trade-predicted-info">
        <div className="chart-container">
          <h3>Statistics</h3>
          <Bar data={data}  />
        </div>
        <div className="trade-info-box">
          <h3>Predicted Percent Change</h3>
          <p className={predictedPercentChange >= 0 ? 'positive' : 'negative'}>
            {predictedPercentChange.toFixed(2)}%
          </p>
        </div>
        <div className="trade-info-box">
          <h3>Predicted Price</h3>
          <p>${predictedPrice.toFixed(2)}</p>
        </div>
      </div>

      <form className="trade-form" onSubmit={handleSubmit}>
        <h2>Trade Predictor</h2>
        <div className="form-group">
          <label htmlFor="cmc_rank">CMC Rank:</label>
          <input
            type="number"
            id="cmc_rank"
            name="cmc_rank"
            value={formData.cmc_rank}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="self_reported_circulating_supply">Self Reported Circulating Supply:</label>
          <input
            type="number"
            id="self_reported_circulating_supply"
            name="self_reported_circulating_supply"
            value={formData.self_reported_circulating_supply}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="self_reported_market_cap">Self Reported Market Cap:</label>
          <input
            type="number"
            id="self_reported_market_cap"
            name="self_reported_market_cap"
            value={formData.self_reported_market_cap}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="added_year">Added Year:</label>
          <input
            type="number"
            id="added_year"
            name="added_year"
            value={formData.added_year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="added_month">Added Month:</label>
          <input
            type="number"
            id="added_month"
            name="added_month"
            value={formData.added_month}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_updated_year">Last Updated Year:</label>
          <input
            type="number"
            id="last_updated_year"
            name="last_updated_year"
            value={formData.last_updated_year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_updated_month">Last Updated Month:</label>
          <input
            type="number"
            id="last_updated_month"
            name="last_updated_month"
            value={formData.last_updated_month}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="total_supply">Total Supply:</label>
          <input
            type="number"
            id="total_supply"
            name="total_supply"
            value={formData.total_supply}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="circulating_supply">Circulating Supply:</label>
          <input
            type="number"
            id="circulating_supply"
            name="circulating_supply"
            value={formData.circulating_supply}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="max_supply">Max Supply:</label>
          <input
            type="number"
            id="max_supply"
            name="max_supply"
            value={formData.max_supply}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="num_market_pairs">Number of Market Pairs:</label>
          <input
            type="number"
            id="num_market_pairs"
            name="num_market_pairs"
            value={formData.num_market_pairs}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TradePredictor;