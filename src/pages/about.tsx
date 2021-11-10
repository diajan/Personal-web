import type { NextPage } from 'next'
import Link from 'next/link'
import Button from '../components/utils/Button'
import Main from '../layout/Main'
import PairTitle from '../components/utils/PairTitle'
import { ABOUT, DOING, PERSON } from '../../constant'
import Title from '../components/utils/Title'
import TextBox from '../components/utils/TextBox'

const about: NextPage = () => {
  return (
    <Main>
      <div className='p-4 sm:p-20'>
        <header className='text-center font-muli pt-12'>
          <Title
            title='About'
            specific='Me'
            className='text-6xl md:text-7xl font-bold'
          />
        </header>

        <section className='grid lg:grid-cols-2 place-items-center lg:place-items-start lg:space-x-5 mt-10'>
          <div className='w-full h-72 md:h-96 bg-me bg-cover bg-no-repeat bg-center rounded-2xl '></div>
          <div className='w-full  text-gray-800 mt-12 lg:mt-0'>
            <Title
              node={
                <h1 className='text-3xl sm:text-4xl font-muli font-bold dark:text-gray-200'>
                  <span className='text-blue-500'>Front</span>-End Developer
                </h1>
              }
            />
            <div className='flex flex-col sm:flex-row justify-between mt-10 '>
              <PairTitle content={PERSON.filter((_, index) => !(index % 2))} />
              <PairTitle content={PERSON.filter((_, index) => index % 2)} />
            </div>
            <div className='flex space-x-5 sm:space-x-10 mt-10 md:mt-20 lg:mt-10'>
              <Button
                title='Download Cv'
                className='text-white px-6 mr-5 hover:bg-blue-500'
              />
              <Link href='/contact' passHref>
                <Button
                  title='Hire Me'
                  className='text-white px-6 hover:bg-blue-500'
                />
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className='mt-16 mb-8 w-full text-gray-800 font-muli'>
            <Title
              title='About'
              specific='Me'
              className='text-4xl md:text-5xl font-bold dark:text-gray-200'
            />
            <TextBox text={ABOUT} />
          </div>
        </section>

        <section>
          <div className='mt-14 mb-8 w-full text-gray-800'>
            <Title
              node={
                <h1 className='text-4xl md:text-5xl font-muli font-bold dark:text-gray-200'>
                  What <span className='text-blue-500'>I'm Doing</span>
                </h1>
              }
            />
          </div>
          <div className='space-y-6 lg:space-y-0 mb-10 lg:grid lg:grid-cols-3 lg:gap-6'>
            {DOING.map(({ icon, title, sub }) => (
              <TextBox
                icon={<i className={`fas ${icon}`}></i>}
                key={icon}
                title={title}
                sub={sub}
              />
            ))}
          </div>
        </section>
      </div>
    </Main>
  )
}

export default about
