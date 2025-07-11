import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"



const MyComponent = ()=>{

const {theme,handleTheme} = useContext(ThemeContext)

const setStyle={
   backgroundColor:theme==="light"?"white":"black"

}

return(
    <div style={setStyle}>
<h3>currenttheme:{theme}</h3>
<button onClick={handleTheme}>toggleTheme</button>
    </div>
)


}

export default MyComponent