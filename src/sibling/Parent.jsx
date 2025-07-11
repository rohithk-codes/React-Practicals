import { useState } from "react"
import SiblingOne from "./SiblingOne"
import SiblingTwo from "./siblingTwo"



const Parent = ()=>{

    const [message,setMessage] = useState("")

    return(
        <>
         <SiblingTwo message={message}/>
        <SiblingOne setMessage={setMessage}/>
        </>
       
    )
}

export default Parent