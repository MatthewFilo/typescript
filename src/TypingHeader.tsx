import React, { useEffect, useState } from 'react';
import './App.css';

function TypingHeader({ text }: { text: string }) {
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < text.length) {
            return prev + text.charAt(prev.length); // Use prev.length instead of external index
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 150); // Adjust typing speed here
  
      return () => clearInterval(interval);
    }, [text]);
  
    return (
      <h1>
        {displayedText}
      </h1>
    );
  }

export default TypingHeader; 