import { useState } from 'react'
import { Element } from 'react-scroll'

//? Components
import Nav from "./components/Nav"
import Skills from './components/Skills'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  // default set to dark as that is my preference for this portfolio
  const [ theme, setTheme ] = useState('dark')

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
