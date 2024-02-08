import { Link } from 'react-router-dom'

//? Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I&apos;m <span>Tamanna Khanum</span></h1>
      <h2>Junior Software Developer</h2>
      <p>With a background in community pharmacy, I am taking a deep dive into creating digital solutions. <br/> Watch this space.</p>
      <div className='social-links'>
        <Link target='_blank' to='https://github.com/ttamanna1' className='link-icons'><GitHubIcon className='icon'/></Link>
        <Link target='_blank' to='https://linkedin.com/in/tamanna-khanum' className='link-icons'><LinkedInIcon className='icon'/></Link>
      </div>
    </div>
  )
}

export default Home