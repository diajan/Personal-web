import React, { useState } from 'react'
import Button from '../utils/Button'
import Menu from './Menu'

const BurgerMenu: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(s => !s)
  return (
    <>
      <div onClick={handleShow}>
        <Button
          title={<i className='fas fa-bars'></i>}
          className='lg:hidden flex cursor-pointer items-center bg-blue-600 fixed m-7 p-2 rounded-md text-white z-20'
        />
      </div>

      <>
        {/*slide*/}
        <div
          onClick={handleShow}
          className={`z-10 w-screen h-screen overflow-hidden opacity-20 ${
            show ? 'fixed' : 'hidden'
          }`}></div>

        <div className={`fixed z-50 ${!show && '-left-7'}`}>
          <div className={`relative transition-all w-0 ${show && 'w-20'}`}>
            <Menu />
          </div>
        </div>
      </>
    </>
  )
}

export default BurgerMenu
