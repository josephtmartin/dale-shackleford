// import background from '../images/BLJ_4352b.jpg';
import React from 'react';
import YoutubeLogo from '../images/youtube-logo.png';
import SpotifyLogo from '../images/spotify-logo.png';
import AppleMusicLogo from '../images/apple-music-logo.png';
import PodcastLogo from '../images/podcast-logo.png';
import LinktreeLogo from '../images/linktree-logo.png';
import FacebookLogo from '../images/facebook-logo.png';
import InstagramLogo from '../images/instagram-logo.png';

export default function Bio() {
  return (
    <div className='bio-container'>
      <h1 className='bio-title' style={{ paddingBottom: '200px', color: '#fafafa' }}>His Story</h1>
      <p className='bio-para'>
      Growing up in Oklahoma, Dale was involved in music from a young age. From singing at church to traveling across Oklahoma with his family sharing stories and singing in Chickasaw, Shack loved all things music.
      However, he never expected to create a career in the industry. At the age of 15 he wrote his first songs with his sister after she grew tired of singing the only song he knew how to play.
      The first day they wrote two songs together and it sparked a passion for creating original content. He continued writing for the next few years and attended Eastern Oklahoma State College to study music.
      At this point he also found a new related passion in music production. He then took a big leap and transferred to Middle Tennessee State University where he earned a Bachelor’s degree in Audio Production and
      continued on for a Master’s of Fine Arts in Recording Arts and Technology. During this time, Dale had the opportunity to learn and grow as an audio engineer and music producer outside Music City working with other people’s songs,
      helping them bring their dreams to life.
      </p>

      <b />

      <p className="bio-para">
      Now, DShack continues producing for artists and ensembles all while also releasing his own music. You can find his original music such as Burn Your Name or To the Top of Tiger Hill on all streaming platforms.
      </p>

      <b />

      <p className="bio-para">
      DShack is also a founding member of Successfully Unsigned, a music business podcast which helps rookie artists navigate their way around the music industry. On this podcast he is both a co-host and the technical director who films and
      edits the majority of the content produced on the show.
      </p>
      <div className='email-container'>
        <h3 className='email'>Email: dshacksounds@gmail.com</h3>
      </div>
      <div className="social-logos-container">
        <a href="https://www.youtube.com/@dshackmusic?sub_confirmation=1" target="_blank" rel="noreferrer">
          <img src={YoutubeLogo} alt="YouTube" className="social-logo" />
        </a>
        <a href="https://open.spotify.com/artist/2FnF7FPPkwlz3sRaeeydxT?si=PCpqUfESRaqIKECP7chQsQ" target="_blank" rel="noreferrer">
          <img src={SpotifyLogo} alt="Spotify" className="social-logo" />
        </a>
        <a href="https://music.apple.com/us/artist/dale-shack/1550885307" target="_blank" rel="noreferrer">
          <img src={AppleMusicLogo} alt="Apple Music" className="social-logo" />
        </a>
        <a href="https://www.youtube.com/@successfullyunsigned?sub_confirmation=1" target="_blank" rel="noreferrer">
          <img src={PodcastLogo} alt="Successfully Unsigned Podcast" className="social-logo" />
        </a>
        <a href="https://www.linktr.ee/daleshack" target="_blank" rel="noreferrer">
          <img src={LinktreeLogo} alt="Linktree" className="social-logo" />
        </a>
        <a href="https://www.facebook.com/DaleShackOfficial" target="_blank" rel="noreferrer">
          <img src={FacebookLogo} alt="Facebook" className="social-logo" />
        </a>
        <a href="https://www.instagram.com/daleshackofficial/" target="_blank" rel="noreferrer">
          <img src={InstagramLogo} alt="Instagram" className="social-logo" />
        </a>
      </div>
    </div>
  );
}
