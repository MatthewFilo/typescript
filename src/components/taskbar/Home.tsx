import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../images/home_page/matthew_filo_face.png';
import './Home.css';

function Home() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If the image is already decoded (cached), onLoad won't fire — check here.
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className="home-container">
      <img
        ref={imgRef}
        src={Logo}
        alt="Matthew Filo"
        className={`home-portrait${loaded ? ' loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default Home;
