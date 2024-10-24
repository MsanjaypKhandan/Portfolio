'use client'; // Next.js client component
import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles'; // Ensure you're loading full version of tsparticles

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    // Make sure that loadFull is correctly initializing the engine
    await loadFull(engine); // loadFull loads the complete version of tsparticles
  }, []);

  const particlesLoaded = useCallback(() => {
    console.log('Particles Loaded');
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit} // Use the init callback
      loaded={particlesLoaded} // Handle after particles are loaded
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: 'red',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#e68e2e',
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
