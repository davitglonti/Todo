import React from 'react'
import GroupIMG from '../images/Group.png'
import {Link} from 'react-router-dom'
import '../Css/landing.css'
const landing = () => {
  return (
    <div className='landingBox'>
      <img src={GroupIMG} className='groupIMG'/>
      <h1 className='landingtext'>Keep Track Of Daily Tasks in Life</h1>
      <Link to="/SignIn">
      <button className='landingBtn'>Get Started</button></Link>
    </div>
  )
}

export default landing