import { memo } from "react"
const ChildComponent = memo(({handleClick})=>{
console.log("child rendered")
    return (
<button onClick={handleClick}>click me</button>
    )
})

export default ChildComponent