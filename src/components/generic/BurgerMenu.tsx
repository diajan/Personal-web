import React from 'react'
import Button from '../utils/Button'

const BurgerMenu: React.FC<{}> = () => {
  return (
    <Button
      title={<i className='fas fa-bars'></i>}
      className='lg:hidden flex cursor-pointer items-center bg-blue-600 fixed m-7 p-2 rounded-md text-white'
    />
  )
}

export default BurgerMenu
