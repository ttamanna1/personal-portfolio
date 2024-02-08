import { useEffect, useState } from 'react'
import Nav from "./components/Nav"


function App() {

  // gets theme selected
  const currentTheme = localStorage.getItem('currentTheme')
  const [ theme, setTheme ] = useState(currentTheme ? currentTheme : 'light')

  // saves theme to localStorage
  useEffect(() => {
    localStorage.setItem('currentTheme', theme)
  }, [theme])
  
  return (
    <>
      <div className={`container ${theme}`}>
        <Nav theme={theme} setTheme={setTheme} />
      </div>
    </>
  )
}

export default App
