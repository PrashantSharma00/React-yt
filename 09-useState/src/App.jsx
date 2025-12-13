import React from 'react'
import { useState } from 'react'

const App = () => {


  // const [count, setcount] = useState(0)

  // function increase(){
  //   setcount(count+1)
  // }
  //  function Decrease(){
  //   if(count>0){
  //     setcount(count-1);
  //   }
  // }
  // return (
  //   <div>
  //     <h1>count is {count}</h1>
  //     <button onClick={increase} className='button' >Increase </button>
  //     <button onClick={Decrease} className='button'>Decrease</button>
  //   </div>
  // )   


  // const [num, setnum] = useState({user:"harsh",age:20})

  // const btnClicked =()=>{
  //   const newNum= {...num};
  //   newNum.user="tony";
  //   newNum.age= 30;
  //   setnum(newNum);
  // }

  const [num, setnum] = useState([10,20,30])

  const btnClicked =()=>{
    const newNum= [...num];
    
    setnum(prev=>([...num,20]));
  }

  return(
    <div>
      <h1>{num} </h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )

}

export default App