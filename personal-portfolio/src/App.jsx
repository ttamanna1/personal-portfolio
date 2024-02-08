import { useEffect, useState } from 'react'
import { Element } from 'react-scroll'

//? Components
import Nav from "./components/Nav"
import Skills from './components/Skills'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


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
          <Element name='projects'>
            <Projects />
          </Element>
          <Element name='contact'>
            <Contact />
          </Element>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
