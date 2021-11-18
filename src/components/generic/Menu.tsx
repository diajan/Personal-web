import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MENU } from '../../../constant'

const Menu: React.FC<{}> = () => {
  const { pathname } = useRouter()

  return (
    <>
      <div className='shadow h-screen bg-white dark:bg-gray-800 rounded-r-3xl lg:p-3'>
        <ul className='flex flex-col h-full items-center justify-center space-y-12 xl:space-y-16 text-xl text-blue-500 dark:text-blue-50'>
          {MENU.map(({ title, path, icon }) => (
            <Link href={path} key={path} passHref>
              <li className='box flex flex-col place-items-center w-full space-y-2 hover:text-blue-400 font-bold font-muli cursor-pointer'>
                <i className={`fas ${icon}`}></i>
                <span
                  className={`${pathname === path && 'active'} text-xs title`}
                >
                  {title}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        <style jsx>{`
          .shadow {
            -webkit-box-shadow: 0px 0px 5px 0px #d8d8d8;
            box-shadow: 0px 1px 2px rgb(203 203 203), -3px -3px 8px #a7a7a7;
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

          .active {
            visibility: visible;
            opacity: 1;
          }
        `}</style>
      </div>
    </>
  )
}

export default Menu
