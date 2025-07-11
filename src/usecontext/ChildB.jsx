import React, { useContext } from 'react'
import { UserContext } from './Parent'

const ChildB = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>userddd:{user}</h1>
    </div>
  )
}

export default ChildB
