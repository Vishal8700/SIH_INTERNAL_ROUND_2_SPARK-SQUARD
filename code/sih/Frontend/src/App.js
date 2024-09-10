import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import TradePredictor from './components/TradePredictor/TradePredictor';
import ValueAtRiskModel from './components/ValueatRick/ValueatRisk';
import OperationalRiskModel from './components/OperationalRiskModel/OperationalRiskModel';
import CreditRisk from './components/CreditRisk/CreditRisk';
import Creditworthiness from './components/Creditworthiness/Creditworthiness';
import ExposureAtDefault from './components/ExposureAtDefault/ExposureAtDefault';
import LoanRepaymentProbability from './components/LoanRepaymentProbability/LoanRepaymentProbability';
import MarketRiskModel from './components/MarketRiskModel/MarketRiskModel';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Auth from './components/Auth/Auth';
import Chat from './components/Chat/Chat';
import Dashboard from './components/Dashboard/Dashboard';
import CreditScorePredictor from './components/CreditScore/CreditScore';
import PDFAnalysisComponent from './components/Doc_insides/Pdf_Analyser';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check local storage for login state
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false'); // Update local storage
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Update local storage
  };


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {location.pathname !== '/chat' &&  <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<><Hero /><Features /></>} />
        <Route path="/creditscore" element={<CreditScorePredictor />} />
        <Route path="/trade-predictor" element={<TradePredictor />} />
        <Route path="/value_at_risk_model" element={<ValueAtRiskModel />} />
        <Route path="/operational-risk-model" element={<OperationalRiskModel />} />
        <Route path="/creditworthiness" element={<Creditworthiness />} />
        <Route path="/exposure_at_default" element={<ExposureAtDefault />} />
        <Route path="/loan_repayment_probability" element={<LoanRepaymentProbability />} />
        <Route path="/credit-risk" element={<CreditRisk />} />
        <Route path="/market_risk_model" element={<MarketRiskModel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth setIsLoggedIn={handleLogin} />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/PDFAnalysisComponent" element={< PDFAnalysisComponent/>} />
      </Routes>
      {location.pathname !== '/chat' && <Footer />}
    
    </div>
  );
}

// Wrap the App component with Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;