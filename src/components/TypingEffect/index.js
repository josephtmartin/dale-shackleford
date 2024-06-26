import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffectDemo = () => (
  <>
    <ReactTypingEffect
      text={['Chokma, My Name Is Dale Shack', 'I am a producer, engineer, and musician.']}
      typingDelay='1000'
      speed='70'
      eraseDelay='750'
      eraseSpeed='50'
      cursorRenderer={(cursor) => <h1 style={{ color: 'white' }}>{cursor}</h1>}
      displayTextRenderer={(text, i) => (
        <h1>
          {text.split('').map((char) => {
            const key = `${i}`;
            return (
              <span
                className='typewriter'
                key={key}
                style={{ color: 'white', fontFamily: "'Special Elite', cursive" }}
              >
                {char}
              </span>
            );
          })}
        </h1>
      )}
    />
  </>
);

export default ReactTypingEffectDemo;
