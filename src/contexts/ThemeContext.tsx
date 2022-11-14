import React, {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
  useEffect
} from 'react'

type themes = 'blue' | 'green' | 'red'

interface ThemeContextInterface {
  theme: themes
  changeTheme: () => void
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'blue',
  changeTheme: () => {}
})

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<themes>('blue')

  const changeTheme = () => {
    if (theme === 'blue') {
      setTheme('green')
    } else if (theme === 'green') {
      setTheme('red')
    } else {
      setTheme('blue')
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context: ThemeContextInterface = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeProvider
