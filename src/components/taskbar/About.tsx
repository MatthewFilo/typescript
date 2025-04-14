import React from 'react';

function About() {
  return (
    <section id="about" className="App-section">
      <h2>About Me</h2>
    <p>
      Hi! I'm Matthew Filo, a passionate software engineer with experience in
      building modern web applications. I specialize in TypeScript, React, and
      other cutting-edge technologies. I love solving complex problems and
      creating user-friendly solutions.
    </p>
    <h3>Key Skills</h3>
    <ul className="skills-list">
      <li>C/C++</li>
      <li>React</li>
      <li>Typescript</li>
      <li>C#</li>
      <li>RESTful APIs</li>
    </ul>
    <div style={{ display: 'flex', gap: '30px' }}>
      <button onClick={() => window.open('https://www.linkedin.com/in/matthew-filo-a2b971187/', '_blank')} className="about-button">
      View My LinkedIn
      </button>
      <button onClick={() => window.open('https://github.com/MatthewFilo', '_blank')} className="about-button">
      View My GitHub
      </button>
    </div>
    </section>
  );
}

export default About;