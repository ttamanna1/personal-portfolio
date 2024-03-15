import { Link } from 'react-router-dom'
// import DP from '../assets/dp.jpg'

//? Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I&apos;m <span>Tamanna Khanum</span></h1>
      {/* <img src={DP} alt='Tamanna Khanum'/> */}
      <h2>Junior Software Developer</h2>
      <p>With a background in community pharmacy, I am taking a deep dive into creating digital solutions. After taking a couple of courses in web development with Code First Girls, I was ready to learn more about the digital space, which led me to study full-time with General Assembly in the Software Engineering Immersive course. I am ready to embark on this trajectory in my career and I can&apos;t wait to get stuck in.<br/> In my latest project, I am working on creating a fun trivia app using Typescript and React. Check out my Github .</p>
      <div className='social-links'>
        <Link target='_blank' to='https://github.com/ttamanna1' className='link link-icons'><GitHubIcon className='icon'/></Link>
        <Link target='_blank' to='https://linkedin.com/in/tamanna-khanum' className='link link-icons'><LinkedInIcon className='icon'/></Link>
      </div>
    </div>
  )
}

export default Home