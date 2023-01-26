import React from 'react'
import Form from './Form';

const Set = (props) => {
 
  
 
  return (
    <div>
      <Form/> 
       {/* {name.map((Todo)=>{
    <h2 name={Todo}  key={Todo.id} value={name}>{name.val}</h2>
  })} */}
  <h1>{props.name}</h1>
    </div>
  )
}


export default Set;