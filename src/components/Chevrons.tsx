import { FC } from 'react'


const Chevrons: FC = ({}) => {
  return (
    <div className=' w-12 h-20 fixed bottom-8 right-0 space-y-3'>
      <div className='animate-pulse w-full h-1/2 bg-blue-600 rounded-l-xl grid place-items-center cursor-pointer'>
        <i className='fas fa-chevron-up text-white'></i>
      </div>
      <div className='animate-pulse w-full h-1/2 bg-blue-600 rounded-l-xl grid place-items-center  cursor-pointer'>
        <i className='fas fa-chevron-down text-white'></i>
      </div>
    </div>
  )
}

export default Chevrons
