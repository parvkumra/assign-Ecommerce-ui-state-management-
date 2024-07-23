import React from 'react'

import Navbar from './Navbar';
import Kids from './Kids.jsx';
import WomenWear from './Womens.jsx';

function Home() {
  return (
    <section>
<video 
        style={{ objectFit: 'contain', width: '100%', height: '600px' }} 
        src="src/assets/rr.mp4" 
        autoPlay 
        loop 
        muted 
      />
      <Kids/>
      <WomenWear/>
  
  
    </section>
  )
}

export default Home;
