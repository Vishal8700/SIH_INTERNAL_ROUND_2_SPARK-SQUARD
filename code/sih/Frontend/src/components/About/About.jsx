import React from "react";
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-page">
      <main>
        <section className="about-content">
          <h2>About Our Company</h2>
          <p>
            Welcome to our company. We specialize in providing top-notch services and solutions tailored to your needs. Our team is dedicated to ensuring that you receive the best experience possible. Here, you'll learn more about who we are, what we do, and how we can help you achieve your goals.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver high-quality products and services that meet the needs of our clients. We are committed to innovation, excellence, and customer satisfaction.
          </p>

          <h3>Our Team</h3>
          <p>
            Our team consists of experienced professionals who are passionate about their work. We bring a diverse set of skills and expertise to every project we undertake.
          </p>

          <h3>Our Values</h3>
          <p>
            Integrity, transparency, and customer-centricity are at the core of everything we do. We believe in building long-term relationships with our clients based on trust and mutual respect.
          </p>
        </section>

        <section className="about-content">
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is important to us. We are committed to protecting your personal information and will not share it with third parties without your consent. For more details on how we collect, use, and protect your information, please review our <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </section>

        <footer className="about-content">
          <p>Developed with love by our amazing team.</p>
        </footer>
      </main>
    </div>
  );
};

export default About;
