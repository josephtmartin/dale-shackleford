import React from 'react';
import YoutubeLogo from '../../images/youtube-logo.png';
import SpotifyLogo from '../../images/spotify-logo.png';
import AppleMusicLogo from '../../images/apple-music-logo.png';
import PodcastLogo from '../../images/podcast-logo.png';
import LinktreeLogo from '../../images/linktree-logo.png';
import FacebookLogo from '../../images/facebook-logo.png';
import InstagramLogo from '../../images/instagram-logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="email-container">
      <h3 className="email">To Work With Dale, Email: dshacksounds@gmail.com</h3>
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
      <a href="https://www.youtube.com/@successfullyunsigned" target="_blank" rel="noreferrer">
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
  </footer>
);

export default Footer;