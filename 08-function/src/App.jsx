import React from 'react'

const App = () => {

  // function inputChanging (val){
  //   console.log(val);
    
  // }

  // return (
  //   <div>
  //     <input onChange={function(elem){
  //       inputChanging(elem.target.value)
  //     }} 
  //     placeholder='Enter Name '
  //     type='text'
  //      />

  //   </div>
  // )


  const pageScrolling =(val)=>{
    console.log('speed',val);
    
  }



  return(
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      <div  className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )



}

export default App