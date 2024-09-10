// RiskDetails.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import autoTable
import './RiskDetails.css'; // Assuming you have a CSS file for styling

const RiskDetails = ({ details, riskData, trendData }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Add title
    doc.text("Risk Details", 10, 10);

    // Add risk details
    doc.text("Risk Details:", 10, 20);
    details.forEach((detail, index) => {
      doc.text(`${index + 1}. ${detail}`, 10, 30 + index * 10);
    });

    // Add a line break
    doc.text("", 10, 30 + details.length * 10 + 10);

    // Add risk data table header
    doc.text("Risk Data Points:", 10, 30 + details.length * 10 + 20);
    doc.autoTable({
      head: [['Month', 'Risk Level']],
      body: riskData.map(item => [item.label, item.value]),
      startY: 30 + details.length * 10 + 30,
      theme: 'grid',
    });

    // Add trend data table header
    doc.text("Trend Data Points:", 10, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      head: [['Week', 'Trend Level']],
      body: trendData.map(item => [item.label, item.value]),
      startY: doc.lastAutoTable.finalY + 20,
      theme: 'grid',
    });

    // Save the PDF
    doc.save("risk-details.pdf");
  };

  return (
    <div className="risk-details-container" style={{ position: 'relative', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ color: '#333' }}>Risk Details</h2>
      <button className="download-button" onClick={handleDownload} title="Download Risk Details">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
          <path d="M12 15v4m0 0l-3-3m3 3l3-3M21 15V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" />
        </svg>
      </button>
      <ul>
        {details.map((detail, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

RiskDetails.propTypes = {
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  riskData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  trendData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RiskDetails;