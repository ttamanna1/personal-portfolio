
const Skills = () => {

  const skills = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'Python',
    'Node.js',
    'PostgreSQL',
    'Django',
    'MongoDB',
    'Github',
    'React',
    'Express.js',
    'Insomnia',
    'NPM',
    'Bootstrap',
    'Heroku',
    'Netlify',
    'Neon',
    'Cloudinary',
    'Git',
    
  ]

  return (
    <section className="skills-section">
      <h2 className="title">Skills/Tools</h2>
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