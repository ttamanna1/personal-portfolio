import { Link } from 'react-scroll'

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Nav = ({ theme, setTheme }) => {

  // toggle light and dark theme
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <nav className="nav">
      <h1 className='logo'>TK</h1>
      <ul className='nav-list'>
        <li className="nav-item">
          <Link to='skills' smooth={true} duration={500} className='link link-nav'>Skills</Link>
        </li>
        <li className="nav-item">
          <Link to='projects' smooth={true} duration={500} className='link link-nav'>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to='contact' smooth={true} duration={500} className='link link-nav'>Contact</Link>
        </li>
      </ul>
      <button type='button' onClick={toggleTheme} className='btn btn-icon nav-theme'>
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </nav>
  )
}

export default Nav