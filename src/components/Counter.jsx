
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,reset } from "../slice/CounterSlice"


const counter = ()=>{

    const value = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (
       <div>
        <h1>Counter:{value}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
       </div>
    )
}

export default counter