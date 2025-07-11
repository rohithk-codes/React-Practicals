import { forwardRef } from "react"

const Child = forwardRef((_,ref)=>{

    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default Child