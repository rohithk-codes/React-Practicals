import { useReducer } from "react"


function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
      case "Reset" :
        return {count:0}
  }
}



const Counter = ()=>{
    const [state,dispatch] = useReducer(reducer,{count:1})


    return (
        <div>
            <h1>Count:{state.count}</h1>
            <button onClick={()=>dispatch({type:"Increment"})}>Incre</button>
            <button onClick={()=>dispatch({type:"Decrement"})}>Decre</button>
        </div>
    )

}

export default Counter