import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full  object-cover opacity-100  ' src={props.img} alt='image '></img>
        <RightCardContent tag= {props.tag}id={props.id} color={props.color} intro={props.intro}/>
    </div>
  )
}

export default RightCard