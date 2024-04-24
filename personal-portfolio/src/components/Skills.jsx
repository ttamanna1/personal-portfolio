
const Skills = () => {

  const skills = [
    'HTML',
    'CSS/Sass',
    'JavaScript',
    'Python',
    'Node.js',
    'PostgreSQL',
    'Django',
    'MongoDB',
    'Github',
    'React',
    'Express',
    'Insomnia',
    'Material UI',
    'NPM',
    'Bootstrap',
    'Heroku',
    'Netlify',
    'Neon',
    'Cloudinary',
    'Typescript',
    'Vite',
    'Git',
    
  ]

  return (
    <section className="skills-section">
      <h2 className="title">Skills</h2>
      <ul className="skills-list">
        {skills.sort((a, b) => a < b ? -1 : 1).map((skill, key) => (
          <li key={key} className="skill-item skill-btn">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills