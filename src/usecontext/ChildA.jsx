import React, { useContext } from 'react'
import { UserContext } from './Parent'
import { ThemeContext } from './ThemeContext'

const ChildA = () => {
    const user = useContext(UserContext)
    const {theme,toggleTheme} = useContext(ThemeContext)
    const themeStyle = {
      backgroundColor:theme === 'light'?'white':'black',
      // color:theme==='light'?'black':'white',
      // padding:'20px',
      // textAlign:'center',
      // minHeight:'100vh'

    }
  return (
    <div style={themeStyle}>
<h1>user:{user}</h1>
<h3>CurrentTheme:{theme}</h3>
<button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    
  )
}

export default ChildA
