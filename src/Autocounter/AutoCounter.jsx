

import React, { useEffect, useState } from "react";

function Autocounter() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    let interval
    if (mode === "increment") {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else if (mode === "decrement") {
      interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [mode]);

  const handleincrement=()=>setMode('increment')
  const handledecrement=()=>setMode('decrement')
  const handlereset=()=>{
    setMode(null)
    setCount(0)
  }
  return <div>
 <h1>{count}</h1>
 <button onClick={handleincrement}>increment</button>
 <button onClick={handlereset}>reset</button>
 <button onClick={handledecrement}>decrement</button>
  </div>;
}

export default Autocounter;