import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
        
        <div className='card'>
            <img src={props.img}></img>
            <h1> {props.user}{props.age }</h1>
            <p>{props.about} </p>
            <button> submit </button>
      </div>
  )
}

export default Card