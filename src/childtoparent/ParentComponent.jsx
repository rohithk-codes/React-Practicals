
import React, { useState,useEffect} from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const [childData,setChildData] = useState()

    const childToParent=(data)=>{
        setChildData(data)
    }

  return (
    <div>

        <h2>{childData}</h2>
      
      <ChildComponent childToParent={childToParent}/>

    </div>
  )
}

export default ParentComponent
