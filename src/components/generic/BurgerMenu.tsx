import React, { useState } from 'react'
import Button from '../utils/Button'
import Menu from './Menu'

const BurgerMenu: React.FC = () => {
  const [show, setShow] = useState(true)
  const handleShow = () => setShow(s => !s)
  return (
    <>
      {show ? (
        <div onClick={handleShow}>
          <Button
            title={<i className='fas fa-bars'></i>}
            className='lg:hidden flex cursor-pointer items-center bg-blue-600 fixed m-7 p-2 rounded-md text-white z-20'
          />
        </div>
      ) : (
        <>
          <div className='z-50 bg-red-700'>
            <Menu />
          </div>
          <div
            onClick={handleShow}
            className='z-10 fixed w-screen h-screen overflow-hidden'>
          </div>
        </>
      )}
    </>
  )
}

export default BurgerMenu
