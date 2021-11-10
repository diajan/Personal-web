import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import ThemeContext, { mode } from '../context/ThemeContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTeme] = useState(mode.light)
  const toggleTheme = () => setTeme(s => !s)

  return (
    <>
      <NextNProgress
        color='#3B82F6'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  )
}

export default MyApp
