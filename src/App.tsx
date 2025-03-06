import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Matthew Filo</h1>
      </header>
      <section id="about" className="App-section">
        <h2>About Me</h2>
        <p>Brief introduction about yourself.</p>
      </section>
      <section id="projects" className="App-section">
        <h2>Projects</h2>
        <p>Details about your projects.</p>
      </section>
      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <p>How to reach you.</p>
      </section>
    </div>
  );
}

export default App;