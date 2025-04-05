import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mattfilo83@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/matthew-filo-a2b971187/', '_blank');
  };

  return (
    <div className="Contact">
      <h2>Contact</h2>
      <p>If you would like to get in touch, please click the button below to email me.</p>
      <button onClick={handleEmailClick} className="contact-button">Email Me</button>
      <button onClick={handleLinkedInClick} className="contact-button">LinkedIn</button>
    </div>
  );
};

export default Contact;