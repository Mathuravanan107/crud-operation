import React, { useState } from 'react'
import Set from './Set';

const Form = () => {
  const [name,setName]=useState()
  const usename=(event)=>{
      setName(event.target.value)
  }
  // const [pass,setPass]=useState()
  // const usepass=(event)=>{
  //   setPass(event.target.value)
  // }
  
  return (
    <>
     <form>
        <input type="text" value={name} usename={usename.event()}></input>
        <button>Click</button>
    </form>
    <Set />
    </>
  )
}

export default Form