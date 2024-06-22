import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Slide from './Slide';
import YoutubeEmbed from '../Youtube';
import SpotifyEmbed from '../Spotify';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <div className='carousel-inner'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item>
            <Slide
              media={<YoutubeEmbed embedId='lqwC1fyxjTw' />}
              title='Burn Your Name'
              // subtitle=''
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              media={<SpotifyEmbed embedId='4fVUTjEj1uew5nwDfINlRW' />}
              title='Tiger Hill'
              // subtitle=''
            />
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default MyCarousel;
