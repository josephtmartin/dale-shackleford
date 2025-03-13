import React from 'react';
import YoutubeCarousel from '../components/Carousel/YoutubeCarousel';
import StudioCarousel from '../components/Carousel/StudioCarousel';
import GoogleSheetsTable from '../components/GoogleSheetsTable';

export default function Produced() {
  return (
    <div className='produced-container'>
      <h1 className='produced-title' style={{ paddingBottom: '100px', color: '#fafafa' }}>Production & Engineering</h1>
      <p className='skills-para'>
        Dale Shack is an independent audio engineer and music producer based near Nashville, TN. Holding a Master of Fine Arts in Recording Arts and Technology from MTSU, Dale has worked with multiple Grammy-winning and
        platinum-selling producers and engineers. His expertise spans traditional large-format consoles, hybrid workflows, and Audio-over-IP protocols like Dante. His Dante experience has enabled him to engineer location recordings,
        conduct multi-studio sessions, and produce live-stream events. Dale also has a strong background in live sound, having mixed concerts for groups like The 12 South Band and musical theatre productions. Additionally,
        he contributes to artist education by creating music videos and music industry podcast content for Successfully Unsigned. Below you will find examples of projects he has worked on along with some of the works he is credited on.
      </p>
      <div className='carousel-container'>
        <YoutubeCarousel />
        <StudioCarousel />
        <GoogleSheetsTable />
      </div>
    </div>
  );
}
