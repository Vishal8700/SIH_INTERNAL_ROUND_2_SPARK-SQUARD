import React from 'react';
import './ScamPrevention.css'; // Import the CSS file

const ScamPrevention = () => {
  return (
    <section className="scam-prevention">
      <h2>Scam Prevention</h2>
      <form action="/scam_prevention" method="post">
        <label htmlFor="scam_details">Scam Details:</label>
        <textarea id="scam_details" name="scam_details" required></textarea>

        <label htmlFor="reporter_name">Your Name:</label>
        <input type="text" id="reporter_name" name="reporter_name" required />

        <label htmlFor="reporter_email">Your Email:</label>
        <input type="email" id="reporter_email" name="reporter_email" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ScamPrevention;
