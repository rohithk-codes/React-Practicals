
import { CounterContext } from "./CounterContext"
import { useContext } from "react"

const Child = ()=>{

    const {count,increment,decrement,reset} = useContext(CounterContext)

return(
    <>
    <h1>Count:{count}</h1>
    <button onClick={increment}>incre</button>
    <button onClick={decrement}>decre</button>
    <button onClick={reset}>reset</button>
    </>
)

}

export default Child