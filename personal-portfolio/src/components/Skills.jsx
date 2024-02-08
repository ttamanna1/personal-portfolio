

const Skills = () => {

  const skills = [
    'HTML',
    'CSS/Sass',
    'JavaScript',
    'Python',
    'Node',
    'PostgreSQL',
    'Django',
    'MongoDB',
    'Github',
    'React',
    'Express',
    'Insomnia',
    'NPM',
    'Bootstrap',
    'Heroku',
    'Netlify'
  ]

  return (
    <section className="skills-section">
      <h2 className="title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, key) => (
          <li key={key} className="skill-item skill-btn">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills