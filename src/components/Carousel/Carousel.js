import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; // Import Bootstrap Carousel component
import Slide from './Slide';
import YoutubeEmbed from '../Youtube';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls={false}> {/* Set interval prop to null to disable auto rotation */}
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
              subtitle='Leave Love Behind - Successfully Unsigned Live Sessions'
            />
          </Carousel.Item>
        </Carousel>
        <p className='skills-para'>
          I am proficient in Pro Tools and have experience on large format consoles and on smaller interfaces, including the
          API Vision and the SSL Duality. I have tracked bands on both consoles, as well as mixed on the
          Vision, various smaller SSL consoles, and in the box. My focus has been in tracking live
          instruments and mixing to let the authenticity of the tracks shine for themselves.
          My genre experience in recording includes Rock, Pop, Country, and Folk.
        </p>
      </div>
    </div>
  );
};

export default MyCarousel;
