import React from 'react'
import axios from 'axios'

const App = () => {

  // // get data using fetch (async- await )>
  //  async function getData (){
  //  const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //  console.log(response);
  //  }


  // OR


    // const getData =async ()=>{
    // const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const data = await response.json()
    // console.log(data);
    
    // }


  //  get data using axios >
  
 const getData= async()=>{
  //  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //  console.log(response);
  //  console.log(response.data);

  //  ya fir 

  const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   console.log(data);
      
 }

  return (

    <div>
      <button onClick={getData}>Get Data </button>
    </div>
  )
}

export default App