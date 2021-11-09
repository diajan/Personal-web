import React from 'react'
import Link from 'next/link'

const Menu: React.FC<{}> = () => {
  return (
    <>
      <div className=' pop fixed shadow w-20 h-screen bg-blue-50 dark:bg-gray-800 z-10 rounded-r-3xl '>
        <ul className='flex flex-col h-full items-center justify-center space-y-12 xl:space-y-16 text-xl text-blue-500 dark:text-blue-50'>
          <Link href='/' passHref>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-blue-400 font-bold font-muli cursor-pointer'>
              <i className='fas fa-home'></i>
              <span className='text-xs title'>Home</span>
            </li>
          </Link>

          <Link href='/about' passHref>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-blue-400 font-bold font-muli cursor-pointer'>
              <i className='fas fa-user'></i>
              <span className='text-xs title'>About Me</span>
            </li>
          </Link>

          <Link href='/portfolio' passHref>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-blue-400 font-bold font-muli cursor-pointer'>
              <i className='fas fa-briefcase'></i>
              <span className='text-xs title'>Portfolio</span>
            </li>
          </Link>

          <Link href='/resume' passHref>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-blue-400 font-bold font-muli cursor-pointer'>
              <i className='far fa-id-card'></i>
              <span className='text-xs title'>Resume</span>
            </li>
          </Link>

          <Link href='/contact' passHref>
            <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-blue-400 font-bold font-muli cursor-pointer'>
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

          .pop {
            animation: ;
          }
        `}</style>
      </div>
    </>
  )
}

export default Menu
