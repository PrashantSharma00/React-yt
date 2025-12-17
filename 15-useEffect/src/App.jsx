import React, { useEffect, useState } from 'react'

export const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  // jab koi state change hoga tab use effect chlega 
  useEffect(function(){
    console.log('use effect is running...');
    
  },[num])  //jab jab num change hoga tab tab ye chlega 
  return (
    <div>
      <h2>{num}</h2>
      <h2>{num2}</h2>
      <button onClick={()=>{
        setnum(num+1)
      }}>click</button>
      <button onClick={()=>{
        setnum2(num2+2)
      }}></button>
    </div>
  )
}
