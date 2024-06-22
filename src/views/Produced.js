import React from 'react';
import YoutubeCarousel from '../components/Carousel/YoutubeCarousel';
import StudioCarousel from '../components/Carousel/StudioCarousel';
import GoogleSheetsTable from '../components/GoogleSheetsTable';

export default function Produced() {
  return (
    <div className='produced-container'>
      <h1 className='produced-title' style={{ paddingBottom: '100px', color: '#fafafa' }}>Production & Engineering</h1>
      <p className='skills-para'>
        I am proficient in Pro Tools and have experience on large format consoles and on smaller interfaces, including the
        API Vision and the SSL Duality. I have tracked bands on both consoles, as well as mixed on the
        Vision, various smaller SSL consoles, and in the box. My focus has been in tracking live
        instruments and mixing to let the authenticity of the tracks shine for themselves.
        My genre experience in recording includes Rock, Pop, Country, and Folk.
      </p>
      <div className='carousel-container'>
        <YoutubeCarousel />
        <StudioCarousel />
        <GoogleSheetsTable />
      </div>
    </div>
  );
}
