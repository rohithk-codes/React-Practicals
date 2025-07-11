import React,{UseContext} from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import { ThemeProvider } from './ThemeContext'
export const UserContext  = React.createContext()

const Parent = ()=>{
    
    return(
    <div>
        <ThemeProvider>
        <UserContext.Provider value={"rohith"}>
              <ChildA/>
              <ChildB/>
           </UserContext.Provider>
          </ThemeProvider>
    </div>
    )
}

export default Parent