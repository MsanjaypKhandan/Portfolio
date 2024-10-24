'use client';
import { useState, useEffect } from 'react';

const TrailingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-2 left-2 w-4 h-4  bg-accent rounded-full pointer-events-none transition-transform duration-200 ease-out"
      style={{
        transform: `translate3d(${position.x - 18}px, ${position.y - 18}px, 0)`,
      }}
    />
  );
};

export default TrailingCursor;
