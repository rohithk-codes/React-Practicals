import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
    
    const [value,setValue] = useState(0)
    const [count,setCount] = useState(0)

   

  return <>
  <h2>value:{value}</h2>
  <h2>count:{count}</h2>
  <button onClick={()=>setCount(c=>c+1)}>count</button>
  <button onClick={()=>setValue(c=>c+1)}>val</button>
  <Child variable={value}/>
  </>;
};

export default Parent
