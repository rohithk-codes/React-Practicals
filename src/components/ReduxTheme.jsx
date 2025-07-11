import { useDispatch, useSelector } from "react-redux"
import { toggletheme } from "../reduxslice/ThemeSlice"


const  themeSwitch = ()=>{

    const theme = useSelector((state)=>state.theme.mode)
    const dispatch = useDispatch()

    return (
        <div style={{textAlign:"center",margin:"20px"}}>
            <h2>Theme:{theme}</h2>
       <button onClick={()=>dispatch(toggletheme())}>toggleThem</button>
        </div>
    )
}

export default themeSwitch