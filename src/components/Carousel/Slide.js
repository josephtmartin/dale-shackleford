import React from 'react';

const Slide = ({
  media,
  backgroundImage,
  style,
  title,
  subtitle,
}) => (
    <div style={style}>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {media}
      </div>
      <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
        <h2 style={{ color: 'white' }}>{title}</h2>
        <p style={{ color: 'white' }}>{subtitle}</p>
      </div>
    </div>
);

export default Slide;
