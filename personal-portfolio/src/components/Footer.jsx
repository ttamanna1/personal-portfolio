import { Link } from 'react-router-dom'

//? Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-link">Tamanna Khanum {new Date().getFullYear()}</div>
      <div className='social-links'>
        <Link target='_blank' to='https://github.com/ttamanna1' className='link link-icons'><GitHubIcon className='icon'/></Link>
        <Link target='_blank' to='https://linkedin.com/in/tamanna-khanum' className='link link-icons'><LinkedInIcon className='icon'/></Link>
      </div>
    </footer>
  )
}

export default Footer