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
        fpsLimit: 60,
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
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
            speed: 3,
            straight: false,
            
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