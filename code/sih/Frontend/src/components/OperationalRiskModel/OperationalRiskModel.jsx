// import React, { useState } from 'react';
// import './OperationalRiskModel.css'; // Import the CSS file

// const OperationalRiskModel = () => {
//   const [formData, setFormData] = useState({
//     risk_details: '',
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
//     fetch('/operational_risk_model', {
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
//     <main className="operational-risk-model">
//       <h2>Operational Risk Model</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="risk_details">Risk Details:</label>
//         <textarea
//           id="risk_details"
//           name="risk_details"
//           value={formData.risk_details}
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

// export default OperationalRiskModel;
import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons from react-icons
import './OperationalRiskModel.css'; // Import the CSS file

const OperationalRiskModel = () => {
  const [features, setFeatures] = useState([0, 0, 0]); // Default features
  const [popupMessage, setPopupMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState(''); // To determine the type of popup

  const handleFeatureChange = (e, index) => {
    const newFeatures = [...features];
    newFeatures[index] = parseFloat(e.target.value);
    setFeatures(newFeatures);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle prediction
    fetch('http://localhost:8001/predict_operational_risk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ features }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(predictionData => {
        if (predictionData.prediction[0] === 1) {
          setPopupMessage('Safe');
          setPopupType('safe');
        } else {
          setPopupMessage('Unsafe');
          setPopupType('danger');
        }
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 5000); // Hide popup after 5 seconds
      })
      .catch(error => console.error('Error fetching prediction:', error));
  };

  return (
    <main className="operational-risk-model">
      <h2>Operational Risk Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feature_1">Years</label>
          <input
            type="number"
            id="feature_1"
            value={features[0]}
            onChange={(e) => handleFeatureChange(e, 0)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feature_2">Months</label>
          <input
            type="number"
            id="feature_2"
            value={features[1]}
            onChange={(e) => handleFeatureChange(e, 1)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feature_3">NPA to Advance Ratio</label>
          <input
            type="number"
            id="feature_3"
            value={features[2]}
            onChange={(e) => handleFeatureChange(e, 2)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {popupVisible && (
        <div className={`popup ${popupType}`}>
          {popupType === 'safe' ? <FaCheckCircle className="popup-icon" /> : <FaTimesCircle className="popup-icon" />}
          <p>{popupMessage}</p>
        </div>
      )}
    </main>
  );
};

export default OperationalRiskModel;
