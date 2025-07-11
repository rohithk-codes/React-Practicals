
import React,{createContext,useState} from "react"
import Child from "./Child"

export const CounterContext = createContext()
export   const CounterProvider = ()=>{

    const [count,setCount] = useState(0)

    const increment = ()=>setCount(prev=>prev+1)
    const decrement = ()=>setCount(prev=>prev-1)
    const reset = ()=>setCount(0)
    
    return(
<CounterContext.Provider value={{count,increment,decrement,reset}}>
    <Child/>
</CounterContext.Provider>
    )
}

export default CounterProvider
