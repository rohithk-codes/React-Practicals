

import React from 'react'

const SiblingOne = ({setMessage}) => {
  return (
    <div>
      <button onClick={()=>setMessage("hello from sibling One")}>setMessage</button>
    </div>
  )
}

export default SiblingOne
