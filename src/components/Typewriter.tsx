import React from 'react'
import Typewrite from 'typewriter-effect'

export const Typewriter: React.FC<{}> = () => {
  return (
    <Typewrite
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={typewriter => {
        typewriter
          .typeString('<span style="color:cyan">A</span> Front-End Developer')
          .pauseFor(3000)
          .deleteChars(19)
          .typeString('Web Designer')
          .pauseFor(3000)
          .deleteAll()
          .typeString('<span style="color:cyan">I love</span> Technologies')
          .pauseFor(3000)
          .deleteChars(12)
          .typeString('Open Source')
          .pauseFor(3000)
          .deleteChars(11)
          .typeString('Programming')
          .pauseFor(3000)
          .start()
      }}
    />
  )
}
