import type { NextPage } from 'next'
import Particles from '../components/Particles'
import Typewriter from 'typewriter-effect'
import Main from '../layout/Main'

const Home: NextPage = () => {
  return (
    <Main>
      <Particles />
      <div className='bg bg-cover bg-no-repeat bg-center w-screen h-screen flex items-center overflow-hidden'>
        <div className='w-full font-muli font-semibold text-white p-28'>
          <h1 className='text-5xl'>I'M Diajan</h1>
          <h2 className='my-8 text-2xl'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={typewriter => {
                typewriter
                  .typeString(
                    '<span style="color:cyan">A</span> Front-End Developer'
                  )
                  .pauseFor(3000)
                  .deleteChars(19)
                  .typeString('Web Designer')
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString(
                    '<span style="color:cyan">I love</span> Technologies'
                  )
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
          </h2>
          <p className='font-light'>
            In a professional context it often happens that private clients
            corder a publication to be made.
          </p>
          <div className='flex space-x-6 mt-6'>
            <a
              href='https://www.linkedin.com/in/diajan/'
              className='hover:text-blue-500'
            >
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://github.com/diajan' className='hover:text-blue-500'>
              <i className='fab fa-github'></i>
            </a>
            <a href='#' className='hover:text-blue-500'>
              <i className='fab fa-twitter'></i>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg {
          background-image: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)
            ),
            url('https://retrina.com/demo/arshia/cv/assets/img/home-bg-3.jpg');
        }
      `}</style>
    </Main>
  )
}

export default Home