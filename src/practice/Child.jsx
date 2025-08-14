import React from "react"; 


const child = ({variable})=>{

console.log("child render")
    return (  <p>variable:{variable}</p> 
)

}


export default React.memo(child)