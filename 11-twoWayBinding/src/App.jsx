import React, { useState } from 'react'

function App() {

  const [title, setTitle] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault() //page refresh nhi hoga 
    console.log("form submited by  ",title);
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}  >
        <input type='text' 
         placeholder='Enter Your name '
         value={title}
         onChange={(e)=>{
          // console.log(e.target.value) // n, seinput ki value k liye 
          setTitle(e.target.value)
         }} />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App