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
            media={<SpotifyEmbed embedId='7vlpjaBWF5Rb7dr52OahOL' />}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            media={<SpotifyEmbed embedId='6q9gOJgu0IedRViT8TRipo' />}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            media={<SpotifyEmbed embedId='6Tn8K14McZ4oiG7oQTLfUJ' />}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            media={<SpotifyEmbed embedId='3wwiIZaOnf2u6Y4Dmt8asA' />}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
