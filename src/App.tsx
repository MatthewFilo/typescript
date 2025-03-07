import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/taskbar/Home';
import About from './components/taskbar/About';
import Projects from './components/taskbar/Projects';
import Contact from './components/taskbar/Contact';
import TypingHeader from './TypingHeader';


function App() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < 3) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 1600); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <header className="App-header">
          {currentStep >= 0 && <TypingHeader text="Hi there!" />}
          {currentStep >= 1 && <TypingHeader text="My name is Matthew Filo." />}
          {currentStep >= 2 && <TypingHeader text="Welcome to my Website!" />}
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;