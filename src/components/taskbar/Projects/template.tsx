import React from 'react';
import './template.css';

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ShowcaseProjectTemplate: React.FC<ProjectProps> = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );
};

export default ShowcaseProjectTemplate;
