
import React,{memo} from "react"
const Child = ({variable})=>{

console.log("child rendered")
    return(
        <div>
    <p>varible:{variable}</p>
        </div>
    )
}

export default  React.memo(Child)