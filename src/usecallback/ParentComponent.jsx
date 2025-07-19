import { use, useCallback, useState } from "react"
import ChildComponent from './ChildComponent.jsx'


const ParentComponent = ()=>{
    const [count,setCount] = useState(0)
    const [value,setValue] = useState(0)

    const handleClick = useCallback(()=>{
  
        console.log("Button clicked")

    },[value])

    return(
        <div>
            <h2>Count:{count}</h2>
            <h2>Value:{value}</h2>
            <button onClick={()=>setCount(count+1)}>increCount</button>
            <button onClick={()=>setValue(value+1)}>increValue</button>
            <ChildComponent handleClick={handleClick}/>
        </div>
    )
}

export default ParentComponent