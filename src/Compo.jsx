import { useEffect, useState } from "react"

const Component = ()=>{

    const [count,setCount] = useState(0)
    const [mode,setMode] = useState(null)

    useEffect(()=>{
   let interval 
        if(mode=='icrement'){
            console.log("ddddd")
            interval = setInterval(()=>{
                
                setCount((prev)=>prev+1)
            },1000)
        }else if(mode ==='decrement'){
            interval= setInterval(()=>{
                setCount(prev=>prev-1)
            },1000)
        }
       return ()=> clearInterval(interval)
    },[mode])


const handleinc = ()=>setMode("icrement")
const handledec = ()=>setMode("decrement")
const reset = ()=>{
    setMode(null)
    setCount(0)
}

    return(
        <div>
          <h1>count={count}</h1>
            <button onClick={handleinc}>incre</button>
            <button onClick={handledec}>decre</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}

export default Component