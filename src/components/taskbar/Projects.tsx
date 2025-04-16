import React from 'react';
import ShowcaseProjectTemplate from './Projects/template';
import Flappy_Bird_icon from '../../images/Projects/Flappy_Bird_icon.png';
import Linkshub from '../../images/Projects/Linkshub.png';
import VirusContainment from '../../images/Projects/Virus_Containment.png';
import FingerDetection from '../../images/Projects/finger_detection.png';
import AStar from '../../images/Projects/AStar.png';
import './Projects.css';


function Projects() {
  return (
    <><section id="projects" className="App-section" style={{ maxWidth: '100%'}}>
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
        <ShowcaseProjectTemplate
          image={FingerDetection}
          title="Finger Detector (WIP)"
          description="Built using Python and OpenCV, I built a finger detection program that can detect the number of fingers in a frame."
          link="https://github.com/MatthewFilo/Finger_Detection/tree/master" />
        <ShowcaseProjectTemplate
          image={AStar}
          title="A* Pathfinding Algorithm"
          description="Built using Python and Pygame, I built an interactive pathfinding algorithm that can find the shortest path from point A to point B."
          link="https://github.com/MatthewFilo/A-Star-Pathfinding-Algorithm" />
      </div>
    </section><section id="projects" className="App-section" style={{ maxWidth: '100%'}}>
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