import React,{useEffect, useState} from 'react'
import '../Css/SignIn.css'
import { Link } from "react-router-dom";

const SignIn = () => {
const [image,setImage]=useState('')
const [name,setName]=useState('')
const [checkSignIn,setCheckSignIn]=useState(false)
const SaveLogin = localStorage.getItem("LogIn");
  const Image = JSON.stringify(window.localStorage.getItem('image'))
  //add image function
const onImageChange=(e)=>{
    setImage(e.target.files[0])
    const file = e.target.files[0];
    const reader = new FileReader();

 reader.onload = () => {
  localStorage.setItem('image', reader.result);
};
reader.readAsDataURL(file);
}
const Signin = () => {
    if(name && image){
        localStorage.setItem("saveinfo", JSON.stringify({name}));
        localStorage.setItem("LogIn", JSON.stringify(true));
    }else {
      setCheckSignIn(true)
    }
}

useEffect(()=>{
  return 
})
console.log(image.File)
  return (
    <div className='SignIn'>
        <form className='form'>
            <h1 className='getStarted'>Get Started</h1>
            <h3 className='addAphoto'>add a photo</h3> 
           
           <label for="files" className="addimage" title=" ">
            {image? <img src={URL.createObjectURL(image)} style={{width:'100px',height:'100px', borderRadius:'50%',position:'absolute',right:'20px'}}/>: <input   type="file" onChange={onImageChange} />}
               </label>
              
            <h3 className='nametxt'> Fill in you Name</h3>
            <input type='text' className='nameInput' onChange={(e)=>setName(e.target.value)}/>
           <p className='requiredtext'>Please fill in all fields.</p>
            {SaveLogin ? <Link to={'/todoList'}> <button className='signInbtn'  onClick={Signin}> Sign In</button></Link>:<button className='signInbutton'  onClick={Signin}> Sign In</button>}     
        </form>
    </div>
  )
}

export default SignIn;