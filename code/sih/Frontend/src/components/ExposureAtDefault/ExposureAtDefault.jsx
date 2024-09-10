// import React, { useState } from 'react';
// import './ExposureAtDefault.css'; // Import the CSS file

// const ExposureAtDefault = () => {
//   const [formData, setFormData] = useState({
//     exposure_details: '',
//     reporter_name: '',
//     reporter_email: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send formData to server
//     console.log('Form submitted:', formData);
//     // Example of form submission with fetch (adjust URL and method as needed)
//     fetch('/exposure_at_default', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => console.log('Success:', data))
//       .catch((error) => console.error('Error:', error));
//   };

//   return (
//     <main className="exposure-at-default">
//       <h2>Exposure at Default</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="exposure_details">Exposure Details:</label>
//         <textarea
//           id="exposure_details"
//           name="exposure_details"
//           value={formData.exposure_details}
//           onChange={handleChange}
//           required
//         ></textarea>

//         <label htmlFor="reporter_name">Your Name:</label>
//         <input
//           type="text"
//           id="reporter_name"
//           name="reporter_name"
//           value={formData.reporter_name}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="reporter_email">Your Email:</label>
//         <input
//           type="email"
//           id="reporter_email"
//           name="reporter_email"
//           value={formData.reporter_email}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </main>
//   );
// };

// export default ExposureAtDefault;

import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2'; // Importing Doughnut chart from Chart.js
import './ExposureAtDefault.css'; // Import the CSS file

const ExposureAtDefault = () => {
  const [formData, setFormData] = useState({
    Market: 'false',
    OPR: 'false',
    Trade: 'false',
    Fraud: 0,
    Var1: 0,
    Var2: 'false',
    EAD1: 'false',
    EAD2: 0,
    Loan_Amount: 0,
  });
  const [riskPercentage, setRiskPercentage] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to the API with form data
    fetch('http://localhost:8009/predict/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setRiskPercentage(data.risk_percentage);
      })
      .catch((error) => console.error('Error:', error));
  };

  const getChartData = () => {
    return {
      labels: ['Risk Percentage'],
      datasets: [
        {
          data: [riskPercentage, 100 - riskPercentage],
          backgroundColor: ['#ff0037', '#EEEEEE'],
          hoverBackgroundColor: ['#ff0038', '#EEEEEE'],
        },
      ],
    };
  };

  return (
    <div className="exposure-at-default">
      <div className="chart-container">
        <h2>
          Risk Percentage
        </h2>
        <Doughnut 
          data={getChartData()} 
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }} 
        />
        <div className="risk-percentage">
          <span>{riskPercentage.toFixed(2)}%</span>
        </div>
      </div>
      <div className="form-container">
        <h2>Exposure at Default</h2>
        <form onSubmit={handleSubmit}>
          {/* Market */}
          <div className="form-group">
            <label>Market:</label>
            <div className="radio-group">
            <label>
              <input
                type="radio"
                name="Market"
                value="true"
                checked={formData.Market === 'true'}
                onChange={handleChange}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name="Market"
                value="false"
                checked={formData.Market === 'false'}
                onChange={handleChange}
              />
              False
            </label>
              </div>
            
          </div>

          {/* OPR */}
          <div className="form-group">
            <label>OPR:</label>
            <div className="radio-group">
            <label>
              <input
                type="radio"
                name="OPR"
                value="true"
                checked={formData.OPR === 'true'}
                onChange={handleChange}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name="OPR"
                value="false"
                checked={formData.OPR === 'false'}
                onChange={handleChange}
              />
              False
            </label>
              </div>
            
          </div>

          {/* Trade */}
          <div className="form-group">
            <label>Trade:</label>
            <div className="radio-group">
            <label>
              <input
                type="radio"
                name="Trade"
                value="true"
                checked={formData.Trade === 'true'}
                onChange={handleChange}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name="Trade"
                value="false"
                checked={formData.Trade === 'false'}
                onChange={handleChange}
              />
              False
            </label>
              </div>
            
          </div>

          {/* Fraud */}
          <div className="form-group">
            <label htmlFor="Fraud">Fraud:</label>
            <input
              type="number"
              id="Fraud"
              name="Fraud"
              value={formData.Fraud}
              onChange={handleChange}
            />
          </div>

          {/* Var1 */}
          <div className="form-group">
            <label htmlFor="Var1">Var1:</label>
            <input
              type="number"
              id="Var1"
              name="Var1"
              value={formData.Var1}
              onChange={handleChange}
            />
          </div>

          {/* Var2 */}
          <div className="form-group">
            <label>Var2:</label>
            <div className="radio-group">
            <label>
              <input
                type="radio"
                name="Var2"
                value="true"
                checked={formData.Var2 === 'true'}
                onChange={handleChange}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name="Var2"
                value="false"
                checked={formData.Var2 === 'false'}
                onChange={handleChange}
              />
              False
            </label>
              </div>
            
          </div>

          {/* EAD1 */}
          <div className="form-group">
            <label>EAD1:</label>
            <div className="radio-group">
            <label>
              <input
                type="radio"
                name="EAD1"
                value="true"
                checked={formData.EAD1 === 'true'}
                onChange={handleChange}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name="EAD1"
                value="false"
                checked={formData.EAD1 === 'false'}
                onChange={handleChange}
              />
              False
            </label>
              </div>
            
          </div>

          {/* EAD2 */}
          <div className="form-group">
            <label htmlFor="EAD2">EAD2:</label>
            <input
              type="number"
              id="EAD2"
              name="EAD2"
              value={formData.EAD2}
              onChange={handleChange}
            />
          </div>

          {/* Loan Amount */}
          <div className="form-group">
            <label htmlFor="Loan_Amount">Loan Amount:</label>
            <input
              type="number"
              id="Loan_Amount"
              name="Loan_Amount"
              value={formData.Loan_Amount}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ExposureAtDefault;