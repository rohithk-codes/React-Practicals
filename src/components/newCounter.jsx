import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,reset } from "../newslice/CounterSlice"


const counterComponent = ()=>{


    const value = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()


    return(
        <>

        <h1>value:{value}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        
        
        </>
    )


}

export default counterComponent