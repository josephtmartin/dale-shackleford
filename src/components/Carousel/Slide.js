import React from 'react';

const Slide = ({
  media,
  backgroundImage,
  style,
  title,
  subtitle,
}) => {
  const mediaWrapperStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}),
  };

  return (
    <div style={style}>
      <div style={mediaWrapperStyle}>
        {media}
      </div>
      <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
        <h2 style={{ color: 'white' }}>{title}</h2>
        <p style={{ color: 'white' }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Slide;
