import React from 'react';
import './template.css';

interface ProjectProps {
  image: string;
  title: string;
  description?: string;
  link?: string;
}

const ShowcaseProjectTemplate: React.FC<ProjectProps> = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className='project-card-text'>
      <h3 className="project-title">{title}</h3>
      {description && <p className="project-description">{description}</p>}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      )}
      </div>
    </div>
  );
};

export default ShowcaseProjectTemplate;
