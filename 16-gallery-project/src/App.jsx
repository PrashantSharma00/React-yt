import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index,setIndex] = useState(1)

  const getData = async()=>{
    // console.log('data aa gya ');
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    console.log(response.data);
    setUserData(response.data)
  }

  useEffect(function(){
    getData();
  },[index])

// translate se loading button center me dikhai degi ;
  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold '>Loading...</h3>;

  if (userData.length>0){
    printUserData = userData.map(function(elem,idx){
        return <div key={idx}>
          <Card elem={elem}></Card>
        </div>
    })
  }

  return (
    <div className='bg-black overflow-auto text-white h-screen p-4'>
          <div className='flex flex-wrap gap-2 p-2 h-[82%]'>
          {printUserData}
          </div>
          <div className='flex justify-center items-center gap-6 p-4'>
            <button 
            style={{opacity:index==1 ? 0.5 :1}}
             onClick={()=>{
              if(index>1){
                setIndex(index-1)
                setUserData=([])
              }
            }} className='bg-amber-600 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold' >Prev</button>

            <h2>page {index}</h2>
            <button onClick={()=>{
              setIndex(index+1)
              setUserData=([])
            }} className='bg-amber-600 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
          </div>cursor-pointer active:scale-95
    </div>
  )
}

export default App