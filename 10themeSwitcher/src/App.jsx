import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/Theme'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const darkMode = () => {
    setThemeMode("dark")
  }
  
  const lightMode = () => {
    setThemeMode("light")
  }

  useEffect( () => {
    const htmlTheme = document.querySelector('html');
    htmlTheme.classList.remove('light','dark');
    htmlTheme.classList.add(themeMode);
  } , [themeMode] )

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}} >
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
      </ThemeProvider>
  )
}

export default App
