import React,{useState} from 'react'
import '../Css/SignIn.css'
import { Link } from "react-router-dom";
import addImage from '../images/addPhoto.png'
const SignIn = () => {
const [image,setImage]=useState('')
const [name,setName]=useState('')
  const Image = JSON.stringify(window.localStorage.getItem('image'))
  //add image function
const onImageChange=(e)=>{
    setImage(e.target.files[0])
    const file = e.target.files[0];
    const reader = new FileReader();
  console.log(e.target.value);
 reader.onload = () => {
  localStorage.setItem('image', reader.result);
};
reader.readAsDataURL(file);
}
const Signin = () => {
    if(name && image){
        localStorage.setItem("saveinfo", JSON.stringify({name}));
        localStorage.setItem("LogIn", JSON.stringify(true));
    }
}
console.log(image.File)
  return (
    <div className='SignIn'>
        <form className='form'>
            <h1 className='getStarted'>Get Started</h1>
            <h3 style={{position:'absolute',left:'40%',top:'30%'}}>add a photo</h3> 
           <div className='imagesection'>
           <label for="files" className="addimage">
            {image? <img src={URL.createObjectURL(image)} style={{width:'50px',height:'44px',}}/>: <input   type="file" onChange={onImageChange}/>}
               </label>
               


              </div>
            <h3 className='nametxt'> Fill in you Name</h3>
            <input type='text' className='nameInput' onChange={(e)=>setName(e.target.value)}/>
            {name && image ?   <Link to={'/todoList'}> <button className='signIn'  onClick={Signin}> Sign In</button></Link>: <button className='signIn'  onClick={SignIn}> Sign In</button>}
           
        </form>
    </div>
  )
}

export default SignIn;