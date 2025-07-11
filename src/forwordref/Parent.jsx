import React,{useRef} from "react"
import Child from './Child.jsx'



const Parent = ()=>{

    const inputRef = useRef()
    const focus =()=>{
     inputRef.current.style.backgroundColor = "green"
    }

    return(
        <>
        <Child ref ={inputRef}/>
       <button onClick={focus}>focus</button>
        </>
    )

}

export default  Parent