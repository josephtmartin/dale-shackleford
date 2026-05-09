// import background from '../images/BLJ_4352b.jpg';
import React from 'react';
import MusicCarousel from '../components/Carousel/MusicCarousel';

export default function Bio() {
  return (
    <div className='bio-container'>
      <div className='bio-content'>
        <h1 className='bio-title' style={{ color: '#fafafa' }}>His Story</h1>
        <img className='bio-image' src={`images/Artboard5.png`} alt="Dale Shack" />
        <p className='bio-para'>
        Holding a Master of Fine Arts in Recording Arts and Technology from MTSU, Dale has worked with multiple Grammy-winning and platinum-selling producers and engineers. His expertise spans traditional large-format consoles, hybrid workflows, and Audio-over-IP protocols like Dante. His Dante experience has enabled him to engineer location recordings, conduct multi-studio sessions, and produce live-stream events. Dale also has a strong background in live sound, having mixed concerts for groups like The 12 South Band and musical theatre productions. Additionally, he contributes to artist education by creating music videos and music industry podcast content for Successfully Unsigned. Below you will find examples of projects he has worked on along with some of the works he is credited on.
        </p>

        <b />

        <p className="bio-para">
        Now, DShack continues producing for artists and ensembles all while also releasing his own music. You can find his original music such as Burn Your Name or To the Top of Tiger Hill on all streaming platforms.
        </p>

        <b />

        <p className="bio-para">
        DShack is also a founding member of <a href="https://www.youtube.com/@successfullyunsigned" target="_blank" rel="noopener noreferrer">Successfully Unsigned</a>, a music business podcast which helps rookie artists navigate their way around the music industry. On this podcast he is both a co-host and the technical director who films and
        edits the majority of the content produced on the show.
        </p>
        <div className='my-music-body'>
          <MusicCarousel />
        </div>
      </div>
    </div>
  );
}
