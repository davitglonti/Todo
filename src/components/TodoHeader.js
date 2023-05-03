import React from 'react'
import '../Css/TodoHeader.css'
const TodoHeader = ({name}) => {
  const image = localStorage.getItem('image');
   
   
  return (
    
    <div className='todoheader'>
        <div>
         <h1 className='todoheadertxt'>To Do</h1>
        </div>
        <div >
            <h1 className='todoheaderName'>{name}</h1> 
        </div>
      
    </div>
    
  )
}

export default TodoHeader