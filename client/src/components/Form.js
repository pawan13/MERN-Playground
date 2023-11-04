import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setDisplay} from './DisplaySlice'

const Form = () => {

  const dispatch = useDispatch()
  const [str, setStr] = useState("")
  const handleOnChange=(e)=>{
    const{value} = e.target
    setStr(value)
  }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        dispatch(setDisplay(str))
    }
  return (
    <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange}required/>
        <button>Submit</button>
    </form>
    
  )
}

export default Form
