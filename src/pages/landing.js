import React from 'react'
import GroupIMG from '../images/Group.png'
const landing = () => {
  return (
    <div className='landingBox'>
      <img src={GroupIMG} className='groupIMG'/>
      <h1 className='landingtext'>Keep Track Of Daily Tasks in Life</h1>
    </div>
  )
}

export default landing