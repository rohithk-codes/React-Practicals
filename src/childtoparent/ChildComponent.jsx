import React from 'react'

const ChildComponent = ({childToParent}) => {

   
  return (
    <div>
      <h1>Child</h1>
    <input type="text" onChange={(e)=>childToParent(e.target.value)} />
    </div>
  )
}

export default ChildComponent
