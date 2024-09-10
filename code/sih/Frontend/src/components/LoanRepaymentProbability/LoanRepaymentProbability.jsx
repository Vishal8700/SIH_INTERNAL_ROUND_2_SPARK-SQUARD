

import React, { useState } from 'react';
import './LoanRepaymentProbability.css'; // Import the CSS file

const LoanRepaymentProbability = () => {
  const [formData, setFormData] = useState({
    age: '',
    dependents: '',
    work_experience: '',
    income: '',
    credit_score: '',
    credit_utilization: '',
    open_credit_accounts: '',
    loan_amount: '',
    loan_term: '',
    interest_rate: '',
    dti_ratio: '',
    savings: '',
    investments: '',
    monthly_expenses: '',
    collateral_value: ''
  });

  const [repaymentStatus, setRepaymentStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8005/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setRepaymentStatus(data.repayment_status);
        setShowPopup(true);
        
        // Hide popup after 5 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      })
      .catch((error) => console.error('Error:', error));
  };

  // Determine the popup class based on repayment status
  const getPopupClass = () => {
    switch (repaymentStatus) {
      case "Defaulted":
        return "popup defaulted"; // Red for defaulted
      case "Late":
        return "popup late"; // Yellow for late
      case "On-Time":
        return "popup on-time"; // Green for on-time
      default:
        return "popup"; // Default class
    }
  };

  return (
    <main className="loan-repayment-probability">
      <h2>Loan Repayment Probability</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-column">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <label htmlFor="dependents">Dependents:</label>
            <input
              type="number"
              id="dependents"
              name="dependents"
              value={formData.dependents}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-column">
            <label htmlFor="work_experience">Work Experience (Years):</label>
            <input
              type="number"
              id="work_experience"
              name="work_experience"
              value={formData.work_experience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <label htmlFor="income">Income:</label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-column">
            <label htmlFor="credit_score">Credit Score:</label>
            <input
              type="number"
              id="credit_score"
              name="credit_score"
              value={formData.credit_score}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <label htmlFor="credit_utilization">Credit Utilization (%):</label>
            <input
              type="number"
              id="credit_utilization"
              name="credit_utilization"
              value={formData.credit_utilization}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-column">
            <label htmlFor="open_credit_accounts">Open Credit Accounts:</label>
            <input
              type="number"
              id="open_credit_accounts"
              name="open_credit_accounts"
              value={formData.open_credit_accounts}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <label htmlFor="loan_amount">Loan Amount:</label>
            <input
              type="number"
              id="loan_amount"
              name="loan_amount"
              value={formData.loan_amount}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-column">
            <label htmlFor="loan_term">Loan Term (Months):</label>
            <input
              type="number"
              id="loan_term"
              name="loan_term"
              value={formData.loan_term}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <label htmlFor="interest_rate">Interest Rate (%):</label>
            <input
              type="number"
              id="interest_rate"
              name="interest_rate"
              value={formData.interest_rate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-column">
            <label htmlFor="dti_ratio">DTI Ratio (%):</label>
            <input
              type="number"
              id="dti_ratio"
              name="dti_ratio"
              value={formData.dti_ratio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <label htmlFor="savings">Savings:</label>
            <input
              type="number"
              id="savings"
              name="savings"
              value={formData.savings}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-column">
            <label htmlFor="investments">Investments:</label>
            <input
              type="number"
              id="investments"
              name="investments"
              value={formData.investments}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <label htmlFor="monthly_expenses">Monthly Expenses:</label>
            <input
              type="number"
              id="monthly_expenses"
              name="monthly_expenses"
              value={formData.monthly_expenses}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-column">
            <label htmlFor="collateral_value">Collateral Value:</label>
            <input
              type="number"
              id="collateral_value"
              name="collateral_value"
              value={formData.collateral_value}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" id='btn'>Submit</button>
      </form>

      {showPopup && (
        <div className={getPopupClass()}>
          <p>Repayment Status: {repaymentStatus}</p>
        </div>
      )}
    </main>
  );
};

export default LoanRepaymentProbability;