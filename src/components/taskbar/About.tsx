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
          building modern web applications. I specialize in TypeScript, React, and
          other cutting-edge technologies. I love solving complex problems and
          creating user-friendly solutions.
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