import React, { useState } from 'react'
import {X} from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask = [...task];  //pehle ka data lene k liye task me jo h 
    copyTask.push({title,details})
    setTask(copyTask)
    // console.log(task);
    
    
    console.log(title,details);
    setDetails('')
    setTitle('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    // console.log(copyTask[idx]);
    copyTask.splice(idx,1)
    setTask(copyTask);
    
  }


  return (
    <div className='h-screen p-10   bg-black text-white lg:flex'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 gap-4 flex-col  items-start '>

        <h1 className='text-xl font-bold'>Add Notes</h1>
        {/* pehla input for heading  */}
        <input 
          type='text' 
          placeholder='Enter Notes Heading '
          className='px-5 py-2 border-2 rounded w-full outline-none font-medium '
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        {/* detailed input  */}
        <textarea 
          type='text'
          placeholder='Write Details'
          className='px-5 py-2 h-32 border-2 rounded w-full outline-none font-medium'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}  
        />
        <button 
              className= 'active:bg-gray-300 active:sca bg-white text-black px-5 py-2 rounded w-full outline-none font-medium'
              >Add Note

        </button>

        <img className='h-52' src=''></img>
      </form>
      <div className=' flex-wrap   lg:w-1/2 lg:border-l-2 lg:ml-5 p-10 bg'>
        <h1 className='text-xl font-bold'>Recent Notes</h1>
        <div className='overflow-auto h-full flex flex-wrap gap-5 mt-5 items-start justify-start'>
            {task.map(function(elem,idx){
              return <div  key={idx} className='flex flex-col justify-between items-start relative h-52 w-50 bg-cover rounded-2xl  bg-[url("https://imgs.search.brave.com/xYaNHdhIR-sRax7-yEOykKlMuiR6oNjBtqK98dRCEWM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MjEzLzQ3My9zbWFs/bC9wZGlnaXRhbC1z/dGlja3ktbm90ZXMt/cG5nLnBuZw")] text-black py-8 px-6 pb-8'>
                {/* <h2 className='absolute top-5 right-5 bg-red-500 rounded-full p-1 text-xs'><X /></h2> */}
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='text-l  leading-tight font-medium text-gray-700'>{elem.details}</p>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='cursor-pointer active:scale-95 w-full  bg-red-600 text-white py-1 text-xs rounded font-bold'>Delete </button>
              </div>
            })}
       </div>
      </div>
    </div>
  )
}

export default App;