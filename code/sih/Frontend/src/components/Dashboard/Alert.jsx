// Alerts.js
import React from 'react';
import { MdNotifications } from 'react-icons/md';

const Alerts = ({ alerts }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ color: '#333' }}>Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <MdNotifications style={{ color: '#FF5733', marginRight: '10px' }} />
            {alert}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
