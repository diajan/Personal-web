import type { NextPage } from 'next'
import { BG_INDEX, NAME } from '../../constant'
import Particles from '../components/Particles'
import { Typewriter } from '../components/Typewriter'
import Title from '../components/utils/Title'
import Main from '../layout/Main'

const Home: NextPage = () => {
  return (
    <Main noStyle>
      <div className='bg bg-cover bg-no-repeat bg-center h-screen flex items-center fixed w-full left-0 overflow-hidden'>
        <div className='w-full font-muli font-semibold text-white p-5 sm:p-7 md:p-10 lg:p-28'>
          <Title title={`I'M ${NAME}`} className='text-5xl' />
          <h2 className='my-8 text-2xl'>
            <Typewriter />
          </h2>
          <p className='font-light'>
            In a professional context it often happens that private clients
            corder a publication to be made.
          </p>
          <div className='flex space-x-6 mt-6'>
            <a
              href='https://www.linkedin.com/in/diajan/'
              className='hover:text-blue-500'>
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
      <Particles />

      <style jsx>{`
        .bg {
          background-image: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)
            ),
            url(${BG_INDEX});
        }
      `}</style>
    </Main>
  )
}

export default Home
