import { FC } from 'react'

interface Props {}

const Step: FC = ({}) => {
  return (
    <div className='w-full p-2 mb-5 relative'>
      {/*circle*/}
      <div
        className='w-3 h-3 absolute  rounded-full top-12 bg-blue-600'
        style={{ left: '3px' }}></div>

      <div className='border-l-2 border-blue-500 p-3 pl-5'>
        {/*title*/}
        <div className='space-y-1 mb-2'>
          <h5 className='text-gray-700 font-semibold dark:text-gray-50'>
            Master in Computer Science
          </h5>
          <p className='text-blue-500'>2020 - 2021</p>
        </div>

        {/*description*/}
        <div className=' text-gray-700 font-light dark:text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          scelerisque diam non nisi semper, et elementum lorem ornare.
        </div>
      </div>
    </div>
  )
}

export default Step
