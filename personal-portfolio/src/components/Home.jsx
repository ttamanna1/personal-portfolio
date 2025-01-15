import { Link } from 'react-router-dom'
// import DP from '../assets/dp.jpg'

//? Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I&apos;m <span>Tamanna</span></h1>
      {/* <img src={DP} alt='Tamanna Khanum'/> */}
      <h2>Junior Software Engineer</h2>
      <p> Welcome! I&apos;m learning how to build cool things. Follow my journey and check out my projects.</p>
      <div className='social-links'>
        <Link target='_blank' to='https://github.com/ttamanna1' className='link link-icons'><GitHubIcon className='icon'/></Link>
        <Link target='_blank' to='https://linkedin.com/in/tamanna-khanum' className='link link-icons'><LinkedInIcon className='icon'/></Link>
      </div>
    </div>
  )
}

export default Home