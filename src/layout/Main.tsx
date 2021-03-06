import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Menu from '../components/generic/Menu'
import DarkMode from '../components/Switch'
import Chevrons from '../components/Chevrons'
import BurgerMenu from '../components/generic/BurgerMenu'
import ThemeContext from '../context/ThemeContext'

interface Props {
  children: React.HTMLAttributes<HTMLElement>
  noStyle?: boolean
}

const Main: React.FC<Props> = ({ children, noStyle = false }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`${theme && 'dark'} `}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        <title>My Personal Website</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* sm:bg-red-700 md:bg-purple-800 lg:bg-pink-800 xl:bg-orange-700 */}
      <div className='overflow-hidde bg-gray-200  dark:bg-gray-900 font-muli'>
        <DarkMode onClick={toggleTheme} />

        <main className='flex'>
          <nav>
            <BurgerMenu />
            <div className='hidden lg:block fixed z-50'>
              <Menu />
            </div>
          </nav>

          <section className={`flex-grow ${!noStyle && 'p-4 sm:p-10 lg:p-20'}`}>
            <div className='w-11/12 mx-auto'>{children}</div>
          </section>
        </main>

        <Chevrons />
      </div>
    </div>
  )
}

export default Main
