import React, { useState } from 'react'

export const Statefun = () => {
   const [count,setCount]=useState(0);


  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count-1)}>-</button>
        
    </div>
  )
}
export default Statefun;