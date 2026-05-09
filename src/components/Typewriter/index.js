import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingEffectDemo = () => (
  <h1 style={{ color: 'black', fontFamily: "'Special Elite', cursive" }}>
    <Typewriter
      words={['Producer, Engineer, Songwriter, Artist', 'Chokma, My Name Is Dale Shack']}
      loop={false} // Set to true if you want it to loop
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={40}
      delaySpeed={1000}
    />
  </h1>
);

export default TypingEffectDemo;
