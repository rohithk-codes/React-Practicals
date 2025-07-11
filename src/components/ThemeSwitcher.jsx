import { useDispatch, useSelector } from "react-redux"
import { toggleThem } from "../slice/ThemeSlice"


const ThemSwitcher = ()=>{

    const theme = useSelector((state)=>state.theme.mode)
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(toggleThem())
    }

    return(
        <div style={{textAlign:"center",margin:"20px"}}>
            <h2>Current:{theme}</h2>
           <button onClick={()=>dispatch(toggleThem())}>Toggle</button>
        </div>
        
    )
}

export default ThemSwitcher