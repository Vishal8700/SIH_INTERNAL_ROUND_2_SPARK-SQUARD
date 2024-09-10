// import React, { useState } from 'react';
// import './MarketRiskModel.css'; // Import the CSS file

// const MarketRiskModel = () => {
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
//     fetch('/market_risk_model', {
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
//     <main className="market-risk-model">
//       <h2>Market Risk Model</h2>
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

// export default MarketRiskModel;
import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons from react-icons
import './MarketRiskModel.css'; // Import the CSS file

const MarketRiskModel = () => {
    const [features, setFeatures] = useState({
        feature1: '',
        feature2: '',
        feature3: '',
        feature4: '',
        feature5: '',
        feature6: '',
    });

    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupType, setPopupType] = useState(''); // To determine the type of popup

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeatures({ ...features, [name]: parseFloat(value) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Combine user-provided features with hardcoded ones
        const allFeatures = [
            features.feature1,
            features.feature2,
            features.feature3,
            features.feature4,
            features.feature5,
            features.feature6,
            7793.9929, 1342.9781, 581.9406, 264.0013, 306.4128, 260.2184, 10549.5441, 12780.3412, 12254.5171, 1101.7905, 5113.6861, 2715.2586, 481.7371, 34647.3306, 7728.5711, 2090.35, 754.0433, 272.6925, 306.2049, 260.1742, 11412.036, 12256.7475, 13299.6503, 644.6111, 5087.4792, 2722.8951, 478.8447, 90.2279, 2391661.531, 17400200.78, 19791862.31, 55.1, 576159.724, 911994.5724, 5970889.759, 840.1075, 5971729.867, 88363.42, 15663442.18, 15751805.6, 90353.83511, 0.76, 392007.5695, 2391661.531, 17400200.78, 19791862.31, 207355.1, 576159.724, 911994.5724, 889.759, 840.1075, 5971729.867, 88363.42, 15663442.18, 15751805.6, 90353.83511, 931740.76, 392007.695, -0.7054208335688594, -0.079716
        ];

        fetch('http://localhost:8000/predict_market_risk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ features: allFeatures }),
        })
        .then(response => response.json())
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
        <main className="market-risk-model">
            <h2>Market Risk Prediction</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="feature1">Feature 1:</label>
                    <input
                        type="number"
                        id="feature1"
                        name="feature1"
                        value={features.feature1}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="feature2">Feature 2:</label>
                    <input
                        type="number"
                        id="feature2"
                        name="feature2"
                        value={features.feature2}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="feature3">Feature 3:</label>
                    <input
                        type="number"
                        id="feature3"
                        name="feature3"
                        value={features.feature3}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="feature4">Feature 4:</label>
                    <input
                        type="number"
                        id="feature4"
                        name="feature4"
                        value={features.feature4}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="feature5">Feature 5:</label>
                    <input
                        type="number"
                        id="feature5"
                        name="feature5"
                        value={features.feature5}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="feature6">Feature 6:</label>
                    <input
                        type="number"
                        id="feature6"
                        name="feature6"
                        value={features.feature6}
                        onChange={handleChange}
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

export default MarketRiskModel;
