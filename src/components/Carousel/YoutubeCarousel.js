import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Slide from './Slide';
import YoutubeEmbed from '../Youtube';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <div className='carousel-inner-youtube'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item>
            <Slide
              media={<YoutubeEmbed embedId='OKQ2npFvqUU' />}
              title='Hello Darling'
              subtitle='"Leave Love Behind" - Successfully Unsigned Live Sessions'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              media={<YoutubeEmbed embedId='R3iWHBGeJeE' />}
              title='Lauren Gunn'
              subtitle='"Open Fire" - Successfully Unsigned Live Sessions'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              media={<YoutubeEmbed embedId='_B_WGvOJ-PQ' />}
              title='Cascade'
              subtitle='Original composition by Jenna Kopitske'
            />
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default MyCarousel;
