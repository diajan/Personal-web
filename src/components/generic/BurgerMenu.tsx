import React from 'react'
import Button from '../utils/Button'

interface Props {
  onClick: () => void
}

const BurgerMenu: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <Button
        title={<i className='fas fa-bars'></i>}
        className='lg:hidden flex cursor-pointer items-center bg-blue-600 fixed m-7 p-2 rounded-md text-white z-20'
      />
    </div>
  )
}

export default BurgerMenu
