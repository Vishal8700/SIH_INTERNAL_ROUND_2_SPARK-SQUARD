import React from "react";
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <section className="contact-content">
      <h2>Get in Touch</h2>
      <p>
        If you have any questions or need further information, feel free to reach out to us. We are here to assist you and provide the support you need.
      </p>

      <h3>Contact Information</h3>
      <p>
        <strong>Email:</strong>git.alien@proton.me<br />
        <strong>Phone:</strong> +1 (123) 456-7890<br />
        <strong>Address:</strong> 123 Main Street,Delhi,India   
        </p>

      <h3>Send Us a Message</h3>
      <form action="/send_message" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
