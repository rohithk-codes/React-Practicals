import { useEffect, useState } from "react"


const WindowComponent = ()=>{

    const[width,setWidth] =useState(window.innerWidth);
    const[height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize)
        console.log("event listener added")

        return()=>{
            window.removeEventListener("resize",handleResize);
            console.log("Event listener removed")
        }
    },[])

    useEffect(()=>{
        document.title = `size:${width} x ${height}`

    },[width,height])

    function handleResize(){
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)

    }

    return(
        <>
        <p>window width:{width}px</p>
        <p>window Height:{height}px</p>
        </>
    )
}

export default WindowComponent