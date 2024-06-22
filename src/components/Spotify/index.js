import React from 'react';
import PropTypes from 'prop-types';

const SpotifyEmbed = ({ embedId }) => (
  <div className='video-responsive'>
    <iframe
            src={`https://open.spotify.com/embed/track/${embedId}`}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title={`Spotify Player ${embedId}`} // Set a unique title for each iframe
    ></iframe>
  </div>
);

SpotifyEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default SpotifyEmbed;
