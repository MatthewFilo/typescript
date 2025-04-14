import React from 'react';

function About() {
  return (
    <section id="about" className="About">
    <h2>About Me</h2>
    <p>
      Hi! I'm Matthew Filo, a passionate software engineer with experience in
      building modern web applications. I specialize in TypeScript, React, and
      other cutting-edge technologies. I love solving complex problems and
      creating user-friendly solutions.
    </p>
    <h3>Key Skills</h3>
    <ul className="skills-list">
      <li>TypeScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>CSS & Responsive Design</li>
      <li>RESTful APIs</li>
    </ul>
    <button
      onClick={() =>
        window.open('https://www.linkedin.com/in/matthew-filo-a2b971187/', '_blank')
      }
      className="about-button"
    >
      View My LinkedIn
    </button>
  </section>
  );
}

export default About;