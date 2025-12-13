import React from 'react'

function App() {

  const submitHandler =(e)=>{
    e.preventDefault() //page refresh nhi hoga 
    console.log(e);
    
    console.log("form submited ");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}  >
        <input type='text' placeholder='Enter Your name '/>
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App