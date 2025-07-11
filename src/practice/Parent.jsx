
import MyComponent from "./MyComponent"
import { ThemeProvider } from "./ThemeContext"

const Parent = ()=>{

return(
    <ThemeProvider>
 <MyComponent/>
    </ThemeProvider>
       
  
)

}

export default Parent