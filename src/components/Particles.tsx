import React from 'react'
import Particle from 'react-tsparticles'

const Particles: React.FC<{}> = () => {
  const particlesInit = (main: unknown) => {}
  const particlesLoaded = (container: unknown) => {}

  return (
    <Particle
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 100,
        interactivity: {
          modes: {
            bubble: {
              distance: 10,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 2,
              duration: 0.9,
            },
          },
        },
        particles: {
          number: {
            value: 30,
          },
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: true,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: 'circle',
          },
        },
        detectRetina: false,
      }}
    />
  )
}

export default Particles
