import React from 'react'
import Card from './components/Card';

const App = () => {
  return (
    <div className='parent'>
      <Card user='prashant' age ={21} about='i am prashant sharma' img='https://imgs.search.brave.com/7JrzMo0rgp9kM7IGRVtkHAHMk3DhpBRCMLgjQAVtwvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NTA5NjQxMy9waG90/by9uZXctc2lnbi13/aXRoLWxpZ2h0LWJ1/bGJzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1UdkY5dGZV/c184MmZTaXZvMmJa/d0NmbGlrODZDdWZ2/U2hlV3ZOWmdkblQ0/PQ' />
      <Card  user= 'sachin' age ={22} about='' img='https://imgs.search.brave.com/7JrzMo0rgp9kM7IGRVtkHAHMk3DhpBRCMLgjQAVtwvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NTA5NjQxMy9waG90/by9uZXctc2lnbi13/aXRoLWxpZ2h0LWJ1/bGJzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1UdkY5dGZV/c184MmZTaXZvMmJa/d0NmbGlrODZDdWZ2/U2hlV3ZOWmdkblQ0/PQ'/>
    </div>
  )
}

export default App;