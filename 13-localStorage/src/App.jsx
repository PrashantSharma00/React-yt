import React, { use } from 'react'

const App = () => {
  // for clear localStorage
  localStorage.clear();

  //session Storage clear
  sessionStorage.clear();

  // set data in localStorage
  localStorage.setItem('user','sarthak') 
  const age = localStorage.setItem('age','18')

  // get the value from localStorage 
  const User = localStorage.getItem('user');

  //romve the items from local storage 
  localStorage.removeItem('age')
  // localStorage.removeItem('user')/

  const user ={
    name:'heena  ',
    age:20,
    city:"banglore  "
  } 

  // local storage me data hamesha string format me save hota h .
  
  localStorage.setItem('user',JSON.stringify(user))

  const exitingData = JSON.parse(localStorage.getItem('user'));
  exitingData.push(user);

  localStorage.setItem(JSON.stringify(exitingData));



  // jab is data ko localstorage se get krenge to data string format me milega , to use object format me convert krne k liye JSON.parse  ka use krenge .For example >
  

  const newUser = JSON.parse(localStorage.getItem('user'))
  console.log(newUser)

  return (
    <div>{User}</div>
  )
}

export default App