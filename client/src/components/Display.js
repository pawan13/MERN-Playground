import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  const {display} = useSelector((state)=>state.data)
  return (
    <div>
   <ul>
    {
      display.map((item, i)=>
        <li>{item}</li>
      )
    }
   </ul>
    </div>
  )
}

export default Display
