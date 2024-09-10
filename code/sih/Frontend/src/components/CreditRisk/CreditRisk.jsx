// import React, { useState } from 'react';
// import './CreditRisk.css'; // Import the CSS file

// const CreditRisk = () => {
//   const [formData, setFormData] = useState({
//     credit_details: '',
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
//     fetch('/credit_risk_model', {
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
//     <main className="credit-risk">
//       <h2>Credit Risk Model</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="credit_details">Credit Details:</label>
//         <textarea
//           id="credit_details"
//           name="credit_details"
//           value={formData.credit_details}
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

// export default CreditRisk;
import React, { useState } from 'react';
import './CreditRisk.css';
import { useSpring, animated } from 'react-spring';

const CreditRisk = () => {
  const [formData, setFormData] = useState({
    LIMIT_BAL: '',
    SEX: '',
    EDUCATION: '',
    MARRIAGE: '',
    AGE: '',
    PAY_1: '',
    PAY_2: '',
    PAY_3: '',
    PAY_4: '',
    PAY_5: '',
    PAY_6: '',
    BILL_AMT1: '',
    BILL_AMT2: '',
    BILL_AMT3: '',
    BILL_AMT4: '',
    BILL_AMT5: '',
    BILL_AMT6: '',
    PAY_AMT1: '',
    PAY_AMT2: '',
    PAY_AMT3: '',
    PAY_AMT4: '',
    PAY_AMT5: '',
    PAY_AMT6: '',
  });

  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8006/predict/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setResponseData(data);
      })
      .catch((error) => console.error('Error:', error));
  };

  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="credit-risk">
      <h2>Credit Risk Model</h2>
      <animated.div style={animationProps}>
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="left-section">
            <h3 style={{ textAlign: 'center', color:'#ff6726'}}>Enter Your Basic Details</h3>
              <div className="form-group">
                <label htmlFor="LIMIT_BAL">Limit Balance:</label>
                <input
                  type="number"
                  id="LIMIT_BAL"
                  name="LIMIT_BAL"
                  value={formData.LIMIT_BAL}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="SEX">Sex (1=Male, 2=Female):</label>
                <input
                  type="number"
                  id="SEX"
                  name="SEX"
                  value={formData.SEX}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="EDUCATION">Education (1-4):</label>
                <input
                  type="number"
                  id="EDUCATION"
                  name="EDUCATION"
                  value={formData.EDUCATION}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="MARRIAGE">Marriage Status (1=Married, 2=Single):</label>
                <input
                  type="number"
                  id="MARRIAGE"
                  name="MARRIAGE"
                  value={formData.MARRIAGE}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="AGE">Age:</label>
                <input
                  type="number"
                  id="AGE"
                  name="AGE"
                  value={formData.AGE}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="right-section">
              <h3 style={{ textAlign: 'center', color:'#ff6726'}}>Payment Status, Bill Amounts, and Payment Amounts</h3>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="input-row">
                  <div className="input-column">
                    <label htmlFor={`PAY_${i}`}>PAY_{i}:</label>
                    <input
                      type="number"
                      id={`PAY_${i}`}
                      name={`PAY_${i}`}
                      value={formData[`PAY_${i}`]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-column">
                    <label htmlFor={`BILL_AMT${i}`}>BILL_AMT{i}:</label>
                    <input
                      type="number"
                      id={`BILL_AMT${i}`}
                      name={`BILL_AMT${i}`}
                      value={formData[`BILL_AMT${i}`]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-column">
                    <label htmlFor={`PAY_AMT${i}`}>PAY_AMT{i}:</label>
                    <input
                      type="number"
                      id={`PAY_AMT${i}`}
                      name={`PAY_AMT${i}`}
                      value={formData[`PAY_AMT${i}`]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        {responseData && (
          <div className="response">
            <h3>Response:</h3>
            <p>Prediction: {responseData.prediction}</p>
            <p>EAD (Amount Remaining): {responseData.ead}</p>
            <p>{responseData.prediction === 1 ? 'User will pay all payments (Good Credit Score)' : 'User will not pay (Bad Credit Score)'}</p>
          </div>
        )}
      </animated.div>
    </div>
  );
};

export default CreditRisk;