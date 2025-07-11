

import React,{useState} from 'react'
import Child from './Child.jsx'

const Parent = () => {

    const [count,setCount] = useState(0)
    const [variable,setVariable] = useState(1)

  return (
    <div>
      <button onClick={()=>setVariable(variable+1)}>variable:{variable}</button>
      <button onClick={()=>setCount(count+1)}>count:{count}</button>
      <Child variable={variable}/>
    </div>
  )
}

export default Parent
