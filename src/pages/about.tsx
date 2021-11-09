import React from 'react'
import Button from '../components/utils/Button'
import Main from '../layout/Main'
import PairTitle from '../components/utils/PairTitle'
import { DOING, PERSON } from '../../constant'
import Title from '../components/utils/Title'
import TextBox from '../components/utils/TextBox'

const about: React.FC<{}> = () => {
  return (
    <Main>
      <div className='p-4 sm:p-20'>
        <header className='text-center font-muli pt-12'>
          <Title
            title='About'
            specific='Me'
            sub={`In a professional context it often happens that private\n
            clients corder a publication to be made.`}
            className='text-6xl'
          />
        </header>

        <section className='grid place-items-center w-full mt-10'>
          <div className='w-full h-72 bg-me bg-cover bg-no-repeat bg-center rounded-2xl '></div>
          <div className='mt-12 w-full text-gray-800'>
            <Title
              node={
                <h1 className='text-3xl sm:text-4xl font-muli font-bold '>
                  <span className='text-blue-500'>Front</span>-End Developer
                </h1>
              }
            />
            <div className='flex flex-col sm:flex-row justify-between mt-10 '>
              <PairTitle content={PERSON.filter((_, index) => !(index % 2))} />
              <PairTitle content={PERSON.filter((_, index) => index % 2)} />
            </div>
            <div className='flex space-x-5 sm:space-x-10 mt-10 md:mt-20'>
              <Button
                title='Download Cv'
                className='text-white px-6 mr-5 hover:bg-blue-500'
              />
              <Button
                title='Hire Me'
                className='text-white px-6 hover:bg-blue-500'
              />
            </div>
          </div>
        </section>

        <section>
          <div className='mt-14 mb-8 w-full text-gray-800'>
            <Title
              node={
                <h1 className='text-4xl font-muli font-bold '>
                  What <span className='text-blue-500'>I'm Doing</span>
                </h1>
              }
            />
          </div>
          <div className='space-y-6 mb-10'>
            {DOING.map(({ icon, title, sub }) => (
              <TextBox icon={<i className={`fas ${icon}`}></i>} key={title} title={title} sub={sub} />
            ))}
          </div>
        </section>
      </div>
    </Main>
  )
}

export default about
