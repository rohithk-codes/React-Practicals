import { createContext, useState } from "react";



export const ThemeContext = createContext()

 export const ThemeProvider=({children})=>{

const [theme,setTheme] =useState("light")

const handleTheme = ()=>{
    setTheme((prevtheme)=>prevtheme==="light"?"dark":"light")
}

<ThemeContext.Provider value={{theme,handleTheme}}>
    {children}
</ThemeContext.Provider>

}