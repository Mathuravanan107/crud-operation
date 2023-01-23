import React, { useState } from 'react'
import Set from './Set';

const Form = () => {
  const [name,setName]=useState([])
  const usename=(event)=>{
      setName(event.target.value)

  }
  // const [pass,setPass]=useState()
  // const usepass=(event)=>{
  //   setPass(event.target.value)
  // }
  const Myfunction=(e)=>{
    e.preventDefault()
    console.log(name)
     let id=1;
     if(name.length>0 ){
        id=name[0].id+1
     }
     let bel={id:id,name:name}
     let val=[bel,...name]
     setName(val);
  }
  
  return (
    <>
     <form onSubmit={Myfunction}>
        <input type="text" value={name} placeholder='Name' onChange={(event)=>usename(event)}></input>
          {/* <input type="password" value={pass} placeholder='password' onChange={(event)=>usepass(event)}></input>  */}
        <button>Click her</button>
        {/* <button type='submit' onClick={ashandltbtn}>Delete</button> */}
    </form>
    {name.map((Todo)=>{
      return <Set name={Todo} key={Todo.id}/>
    })}
    </>
  )
}

export default Form