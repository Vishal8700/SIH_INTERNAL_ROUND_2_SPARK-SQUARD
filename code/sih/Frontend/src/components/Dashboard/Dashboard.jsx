// Dashboard.jsx
import React from 'react';
import './dashboard.css'; 
import RiskGraph from './RiskGraph';
import RiskDetails from './RiskDetails';
import Alerts from './Alert'; // Make sure this is the correct import
import RiskMatrix from './RiskMatrix';

const Dashboard = () => {
  // Data for the risk graph
  const riskData = [
    { label: 'Jan', value: 30 },
    { label: 'Feb', value: 50 },
    { label: 'Mar', value: 70 },
    { label: 'Apr', value: 90 },
    { label: 'May', value: 110 },
    {label: 'Jun' , value:38}
  ];

  // Data for the risk matrix (trend data)
  const trendData = [
    { label: 'Week 1', value: 20 },
    { label: 'Week 2', value: 40 },
    { label: 'Week 3', value: 60 },
    { label: 'Week 4', value: 80 },
    { label: 'Week 5', value: 36 },
  ];

  // Risk details to display
  const riskDetails = [
    'High risk in Q1 due to market volatility',
    'Medium risk in Q2 from supply chain disruptions',
    'Low risk in Q3 with stable demand forecasts',
    'Mitigation strategies: Diversify suppliers, increase inventory',
  ];

  // Alerts to display
  const alerts = [
    'Immediate action required for Q1',
    'Review risk management strategies for Q2',
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className='element'>
        <RiskGraph data={riskData} />
        <RiskMatrix trendData={trendData} />
      </div>
      <div className="details-alerts-container">
        <RiskDetails details={riskDetails} riskData={riskData} trendData={trendData} />
        <Alerts alerts={alerts} />
      </div>
    </div>
  );
};

export default Dashboard;