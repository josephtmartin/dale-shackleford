import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingEffectDemo = () => (
  <h1 style={{ color: 'white', fontFamily: "'Special Elite', cursive" }}>
    <Typewriter
      words={['Chokma, My Name Is Dale Shack', 'I am a producer, engineer, and musician.']}
      loop={false} // Set to true if you want it to loop
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </h1>
);

export default TypingEffectDemo;
