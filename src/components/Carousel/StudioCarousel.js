import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Slide from './Slide';
import SpotifyEmbed from '../Spotify';
import AudioPlayer from '../AudioPlayer';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel-inner-studio'>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <Slide
            media={<SpotifyEmbed embedId='2QI6cPRRTZqQFDkBz5n36l' />}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            media={<SpotifyEmbed embedId='3wwiIZaOnf2u6Y4Dmt8asA' />}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            media={<SpotifyEmbed embedId='75NEvsjFzz7s2ktsvN8sYg' />}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            media={
              <AudioPlayer
                src="/audio/Cause We Ended as Lovers_Website Mixdown.wav"
                image="/images/Cause we ended as lovers.jpg"
                title="Cause We Ended as Lovers"
              />
            }
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            media={
              <AudioPlayer
                src="/audio/freejazz.wav"
                image="/images/Dante JAZZ.jpg"
                title="Free Jazz"
              />
            }
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
