import React from 'react'
import Button from '../components/utils/Button'
import Main from '../layout/Main'
import PairTitle from '../components/utils/PairTitle'
import { PERSON } from '../../constant'
import Title from '../components/utils/Title'

const about: React.FC<{}> = () => {
  return (
    <Main>
      <div>
        <header className='text-center font-muli pt-12'>
          <Title
            title='About'
            specific='Me'
            sub={`In a professional context it often happens that private\n
            clients corder a publication to be made.`}
          />
        </header>

        <section className='grid place-items-center w-full mt-10'>
          <div className='w-full h-72 bg-me bg-cover bg-no-repeat bg-center rounded-2xl'></div>
          <div className='mt-12 w-full text-gray-800'>
            <Title
              node={
                <h1 className='text-4xl font-muli font-bold '>
                  <span className='text-blue-500'>Front</span>-End Developer
                </h1>
              }
            />
            <div className='flex justify-between mt-10 '>
              <PairTitle content={PERSON.filter((_, index) => !(index % 2))} />
              <PairTitle content={PERSON.filter((_, index) => index % 2)} />
            </div>
            <div className='grid grid-cols-2 mt-10'>
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
          <div className='mt-12 w-full text-gray-800'>
            <Title
              node={
                <h1 className='text-4xl font-muli font-bold '>
                  What <span className='text-blue-500'>I'm Doing</span>
                </h1>
              }
            />
          </div>
        </section>
      </div>
    </Main>
  )
}

export default about
