import React, { ReactChildren, ReactChild } from 'react'
import Head from 'next/head'
import BurgerMenu from '../components/BurgerMenu'
import Menu from '../components/Menu'
import DarkMode from '../components/DarkMode'

interface Props {
  children: unknown
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
          integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        <title>My Personal Website</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DarkMode />
      <BurgerMenu />
      <Menu />
      {children}
    </div>
  )
}

export default Main
