import React from 'react';
import ShowcaseProjectTemplate from './Projects/template';
import Flappy_Bird_icon from '../../images/Flappy_Bird_icon.png';
import Linkshub from '../../images/Linkshub.png';
import VirusContainment from '../../images/Virus_Containment.png';
import './Projects.css';


function Projects() {
  return (
    <><section id="projects" className="App-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <ShowcaseProjectTemplate
          image={Flappy_Bird_icon}
          title="Flappy Bird Clone"
          description="Built using Python within Pygame module, I built a Flappy Bird clone."
          link="https://github.com/MatthewFilo/Flappy-Bird-Game" />
        <ShowcaseProjectTemplate
          image={VirusContainment}
          title="Virus Containment"
          description="Video Game built using Unity and C#. Arcade-Shooter video game where player must reach round 10 fighting enemies that spawn in with creative movement patterns."
          link="https://github.com/MatthewFilo/Flappy-Bird-Game" />
      </div>
    </section><section id="projects" className="App-section">
        <h2>Open Source Contributions</h2>
        <ShowcaseProjectTemplate
          image={Linkshub}
          title="Linkshub"
          description="LinksHub aims to provide people access to a wide range of free resources and tools that they can use to learn and develop their tech skills. These resources include links to free software, libraries, frameworks, and other tools that can be used to build and deploy applications, website, and other projects."
          link="https://github.com/rupali-codes/LinksHub" />
    </section></>
  );
}

export default Projects;