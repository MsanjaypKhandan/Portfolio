'use client';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'A Front-End Developer', // Types 'A Front-End Developer'
        2000, // Waits for 2 seconds
        'A React Developer', // Types 'A React Developer'
        2000, // Waits for 2 seconds
        'A Next.js Developer', // Types 'A Next.js Developer'
        2000, // Waits for 2 seconds
        'A JavaScript Enthusiast', // Types 'A JavaScript Enthusiast'
        2000, // Waits for 2 seconds
        () => {
          console.log('Sequence finished'); // Optionally log when the sequence finishes
        }
      ]}
      wrapper="span"
      speed={50} // Sets typing speed
      repeat={Infinity} // Repeats animation indefinitely
      // style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default TypeAnimationComponent;
