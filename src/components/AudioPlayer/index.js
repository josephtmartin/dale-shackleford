import React from 'react';
// import './AudioPlayer.css'; // CSS file for styling the audio player

const AudioPlayer = ({ src }) => (
  <div className="audio-player">
    <audio controls>
      <source src={src} type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

export default AudioPlayer;
