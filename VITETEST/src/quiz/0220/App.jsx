import { createContext, useState } from 'react'

export const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
    headerBg: '#f0f0f0',
    buttonBg: '#e0e0e0'
  },
  dark: {
    background: '#222222',
    text: '#ffffff',
    headerBg: '#333333',
    buttonBg: '#444444'
  }
}

export const ThemeContext = createContext(null)

export default function App() {
  // TODO 2: 테마 상태 관리와 Context Provider 구현

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
      <div
        style={{
          background: themes[theme].background,
          color: themes[theme].text,
          minHeight: '100vh',
          transition: 'all 0.3s ease'
        }}></div>
    </ThemeContext.Provider>
  )
}
