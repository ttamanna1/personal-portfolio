import { useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import Nav from "./components/Nav"
import Skills from './components/Skills'
import Home from './components/Home'


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
        <main>
          <Home />
          <Element name='skills'>
            <Skills />
          </Element>
        </main>
      </div>
    </>
  )
}

export default App
