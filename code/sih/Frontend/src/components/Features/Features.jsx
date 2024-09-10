import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Features.css'; // Import the CSS file

const features = [
  { title: "Credit Score Predictor", description: "Analyse you Credit score effecienty with pretrained model.", path: "/creditscore" },
  { title: "Trade Predictor", description: "View detailed analytics and reports in the dashboard.", path: "/trade-predictor" },
  { title: "Operational Risk Model", description: "Explore the operational vulnerabilities of our company.", path: "/operational-risk-model" },
  { title: "Value at Risk Model", description: "Analyze market risk with our Value at Risk model." ,path:'/value_at_risk_model'},
  { title: "Client Risk Predictor", description: "Evaluate clients at risk effectively with AI model." ,path:"/creditworthiness"},
  { title: "Market Risk Model", description: "Get market risk analysis." ,path:"/market_risk_model"},
  { title: "Loan Repayment Probability", description: "Predict loan repayment probability.",path:"/loan_repayment_probability" },
  { title: "Exposure at Default", description: "Assess exposure at default for better risk management.",path:"/exposure_at_default" },
  { title: "Credit Risk Model", description: "Prevent credit risk with our model." ,path:"/credit-risk"},
  { title: "Document Insides & Query ", description: "Resolve Your queries." ,path:"/PDFAnalysisComponent"},

];

const Features = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-heading">Explore Our Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <button 
                className="feature-button" 
                onClick={() => handleExploreClick(feature.path)}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
