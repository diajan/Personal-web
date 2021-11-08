import React from 'react'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'

const Menu: React.FC<{}> = () => {
  return (
    <>
      <BurgerMenu />
      <div className='hidden lg:block shadow w-20 h-screen bg-blue-50 dark:bg-gray-800 z-10 rounded-r-3xl transition-all'>
        <ul className='flex flex-col h-full items-center justify-center space-y-16 text-xl text-cyan-700 dark:text-blue-50'>
          <Link href='/'>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
              <i className='fas fa-home'></i>
              <span className='text-xs title'>Home</span>
            </li>
          </Link>

          <Link href='/about'>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
              <i className='fas fa-user'></i>
              <span className='text-xs title'>About Me</span>
            </li>
          </Link>

          <Link href='/portfolio'>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
              <i className='fas fa-briefcase'></i>
              <span className='text-xs title'>Portfolio</span>
            </li>
          </Link>

          <Link href='/resume'>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
              <i className='far fa-id-card'></i>
              <span className='text-xs title'>Resume</span>
            </li>
          </Link>

          <Link href='/contact'>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
              <i className='fas fa-paper-plane'></i>
              <span className='text-xs title'>Contact</span>
            </li>
          </Link>
        </ul>

        <style jsx>{`
          .shadow {
            -webkit-box-shadow: 0px 0px 5px 0px #d8d8d8;
            box-shadow: 0px 3px 5px rgb(203 203 203), -3px -3px 8px #a7a7a7;
          }

          .box {
            transition: all 0.1s ease-in-out;
          }

          span {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.2s, opacity 0.2s linear;
          }

          .box:hover span {
            visibility: visible;
            opacity: 1;
          }
        `}</style>
      </div>
    </>
  )
}

export default Menu
