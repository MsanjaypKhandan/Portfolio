'use client';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'A Front-End Developer', 
        2000, 
        'A Back-End Developer', 
        2000, 
        'A React Developer', 
        2000, 
        'A Next.js Developer', 
        2000, 
        'A JavaScript Enthusiast',
        2000,
        () => {
          console.log('Sequence finished'); 
        }
      ]}
      wrapper="span"
      speed={50} 
      repeat={Infinity} 
    />
  );
};

export default TypeAnimationComponent;
