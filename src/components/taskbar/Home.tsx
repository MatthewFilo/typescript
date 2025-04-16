import React from 'react';
import Logo from '../../images/home_page/matthew_filo_face.png'

function Home() {
  return (
    <div>
      <img src={Logo} alt="Matthew Filo" className="home-logo" style={{width: '75%', margin: '0', padding: '0'}}/>
    </div>
  );
}

export default Home;