

const Nav = ({ theme, setTheme }) => {

  // toggle light and dark theme
  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div>Nav</div>
  )
}

export default Nav