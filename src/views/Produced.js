import React from 'react';
import Carousel from '../components/Carousel/Carousel';

export default function Produced() {
  return (
    <div className='produced-container'>
      <div className='carousel-container'> {/* Add a container for the carousel */}
        <Carousel />
      </div>
    </div>
  );
}
