import React, { useState, useEffect } from 'react';
import TypingHeader from '../../TypingHeader';

function WebsiteIntro() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < 4) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 1000); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <header className="WebsiteIntro">
      {currentStep >= 0 && <TypingHeader text="My name is Matthew Filo." />}
      {currentStep >= 3 && <TypingHeader text="Welcome to my Website!" />}
    </header>
  );
}

export default WebsiteIntro;