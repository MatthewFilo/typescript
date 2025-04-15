import React, { useState, useEffect } from 'react';
import './WebsiteIntro.css';

function WebsiteIntro() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < 2) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 1000); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <header className="WebsiteIntro">
      {currentStep >= 0 && <h1 className="fade-in">My name is Matthew Filo</h1>}
      {currentStep >= 1 && <h1 className="fade-in">Welcome to my Website!</h1>}
    </header>
  );
}

export default WebsiteIntro;