import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/taskbar/Home';
import About from './components/taskbar/About';
import Projects from './components/taskbar/Projects';
import Skills from './components/taskbar/Skills';
import Contact from './components/taskbar/Contact';
import WebsiteIntro from './components/taskbar/Website_Intro';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/typescript' : '/';

  return (
    <Router basename={basename}>
      <div className="App">
        <nav className="App-nav">
          <span className="App-nav-brand">Matthew <span>Filo</span></span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <WebsiteIntro />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
