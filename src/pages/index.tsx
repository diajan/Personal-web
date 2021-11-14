import type { NextPage } from 'next'
import { BG_INDEX, NAME, SOCIAL_MEDIA } from '../../constant'
import Particles from '../components/Particles'
import { Typewriter } from '../components/Typewriter'
import Title from '../components/utils/Title'
import SocialMedia from '../components/utils/SocialMedia'
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
            {SOCIAL_MEDIA.map(({ icon, link }) => (
              <SocialMedia key={link} icon={icon} link={link} />
            ))}
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
