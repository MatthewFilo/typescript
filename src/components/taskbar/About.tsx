import React from 'react';
import ShowcaseProjectTemplate from './Projects/template';
import Cpp from '../../images/Skills/Cpp.png';
import Typescript from '../../images/Skills/Typescript.webp';
import ReactIcon from '../../images/Skills/Reactjs.jpeg';
import CSharp from '../../images/Skills/Csharp.svg';
import Python from '../../images/Skills/Python.png';
import Restful from '../../images/Skills/Restful_API.png';

function About() {
  return (
    <>
      <section id="about" className="App-section">
        <h2>About Me</h2>
        <p>
          Hi! I'm Matthew Filo, a passionate software engineer with experience in
          building web applications and working with Embedded Systems. 
          I love solving complex problems and creating user-friendly solutions.
          I have worked as a Software Engineer with companies
          such as...
          <p> <h3>Lockheed Martin</h3> Building F-35 On-Board and Helmet Displays and working on Platform Operations </p>
          <p> <h3>Viasat Inc.</h3> Creating real-time communication Web Applications </p>
          <p> <h3>NIWC Pacific</h3> Innovating Modern Solutions to outdated Testing Tools </p>
        </p>
        <div style={{ display: 'flex', gap: '30px' }}>
          <button onClick={() => window.open('https://www.linkedin.com/in/matthew-filo-a2b971187/', '_blank')} className="about-button">
            View My LinkedIn
          </button>
          <button onClick={() => window.open('https://github.com/MatthewFilo', '_blank')} className="about-button">
            View My GitHub
          </button>
        </div>
      </section>
      <section id="skills" className="App-section">
        <h2>Key Skills</h2>
        <div className="skills-container">
          <ShowcaseProjectTemplate image={Cpp} title="C++" />
          <ShowcaseProjectTemplate image={Typescript} title="Typescript" />
          <ShowcaseProjectTemplate image={ReactIcon} title="React.Js" />
          <ShowcaseProjectTemplate image={CSharp} title="C#" />
          <ShowcaseProjectTemplate image={Python} title="Python" />
          <ShowcaseProjectTemplate image={Restful} title="Restful API" />
        </div>
      </section>
    </>
  );
}

export default About;