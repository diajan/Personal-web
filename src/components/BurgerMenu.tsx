import React from 'react'

const BurgerMenu: React.FC<{}> = () => {
  return (
    <div className='lg:hidden flex cursor-pointer items-center bg-blue-600 fixed m-7 p-2 rounded-md'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 text-white'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  )
}

export default BurgerMenu