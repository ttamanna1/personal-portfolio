import { Link } from 'react-router-dom'

//? Project Images
import bookshelf from '../assets/bookshelf.png'
import tasty from '../assets/tasty.png'
import hp from '../assets/hp.png'
import baby from '../assets/baby.png'
import coming from '../assets/coming.png'

//? Icons
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

const Projects = () => {
  const projects = [
    {
      title: 'COMING SOON- Trivia Web App',
      description: 'Fun frontend project using a third party API to create a Trivia game.',
      image: coming,
      skills: ['HTML', 'Sass', 'TypeScript', 'React'],
      // live: '',
      github: 'https://github.com/ttamanna1/Trivia-App'
    },
    {
      title: 'bookshelf',
      description: 'I created a reading list tracker with CRUD functionality using a Python Django API and Django REST framework. Users can register and login for an account and move their book entries between their reading lists.',
      image: bookshelf,
      skills: ['HTML', 'Sass', 'React', 'Python', 'Django', 'PostgreSQL', 'Heroku'],
      live: 'https://bookshelf-project-5fec0e408021.herokuapp.com/',
      github: 'https://github.com/ttamanna1/bookshelf'
    },
    {
      title: 'The Tasty Palette',
      description: 'Group project (4 people) | We created a recipe sharing app with CRUD functionality where users can also leave reviews of the recipes. I focused on working on the recipe index component with filtering and the user profile page.',
      image: tasty,
      skills: ['HTML', 'Sass', 'React', 'Node', 'Express', 'MongoDB', 'Bootstrap', 'Heroku'],
      live: 'https://the-tasty-pallete-f0000d235851.herokuapp.com/',
      github: 'https://github.com/ttamanna1/The-Tasty-Palette'
    },
    {
      title: 'Harry Potter App',
      description: 'Pair project | React frontend project: We created a Harry Potter app displaying character cards and spells using a 3rd party API.',
      image: hp,
      skills: ['HTML', 'Sass', 'React', 'Bootstrap', 'Netlify'],
      live: 'https://hpwebapp.netlify.app',
      github: 'https://github.com/ttamanna1/harry-potter-app'
    },
    {
      title: 'Baby\'s Day Out',
      description: 'I created a Frogger- style game, using vanilla JavaScript, with a theme inspired by the Baby’s Day Out movie.',
      image: baby,
      skills: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://ttamanna1.github.io/Babys-Day-Out/',
      github: 'https://github.com/ttamanna1/Babys-Day-Out'
    },
  ]
  return (
    <section className="projects-section">
      <h2 className="title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, key) => (
          <div className="project" key={key}>
            <h3>{project.title}</h3>
            <img src={project.image} />
            <p>{project.description}</p>
            <ul className='project-skills'>
              {project.skills.map((skill, key) => (
                <li key={key} className="project-skill-item">
                  {skill}
                </li>
              ))}
            </ul>
            <div className='social-links'>
              <Link target='_blank' to={project.live} className='link link-icons'><LaunchIcon className='icon'/></Link>
              <Link target='_blank' to={project.github} className='link link-icons'><GitHubIcon className='icon'/></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects