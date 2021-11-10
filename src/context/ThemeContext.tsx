import { createContext } from 'react'

type DarkMode = { theme: boolean; toggleTheme?: () => void }

export const mode = {
  dark: true,
  light: false,
}

const ThemeContext = createContext<DarkMode>({ theme: mode.light })

export default ThemeContext
