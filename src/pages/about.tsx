import React from 'react'
import Button from '../components/utils/Button'
import Main from '../layout/Main'

const about: React.FC<{}> = () => {
  return (
    <Main>
      <div>
        <header className='text-center font-muli pt-12'>
          <h1 className='text-6xl font-bold text-gray-800'>
            About <span className='text-blue-500'>Me</span>
          </h1>
          <h5 className='text-gray-500 mt-5 font-light'>
            In a professional context it often happens that private <br />{' '}
            clients corder a publication to be made.
          </h5>
        </header>
        <section className='grid place-items-center w-full mt-10'>
          <div className='w-full h-72 bg-me bg-cover bg-no-repeat bg-center rounded-2xl'></div>
          <div className='mt-12 w-full text-gray-800'>
            <h1 className='text-4xl font-muli font-bold '>
              <span className='text-blue-500'>Front</span>-End Developer
            </h1>
            <div className='flex justify-between mt-10 '>
              <div className='text-lg font-light font-muli space-y-5'>
                <p className='font-semibold text-gray-700'>
                  Birthday : {'  '}
                  <span className='text-gray-500 font-light'>1 April 1990</span>
                </p>
                <p className='font-semibold text-gray-700'>
                  Phone : {'  '}
                  <span className='text-gray-500 font-light'>
                    +123 456 7890
                  </span>
                </p>
                <p className='font-semibold text-gray-700'>
                  City : {'  '}
                  <span className='text-gray-500 font-light'>
                    New York, USA
                  </span>
                </p>
              </div>
              <div className='text-lg font-light font-muli space-y-5'>
                <p className='font-semibold text-gray-700'>
                  Birthday : {'  '}
                  <span className='text-gray-500 font-light'>
                    New York, USA
                  </span>
                </p>
                <p className='font-semibold text-gray-700'>
                  Phone : {'  '}
                  <span className='text-gray-500 font-light'>
                    New York, USA
                  </span>
                </p>
                <p className='font-semibold text-gray-700'>
                  City : {'  '}
                  <span className='text-gray-500 font-light'>
                    New York, USA
                  </span>
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <Button title='Download Cv' />
              <Button title='Hire Me' />
            </div>
          </div>
        </section>
      </div>
    </Main>
  )
}

export default about
