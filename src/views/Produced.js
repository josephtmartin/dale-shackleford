import React from 'react';
import Carousel from '../components/Carousel/Carousel';

export default function Produced() {
  return (
    <div className='produced-container'>
      <h1 className='produced-title' style={{ paddingBottom: '100px', color: '#fafafa' }}>Production & Engineering</h1>
      <div className='carousel-container'> {/* Add a container for the carousel */}
        <Carousel />
      </div>
    </div>
  );
}
