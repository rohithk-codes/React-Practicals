
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,reset } from "../reduxslice/CounterSlic"
import { use } from "react"

const counter = ()=>{

    const value = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>

            <h2>value:{value}</h2>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>increment</button>
            <button onClick={()=>dispatch(reset())}>increment</button>
            
        </div>
    )
}


export default counter
