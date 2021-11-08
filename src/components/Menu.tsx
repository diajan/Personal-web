import React from 'react'
import Link from 'next/link'

const Menu: React.FC<{}> = () => {
  return (
    <div className='shadow w-20 h-screen bg-blue-50 dark:bg-gray-800 z-10 rounded-r-3xl fixed transition-all'>
      <ul className='flex flex-col h-full items-center justify-center space-y-16 text-xl text-cyan-700 dark:text-blue-50'>
        <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
          <Link href='/'>
            <i className='fas fa-home'></i>
          </Link>
          <Link href='/'>
            <span className='text-xs title'>Home</span>
          </Link>
        </li>

        <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
          <Link href='/about'>
            <i className='fas fa-user'></i>
          </Link>
          <Link href='/about'>
            <span className='text-xs title'>About Me</span>
          </Link>
        </li>

        <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
          <Link href='/about'>
            <i className='fas fa-briefcase'></i>
          </Link>
          <Link href='/about'>
            <span className='text-xs title'>Portfolio</span>
          </Link>
        </li>

        <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
          <Link href='/about'>
            <i className='far fa-id-card'></i>
          </Link>
          <Link href='/about'>
            <span className='text-xs title'>Resume</span>
          </Link>
        </li>

        <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-cyan-600 font-bold font-muli cursor-pointer'>
          <Link href='/about'>
            <i className='fas fa-paper-plane'></i>
          </Link>
          <Link href='/about'>
            <span className='text-xs title'>Contact</span>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .shadow {
          -webkit-box-shadow: 0px 0px 5px 0px #d8d8d8;
          box-shadow: 3px 3px 8px rgb(29 29 29), -3px -3px 8px #000;
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
  )
}

export default Menu
